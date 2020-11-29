import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// MATERIAL COMPONENTS
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatRippleModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule } from '@angular/forms';


import { HomePageComponent } from './components/home-page/home-page.component';
import { ContentPopupComponent } from './components/content-popup/content-popup.component';
import { RouterModule, Routes } from '@angular/router';
import { ConceptMapPageComponent } from './components/concept-map-page/concept-map-page.component';
import { HttpService } from './services/http/http.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'mind-map',
    component: ConceptMapPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContentPopupComponent,
    ConceptMapPageComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    FontAwesomeModule,
    MatRippleModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatChipsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatIconModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
  entryComponents: [ContentPopupComponent]
})
export class AppModule { }
