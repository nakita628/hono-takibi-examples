type Level = { id?: string | undefined; name?: string | undefined }
type Segment = { id?: string | undefined; name?: string | undefined }
type Classification = {
  genre?: Level | undefined
  primary?: boolean | undefined
  segment?: Segment | undefined
  subGenre?: Level | undefined
  subType?: Level | undefined
  type?: Level | undefined
}
type ExternalLink = { id?: string | undefined; url?: string | undefined }
type Image = {
  attribution?: string | undefined
  fallback?: boolean | undefined
  height?: number | undefined
  ratio?: '16_9' | '3_2' | '4_3' | undefined
  url?: string | undefined
  width?: number | undefined
}
type Attraction = {
  additionalInfo?: string | undefined
  classifications?: Classification[] | undefined
  description?: string | undefined
  externalLinks?: { [x: string]: ExternalLink[] } | undefined
  id: string
  images?: Image[] | undefined
  locale?: string | undefined
  name?: string | undefined
  test?: boolean | undefined
  type: 'event' | 'venue' | 'attraction'
  upcomingEvents?: { [x: string]: number } | undefined
  url?: string | undefined
}
type Genre = { id?: string | undefined; name?: string | undefined }
type Accessibility = { info?: string | undefined }
type AccessDates = {
  endApproximate?: boolean | undefined
  endDateTime?: string | undefined
  startApproximate?: boolean | undefined
  startDateTime?: string | undefined
}
type DateTimeZone = { fixed?: boolean | undefined; id?: string | undefined }
type Chronology = { zone?: DateTimeZone | undefined }
type DurationFieldType = { name?: string | undefined }
type DateTimeFieldType = {
  durationType?: DurationFieldType | undefined
  name?: string | undefined
  rangeDurationType?: DurationFieldType | undefined
}
type DurationField = {
  name?: string | undefined
  precise?: boolean | undefined
  supported?: boolean | undefined
  type?: DurationFieldType | undefined
  unitMillis?: bigint | undefined
}
type DateTimeField = {
  durationField?: DurationField | undefined
  leapDurationField?: DurationField | undefined
  lenient?: boolean | undefined
  maximumValue?: number | undefined
  minimumValue?: number | undefined
  name?: string | undefined
  rangeDurationField?: DurationField | undefined
  supported?: boolean | undefined
  type?: DateTimeFieldType | undefined
}
type LocalTime = {
  chronology?: Chronology | undefined
  fieldTypes?: DateTimeFieldType[] | undefined
  fields?: DateTimeField[] | undefined
  hourOfDay?: number | undefined
  millisOfDay?: number | undefined
  millisOfSecond?: number | undefined
  minuteOfHour?: number | undefined
  secondOfMinute?: number | undefined
  values?: number[] | undefined
}
type EndDates = {
  approximate?: boolean | undefined
  dateTime?: string | undefined
  localDate?: string | undefined
  localTime?: LocalTime | undefined
  noSpecificTime?: boolean | undefined
}
type StartDates = {
  dateTBA?: boolean | undefined
  dateTBD?: boolean | undefined
  dateTime?: string | undefined
  localDate?: string | undefined
  localTime?: LocalTime | undefined
  noSpecificTime?: boolean | undefined
  timeTBA?: boolean | undefined
}
type EventStatus = {
  code?: 'onsale' | 'offsale' | 'canceled' | 'postponed' | 'rescheduled' | undefined
}
type EventDates = {
  access?: AccessDates | undefined
  end?: EndDates | undefined
  spanMultipleDays?: boolean | undefined
  start?: StartDates | undefined
  status?: EventStatus | undefined
  timezone?: string | undefined
}
type Location = { latitude?: number | undefined; longitude?: number | undefined }
type Outlet = { type?: string | undefined; url?: string | undefined }
type Address = {
  line1?: string | undefined
  line2?: string | undefined
  line3?: string | undefined
}
type Area = { name?: string | undefined }
type City = { name?: string | undefined }
type Country = { countryCode?: string | undefined; name?: string | undefined }
type State = { name?: string | undefined; stateCode?: string | undefined }
type Place = {
  address?: Address | undefined
  area?: Area | undefined
  city?: City | undefined
  country?: Country | undefined
  location?: Location | undefined
  name?: string | undefined
  postalCode?: string | undefined
  state?: State | undefined
}
type PriceRange = {
  currency?: string | undefined
  max?: number | undefined
  min?: number | undefined
  type?: 'standard' | undefined
}
type Product = {
  id?: string | undefined
  name?: string | undefined
  type?: string | undefined
  url?: string | undefined
}
type Promoter = {
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
}
type Presale = {
  description?: string | undefined
  endDateTime?: string | undefined
  name?: string | undefined
  startDateTime?: string | undefined
  url?: string | undefined
}
type PublicSaleDates = {
  endDateTime?: string | undefined
  startDateTime?: string | undefined
  startTBD?: boolean | undefined
}
type EventSalesDates = { presales?: Presale[] | undefined; public?: PublicSaleDates | undefined }
type SeatMap = { staticUrl?: string | undefined }
type Event = {
  accessibility?: Accessibility | undefined
  additionalInfo?: string | undefined
  classifications?: Classification[] | undefined
  dates?: EventDates | undefined
  description?: string | undefined
  distance?: number | undefined
  externalLinks?: { [x: string]: ExternalLink[] } | undefined
  id: string
  images?: Image[] | undefined
  info?: string | undefined
  locale?: string | undefined
  location?: Location | undefined
  name?: string | undefined
  outlets?: Outlet[] | undefined
  place?: Place | undefined
  pleaseNote?: string | undefined
  priceRanges?: PriceRange[] | undefined
  products?: Product[] | undefined
  promoter?: Promoter | undefined
  promoters?: Promoter[] | undefined
  sales?: EventSalesDates | undefined
  seatmap?: SeatMap | undefined
  test?: boolean | undefined
  type: 'event' | 'venue' | 'attraction'
  units?: string | undefined
  url?: string | undefined
}
type EventImages = { id: string; images?: Image[] | undefined; type: 'event' }
type VenueBoxOfficeInfo = {
  acceptedPaymentDetail?: string | undefined
  openHoursDetail?: string | undefined
  phoneNumberDetail?: string | undefined
  willCallDetail?: string | undefined
}
type Dma = { id?: number | undefined }
type VenueGeneralInfo = { childRule?: string | undefined; generalRule?: string | undefined }
type Market = { id?: string | undefined }
type Twitter = { handle?: '@a Twitter handle' | undefined; hashtags?: string[] | undefined }
type Social = { twitter?: Twitter | undefined }
type Venue = {
  accessibleSeatingDetail?: string | undefined
  additionalInfo?: string | undefined
  address?: Address | undefined
  boxOfficeInfo?: VenueBoxOfficeInfo | undefined
  city?: City | undefined
  country?: Country | undefined
  currency?: string | undefined
  description?: string | undefined
  distance?: number | undefined
  dma?: Dma[] | undefined
  externalLinks?: { [x: string]: ExternalLink[] } | undefined
  generalInfo?: VenueGeneralInfo | undefined
  id: string
  images?: Image[] | undefined
  locale?: string | undefined
  location?: Location | undefined
  markets?: Market[] | undefined
  name?: string | undefined
  parkingDetail?: string | undefined
  postalCode?: string | undefined
  social?: Social | undefined
  state?: State | undefined
  test?: boolean | undefined
  timezone?: string | undefined
  type: 'event' | 'venue' | 'attraction'
  units?: string | undefined
  upcomingEvents?: { [x: string]: number } | undefined
  url?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/discovery/v2/attractions': {
      $get: {
        input: {
          query: {
            sort?: string | undefined
            classificationName?: { [x: string]: unknown }[] | undefined
            classificationId?: { [x: string]: unknown }[] | undefined
            keyword?: string | undefined
            id?: string | undefined
            source?: 'ticketmaster' | ' universe' | ' frontgate' | ' tmr' | undefined
            includeTest?: 'yes' | ' no' | ' only' | undefined
            page?: string | undefined
            size?: string | undefined
            locale?: string | undefined
            includeLicensedContent?: 'yes' | ' no' | undefined
            includeSpellcheck?: 'yes' | ' no' | undefined
          }
        }
        output: Attraction[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/discovery/v2/attractions/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: { locale?: string | undefined; includeLicensedContent?: 'yes' | ' no' | undefined }
        }
        output: Attraction
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/discovery/v2/classifications': {
      $get: {
        input: {
          query: {
            sort?: string | undefined
            keyword?: string | undefined
            id?: string | undefined
            source?: 'ticketmaster' | ' universe' | ' frontgate' | ' tmr' | undefined
            includeTest?: 'yes' | ' no' | ' only' | undefined
            page?: string | undefined
            size?: string | undefined
            locale?: string | undefined
            includeLicensedContent?: 'yes' | ' no' | undefined
            includeSpellcheck?: 'yes' | ' no' | undefined
          }
        }
        output: Classification[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/discovery/v2/classifications/genres/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: { locale?: string | undefined; includeLicensedContent?: 'yes' | ' no' | undefined }
        }
        output: Genre
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/discovery/v2/classifications/segments/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: { locale?: string | undefined; includeLicensedContent?: 'yes' | ' no' | undefined }
        }
        output: Segment
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/discovery/v2/classifications/subgenres/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: { locale?: string | undefined; includeLicensedContent?: 'yes' | ' no' | undefined }
        }
        output: Level
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/discovery/v2/classifications/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: { locale?: string | undefined; includeLicensedContent?: 'yes' | ' no' | undefined }
        }
        output: Classification
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/discovery/v2/events': {
      $get: {
        input: {
          query: {
            sort?: string | undefined
            startDateTime?: string | undefined
            endDateTime?: string | undefined
            onsaleStartDateTime?: string | undefined
            onsaleOnStartDate?: string | undefined
            onsaleOnAfterStartDate?: string | undefined
            onsaleEndDateTime?: string | undefined
            city?: string | undefined
            countryCode?: string | undefined
            stateCode?: string | undefined
            postalCode?: string | undefined
            venueId?: string | undefined
            attractionId?: string | undefined
            segmentId?: string | undefined
            segmentName?: string | undefined
            classificationName?: { [x: string]: unknown }[] | undefined
            classificationId?: { [x: string]: unknown }[] | undefined
            marketId?: string | undefined
            promoterId?: string | undefined
            dmaId?: string | undefined
            includeTBA?: 'yes' | ' no' | ' only' | undefined
            includeTBD?: 'yes' | ' no' | ' only' | undefined
            clientVisibility?: string | undefined
            latlong?: string | undefined
            radius?: string | undefined
            unit?: 'miles' | 'km' | undefined
            geoPoint?: string | undefined
            keyword?: string | undefined
            id?: string | undefined
            source?: 'ticketmaster' | ' universe' | ' frontgate' | ' tmr' | undefined
            includeTest?: 'yes' | ' no' | ' only' | undefined
            page?: string | undefined
            size?: string | undefined
            locale?: string | undefined
            includeLicensedContent?: 'yes' | ' no' | undefined
            includeSpellcheck?: 'yes' | ' no' | undefined
          }
        }
        output: Event[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/discovery/v2/events/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: { locale?: string | undefined; includeLicensedContent?: 'yes' | ' no' | undefined }
        }
        output: Event
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/discovery/v2/events/:id/images': {
      $get: {
        input: { param: { id: string } } & {
          query: { locale?: string | undefined; includeLicensedContent?: 'yes' | ' no' | undefined }
        }
        output: EventImages
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/discovery/v2/suggest': {
      $get:
        | {
            input: {
              query: {
                keyword?: string | undefined
                source?: 'ticketmaster' | ' universe' | ' frontgate' | ' tmr' | undefined
                latlong?: string | undefined
                radius?: string | undefined
                unit?: 'miles' | 'km' | undefined
                size?: string | undefined
                includeFuzzy?: 'yes' | ' no' | undefined
                clientVisibility?: string | undefined
                countryCode?: string | undefined
                includeTBA?: 'yes' | ' no' | ' only' | undefined
                includeTBD?: 'yes' | ' no' | ' only' | undefined
                segmentId?: string | undefined
                geoPoint?: string | undefined
                locale?: string | undefined
                includeLicensedContent?: 'yes' | ' no' | undefined
                includeSpellcheck?: 'yes' | ' no' | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                keyword?: string | undefined
                source?: 'ticketmaster' | ' universe' | ' frontgate' | ' tmr' | undefined
                latlong?: string | undefined
                radius?: string | undefined
                unit?: 'miles' | 'km' | undefined
                size?: string | undefined
                includeFuzzy?: 'yes' | ' no' | undefined
                clientVisibility?: string | undefined
                countryCode?: string | undefined
                includeTBA?: 'yes' | ' no' | ' only' | undefined
                includeTBD?: 'yes' | ' no' | ' only' | undefined
                segmentId?: string | undefined
                geoPoint?: string | undefined
                locale?: string | undefined
                includeLicensedContent?: 'yes' | ' no' | undefined
                includeSpellcheck?: 'yes' | ' no' | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/discovery/v2/venues': {
      $get: {
        input: {
          query: {
            sort?: string | undefined
            stateCode?: string | undefined
            countryCode?: string | undefined
            latlong?: string | undefined
            radius?: string | undefined
            unit?: 'miles' | 'km' | undefined
            geoPoint?: string | undefined
            keyword?: string | undefined
            id?: string | undefined
            source?: 'ticketmaster' | ' universe' | ' frontgate' | ' tmr' | undefined
            includeTest?: 'yes' | ' no' | ' only' | undefined
            page?: string | undefined
            size?: string | undefined
            locale?: string | undefined
            includeLicensedContent?: 'yes' | ' no' | undefined
            includeSpellcheck?: 'yes' | ' no' | undefined
          }
        }
        output: Venue[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/discovery/v2/venues/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: { locale?: string | undefined; includeLicensedContent?: 'yes' | ' no' | undefined }
        }
        output: Venue
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
