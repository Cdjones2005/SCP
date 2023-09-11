function hideChange(list) {
	for (x in list) {
		x.classlist.toggle("change");
	}
}

function popup() {
	Win = open("", "Popup", "width='100',height='100'");

	var data = "<!DOCTYPE html>";
	data += "<html>";
	data += "<title>HTML Tutorial</title>";
	data += "<body>";
	data += "<h1>This is a heading</h1>";
	data += "<p>This is a paragraph.</p>";
	data += "</body>";
	data += "</html>";

	Win.document.write(data);
}

function Hardware() {
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	var data = '<div class="wrapper" style="margin-top: 5%;">';
	data += '<div id="side">';
	data += 	'<ul class="navbar-nav" style="text-align: center;">';
	data +=			'<li class="nav-item">';
	data +=				'<a href="#" class="tab nav-link" onclick=Hardware()>Intro</a>';
	data +=			'</li>';
	data +=			'<li class="nav-item">';
	data +=				'<a href="#" class="tab nav-link" onclick=Motherboard()>Motherboard</a>';
	data +=			'</li>';
	data +=			'<li class="nav-item">';
	data +=				'<a href="#" class="tab nav-link" onclick=CPU()>CPU</a>';
	data +=			'</li>';
	data +=			'<li class="nav-item">';
	data +=				'<a href="#" class="tab nav-link" onclick=Memory()>Memory</a>';
	data +=			'</li>';
	data +=			'<li class="nav-item">';
	data +=				'<a href="#" class="tab nav-link" onclick=GPU()>GPU</a>';
	data +=			'</li>';
	data +=			'<li class="nav-item">';
	data +=				'<a href="#" class="tab nav-link" onclick=Cooling()>Cooling</a>';
	data +=			'</li>';
	data +=			'<li class="nav-item">';
	data +=				'<a href="#" class="tab nav-link" onclick=Resources()>Resources</a>';
	data +=			'</li>';
	data += 	'</ul>';
	data += '</div>';
	data += '<div id="content">';
	data += 	'<h1>Introuction to Hardware</h1>';
	data += 	'<div class="container">';
	data += 		'<div class="row">';
	data += 			'<div class=col-6><img class="fit" src="Images/Hardware1.png"><br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/XfkJvpZ6tRE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>';
	data += 			'<div class=col-6><p>Hardware is the physical components of a computer. They can range from storage drives to the CPU. Hardware will run the computer’s processes such as browsing the web or even running programs such as a calculator. The big takeaway is that hardware is the physical components that determines your pool of processing power.</p></div>';
	data += 		'</div>';
	data += 	'</div>';
	data += '</div>'
	data += '</div>';

	document.getElementById("main").innerHTML = data;
}

function Motherboard() {
	var data;
	data = 	'<h1>Motherboard</h1>';
	data += 	'<div class="container">';
	data += 		'<div class="row">';
	data += 			'<div class=col-6><img class="fit" src="Images/Hardware2.png"></div>';
	data += 			'<div class=col-6><p>The motherboard can be referred to as a “Bus” and it connects all of the components in a computer together. The motherboard allows for the parts to communicate to each other and work together. The three main components that are attached directly to the motherboard are Memory, GPU and CPU. <br> *A bus referred to a “lane” of communication (basically a wire) between to parts of a computer*</p></div>';
	data += 		'</div>';
	data += 	'</div>';

	document.getElementById("content").innerHTML = data;
}

function CPU() {
	var data;
	data = 	'<h1>CPU</h1>';
	data += 	'<div class="container">';
	data += 		'<div class="row">';
	data += 			'<div class=col-6><img class="fit" src="Images/Hardware3.png"></div>';
	data += 			'<div class=col-6><p>The CPU (Central Processing Unit) is considered the “brain” of a computer, which processes information. It works closely with the RAM and GPU to gather data and output information to the screen. It also process other information that is necessary to keep the computer functioning as intended. </p></div>';
	data += 		'</div>';
	data += 	'</div>';

	document.getElementById("content").innerHTML = data;
}

function Memory() {
	var data;
	data = 	'<h1>Memory</h1>';
	data += 	'<div class="container">';
	data += 		'<div class="row">';
	data += 			'<div class=col-6><img class="fit" src="Images/Hardware4.png"></div>';
	data += 			'<div class=col-6><p>Memory essentially stores data. Typically the closer to the CPU the memory is, the faster it is, therefore a hard drive is significantly slower than RAM (Random Access Memory) on the motherboard.<br><br>Proximity means everything<br><br>RAM is volatile as when the computer loses power, it does not retain the informationHard drives or Solid State Storage devices are typically nonvolatile, so they will retain their information, even if the power gets cut</p></div>';
	data += 		'</div>';
	data += 	'</div>';

	document.getElementById("content").innerHTML = data;
}

function GPU() {
	var data;
	data = 	'<h1>Memory</h1>';
	data += 	'<div class="container">';
	data += 		'<div class="row">';
	data += 			'<div class=col-4><img class="fit" src="Images/Hardware5.png"></div>';
	data += 			'<div class=col-4><p>A Graphics Processing Unit is fairly similar in concept to what a CPU can do, however this accelerator is more specialized, meaning it can do some functions the CPU can also do, but faster, though the GPU cannot do most other operations which the CPU can do, this in turn allows for the card to render games extraordinarily quick and can allow for games to be rendered within milliseconds.</p></div>';
	data +=				'<div class=col-4><img class="fit" src="Images/Hardware6.png"></div>';
	data += 		'</div>';
	data += 	'</div>';

	document.getElementById("content").innerHTML = data;
}

function Cooling() {
	var data;
	data = 	'<h1>Cooling</h1>';
	data += 	'<div class="container">';
	data += 		'<div class="row">';
	data += 			'<div class=col-6><img class="fit" src="Images/Hardware7.png"></div>';
	data += 			'<div class=col-6><p>A computer will always need cooling if it were to run fast, the “heartbeat” of a computer is its clock speed, or how fast the CPU runs, but one major issue with the clock speed is that its directly proportional to the amount of heat it will give off, hence the necessity of beefy cooling</p></div>';
	data += 		'</div>';
	data += 		'<div class="row">';
	data += 			'<div class=col-3><img class="fit" src="Images/Hardware8.png"></div>';
	data += 			'<div class=col-3><p>Passive cooling tends to refer to the idea of not using any fans or other techniques to cool, think using a sheet of metal and outside air to cool</p></div>';
	data += 			'<div class=col-3><img class="fit" src="Images/Hardware9.png"></div>';
	data += 			'<div class=col-3><p>Active cooling refers to the idea of using fans, or something which requires power for cooling</p></div>';
	data += 		'</div>';
	data += 	'</div>';

	document.getElementById("content").innerHTML = data;
}

function Software() {
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	var data = '<div class="wrapper" style="margin-top: 5%;">';
	data += '<div id="side">';
	data += 	'<ul class="navbar-nav" style="text-align: center;">';
	data +=			'<li class="nav-item">';
	data +=				'<a href="#" class="tab nav-link" onclick=Software()>Intro</a>';
	data +=			'</li>';
	data +=			'<li class="nav-item">';
	data +=				'<a href="#" class="tab nav-link" onclick=Life()>Life of a Program</a>';
	data +=			'</li>';
	data +=			'<li class="nav-item">';
	data +=				'<a href="#" class="tab nav-link" onclick=Languages()>Languages</a>';
	data +=			'</li>';
	data +=			'<li class="nav-item">';
	data +=				'<a href="#" class="tab nav-link" onclick=Compiler()>Compiler</a>';
	data +=			'</li>';
	data +=			'<li class="nav-item">';
	data +=				'<a href="#" class="tab nav-link" onclick=OS()>Operating System</a>';
	data +=			'</li>';
	data +=			'<li class="nav-item">';
	data +=				'<a href="#" class="tab nav-link" onclick=Libraries()>Libraries</a>';
	data +=			'</li>';
	data +=			'<li class="nav-item">';
	data +=				'<a href="#" class="tab nav-link" onclick=IDE()>IDE</a>';
	data +=			'</li>';
	data +=			'<li class="nav-item">';
	data +=				'<a href="#" class="tab nav-link" onclick=Resources()>Resources</a>';
	data +=			'</li>';
	data += 	'</ul>';
	data += '</div>';
	data += '<div id="content">';
	data += 	'<h1>Introuction to Software</h1>';
	data += 	'<p>Software is what allows hardware to function. Software is the code that people write that tells a computer what to do and how to do it. Without software a computer would not be able to function in the slightest. Software can be written by anyone and is openly available for public use. Everything you do on a computer from turning it on to opening a Google tab was programmed by someone.</p><br><iframe width="560" height="315" src="https://www.youtube.com/embed/XfkJvpZ6tRE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
	data += 	'<img class="fit" src="Images/Software0.png">';
	data += '</div>'
	data += '</div>';

	document.getElementById("main").innerHTML = data;
}

function Life() {
	var data;
	data = 	'<h1>Life of a Program</h1>';
	data += 	'<div class="container">';
	data += 		'<div class="row">';
	data += 			'<div class="col-12"><img class="fit" src="Images/Software1.png"></div>';
	data += 		'</div>';
	data += 	'</div>';

	document.getElementById("content").innerHTML = data;
}

function Languages() {
	var data;
	data = 	'<h1>Languages</h1>';
	data += 	'<div class="container">';
	data += 		'<div class="row">';
	data += 			'<div class="col-2"><img class="fit" src="Images/Software2.png"></div>';
	data += 			'<div class="col-2"><img class="fit" src="Images/Software3.png"></div>';
	data += 			'<div class="col-2"><img class="fit" src="Images/Software4.png"></div>';
	data += 			'<div class="col-6"><p>Programming Languages enable a person to write something which can be legible to the developer but can be processed into something the computer can read and use.</p></div>';
	data += 		'</div>';
	data += 	'</div>';

	document.getElementById("content").innerHTML = data;
}

function Compiler() {
	var data;
	data = 	'<h1>Compiler</h1>';
	data += 	'<div class="container">';
	data += 		'<div class="row">';
	data += 			'<div class=col-4><img class="fit" src="Images/Software5.png"></div>';
	data += 			'<div class=col-4><p>A program which converts a higher level language, like C into machine language, of which is useable to the computer. Compilers convert the program into assembly.</p></div>';
	data +=				'<div class=col-4><img class="fit" src="Images/Software6.png"></div>';
	data += 		'</div>';
	data += 	'</div>';

	document.getElementById("content").innerHTML = data;
}

function OS() {
	var data;
	data = 	'<h1>Operating Systems</h1>';
	data += 	'<div class="container">';
	data += 		'<div class="row">';
	data += 			'<div class=col-6><img class="fit" src="Images/Software7.png"></div>';
	data +=				'<div class=col-6><p>Operating systems are the a piece of software which can be thought of as something which runs between the user and the hardware of the computer, all programs which are running on the computer rely on the operating system to get something done</p></div>';
	data += 		'</div>';
	data += 	'</div>';

	document.getElementById("content").innerHTML = data;
}

function Libraries() {
	var data;
	data = 	'<h1>Libraries</h1>';
	data += 	'<div class="container">';
	data += 		'<div class="row">';
	data += 			'<div class=col-4><img class="fit" src="Images/Software8.png"></div>';
	data += 			'<div class=col-4><p>A Library can be considered as a program someone else wrote for you to include or use within your own program, they can be incredibly helpful as they can make your code easier to digest and can reduce the time taken to program and the total execution time.</p></div>';
	data +=				'<div class=col-4><img class="fit" src="Images/Software9.png"></div>';
	data += 		'</div>';
	data += 	'</div>';

	document.getElementById("content").innerHTML = data;
}

function IDE() {
	var data;
	data = 	'<h1>IDE</h1>';
	data += 	'<div class="container">';
	data += 		'<div class="row">';
	data += 			'<div class=col-6><img class="fit" src="Images/Software10.png"></div>';
	data +=				'<div class=col-6><p>An Integrated Development Environment is software which can be used to build applications, some contain powerful features. It typically consists of a Source Code Editor, Local Build Automation, and a Debugger.</p></div>';
	data += 		'</div>';
	data += 	'</div>';

	document.getElementById("content").innerHTML = data;
}

function GameDesign() {
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	var data = '<div class="wrapper" style="margin-top: 5%;">';
	data += '<div id="side">';
	data += 	'<ul class="navbar-nav" style="text-align: center;">';
	data +=			'<li class="nav-item">';
	data +=				'<a href="#" class="tab nav-link" onclick=GameDesign()>Intro</a>';
	data +=			'</li>';
	data +=			'<li class="nav-item">';
	data +=				'<a href="#" class="tab nav-link" onclick=D()>2D vs 3D</a>';
	data +=			'</li>';
	data +=			'<li class="nav-item">';
	data +=				'<a href="#" class="tab nav-link" onclick=LorePlot()>Lore and Plot</a>';
	data +=			'</li>';
	data +=			'<li class="nav-item">';
	data +=				'<a href="#" class="tab nav-link" onclick=Build()>Build</a>';
	data +=			'</li>';
	data +=			'<li class="nav-item">';
	data +=				'<a href="#" class="tab nav-link" onclick=Level()>Level Design</a>';
	data +=			'</li>';
	data +=			'<li class="nav-item">';
	data +=				'<a href="#" class="tab nav-link" onclick=Launch()>Launch</a>';
	data +=			'</li>';
	data +=			'<li class="nav-item">';
	data +=				'<a href="#" class="tab nav-link" onclick=PostLaunch()>Post Launch</a>';
	data +=			'</li>';
	data +=			'<li class="nav-item">';
	data +=				'<a href="#" class="tab nav-link" onclick=Resources()>Resources</a>';
	data +=			'</li>';
	data += 	'</ul>';
	data += '</div>';
	data += '<div id="content">';
	data += 	'<h1>Introduction to Game Design</h1>';
	data += 	'<p>Game design is the process in which a developer or team of developers will create a video game. It has many steps such as level design, gameplay mechanics, lore and world building, story crafting and stylization. These are just a few of the complicated but fun process of game design. <br> One of the nicest things about working on game design is that you get to work as a team. Working as a team will allow you to complete the process more easily and make it more fun and creative. So it is highly recommended you work with other people for building the game or to give feedback.</p>';
	data += '</div>'
	data += '</div>';

	document.getElementById("main").innerHTML = data;
}

function D() {
	var data;
	data = 	'<h1>2D vs 3D</h1>';
	data += 	'<div class="container">';
	data += 		'<div class="row">';
	data +=				'<div class="col-12"><p>The first thing you need to do is decide what kind of game you are thinking about creating. Some of the things to consider are 2D vs 3D, the perspective you use to view the game, the visual style, and the game mechanics. I will now describe a few games and explain what they all do differently to give you a better idea of what I am referring to.</p></div>';
	data += 		'</div>';
	data += 	'</div>';
	data += 	'<div class="container">';
	data += 		'<div class="row">';
	data +=				'<div class="col-6"><p>The game Mario Kart is a 3D racing game and they use a cartoony style for the characters and the tracks they drive on. The colorful palette of the game allows it to be easily identified as Mario Kart and is not easily replaceable by a game like Garfield Kart.</p></div>';
	data += 			'<div class="col-6"><img src="Images/Game1.png"></div>';
	data += 		'</div>';
	data += 	'</div>';
	data += 	'<div class="container">';
	data += 		'<div class="row">';
	data += 			'<div class="col-6"><img src="Images/Game2.png"></div>';
	data +=				'<div class="col-6"><p>Style can also be different animation styles such as pixel art versus highly detailed realistic worlds which can both be great depending on the game. So really in this step you visualize what kind of game you want it to be.</p></div>';
	data += 		'</div>';
	data += 	'</div>';

	document.getElementById("content").innerHTML = data;
}

function LorePlot() {
	var data;
	data = 	'<h1>Lore and Plot</h1>';
	data += 	'<div class="container">';
	data += 		'<div class="row">';
	data += 			'<div class=col-12><img class="fit" src="Images/Game3.png"></div>';
	data +=				'<div class=col-12><p>Another key aspect many games have is lore and plot. Although similar and both important, lore and plot are not the same. Lore is something discovered throughout the world and has happened in the past while plot is the events your player will play through in real time. Some games like Dark Souls and Elden Ring use a lot of lore while games like God of War Ragnarok focus on story. Both are good but use different forms of storytelling. So lore and story can help you more easily bring the world you are building to life.</p></div>';
	data += 		'</div>';
	data += 	'</div>';

	document.getElementById("content").innerHTML = data;
}

function Build() {
	var data;
	data = 	'<h1>Build</h1>';
	data += 	'<div class="container">';
	data += 		'<div class="row">';
	data +=				'<div class=col-12><p>At this point you should have a really solid idea of what your game actually looks like. You should know your style and what lore or story elements you want to include. Now you need to build it and this is probably the most difficult part. Two of the best places to build a game are in the game engines, Unity and Unreal. A game engine gives you the tools to make the game you envision. If you intend to make a detailed 3D game it is highly recommended to use Unreal as it has a lot of good 3D features. If you want to make a 2D game it is more recommended to use Unity as it has many useful tools for 2D game creation. Unreal Engine uses a more complicated programming language than Unity so if you are a beginner Unity may be a better place to start. Basically they are both really good programs but it is up to you to find out where you would rather work.</p></div>';
	data += 			'<div class=col-12><img class="fit" src="Images/Game4.png"></div>';
	data += 		'</div>';
	data += 	'</div>';

	document.getElementById("content").innerHTML = data;
}

function Level() {
	var data;
	data = 	'<h1>Level Design</h1>';
	data += 	'<div class="container">';
	data += 		'<div class="row">';
	data +=				'<div class=col-12><p>After you have started to make your game you need to consider level design. A good level design could make a game more fun for the player and make the game more interesting as a whole. Games like Pizza Tower master level design by making the game feel continuous and fast paced which lines up with their style. Overall, more interesting and fun level design can make your game more fun and dynamic which makes the players more entertained.</p></div>';
	data += 			'<div class=col-12><iframe width="560" height="315" src="https://www.youtube.com/embed/Zj-6n9kptqs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>';
	data += 		'</div>';
	data += 	'</div>';

	document.getElementById("content").innerHTML = data;
}

function Launch() {
	var data;
	data = 	'<h1>Launch</h1>';
	data += 	'<div class="container">';
	data += 		'<div class="row">';
	data += 			'<div class=col-6><img class="fit" src="Images/Game5.png"></div>';
	data +=				'<div class=col-6><p>After you have built levels and core mechanics it is time to test it out. This involves getting feedback from others, searching for bugs, or making improvements to what already exists. This is where you are looking to refine your game and make it feel more complete.</p></div>';
	data += 		'</div>';
	data += 	'</div>';
	data += 	'<hr>';
	data += 	'<div class="container">';
	data += 		'<div class="row">';
	data +=				'<div class=col-6><p>Once you feel your game is close to completion it is time to think about launching your game to the public eye. It is often recommended that you try to build a following around the game before it’s release by advertising it on social media platforms or sometimes asking popular youtubers and streamers to try it out and review it. This can build hype around your game and make people get excited about it and want to play it. There are many places you can release your game but the most popular place is Steam. You can release your game on to Steam directly but it is also a good idea to work with a publisher such as New Blood or Devolver to get name brands on your product. You can also copyright your game to make sure you own the rights to it so it cannot be stolen.</p></div>';
	data += 			'<div class=col-6><img class="fit" src="Images/Game6.png"><hr><img class="fit" src="Images/Game7.png"></div>';
	data += 		'</div>';
	data += 	'</div>';

	document.getElementById("content").innerHTML = data;
}

function PostLaunch() {
	var data;
	data = 	'<h1>Postlaunch</h1>';
	data += 	'<div class="container">';
	data += 		'<div class="row">';
	data +=				'<div class="col-12"><p>The last step is making post launch updates. After a game is released you can release bug fix updates or even extra content also called DLC’s. Extra content can often add a lot to a game after people spend a lot of time playing. These can be free or sometimes even paid expansions to the initial release.<br>Overall game design is a fun process which can be done by almost anyone. So if you are interested in pursuing game design you can start researching how to work with Unity and Unreal and start practicing so you can make whatever you want!</p></div>';
	data += 		'</div>';
	data += 	'</div>';

	document.getElementById("content").innerHTML = data;
}

function Resources() {
	var data;
	data = 	'<h1>Resources</h1>';
	data += 	'<div class="container">';
	data += 		'<div class="row">';
	data += 			'<div class=col-4><a href="https://www.w3schools.com/"><img class="fit" src="Images/Resource1.png"></a></div>';
	data += 			'<div class=col-4><a href="https://www.geeksforgeeks.org/"><img class="fit" src="Images/Resource2.png"></a></div>';
	data +=				'<div class=col-4><a href="https://www.coursera.org/"><img class="fit" src="Images/Resource3.png"></a></div>';
	data += 		'</div>';
	data += 	'</div>';
	data += 	'<div class="container">';
	data += 		'<div class="row">';
	data += 			'<div class=col-4><a href="https://education.github.com/pack"><img class="fit" src="Images/Resource4.png"></a></div>';
	data += 			'<div class=col-4><a href="https://overapi.com/"><img class="fit" src="Images/Resource5.png"></a></div>';
	data +=				'<div class=col-4><a href="https://roadmap.sh/"><img class="fit" src="Images/Resource6.png"></a></div>';
	data += 		'</div>';
	data += 	'</div>';
	data += 	'<div class="container">';
	data += 		'<div class="row">';
	data += 			'<div class=col-4><a href="https://branch.education/"><img class="fit" src="Images/Resource7.png"></a></div>';
	data += 			'<div class=col-8><a href="https://www.rtings.com/"><img class="fit" src="Images/Resource8.png"></a></div>';
	data += 		'</div>';
	data += 	'</div>';
	

	document.getElementById("content").innerHTML = data;
}

function soon() {
	alert("Coming Soon!");
}