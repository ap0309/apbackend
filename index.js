//import dotenv from dotenv
import 'dotenv/config'
import express from "express";
const app = express();
const port = process.env.port || 3000
app.get('/' , (req,res) =>{
    res.send('Server is Ready')
})
app.get('/jokes' , (req,res)=>{
    const  jokes = [
        {id: 1,
         title : `Joke 1`,
         content: `this is joke`
        },
        {id: 2,
         title : `Joke 2`,
         content: `this is joke`
        },
        {id: 3,
         title : `Joke 3`,
         content: `this is joke`
        },
        {id: 4,
         title : `Joke 4`,
         content: `this is joke`
        },
        {id: 5,
         title : `Joke 5`,
         content: `this is joke`
        }
    ];
    res.send(jokes);
})
app.listen(port , ()=>{
    console.log(`Listening on port ${port}`)
})
// const gitdata = {
//   "login": "ap0309",
//   "id": 126902793,
//   "node_id": "U_kgDOB5BiCQ",
//   "avatar_url": "https://avatars.githubusercontent.com/u/126902793?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/ap0309",
//   "html_url": "https://github.com/ap0309",
//   "followers_url": "https://api.github.com/users/ap0309/followers",
//   "following_url": "https://api.github.com/users/ap0309/following{/other_user}",
//   "gists_url": "https://api.github.com/users/ap0309/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/ap0309/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/ap0309/subscriptions",
//   "organizations_url": "https://api.github.com/users/ap0309/orgs",
//   "repos_url": "https://api.github.com/users/ap0309/repos",
//   "events_url": "https://api.github.com/users/ap0309/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/ap0309/received_events",
//   "type": "User",
//   "user_view_type": "public",
//   "site_admin": false,
//   "name": "AyushPatel_03",
//   "company": null,
//   "blog": "",
//   "location": null,
//   "email": null,
//   "hireable": null,
//   "bio": "Hello",
//   "twitter_username": null,
//   "public_repos": 13,
//   "public_gists": 0,
//   "followers": 2,
//   "following": 4,
//   "created_at": "2023-03-03T16:59:18Z",
//   "updated_at": "2025-05-29T11:18:47Z"
// }
// app.get('/' , (req,res) =>{
//     res.send('Hello Ayush')
// })
// app.get('/ap',(req,res)=>{
//     res.send("<h2>Code karo DSA karo </h2>")
// })

// app.get('/github',(req , res)=>{
//     res.json(gitdata);
// })