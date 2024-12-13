import React, { useState , useEffect } from 'react';
import axios from 'axios'; // Assuming you're using Axios for API calls
import './SherExplanationsChat.css'
import Header from './Header';
import Footer from './Footer';

function SherExplanationsChat() {
  const [couplet, setCouplet] = useState('');
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState(() => localStorage.getItem('selectedLanguage') || 'urdu');
  const [sher,setSher]=useState('')
  const [showImprovementInput, setShowImprovementInput] = useState(false);
  const [improvementHint, setImprovementHint] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setSher('');
    setResponse(null); // Clear previous response
    try {
      const result = await axios.post('https://rekhtalabs.org/get_sher_explanation', { couplet ,language});
      setResponse(result.data); // Update with the new response
    } catch (error) {
      console.error('Error fetching explanation:', error);
    } finally {
      setIsLoading(false);
      setSher(couplet);
    }
  };

  const handleImprovementSubmit = async () => {
    // Assuming `couplet` and `language` states are still needed for context
    const postData = {
      couplet,
      language,
      improvementHint, // Include the improvement hint in the request
    };

    try {
      setIsLoading(true); // Reuse the existing loading state
      setSher('');
      const result = await axios.post('https://rekhtalabs.org/get_sher_explanation', postData);
      setResponse(result.data); // Update with the new response
      setShowImprovementInput(false); // Hide the input field after submission
      setImprovementHint(''); // Clear the input field after submission
    } catch (error) {
      console.error('Error posting improvement hint:', error);
    } finally {
      setIsLoading(false);
      setSher(couplet);
    }
  };

  useEffect(() => {
    localStorage.setItem('selectedLanguage', language);
  }, [language]);
  

  return (
    <div className='page-wrapper'>
    <Header title='Tashriih' subtitle='AI assisted sher explanations'/>
      
    <div className='overall-wrapper'>
        
        <div className='form-container'>
        <form onSubmit={handleSubmit}>
        <div className='select-container'>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="urdu">Urdu</option>
              <option value="hindi">Hindi</option>
              <option value="english">English</option>
              {/* Add more languages as needed */}
            </select>
          </div>
          <div className='textarea-container'>
            <textarea
              
              value={couplet}
              onChange={(e) => setCouplet(e.target.value)}
              placeholder="Enter a couplet"
              aria-label="Enter a couplet"
              rows="6"
              cols="100"
            />
          </div>
          <div className='button-container'>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      {isLoading && <div className="loader"></div>}

      {response && (
        <div className='response-wrapper'>
          <div className='couplet'>
            <h2>
              {sher.split('\n').map((line, index, array) => (
                <React.Fragment key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </React.Fragment>
              ))}

            </h2>
          </div>
        
          <div className='glossary'>
          <ol>
            {response.glossary.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ol>            

        </div>

        <div className='tags'>
          <h3>Tags</h3>
            {response.tags.join(', ')}
        </div>
        


        <h3>Tashriih</h3>
        <div className='explanation'>
          {response.explanation.split('\n').map((part, index) => (
            <p key={index}>{part}</p>
          ))}
        </div>

        <button onClick={() => setShowImprovementInput(!showImprovementInput)}>Improve Tashriih</button>
      {showImprovementInput && (
        <div>
          <input 
            type="text" 
            value={improvementHint} 
            onChange={(e) => setImprovementHint(e.target.value)}
            placeholder="Enter improvement hint"
          />
          <button onClick={handleImprovementSubmit}>Submit</button>
        </div>
      )}

        <h3>English Transcreation</h3>
        <div className='transcreation'>
          {response.english_transcreation.replace('\\n','\n').split('\n').map((part, index) => (
            <React.Fragment key={index}>
              {part}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
      
      )}
    </div>
    <Footer/>
    </div>
  );
}

export default SherExplanationsChat;
