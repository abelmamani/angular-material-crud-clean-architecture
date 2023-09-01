import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { peoples } from 'src/app/data';
import { People } from 'src/app/models';

@Component({
  selector: 'app-people-table',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})

export class PeopleTableComponent implements AfterViewInit{
  displayedColumns: string[] = ['id', 'name', 'category', 'company', 'levelOfHappiness'];
  dataSource: MatTableDataSource<People>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(peoples);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
