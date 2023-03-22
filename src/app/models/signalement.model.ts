import { Author } from "./author.model";
import { Observation } from "./observation.model";

export interface Signalement {
    author : Author;
    description : string ;
    observations ? : Observation[];
}




