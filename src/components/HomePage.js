import React from 'react';
import './HomePage.css'; 
import ProjectCard from './ProjectCard.js';
import projects from '../ProjectsData.js';
import Header from './Header.js';
import Footer from './Footer.js';
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div className="app">
      <Header 
        title ="RekhtaLabs"
        subtitle="Technology solutions for Indic Languages"
      />


      <main>

      
        <section className="introduction">
          {/* <p>Computer science for Urdu poetry</p> */}
          {/* <p>RekhtaLabs is the research wing of the Rekhta Foundation. We research topics at the intersection of Indic languages and computer programming. </p> */}
        </section>
        
        <section className="projects main-sections">
          <div className='section-title'>Tools</div>
          <div className="projects-container">
            {projects.map((project) => (
              <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
            />
            ))}
          </div>
        </section>

        <section className="nlp-indic-languages main-sections">
          <div className='section-title'>NLP for Indic Languages</div>
         
          <p>
            We are exploring available options like iNLTK, urduhack, indic-nlp etc., and simultanesouly trying to develop our own components 
            for stemming, tokenizing, POS tagging, Lemma Generation etc. customised for indic languages using Rekhta and RekhtaDictionary repositories.
          </p>
          <p>
            Some of the problems we are trying to solve are:
          </p>
          <ul>
            <li>Urdu text disambiguation, i.e., guessing the missing diacitrics based on context (e.g., mai.n vs me.n in Urdu)</li>
            <li>Transfer learning using Rekhta Repositories</li>
            <li>Grammar check, next word prediction, alternate word suggestions based on Meter</li>
            <li>Context aware transliteration and translation engines</li>
            <li>Generating word-networks and wordmaps</li>
            <li>Identifying themes (mazmuun) in Poetry, finding clash of themes, sentiment analysis</li>
          </ul>
            
          <p>
              We welcome collaboration on these projects. We are working with some universities, researchers and NLP experts. 
              Interested? <a href='https://www.rekhta.org/contact-us'>Contact</a> us!
          </p>
        </section>
  
        <section className="archive-resources main-sections">
          <div className='section-title'>Archive of Resources</div>
          <p>A curated collection of papers, books, and resources referenced for our work on NLP and Indic languages is now accessible at the <Link to='/archive'>archive</Link> page.</p>
        </section>
            
      </main>
      <Footer/>
    </div>
  );
}

export default HomePage;
