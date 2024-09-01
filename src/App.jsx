import React, { useState } from 'react'

const App = () => {

  const [cmd, setcmd] = useState('');

  // get .env's data 
  const NODE = import.meta.env.VITE_APP_NODE;
  const VSCODE = import.meta.env.VITE_APP_VSCODE;
  const CHROME = import.meta.env.VITE_APP_CHROME;
  const WINRAR = import.meta.env.VITE_APP_WINRAR;
  const MOUSE = import.meta.env.VITE_APP_MOUSE;
  const GIT = import.meta.env.VITE_APP_GIT;

  const open = ()=>{
    if (cmd === ''){
      return;
    }

    if (cmd === NODE){
      const nodefile = 'node-v20.17.0-x64.msi'
      const li = document.createElement('li');
      const ul = document.getElementById('uom');
       ul.appendChild(li);
       li.innerHTML = 'node is installing!'
      setcmd('');

      const link = document.createElement('a');
      document.body.appendChild(link);
      link.href = nodefile;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);


       return
    }
    if (cmd === VSCODE){
      const nodefile = 'VSCodeUserSetup-x64-1.92.2.exe';
      const li = document.createElement('li');
      const ul = document.getElementById('uom');
       ul.appendChild(li);
       li.innerHTML = 'vscode is installing!'
      setcmd('');

      const link = document.createElement('a');
      document.body.appendChild(link);
      link.href = nodefile;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);


       return
    }
    if (cmd === CHROME){
      const nodefile = 'ChromeSetup.exe';
      const li = document.createElement('li');
      const ul = document.getElementById('uom');
       ul.appendChild(li);
       li.innerHTML = 'chrome is installing!'
      setcmd('');

      const link = document.createElement('a');
      document.body.appendChild(link);
      link.href = nodefile;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);


       return
    }
    if (cmd === WINRAR){
      const nodefile = 'winrar-x64-701.exe';
      const li = document.createElement('li');
      const ul = document.getElementById('uom');
       ul.appendChild(li);
       li.innerHTML = 'winrar is installing!'
      setcmd('');

      const link = document.createElement('a');
      document.body.appendChild(link);
      link.href = nodefile;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);


       return
    }
    if (cmd === GIT){
      const nodefile = 'Git-2.46.0-64-bit.exe';
      const li = document.createElement('li');
      const ul = document.getElementById('uom');
       ul.appendChild(li);
       li.innerHTML = 'git is installing!'
      setcmd('');

      const link = document.createElement('a');
      document.body.appendChild(link);
      link.href = nodefile;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);


       return
    }
    if (cmd === MOUSE){
      const nodefile = 'macos_cursors_for_windows_by_antiden_dblsn0e.zip';
      const li = document.createElement('li');
      const ul = document.getElementById('uom');
       ul.appendChild(li);
       li.innerHTML = 'mouse is installing!'
      setcmd('');

      const link = document.createElement('a');
      document.body.appendChild(link);
      link.href = nodefile;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);


       return
    }
    



    const li = document.createElement('li');
    const ul = document.getElementById('uom');
     ul.appendChild(li);
    li.innerHTML = (`${cmd} is not cammand!`);
    li.style.color = 'red';
    setcmd('');
  }

  return (
    <div className="page">
      <div className="card">
        <div className="image">
        <img src="hayee.jpg" alt="" />
        </div>
        <div className="container">
          <div className="header">
            <h1>MR HAYEE'S CAMMAND LINE</h1>
          </div>
          <div className="home">
            <ul id='uom'></ul>
          </div>
          <div className="chat">
            <input type="text" 
            placeholder='Enter Your Cammand'
            value={cmd}
            onKeyDown={(e)=>{
              if (e.key === 'Enter'){
                open();
              }
            }}
            onChange={(e)=>{
              setcmd(e.target.value);
            }}
            />
            <button onClick={open}>CMD</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App


// c:\Users\MR HAYEE\Downloads\winrar-x64-701.exe
// c:\Users\MR HAYEE\Downloads\macos_cursors_for_windows_by_antiden_dblsn0e.zip