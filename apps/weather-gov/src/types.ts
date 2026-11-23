type StateTerritoryCode =
  | 'AL'
  | 'AK'
  | 'AS'
  | 'AR'
  | 'AZ'
  | 'CA'
  | 'CO'
  | 'CT'
  | 'DE'
  | 'DC'
  | 'FL'
  | 'GA'
  | 'GU'
  | 'HI'
  | 'ID'
  | 'IL'
  | 'IN'
  | 'IA'
  | 'KS'
  | 'KY'
  | 'LA'
  | 'ME'
  | 'MD'
  | 'MA'
  | 'MI'
  | 'MN'
  | 'MS'
  | 'MO'
  | 'MT'
  | 'NE'
  | 'NV'
  | 'NH'
  | 'NJ'
  | 'NM'
  | 'NY'
  | 'NC'
  | 'ND'
  | 'OH'
  | 'OK'
  | 'OR'
  | 'PA'
  | 'PR'
  | 'RI'
  | 'SC'
  | 'SD'
  | 'TN'
  | 'TX'
  | 'UT'
  | 'VT'
  | 'VI'
  | 'VA'
  | 'WA'
  | 'WV'
  | 'WI'
  | 'WY'
  | 'MP'
  | 'PW'
  | 'FM'
  | 'MH'
type MarineAreaCode =
  | 'AM'
  | 'AN'
  | 'GM'
  | 'LC'
  | 'LE'
  | 'LH'
  | 'LM'
  | 'LO'
  | 'LS'
  | 'PH'
  | 'PK'
  | 'PM'
  | 'PS'
  | 'PZ'
  | 'SL'
type AreaCode = StateTerritoryCode | MarineAreaCode
type PointString = string
type MarineRegionCode = 'AL' | 'AT' | 'GL' | 'GM' | 'PA' | 'PI'
type NWSZoneID = string
type AlertUrgency = 'Immediate' | 'Expected' | 'Future' | 'Past' | 'Unknown'
type AlertSeverity = 'Extreme' | 'Severe' | 'Moderate' | 'Minor' | 'Unknown'
type AlertCertainty = 'Observed' | 'Likely' | 'Possible' | 'Unlikely' | 'Unknown'
type JsonLdContext = { [x: string]: unknown }[] | { [x: string]: unknown }
type GeoJsonCoordinate = number[]
type GeoJsonBoundingBox = number[]
type GeoJsonLineString = GeoJsonCoordinate[]
type GeoJsonPolygon = GeoJsonCoordinate[][]
type GeoJsonGeometry =
  | { type: 'Point'; coordinates: GeoJsonCoordinate; bbox?: GeoJsonBoundingBox | undefined }
  | { type: 'LineString'; coordinates: GeoJsonLineString; bbox?: GeoJsonBoundingBox | undefined }
  | { type: 'Polygon'; coordinates: GeoJsonPolygon; bbox?: GeoJsonBoundingBox | undefined }
  | { type: 'MultiPoint'; coordinates: GeoJsonCoordinate[]; bbox?: GeoJsonBoundingBox | undefined }
  | {
      type: 'MultiLineString'
      coordinates: GeoJsonLineString[]
      bbox?: GeoJsonBoundingBox | undefined
    }
  | { type: 'MultiPolygon'; coordinates: GeoJsonPolygon[]; bbox?: GeoJsonBoundingBox | undefined }
  | ({ [x: string]: unknown } | null)
type GeoJsonFeature = {
  '@context'?: JsonLdContext | undefined
  id?: string | undefined
  type: 'Feature'
  geometry: GeoJsonGeometry
  properties: { [x: string]: unknown }
}
type AlertId = string
type AlertStatus = 'Actual' | 'Exercise' | 'System' | 'Test' | 'Draft'
type AlertMessageType = 'Alert' | 'Update' | 'Cancel' | 'Ack' | 'Error'
type Alert = {
  id?: AlertId | undefined
  areaDesc?: string | undefined
  geocode?: { UGC?: NWSZoneID[] | undefined; SAME?: string[] | undefined } | undefined
  affectedZones?: string[] | undefined
  references?:
    | {
        '@id'?: string | undefined
        identifier?: AlertId | undefined
        sender?: string | undefined
        sent?: string | undefined
      }[]
    | undefined
  sent?: string | undefined
  effective?: string | undefined
  onset?: (string | null) | undefined
  expires?: string | undefined
  ends?: (string | null) | undefined
  status?: AlertStatus | undefined
  messageType?: AlertMessageType | undefined
  category?:
    | 'Met'
    | 'Geo'
    | 'Safety'
    | 'Security'
    | 'Rescue'
    | 'Fire'
    | 'Health'
    | 'Env'
    | 'Transport'
    | 'Infra'
    | 'CBRNE'
    | 'Other'
    | undefined
  severity?: AlertSeverity | undefined
  certainty?: AlertCertainty | undefined
  urgency?: AlertUrgency | undefined
  event?: string | undefined
  sender?: string | undefined
  senderName?: string | undefined
  headline?: (string | null) | undefined
  description?: string | undefined
  instruction?: (string | null) | undefined
  note?: (string | null) | undefined
  response?:
    | 'Shelter'
    | 'Evacuate'
    | 'Prepare'
    | 'Execute'
    | 'Avoid'
    | 'Monitor'
    | 'Assess'
    | 'AllClear'
    | 'None'
    | undefined
  parameters?: { [x: string]: { [x: string]: unknown }[] } | undefined
  scope?: 'Public' | 'Restricted' | 'Private' | undefined
  code?: string | undefined
  language?: string | undefined
  web?: string | undefined
  eventCode?: { [x: string]: { [x: string]: unknown }[] } | undefined
}
type PaginationInfo = { next: string }
type AlertCollectionGeoJson = {
  '@context'?: JsonLdContext | undefined
  type: 'FeatureCollection'
  features: { properties?: Alert | undefined }[]
  title?: string | undefined
  updated?: string | undefined
  pagination?: PaginationInfo | undefined
}
type AlertCollectionJsonLd = {
  title?: string | undefined
  updated?: string | undefined
  pagination?: PaginationInfo | undefined
  '@context'?: JsonLdContext | undefined
  '@graph'?: Alert[] | undefined
}
type AlertXMLParameter = { valueName?: string | undefined; value?: string | undefined }
type AlertAtomEntry = {
  id?: string | undefined
  updated?: string | undefined
  published?: string | undefined
  author?: { name?: string | undefined } | undefined
  summary?: string | undefined
  event?: string | undefined
  sent?: string | undefined
  effective?: string | undefined
  expires?: string | undefined
  status?: string | undefined
  msgType?: string | undefined
  category?: string | undefined
  urgency?: string | undefined
  severity?: string | undefined
  certainty?: string | undefined
  areaDesc?: string | undefined
  polygon?: string | undefined
  geocode?: AlertXMLParameter[] | undefined
  parameter?: AlertXMLParameter[] | undefined
}
type AlertAtomFeed = {
  id?: string | undefined
  generator?: string | undefined
  updated?: string | undefined
  author?: { name?: string | undefined } | undefined
  title?: string | undefined
  entry?: AlertAtomEntry[] | undefined
}
type ProblemDetail = {
  type: string
  title: string
  status: number
  detail: string
  instance: string
  correlationId: string
}
type ActiveAlertCollectionGeoJson = {
  '@context'?: JsonLdContext | undefined
  type: 'FeatureCollection'
  features: { properties?: Alert | undefined }[]
  title?: string | undefined
  updated?: string | undefined
}
type ActiveAlertCollectionJsonLd = {
  title?: string | undefined
  updated?: string | undefined
  '@context'?: JsonLdContext | undefined
  '@graph'?: Alert[] | undefined
}
type AlertGeoJson = {
  '@context'?: JsonLdContext | undefined
  id?: string | undefined
  type: 'Feature'
  geometry: GeoJsonGeometry
  properties: Alert
}
type AlertJsonLd = { '@graph'?: Alert[] | undefined }
type AlertCap = { [x: string]: unknown }
type NWSCenterWeatherServiceUnitId =
  | 'ZAB'
  | 'ZAN'
  | 'ZAU'
  | 'ZBW'
  | 'ZDC'
  | 'ZDV'
  | 'ZFA'
  | 'ZFW'
  | 'ZHU'
  | 'ZID'
  | 'ZJX'
  | 'ZKC'
  | 'ZLA'
  | 'ZLC'
  | 'ZMA'
  | 'ZME'
  | 'ZMP'
  | 'ZNY'
  | 'ZOA'
  | 'ZOB'
  | 'ZSE'
  | 'ZTL'
type Office = {
  '@context'?: JsonLdContext | undefined
  '@type'?: 'GovernmentOrganization' | undefined
  '@id'?: string | undefined
  id?: string | undefined
  name?: string | undefined
  address?:
    | {
        '@type'?: 'PostalAddress' | undefined
        streetAddress?: string | undefined
        addressLocality?: string | undefined
        addressRegion?: string | undefined
        postalCode?: string | undefined
      }
    | undefined
  telephone?: string | undefined
  faxNumber?: string | undefined
  email?: string | undefined
  sameAs?: string | undefined
  nwsRegion?: string | undefined
  parentOrganization?: string | undefined
  responsibleCounties?: string[] | undefined
  responsibleForecastZones?: string[] | undefined
  responsibleFireZones?: string[] | undefined
  approvedObservationStations?: string[] | undefined
}
type CenterWeatherAdvisory = {
  id?: string | undefined
  issueTime?: string | undefined
  cwsu?: NWSCenterWeatherServiceUnitId | undefined
  sequence?: number | undefined
  start?: string | undefined
  end?: string | undefined
  observedProperty?: string | undefined
  text?: string | undefined
}
type CenterWeatherAdvisoryCollectionGeoJson = {
  '@context'?: JsonLdContext | undefined
  type: 'FeatureCollection'
  features: { properties?: CenterWeatherAdvisory | undefined }[]
}
type Date = string
type CenterWeatherAdvisoryGeoJson = {
  '@context'?: JsonLdContext | undefined
  id?: string | undefined
  type: 'Feature'
  geometry: GeoJsonGeometry
  properties: CenterWeatherAdvisory
}
type ATSUIdentifier = string
type SigmetSequenceNumber = string
type Sigmet = {
  id?: string | undefined
  issueTime?: string | undefined
  fir?: (string | null) | undefined
  atsu?: ATSUIdentifier | undefined
  sequence?: (string | null) | undefined
  phenomenon?: (string | null) | undefined
  start?: string | undefined
  end?: string | undefined
}
type SigmetGeoJson = {
  '@context'?: JsonLdContext | undefined
  id?: string | undefined
  type: 'Feature'
  geometry: GeoJsonGeometry
  properties: Sigmet
}
type SigmetCollectionGeoJson = {
  '@context'?: JsonLdContext | undefined
  type: 'FeatureCollection'
  features: SigmetGeoJson[]
}
type Time = string
type NWSForecastOfficeId =
  | 'AKQ'
  | 'ALY'
  | 'BGM'
  | 'BOX'
  | 'BTV'
  | 'BUF'
  | 'CAE'
  | 'CAR'
  | 'CHS'
  | 'CLE'
  | 'CTP'
  | 'GSP'
  | 'GYX'
  | 'ILM'
  | 'ILN'
  | 'LWX'
  | 'MHX'
  | 'OKX'
  | 'PBZ'
  | 'PHI'
  | 'RAH'
  | 'RLX'
  | 'RNK'
  | 'ABQ'
  | 'AMA'
  | 'BMX'
  | 'BRO'
  | 'CRP'
  | 'EPZ'
  | 'EWX'
  | 'FFC'
  | 'FWD'
  | 'HGX'
  | 'HUN'
  | 'JAN'
  | 'JAX'
  | 'KEY'
  | 'LCH'
  | 'LIX'
  | 'LUB'
  | 'LZK'
  | 'MAF'
  | 'MEG'
  | 'MFL'
  | 'MLB'
  | 'MOB'
  | 'MRX'
  | 'OHX'
  | 'OUN'
  | 'SHV'
  | 'SJT'
  | 'SJU'
  | 'TAE'
  | 'TBW'
  | 'TSA'
  | 'ABR'
  | 'APX'
  | 'ARX'
  | 'BIS'
  | 'BOU'
  | 'CYS'
  | 'DDC'
  | 'DLH'
  | 'DMX'
  | 'DTX'
  | 'DVN'
  | 'EAX'
  | 'FGF'
  | 'FSD'
  | 'GID'
  | 'GJT'
  | 'GLD'
  | 'GRB'
  | 'GRR'
  | 'ICT'
  | 'ILX'
  | 'IND'
  | 'IWX'
  | 'JKL'
  | 'LBF'
  | 'LMK'
  | 'LOT'
  | 'LSX'
  | 'MKX'
  | 'MPX'
  | 'MQT'
  | 'OAX'
  | 'PAH'
  | 'PUB'
  | 'RIW'
  | 'SGF'
  | 'TOP'
  | 'UNR'
  | 'BOI'
  | 'BYZ'
  | 'EKA'
  | 'FGZ'
  | 'GGW'
  | 'HNX'
  | 'LKN'
  | 'LOX'
  | 'MFR'
  | 'MSO'
  | 'MTR'
  | 'OTX'
  | 'PDT'
  | 'PIH'
  | 'PQR'
  | 'PSR'
  | 'REV'
  | 'SEW'
  | 'SGX'
  | 'SLC'
  | 'STO'
  | 'TFX'
  | 'TWC'
  | 'VEF'
  | 'AER'
  | 'AFC'
  | 'AFG'
  | 'AJK'
  | 'ALU'
  | 'GUM'
  | 'HPA'
  | 'HFO'
  | 'PPG'
  | 'PQE'
  | 'PQW'
  | 'STU'
  | 'NH1'
  | 'NH2'
  | 'ONA'
  | 'ONP'
type GeometryString = string | null
type ISO8601Interval = string | string | string
type UnitOfMeasure = string
type QuantitativeValue = {
  value?: (number | null) | undefined
  maxValue?: number | undefined
  minValue?: number | undefined
  unitCode?: UnitOfMeasure | undefined
  qualityControl?: 'Z' | 'C' | 'S' | 'V' | 'X' | 'Q' | 'G' | 'B' | 'T' | undefined
}
type Gridpoint = {
  '@context'?: JsonLdContext | undefined
  geometry?: GeometryString | undefined
  '@id'?: string | undefined
  '@type'?: 'wx:Gridpoint' | undefined
  updateTime?: string | undefined
  validTimes?: ISO8601Interval | undefined
  elevation?: QuantitativeValue | undefined
  forecastOffice?: string | undefined
  gridId?: string | undefined
  gridX?: number | undefined
  gridY?: number | undefined
  weather?:
    | {
        values: {
          validTime: ISO8601Interval
          value: {
            coverage:
              | 'areas'
              | 'brief'
              | 'chance'
              | 'definite'
              | 'few'
              | 'frequent'
              | 'intermittent'
              | 'isolated'
              | 'likely'
              | 'numerous'
              | 'occasional'
              | 'patchy'
              | 'periods'
              | 'scattered'
              | 'slight_chance'
              | 'widespread'
            weather:
              | 'blowing_dust'
              | 'blowing_sand'
              | 'blowing_snow'
              | 'drizzle'
              | 'fog'
              | 'freezing_fog'
              | 'freezing_drizzle'
              | 'freezing_rain'
              | 'freezing_spray'
              | 'frost'
              | 'hail'
              | 'haze'
              | 'ice_crystals'
              | 'ice_fog'
              | 'rain'
              | 'rain_showers'
              | 'sleet'
              | 'smoke'
              | 'snow'
              | 'snow_showers'
              | 'thunderstorms'
              | 'volcanic_ash'
              | 'water_spouts'
            intensity: 'very_light' | 'light' | 'moderate' | 'heavy'
            visibility: QuantitativeValue
            attributes: (
              | 'damaging_wind'
              | 'dry_thunderstorms'
              | 'flooding'
              | 'gusty_wind'
              | 'heavy_rain'
              | 'large_hail'
              | 'small_hail'
              | 'tornadoes'
            )[]
          }[]
        }[]
      }
    | undefined
  hazards?:
    | {
        values: {
          validTime: ISO8601Interval
          value: { phenomenon: string; significance: string; event_number: number | null }[]
        }[]
      }
    | undefined
}
type GridpointGeoJson = {
  '@context'?: JsonLdContext | undefined
  id?: string | undefined
  type: 'Feature'
  geometry: GeoJsonGeometry
  properties: Gridpoint
}
type GridpointForecastUnits = 'us' | 'si'
type Gridpoint12hForecastPeriod = {
  number?: number | undefined
  name?: string | undefined
  startTime?: string | undefined
  endTime?: string | undefined
  isDaytime?: boolean | undefined
  temperature?: QuantitativeValue | number | undefined
  temperatureUnit?: 'F' | 'C' | undefined
  temperatureTrend?: 'rising' | 'falling' | undefined
  probabilityOfPrecipitation?: QuantitativeValue | undefined
  windSpeed?: QuantitativeValue | string | undefined
  windGust?: QuantitativeValue | string | ({ [x: string]: unknown } | null) | undefined
  windDirection?:
    | 'N'
    | 'NNE'
    | 'NE'
    | 'ENE'
    | 'E'
    | 'ESE'
    | 'SE'
    | 'SSE'
    | 'S'
    | 'SSW'
    | 'SW'
    | 'WSW'
    | 'W'
    | 'WNW'
    | 'NW'
    | 'NNW'
    | undefined
  icon?: string | undefined
  shortForecast?: string | undefined
  detailedForecast?: string | undefined
}
type Gridpoint12hForecast = {
  '@context'?: JsonLdContext | undefined
  geometry?: GeometryString | undefined
  units?: GridpointForecastUnits | undefined
  forecastGenerator?: string | undefined
  generatedAt?: string | undefined
  updateTime?: string | undefined
  validTimes?: ISO8601Interval | undefined
  elevation?: QuantitativeValue | undefined
  periods?: Gridpoint12hForecastPeriod[] | undefined
}
type Gridpoint12hForecastGeoJson = {
  '@context'?: JsonLdContext | undefined
  id?: string | undefined
  type: 'Feature'
  geometry: GeoJsonGeometry
  properties: Gridpoint12hForecast
}
type Gridpoint12hForecastJsonLd = {
  '@context': JsonLdContext
  geometry: GeometryString
  units?: GridpointForecastUnits | undefined
  forecastGenerator?: string | undefined
  generatedAt?: string | undefined
  updateTime?: string | undefined
  validTimes?: ISO8601Interval | undefined
  elevation?: QuantitativeValue | undefined
  periods?: Gridpoint12hForecastPeriod[] | undefined
}
type GridpointHourlyForecastPeriod = {
  number?: number | undefined
  name?: string | undefined
  startTime?: string | undefined
  endTime?: string | undefined
  isDaytime?: boolean | undefined
  temperature?: QuantitativeValue | number | undefined
  temperatureUnit?: 'F' | 'C' | undefined
  temperatureTrend?: 'rising' | 'falling' | undefined
  probabilityOfPrecipitation?: QuantitativeValue | undefined
  dewpoint?: QuantitativeValue | undefined
  relativeHumidity?: QuantitativeValue | undefined
  windSpeed?: QuantitativeValue | string | undefined
  windGust?: QuantitativeValue | string | ({ [x: string]: unknown } | null) | undefined
  windDirection?:
    | 'N'
    | 'NNE'
    | 'NE'
    | 'ENE'
    | 'E'
    | 'ESE'
    | 'SE'
    | 'SSE'
    | 'S'
    | 'SSW'
    | 'SW'
    | 'WSW'
    | 'W'
    | 'WNW'
    | 'NW'
    | 'NNW'
    | undefined
  icon?: string | undefined
  shortForecast?: string | undefined
  detailedForecast?: string | undefined
}
type GridpointHourlyForecast = {
  '@context'?: JsonLdContext | undefined
  geometry?: GeometryString | undefined
  units?: GridpointForecastUnits | undefined
  forecastGenerator?: string | undefined
  generatedAt?: string | undefined
  updateTime?: string | undefined
  validTimes?: ISO8601Interval | undefined
  elevation?: QuantitativeValue | undefined
  periods?: GridpointHourlyForecastPeriod[] | undefined
}
type GridpointHourlyForecastGeoJson = {
  '@context'?: JsonLdContext | undefined
  id?: string | undefined
  type: 'Feature'
  geometry: GeoJsonGeometry
  properties: GridpointHourlyForecast
}
type GridpointHourlyForecastJsonLd = {
  '@context': JsonLdContext
  geometry: GeometryString
  units?: GridpointForecastUnits | undefined
  forecastGenerator?: string | undefined
  generatedAt?: string | undefined
  updateTime?: string | undefined
  validTimes?: ISO8601Interval | undefined
  elevation?: QuantitativeValue | undefined
  periods?: GridpointHourlyForecastPeriod[] | undefined
}
type ObservationStation = {
  '@context'?: JsonLdContext | undefined
  geometry?: GeometryString | undefined
  '@id'?: string | undefined
  '@type'?: 'wx:ObservationStation' | undefined
  elevation?: QuantitativeValue | undefined
  stationIdentifier?: string | undefined
  name?: string | undefined
  timeZone?: string | undefined
  provider?: string | undefined
  subProvider?: string | undefined
  forecast?: string | undefined
  county?: string | undefined
  fireWeatherZone?: string | undefined
  distance?: QuantitativeValue | undefined
  bearing?: QuantitativeValue | undefined
}
type ObservationStationCollectionGeoJson = {
  '@context'?: JsonLdContext | undefined
  type: 'FeatureCollection'
  features: { properties?: ObservationStation | undefined }[]
  observationStations?: string[] | undefined
  pagination?: PaginationInfo | undefined
}
type ObservationStationCollectionJsonLd = {
  '@context'?: JsonLdContext | undefined
  '@graph'?: ObservationStation[] | undefined
  observationStations?: string[] | undefined
  pagination?: PaginationInfo | undefined
}
type BinaryFile = File
type MetarPhenomenon = {
  intensity: 'light' | 'heavy'
  modifier: 'patches' | 'blowing' | 'low_drifting' | 'freezing' | 'shallow' | 'partial' | 'showers'
  weather:
    | 'fog_mist'
    | 'dust_storm'
    | 'dust'
    | 'drizzle'
    | 'funnel_cloud'
    | 'fog'
    | 'smoke'
    | 'hail'
    | 'snow_pellets'
    | 'haze'
    | 'ice_crystals'
    | 'ice_pellets'
    | 'dust_whirls'
    | 'spray'
    | 'rain'
    | 'sand'
    | 'snow_grains'
    | 'snow'
    | 'squalls'
    | 'sand_storm'
    | 'thunderstorms'
    | 'unknown'
    | 'volcanic_ash'
  rawString: string
  inVicinity?: boolean | undefined
}
type MetarSkyCoverage = 'OVC' | 'BKN' | 'SCT' | 'FEW' | 'SKC' | 'CLR' | 'VV'
type Observation = {
  '@context'?: JsonLdContext | undefined
  geometry?: GeometryString | undefined
  '@id'?: string | undefined
  '@type'?: 'wx:ObservationStation' | undefined
  elevation?: QuantitativeValue | undefined
  station?: string | undefined
  stationId?: string | undefined
  stationName?: string | undefined
  timestamp?: string | undefined
  rawMessage?: string | undefined
  textDescription?: string | undefined
  icon?: (string | null) | undefined
  presentWeather?: MetarPhenomenon[] | undefined
  temperature?: QuantitativeValue | undefined
  dewpoint?: QuantitativeValue | undefined
  windDirection?: QuantitativeValue | undefined
  windSpeed?: QuantitativeValue | undefined
  windGust?: QuantitativeValue | undefined
  barometricPressure?: QuantitativeValue | undefined
  seaLevelPressure?: QuantitativeValue | undefined
  visibility?: QuantitativeValue | undefined
  maxTemperatureLast24Hours?: QuantitativeValue | undefined
  minTemperatureLast24Hours?: QuantitativeValue | undefined
  precipitationLastHour?: QuantitativeValue | undefined
  precipitationLast3Hours?: QuantitativeValue | undefined
  precipitationLast6Hours?: QuantitativeValue | undefined
  relativeHumidity?: QuantitativeValue | undefined
  windChill?: QuantitativeValue | undefined
  heatIndex?: QuantitativeValue | undefined
  cloudLayers?: ({ base: QuantitativeValue; amount: MetarSkyCoverage }[] | null) | undefined
}
type ObservationCollectionGeoJson = {
  '@context'?: JsonLdContext | undefined
  type: 'FeatureCollection'
  features: { properties?: Observation | undefined }[]
  pagination?: PaginationInfo | undefined
}
type ObservationCollectionJsonLd = {
  '@context'?: JsonLdContext | undefined
  '@graph'?: Observation[] | undefined
  pagination?: PaginationInfo | undefined
}
type ObservationGeoJson = {
  '@context'?: JsonLdContext | undefined
  id?: string | undefined
  type: 'Feature'
  geometry: GeoJsonGeometry
  properties: Observation
}
type ObservationStationGeoJson = {
  '@context'?: JsonLdContext | undefined
  id?: string | undefined
  type: 'Feature'
  geometry: GeoJsonGeometry
  properties: ObservationStation
}
type ObservationStationJsonLd = {
  '@context': JsonLdContext
  geometry: GeometryString
  '@id'?: string | undefined
  '@type'?: 'wx:ObservationStation' | undefined
  elevation?: QuantitativeValue | undefined
  stationIdentifier?: string | undefined
  name?: string | undefined
  timeZone?: string | undefined
  provider?: string | undefined
  subProvider?: string | undefined
  forecast?: string | undefined
  county?: string | undefined
  fireWeatherZone?: string | undefined
  distance?: QuantitativeValue | undefined
  bearing?: QuantitativeValue | undefined
}
type NWSRegionalHQId = 'ARH' | 'CRH' | 'ERH' | 'PRH' | 'SRH' | 'WRH'
type NWSNationalHQId = 'NWS'
type NWSOfficeId = NWSForecastOfficeId | NWSRegionalHQId | NWSNationalHQId
type NWSConnectDocumentMetadata = {
  id?: string | undefined
  startTime?: string | undefined
  endTime?: string | undefined
  updateTime?: string | undefined
  title?: string | undefined
  description?: string | undefined
  priority?: boolean | undefined
  download?: string | undefined
}
type OfficeHeadline = {
  '@context'?: JsonLdContext | undefined
  '@id'?: string | undefined
  id?: string | undefined
  office?: string | undefined
  important?: boolean | undefined
  issuanceTime?: string | undefined
  link?: string | undefined
  name?: string | undefined
  title?: string | undefined
  summary?: (string | null) | undefined
  content?: string | undefined
}
type OfficeHeadlineCollection = { '@context': JsonLdContext; '@graph': OfficeHeadline[] }
type OfficeWeatherStory = {
  id?: string | undefined
  startTime?: string | undefined
  endTime?: string | undefined
  updateTime?: string | undefined
  title?: string | undefined
  description?: string | undefined
  priority?: boolean | undefined
  download?: string | undefined
  altText?: string | undefined
  order?: number | undefined
}
type OfficeWeatherStoryCollection = OfficeWeatherStory[]
type RelativeLocation = {
  city?: string | undefined
  state?: string | undefined
  distance?: QuantitativeValue | undefined
  bearing?: QuantitativeValue | undefined
}
type RelativeLocationGeoJson = {
  '@context'?: JsonLdContext | undefined
  id?: string | undefined
  type: 'Feature'
  geometry: GeoJsonGeometry
  properties: RelativeLocation
}
type RelativeLocationJsonLd = {
  city?: string | undefined
  state?: string | undefined
  distance?: QuantitativeValue | undefined
  bearing?: QuantitativeValue | undefined
  geometry: GeometryString
}
type AstronomicalData = {
  sunrise?: (string | null) | undefined
  sunset?: (string | null) | undefined
  transit?: (string | null) | undefined
  civilTwilightBegin?: (string | null) | undefined
  civilTwilightEnd?: (string | null) | undefined
  nauticalTwilightBegin?: (string | null) | undefined
  nauticalTwilightEnd?: (string | null) | undefined
  astronomicalTwilightBegin?: (string | null) | undefined
  astronomicalTwilightEnd?: (string | null) | undefined
}
type Point = {
  '@context'?: JsonLdContext | undefined
  geometry?: GeometryString | undefined
  '@id'?: string | undefined
  '@type'?: 'wx:Point' | undefined
  cwa?: NWSForecastOfficeId | undefined
  type?: 'land' | 'marine' | undefined
  forecastOffice?: string | undefined
  gridId?: NWSForecastOfficeId | undefined
  gridX?: number | undefined
  gridY?: number | undefined
  forecast?: string | undefined
  forecastHourly?: string | undefined
  forecastGridData?: string | undefined
  observationStations?: string | undefined
  relativeLocation?: RelativeLocationGeoJson | RelativeLocationJsonLd | undefined
  forecastZone?: string | undefined
  county?: string | undefined
  fireWeatherZone?: string | undefined
  timeZone?: string | undefined
  radarStation?: string | undefined
  astronomicalData?: AstronomicalData | undefined
  nwr?:
    | {
        transmitter?: (string | null) | undefined
        sameCode?: string | undefined
        areaBroadcast?: (string | null) | undefined
        pointBroadcast?: (string | null) | undefined
      }
    | undefined
}
type PointGeoJson = {
  '@context'?: JsonLdContext | undefined
  id?: string | undefined
  type: 'Feature'
  geometry: GeoJsonGeometry
  properties: Point
}
type PointJsonLd = {
  '@context': JsonLdContext
  geometry: GeometryString
  '@id'?: string | undefined
  '@type'?: 'wx:Point' | undefined
  cwa?: NWSForecastOfficeId | undefined
  type?: 'land' | 'marine' | undefined
  forecastOffice?: string | undefined
  gridId?: NWSForecastOfficeId | undefined
  gridX?: number | undefined
  gridY?: number | undefined
  forecast?: string | undefined
  forecastHourly?: string | undefined
  forecastGridData?: string | undefined
  observationStations?: string | undefined
  relativeLocation?: RelativeLocationGeoJson | RelativeLocationJsonLd | undefined
  forecastZone?: string | undefined
  county?: string | undefined
  fireWeatherZone?: string | undefined
  timeZone?: string | undefined
  radarStation?: string | undefined
  astronomicalData?: AstronomicalData | undefined
  nwr?:
    | {
        transmitter?: (string | null) | undefined
        sameCode?: string | undefined
        areaBroadcast?: (string | null) | undefined
        pointBroadcast?: (string | null) | undefined
      }
    | undefined
}
type ISO8601Duration = string
type TextProduct = {
  '@context'?: JsonLdContext | undefined
  '@id'?: string | undefined
  id?: string | undefined
  wmoCollectiveId?: string | undefined
  issuingOffice?: string | undefined
  issuanceTime?: string | undefined
  productCode?: string | undefined
  productName?: string | undefined
  productText?: string | undefined
}
type TextProductCollection = {
  '@context'?: JsonLdContext | undefined
  '@graph'?: TextProduct[] | undefined
}
type TextProductLocationCollection = {
  '@context'?: JsonLdContext | undefined
  locations?: { [x: string]: string | null } | undefined
}
type TextProductTypeCollection = {
  '@context'?: JsonLdContext | undefined
  '@graph'?: { productCode: string; productName: string }[] | undefined
}
type LandRegionCode = 'AR' | 'CR' | 'ER' | 'PR' | 'SR' | 'WR'
type RegionCode = LandRegionCode | MarineRegionCode
type NWSZoneType =
  | 'land'
  | 'marine'
  | 'forecast'
  | 'public'
  | 'coastal'
  | 'offshore'
  | 'fire'
  | 'county'
type Zone = {
  '@context'?: JsonLdContext | undefined
  geometry?: GeometryString | undefined
  '@id'?: string | undefined
  '@type'?: 'wx:Zone' | undefined
  id?: NWSZoneID | undefined
  type?: NWSZoneType | undefined
  name?: string | undefined
  effectiveDate?: string | undefined
  expirationDate?: string | undefined
  state?: StateTerritoryCode | '' | ({ [x: string]: unknown } | null) | undefined
  forecastOffice?: string | undefined
  gridIdentifier?: string | undefined
  awipsLocationIdentifier?: string | undefined
  cwa?: NWSForecastOfficeId[] | undefined
  forecastOffices?: string[] | undefined
  timeZone?: string[] | undefined
  observationStations?: string[] | undefined
  radarStation?: (string | null) | undefined
}
type ZoneCollectionGeoJson = {
  '@context'?: JsonLdContext | undefined
  type: 'FeatureCollection'
  features: { properties?: Zone | undefined }[]
}
type ZoneCollectionJsonLd = {
  '@context'?: JsonLdContext | undefined
  '@graph'?: Zone[] | undefined
}
type ZoneGeoJson = {
  '@context'?: JsonLdContext | undefined
  id?: string | undefined
  type: 'Feature'
  geometry: GeoJsonGeometry
  properties: Zone
}
type ZoneForecast = {
  '@context'?: JsonLdContext | undefined
  geometry?: GeometryString | undefined
  zone?: string | undefined
  updated?: string | undefined
  periods?: { number: number; name: string; detailedForecast: string }[] | undefined
}
type ZoneForecastGeoJson = {
  '@context'?: JsonLdContext | undefined
  id?: string | undefined
  type: 'Feature'
  geometry: GeoJsonGeometry
  properties: ZoneForecast
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/alerts': {
      $get:
        | {
            input: {
              query: {
                active?: boolean | undefined
                start?: string | undefined
                end?: string | undefined
                status?: ('actual' | 'exercise' | 'system' | 'test' | 'draft')[] | undefined
                message_type?: ('alert' | 'update' | 'cancel')[] | undefined
                event?: string[] | undefined
                code?: string[] | undefined
                area?: AreaCode[] | undefined
                point?: PointString | undefined
                region?: MarineRegionCode[] | undefined
                region_type?: 'land' | 'marine' | undefined
                zone?: NWSZoneID[] | undefined
                urgency?: AlertUrgency[] | undefined
                severity?: AlertSeverity[] | undefined
                certainty?: AlertCertainty[] | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: AlertCollectionGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                active?: boolean | undefined
                start?: string | undefined
                end?: string | undefined
                status?: ('actual' | 'exercise' | 'system' | 'test' | 'draft')[] | undefined
                message_type?: ('alert' | 'update' | 'cancel')[] | undefined
                event?: string[] | undefined
                code?: string[] | undefined
                area?: AreaCode[] | undefined
                point?: PointString | undefined
                region?: MarineRegionCode[] | undefined
                region_type?: 'land' | 'marine' | undefined
                zone?: NWSZoneID[] | undefined
                urgency?: AlertUrgency[] | undefined
                severity?: AlertSeverity[] | undefined
                certainty?: AlertCertainty[] | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: AlertCollectionJsonLd
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                active?: boolean | undefined
                start?: string | undefined
                end?: string | undefined
                status?: ('actual' | 'exercise' | 'system' | 'test' | 'draft')[] | undefined
                message_type?: ('alert' | 'update' | 'cancel')[] | undefined
                event?: string[] | undefined
                code?: string[] | undefined
                area?: AreaCode[] | undefined
                point?: PointString | undefined
                region?: MarineRegionCode[] | undefined
                region_type?: 'land' | 'marine' | undefined
                zone?: NWSZoneID[] | undefined
                urgency?: AlertUrgency[] | undefined
                severity?: AlertSeverity[] | undefined
                certainty?: AlertCertainty[] | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: AlertAtomFeed
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                active?: boolean | undefined
                start?: string | undefined
                end?: string | undefined
                status?: ('actual' | 'exercise' | 'system' | 'test' | 'draft')[] | undefined
                message_type?: ('alert' | 'update' | 'cancel')[] | undefined
                event?: string[] | undefined
                code?: string[] | undefined
                area?: AreaCode[] | undefined
                point?: PointString | undefined
                region?: MarineRegionCode[] | undefined
                region_type?: 'land' | 'marine' | undefined
                zone?: NWSZoneID[] | undefined
                urgency?: AlertUrgency[] | undefined
                severity?: AlertSeverity[] | undefined
                certainty?: AlertCertainty[] | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 301
          }
        | {
            input: {
              query: {
                active?: boolean | undefined
                start?: string | undefined
                end?: string | undefined
                status?: ('actual' | 'exercise' | 'system' | 'test' | 'draft')[] | undefined
                message_type?: ('alert' | 'update' | 'cancel')[] | undefined
                event?: string[] | undefined
                code?: string[] | undefined
                area?: AreaCode[] | undefined
                point?: PointString | undefined
                region?: MarineRegionCode[] | undefined
                region_type?: 'land' | 'marine' | undefined
                zone?: NWSZoneID[] | undefined
                urgency?: AlertUrgency[] | undefined
                severity?: AlertSeverity[] | undefined
                certainty?: AlertCertainty[] | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/alerts/active': {
      $get:
        | {
            input: {
              query: {
                status?: ('actual' | 'exercise' | 'system' | 'test' | 'draft')[] | undefined
                message_type?: ('alert' | 'update' | 'cancel')[] | undefined
                event?: string[] | undefined
                code?: string[] | undefined
                area?: AreaCode[] | undefined
                point?: PointString | undefined
                region?: MarineRegionCode[] | undefined
                region_type?: 'land' | 'marine' | undefined
                zone?: NWSZoneID[] | undefined
                urgency?: AlertUrgency[] | undefined
                severity?: AlertSeverity[] | undefined
                certainty?: AlertCertainty[] | undefined
              }
            }
            output: ActiveAlertCollectionGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                status?: ('actual' | 'exercise' | 'system' | 'test' | 'draft')[] | undefined
                message_type?: ('alert' | 'update' | 'cancel')[] | undefined
                event?: string[] | undefined
                code?: string[] | undefined
                area?: AreaCode[] | undefined
                point?: PointString | undefined
                region?: MarineRegionCode[] | undefined
                region_type?: 'land' | 'marine' | undefined
                zone?: NWSZoneID[] | undefined
                urgency?: AlertUrgency[] | undefined
                severity?: AlertSeverity[] | undefined
                certainty?: AlertCertainty[] | undefined
              }
            }
            output: ActiveAlertCollectionJsonLd
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                status?: ('actual' | 'exercise' | 'system' | 'test' | 'draft')[] | undefined
                message_type?: ('alert' | 'update' | 'cancel')[] | undefined
                event?: string[] | undefined
                code?: string[] | undefined
                area?: AreaCode[] | undefined
                point?: PointString | undefined
                region?: MarineRegionCode[] | undefined
                region_type?: 'land' | 'marine' | undefined
                zone?: NWSZoneID[] | undefined
                urgency?: AlertUrgency[] | undefined
                severity?: AlertSeverity[] | undefined
                certainty?: AlertCertainty[] | undefined
              }
            }
            output: AlertAtomFeed
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                status?: ('actual' | 'exercise' | 'system' | 'test' | 'draft')[] | undefined
                message_type?: ('alert' | 'update' | 'cancel')[] | undefined
                event?: string[] | undefined
                code?: string[] | undefined
                area?: AreaCode[] | undefined
                point?: PointString | undefined
                region?: MarineRegionCode[] | undefined
                region_type?: 'land' | 'marine' | undefined
                zone?: NWSZoneID[] | undefined
                urgency?: AlertUrgency[] | undefined
                severity?: AlertSeverity[] | undefined
                certainty?: AlertCertainty[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 301
          }
        | {
            input: {
              query: {
                status?: ('actual' | 'exercise' | 'system' | 'test' | 'draft')[] | undefined
                message_type?: ('alert' | 'update' | 'cancel')[] | undefined
                event?: string[] | undefined
                code?: string[] | undefined
                area?: AreaCode[] | undefined
                point?: PointString | undefined
                region?: MarineRegionCode[] | undefined
                region_type?: 'land' | 'marine' | undefined
                zone?: NWSZoneID[] | undefined
                urgency?: AlertUrgency[] | undefined
                severity?: AlertSeverity[] | undefined
                certainty?: AlertCertainty[] | undefined
              }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/alerts/active/count': {
      $get:
        | {
            input: {}
            output: {
              total?: number | undefined
              land?: number | undefined
              marine?: number | undefined
              regions?: { [x: string]: number } | undefined
              areas?: { [x: string]: number } | undefined
              zones?: { [x: string]: number } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ProblemDetail; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/alerts/active/zone/:zoneId': {
      $get:
        | {
            input: { param: { zoneId: NWSZoneID } }
            output: ActiveAlertCollectionGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { zoneId: NWSZoneID } }
            output: ActiveAlertCollectionJsonLd
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { zoneId: NWSZoneID } }
            output: AlertAtomFeed
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { zoneId: NWSZoneID } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/alerts/active/area/:area': {
      $get:
        | {
            input: { param: { area: AreaCode } }
            output: ActiveAlertCollectionGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { area: AreaCode } }
            output: ActiveAlertCollectionJsonLd
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { area: AreaCode } }
            output: AlertAtomFeed
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { area: AreaCode } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/alerts/active/region/:region': {
      $get:
        | {
            input: { param: { region: MarineRegionCode } }
            output: ActiveAlertCollectionGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { region: MarineRegionCode } }
            output: ActiveAlertCollectionJsonLd
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { region: MarineRegionCode } }
            output: AlertAtomFeed
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { region: MarineRegionCode } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/alerts/types': {
      $get:
        | {
            input: {}
            output: { eventTypes?: string[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ProblemDetail; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/alerts/:id': {
      $get:
        | {
            input: { param: { id: AlertId } }
            output: AlertGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: AlertId } }
            output: AlertJsonLd
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: AlertId } }; output: AlertCap; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { id: AlertId } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/aviation/cwsus/:cwsuId': {
      $get:
        | {
            input: { param: { cwsuId: NWSCenterWeatherServiceUnitId } }
            output: Office
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cwsuId: NWSCenterWeatherServiceUnitId } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/aviation/cwsus/:cwsuId/cwas': {
      $get:
        | {
            input: { param: { cwsuId: NWSCenterWeatherServiceUnitId } }
            output: CenterWeatherAdvisoryCollectionGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cwsuId: NWSCenterWeatherServiceUnitId } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/aviation/cwsus/:cwsuId/cwas/:date/:sequence': {
      $get:
        | {
            input: {
              param: { cwsuId: NWSCenterWeatherServiceUnitId; date: Date; sequence: number }
            }
            output: CenterWeatherAdvisoryGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { cwsuId: NWSCenterWeatherServiceUnitId; date: Date; sequence: number }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { cwsuId: NWSCenterWeatherServiceUnitId; date: Date; sequence: number }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/aviation/sigmets': {
      $get:
        | {
            input: {
              query: {
                start?: string | undefined
                end?: string | undefined
                date?: Date | undefined
                atsu?: ATSUIdentifier | undefined
                sequence?: SigmetSequenceNumber | undefined
              }
            }
            output: SigmetCollectionGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start?: string | undefined
                end?: string | undefined
                date?: Date | undefined
                atsu?: ATSUIdentifier | undefined
                sequence?: SigmetSequenceNumber | undefined
              }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/aviation/sigmets/:atsu': {
      $get:
        | {
            input: { param: { atsu: ATSUIdentifier } }
            output: SigmetCollectionGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { atsu: ATSUIdentifier } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/aviation/sigmets/:atsu/:date': {
      $get:
        | {
            input: { param: { atsu: ATSUIdentifier; date: Date } }
            output: SigmetCollectionGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { atsu: ATSUIdentifier; date: Date } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/aviation/sigmets/:atsu/:date/:time': {
      $get:
        | {
            input: { param: { atsu: ATSUIdentifier; date: Date; time: Time } }
            output: SigmetGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { atsu: ATSUIdentifier; date: Date; time: Time } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { atsu: ATSUIdentifier; date: Date; time: Time } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/glossary': {
      $get:
        | {
            input: {}
            output: {
              '@context'?: JsonLdContext | undefined
              glossary?:
                | { term?: string | undefined; definition?: string | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ProblemDetail; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/gridpoints/:wfo/:x,:y': {
      $get:
        | {
            input: { param: { wfo: NWSForecastOfficeId; x: number; y: number } }
            output: GridpointGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { wfo: NWSForecastOfficeId; x: number; y: number } }
            output: Gridpoint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { wfo: NWSForecastOfficeId; x: number; y: number } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gridpoints/:wfo/:x,:y/forecast': {
      $get:
        | {
            input: { param: { wfo: NWSForecastOfficeId; x: number; y: number } } & {
              query: { units?: GridpointForecastUnits | undefined }
            } & {
              header: {
                'Feature-Flags'?:
                  | ('forecast_temperature_qv' | 'forecast_wind_speed_qv')[]
                  | undefined
              }
            }
            output: Gridpoint12hForecastGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { wfo: NWSForecastOfficeId; x: number; y: number } } & {
              query: { units?: GridpointForecastUnits | undefined }
            } & {
              header: {
                'Feature-Flags'?:
                  | ('forecast_temperature_qv' | 'forecast_wind_speed_qv')[]
                  | undefined
              }
            }
            output: Gridpoint12hForecastJsonLd
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { wfo: NWSForecastOfficeId; x: number; y: number } } & {
              query: { units?: GridpointForecastUnits | undefined }
            } & {
              header: {
                'Feature-Flags'?:
                  | ('forecast_temperature_qv' | 'forecast_wind_speed_qv')[]
                  | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { wfo: NWSForecastOfficeId; x: number; y: number } } & {
              query: { units?: GridpointForecastUnits | undefined }
            } & {
              header: {
                'Feature-Flags'?:
                  | ('forecast_temperature_qv' | 'forecast_wind_speed_qv')[]
                  | undefined
              }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gridpoints/:wfo/:x,:y/forecast/hourly': {
      $get:
        | {
            input: { param: { wfo: NWSForecastOfficeId; x: number; y: number } } & {
              query: { units?: GridpointForecastUnits | undefined }
            } & {
              header: {
                'Feature-Flags'?:
                  | ('forecast_temperature_qv' | 'forecast_wind_speed_qv')[]
                  | undefined
              }
            }
            output: GridpointHourlyForecastGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { wfo: NWSForecastOfficeId; x: number; y: number } } & {
              query: { units?: GridpointForecastUnits | undefined }
            } & {
              header: {
                'Feature-Flags'?:
                  | ('forecast_temperature_qv' | 'forecast_wind_speed_qv')[]
                  | undefined
              }
            }
            output: GridpointHourlyForecastJsonLd
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { wfo: NWSForecastOfficeId; x: number; y: number } } & {
              query: { units?: GridpointForecastUnits | undefined }
            } & {
              header: {
                'Feature-Flags'?:
                  | ('forecast_temperature_qv' | 'forecast_wind_speed_qv')[]
                  | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { wfo: NWSForecastOfficeId; x: number; y: number } } & {
              query: { units?: GridpointForecastUnits | undefined }
            } & {
              header: {
                'Feature-Flags'?:
                  | ('forecast_temperature_qv' | 'forecast_wind_speed_qv')[]
                  | undefined
              }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/gridpoints/:wfo/:x,:y/stations': {
      $get:
        | {
            input: { param: { wfo: NWSForecastOfficeId; x: number; y: number } } & {
              query: { limit?: number | undefined }
            }
            output: ObservationStationCollectionGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { wfo: NWSForecastOfficeId; x: number; y: number } } & {
              query: { limit?: number | undefined }
            }
            output: ObservationStationCollectionJsonLd
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { wfo: NWSForecastOfficeId; x: number; y: number } } & {
              query: { limit?: number | undefined }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/icons/:set/:timeOfDay/:first': {
      $get:
        | {
            input: { param: { set: string; timeOfDay: string; first: string } } & {
              query: {
                size?: 'small' | 'medium' | 'large' | number | undefined
                fontsize?: number | undefined
              }
            }
            output: BinaryFile
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { set: string; timeOfDay: string; first: string } } & {
              query: {
                size?: 'small' | 'medium' | 'large' | number | undefined
                fontsize?: number | undefined
              }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/icons/:set/:timeOfDay/:first/:second': {
      $get:
        | {
            input: { param: { set: string; timeOfDay: string; first: string; second: string } } & {
              query: {
                size?: 'small' | 'medium' | 'large' | number | undefined
                fontsize?: number | undefined
              }
            }
            output: BinaryFile
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { set: string; timeOfDay: string; first: string; second: string } } & {
              query: {
                size?: 'small' | 'medium' | 'large' | number | undefined
                fontsize?: number | undefined
              }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/icons': {
      $get:
        | {
            input: {}
            output: {
              '@context'?: JsonLdContext | undefined
              icons: { [x: string]: { description: string } }
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ProblemDetail; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/thumbnails/satellite/:area': {
      $get:
        | {
            input: { param: { area: 'a' | 'e' | 'g' | 'h' | 'p' | 's' | 'w' } }
            output: BinaryFile
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { area: 'a' | 'e' | 'g' | 'h' | 'p' | 's' | 'w' } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/stations/:stationId/observations': {
      $get:
        | {
            input: { param: { stationId: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: ObservationCollectionGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stationId: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: ObservationCollectionJsonLd
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stationId: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/stations/:stationId/observations/latest': {
      $get:
        | {
            input: { param: { stationId: string } } & {
              query: { require_qc?: boolean | undefined }
            }
            output: ObservationGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stationId: string } } & {
              query: { require_qc?: boolean | undefined }
            }
            output: Observation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stationId: string } } & {
              query: { require_qc?: boolean | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stationId: string } } & {
              query: { require_qc?: boolean | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stationId: string } } & {
              query: { require_qc?: boolean | undefined }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/stations/:stationId/observations/:time': {
      $get:
        | {
            input: { param: { time: string; stationId: string } }
            output: ObservationGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { time: string; stationId: string } }
            output: Observation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { time: string; stationId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { time: string; stationId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { time: string; stationId: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/stations/:stationId/tafs': {
      $get:
        | {
            input: { param: { stationId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stationId: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/stations/:stationId/tafs/:date/:time': {
      $get:
        | {
            input: { param: { stationId: string; date: Date; time: Time } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stationId: string; date: Date; time: Time } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/stations': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: AreaCode[] | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: ObservationStationCollectionGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: AreaCode[] | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: ObservationStationCollectionJsonLd
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: AreaCode[] | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/stations/:stationId': {
      $get:
        | {
            input: { param: { stationId: string } }
            output: ObservationStationGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stationId: string } }
            output: ObservationStationJsonLd
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stationId: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/offices/:officeId': {
      $get:
        | {
            input: { param: { officeId: NWSOfficeId } }
            output: Office
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { officeId: NWSOfficeId } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/offices/:officeId/briefing': {
      $get:
        | {
            input: { param: { officeId: NWSOfficeId } }
            output: NWSConnectDocumentMetadata
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { officeId: NWSOfficeId } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/offices/:officeId/briefing/download/latest': {
      $get:
        | {
            input: { param: { officeId: NWSOfficeId } }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { param: { officeId: NWSOfficeId } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/offices/:officeId/briefing/download/:briefingId': {
      $get:
        | {
            input: { param: { officeId: NWSOfficeId; briefingId: string } }
            output: BinaryFile
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { officeId: NWSOfficeId; briefingId: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/offices/:officeId/headlines/:headlineId': {
      $get:
        | {
            input: { param: { officeId: NWSOfficeId; headlineId: string } }
            output: OfficeHeadline
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { officeId: NWSOfficeId; headlineId: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/offices/:officeId/headlines': {
      $get:
        | {
            input: { param: { officeId: NWSOfficeId } }
            output: OfficeHeadlineCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { officeId: NWSOfficeId } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/offices/:officeId/weatherstories': {
      $get:
        | {
            input: { param: { officeId: NWSOfficeId } }
            output: OfficeWeatherStoryCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { officeId: NWSOfficeId } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/offices/:officeId/weatherstories/download/:imageId': {
      $get:
        | {
            input: { param: { officeId: NWSOfficeId; imageId: string } }
            output: BinaryFile
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { officeId: NWSOfficeId; imageId: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/points/:latitude,:longitude': {
      $get:
        | {
            input: { param: { latitude: number; longitude: number } }
            output: PointGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { latitude: number; longitude: number } }
            output: PointJsonLd
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { latitude: number; longitude: number } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/points/:latitude,:longitude/radio': {
      $get:
        | {
            input: { param: { latitude: number; longitude: number } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { latitude: number; longitude: number } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/points/:latitude,:longitude/stations': {
      $get:
        | {
            input: { param: { latitude: number; longitude: number } }
            output: {}
            outputFormat: string
            status: 301
          }
        | {
            input: { param: { latitude: number; longitude: number } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/radar/servers': {
      $get:
        | {
            input: { query: { reportingHost?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { reportingHost?: string | undefined } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/radar/servers/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { reportingHost?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { reportingHost?: string | undefined } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/radar/spgds': {
      $get:
        | {
            input: { query: { published?: ISO8601Interval | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { published?: ISO8601Interval | undefined } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/radar/stations': {
      $get:
        | {
            input: {
              query: {
                stationType?: string[] | undefined
                reportingHost?: string | undefined
                host?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                stationType?: string[] | undefined
                reportingHost?: string | undefined
                host?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                stationType?: string[] | undefined
                reportingHost?: string | undefined
                host?: string | undefined
              }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/radar/stations/:stationId': {
      $get:
        | {
            input: { param: { stationId: string } } & {
              query: { reportingHost?: string | undefined; host?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stationId: string } } & {
              query: { reportingHost?: string | undefined; host?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stationId: string } } & {
              query: { reportingHost?: string | undefined; host?: string | undefined }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/radar/stations/:stationId/alarms': {
      $get:
        | {
            input: { param: { stationId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stationId: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/radar/queues/:host': {
      $get:
        | {
            input: { param: { host: 'rds' | 'tds' } } & {
              query: {
                limit?: number | undefined
                arrived?: ISO8601Interval | undefined
                created?: ISO8601Interval | undefined
                published?: ISO8601Interval | undefined
                station?: string | undefined
                type?: string | undefined
                feed?: string | undefined
                resolution?: number | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { host: 'rds' | 'tds' } } & {
              query: {
                limit?: number | undefined
                arrived?: ISO8601Interval | undefined
                created?: ISO8601Interval | undefined
                published?: ISO8601Interval | undefined
                station?: string | undefined
                type?: string | undefined
                feed?: string | undefined
                resolution?: number | undefined
              }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/radar/profilers/:stationId': {
      $get:
        | {
            input: { param: { stationId: string } } & {
              query: { time?: ISO8601Interval | undefined; interval?: ISO8601Duration | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stationId: string } } & {
              query: { time?: ISO8601Interval | undefined; interval?: ISO8601Duration | undefined }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/radio': {
      $get:
        | {
            input: { query: { cursor?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { cursor?: string | undefined } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/radio/:callSign': {
      $get:
        | {
            input: { param: { callSign: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { callSign: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/radio/:callSign/broadcast': {
      $get:
        | {
            input: { param: { callSign: string } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { callSign: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/products': {
      $get:
        | {
            input: {
              query: {
                location?: string[] | undefined
                start?: string | undefined
                end?: string | undefined
                office?: string[] | undefined
                wmoid?: string[] | undefined
                type?: string[] | undefined
                limit?: number | undefined
              }
            }
            output: TextProductCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                location?: string[] | undefined
                start?: string | undefined
                end?: string | undefined
                office?: string[] | undefined
                wmoid?: string[] | undefined
                type?: string[] | undefined
                limit?: number | undefined
              }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/products/locations': {
      $get:
        | { input: {}; output: TextProductLocationCollection; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProblemDetail; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/products/types': {
      $get:
        | { input: {}; output: TextProductTypeCollection; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProblemDetail; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/products/:productId': {
      $get:
        | {
            input: { param: { productId: string } }
            output: TextProduct
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productId: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/products/types/:typeId': {
      $get:
        | {
            input: { param: { typeId: string } }
            output: TextProductCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { typeId: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/products/types/:typeId/locations': {
      $get:
        | {
            input: { param: { typeId: string } }
            output: TextProductLocationCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { typeId: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/products/locations/:locationId/types': {
      $get:
        | {
            input: { param: { locationId: string } }
            output: TextProductTypeCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { locationId: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/products/types/:typeId/locations/:locationId': {
      $get:
        | {
            input: { param: { typeId: string; locationId: string } }
            output: TextProductCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { typeId: string; locationId: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/products/types/:typeId/locations/:locationId/latest': {
      $get:
        | {
            input: { param: { typeId: string; locationId: string } }
            output: TextProduct
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { typeId: string; locationId: string } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/zones': {
      $get:
        | {
            input: {
              query: {
                id?: NWSZoneID[] | undefined
                area?: AreaCode[] | undefined
                region?: RegionCode[] | undefined
                type?: NWSZoneType[] | undefined
                point?: PointString | undefined
                include_geometry?: boolean | undefined
                limit?: number | undefined
                effective?: string | undefined
              }
            }
            output: ZoneCollectionGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: NWSZoneID[] | undefined
                area?: AreaCode[] | undefined
                region?: RegionCode[] | undefined
                type?: NWSZoneType[] | undefined
                point?: PointString | undefined
                include_geometry?: boolean | undefined
                limit?: number | undefined
                effective?: string | undefined
              }
            }
            output: ZoneCollectionJsonLd
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: NWSZoneID[] | undefined
                area?: AreaCode[] | undefined
                region?: RegionCode[] | undefined
                type?: NWSZoneType[] | undefined
                point?: PointString | undefined
                include_geometry?: boolean | undefined
                limit?: number | undefined
                effective?: string | undefined
              }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/zones/:type': {
      $get:
        | {
            input: {
              query: {
                id?: NWSZoneID[] | undefined
                area?: AreaCode[] | undefined
                region?: RegionCode[] | undefined
                type?: NWSZoneType[] | undefined
                point?: PointString | undefined
                include_geometry?: boolean | undefined
                limit?: number | undefined
                effective?: string | undefined
              }
            }
            output: ZoneCollectionGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: NWSZoneID[] | undefined
                area?: AreaCode[] | undefined
                region?: RegionCode[] | undefined
                type?: NWSZoneType[] | undefined
                point?: PointString | undefined
                include_geometry?: boolean | undefined
                limit?: number | undefined
                effective?: string | undefined
              }
            }
            output: ZoneCollectionJsonLd
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: NWSZoneID[] | undefined
                area?: AreaCode[] | undefined
                region?: RegionCode[] | undefined
                type?: NWSZoneType[] | undefined
                point?: PointString | undefined
                include_geometry?: boolean | undefined
                limit?: number | undefined
                effective?: string | undefined
              }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/zones/:type/:zoneId': {
      $get:
        | {
            input: { param: { type: NWSZoneType; zoneId: NWSZoneID } } & {
              query: { effective?: string | undefined }
            }
            output: ZoneGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: NWSZoneType; zoneId: NWSZoneID } } & {
              query: { effective?: string | undefined }
            }
            output: Zone
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: NWSZoneType; zoneId: NWSZoneID } } & {
              query: { effective?: string | undefined }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/zones/:type/:zoneId/forecast': {
      $get:
        | {
            input: { param: { type: string; zoneId: NWSZoneID } }
            output: ZoneForecastGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string; zoneId: NWSZoneID } }
            output: ZoneForecast
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string; zoneId: NWSZoneID } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/zones/:type/:zoneId/radio': {
      $get:
        | {
            input: { param: { type: 'county'; zoneId: NWSZoneID } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: 'county'; zoneId: NWSZoneID } }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/zones/forecast/:zoneId/observations': {
      $get:
        | {
            input: { param: { zoneId: NWSZoneID } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
              }
            }
            output: ObservationCollectionGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { zoneId: NWSZoneID } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
              }
            }
            output: ObservationCollectionJsonLd
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { zoneId: NWSZoneID } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
              }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/zones/forecast/:zoneId/stations': {
      $get:
        | {
            input: { param: { zoneId: NWSZoneID } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: ObservationStationCollectionGeoJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { zoneId: NWSZoneID } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: ObservationStationCollectionJsonLd
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { zoneId: NWSZoneID } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: ProblemDetail
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
