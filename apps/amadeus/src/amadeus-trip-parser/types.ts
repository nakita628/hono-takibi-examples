type Address = {
  category?: string | undefined
  cityName?: string | undefined
  countryCode?: string | undefined
  lines?: string[] | undefined
  postalBox?: string | undefined
  postalCode?: string | undefined
  state?: string | undefined
  stateCode?: string | undefined
  text?: string | undefined
}
type End = {
  address?: Address | undefined
  iataCode?: string | undefined
  localDateTime?: string | undefined
  name?: string | undefined
}
type Price = {
  base?: string | undefined
  currency?: string | undefined
  total?: string | undefined
  totalTaxes?: string | undefined
}
type Aircraft = { aircraftDescription?: string | undefined; aircraftType?: string | undefined }
type ArrivalAir = {
  iataCode?: string | undefined
  localDateTime?: string | undefined
  terminal?: string | undefined
}
type ArrivalAirportLocation = { address?: Address | undefined; name?: string | undefined }
type Weight = { amount?: string | undefined }
type Baggages = { quantity?: number | undefined; weight?: Weight | undefined }
type DepartureAir = {
  checkInEndTime?: string | undefined
  iataCode?: string | undefined
  localDateTime?: string | undefined
  terminal?: string | undefined
}
type DepartureAirportLocation = { address?: Address | undefined; name?: string | undefined }
type Carrier = { name?: string | undefined }
type FlightDesignator = {
  carrierCode?: string | undefined
  flightNumber?: string | undefined
  operationalSuffix?: string | undefined
}
type Marketing = { carrier?: Carrier | undefined; flightDesignator?: FlightDesignator | undefined }
type Meal = { code?: string | undefined; description?: string | undefined }
type Operating = { carrier?: Carrier | undefined; flightDesignator?: FlightDesignator | undefined }
type AssociationRefs = { id?: string | undefined; type?: string | undefined }
type AirData = {
  aircraft?: Aircraft | undefined
  arrival?: ArrivalAir | undefined
  arrivalAirportLocation?: ArrivalAirportLocation | undefined
  baggages?: Baggages | undefined
  confirmationNumber?: string | undefined
  departure?: DepartureAir | undefined
  departureAirportLocation?: DepartureAirportLocation | undefined
  marketing?: Marketing | undefined
  meal?: Meal | undefined
  operating?: Operating | undefined
  seats?:
    | {
        cabin?: string | undefined
        number?: string | undefined
        associationRefs?: AssociationRefs[] | undefined
      }[]
    | undefined
}
type Air = { air?: AirData | undefined }
type ContactHotel = { phone?: string | undefined }
type Description = { text?: string | undefined }
type Guests = { adults?: number | undefined; childAge?: number[] | undefined }
type Cancellation = { description?: Description | undefined }
type Policies = { cancellation?: Cancellation | undefined }
type TypeEstimated = {
  bedType?: string | undefined
  beds?: number | undefined
  category?: string | undefined
}
type Room = { type?: string | undefined; typeEstimated?: TypeEstimated | undefined }
type HotelData = {
  address?: Address | undefined
  amenities?: string[] | undefined
  checkInDate?: string | undefined
  checkOutDate?: string | undefined
  confirmationNumber?: string | undefined
  contact?: ContactHotel | undefined
  description?: Description | undefined
  guests?: Guests | undefined
  name?: string | undefined
  policies?: Policies | undefined
  room?: Room | undefined
  roomQuantity?: number | undefined
}
type Hotel = { hotel?: HotelData | undefined }
type AssociatedEquipments = { name?: string | undefined }
type Phone = {
  category?: 'BUSINESS' | 'PERSONAL' | 'OTHER' | undefined
  countryCode?: string | undefined
  number?: string | undefined
}
type Contact = { phone?: Phone | undefined }
type Driver = { contacts?: Contact[] | undefined }
type Location = { address?: Address | undefined; iataCode?: string | undefined }
type Dropoff = { localDateTime?: string | undefined; location?: Location | undefined }
type Pickup = { localDateTime?: string | undefined; location?: Location | undefined }
type CarVehicle = {
  acrissCode?: string | undefined
  carModel?: string | undefined
  doors?: number | undefined
}
type CarData = {
  associatedEquipments?: AssociatedEquipments[] | undefined
  confirmationNumber?: string | undefined
  driver?: Driver | undefined
  dropoff?: Dropoff | undefined
  pickup?: Pickup | undefined
  serviceProviderName?: string | undefined
  vehicle?: CarVehicle | undefined
}
type Car = { car?: CarData | undefined }
type Arrival = {
  iataCode?: string | undefined
  name?: string | undefined
  subtype?: string | undefined
}
type Departure = {
  iataCode?: string | undefined
  name?: string | undefined
  subType?: string | undefined
}
type Seats = { cabin?: string | undefined; number?: string | undefined }
type Vehicle = {
  code?: string | undefined
  displayName?: string | undefined
  number?: string | undefined
  vehicleType?: string | undefined
}
type TrainData = {
  arrival?: Arrival | undefined
  arrivalDateTime?: string | undefined
  arrivalTrack?: string | undefined
  bookingClass?: string | undefined
  confirmNbr?: string | undefined
  departure?: Departure | undefined
  departureDateTime?: string | undefined
  departureTrack?: string | undefined
  duration?: string | undefined
  seats?: Seats[] | undefined
  serviceProviderName?: string | undefined
  vehicle?: Vehicle | undefined
}
type Train = { train?: TrainData | undefined }
type Name = {
  firstName?: string | undefined
  lastName?: string | undefined
  middleName?: string | undefined
  prefix?: string | undefined
  suffix?: string | undefined
  title?: string | undefined
}
type Stakeholder = {
  age?: number | undefined
  dateOfBirth?: string | undefined
  id?: string | undefined
  name?: Name | undefined
  nationality?: string | undefined
  passangerTypeCode?: string | undefined
}
type Start = {
  address?: Address | undefined
  iataCode?: string | undefined
  localDateTime?: string | undefined
  name?: string | undefined
}
type Email = {
  address?: string | undefined
  category?: 'BUSINESS' | 'PERSONAL' | 'OTHER' | undefined
}
type TravelAgency = {
  address?: Address | undefined
  email?: Email | undefined
  officeName?: string | undefined
  phone?: Phone | undefined
}
type Trip = {
  bookingDate?: string | undefined
  bookingNumber?: string | undefined
  creationDateTime?: string | undefined
  description?: string | undefined
  end?: End | undefined
  price?: Price | undefined
  products?: (Air | Hotel | Car | Train)[] | undefined
  provider?: string | undefined
  reference?: string | undefined
  stakeholders?: Stakeholder[] | undefined
  start?: Start | undefined
  title?: string | undefined
  travelAgency?: TravelAgency | undefined
  type?: string | undefined
}
type Warnings = {
  code?: number | undefined
  detail?: string | undefined
  source?:
    | { example?: string | undefined; parameter?: string | undefined; pointer?: string | undefined }
    | undefined
  title?: string | undefined
}
type Issue = {
  code?: number | undefined
  detail?: string | undefined
  source?:
    | { example?: string | undefined; parameter?: string | undefined; pointer?: string | undefined }
    | undefined
  status?: number | undefined
  title?: string | undefined
}
type Error_400 = { errors?: Issue[] | undefined }
type Error_500 = { errors?: Issue[] | undefined }
type Error_501 = { errors?: Issue[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/travel/trip-parser': {
      $post:
        | {
            input: {
              json: {
                metaData?:
                  | {
                      documentType?: string | undefined
                      encoding?: 'BASE_64' | 'BASE_64_URL' | undefined
                      name?: string | undefined
                    }
                  | undefined
                payload?: string | undefined
              }
            }
            output: { data: Trip; warnings?: Warnings[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                metaData?:
                  | {
                      documentType?: string | undefined
                      encoding?: 'BASE_64' | 'BASE_64_URL' | undefined
                      name?: string | undefined
                    }
                  | undefined
                payload?: string | undefined
              }
            }
            output: Error_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                metaData?:
                  | {
                      documentType?: string | undefined
                      encoding?: 'BASE_64' | 'BASE_64_URL' | undefined
                      name?: string | undefined
                    }
                  | undefined
                payload?: string | undefined
              }
            }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                metaData?:
                  | {
                      documentType?: string | undefined
                      encoding?: 'BASE_64' | 'BASE_64_URL' | undefined
                      name?: string | undefined
                    }
                  | undefined
                payload?: string | undefined
              }
            }
            output: Error_501
            outputFormat: 'json'
            status: 501
          }
    }
  },
  '/'
>
export default routes
