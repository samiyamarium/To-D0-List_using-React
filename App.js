
//import logo from './logo.svg';
import Print from './Print';
import './App.css';
import ques from './q.jfif';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div className="disp"><header><li>Samiya Marium</li><li>student at GIAIC</li></header></div> */}
        <div className="disp"><p className="disp">Created by &nbsp;&nbsp; <b>Samiya Marium</b></p> <p className="disp">Student at GIAIC</p></div>
        <img src={ques} className="App-logo" alt="logo" /><br/>
        
        <p className="tasks" >
         <b> Fill out your To-Do List!!</b>
        </p>
        <div>
          <ol className="tasks">
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
            <li><label>Enter task &nbsp;</label><input type="text"/><input type="checkbox"/></li><br/>
          </ol>
<Print />
        </div>
    
        
      </header>
     <a href="mailto:samiya8@gmail.com" className="linkk" >Contact</a>
    </div>
  );
}

export default App;
