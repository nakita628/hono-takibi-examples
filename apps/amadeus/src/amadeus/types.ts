type TravelClass = 'ECONOMY' | 'PREMIUM_ECONOMY' | 'BUSINESS' | 'FIRST'
type Co2Emission = {
  cabin?: TravelClass | undefined
  weight?: number | undefined
  weightUnit?: string | undefined
}
type AircraftEquipment = { code?: string | undefined }
type FlightEndPoint = {
  iataCode?: string | undefined
  terminal?: string | undefined
  at?: string | undefined
}
type OperatingFlight = { carrierCode?: string | undefined }
type FlightStop = {
  duration?: string | undefined
  iataCode?: string | undefined
  arrivalAt?: string | undefined
  departureAt?: string | undefined
}
type Segment = {
  blacklistedInEU?: boolean | undefined
  co2Emissions?: Co2Emission[] | undefined
  id?: string | undefined
  numberOfStops?: number | undefined
  aircraft?: AircraftEquipment | undefined
  arrival?: FlightEndPoint | undefined
  carrierCode?: string | undefined
  departure?: FlightEndPoint | undefined
  duration?: string | undefined
  number?: string | undefined
  operating?: OperatingFlight | undefined
  stops?: FlightStop[] | undefined
}
type AdditionalServiceType = 'CHECKED_BAGS' | 'MEALS' | 'SEATS' | 'OTHER_SERVICES'
type FeeType = 'TICKETING' | 'FORM_OF_PAYMENT' | 'SUPPLIER'
type Fee = { amount?: string | undefined; type?: FeeType | undefined }
type Tax = { amount?: string | undefined; code?: string | undefined }
type ExtendedPrice = {
  additionalServices?:
    | { amount?: string | undefined; type?: AdditionalServiceType | undefined }[]
    | undefined
  billingCurrency?: string | undefined
  grandTotal?: string | undefined
  margin?: string | undefined
  base?: string | undefined
  currency?: string | undefined
  fees?: Fee[] | undefined
  refundableTaxes?: string | undefined
  taxes?: Tax[] | undefined
  total?: string | undefined
}
type PricingOptionsFareType = ('PUBLISHED' | 'NEGOTIATED' | 'CORPORATE')[]
type FlightOfferSource = 'GDS'
type BaggageAllowance = {
  quantity?: number | undefined
  weight?: number | undefined
  weightUnit?: string | undefined
}
type ServiceName = 'PRIORITY_BOARDING' | 'AIRPORT_CHECKIN'
type SliceDiceIndicator = 'LOCAL_AVAILABILITY' | 'SUB_OD_AVAILABILITY_1' | 'SUB_OD_AVAILABILITY_2'
type TravelerPricingFareOption =
  | 'STANDARD'
  | 'INCLUSIVE_TOUR'
  | 'SPANISH_MELILLA_RESIDENT'
  | 'SPANISH_CEUTA_RESIDENT'
  | 'SPANISH_CANARY_RESIDENT'
  | 'SPANISH_BALEARIC_RESIDENT'
  | 'AIR_FRANCE_METROPOLITAN_DISCOUNT_PASS'
  | 'AIR_FRANCE_DOM_DISCOUNT_PASS'
  | 'AIR_FRANCE_COMBINED_DISCOUNT_PASS'
  | 'AIR_FRANCE_FAMILY'
  | 'ADULT_WITH_COMPANION'
  | 'COMPANION'
type Price = {
  base?: string | undefined
  currency?: string | undefined
  fees?: Fee[] | undefined
  refundableTaxes?: string | undefined
  taxes?: Tax[] | undefined
  total?: string | undefined
}
type TravelerType =
  | 'ADULT'
  | 'CHILD'
  | 'SENIOR'
  | 'YOUNG'
  | 'HELD_INFANT'
  | 'SEATED_INFANT'
  | 'STUDENT'
type FlightOffer = {
  disablePricing?: boolean | undefined
  id: string
  instantTicketingRequired?: boolean | undefined
  itineraries?: { duration?: string | undefined; segments: Segment[] }[] | undefined
  lastTicketingDate?: string | undefined
  nonHomogeneous?: boolean | undefined
  numberOfBookableSeats?: number | undefined
  oneWay?: boolean | undefined
  paymentCardRequired?: boolean | undefined
  price?: ExtendedPrice | undefined
  pricingOptions?:
    | {
        fareType?: PricingOptionsFareType | undefined
        includedCheckedBagsOnly?: boolean | undefined
        noPenaltyFare?: boolean | undefined
        noRestrictionFare?: boolean | undefined
        refundableFare?: boolean | undefined
      }
    | undefined
  source?: FlightOfferSource | undefined
  travelerPricings?:
    | {
        associatedAdultId?: string | undefined
        fareDetailsBySegment: {
          additionalServices?:
            | {
                chargeableCheckedBags?: BaggageAllowance | undefined
                chargeableSeatNumber?: string | undefined
                otherServices?: ServiceName[] | undefined
              }
            | undefined
          allotmentDetails?:
            | { tourName?: string | undefined; tourReference?: string | undefined }
            | undefined
          brandedFare?: string | undefined
          cabin?: TravelClass | undefined
          class?: string | undefined
          fareBasis?: string | undefined
          includedCheckedBags?: BaggageAllowance | undefined
          isAllotment?: boolean | undefined
          segmentId: string
          sliceDiceIndicator?: SliceDiceIndicator | undefined
        }[]
        fareOption: TravelerPricingFareOption
        price?: Price | undefined
        travelerId: string
        travelerType: TravelerType
      }[]
    | undefined
  type: string
  validatingAirlineCodes?: string[] | undefined
}
type AircraftEntry = { key?: string | undefined }
type CarrierEntry = { key?: string | undefined }
type CurrencyEntry = { key: string }
type LocationEntry = { key: string }
type Dictionaries = {
  aircraft?: AircraftEntry | undefined
  carriers?: CarrierEntry | undefined
  currencies?: CurrencyEntry | undefined
  locations?: LocationEntry | undefined
}
type CollectionMetaLink = {
  count?: number | undefined
  links?:
    | {
        first?: string | undefined
        last?: string | undefined
        next?: string | undefined
        previous?: string | undefined
        self?: string | undefined
        up?: string | undefined
      }
    | undefined
}
type Issue = {
  code?: bigint | undefined
  detail?: string | undefined
  source?:
    | { example?: string | undefined; parameter?: string | undefined; pointer?: string | undefined }
    | undefined
  status?: number | undefined
  title?: string | undefined
}
type Error_400 = { errors: Issue[] }
type Error_500 = { errors: Issue[] }
type DateTimeRange = {
  date: string
  dateWindow?: string | undefined
  time?: string | undefined
  timeWindow?: string | undefined
}
type OriginDestination = {
  alternativeDestinationsCodes?: string[] | undefined
  alternativeOriginsCodes?: string[] | undefined
  arrivalDateTimeRange?: DateTimeRange | undefined
  departureDateTimeRange?: DateTimeRange | undefined
  destinationLocationCode?: string | undefined
  destinationRadius?: number | undefined
  excludedConnectionPoints?: string[] | undefined
  id?: string | undefined
  includedConnectionPoints?: string[] | undefined
  originLocationCode?: string | undefined
  originRadius?: number | undefined
}
type Coverage = 'MOST_SEGMENTS' | 'AT_LEAST_ONE_SEGMENT' | 'ALL_SEGMENTS'
type ExtendedPricingOptions = { includedCheckedBagsOnly?: boolean | undefined }
type SearchCriteria = {
  addOneWayOffers?: boolean | undefined
  additionalInformation?:
    | { brandedFares?: boolean | undefined; chargeableCheckedBags?: boolean | undefined }
    | undefined
  allowAlternativeFareOptions?: boolean | undefined
  excludeAllotments?: boolean | undefined
  flightFilters?:
    | {
        busSegmentAllowed?: boolean | undefined
        cabinRestrictions?:
          | {
              cabin?: TravelClass | undefined
              coverage?: Coverage | undefined
              originDestinationIds?: string[] | undefined
            }[]
          | undefined
        carrierRestrictions?:
          | {
              blacklistedInEUAllowed?: boolean | undefined
              excludedCarrierCodes?: string[] | undefined
              includedCarrierCodes?: string[] | undefined
            }
          | undefined
        connectionRestriction?:
          | {
              airportChangeAllowed?: boolean | undefined
              maxNumberOfConnections?: number | undefined
              technicalStopsAllowed?: boolean | undefined
            }
          | undefined
        crossBorderAllowed?: boolean | undefined
        maxFlightTime?: number | undefined
        moreOvernightsAllowed?: boolean | undefined
        railSegmentAllowed?: boolean | undefined
        returnToDepartureAirport?: boolean | undefined
      }
    | undefined
  maxFlightOffers?: number | undefined
  maxPrice?: number | undefined
  oneFlightOfferPerDay?: boolean | undefined
  pricingOptions?: ExtendedPricingOptions | undefined
}
type Traveler = { associatedAdultId?: string | undefined; id: string; travelerType: TravelerType }
type GetFlightOffersQuery = {
  currencyCode?: string | undefined
  originDestinations: OriginDestination[]
  searchCriteria?: SearchCriteria | undefined
  sources: FlightOfferSource[]
  travelers: Traveler[]
}
type CollectionMeta = {
  count?: number | undefined
  oneWayCombinations?:
    | { flightOfferIds?: string[] | undefined; originDestinationId?: string | undefined }[]
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/shopping/flight-offers': {
      $get:
        | {
            input: {
              query: {
                originLocationCode: string
                destinationLocationCode: string
                departureDate: string
                returnDate?: string | undefined
                adults: number
                children?: number | undefined
                infants?: number | undefined
                travelClass?: 'ECONOMY' | 'PREMIUM_ECONOMY' | 'BUSINESS' | 'FIRST' | undefined
                includedAirlineCodes?: string | undefined
                excludedAirlineCodes?: string | undefined
                nonStop?: boolean | undefined
                currencyCode?: string | undefined
                maxPrice?: number | undefined
                max?: number | undefined
              }
            }
            output: {
              data: FlightOffer[]
              dictionaries?: Dictionaries | undefined
              meta?: CollectionMetaLink | undefined
              warnings?: Issue[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                originLocationCode: string
                destinationLocationCode: string
                departureDate: string
                returnDate?: string | undefined
                adults: number
                children?: number | undefined
                infants?: number | undefined
                travelClass?: 'ECONOMY' | 'PREMIUM_ECONOMY' | 'BUSINESS' | 'FIRST' | undefined
                includedAirlineCodes?: string | undefined
                excludedAirlineCodes?: string | undefined
                nonStop?: boolean | undefined
                currencyCode?: string | undefined
                maxPrice?: number | undefined
                max?: number | undefined
              }
            }
            output: Error_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                originLocationCode: string
                destinationLocationCode: string
                departureDate: string
                returnDate?: string | undefined
                adults: number
                children?: number | undefined
                infants?: number | undefined
                travelClass?: 'ECONOMY' | 'PREMIUM_ECONOMY' | 'BUSINESS' | 'FIRST' | undefined
                includedAirlineCodes?: string | undefined
                excludedAirlineCodes?: string | undefined
                nonStop?: boolean | undefined
                currencyCode?: string | undefined
                maxPrice?: number | undefined
                max?: number | undefined
              }
            }
            output: Error_500
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'X-HTTP-Method-Override': string } } & { json: GetFlightOffersQuery }
            output: {
              data: FlightOffer[]
              dictionaries?: Dictionaries | undefined
              meta?: CollectionMeta | undefined
              warnings?: Issue[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-HTTP-Method-Override': string } } & { json: GetFlightOffersQuery }
            output: Error_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-HTTP-Method-Override': string } } & { json: GetFlightOffersQuery }
            output: Error_500
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
