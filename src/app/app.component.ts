import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as faker from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private afs: AngularFirestore) {
    this.afs.firestore.settings({timestampsInSnapshots: true});
  }

  addOne() {
    const hacker = {
      name: faker.name.findName(),
      age: faker.random.number({min: 18, max: 99}),
      email: faker.internet.email(),
      phrase: faker.hacker.phrase(),
      uid: faker.random.alphaNumeric(16),
    };
    this.afs.collection('hackers').doc(hacker.uid).set(hacker);
  }
}
