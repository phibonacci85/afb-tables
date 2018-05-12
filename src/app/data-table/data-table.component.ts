import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements AfterViewInit {

  displayColumns = ['name', 'age', 'email', 'phrase', 'edit'];
  dataSource;
  // dataSource = MatTableDataSource<any>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private afs: AngularFirestore, public dialog: MatDialog) { }

  ngAfterViewInit() {
    this.afs.collection<any>('hackers').valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }

  openDialog(data): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '350px',
      data: data,
    });
  }

  trackByUid(index, item) {
    return item.uid;
  }

}
