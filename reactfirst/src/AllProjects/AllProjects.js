import { IconBrandGithubFilled, IconBrandInstagramFilled, IconBrandLinkedinFilled, IconBrandXFilled, IconBrandYoutubeFilled } from '@tabler/icons-react';
import { allproject } from '../Data/experienceData';
import './AllProject.css';
function AllProjects(){
    return<div id="">
         <div className="container !bg-transparent">

{
    allproject.map((project,index)=>
        <div className="card">
    <div class="img-container">
      <img src={`${project.image}.png`} alt="data"/>
    </div>
    <div class="card-details">
      <div className='text-2xl font-semibold text-Brightsun-400'>{project.project}</div>
      <p className='font-serif'>{project.description}</p>
      <div className='flex justify-around text-Brightsun-400 pt-10'>
        <a href='https://www.linkedin.com/in/ramakanta-gahan-ba8852215/'><IconBrandLinkedinFilled className='h-8 w-8 hover:cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out'/></a>
        <a href='https://github.com/RJRAMAKANT'><IconBrandGithubFilled className='h-8 w-8 hover:cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out'/></a>
        <a href='https://www.instagram.com/_code_island/'><IconBrandInstagramFilled className='h-8 w-8 hover:cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out'/></a>
        <a href='https://www.youtube.com/channel/UCKyxk3n5bQg9OL-zZdOTGkQ'><IconBrandYoutubeFilled className='h-8 w-8 hover:cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out'/></a>
        <a href='https://x.com/rj_ramakant'><IconBrandXFilled className='h-8 w-8 hover:cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out'/></a>
    
    </div>
    </div>
   
  </div>
    )
}

   {/* <div class="card">
    <div class="img-container">
      <img src="http://santoshg.com/codepen/thor_card.jpg" alt=""/>
    </div>
    <div class="card-details">
      <h2>Thor</h2>
      <p>In Germanic mythology, Thor (/θɔːr/; from Old Norse: Þórr) is a hammer-wielding god associated with thunder, lightning, storms, oak trees, strength, the protection of mankind and also hallowing and fertility. Besides Old Norse Þórr, extensions of the god occur in Old English as Þunor and in Old High German as Donar (runic þonar ᚦᛟᚾᚨᚱ).</p>
    </div>
  </div>
   <div class="card">
    <div class="img-container">
      <img src="http://santoshg.com/codepen/ant_man.png" alt=""/>
    </div>
    <div class="card-details">
      <h2>Ant Man</h2>
      <p>Ant-Man is the name of several fictional superheroes appearing in books published by Marvel Comics. Created by Stan Lee, Larry Lieber and Jack Kirby, Ant-Man's first appearance was in Tales to Astonish #35 (September 1962).</p>
    </div>
  </div>
   <div class="card">
    <div class="img-container">
      <img src="http://santoshg.com/codepen/Dr_Strange.jpg" alt=""/>
    </div>
    <div class="card-details">
      <h2>Dr. Strange</h2>
      <p>Doctor Stephen Strange is a fictional superhero appearing in American comic books published by Marvel Comics. Created by artist Steve Ditko and writer Stan Lee,[1] the character first appeared in Strange Tales #110 (cover-dated July 1963). Doctor Strange serves as the Sorcerer Supreme.</p>
    </div>
  </div>
   <div class="card">
    <div class="img-container">
      <img src="http://santoshg.com/codepen/captain_america.jpg" alt=""/>
    </div>
    <div class="card-details">
      <h2>Captain America</h2>
      <p>Captain America is a fictional superhero appearing in American comic books published by Marvel Comics. Created by cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics.</p>
    </div>
  </div>
   <div class="card">
    <div class="img-container">
      <img src="http://santoshg.com/codepen/black_widow.jpg" alt=""/>
    </div>
    <div class="card-details">
      <h2>black widow</h2>
      <p>Black Widow appears in a relaunched ongoing series by writer Nathan Edmondson and artist Phil Noto. The first issue debuted in January 2014. In October 2015, it was announced that Mark Waid and Chris Samnee would be launching a new Black Widow series for 2016 as part of Marvel's post-Secret Wars relaunch.</p>
    </div>
  </div> */}
  </div>
    </div>

}
export default AllProjects;