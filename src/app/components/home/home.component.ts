import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { userMockData } from 'src/app/utils/userMock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  usuario: Usuario
  

  constructor(private usersService : UsersService) { }

  ngOnInit(): void {

    this.usuario = userMockData
    console.log(this.usuario)

    // this.usersService.getUsuarios().subscribe((x: any) =>
    // {this.usuario = x.results[0];
      
    // } )
      
  }

}
