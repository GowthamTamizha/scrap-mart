import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule here

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterModule],  // Ensure RouterModule is in the imports array
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {}
