const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3006;
// Enable CORS for all routes
app.use(cors());
// Serve the HTML file
app.use(express.static(path.join(__dirname, 'public')));
// Define the '/james' route
app.get('/james', (req, res) => {
  const JamesData = {
    name: 'James Presley',
    school: 'Pickerington Central',
    gradYear: 2020,
    profilePic: 'https://plus.unsplash.com/premium_photo-1689629870780-5d0e655383e6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8MHwwfHx8MA%3D%3D',
    schoolPic: 'https://images.unsplash.com/photo-1621501744628-6b0413614492?q=80&w=3948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  };
  res.json(JamesData);
});

// Define the '/james' route
app.get('/filmon', (req, res) => {
    const filmonData = {
      name: 'Filmon Abraha',
      school: 'Walnut Ridge High School',
      gradYear: 2003,
      profilePic: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
      schoolPic: 'https://images.unsplash.com/photo-1561330046-5d7e53492f23?q=80&w=3948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    };
    res.json(filmonData);
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// const express = require('express')
// const app = express()
// const port = 3000
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// //app.get('/james', (req, res) => {
//     //res.send('This is james route!');
//  // });
// app.get('/james', (req, res) => {
//     const jamesData ={
//         name: 'James Presley',
//         school: 'Pickerington Central',
//         gradYear: 2020,
//         profilePic:'',
//         schoolPic:'',
//       }
//        res.json(jamesData);
    
//   });
//  // app.get('/filmon', (req, res) => {
//     //res.send('This is Filmon route!');
// //});
// app.get('/filmon',(req, res)=> {
//     const filmonData ={
//       name: 'Filmon',
//       school: '?',
//       gradYear: '?',
//       profilePic:'',
//       schoolPic: '',
//     }
//      res.json(filmonData);
//   });
//   app.get('/absara',(req, res)=> {
//     const absaraData ={
//       name: 'Absara Kidanemariam',
//       school: 'Csn',
//       gradYear: 2016,
//       profilePic:'',
//       schoolPic: '',
//     }
//      res.json(absaraData);
//   });
//   app.get('/miracle',(req, res)=> {
//     const miracleData ={
//       name: 'Miracle Mathis',
//       school: 'Reynoldsburg High School',
//       gradYear: 2011,
//       profilePic:'',
//       schoolPic: '',
//     }
//      res.json(miracleData);
//   });
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
