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

  signIt: string = `We wanted to empower people through the ability of speech by creating an app that translates sign language to English.  Sign it translates sign language to English in real time using machine learning and Open CV to track hand movement and identify different signed words and letters.
  
We used Open CV to track the hand movement and machine learning in order to identify the different signs used for different letters.  After identifying the signed letter, we stored the signed letters to form full sentences. Using Azure, we trained the data set to work on various hands and environments.

Made with &hearts; and Python, OpenCV, TensorFlow, Azure Custom Vision Service`;
  
  redeye: string = `Life travels fast, and car crashes can happen in the blink of an eye, but with our companion, Red Eye, we can prevent this.  Long and tedious drives can increase the risk of falling asleep at the wheel and medical emergencies don’t wait until you’re out of the car. This Android app is designed to create a more positive, seamless driving experience by helping drivers when they are tired or in the event that they have a medical emergency while behind the wheel.
   
The app uses face detection to track and analyze the driver’s face, identifying if they have fallen asleep or have experienced a medical emergency through their eyes (whether they are opened or closed). The app then suggests a course of action: find the nearest hotel or alert the authorities. If the former is chosen, a list of nearby hotels will appear on screen, if the latter is chosen, the authorities will be alerted and given the exact coordinates by accessing the phone’s location.

Made with &hearts; and Java, Android, Google's Cloud Vision API, and Google Translate API`;
  
  recyclops: string = `Creating an environmentally friendly campus for UW students has numerous benefits on health and stress levels. In order to achieve this, students need to take an active role in keeping the campus clean. Due to a lack of knowledge, many students confuse the disposal of every day objects, putting most of the items in the garbage when they should be placed in the compost or recycle bin. Not only will this cause our landfills to grow at a higher rate, sending compost to landfills where there is no oxygen can cause methane to be released when broken down. Methane is an incredible potent and dangerous greenhouse gas. Waterloo’s carbon footprint does not end on campus, but continues to the landfill through the incorrect disposal of waste by students.    

The app captures a photo of an item to be thrown out and uses Google’s Cloud Vision API to identify the object. Recyclops then classifies and informs the user of where the item should be placed.

Made with &hearts; and Java, Android, Google's Cloud Vision API`;
  
  textris: string = `Textris combines Tetris and Scrabble into a leaderboard game with letter generation and word verification using Apple’s built in dictionary.
  
Using the full software development cycle, Textris was designed, implemented, tested, and published to the iOS App Store with over 50 users!

Made with &hearts; and Swift, iOS, Xcode, Apple App Store Connect`;

  sideProjects: Array<Project> = [
    new Project("Sign It", "Hack the North", "Sept. 13 2019", "../../assets/sideProjects/signit.png", this.signIt),
    new Project("Red Eye", "PennApps Hackathon", "Sept. 6 2019", "../../assets/sideProjects/redeye-withme.png", this.redeye),
    new Project("Recyclops", "UWEnergyHacks", "June 1 2019", "../../assets/sideProjects/best-design.jpg", this.recyclops),
    new Project("Textris", "Published on iOS App Store", "Apr. 24 2018", "../../assets/sideProjects/textris.png", this.textris),
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
