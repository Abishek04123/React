import logo from './WhatsApp Image 2023-07-14 at 19.19.29.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className = 'main'>
        <div className='maintext'>
        <i><h1>About Me</h1></i>
        <i><h2>Abishek R</h2></i>
        <i><b><p>Artificial Intelligence and Data Science</p></b></i>
        </div>
        <div className='img_div'><img src={logo} alt='me'></img></div>
    </div>

    <div className='container'>

    <div className = 'education'>
      <ul>
          <u><b><h3>Education:</h3></b></u>
          <li>10th - Alagar Public School</li>
          <li>12th - P. Obul Reddy Public School</li>
          <li>UG - Kumaraguru College of Technology</li>
      </ul>
    </div>

    <div className='skills'>
      
      <ul>
          <u><b><h3>Skills:</h3></b></u>
          <li>Python</li>
          <li>Machine Learning</li>
          <li>Data Science</li>
          <li>Html</li>
          <li>Css</li>
      </ul>
    </div>

    <div className='hobby'>
      <ul>
          <u><b><h3>Hobbies:</h3></b></u>
          <li>Cricket</li>
          <li>Watching Movies</li>
          <li>Video Games</li>
      </ul>
    </div>

    <div className='contact'>
      
      <ul>
              <u><b><h3>Contact Me:</h3></b></u>
              <li><a href="https://www.linkedin.com/in/abishek-r-a01588226" target="_blank">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/_mr_perfect_guy_/" target="_blank">Instagram</a></li>
              <li><a href="https://github.com/Abishek04123" target="_blank">Github</a></li>
      </ul>   
    </div>

    </div>

    <div class = "box_2">
        <div class = "box_2_items"><p>Project 1</p></div>
        <div class = "box_2_items"><p>Project 2</p></div>
        <div class = "box_2_items"><p>Project 3</p></div>
    </div>

    </div>
  );
}

export default App;
