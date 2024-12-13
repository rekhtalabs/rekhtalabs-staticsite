import React from 'react';
// Import CSS for styling
import './ArchivePage.css';
import Header from './Header';
import Footer from './Footer';

const ArchivePage = () => {
  return (
    <>
    <Header 
      title ="Archive"
      subtitle='Resources related to Urdu Linguistics'
    />

    <div className="archive-page">

      <div className="papers-section">
        <h2>Papers</h2>
        <p>The following research papers (not published by us) are useful to understand what we are trying to do:</p>
        <ol>
            <li><a href="https://www.researchgate.net/profile/Muhammad-Yaseen-Khan/publication/344364530_Edit_Distance-based_Search_Approach_for_Retrieving_Element-wise_ProsodyRhymes_in_Hindi-Urdu_Poetry/links/5fbf987ea6fdcc6cc669fdc8/Edit-Distance-based-Search-Approach-for-Retrieving-Element-wise-Prosody-Rhymes-in-Hindi-Urdu-Poetry.pdf" target="_blank" rel="noopener noreferrer"> Edit Distance-based Search Approach for Retrieving Element-wise Prosody Rhymes in Hindi-Urdu Poetry </a></li>
            <li><a href="https://arxiv.org/ftp/arxiv/papers/2107/2107.14587.pdf" target="_blank" rel="noopener noreferrer">Urdu & Hindi Poetry Generation using Neural Networks</a></li>
            <li><a href="https://aclanthology.org/C12-1152.pdf" target="_blank" rel="noopener noreferrer">Noun Group and Verb Group Identification for Hindi</a></li>
            <li><a href="https://www.ias.ac.in/article/fulltext/sadh/045/0246" target="_blank" rel="noopener noreferrer">Computing prosody to detect the Arud meter in Punjabi Ghazal</a></li>
            <li><a href="https://www.semanticscholar.org/paper/Urdu-word-sense-disambiguation-using-machine-Abid-Habib/036773ee10266851a471fbcb89c9e161b0ee3590" target="_blank" rel="noopener noreferrer">Urdu word sense disambiguation using machine learning approach</a></li>
        </ol> 
      </div>
       {/* Books Section */}
       <div className="books-section">
        <h2>Some Useful Books and other resources</h2>
        <p>Explore essential readings on Urdu language and prosody among other resources.</p>
        
        <h4>Books on Urdu Language and Prosody</h4>
        <ol>
    <li>
    <div>
    <a href="http://www.columbia.edu/itc/mealac/pritchett/00ghalib/meterbk/00_intro.html" target="_blank" rel="noopener noreferrer">  Urdu Meter</a> (English) - FW Pritchett and KA KHaliq 
    <p>Excellent resource in English for an introduction to Urdu Prosody. Especially useful for people who appreciate the precision and conciseness of expression used in academia and Mathematics.</p>
    </div>
    </li>
    <li>
    <div>
    <a href="https://www.rekhta.org/ebooks/detail/ahang-aur-arooz-kamal-ahmad-siddiqi-ebooks" target="_blank" rel="noopener noreferrer">Aahang aur Aruuz</a> (Urdu) - KA Siddiqi
    <p>For Urdu readers, an excellent introductory book, which deals with the subject matter in depth but in a witty and inviting way.</p>
    </div>
    </li>
    <li>
        <div>
        <a href="https://www.rekhta.org/ebooks/detail/aasan-arooz-dr-azam-ebooks" target="_blank" rel="noopener noreferrer">Asaan Aruuz </a> (Hindi) - Dr Aazam
        <p>Introduction to Urdu prosody, in Devanagari. Dives into learning straightaway without fussing about the possibly confusing Arabic terminology.</p>
        </div>
    </li>
    <li><div>
        <a href="https://www.rekhta.org/ebooks/sher-e-shor-angez-volume-001-shamsur-rahman-faruqi-ebooks-2" target="_blank" rel="noopener noreferrer">Sher-e-Shor Angez</a> (Urdu) - SR Faruqi
        <p>Chapter 8. Behr-e-Meer. Discusses in greater detail the nuiances of indic meters.</p>
        </div></li>
    <li><div>
        <a href="https://www.rekhta.org/ebooks/detail/arooz-aahang-aur-bayan-shamsur-rahman-faruqi-ebooks" target="_blank" rel="noopener noreferrer">Arooz Aahang aur Bayaan</a> (Urdu) - SR Faruqi
        <p>Chapter 6. Taskeen e Ausat ke Asraar.</p>
        </div></li>
    <li><div>
        <a href="https://www.rekhta.org/ebooks/detail/gazal-ki-babat-vinus-kaisari-ebooks" target="_blank" rel="noopener noreferrer">Gazal ki Baabat</a> (Hindi) - V Kaisari
        <p>Another easy to understand yet detailed book on Urdu Prosody in Devanagari.</p>
        </div></li>
    </ol>

      </div>

      {/* Videos Section */}
      <div className="videos-section">
        <h2>Videos</h2>
        <ol>
            <li>
            <a href="https://www.youtube.com/watch?v=QMcAWpf3mG8&list=PLCTGa9vfQ95Zp7pNC6woJkSonGrsuxp-a" target="_blank" rel="noopener noreferrer">Ilm-e-Arooz playlist </a> Youtube  - Bhatnagar Shaadaab
                <p>In this playlist on YouTube titled "Ilm-e-Arooz" by Bhatnagar Shaadaab, you can find over 500 minutes of highly informative video content in classical style. The playlist is available on the Rekhta YouTube channel and provides a detailed exploration of the topic. Highly recommended.</p>
            </li>
            <li>
                    <a href="https://www.youtube.com/watch?v=whPimNQSbVA" target="_blank" rel="noopener noreferrer">Aruuz Masterclass</a> Youtube  - Dr Aazam
                <p>If you're interested in enhancing your knowledge of ghazal writing, we highly recommend checking out "Arooz - A Masterclass on Ghazal Writing" by Dr. Azam. This masterclass is packed with valuable information and insights into the art of ghazal writing. The session was held at Jashn-e-Rekhta 2022 and is definitely worth watching if you're a fan of this poetic form.</p>
            </li>
        </ol>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default ArchivePage;
