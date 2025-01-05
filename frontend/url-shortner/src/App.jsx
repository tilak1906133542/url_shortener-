import React from 'react';
import ShortenUrl from './components/ShortenUrl';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">URL Shortener</h1>
        <p className="description">
          Transform your lengthy URLs into short, shareable links. Simplify your digital sharing process with ease!
        </p>
      </header>

      <main className="main-content">
        <section className="info-section">
          <h2>Why Use a URL Shortener?</h2>
          <ul>
            <li>Easier to share on social media or messaging apps.</li>
            <li>Better tracking and analytics for your links.</li>
            <li>Improves user experience by avoiding clutter.</li>
          </ul>
        </section>

        <section className="how-it-works">
          <h2>How Does It Work?</h2>
          <p>
            1. Paste a long URL in the input box below. <br />
            2. Click "Shorten URL" to generate a unique short link. <br />
            3. Share the generated short link, and anyone clicking it will be redirected to the original URL.
          </p>
        </section>

        <ShortenUrl />
      </main>

      <footer className="footer">
      
  <p>Developed by [Tilak]</p>
  <p><strong>Skills:</strong></p>
  <ul>
    <li><strong>MERN Stack Development:</strong> 
      Proficient in MongoDB, Express.js, React.js, Node.js. Experienced with building REST APIs, state management using Redux, and implementing secure authentication (JWT, OAuth).
    </li>
    <li><strong>Frontend Tools & Frameworks:</strong> 
      Hands-on experience with Bootstrap, Material-UI, Tailwind CSS, and responsive web design.
    </li>
    <li><strong>Backend Development:</strong> 
      Experience with Node.js frameworks like Express.js and handling APIs. Strong knowledge of middleware, routing, and database integrations.
    </li>
    <li><strong>Data Analysis & Visualization:</strong> 
      Expertise in Python (pandas, NumPy, matplotlib, seaborn), Power Query, and DAX for analyzing and visualizing data.
    </li>
    <li><strong>SQL & Database Management:</strong> 
      Experience with SQL (MySQL, PostgreSQL) for querying and database design. Skilled in MongoDB for NoSQL databases.
    </li>
    <li><strong>Machine Learning (Basics):</strong> 
      Familiarity with scikit-learn for simple regression, classification models, and exploratory data analysis.
    </li>
    <li><strong>Tools & Software:</strong> 
      Power BI, Tableau, Jupyter Notebook, VS Code, Git/GitHub, and Excel (Advanced Functions, Pivot Tables).
    </li>
    <li><strong>Programming Languages:</strong> 
      Proficient in JavaScript, Python, SQL, and beginner-level Java.
    </li>
  </ul>
  <p>Let's connect on LinkedIn or GitHub to know more about my work!</p>


      </footer>
    </div>
  );
}

export default App;

