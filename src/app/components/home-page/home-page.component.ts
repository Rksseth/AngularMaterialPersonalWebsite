import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContentPopupComponent } from '../content-popup/content-popup.component';

class Project {
  title: string;
  subtitle: string;
  date: string;
  picture: string;
  story: string;

  constructor(title: string, subtitle: string, date: string, picture: string, story: string) {
    this.title = title;
    this.subtitle = subtitle;
    this.date = date;
    this.picture = picture;
    this.story = story;
  }
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  sustainably: string = `Won 'Best Pitch' at EnactusHacks!  We created a Chrome extension that shows sustainable alternatives when shopping for products online at large e-commerce websites. View more on <a href="https://devpost.com/software/sustainab-ly" target="_blank" title="trials results">Devpost</a>.`;

  mindMap: string = `We wanted to create a visual representation of connected topics.  We used Wikipedia's API in a recursion algorithm to retrieve content and links to connect topics together.`;

  weschedule: string = `We wanted to automate the scheduling process of varsity sport team practises to allow more time playing and less time scheduling.  WeSchedule is an online platform that allows admins and schedules to create weekly schedules with a click of a button taking into account courts, hours of availability, and each individual players' availability.  We have already completed 5+ sprints and 200+ features and bug fixes deployed.`

  signIt: string = `We wanted to empower people through the ability of speech by creating an app that translates sign language to English.  Sign it translates sign language to English in real time using machine learning and Open CV to track hand movement and identify different signed words and letters.
  
We used Open CV to track the hand movement and machine learning in order to identify the different signs used for different letters.  After identifying the signed letter, we stored the signed letters to form full sentences. Using Azure, we trained the data set to work on various hands and environments.  View more on <a href="https://devpost.com/software/sign-it-s6mvh9" target="_blank" title="trials results">Devpost</a>.

Made with &hearts; and Python, OpenCV, TensorFlow, Azure Custom Vision Service.`;
  
  redeye: string = `Life travels fast, and car crashes can happen in the blink of an eye, but with our companion, Red Eye, we can prevent this.  Long and tedious drives can increase the risk of falling asleep at the wheel and medical emergencies don’t wait until you’re out of the car. This Android app is designed to create a more positive, seamless driving experience by helping drivers when they are tired or in the event that they have a medical emergency while behind the wheel.
   
The app uses face detection to track and analyze the driver’s face, identifying if they have fallen asleep or have experienced a medical emergency through their eyes (whether they are opened or closed). The app then suggests a course of action: find the nearest hotel or alert the authorities. If the former is chosen, a list of nearby hotels will appear on screen, if the latter is chosen, the authorities will be alerted and given the exact coordinates by accessing the phone’s location.  View more on <a href="https://devpost.com/software/red-eye" target="_blank" title="trials results">Devpost</a>.

Made with &hearts; and Java, Android, Google's Cloud Vision API, and Google Translate API.`;
  
  recyclops: string = `Won 'Best Design' category at UWEnergyHacks!  Creating an environmentally friendly campus for UW students has numerous benefits on health and stress levels. In order to achieve this, students need to take an active role in keeping the campus clean. Due to a lack of knowledge, many students confuse the disposal of every day objects, putting most of the items in the garbage when they should be placed in the compost or recycle bin. Not only will this cause our landfills to grow at a higher rate, sending compost to landfills where there is no oxygen can cause methane to be released when broken down. Methane is an incredible potent and dangerous greenhouse gas. Waterloo’s carbon footprint does not end on campus, but continues to the landfill through the incorrect disposal of waste by students.    

The app captures a photo of an item to be thrown out and uses Google’s Cloud Vision API to identify the object. Recyclops then classifies and informs the user of where the item should be placed.  View more on <a href="https://devpost.com/software/recyclops-8wca7d" target="_blank" title="trials results">Devpost</a>.

Made with &hearts; and Java, Android, Google's Cloud Vision API`;
  
  textris: string = `Textris combines Tetris and Scrabble into a leaderboard game with letter generation and word verification using Apple’s built in dictionary.
  
Using the full software development cycle, Textris was designed, implemented, tested, and published to the iOS App Store with over 50 users!

Made with &hearts; and Swift, iOS, Xcode, Apple App Store Connect`;

  ouas: string = `The Waterloo Warriors took part in the 2018 OUA Championships this past weekend in Kingston hosted by Queen's and the men's team came away with the silver medal led by top seed Thomas Manley (Barrie/) and second seed Ravi Seth (Fergus/).

Manley and Seth both played outstanding squash finishing the championship with 5-1 records. Manley did not drop a set until his final match when he faced David Mill of Western and lost in a tight four set battle. 
  
Seth played an incredibly strong battle in his match with Matt Henderson of Western which went the distance. Seth came up just short in the epic battle losing the final set 11-9.
  
Both Manley and Seth were named OUA all-stars and were big parts of Waterloo earning the men's silver.
  
As a team the men went 5-1 beating Queen's (6-3), McMaster (9-0), Brock (9-0), Toronto (6-3) and falling to Western (9-0) while the women couldn't muster a win but had strong individual performances from Charlotte Copas (Toronto/), Tori Sypher and Tori Grootjen (Woodstock/).
  
Men's Standings (record)
1) Western (54-0)
2) Waterloo (39-15)
3) Queen's (33-21)
4) Toronto (23-31)
5) Brock (20-34)
6) Guelph (16-38)
7) McMaster (4-50)
   
Women's Standings (record)
1) Queen's (41-4)
2) Toronto (37-8)
3) Western (21-24)
4) Brock (18-26)
5) McMaster (11-33)
6) Waterloo (6-39)
   
Men's MVP
David Mill (Western)
   
Women's MVP
Heather McLachlan (Brock)
   
Men's Rookie of the Year
Alex Collins (Queen's)
   
Women's Rookie of the Year
Heather McLachlan (Brock)
   
Men's Coach of the Year
Vinit Kudva (Waterloo)
   
Women's Coach of the Year
Josh Ginou (Toronto)
   
Men's All-Stars
David Mill (Western)
Matt Henderson (Western)
Thomas Manley (Barrie/) (Waterloo)
Mohamed Hamour (Brock)
Ravi Seth (Fergus/) (Waterloo)
Cameron Butler (Queen's)
   
Women's All-Stars
Heather McLachlan (Brock)
Olivia Waite (McMaster)
Charlotte Copas (Toronto/) (Waterloo)
Evelyn Moorhouse (Toronto)
Nora Abdelrahman Ibrahim (Queen's)
Amy Commisso (Western)`;

  worlds2016: string = `Team Canada’s world junior men’s team was rounded out May 20-22 in Winnipeg (MB) when the Winnipeg Squash Racquet Club hosted Squash Canada’s World Junior Men’s Team trials. 

Underdog Ravi Seth from Elora, Ontario won the World Junior Men’s Team trials to capture a spot on Team Canada for Poland this summer.  Unseeded Ravi won his two pool matches 3-0 to set up a final match against top seed Matt Henderson from Victoria, BC.
  
Although leading in each of the first two games, Seth lost both and went 2-0 down to Henderson.  Seth then went on an incredible run to win 33 of the next 40 points, taking the next two games to level the match at 2 games all, and then to win the 5th comfortably 11-3.
  
Team trials results can be viewed <a href="../../assets/athletics/trials.pdf" target="_blank" title="trials results">here</a>.
  
Ravi Seth follows in his brother Cameron’s footsteps who made the Junior World Team back in 2012.
  
Henderson earned his spot on count back; he and Seth join 2016 Canadian U19 Men’s Champion Mike Mehl (AB) and Rahul Sehrawat (ON) to make the 4-person Team Canada squad.  Mehl and Sehrawat qualified for the team as points leaders accumulated in 3 (of a possible 4) selection events over each of the last two seasons.
  
Team Canada will compete at this summer’s WSF World Junior Squash Championships being held in Bielsko-Biała, Poland from August 6-17.`;

  cwg2015: string = `Young athletes from across the country are packing their bags, ready to take off on the trip of a lifetime this weekend to compete in the 2015 Canada Winter Games in Prince George, BC.

The Canada Games kicked off February 13th with an exciting Opening Ceremony at the CN Centre in Prince George, and is wrapping up competition in 12 sports as part of Week 1. Squash joins 10 other sports as Week 2 competition kicks off Sunday.
  
Squash is proud to have increased participation from the 2011 edition of the Games, hosted in Halifax, as 12 Provinces and Territories will be competing in Prince George. Also new to this year’s event is an Individual Competition, featuring a draw of 16 each for boys and girls.
  
“We’re very happy that all of our member Provinces and Territories will be a part of this year’s Canada Games”, says Danny Da Costa, Squash Canada Executive Director. “The inclusion of the Individual Competition is also a very exciting aspect, as it will give more Provinces and Territories a shot at the podium while showcasing some excellent squash.”
  
The Individual draws begin Sunday evening, with the Team competition starting on Monday and continuing through next Saturday.
  
The Canada Winter Games is held every two years, alternating between Summer and Winter Games. A collaboration of youth, sport, culture and community, the Canada Games is Canada’s largest multi-sport competition for young athletes. First held in 1967 in Quebec City, Canada Games showcases our country’s next generation of national, international, and Olympic Champions.
  
<a href="https://youtu.be/yvp5qkxOCb0" target="_blank">Men's Squash Final - Ontario vs Alberta</a>`;

  uniworlds: string = `The 2018 World University Squash Championships concluded on September 12th.  Five Canadians stepped up to play for Canada! From September 6th-12th, student athletes from around the world skipped some school, converging in Birmingham for a week of intense squash competition! This year, 56 male and 28 female players from a record 21 countries participated in the tournament.

In the team event, the joint male/female Canadian squad finished 8th.  Canada finsihed 2nd in Pool play, winning 2-1 versus Switzerland and suffered a 3-0 loss to evenual finalsit, Malaysia.  The next two matches were narrow 2-1 losses to Czech Republic and Australia.
  
<a href="https://youtu.be/6T0YGMvV4g4" target="_blank">Ravi Seth vs Joseph Williams England - Full Match</a>`;

  sideProjects: Array<Project> = [
    new Project("WeSchedule", "University of Waterloo", "Sept. 13 2018 - present", "../../assets/sideProjects/weschedule.png", this.weschedule),
    new Project("Sustainb.ly", "EnactusHacks", "Oct. 24 2020", "../../assets/sideProjects/sustainbly.png", this.sustainably),
    new Project("Mind Map", "University of Waterloo", "Jun. 13 2020", "../../assets/sideProjects/mind-map.png", this.mindMap),
    new Project("Sign It", "Hack the North", "Sept. 13 2019", "../../assets/sideProjects/signit.png", this.signIt),
    new Project("Red Eye", "PennApps Hackathon", "Sept. 6 2019", "../../assets/sideProjects/redeye-withme.png", this.redeye),
    new Project("Recyclops", "UWEnergyHacks", "June 1 2019", "../../assets/sideProjects/best-design.jpg", this.recyclops),
    new Project("Textris", "Published on iOS App Store", "Apr. 24 2018", "../../assets/sideProjects/textris.png", this.textris),
  ];

  athletics: Array<Project> = [
    new Project("Squash Team Canada", "World Universities, England", "Sept. 6 2018", "../../assets/athletics/uniworlds.png", this.uniworlds),
    new Project("UW Varsity Squash Team", "OUA's Squash Championships", "Feb. 12 2018", "../../assets/athletics/oua2018.JPG", this.ouas),
    new Project("Squash Team Canada", "World Juniors, Poland", "Aug. 7 2016", "../../assets/athletics/worlds2016.jpg", this.worlds2016),
    new Project("Squash Team Ontario", "Canada Winter Gamces, BC", "Feb. 21 2015", "../../assets/athletics/cwg2015.jpeg", this.cwg2015)
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {

  }

  openDialog(project: Project): void {
    const dialogRef = this.dialog.open(ContentPopupComponent, {
      width: '500px',
      height: '500px',
      data: project,
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(res => {
    });
  }

}
