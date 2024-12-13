import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../environments/environment.development';
import { reservations } from './reservations';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationsComponent implements OnInit {
  public reservations : reservations[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit():void{
    this.getReservations();
  }
  getReservations() {
    this.http.get<reservations[]>(`${environment.baseUrl}api/Countries`).subscribe(
    {
      next: result => this.reservations = result,
      error: e => console.error(e)
    }
    );
  }

}
