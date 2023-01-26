import { Current } from "./current"
import { Location } from "./location"

export interface CurrentWeather {
  location: Location
  current: Current
}