import { Coordinates } from "./coordinates.model";
import { Street } from "./street.model";
import { Timezone } from "./timezone.model";

export class Locations {
city: string;
coordinates: Coordinates;
country: string;
postcode: number;
state: string;
street: Street;
timezone: Timezone;
}