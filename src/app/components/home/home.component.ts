import { Component, OnInit, Input } from '@angular/core';
import { Follow } from 'src/app/models/followUser.model';
import { Usuario } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { userMockData } from 'src/app/utils/userMock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  usuario: Usuario;
  followUser : Follow[] = [];
  controle: boolean = true;
  @Input() totalUser: number = 0;

  constructor(private usersService : UsersService) { }

  ngOnInit(): void {
    this.usuario = userMockData;
  }

  tryTheNextone(){
  
    this.usersService.getUsuarios().subscribe((x: any) =>
    {this.usuario = x.results[0];
     this.followUser.find(x => x.firstname == this.usuario.name.first)
     {
       this.controle = true;
     };
    });  
    }; 


  follow(first: string, last: string){
    
    if(this.followUser.find(x => x.firstname + x.lastname == first + last)){
      this.controle = false
      console.log(this.controle)
    } else {

    this.followUser.push(
      {
        firstname: String(this.usuario.name.first),
        lastname: String(this.usuario.name.last),
        city: this.usuario.location.city,
        country: this.usuario.location.country,
        urlImage: this.usuario.picture.thumbnail
      }
    );
    this.totalUser = this.followUser.length;
    console.log(this.followUser, this.controle);};
  };

  unfollow(user: string){
    
   this.followUser = this.followUser.filter(x => x.firstname != user )
   this.totalUser = this.followUser.length
   console.log(this.followUser)

  }

}
