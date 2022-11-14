import React, { useState, useEffect } from 'react'
import './assets/css/style.css'


function App() {

  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => { setUsers(data), setFiltered(data) })
  }, []);

  const selectName = (name) => {
    let temp = users.find(e => e.username === name);
    setFiltered([temp]);
  };

  const selectMail = (email) => {
    let temp = users.find(e => e.email === email);
    setFiltered([temp]);
  };

  const selectSuite = (suite) => {
    let temp = users.filter(e => e.address.suite.includes(suite));
    setFiltered([...temp]);
  };

  const selectApartment = (apt) => {
    let temp = users.filter(e => e.address.suite.includes(apt));
    setFiltered([...temp])
  };


  return (
    <>
      <div className="app">
        <div className="filters">

          <select name="name" id="name" onChange={(e) => selectName(e.target.value)}>
            <option value="Choose name" defaultChecked>
              Choose name
            </option>
            {
              users.map(e => (
                <option value={e.username} key={e.id}>
                  {e.username}
                </option>
              ))
            }
          </select>

          <select name="email" id="email" onChange={(e) => selectMail(e.target.value)}>
            <option value="Choose email" defaultChecked>
              Choose email
            </option>
            {
              users.map(e => (
                <option value={e.email} key={e.id}>
                  {e.email}
                </option>
              ))
            }
          </select>

          <div className="inp">
            <label htmlFor="suite"> Suite </label>
            <input type="text" name="suite" id="suite" onChange={(e) => selectSuite(e.target.value)} />
          </div>

          <div className="inp">
            <label htmlFor="apt"> Apt </label>
            <input type="text" name="apt" id="apt" onChange={(e) => selectApartment(e.target.value)}/>
          </div>

        </div>
        <div className="users">
          {
            filtered.map(e => (
              <div className="user" key={e.id}>
                <h5>
                  {e.name}
                </h5>
                <span>
                  {e.username}
                </span>
                <span>
                  {e.email}
                </span>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App