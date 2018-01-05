import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

var firebaseConfig = {
  apiKey: 'AIzaSyD_pw0SImyR-QOZGgDZz3EeDm2CDrE5PtQ',
  authDomain: 'firestore-99e0c.firebaseapp.com',
  databaseURL: 'https://firestore-99e0c.firebaseio.com',
  projectId: 'firestore-99e0c',
  storageBucket: 'firestore-99e0c.appspot.com',
  messagingSenderId: '742259109689'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,    
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
