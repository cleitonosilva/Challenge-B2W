import { Registered } from './registered.model';
import { Dob } from "./dados.model";
import { Id } from "./id.model";
import { Login } from "./login.model";
import { Name } from "./name.model";
import { Picture } from "./picture.model";
import { Locations } from './location.model';

export class Usuario {
   cell: string;
   dob: Dob;
   email: string;
   gender: string;
   id: Id;
   location: Locations;
   login: Login;
   name : Name;
   nat: string;
   phone: string;
   picture: Picture;
   registered: Registered
}