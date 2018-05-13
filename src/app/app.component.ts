import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as faker from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private afs: AngularFirestore) {
    this.afs.firestore.settings({timestampsInSnapshots: true});
  }
}
