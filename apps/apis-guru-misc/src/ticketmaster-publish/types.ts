type Level = { id?: string | undefined; names?: { [x: string]: string } | undefined }
type Segment = { id?: string | undefined; names?: { [x: string]: string } | undefined }
type Classification = {
  genre?: Level | undefined
  primary?: boolean | undefined
  segment?: Segment | undefined
  subGenre?: Level | undefined
  subType?: Level | undefined
  type?: Level | undefined
}
type Image = {
  attribution?: string | undefined
  domains?: string[] | undefined
  fallback?: boolean | undefined
  height?: number | undefined
  ratio?: '16_9' | '3_2' | '4_3' | undefined
  url?: string | undefined
  width?: number | undefined
}
type Relationship = { [x: string]: unknown }
type Source = { id?: string | undefined; name?: string | undefined }
type Attraction = {
  active?: boolean | undefined
  additionalInfos?: { [x: string]: string } | undefined
  classifications?: Classification[] | undefined
  descriptions?: { [x: string]: string } | undefined
  discoverable?: boolean | undefined
  images?: Image[] | undefined
  names?: { [x: string]: string } | undefined
  references?: { [x: string]: string } | undefined
  relationships?: Relationship[] | undefined
  source?: Source | undefined
  test?: boolean | undefined
  type: 'event' | 'venue' | 'attraction'
  url?: string | undefined
  version?: bigint | undefined
}
type IngestionResult = {
  id?: string | undefined
  ignoredProperties?: { [x: string]: { [x: string]: unknown } } | undefined
  invalidProperties?: { [x: string]: { [x: string]: unknown } } | undefined
  invalidValues?: { [x: string]: { [x: string]: unknown } } | undefined
  missingProperties?: { [x: string]: { [x: string]: unknown } } | undefined
  status: 'Error' | 'SuccessWarning' | 'Success'
  unknownProperties?: { [x: string]: { [x: string]: unknown } } | undefined
}
type Change = {
  from?: string | undefined
  op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test'
  path: string
  value?: { [x: string]: unknown } | undefined
}
type AugmentationData = {
  changes: Change[]
  relatedEntityId: string
  relatedEntityType: 'event' | 'attraction' | 'venue'
  score?: number | undefined
  source: string
  versionNumber: bigint
}
type RegionRestrictions = { allowed?: string[] | undefined }
type LicensingInformation = { license: string; regionRestriction?: RegionRestrictions | undefined }
type Video = {
  embedUrl?: string | undefined
  licensingInformation: LicensingInformation
  source: Source
  url: string
}
type Entitlement = {
  data: { [x: string]: unknown }
  relatedEntityId?: string | undefined
  relatedEntitySource?: Source | undefined
  relatedEntityType: 'event' | 'venue' | 'attraction'
  source: 'ticketmaster'
  versionNumber?: bigint | undefined
}
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
  localTime?: LocalTime | undefined
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
  start?: StartDates | undefined
  status?: EventStatus | undefined
  timezone?: string | undefined
}
type Location = { latitude?: number | undefined; longitude?: number | undefined }
type Address = {
  line1s?: { [x: string]: string } | undefined
  line2s?: { [x: string]: string } | undefined
  line3s?: { [x: string]: string } | undefined
}
type Area = { names?: { [x: string]: string } | undefined }
type City = { names?: { [x: string]: string } | undefined }
type Country = { countryCode?: string | undefined; names?: { [x: string]: string } | undefined }
type State = { names?: { [x: string]: string } | undefined; stateCode?: string | undefined }
type Place = {
  address?: Address | undefined
  area?: Area | undefined
  city?: City | undefined
  country?: Country | undefined
  location?: Location | undefined
  names?: { [x: string]: string } | undefined
  postalCode?: string | undefined
  state?: State | undefined
}
type PriceRange = {
  currency?: string | undefined
  max?: number | undefined
  min?: number | undefined
  type?: 'standard' | undefined
}
type Promoter = {
  descriptions?: { [x: string]: string } | undefined
  id?: string | undefined
  names?: { [x: string]: string } | undefined
}
type PublicVisibility = {
  endDateTime?: string | undefined
  startDateTime?: string | undefined
  visible?: boolean | undefined
}
type Presale = {
  descriptions?: { [x: string]: string } | undefined
  endDateTime?: string | undefined
  names?: { [x: string]: string } | undefined
  startDateTime?: string | undefined
  url?: string | undefined
}
type PublicSaleDates = {
  endDateTime?: string | undefined
  startDateTime?: string | undefined
  startTBD?: boolean | undefined
}
type EventSalesDates = { presales?: Presale[] | undefined; public?: PublicSaleDates | undefined }
type VenueBoxOfficeInfo = {
  acceptedPaymentDetails?: { [x: string]: string } | undefined
  openHoursDetails?: { [x: string]: string } | undefined
  phoneNumberDetails?: { [x: string]: string } | undefined
  willCallDetails?: { [x: string]: string } | undefined
}
type Dma = { id?: number | undefined }
type VenueGeneralInfo = {
  childRules?: { [x: string]: string } | undefined
  generalRules?: { [x: string]: string } | undefined
}
type Market = { id?: string | undefined }
type Twitter = { handle?: '@a Twitter handle' | undefined; hashtags?: string[] | undefined }
type Social = { twitter?: Twitter | undefined }
type Venue = {
  accessibleSeatingDetails?: { [x: string]: string } | undefined
  active?: boolean | undefined
  additionalInfos?: { [x: string]: string } | undefined
  address?: Address | undefined
  boxOfficeInfo?: VenueBoxOfficeInfo | undefined
  city?: City | undefined
  country?: Country | undefined
  currency?: string | undefined
  descriptions?: { [x: string]: string } | undefined
  discoverable?: boolean | undefined
  distance?: number | undefined
  dma?: Dma[] | undefined
  generalInfo?: VenueGeneralInfo | undefined
  images?: Image[] | undefined
  location?: Location | undefined
  markets?: Market[] | undefined
  names?: { [x: string]: string } | undefined
  parkingDetails?: { [x: string]: string } | undefined
  postalCode?: string | undefined
  references?: { [x: string]: string } | undefined
  relationships?: Relationship[] | undefined
  social?: Social | undefined
  source?: Source | undefined
  state?: State | undefined
  test?: boolean | undefined
  timezone?: string | undefined
  type: 'event' | 'venue' | 'attraction'
  units?: string | undefined
  url?: string | undefined
  version?: bigint | undefined
}
type Event = {
  active?: boolean | undefined
  additionalInfos?: { [x: string]: string } | undefined
  attractions?: Attraction[] | undefined
  classifications?: Classification[] | undefined
  dates?: EventDates | undefined
  descriptions?: { [x: string]: string } | undefined
  discoverable?: boolean | undefined
  distance?: number | undefined
  images?: Image[] | undefined
  infos?: { [x: string]: string } | undefined
  location?: Location | undefined
  names?: { [x: string]: string } | undefined
  place?: Place | undefined
  pleaseNotes?: { [x: string]: string } | undefined
  priceRanges?: PriceRange[] | undefined
  promoter?: Promoter | undefined
  publicVisibility?: PublicVisibility | undefined
  references?: { [x: string]: string } | undefined
  relationships?: Relationship[] | undefined
  sales?: EventSalesDates | undefined
  source?: Source | undefined
  test?: boolean | undefined
  type: 'event' | 'venue' | 'attraction'
  units?: string | undefined
  url?: string | undefined
  venue?: Venue | undefined
  version?: bigint | undefined
}
type ExtensionData = {
  data: { [x: string]: unknown }
  relatedEntityId?: string | undefined
  relatedEntitySource?: Source | undefined
  relatedEntityType: 'event' | 'venue' | 'attraction'
  source: string
  type: string
  versionNumber?: bigint | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/publish/v2/attractions': {
      $post: {
        input: { header: { 'TMPS-Correlation-Id': string } } & { json: Attraction }
        output: IngestionResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/publish/v2/attractions/:id': {
      $patch: {
        input: { param: { id: string } } & { header: { 'TMPS-Correlation-Id': string } } & {
          json: AugmentationData
        }
        output: IngestionResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/publish/v2/attractions/:id/videos': {
      $post: {
        input: { param: { id: string } } & { header: { 'TMPS-Correlation-Id': string } } & {
          json: Video
        }
        output: IngestionResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/publish/v2/entitlements': {
      $post: {
        input: { header: { 'TMPS-Correlation-Id': string } } & { json: Entitlement }
        output: IngestionResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/publish/v2/events': {
      $post: {
        input: { header: { 'TMPS-Correlation-Id': string } } & { json: Event }
        output: IngestionResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/publish/v2/events/:id': {
      $patch: {
        input: { param: { id: string } } & { header: { 'TMPS-Correlation-Id': string } } & {
          json: AugmentationData
        }
        output: IngestionResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/publish/v2/events/:id/videos': {
      $post: {
        input: { param: { id: string } } & { header: { 'TMPS-Correlation-Id': string } } & {
          json: Video
        }
        output: IngestionResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/publish/v2/extensions': {
      $post: {
        input: { header: { 'TMPS-Correlation-Id': string } } & { json: ExtensionData }
        output: IngestionResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/publish/v2/venues': {
      $post: {
        input: { header: { 'TMPS-Correlation-Id': string } } & { json: Venue }
        output: IngestionResult
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/publish/v2/venues/:id': {
      $patch: {
        input: { param: { id: string } } & { header: { 'TMPS-Correlation-Id': string } } & {
          json: AugmentationData
        }
        output: IngestionResult
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
