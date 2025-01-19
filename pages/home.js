import React from 'react';
import profilePic from '../assets/profile.jpg'; 

const Home = () => (
  <div className="home-container">
    {/* Landing Section */}
    <div className="landing-section">
      <div className="landing-text">
        <h1>Hi, I'm Shubam Bonik</h1>
        <p>
          A passionate web developer focused on creating modern, responsive, and user-friendly
          applications. Welcome to my portfolio!
        </p>
        <a href="#about" className="btn">Learn More</a>
      </div>
      <div className="landing-image">
        <img src={profilePic} alt="Profile" />
      </div>
    </div>

    {/* About Section */}
    <div id="about" className="section">
      <h2>About Me</h2>
      <p>
        I’m a developer who loves crafting innovative solutions. My journey started with an
        interest in coding and has grown into a passion for web development. Based in Dimapur, Nagaland, I specialize in Web Development, aiming to deliver impactful projects.
      </p>
    </div>

    
    <div id="family" className="section">
      <h2>My Family</h2>
      <p>
        My family is my greatest support system. I come from a close-knit family of Three members - My Father(Shibu Bonik) and my Mother(Anjana Bonik)
        who have always inspired me to achieve my goals.
      </p>
    </div>

    <div id="contributions" className="section">
      <h2>My Contributions</h2>
      <p>
        Giving back to society is a key part of my journey. I have actively participated in
        initiatives like  environmental campaigns and rally of "No Tobacco Day"
      </p>
    </div>

    
    <div id="education" className="section">
      <h2>My Education</h2>
      <p>
        I  am currently persuing a degree in Bachelors in Computer Application from Assam Down Town University. I will be gratuated in 2026 . I am completed my schooling from St. Thomas Higher Secondary School , Dimapur , Nagaland.
      </p>
    </div>

    <div id="hobbies" className="section">
      <h2>My Hobbies</h2>
      <p>
        Apart from coding, I love Drawing, playing ukullele, photography, and Cricket
        . These hobbies keep me inspired and motivated in life.
      </p>
    </div>
  </div>
);

export default Home;
