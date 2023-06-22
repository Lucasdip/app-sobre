import logo from './logo.svg';
import './App.css';
import './index.css';

import Header from './components/Header';
import section from './components/section';
import ListItem from './components/ListItem';
import Section from './components/section';


const gamesListData = [
 {
  url:"https://www.twitch.tv/directory/game/League%20of%20Legends",
  imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
  alt:"Imagem do jogo",
 },

 {
  url:"https://www.twitch.tv/directory/game/VALORANT",
  imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
  alt:"Imagem do jogo",
 },
 {
  url:"https://www.twitch.tv/directory/game/Minecraft",
  imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
  alt:"Imagem do jogo",
 },
 {
  url:"https://www.twitch.tv/directory/game/The%20Elder%20Scrolls%20V%3A%20Skyrim%20-%20Special%20Edition",
  imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/1050003477_IGDB-144x192.jpg",
  alt:"Imagem do jogo",
 }
]

const channelListData = [

{
  url: "https://www.twitch.tv/maykbrito",
  imageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
  alt:"Imagem",
},
  

{
  url: "https://www.twitch.tv/rocketseat_oficial",
  imageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/32092d00-2638-422d-8a24-c609354e8a9d-profile_image-70x70.png",
  alt:"Imagem",
},

{
  url: "https://www.twitch.tv/chillhopradio",
  imageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/510625d7-d199-49bd-bb73-dac4c2a7bd44-profile_image-70x70.png",
  alt:"Imagem",
}
]

const socialListDate = [
  {
    url:"https://www.instagram.com/lucas.lim.ma/",
    imageUrl:"/assets/Instagram.svg",
    alt:"img social"

  },
  {
    url:"https://api.whatsapp.com/send/?phone=5588997237001&text&type=phone_number&app_absent=0",
    imageUrl:"/assets/Whatsapp.svg",
    alt:"img social"

  },
  {
    url:"https://github.com/Lucasdip",
    imageUrl:"/assets/Github.svg",
    alt:"img social"

  },{
    url:"https://www.linkedin.com/in/lucasdip/",
    imageUrl:"/assets/Linkedin.svg",
    alt:"img social"

  },
  
]

function App() {
  return (
    <div className="App">
      <Header/>
     
      <main>
     
     
      <Section 
      title=" Meus Jogos"
      subtitle=" Os games que eu mais curto jogar"
      className="games-list">
      

     {
      gamesListData.map(function(item) {
         return ( <ListItem 
          url={item.url} 
          imageUrl={item.imageUrl}
          alt={item.alt} 
          
        />
         )
          
      } 
      )
     }
     </Section>
      
  
  
  <Section
     title="Canais e streamers"
     subtitle="Lista de canais que não perco"
     className="channel-list">
           {
      channelListData.map(function(item) {
         return ( <ListItem 
          url={item.url} 
          imageUrl={item.imageUrl}
          alt={item.alt} 
          
        />
         )
          
      } 
      )
     }
     

     
     
     </Section> 
    
     <Section
     title="Minhas redes sociais"
     subtitle="Se conecte comigo!"
     className="social-list">
           {
      socialListDate.map(function(item) {
         return ( <ListItem 
          url={item.url} 
          imageUrl={item.imageUrl}
          alt={item.alt} 
          
        />
         )
          
      } 
      )
     }
     

     
     
     </Section> 
    
     
      </main>
    </div>
  
  );
    }


export default App;
