import { createRoute, z } from '@hono/zod-openapi'

const TflApiPresentationEntitiesAdditionalPropertiesSchema = z
  .object({
    category: z.string().exactOptional(),
    key: z.string().exactOptional(),
    modified: z.iso.datetime({ offset: true }).exactOptional(),
    sourceSystemKey: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesAdditionalProperties')

type TflApiPresentationEntitiesPlaceType = {
  additionalProperties?: z.infer<typeof TflApiPresentationEntitiesAdditionalPropertiesSchema>[]
  children?: TflApiPresentationEntitiesPlaceType[]
  childrenUrls?: string[]
  commonName?: string
  distance?: number
  id?: string
  lat?: number
  lon?: number
  placeType?: string
  url?: string
}

const SystemDataSpatialDbGeographyWellKnownValueSchema = z
  .object({
    coordinateSystemId: z.int32().exactOptional(),
    wellKnownBinary: z.string().exactOptional(),
    wellKnownText: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SystemDataSpatialDbGeographyWellKnownValue')

const SystemDataSpatialDbGeographySchema = z
  .object({ geography: SystemDataSpatialDbGeographyWellKnownValueSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('SystemDataSpatialDbGeography')

const SystemObjectSchema = z.object({}).openapi('SystemObject')

const TflApiCommonApiVersionInfoSchema = z
  .object({
    assemblies: z.array(z.string()).exactOptional(),
    label: z.string().exactOptional(),
    timestamp: z.iso.datetime({ offset: true }).exactOptional(),
    version: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiCommonApiVersionInfo')

const TflApiCommonDateRangeSchema = z
  .object({
    endDate: z.iso.datetime({ offset: true }).exactOptional(),
    startDate: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiCommonDateRange')

const TflApiCommonDateRangeNullableSchema = z
  .object({
    endDate: z.iso.datetime({ offset: true }).exactOptional(),
    startDate: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiCommonDateRangeNullable')

const TflApiCommonGeoPointSchema = z
  .object({ lat: z.float64(), lon: z.float64() })
  .openapi({ required: ['lat', 'lon'] })
  .openapi('TflApiCommonGeoPoint')

const TflApiCommonJourneyPlannerJpElevationSchema = z
  .object({
    distance: z.int32().exactOptional(),
    endLat: z.float64().exactOptional(),
    endLon: z.float64().exactOptional(),
    gradient: z.float64().exactOptional(),
    heightFromPreviousPoint: z.int32().exactOptional(),
    startLat: z.float64().exactOptional(),
    startLon: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiCommonJourneyPlannerJpElevation')

const TflApiCommonPlaceGeoSchema = z
  .object({
    lat: z.float64().exactOptional(),
    lon: z.float64().exactOptional(),
    neLat: z.float64().exactOptional(),
    neLon: z.float64().exactOptional(),
    swLat: z.float64().exactOptional(),
    swLon: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiCommonPlaceGeo')

const TflApiCommonPostcodeInputSchema = z
  .object({
    postcode: z
      .string()
      .regex(
        /^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/,
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiCommonPostcodeInput')

const TflApiPresentationEntitiesAccidentStatsCasualtySchema = z
  .object({
    age: z.int32().exactOptional(),
    ageBand: z.string().exactOptional(),
    class: z.string().exactOptional(),
    mode: z.string().exactOptional(),
    severity: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesAccidentStatsCasualty')

const TflApiPresentationEntitiesAccidentStatsVehicleSchema = z
  .object({ type: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesAccidentStatsVehicle')

const TflApiPresentationEntitiesAccidentStatsAccidentDetailSchema = z
  .object({
    borough: z.string().exactOptional(),
    casualties: z.array(TflApiPresentationEntitiesAccidentStatsCasualtySchema).exactOptional(),
    date: z.iso.datetime({ offset: true }).exactOptional(),
    id: z.int32().exactOptional(),
    lat: z.float64().exactOptional(),
    location: z.string().exactOptional(),
    lon: z.float64().exactOptional(),
    severity: z.string().exactOptional(),
    vehicles: z.array(TflApiPresentationEntitiesAccidentStatsVehicleSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesAccidentStatsAccidentDetail')

const TflApiPresentationEntitiesAccidentStatsAccidentStatsOrderedSummarySchema = z
  .object({
    accidents: z.int32().exactOptional(),
    borough: z.string().exactOptional(),
    year: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesAccidentStatsAccidentStatsOrderedSummary')

const TflApiPresentationEntitiesActiveServiceTypeSchema = z
  .object({ mode: z.string().exactOptional(), serviceType: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesActiveServiceType')

const TflApiPresentationEntitiesPredictionTimingSchema = z
  .object({
    countdownServerAdjustment: z.string().exactOptional(),
    insert: z.iso.datetime({ offset: true }).exactOptional(),
    read: z.iso.datetime({ offset: true }).exactOptional(),
    received: z.iso.datetime({ offset: true }).exactOptional(),
    sent: z.iso.datetime({ offset: true }).exactOptional(),
    source: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesPredictionTiming')

const TflApiPresentationEntitiesArrivalDepartureSchema = z
  .object({
    cause: z.string().exactOptional().openapi({ description: 'Reason for cancellation or delay' }),
    departureStatus: z
      .enum(['OnTime', 'Delayed', 'Cancelled', 'NotStoppingAtStation'])
      .exactOptional()
      .openapi({ description: 'Status of departure' }),
    destinationName: z.string().exactOptional().openapi({ description: 'Name of the destination' }),
    destinationNaptanId: z
      .string()
      .exactOptional()
      .openapi({ description: "Naptan Identifier for the prediction's destination" }),
    estimatedTimeOfArrival: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Estimated time of arrival' }),
    estimatedTimeOfDeparture: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Estimated time of arrival' }),
    minutesAndSecondsToArrival: z
      .string()
      .exactOptional()
      .openapi({ description: 'Estimated time of arrival' }),
    minutesAndSecondsToDeparture: z
      .string()
      .exactOptional()
      .openapi({ description: 'Estimated time of arrival' }),
    naptanId: z.string().exactOptional().openapi({ description: 'Identifier for the prediction' }),
    platformName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Platform name (for bus, this is the stop letter)' }),
    scheduledTimeOfArrival: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Estimated time of arrival' }),
    scheduledTimeOfDeparture: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Estimated time of arrival' }),
    stationName: z.string().exactOptional().openapi({ description: 'Station name' }),
    timing: TflApiPresentationEntitiesPredictionTimingSchema.exactOptional(),
  })
  .openapi({ description: 'DTO to capture the prediction details', required: [] })
  .openapi('TflApiPresentationEntitiesArrivalDeparture')

const TflApiPresentationEntitiesArrivalDepartureWithLineSchema = z
  .object({
    cause: z.string().exactOptional().openapi({ description: 'Reason for cancellation or delay' }),
    departureStatus: z
      .enum(['OnTime', 'Delayed', 'Cancelled', 'NotStoppingAtStation'])
      .exactOptional()
      .openapi({ description: 'Status of departure' }),
    destinationName: z.string().exactOptional().openapi({ description: 'Name of the destination' }),
    destinationNaptanId: z
      .string()
      .exactOptional()
      .openapi({ description: "Naptan Identifier for the prediction's destination" }),
    estimatedTimeOfArrival: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Estimated time of arrival' }),
    estimatedTimeOfDeparture: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Estimated time of arrival' }),
    lineId: z.string().exactOptional().openapi({ description: 'Train operating company name' }),
    lineName: z.string().exactOptional().openapi({ description: 'Train operating company code' }),
    minutesAndSecondsToArrival: z
      .string()
      .exactOptional()
      .openapi({ description: 'Estimated time of arrival' }),
    minutesAndSecondsToDeparture: z
      .string()
      .exactOptional()
      .openapi({ description: 'Estimated time of arrival' }),
    naptanId: z.string().exactOptional().openapi({ description: 'Identifier for the prediction' }),
    platformName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Platform name (for bus, this is the stop letter)' }),
    scheduledTimeOfArrival: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Estimated time of arrival' }),
    scheduledTimeOfDeparture: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Estimated time of arrival' }),
    stationName: z.string().exactOptional().openapi({ description: 'Station name' }),
    timing: TflApiPresentationEntitiesPredictionTimingSchema.exactOptional(),
  })
  .openapi({ description: 'DTO to capture the prediction details', required: [] })
  .openapi('TflApiPresentationEntitiesArrivalDepartureWithLine')

const TflApiPresentationEntitiesBaySchema = z
  .object({
    bayCount: z.int32().exactOptional(),
    bayType: z.string().exactOptional(),
    free: z.int32().exactOptional(),
    occupied: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesBay')

const TflApiPresentationEntitiesBikePointOccupancySchema = z
  .object({
    bikesCount: z.int32().exactOptional().openapi({ description: 'Total bike counts' }),
    eBikesCount: z.int32().exactOptional().openapi({ description: 'Total ebikes count' }),
    emptyDocks: z.int32().exactOptional().openapi({ description: 'Empty docks' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Id of the bike point such as BikePoints_1' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name / Common name of the bike point' }),
    standardBikesCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total standard bikes count' }),
    totalDocks: z.int32().exactOptional().openapi({ description: 'Total docks available' }),
  })
  .openapi({ description: 'Bike point occupancy', required: [] })
  .openapi('TflApiPresentationEntitiesBikePointOccupancy')

const TflApiPresentationEntitiesCarParkOccupancySchema = z
  .object({
    bays: z.array(TflApiPresentationEntitiesBaySchema).exactOptional(),
    carParkDetailsUrl: z.string().exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesCarParkOccupancy')

const TflApiPresentationEntitiesChargeConnectorOccupancySchema = z
  .object({
    id: z.int32().exactOptional().openapi({ description: '' }),
    sourceSystemPlaceId: z.string().exactOptional().openapi({ description: '' }),
    status: z.string().exactOptional().openapi({ description: '' }),
  })
  .openapi({ description: '', required: [] })
  .openapi('TflApiPresentationEntitiesChargeConnectorOccupancy')

const TflApiPresentationEntitiesCoordinateSchema = z
  .object({
    easting: z.float64().exactOptional(),
    latitude: z.float64().exactOptional(),
    longitude: z.float64().exactOptional(),
    northing: z.float64().exactOptional(),
    xCoord: z.int32().exactOptional(),
    yCoord: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesCoordinate')

const TflApiPresentationEntitiesPassengerFlowSchema = z
  .object({
    timeSlice: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Time in 24hr format with 15 minute intervals e.g. 0500-0515, 0515-0530 etc.',
      }),
    value: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Count of passenger flow towards a platform' }),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesPassengerFlow')

const TflApiPresentationEntitiesTrainLoadingSchema = z
  .object({
    direction: z
      .string()
      .exactOptional()
      .openapi({ description: 'Direction in regards to Journey Planner i.e. inbound or outbound' }),
    line: z.string().exactOptional().openapi({ description: 'The Line Name e.g. "Victoria"' }),
    lineDirection: z
      .string()
      .exactOptional()
      .openapi({ description: 'Direction of the Line e.g. NB, SB, WB etc.' }),
    naptanTo: z.string().exactOptional().openapi({ description: 'Naptan of the adjacent station' }),
    platformDirection: z
      .string()
      .exactOptional()
      .openapi({ description: 'Direction displayed on the platform e.g. NB, SB, WB etc.' }),
    timeSlice: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Time in 24hr format with 15 minute intervals e.g. 0500-0515, 0515-0530 etc.',
      }),
    value: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Scale between 1-6, \r\n             1 = Very quiet, 2 = Quiet, 3 = Fairly busy, 4 = Busy, 5 = Very busy, 6 = Exceptionally busy',
      }),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesTrainLoading')

const TflApiPresentationEntitiesCrowdingSchema = z
  .object({
    passengerFlows: z
      .array(TflApiPresentationEntitiesPassengerFlowSchema)
      .exactOptional()
      .openapi({ description: 'Busiest times at a station (static information)' }),
    trainLoadings: z
      .array(TflApiPresentationEntitiesTrainLoadingSchema)
      .exactOptional()
      .openapi({
        description:
          'Train Loading on a scale 1-6, 1 being "Very quiet" and 6 being "Exceptionally busy" (static information)',
      }),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesCrowding')

const TflApiPresentationEntitiesCycleSuperhighwaySchema = z
  .object({
    geography: SystemDataSpatialDbGeographySchema.exactOptional(),
    id: z.string().exactOptional().openapi({ description: 'The Id' }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'The long label to show on maps when zoomed in' }),
    labelShort: z
      .string()
      .exactOptional()
      .openapi({ description: 'The short label to show on maps' }),
    modified: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the data was last updated' }),
    routeType: z
      .enum([
        'Unknown',
        'All',
        'Cycle Superhighways',
        'Quietways',
        'Cycleways',
        'Mini-Hollands',
        'Central London Grid',
        'Streetspace Route',
      ])
      .exactOptional()
      .openapi({
        description: 'Type of cycle route e.g CycleSuperhighways, Quietways, MiniHollands etc',
      }),
    segmented: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the route is split into segments' }),
    status: z
      .enum([
        'Unknown',
        'All',
        'Open',
        'In Progress',
        'Planned',
        'Planned - Subject to feasibility and consultation.',
        'Not Open',
      ])
      .exactOptional()
      .openapi({ description: 'Cycle route status i.e Proposed, Existing etc' }),
  })
  .openapi({ description: '', required: [] })
  .openapi('TflApiPresentationEntitiesCycleSuperhighway')

const TflApiPresentationEntitiesDisruptedPointSchema = z
  .object({
    additionalInformation: z.string().exactOptional(),
    appearance: z.string().exactOptional(),
    atcoCode: z.string().exactOptional(),
    commonName: z.string().exactOptional(),
    description: z.string().exactOptional(),
    fromDate: z.iso.datetime({ offset: true }).exactOptional(),
    mode: z.string().exactOptional(),
    stationAtcoCode: z.string().exactOptional(),
    toDate: z.iso.datetime({ offset: true }).exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesDisruptedPoint')

const TflApiPresentationEntitiesPlaceSchema: z.ZodType<TflApiPresentationEntitiesPlaceType> = z
  .lazy(() =>
    z
      .object({
        additionalProperties: z
          .array(TflApiPresentationEntitiesAdditionalPropertiesSchema)
          .exactOptional()
          .openapi({
            description:
              'A bag of additional key/value pairs with extra information about this place.',
          }),
        children: z.array(TflApiPresentationEntitiesPlaceSchema).exactOptional(),
        childrenUrls: z.array(z.string()).exactOptional(),
        commonName: z.string().exactOptional().openapi({ description: 'A human readable name.' }),
        distance: z
          .float64()
          .exactOptional()
          .openapi({
            description:
              'The distance of the place from its search point, if this is the result\r\n            of a geographical search, otherwise zero.',
          }),
        id: z.string().exactOptional().openapi({ description: 'A unique identifier.' }),
        lat: z
          .float64()
          .exactOptional()
          .openapi({ description: 'WGS84 latitude of the location.' }),
        lon: z
          .float64()
          .exactOptional()
          .openapi({ description: 'WGS84 longitude of the location.' }),
        placeType: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The type of Place. See /Place/Meta/placeTypes for possible values.',
          }),
        url: z
          .string()
          .exactOptional()
          .openapi({ description: 'The unique location of this resource.' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('TflApiPresentationEntitiesPlace')

const TflApiPresentationEntitiesLineGroupSchema = z
  .object({
    lineIdentifier: z.array(z.string()).exactOptional(),
    naptanIdReference: z.string().exactOptional(),
    stationAtcoCode: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesLineGroup')

const TflApiPresentationEntitiesLineModeGroupSchema = z
  .object({
    lineIdentifier: z.array(z.string()).exactOptional(),
    modeName: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesLineModeGroup')

const TflApiPresentationEntitiesIdentifierSchema = z
  .object({
    crowding: TflApiPresentationEntitiesCrowdingSchema.exactOptional(),
    fullName: z.string().exactOptional(),
    id: z.string().exactOptional(),
    motType: z.string().exactOptional(),
    name: z.string().exactOptional(),
    network: z.string().exactOptional(),
    routeType: z
      .enum([
        'Unknown',
        'All',
        'Cycle Superhighways',
        'Quietways',
        'Cycleways',
        'Mini-Hollands',
        'Central London Grid',
        'Streetspace Route',
      ])
      .exactOptional(),
    status: z
      .enum([
        'Unknown',
        'All',
        'Open',
        'In Progress',
        'Planned',
        'Planned - Subject to feasibility and consultation.',
        'Not Open',
      ])
      .exactOptional(),
    type: z.string().exactOptional(),
    uri: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesIdentifier')

const TflApiPresentationEntitiesStopPointSchema = z
  .object({
    accessibilitySummary: z.string().exactOptional(),
    additionalProperties: z
      .array(TflApiPresentationEntitiesAdditionalPropertiesSchema)
      .exactOptional()
      .openapi({
        description: 'A bag of additional key/value pairs with extra information about this place.',
      }),
    children: z.array(TflApiPresentationEntitiesPlaceSchema).exactOptional(),
    childrenUrls: z.array(z.string()).exactOptional(),
    commonName: z.string().exactOptional().openapi({ description: 'A human readable name.' }),
    distance: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The distance of the place from its search point, if this is the result\r\n            of a geographical search, otherwise zero.',
      }),
    fullName: z.string().exactOptional(),
    hubNaptanCode: z.string().exactOptional(),
    icsCode: z.string().exactOptional(),
    id: z.string().exactOptional().openapi({ description: 'A unique identifier.' }),
    indicator: z
      .string()
      .exactOptional()
      .openapi({ description: 'The indicator of the stop point e.g. "Stop K"' }),
    individualStopId: z.string().exactOptional(),
    lat: z.float64().exactOptional().openapi({ description: 'WGS84 latitude of the location.' }),
    lineGroup: z.array(TflApiPresentationEntitiesLineGroupSchema).exactOptional(),
    lineModeGroups: z.array(TflApiPresentationEntitiesLineModeGroupSchema).exactOptional(),
    lines: z.array(TflApiPresentationEntitiesIdentifierSchema).exactOptional(),
    lon: z.float64().exactOptional().openapi({ description: 'WGS84 longitude of the location.' }),
    modes: z.array(z.string()).exactOptional(),
    naptanId: z.string().exactOptional(),
    naptanMode: z.string().exactOptional(),
    placeType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of Place. See /Place/Meta/placeTypes for possible values.',
      }),
    platformName: z.string().exactOptional(),
    smsCode: z.string().exactOptional(),
    stationNaptan: z.string().exactOptional(),
    status: z.boolean().exactOptional(),
    stopLetter: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The stop letter, if it could be cleansed from the Indicator e.g. "K"',
      }),
    stopType: z.string().exactOptional(),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique location of this resource.' }),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesStopPoint')

const TflApiPresentationEntitiesRouteSectionNaptanEntrySequenceSchema = z
  .object({
    ordinal: z.int32().exactOptional(),
    stopPoint: TflApiPresentationEntitiesStopPointSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesRouteSectionNaptanEntrySequence')

const TflApiPresentationEntitiesDisruptedRouteSchema = z
  .object({
    destinationName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the Destination StopPoint' }),
    direction: z.string().exactOptional().openapi({ description: 'Inbound or Outbound' }),
    id: z.string().exactOptional().openapi({ description: 'The Id of the route' }),
    isEntireRouteSection: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this represents the entire route section' }),
    lineId: z.string().exactOptional().openapi({ description: 'The Id of the Line' }),
    lineString: z
      .string()
      .exactOptional()
      .openapi({ description: "The co-ordinates of the route's path as a geoJSON lineString" }),
    name: z.string().exactOptional().openapi({ description: 'Name such as "72"' }),
    originationName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the Origin StopPoint' }),
    routeCode: z.string().exactOptional().openapi({ description: 'The route code' }),
    routeSectionNaptanEntrySequence: z
      .array(TflApiPresentationEntitiesRouteSectionNaptanEntrySequenceSchema)
      .exactOptional(),
    validFrom: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The DateTime that the Service containing this Route is valid from.',
      }),
    validTo: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The DateTime that the Service containing this Route is valid until.',
      }),
    via: TflApiPresentationEntitiesRouteSectionNaptanEntrySequenceSchema.exactOptional(),
  })
  .openapi({ description: 'keep old RouteSection name so as not to break contract', required: [] })
  .openapi('TflApiPresentationEntitiesDisruptedRoute')

const TflApiPresentationEntitiesDisruptionSchema = z
  .object({
    additionalInfo: z
      .string()
      .exactOptional()
      .openapi({ description: 'Gets or sets the additionaInfo of this disruption.' }),
    affectedRoutes: z
      .array(TflApiPresentationEntitiesDisruptedRouteSchema)
      .exactOptional()
      .openapi({ description: 'Gets or sets the routes affected by this disruption' }),
    affectedStops: z
      .array(TflApiPresentationEntitiesStopPointSchema)
      .exactOptional()
      .openapi({ description: 'Gets or sets the stops affected by this disruption' }),
    category: z
      .enum([
        'Undefined',
        'RealTime',
        'PlannedWork',
        'Information',
        'Event',
        'Crowding',
        'StatusAlert',
      ])
      .exactOptional()
      .openapi({ description: 'Gets or sets the category of this dispruption.' }),
    categoryDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Gets or sets the description of the category.' }),
    closureText: z
      .string()
      .exactOptional()
      .openapi({ description: 'Text describing the closure type' }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Gets or sets the date/time when this disruption was created.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Gets or sets the description of this disruption.' }),
    lastUpdate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Gets or sets the date/time when this disruption was last updated.',
      }),
    summary: z
      .string()
      .exactOptional()
      .openapi({ description: 'Gets or sets the summary of this disruption.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Gets or sets the disruption type of this dispruption.' }),
  })
  .openapi({
    description: 'Represents a disruption to a route within the transport network.',
    required: [],
  })
  .openapi('TflApiPresentationEntitiesDisruption')

const TflApiPresentationEntitiesFaresFareSchema = z
  .object({
    cap: z.float64().exactOptional(),
    cost: z.string().exactOptional(),
    description: z.string().exactOptional(),
    id: z.int32().exactOptional(),
    mode: z.string().exactOptional(),
    passengerType: z.string().exactOptional(),
    ticketTime: z.string().exactOptional(),
    ticketType: z.string().exactOptional(),
    validFrom: z.iso.datetime({ offset: true }).exactOptional(),
    validUntil: z.iso.datetime({ offset: true }).exactOptional(),
    zone: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesFaresFare')

const TflApiPresentationEntitiesMessageSchema = z
  .object({
    bulletOrder: z.int32().exactOptional(),
    header: z.boolean().exactOptional(),
    linkText: z.string().exactOptional(),
    messageText: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesMessage')

const TflApiPresentationEntitiesFaresFareBoundsSchema = z
  .object({
    description: z.string().exactOptional(),
    displayName: z.string().exactOptional(),
    displayOrder: z.int32().exactOptional(),
    from: z.string().exactOptional(),
    id: z.int32().exactOptional(),
    isPopularFare: z.boolean().exactOptional(),
    isPopularTravelCard: z.boolean().exactOptional(),
    isTour: z.boolean().exactOptional(),
    messages: z.array(TflApiPresentationEntitiesMessageSchema).exactOptional(),
    operator: z.string().exactOptional(),
    routeCode: z.string().exactOptional(),
    to: z.string().exactOptional(),
    via: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesFaresFareBounds')

const TflApiPresentationEntitiesFaresTicketTimeSchema = z
  .object({ description: z.string().exactOptional(), type: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesFaresTicketTime')

const TflApiPresentationEntitiesFaresTicketTypeSchema = z
  .object({ description: z.string().exactOptional(), type: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesFaresTicketType')

const TflApiPresentationEntitiesFaresTicketSchema = z
  .object({
    cost: z.string().exactOptional(),
    description: z.string().exactOptional(),
    displayOrder: z.int32().exactOptional(),
    messages: z.array(TflApiPresentationEntitiesMessageSchema).exactOptional(),
    mode: z.string().exactOptional(),
    passengerType: z.string().exactOptional(),
    ticketTime: TflApiPresentationEntitiesFaresTicketTimeSchema.exactOptional(),
    ticketType: TflApiPresentationEntitiesFaresTicketTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesFaresTicket')

const TflApiPresentationEntitiesFaresFareDetailsSchema = z
  .object({
    boundsId: z.int32().exactOptional(),
    contactlessPAYGOnlyFare: z.boolean().exactOptional(),
    displayName: z.string().exactOptional(),
    displayOrder: z.int32().exactOptional(),
    endDate: z.iso.datetime({ offset: true }).exactOptional(),
    from: z.string().exactOptional(),
    fromStation: z.string().exactOptional(),
    isTour: z.boolean().exactOptional(),
    messages: z.array(TflApiPresentationEntitiesMessageSchema).exactOptional(),
    mode: z.string().exactOptional(),
    operator: z.string().exactOptional(),
    passengerType: z.string().exactOptional(),
    routeCode: z.string().exactOptional(),
    routeDescription: z.string().exactOptional(),
    specialFare: z.boolean().exactOptional(),
    startDate: z.iso.datetime({ offset: true }).exactOptional(),
    throughFare: z.boolean().exactOptional(),
    ticketsAvailable: z.array(TflApiPresentationEntitiesFaresTicketSchema).exactOptional(),
    to: z.string().exactOptional(),
    toStation: z.string().exactOptional(),
    validatorInformation: z.string().exactOptional(),
    via: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesFaresFareDetails')

const TflApiPresentationEntitiesFaresFareStationSchema = z
  .object({
    atcoCode: z.string().exactOptional(),
    commonName: z.string().exactOptional(),
    fareCategory: z
      .enum(['Cash', 'Oyster', 'Contactless', 'ContactlessOnly', 'All'])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesFaresFareStation')

const TflApiPresentationEntitiesFaresFaresModeSchema = z
  .object({
    description: z.string().exactOptional(),
    id: z.int32().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesFaresFaresMode')

const TflApiPresentationEntitiesFaresFaresPeriodSchema = z
  .object({
    endDate: z.iso.datetime({ offset: true }).exactOptional(),
    id: z.int32().exactOptional(),
    isFuture: z.boolean().exactOptional(),
    startDate: z.iso.datetime({ offset: true }).exactOptional(),
    viewableDate: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesFaresFaresPeriod')

const TflApiPresentationEntitiesFaresJourneySchema = z
  .object({
    fromStation: TflApiPresentationEntitiesFaresFareStationSchema.exactOptional(),
    toStation: TflApiPresentationEntitiesFaresFareStationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesFaresJourney')

const TflApiPresentationEntitiesFaresFaresSectionSchema = z
  .object({
    header: z.string().exactOptional(),
    index: z.int32().exactOptional(),
    journey: TflApiPresentationEntitiesFaresJourneySchema.exactOptional(),
    messages: z.array(TflApiPresentationEntitiesMessageSchema).exactOptional(),
    rows: z.array(TflApiPresentationEntitiesFaresFareDetailsSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesFaresFaresSection')

const TflApiPresentationEntitiesFaresPassengerTypeSchema = z
  .object({
    description: z.string().exactOptional(),
    displayName: z.string().exactOptional(),
    displayOrder: z.int32().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesFaresPassengerType')

const TflApiPresentationEntitiesFaresRecommendationSchema = z
  .object({
    cost: z.string().exactOptional(),
    discountCard: z.string().exactOptional(),
    fareType: z.string().exactOptional(),
    gettingYourTicket: z.array(TflApiPresentationEntitiesMessageSchema).exactOptional(),
    id: z.int32().exactOptional(),
    keyFeatures: z.array(TflApiPresentationEntitiesMessageSchema).exactOptional(),
    notes: z.array(TflApiPresentationEntitiesMessageSchema).exactOptional(),
    priceComparison: z.string().exactOptional(),
    priceDescription: z.string().exactOptional(),
    product: z.string().exactOptional(),
    productType: z.string().exactOptional(),
    rank: z.int32().exactOptional(),
    recommendedTopUp: z.string().exactOptional(),
    rule: z.int32().exactOptional(),
    singleFare: z.float64().exactOptional(),
    ticketTime: z.string().exactOptional(),
    ticketType: z.string().exactOptional(),
    zones: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesFaresRecommendation')

const TflApiPresentationEntitiesFaresRecommendationResponseSchema = z
  .object({
    recommendations: z.array(TflApiPresentationEntitiesFaresRecommendationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesFaresRecommendationResponse')

const TflApiPresentationEntitiesGeoCodeSearchMatchSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A string describing the formatted address of the place. Adds additional context to the place's Name.",
      }),
    id: z.string().exactOptional(),
    lat: z.float64().exactOptional(),
    lon: z.float64().exactOptional(),
    name: z.string().exactOptional(),
    types: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The type of the place e.g. "street_address"' }),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesGeoCodeSearchMatch')

const TflApiPresentationEntitiesPathAttributeSchema = z
  .object({ name: z.string().exactOptional(), value: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesPathAttribute')

const TflApiPresentationEntitiesInstructionStepSchema = z
  .object({
    cumulativeDistance: z.int32().exactOptional(),
    cumulativeTravelTime: z.int32().exactOptional(),
    description: z.string().exactOptional(),
    descriptionHeading: z.string().exactOptional(),
    distance: z.int32().exactOptional(),
    latitude: z.float64().exactOptional(),
    longitude: z.float64().exactOptional(),
    pathAttribute: TflApiPresentationEntitiesPathAttributeSchema.exactOptional(),
    skyDirection: z.int32().exactOptional(),
    skyDirectionDescription: z
      .enum(['North', 'NorthEast', 'East', 'SouthEast', 'South', 'SouthWest', 'West', 'NorthWest'])
      .exactOptional(),
    streetName: z.string().exactOptional(),
    trackType: z
      .enum([
        'CycleSuperHighway',
        'CanalTowpath',
        'QuietRoad',
        'ProvisionForCyclists',
        'BusyRoads',
        'None',
        'PushBike',
        'Quietway',
      ])
      .exactOptional(),
    turnDirection: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesInstructionStep')

const TflApiPresentationEntitiesInstructionSchema = z
  .object({
    detailed: z.string().exactOptional(),
    steps: z.array(TflApiPresentationEntitiesInstructionStepSchema).exactOptional(),
    summary: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesInstruction')

const TflApiPresentationEntitiesIntervalSchema = z
  .object({ stopId: z.string().exactOptional(), timeToArrival: z.float64().exactOptional() })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesInterval')

const TflApiPresentationEntitiesJourneyPlannerFareTapDetailsSchema = z
  .object({
    busRouteId: z.string().exactOptional(),
    hostDeviceType: z.string().exactOptional(),
    modeType: z.string().exactOptional(),
    nationalLocationCode: z.int32().exactOptional(),
    tapTimestamp: z.iso.datetime({ offset: true }).exactOptional(),
    validationType: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesJourneyPlannerFareTapDetails')

const TflApiPresentationEntitiesJourneyPlannerFareTapSchema = z
  .object({
    atcoCode: z.string().exactOptional(),
    tapDetails: TflApiPresentationEntitiesJourneyPlannerFareTapDetailsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesJourneyPlannerFareTap')

const TflApiPresentationEntitiesJourneyPlannerFareSchema = z
  .object({
    chargeLevel: z.string().exactOptional(),
    chargeProfileName: z.string().exactOptional(),
    cost: z.int32().exactOptional(),
    highZone: z.int32().exactOptional(),
    isHopperFare: z.boolean().exactOptional(),
    lowZone: z.int32().exactOptional(),
    offPeak: z.int32().exactOptional(),
    peak: z.int32().exactOptional(),
    taps: z.array(TflApiPresentationEntitiesJourneyPlannerFareTapSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesJourneyPlannerFare')

const TflApiPresentationEntitiesJourneyPlannerFareCaveatSchema = z
  .object({ text: z.string().exactOptional(), type: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesJourneyPlannerFareCaveat')

const TflApiPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationDataSchema = z
  .object({
    destinationId: z.string().exactOptional(),
    destinationNumberOfBikes: z.int32().exactOptional(),
    destinationNumberOfEmptySlots: z.int32().exactOptional(),
    originId: z.string().exactOptional(),
    originNumberOfBikes: z.int32().exactOptional(),
    originNumberOfEmptySlots: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationData')

const TflApiPresentationEntitiesJourneyPlannerJourneyVectorSchema = z
  .object({
    from: z.string().exactOptional(),
    to: z.string().exactOptional(),
    uri: z.string().exactOptional(),
    via: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesJourneyPlannerJourneyVector')

const TflApiPresentationEntitiesJourneyPlannerJourneyFareSchema = z
  .object({
    caveats: z.array(TflApiPresentationEntitiesJourneyPlannerFareCaveatSchema).exactOptional(),
    fares: z.array(TflApiPresentationEntitiesJourneyPlannerFareSchema).exactOptional(),
    totalCost: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesJourneyPlannerJourneyFare')

const TflApiPresentationEntitiesPointSchema = z
  .object({
    lat: z.float64().exactOptional().openapi({ description: 'WGS84 latitude of the location.' }),
    lon: z.float64().exactOptional().openapi({ description: 'WGS84 longitude of the location.' }),
  })
  .openapi({
    description:
      'Represents a point located at a latitude and longitude using the WGS84 co-ordinate system.',
    required: [],
  })
  .openapi('TflApiPresentationEntitiesPoint')

const TflApiPresentationEntitiesJourneyPlannerObstacleSchema = z
  .object({
    incline: z.string().exactOptional(),
    position: z.string().exactOptional(),
    stopId: z.int32().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesJourneyPlannerObstacle')

const TflApiPresentationEntitiesJourneyPlannerPathSchema = z
  .object({
    elevation: z.array(TflApiCommonJourneyPlannerJpElevationSchema).exactOptional(),
    lineString: z.string().exactOptional(),
    stopPoints: z.array(TflApiPresentationEntitiesIdentifierSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesJourneyPlannerPath')

const TflApiPresentationEntitiesJourneyPlannerPlannedWorkSchema = z
  .object({
    createdDateTime: z.iso.datetime({ offset: true }).exactOptional(),
    description: z.string().exactOptional(),
    id: z.string().exactOptional(),
    lastUpdateDateTime: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesJourneyPlannerPlannedWork')

const TflApiPresentationEntitiesJourneyPlannerRouteOptionSchema = z
  .object({
    direction: z
      .string()
      .exactOptional()
      .openapi({ description: 'The direction of the route, i.e. outbound or inbound.' }),
    directions: z.array(z.string()).exactOptional(),
    id: z.string().exactOptional().openapi({ description: 'The Id of the route' }),
    lineIdentifier: TflApiPresentationEntitiesIdentifierSchema.exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'Name such as "72"' }),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesJourneyPlannerRouteOption')

const TflApiPresentationEntitiesJourneyPlannerLegSchema = z
  .object({
    arrivalPoint: TflApiPresentationEntitiesPointSchema.exactOptional(),
    arrivalTime: z.iso.datetime({ offset: true }).exactOptional(),
    departurePoint: TflApiPresentationEntitiesPointSchema.exactOptional(),
    departureTime: z.iso.datetime({ offset: true }).exactOptional(),
    disruptions: z.array(TflApiPresentationEntitiesDisruptionSchema).exactOptional(),
    distance: z.float64().exactOptional(),
    duration: z.int32().exactOptional(),
    hasFixedLocations: z.boolean().exactOptional().openapi({ readOnly: true }),
    instruction: TflApiPresentationEntitiesInstructionSchema.exactOptional(),
    interChangeDuration: z.string().exactOptional(),
    interChangePosition: z.string().exactOptional(),
    isDisrupted: z.boolean().exactOptional().openapi({ readOnly: true }),
    mode: TflApiPresentationEntitiesIdentifierSchema.exactOptional(),
    obstacles: z.array(TflApiPresentationEntitiesJourneyPlannerObstacleSchema).exactOptional(),
    path: TflApiPresentationEntitiesJourneyPlannerPathSchema.exactOptional(),
    plannedWorks: z
      .array(TflApiPresentationEntitiesJourneyPlannerPlannedWorkSchema)
      .exactOptional(),
    routeOptions: z
      .array(TflApiPresentationEntitiesJourneyPlannerRouteOptionSchema)
      .exactOptional(),
    scheduledArrivalTime: z.iso.datetime({ offset: true }).exactOptional(),
    scheduledDepartureTime: z.iso.datetime({ offset: true }).exactOptional(),
    speed: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesJourneyPlannerLeg')

const TflApiPresentationEntitiesJourneyPlannerJourneySchema = z
  .object({
    arrivalDateTime: z.iso.datetime({ offset: true }).exactOptional(),
    duration: z.int32().exactOptional(),
    fare: TflApiPresentationEntitiesJourneyPlannerJourneyFareSchema.exactOptional(),
    legs: z.array(TflApiPresentationEntitiesJourneyPlannerLegSchema).exactOptional(),
    startDateTime: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({
    description: 'Object that represents an end to end journey (see schematic).',
    required: [],
  })
  .openapi('TflApiPresentationEntitiesJourneyPlannerJourney')

const TflApiPresentationEntitiesValidityPeriodSchema = z
  .object({
    fromDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Gets or sets the start date.' }),
    isNow: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true is a realtime status rather than planned or info' }),
    toDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Gets or sets the end date.' }),
  })
  .openapi({ description: 'Represents a period for which a planned works is valid.', required: [] })
  .openapi('TflApiPresentationEntitiesValidityPeriod')

const TflApiPresentationEntitiesLineStatusSchema = z
  .object({
    created: z.iso.datetime({ offset: true }).exactOptional(),
    disruption: TflApiPresentationEntitiesDisruptionSchema.exactOptional(),
    id: z.int32().exactOptional(),
    lineId: z.string().exactOptional(),
    modified: z.iso.datetime({ offset: true }).exactOptional(),
    reason: z.string().exactOptional(),
    statusSeverity: z.int32().exactOptional(),
    statusSeverityDescription: z.string().exactOptional(),
    validityPeriods: z.array(TflApiPresentationEntitiesValidityPeriodSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesLineStatus')

const TflApiPresentationEntitiesMatchedRouteSchema = z
  .object({
    destination: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Id (NaPTAN code) or the Destination StopPoint' }),
    destinationName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the Destination StopPoint' }),
    direction: z.string().exactOptional().openapi({ description: 'Inbound or Outbound' }),
    name: z.string().exactOptional().openapi({ description: 'Name such as "72"' }),
    originationName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the Origin StopPoint' }),
    originator: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Id (NaPTAN code) of the Origin StopPoint' }),
    routeCode: z.string().exactOptional().openapi({ description: 'The route code' }),
    serviceType: z.string().exactOptional().openapi({ description: 'Regular or Night' }),
    validFrom: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The DateTime that the Service containing this Route is valid from.',
      }),
    validTo: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The DateTime that the Service containing this Route is valid until.',
      }),
  })
  .openapi({ description: 'Description of a Route used in Route search results.', required: [] })
  .openapi('TflApiPresentationEntitiesMatchedRoute')

const TflApiPresentationEntitiesLineServiceTypeInfoSchema = z
  .object({ name: z.string().exactOptional(), uri: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesLineServiceTypeInfo')

const TflApiPresentationEntitiesLineSchema = z
  .object({
    created: z.iso.datetime({ offset: true }).exactOptional(),
    crowding: TflApiPresentationEntitiesCrowdingSchema.exactOptional(),
    disruptions: z.array(TflApiPresentationEntitiesDisruptionSchema).exactOptional(),
    id: z.string().exactOptional(),
    lineStatuses: z.array(TflApiPresentationEntitiesLineStatusSchema).exactOptional(),
    modeName: z.string().exactOptional(),
    modified: z.iso.datetime({ offset: true }).exactOptional(),
    name: z.string().exactOptional(),
    routeSections: z.array(TflApiPresentationEntitiesMatchedRouteSchema).exactOptional(),
    serviceTypes: z.array(TflApiPresentationEntitiesLineServiceTypeInfoSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesLine')

const TflApiPresentationEntitiesJourneyPlannerTimeAdjustmentSchema = z
  .object({
    date: z.string().exactOptional(),
    time: z.string().exactOptional(),
    timeIs: z.string().exactOptional(),
    uri: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesJourneyPlannerTimeAdjustment')

const TflApiPresentationEntitiesJourneyPlannerTimeAdjustmentsSchema = z
  .object({
    earlier: TflApiPresentationEntitiesJourneyPlannerTimeAdjustmentSchema.exactOptional(),
    earliest: TflApiPresentationEntitiesJourneyPlannerTimeAdjustmentSchema.exactOptional(),
    later: TflApiPresentationEntitiesJourneyPlannerTimeAdjustmentSchema.exactOptional(),
    latest: TflApiPresentationEntitiesJourneyPlannerTimeAdjustmentSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesJourneyPlannerTimeAdjustments')

const TflApiPresentationEntitiesJourneyPlannerSearchCriteriaSchema = z
  .object({
    dateTime: z.iso.datetime({ offset: true }).exactOptional(),
    dateTimeType: z.enum(['Arriving', 'Departing']).exactOptional(),
    timeAdjustments: TflApiPresentationEntitiesJourneyPlannerTimeAdjustmentsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesJourneyPlannerSearchCriteria')

const TflApiPresentationEntitiesJourneyPlannerItineraryResultSchema = z
  .object({
    cycleHireDockingStationData:
      TflApiPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationDataSchema.exactOptional(),
    journeyVector: TflApiPresentationEntitiesJourneyPlannerJourneyVectorSchema.exactOptional(),
    journeys: z.array(TflApiPresentationEntitiesJourneyPlannerJourneySchema).exactOptional(),
    lines: z.array(TflApiPresentationEntitiesLineSchema).exactOptional(),
    recommendedMaxAgeMinutes: z.int32().exactOptional(),
    searchCriteria: TflApiPresentationEntitiesJourneyPlannerSearchCriteriaSchema.exactOptional(),
    stopMessages: z.array(z.string()).exactOptional(),
  })
  .openapi({ description: 'A DTO representing a list of possible journeys.', required: [] })
  .openapi('TflApiPresentationEntitiesJourneyPlannerItineraryResult')

const TflApiPresentationEntitiesKnownJourneySchema = z
  .object({
    hour: z.string().exactOptional(),
    intervalId: z.int32().exactOptional(),
    minute: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesKnownJourney')

const TflApiPresentationEntitiesLineRouteSectionSchema = z
  .object({
    destination: z.string().exactOptional(),
    direction: z.string().exactOptional(),
    fromStation: z.string().exactOptional(),
    routeId: z.int32().exactOptional(),
    serviceType: z.string().exactOptional(),
    toStation: z.string().exactOptional(),
    vehicleDestinationText: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesLineRouteSection')

const TflApiPresentationEntitiesLineSpecificServiceTypeSchema = z
  .object({
    serviceType: TflApiPresentationEntitiesLineServiceTypeInfoSchema.exactOptional(),
    stopServesServiceType: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesLineSpecificServiceType')

const TflApiPresentationEntitiesLineServiceTypeSchema = z
  .object({
    lineName: z.string().exactOptional(),
    lineSpecificServiceTypes: z
      .array(TflApiPresentationEntitiesLineSpecificServiceTypeSchema)
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesLineServiceType')

const TflApiPresentationEntitiesMatchedRouteSectionsSchema = z
  .object({ id: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesMatchedRouteSections')

const TflApiPresentationEntitiesMatchedStopSchema = z
  .object({
    accessibilitySummary: z.string().exactOptional(),
    direction: z.string().exactOptional(),
    hasDisruption: z.boolean().exactOptional(),
    icsId: z.string().exactOptional(),
    id: z.string().exactOptional(),
    lat: z.float64().exactOptional(),
    lines: z.array(TflApiPresentationEntitiesIdentifierSchema).exactOptional(),
    lon: z.float64().exactOptional(),
    modes: z.array(z.string()).exactOptional(),
    name: z.string().exactOptional(),
    parentId: z.string().exactOptional(),
    routeId: z.int32().exactOptional(),
    stationId: z.string().exactOptional(),
    status: z.boolean().exactOptional(),
    stopLetter: z.string().exactOptional(),
    stopType: z.string().exactOptional(),
    topMostParentId: z.string().exactOptional(),
    towards: z.string().exactOptional(),
    url: z.string().exactOptional(),
    zone: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesMatchedStop')

const TflApiPresentationEntitiesModeSchema = z
  .object({
    isFarePaying: z.boolean().exactOptional(),
    isScheduledService: z.boolean().exactOptional(),
    isTflService: z.boolean().exactOptional(),
    modeName: z.string().exactOptional(),
    motType: z.string().exactOptional(),
    network: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesMode')

const TflApiPresentationEntitiesNetworkStatusSchema = z
  .object({
    message: z.string().exactOptional(),
    operator: z.string().exactOptional(),
    status: z.string().exactOptional(),
    statusLevel: z.int32().exactOptional(),
  })
  .openapi({ description: 'Represent travel network status', required: [] })
  .openapi('TflApiPresentationEntitiesNetworkStatus')

const TflApiPresentationEntitiesOrderedRouteSchema = z
  .object({
    name: z.string().exactOptional(),
    naptanIds: z.array(z.string()).exactOptional(),
    serviceType: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesOrderedRoute')

const TflApiPresentationEntitiesServiceFrequencySchema = z
  .object({
    highestFrequency: z.float64().exactOptional(),
    lowestFrequency: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesServiceFrequency')

const TflApiPresentationEntitiesTwentyFourHourClockTimeSchema = z
  .object({ hour: z.string().exactOptional(), minute: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesTwentyFourHourClockTime')

const TflApiPresentationEntitiesPeriodSchema = z
  .object({
    frequency: TflApiPresentationEntitiesServiceFrequencySchema.exactOptional(),
    fromTime: TflApiPresentationEntitiesTwentyFourHourClockTimeSchema.exactOptional(),
    toTime: TflApiPresentationEntitiesTwentyFourHourClockTimeSchema.exactOptional(),
    type: z.enum(['Normal', 'FrequencyHours', 'FrequencyMinutes', 'Unknown']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesPeriod')

const TflApiPresentationEntitiesPlaceCategorySchema = z
  .object({
    availableKeys: z.array(z.string()).exactOptional(),
    category: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesPlaceCategory')

const TflApiPresentationEntitiesPlacePolygonSchema = z
  .object({
    commonName: z.string().exactOptional(),
    geoPoints: z.array(TflApiCommonGeoPointSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesPlacePolygon')

const TflApiPresentationEntitiesPredictionSchema = z
  .object({
    bearing: z.string().exactOptional().openapi({ description: 'Bearing (between 0 to 359)' }),
    currentLocation: z
      .string()
      .exactOptional()
      .openapi({ description: 'The current location of the vehicle.' }),
    destinationName: z.string().exactOptional().openapi({ description: 'Name of the destination' }),
    destinationNaptanId: z
      .string()
      .exactOptional()
      .openapi({ description: "Naptan Identifier for the prediction's destination" }),
    direction: z
      .string()
      .exactOptional()
      .openapi({ description: 'Direction (unified to inbound/outbound)' }),
    expectedArrival: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The expected arrival time of the vehicle at the stop/station' }),
    id: z.string().exactOptional().openapi({ description: 'The identitier for the prediction' }),
    lineId: z.string().exactOptional().openapi({ description: 'Unique identifier for the Line' }),
    lineName: z.string().exactOptional().openapi({ description: 'Line Name' }),
    modeName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The mode name of the station/line the prediction relates to' }),
    naptanId: z.string().exactOptional().openapi({ description: 'Identifier for the prediction' }),
    operationType: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The type of the operation (1: is new or has been updated, 2: should be deleted from any client cache)',
      }),
    platformName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Platform name (for bus, this is the stop letter)' }),
    stationName: z.string().exactOptional().openapi({ description: 'Station name' }),
    timeToLive: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The expiry time for the prediction' }),
    timeToStation: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Prediction of the Time to station in seconds' }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Timestamp for when the prediction was inserted/modified (source column drives what objects are broadcast on each iteration)',
      }),
    timing: TflApiPresentationEntitiesPredictionTimingSchema.exactOptional(),
    towards: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Routing information or other descriptive text about the path of the vehicle towards the destination',
      }),
    vehicleId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The actual vehicle in transit (for train modes, the leading car of the rolling set)',
      }),
  })
  .openapi({ description: 'DTO to capture the prediction details', required: [] })
  .openapi('TflApiPresentationEntitiesPrediction')

const TflApiPresentationEntitiesRedirectSchema = z
  .object({
    active: z.boolean().exactOptional(),
    longUrl: z.string().exactOptional(),
    shortUrl: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesRedirect')

const TflApiPresentationEntitiesRoadCorridorSchema = z
  .object({
    bounds: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Bounds of the Corridor, given by the south-east followed by the north-west co-ordinate\r\n            pair in geoJSON format e.g. "[[-1.241531,51.242151],[1.641223,53.765721]]"',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The display name of the Corridor e.g. "North Circular (A406)". This\r\n            may be identical to the Id.',
      }),
    envelope: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Envelope of the Corridor, given by the corner co-ordinates of a rectangular (four-point) polygon\r\n            in geoJSON format e.g. "[[-1.241531,51.242151],[-1.241531,53.765721],[1.641223,53.765721],[1.641223,51.242151]]"',
      }),
    group: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The group name of the Corridor e.g. "Central London". Most corridors are not grouped, in which case this field can be null.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The Id of the Corridor e.g. "A406"' }),
    statusAggregationEndDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The end of the period over which status has been aggregated, or null if this is the current corridor status.',
      }),
    statusAggregationStartDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The start of the period over which status has been aggregated, or null if this is the current corridor status.',
      }),
    statusSeverity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Standard multi-mode status severity code' }),
    statusSeverityDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the status severity as applied to RoadCorridors' }),
    url: z.string().exactOptional().openapi({ description: 'URL to retrieve this Corridor.' }),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesRoadCorridor')

const TflApiPresentationEntitiesRoadDisruptionScheduleSchema = z
  .object({
    endTime: z.iso.datetime({ offset: true }).exactOptional(),
    startTime: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesRoadDisruptionSchedule')

const TflApiPresentationEntitiesRoadDisruptionImpactAreaSchema = z
  .object({
    endDate: z.iso.datetime({ offset: true }).exactOptional(),
    endTime: z.string().exactOptional(),
    id: z.int32().exactOptional(),
    polygon: SystemDataSpatialDbGeographySchema.exactOptional(),
    roadDisruptionId: z.string().exactOptional(),
    startDate: z.iso.datetime({ offset: true }).exactOptional(),
    startTime: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesRoadDisruptionImpactArea')

const TflApiPresentationEntitiesRoadDisruptionLineSchema = z
  .object({
    endDate: z.iso.datetime({ offset: true }).exactOptional(),
    endTime: z.string().exactOptional(),
    id: z.int32().exactOptional(),
    isDiversion: z.boolean().exactOptional(),
    multiLineString: SystemDataSpatialDbGeographySchema.exactOptional(),
    roadDisruptionId: z.string().exactOptional(),
    startDate: z.iso.datetime({ offset: true }).exactOptional(),
    startTime: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesRoadDisruptionLine')

const TflApiPresentationEntitiesRoadProjectSchema = z
  .object({
    boroughsBenefited: z.array(z.string()).exactOptional(),
    constructionEndDate: z.iso.datetime({ offset: true }).exactOptional(),
    constructionStartDate: z.iso.datetime({ offset: true }).exactOptional(),
    consultationEndDate: z.iso.datetime({ offset: true }).exactOptional(),
    consultationPageUrl: z.string().exactOptional(),
    consultationStartDate: z.iso.datetime({ offset: true }).exactOptional(),
    contactEmail: z.string().exactOptional(),
    contactName: z.string().exactOptional(),
    cycleSuperhighwayId: z.string().exactOptional(),
    externalPageUrl: z.string().exactOptional(),
    phase: z
      .enum([
        'Unscoped',
        'Concept',
        'ConsultationEnded',
        'Consultation',
        'Construction',
        'Complete',
      ])
      .exactOptional(),
    projectDescription: z.string().exactOptional(),
    projectId: z.string().exactOptional(),
    projectName: z.string().exactOptional(),
    projectPageUrl: z.string().exactOptional(),
    projectSummaryPageUrl: z.string().exactOptional(),
    schemeName: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesRoadProject')

const TflApiPresentationEntitiesStreetSegmentSchema = z
  .object({
    lineString: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'geoJSON formatted LineString containing two latitude/longitude (WGS84) pairs that identify the start and end points of the street segment.',
      }),
    sourceSystemId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The ID from the source system of the disruption that this street belongs to.',
      }),
    sourceSystemKey: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The key of the source system of the disruption that this street belongs to.',
      }),
    toid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A 16 digit unique integer identifying a OS ITN (Ordnance Survey Integrated Transport Network) road link.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesStreetSegment')

const TflApiPresentationEntitiesStreetSchema = z
  .object({
    closure: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type of road closure. Some example values:\r\n            Open = road is open, not blocked, not closed, not restricted. It maybe that the disruption has been moved out of the carriageway.\r\n            Partial Closure = road is partially blocked, closed or restricted. \r\n            Full Closure = road is fully blocked or closed.',
      }),
    directions: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The direction of the disruption on the street. Some example values:\r\n            All Directions\r\n            All Approaches\r\n            Clockwise\r\n            Anti-Clockwise\r\n            Northbound\r\n            Eastbound\r\n            Southbound\r\n            Westbound\r\n            Both Directions',
      }),
    name: z.string().exactOptional().openapi({ description: 'Street name' }),
    segments: z
      .array(TflApiPresentationEntitiesStreetSegmentSchema)
      .exactOptional()
      .openapi({
        description: 'Geographic description of the sections of this street that are affected.',
      }),
    sourceSystemId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The ID from the source system of the disruption that this street belongs to.',
      }),
    sourceSystemKey: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The key of the source system of the disruption that this street belongs to.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesStreet')

const TflApiPresentationEntitiesRoadDisruptionSchema = z
  .object({
    category: z
      .string()
      .exactOptional()
      .openapi({ description: 'Describes the nature of disruption e.g. Traffic Incidents, Works' }),
    comments: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full text of comments describing the disruption, including details of any road closures and diversions, where appropriate.',
      }),
    corridorIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The Ids of affected corridors, if any.' }),
    currentUpdate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text of the most recent update from the LSTCC on the state of the\r\n             disruption, including the current traffic impact and any advice to\r\n             road users.',
      }),
    currentUpdateDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time when the last CurrentUpdate description was recorded, \r\n            or null if no CurrentUpdate has been applied.',
      }),
    endDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time on which the disruption ended. For planned disruptions, this date will have a valid value. For unplanned \r\n            disruptions in progress, this field will be omitted.',
      }),
    geography: SystemDataSpatialDbGeographySchema.exactOptional(),
    geometry: SystemDataSpatialDbGeographySchema.exactOptional(),
    hasClosures: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if any of the affected Streets have a "Full Closure" status, false otherwise. A RoadDisruption that has HasClosures is considered a \r\n            Severe or Serious disruption for severity filtering purposes.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the road disruption' }),
    isProvisional: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'True if the disruption is planned on a future date that is open to change',
      }),
    lastModifiedTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time on which the disruption was last modified in the system. This information can reliably be used by a developer to quickly\r\n            compare two instances of the same disruption to determine if it has been changed.',
      }),
    levelOfInterest: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This describes the level of potential impact on traffic operations of the disruption. \r\n            High = e.g. a one-off disruption on a major or high profile route which will require a high level of operational attention \r\n            Medium = This is the default value \r\n            Low = e.g. a frequently occurring disruption which is well known',
      }),
    linkText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text of any associated link' }),
    linkUrl: z.string().exactOptional().openapi({ description: 'The url of any associated link' }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Main road name / number (borough) or preset area name where the disruption is located. This might be useful for a map popup where space is limited.',
      }),
    ordinal: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An ordinal of the disruption based on severity, level of interest and corridor.',
      }),
    point: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Latitude and longitude (WGS84) of the centroid of the disruption, stored in a geoJSON-formatted string.',
      }),
    publishEndDate: z.iso.datetime({ offset: true }).exactOptional(),
    publishStartDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'TDM Additional properties' }),
    recurringSchedules: z
      .array(TflApiPresentationEntitiesRoadDisruptionScheduleSchema)
      .exactOptional(),
    roadDisruptionImpactAreas: z
      .array(TflApiPresentationEntitiesRoadDisruptionImpactAreaSchema)
      .exactOptional(),
    roadDisruptionLines: z
      .array(TflApiPresentationEntitiesRoadDisruptionLineSchema)
      .exactOptional(),
    roadProject: TflApiPresentationEntitiesRoadProjectSchema.exactOptional(),
    severity: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the severity of the disruption.' }),
    startDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time which the disruption started. For a planned disruption (i.e. planned road works) this date will be in the future.\r\n            For unplanned disruptions, this will default to the date on which the disruption was first recorded, but may be adjusted by the operator.',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This describes the status of the disruption.  \r\n            Active = currently in progress \r\n            Active Long Term = currently in progress and long term\r\n            Scheduled = scheduled to start within the next 180 days\r\n            Recurring Works = planned maintenance works that follow a regular routine or pattern and whose next occurrence is to start within the next 180 days.\r\n            Recently Cleared = recently cleared in the last 24 hours\r\n            Note that the status of Scheduled or Recurring Works disruptions will change to Active when they start, and will change status again when they end.',
      }),
    streets: z
      .array(TflApiPresentationEntitiesStreetSchema)
      .exactOptional()
      .openapi({ description: 'A collection of zero or more streets affected by the disruption.' }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Describes the sub-category of disruption e.g. Collapsed Manhole, Abnormal Load',
      }),
    timeFrame: z.string().exactOptional(),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL to retrieve this road disruption' }),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesRoadDisruption')

const TflApiPresentationEntitiesRouteSearchMatchSchema = z
  .object({
    id: z.string().exactOptional(),
    lat: z.float64().exactOptional(),
    lineId: z.string().exactOptional(),
    lineName: z.string().exactOptional(),
    lineRouteSection: z.array(TflApiPresentationEntitiesLineRouteSectionSchema).exactOptional(),
    lon: z.float64().exactOptional(),
    matchedRouteSections: z
      .array(TflApiPresentationEntitiesMatchedRouteSectionsSchema)
      .exactOptional(),
    matchedStops: z.array(TflApiPresentationEntitiesMatchedStopSchema).exactOptional(),
    mode: z.string().exactOptional(),
    name: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesRouteSearchMatch')

const TflApiPresentationEntitiesRouteSearchResponseSchema = z
  .object({
    input: z.string().exactOptional(),
    searchMatches: z.array(TflApiPresentationEntitiesRouteSearchMatchSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesRouteSearchResponse')

const TflApiPresentationEntitiesStopPointSequenceSchema = z
  .object({
    branchId: z.int32().exactOptional().openapi({ description: 'The id of this branch.' }),
    direction: z.string().exactOptional(),
    lineId: z.string().exactOptional(),
    lineName: z.string().exactOptional(),
    nextBranchIds: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'The ids of the next branch(es) in the sequence. Note that the next and previous branch id can be\r\n            identical in the case of a looped route e.g. the Circle line.',
      }),
    prevBranchIds: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'The ids of the previous branch(es) in the sequence. Note that the next and previous branch id can be\r\n            identical in the case of a looped route e.g. the Circle line.',
      }),
    serviceType: z.enum(['Regular', 'Night']).exactOptional(),
    stopPoint: z.array(TflApiPresentationEntitiesMatchedStopSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesStopPointSequence')

const TflApiPresentationEntitiesRouteSequenceSchema = z
  .object({
    direction: z.string().exactOptional(),
    isOutboundOnly: z.boolean().exactOptional(),
    lineId: z.string().exactOptional(),
    lineName: z.string().exactOptional(),
    lineStrings: z.array(z.string()).exactOptional(),
    mode: z.string().exactOptional(),
    orderedLineRoutes: z.array(TflApiPresentationEntitiesOrderedRouteSchema).exactOptional(),
    stations: z.array(TflApiPresentationEntitiesMatchedStopSchema).exactOptional(),
    stopPointSequences: z.array(TflApiPresentationEntitiesStopPointSequenceSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesRouteSequence')

const TflApiPresentationEntitiesScheduleSchema = z
  .object({
    firstJourney: TflApiPresentationEntitiesKnownJourneySchema.exactOptional(),
    knownJourneys: z.array(TflApiPresentationEntitiesKnownJourneySchema).exactOptional(),
    lastJourney: TflApiPresentationEntitiesKnownJourneySchema.exactOptional(),
    name: z.string().exactOptional(),
    periods: z.array(TflApiPresentationEntitiesPeriodSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesSchedule')

const TflApiPresentationEntitiesSearchMatchSchema = z
  .object({
    id: z.string().exactOptional(),
    lat: z.float64().exactOptional(),
    lon: z.float64().exactOptional(),
    name: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesSearchMatch')

const TflApiPresentationEntitiesSearchResponseSchema = z
  .object({
    from: z.int32().exactOptional(),
    matches: z.array(TflApiPresentationEntitiesSearchMatchSchema).exactOptional(),
    maxScore: z.float64().exactOptional(),
    page: z.int32().exactOptional(),
    pageSize: z.int32().exactOptional(),
    provider: z.string().exactOptional(),
    query: z.string().exactOptional(),
    total: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesSearchResponse')

const TflApiPresentationEntitiesStationIntervalSchema = z
  .object({
    id: z.string().exactOptional(),
    intervals: z.array(TflApiPresentationEntitiesIntervalSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesStationInterval')

const TflApiPresentationEntitiesStatusSeveritySchema = z
  .object({
    description: z.string().exactOptional(),
    modeName: z.string().exactOptional(),
    severityLevel: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesStatusSeverity')

const TflApiPresentationEntitiesStopPointCategorySchema = z
  .object({
    availableKeys: z.array(z.string()).exactOptional(),
    category: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesStopPointCategory')

const TflApiPresentationEntitiesStopPointRouteSectionSchema = z
  .object({
    destinationName: z.string().exactOptional(),
    direction: z.string().exactOptional(),
    isActive: z.boolean().exactOptional(),
    lineId: z.string().exactOptional(),
    lineString: z.string().exactOptional(),
    mode: z.string().exactOptional(),
    naptanId: z.string().exactOptional(),
    routeSectionName: z.string().exactOptional(),
    serviceType: z.string().exactOptional(),
    validFrom: z.iso.datetime({ offset: true }).exactOptional(),
    validTo: z.iso.datetime({ offset: true }).exactOptional(),
    vehicleDestinationText: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesStopPointRouteSection')

const TflApiPresentationEntitiesStopPointsResponseSchema = z
  .object({
    centrePoint: z
      .array(z.float64())
      .exactOptional()
      .openapi({ description: 'The centre latitude/longitude of this list of StopPoints' }),
    page: z.int32().exactOptional().openapi({ description: 'The index of this page' }),
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum size of the page in this response i.e. the maximum number of StopPoints',
      }),
    stopPoints: z
      .array(TflApiPresentationEntitiesStopPointSchema)
      .exactOptional()
      .openapi({ description: 'Collection of stop points' }),
    total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of StopPoints available across all pages' }),
  })
  .openapi({ description: 'A paged response containing StopPoints', required: [] })
  .openapi('TflApiPresentationEntitiesStopPointsResponse')

const TflApiPresentationEntitiesTimetableRouteSchema = z
  .object({
    schedules: z.array(TflApiPresentationEntitiesScheduleSchema).exactOptional(),
    stationIntervals: z.array(TflApiPresentationEntitiesStationIntervalSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesTimetableRoute')

const TflApiPresentationEntitiesTimetableSchema = z
  .object({
    departureStopId: z.string().exactOptional(),
    routes: z.array(TflApiPresentationEntitiesTimetableRouteSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesTimetable')

const TflApiPresentationEntitiesTimetablesDisambiguationOptionSchema = z
  .object({ description: z.string().exactOptional(), uri: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesTimetablesDisambiguationOption')

const TflApiPresentationEntitiesTimetablesDisambiguationSchema = z
  .object({
    disambiguationOptions: z
      .array(TflApiPresentationEntitiesTimetablesDisambiguationOptionSchema)
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesTimetablesDisambiguation')

const TflApiPresentationEntitiesTimetableResponseSchema = z
  .object({
    direction: z.string().exactOptional(),
    disambiguation: TflApiPresentationEntitiesTimetablesDisambiguationSchema.exactOptional(),
    lineId: z.string().exactOptional(),
    lineName: z.string().exactOptional(),
    pdfUrl: z.string().exactOptional(),
    stations: z.array(TflApiPresentationEntitiesMatchedStopSchema).exactOptional(),
    statusErrorMessage: z.string().exactOptional(),
    stops: z.array(TflApiPresentationEntitiesMatchedStopSchema).exactOptional(),
    timetable: TflApiPresentationEntitiesTimetableSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TflApiPresentationEntitiesTimetableResponse')

const ApiKeySecurityScheme = {
  description: 'API Key Authentication',
  in: 'query',
  name: 'app_key',
  type: 'apiKey',
}

const AppIdSecurityScheme = {
  description: 'Application ID',
  in: 'query',
  name: 'app_id',
  type: 'apiKey',
}

export const getAccidentStatsYearRoute = createRoute({
  method: 'get',
  path: '/AccidentStats/{year}',
  tags: ['AccidentStats'],
  summary: 'Gets all accident details for accidents occuring in the specified year',
  operationId: 'AccidentStats_Get',
  request: {
    params: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The year for which to filter the accidents on.',
            in: 'path',
            name: 'year',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(TflApiPresentationEntitiesAccidentStatsAccidentDetailSchema),
        },
        'application/xml': {
          schema: z.array(TflApiPresentationEntitiesAccidentStatsAccidentDetailSchema),
        },
        'text/json': {
          schema: z.array(TflApiPresentationEntitiesAccidentStatsAccidentDetailSchema),
        },
        'text/xml': {
          schema: z.array(TflApiPresentationEntitiesAccidentStatsAccidentDetailSchema),
        },
      },
    },
  },
})

export const getAirQualityRoute = createRoute({
  method: 'get',
  path: '/AirQuality',
  tags: ['AirQuality'],
  summary: 'Gets air quality data feed',
  operationId: 'AirQuality_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
  },
})

export const getBikePointRoute = createRoute({
  method: 'get',
  path: '/BikePoint',
  tags: ['BikePoint'],
  summary:
    'Gets all bike point locations. The Place object has an addtionalProperties array which contains the nbBikes, nbDocks and nbSpaces\r\n            numbers which give the status of the BikePoint. A mismatch in these numbers i.e. nbDocks - (nbBikes + nbSpaces) != 0 indicates broken docks.',
  operationId: 'BikePoint_GetAll',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
      },
    },
  },
})

export const getBikePointSearchRoute = createRoute({
  method: 'get',
  path: '/BikePoint/Search',
  tags: ['BikePoint'],
  summary:
    "Search for bike stations by their name, a bike point's name often contains information about the name of the street\r\n            or nearby landmarks, for example. Note that the search result does not contain the PlaceProperties i.e. the status\r\n            or occupancy of the BikePoint, to get that information you should retrieve the BikePoint by its id on /BikePoint/id.",
  operationId: 'BikePoint_Search',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'The search term e.g. "St. James"',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
      },
    },
  },
})

export const getBikePointIdRoute = createRoute({
  method: 'get',
  path: '/BikePoint/{id}',
  tags: ['BikePoint'],
  summary: 'Gets the bike point with the given id.',
  operationId: 'BikePoint_Get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'A bike point id (a list of ids can be obtained from the above BikePoint call)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: TflApiPresentationEntitiesPlaceSchema },
        'application/xml': { schema: TflApiPresentationEntitiesPlaceSchema },
        'text/json': { schema: TflApiPresentationEntitiesPlaceSchema },
        'text/xml': { schema: TflApiPresentationEntitiesPlaceSchema },
      },
    },
  },
})

export const getCabwiseSearchRoute = createRoute({
  method: 'get',
  path: '/Cabwise/search',
  tags: ['Cabwise'],
  summary: 'Gets taxis and minicabs contact information',
  operationId: 'Cabwise_Get',
  request: {
    query: z.object({
      lat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .openapi({
          param: {
            description: 'Latitude',
            in: 'query',
            name: 'lat',
            required: true,
            schema: { format: 'double', type: 'number' },
          },
        }),
      lon: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .openapi({
          param: {
            description: 'Longitude',
            in: 'query',
            name: 'lon',
            required: true,
            schema: { format: 'double', type: 'number' },
          },
        }),
      optype: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Operator Type e.g Minicab, Executive, Limousine',
            in: 'query',
            name: 'optype',
            required: false,
            schema: { type: 'string' },
          },
        }),
      wc: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Wheelchair accessible',
            in: 'query',
            name: 'wc',
            required: false,
            schema: { type: 'string' },
          },
        }),
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The radius of the bounding circle in metres',
            in: 'query',
            name: 'radius',
            required: false,
            schema: { format: 'double', type: 'number' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Trading name of operating company',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'An optional parameter to limit the number of results return. Default and maximum is 20.',
            in: 'query',
            name: 'maxResults',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      legacyFormat: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Legacy Format',
            in: 'query',
            name: 'legacyFormat',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      forceXml: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Force Xml',
            in: 'query',
            name: 'forceXml',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      twentyFourSevenOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Twenty Four Seven Only',
            in: 'query',
            name: 'twentyFourSevenOnly',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
  },
})

export const getJourneyJourneyResultsFromToToRoute = createRoute({
  method: 'get',
  path: '/Journey/JourneyResults/{from}/to/{to}',
  tags: ['Journey'],
  summary: 'Perform a Journey Planner search from the parameters specified in simple types',
  operationId: 'Journey_JourneyResults',
  request: {
    params: z.object({
      from: z
        .string()
        .openapi({
          param: {
            description:
              'Origin of the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name).',
            in: 'path',
            name: 'from',
            required: true,
            schema: { type: 'string' },
          },
        }),
      to: z
        .string()
        .openapi({
          param: {
            description:
              'Destination of the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name).',
            in: 'path',
            name: 'to',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      via: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Travel through point on the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name).',
            in: 'query',
            name: 'via',
            required: false,
            schema: { type: 'string' },
          },
        }),
      nationalSearch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Does the journey cover stops outside London? eg. "nationalSearch=true"',
            in: 'query',
            name: 'nationalSearch',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The date must be in yyyyMMdd format',
            in: 'query',
            name: 'date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      time: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The time must be in HHmm format',
            in: 'query',
            name: 'time',
            required: false,
            schema: { type: 'string' },
          },
        }),
      timeIs: z
        .enum(['Arriving', 'Departing'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Does the time given relate to arrival or leaving time? Possible options: "departing" | "arriving"',
            in: 'query',
            name: 'timeIs',
            required: false,
            schema: { enum: ['Arriving', 'Departing'], type: 'string' },
          },
        }),
      journeyPreference: z
        .enum(['LeastInterchange', 'LeastTime', 'LeastWalking'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The journey preference eg possible options: "leastinterchange" | "leasttime" | "leastwalking"',
            in: 'query',
            name: 'journeyPreference',
            required: false,
            schema: { enum: ['LeastInterchange', 'LeastTime', 'LeastWalking'], type: 'string' },
          },
        }),
      mode: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The mode must be a comma separated list of modes. eg possible options: "public-bus,overground,train,tube,coach,dlr,cablecar,tram,river,walking,cycle"',
            explode: true,
            in: 'query',
            name: 'mode',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      accessibilityPreference: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'NoRequirements',
              'NoSolidStairs',
              'NoEscalators',
              'NoElevators',
              'StepFreeToVehicle',
              'StepFreeToPlatform',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The accessibility preference must be a comma separated list eg. "noSolidStairs,noEscalators,noElevators,stepFreeToVehicle,stepFreeToPlatform"',
            explode: true,
            in: 'query',
            name: 'accessibilityPreference',
            required: false,
            schema: {
              items: {
                enum: [
                  'NoRequirements',
                  'NoSolidStairs',
                  'NoEscalators',
                  'NoElevators',
                  'StepFreeToVehicle',
                  'StepFreeToPlatform',
                ],
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      fromName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An optional name to associate with the origin of the journey in the results.',
            in: 'query',
            name: 'fromName',
            required: false,
            schema: { type: 'string' },
          },
        }),
      toName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An optional name to associate with the destination of the journey in the results.',
            in: 'query',
            name: 'toName',
            required: false,
            schema: { type: 'string' },
          },
        }),
      viaName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An optional name to associate with the via point of the journey in the results.',
            in: 'query',
            name: 'viaName',
            required: false,
            schema: { type: 'string' },
          },
        }),
      maxTransferMinutes: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The max walking time in minutes for transfer eg. "120"',
            in: 'query',
            name: 'maxTransferMinutes',
            required: false,
            schema: { type: 'string' },
          },
        }),
      maxWalkingMinutes: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The max walking time in minutes for journeys eg. "120"',
            in: 'query',
            name: 'maxWalkingMinutes',
            required: false,
            schema: { type: 'string' },
          },
        }),
      walkingSpeed: z
        .enum(['Slow', 'Average', 'Fast'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The walking speed. eg possible options: "slow" | "average" | "fast".',
            in: 'query',
            name: 'walkingSpeed',
            required: false,
            schema: { enum: ['Slow', 'Average', 'Fast'], type: 'string' },
          },
        }),
      cyclePreference: z
        .enum(['None', 'LeaveAtStation', 'TakeOnTransport', 'AllTheWay', 'CycleHire'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The cycle preference. eg possible options: "allTheWay" | "leaveAtStation" | "takeOnTransport" | "cycleHire"',
            in: 'query',
            name: 'cyclePreference',
            required: false,
            schema: {
              enum: ['None', 'LeaveAtStation', 'TakeOnTransport', 'AllTheWay', 'CycleHire'],
              type: 'string',
            },
          },
        }),
      adjustment: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Time adjustment command. eg possible options: "TripFirst" | "TripLast"',
            in: 'query',
            name: 'adjustment',
            required: false,
            schema: { type: 'string' },
          },
        }),
      bikeProficiency: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['Easy', 'Moderate', 'Fast'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma separated list of cycling proficiency levels. eg possible options: "easy,moderate,fast"',
            explode: true,
            in: 'query',
            name: 'bikeProficiency',
            required: false,
            schema: {
              items: { enum: ['Easy', 'Moderate', 'Fast'], type: 'string' },
              type: 'array',
            },
          },
        }),
      alternativeCycle: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Option to determine whether to return alternative cycling journey',
            in: 'query',
            name: 'alternativeCycle',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      alternativeWalking: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Option to determine whether to return alternative walking journey',
            in: 'query',
            name: 'alternativeWalking',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      applyHtmlMarkup: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to determine whether certain text (e.g. walking instructions) should be output with HTML tags or not.',
            in: 'query',
            name: 'applyHtmlMarkup',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      useMultiModalCall: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A boolean to indicate whether or not to return 3 public transport journeys, a bus journey, a cycle hire journey, a personal cycle journey and a walking journey',
            in: 'query',
            name: 'useMultiModalCall',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      walkingOptimization: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'A boolean to indicate whether to optimize journeys using walking',
            in: 'query',
            name: 'walkingOptimization',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      taxiOnlyTrip: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A boolean to indicate whether to return one or more taxi journeys. Note, setting this to true will override "useMultiModalCall".',
            in: 'query',
            name: 'taxiOnlyTrip',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      routeBetweenEntrances: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A boolean to indicate whether public transport routes should include directions between platforms and station entrances.',
            in: 'query',
            name: 'routeBetweenEntrances',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      useRealTimeLiveArrivals: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A boolean to indicate if we want to receive real time live arrivals data where available.',
            in: 'query',
            name: 'useRealTimeLiveArrivals',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      calcOneDirection: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A boolean to make Journey Planner calculate journeys in one temporal direction only. In other words, only calculate journeys after the 'depart' time, or before the 'arrive' time. By default, the Journey Planner engine (EFA) calculates journeys in both temporal directions.",
            in: 'query',
            name: 'calcOneDirection',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: TflApiPresentationEntitiesJourneyPlannerItineraryResultSchema,
        },
        'application/xml': {
          schema: TflApiPresentationEntitiesJourneyPlannerItineraryResultSchema,
        },
        'text/json': { schema: TflApiPresentationEntitiesJourneyPlannerItineraryResultSchema },
        'text/xml': { schema: TflApiPresentationEntitiesJourneyPlannerItineraryResultSchema },
      },
    },
  },
})

export const getJourneyMetaModesRoute = createRoute({
  method: 'get',
  path: '/Journey/Meta/Modes',
  tags: ['Journey'],
  summary: 'Gets a list of all of the available journey planner modes',
  operationId: 'Journey_Meta',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesModeSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesModeSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesModeSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesModeSchema) },
      },
    },
  },
})

export const getLineMetaDisruptionCategoriesRoute = createRoute({
  method: 'get',
  path: '/Line/Meta/DisruptionCategories',
  tags: ['Line'],
  summary: 'Gets a list of valid disruption categories',
  operationId: 'Line_MetaDisruptionCategories',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'application/xml': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
        'text/xml': { schema: z.array(z.string()) },
      },
    },
  },
})

export const getLineMetaModesRoute = createRoute({
  method: 'get',
  path: '/Line/Meta/Modes',
  tags: ['Line'],
  summary: 'Gets a list of valid modes',
  operationId: 'Line_MetaModes',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesModeSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesModeSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesModeSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesModeSchema) },
      },
    },
  },
})

export const getLineMetaServiceTypesRoute = createRoute({
  method: 'get',
  path: '/Line/Meta/ServiceTypes',
  tags: ['Line'],
  summary: 'Gets a list of valid ServiceTypes to filter on',
  operationId: 'Line_MetaServiceTypes',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'application/xml': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
        'text/xml': { schema: z.array(z.string()) },
      },
    },
  },
})

export const getLineMetaSeverityRoute = createRoute({
  method: 'get',
  path: '/Line/Meta/Severity',
  tags: ['Line'],
  summary: 'Gets a list of valid severity codes',
  operationId: 'Line_MetaSeverity',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesStatusSeveritySchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesStatusSeveritySchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesStatusSeveritySchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesStatusSeveritySchema) },
      },
    },
  },
})

export const getLineModeModesRoute = createRoute({
  method: 'get',
  path: '/Line/Mode/{modes}',
  tags: ['Line'],
  summary: 'Gets lines that serve the given modes.',
  operationId: 'Line_GetByMode',
  request: {
    params: z.object({
      modes: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description: 'A comma-separated list of modes e.g. tube,dlr',
            in: 'path',
            name: 'modes',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
      },
    },
  },
})

export const getLineModeModesDisruptionRoute = createRoute({
  method: 'get',
  path: '/Line/Mode/{modes}/Disruption',
  tags: ['Line'],
  summary: 'Get disruptions for all lines of the given modes.',
  operationId: 'Line_DisruptionByMode',
  request: {
    params: z.object({
      modes: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description: 'A comma-separated list of modes e.g. tube,dlr',
            in: 'path',
            name: 'modes',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesDisruptionSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesDisruptionSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesDisruptionSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesDisruptionSchema) },
      },
    },
  },
})

export const getLineModeModesRouteRoute = createRoute({
  method: 'get',
  path: '/Line/Mode/{modes}/Route',
  tags: ['Line'],
  summary:
    'Gets all lines and their valid routes for given modes, including the name and id of the originating and terminating stops for each route',
  operationId: 'Line_RouteByMode',
  request: {
    params: z.object({
      modes: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description: 'A comma-separated list of modes e.g. tube,dlr',
            in: 'path',
            name: 'modes',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      serviceTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['Regular', 'Night'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified",
            explode: true,
            in: 'query',
            name: 'serviceTypes',
            required: false,
            schema: { items: { enum: ['Regular', 'Night'], type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
      },
    },
  },
})

export const getLineModeModesStatusRoute = createRoute({
  method: 'get',
  path: '/Line/Mode/{modes}/Status',
  tags: ['Line'],
  summary: 'Gets the line status of for all lines for the given modes',
  operationId: 'Line_StatusByMode',
  request: {
    params: z.object({
      modes: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description: 'A comma-separated list of modes to filter by. e.g. tube,dlr',
            in: 'path',
            name: 'modes',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      detail: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Include details of the disruptions that are causing the line status including the affected stops and routes',
            in: 'query',
            name: 'detail',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      severityLevel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, ensures that only those line status(es) are returned within the lines that have disruptions with the matching severity level.',
            in: 'query',
            name: 'severityLevel',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
      },
    },
  },
})

export const getLineRouteRoute = createRoute({
  method: 'get',
  path: '/Line/Route',
  tags: ['Line'],
  summary:
    'Get all valid routes for all lines, including the name and id of the originating and terminating stops for each route.',
  operationId: 'Line_Route',
  request: {
    query: z.object({
      serviceTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['Regular', 'Night'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified",
            explode: true,
            in: 'query',
            name: 'serviceTypes',
            required: false,
            schema: { items: { enum: ['Regular', 'Night'], type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
      },
    },
  },
})

export const getLineSearchQueryRoute = createRoute({
  method: 'get',
  path: '/Line/Search/{query}',
  tags: ['Line'],
  summary: 'Search for lines or routes matching the query string',
  operationId: 'Line_Search',
  request: {
    params: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'Search term e.g victoria',
            in: 'path',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      modes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optionally filter by the specified modes',
            explode: true,
            in: 'query',
            name: 'modes',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      serviceTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['Regular', 'Night'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified",
            explode: true,
            in: 'query',
            name: 'serviceTypes',
            required: false,
            schema: { items: { enum: ['Regular', 'Night'], type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: TflApiPresentationEntitiesRouteSearchResponseSchema },
        'application/xml': { schema: TflApiPresentationEntitiesRouteSearchResponseSchema },
        'text/json': { schema: TflApiPresentationEntitiesRouteSearchResponseSchema },
        'text/xml': { schema: TflApiPresentationEntitiesRouteSearchResponseSchema },
      },
    },
  },
})

export const getLineStatusSeverityRoute = createRoute({
  method: 'get',
  path: '/Line/Status/{severity}',
  tags: ['Line'],
  summary:
    'Gets the line status for all lines with a given severity\r\n            A list of valid severity codes can be obtained from a call to Line/Meta/Severity',
  operationId: 'Line_StatusBySeverity',
  request: {
    params: z.object({
      severity: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The level of severity (eg: a number from 0 to 14)',
            in: 'path',
            name: 'severity',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
      },
    },
  },
})

export const getLineIdsRoute = createRoute({
  method: 'get',
  path: '/Line/{ids}',
  tags: ['Line'],
  summary: 'Gets lines that match the specified line ids.',
  operationId: 'Line_Get',
  request: {
    params: z.object({
      ids: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description:
              'A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.',
            in: 'path',
            name: 'ids',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
      },
    },
  },
})

export const getLineIdsArrivalsStopPointIdRoute = createRoute({
  method: 'get',
  path: '/Line/{ids}/Arrivals/{stopPointId}',
  tags: ['Line'],
  summary: 'Get the list of arrival predictions for given line ids based at the given stop',
  operationId: 'Line_Arrivals',
  request: {
    params: z.object({
      ids: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description:
              'A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.',
            in: 'path',
            name: 'ids',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
      stopPointId: z
        .string()
        .openapi({
          param: {
            description:
              'Optional. Id of stop to get arrival predictions for (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)',
            in: 'path',
            name: 'stopPointId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      direction: z
        .enum(['inbound', 'outbound', 'all'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The direction of travel. Can be inbound or outbound or all. If left blank, and destinationStopId is set, will default to all',
            in: 'query',
            name: 'direction',
            required: false,
            schema: { enum: ['inbound', 'outbound', 'all'], type: 'string' },
          },
        }),
      destinationStationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Id of destination stop',
            in: 'query',
            name: 'destinationStationId',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesPredictionSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesPredictionSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesPredictionSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesPredictionSchema) },
      },
    },
  },
})

export const getLineIdsDisruptionRoute = createRoute({
  method: 'get',
  path: '/Line/{ids}/Disruption',
  tags: ['Line'],
  summary: 'Get disruptions for the given line ids',
  operationId: 'Line_Disruption',
  request: {
    params: z.object({
      ids: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description:
              'A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.',
            in: 'path',
            name: 'ids',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesDisruptionSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesDisruptionSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesDisruptionSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesDisruptionSchema) },
      },
    },
  },
})

export const getLineIdsRouteRoute = createRoute({
  method: 'get',
  path: '/Line/{ids}/Route',
  tags: ['Line'],
  summary:
    'Get all valid routes for given line ids, including the name and id of the originating and terminating stops for each route.',
  operationId: 'Line_LineRoutesByIds',
  request: {
    params: z.object({
      ids: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description:
              'A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.',
            in: 'path',
            name: 'ids',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      serviceTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['Regular', 'Night'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified",
            explode: true,
            in: 'query',
            name: 'serviceTypes',
            required: false,
            schema: { items: { enum: ['Regular', 'Night'], type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
      },
    },
  },
})

export const getLineIdsStatusRoute = createRoute({
  method: 'get',
  path: '/Line/{ids}/Status',
  tags: ['Line'],
  summary: 'Gets the line status of for given line ids e.g Minor Delays',
  operationId: 'Line_StatusByIds',
  request: {
    params: z.object({
      ids: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description:
              'A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.',
            in: 'path',
            name: 'ids',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      detail: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Include details of the disruptions that are causing the line status including the affected stops and routes',
            in: 'query',
            name: 'detail',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
      },
    },
  },
})

export const getLineIdsStatusStartDateToEndDateRoute = createRoute({
  method: 'get',
  path: '/Line/{ids}/Status/{StartDate}/to/{EndDate}',
  tags: ['Line'],
  summary: 'Gets the line status for given line ids during the provided dates e.g Minor Delays',
  operationId: 'Line_Status',
  request: {
    params: z.object({
      ids: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description:
              'A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.',
            in: 'path',
            name: 'ids',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
      StartDate: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'StartDate',
            required: true,
            schema: { type: 'string' },
          },
        }),
      EndDate: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'EndDate',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      detail: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Include details of the disruptions that are causing the line status including the affected stops and routes',
            in: 'query',
            name: 'detail',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      startDate: z
        .string()
        .openapi({
          param: { in: 'query', name: 'startDate', required: true, schema: { type: 'string' } },
        }),
      endDate: z
        .string()
        .openapi({
          param: { in: 'query', name: 'endDate', required: true, schema: { type: 'string' } },
        }),
      'dateRange.startDate': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dateRange.startDate',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      'dateRange.endDate': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dateRange.endDate',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesLineSchema) },
      },
    },
  },
})

export const getLineIdRouteSequenceDirectionRoute = createRoute({
  method: 'get',
  path: '/Line/{id}/Route/Sequence/{direction}',
  tags: ['Line'],
  summary:
    'Gets all valid routes for given line id, including the sequence of stops on each route.',
  operationId: 'Line_RouteSequence',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'A single line id e.g. victoria',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      direction: z
        .enum(['inbound', 'outbound', 'all'])
        .openapi({
          param: {
            description: 'The direction of travel. Can be inbound or outbound.',
            in: 'path',
            name: 'direction',
            required: true,
            schema: { enum: ['inbound', 'outbound', 'all'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      serviceTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['Regular', 'Night'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified",
            explode: true,
            in: 'query',
            name: 'serviceTypes',
            required: false,
            schema: { items: { enum: ['Regular', 'Night'], type: 'string' }, type: 'array' },
          },
        }),
      excludeCrowding: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'That excludes crowding from line disruptions. Can be true or false.',
            in: 'query',
            name: 'excludeCrowding',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: TflApiPresentationEntitiesRouteSequenceSchema },
        'application/xml': { schema: TflApiPresentationEntitiesRouteSequenceSchema },
        'text/json': { schema: TflApiPresentationEntitiesRouteSequenceSchema },
        'text/xml': { schema: TflApiPresentationEntitiesRouteSequenceSchema },
      },
    },
  },
})

export const getLineIdStopPointsRoute = createRoute({
  method: 'get',
  path: '/Line/{id}/StopPoints',
  tags: ['Line'],
  summary: 'Gets a list of the stations that serve the given line id',
  operationId: 'Line_StopPoints',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'A single line id e.g. victoria',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      tflOperatedNationalRailStationsOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If the national-rail line is requested, this flag will filter the national rail stations so that only those operated by TfL are returned',
            in: 'query',
            name: 'tflOperatedNationalRailStationsOnly',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
      },
    },
  },
})

export const getLineIdTimetableFromStopPointIdRoute = createRoute({
  method: 'get',
  path: '/Line/{id}/Timetable/{fromStopPointId}',
  tags: ['Line'],
  summary: 'Gets the timetable for a specified station on the give line',
  operationId: 'Line_Timetable',
  request: {
    params: z.object({
      fromStopPointId: z
        .string()
        .openapi({
          param: {
            description:
              "The originating station's stop point id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)",
            in: 'path',
            name: 'fromStopPointId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'A single line id e.g. victoria',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: TflApiPresentationEntitiesTimetableResponseSchema },
        'application/xml': { schema: TflApiPresentationEntitiesTimetableResponseSchema },
        'text/json': { schema: TflApiPresentationEntitiesTimetableResponseSchema },
        'text/xml': { schema: TflApiPresentationEntitiesTimetableResponseSchema },
      },
    },
  },
})

export const getLineIdTimetableFromStopPointIdToToStopPointIdRoute = createRoute({
  method: 'get',
  path: '/Line/{id}/Timetable/{fromStopPointId}/to/{toStopPointId}',
  tags: ['Line'],
  summary: 'Gets the timetable for a specified station on the give line with specified destination',
  operationId: 'Line_TimetableTo',
  request: {
    params: z.object({
      fromStopPointId: z
        .string()
        .openapi({
          param: {
            description:
              "The originating station's stop point id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)",
            in: 'path',
            name: 'fromStopPointId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'A single line id e.g. victoria',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      toStopPointId: z
        .string()
        .openapi({
          param: {
            description: "The destination stations's Naptan code",
            in: 'path',
            name: 'toStopPointId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: TflApiPresentationEntitiesTimetableResponseSchema },
        'application/xml': { schema: TflApiPresentationEntitiesTimetableResponseSchema },
        'text/json': { schema: TflApiPresentationEntitiesTimetableResponseSchema },
        'text/xml': { schema: TflApiPresentationEntitiesTimetableResponseSchema },
      },
    },
  },
})

export const getModeActiveServiceTypesRoute = createRoute({
  method: 'get',
  path: '/Mode/ActiveServiceTypes',
  tags: ['Mode'],
  summary:
    'Returns the service type active for a mode.\r\n            Currently only supports tube',
  operationId: 'Mode_GetActiveServiceTypes',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesActiveServiceTypeSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesActiveServiceTypeSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesActiveServiceTypeSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesActiveServiceTypeSchema) },
      },
    },
  },
})

export const getModeModeArrivalsRoute = createRoute({
  method: 'get',
  path: '/Mode/{mode}/Arrivals',
  tags: ['Mode'],
  summary: 'Gets the next arrival predictions for all stops of a given mode',
  operationId: 'Mode_Arrivals',
  request: {
    params: z.object({
      mode: z
        .string()
        .openapi({
          param: {
            description: 'A mode name e.g. tube, dlr',
            in: 'path',
            name: 'mode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'A number of arrivals to return for each stop, -1 to return all available.',
            in: 'query',
            name: 'count',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesPredictionSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesPredictionSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesPredictionSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesPredictionSchema) },
      },
    },
  },
})

export const getOccupancyBikePointsIdsRoute = createRoute({
  method: 'get',
  path: '/Occupancy/BikePoints/{ids}',
  tags: ['Occupancy'],
  summary: 'Get the occupancy for bike points.',
  operationId: 'Occupancy_GetBikePointsOccupancies',
  request: {
    params: z.object({
      ids: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'ids',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesBikePointOccupancySchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesBikePointOccupancySchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesBikePointOccupancySchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesBikePointOccupancySchema) },
      },
    },
  },
})

export const getOccupancyCarParkRoute = createRoute({
  method: 'get',
  path: '/Occupancy/CarPark',
  tags: ['Occupancy'],
  summary: 'Gets the occupancy for all car parks that have occupancy data',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesCarParkOccupancySchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesCarParkOccupancySchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesCarParkOccupancySchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesCarParkOccupancySchema) },
      },
    },
  },
})

export const getOccupancyCarParkIdRoute = createRoute({
  method: 'get',
  path: '/Occupancy/CarPark/{id}',
  tags: ['Occupancy'],
  summary: 'Gets the occupancy for a car park with a given id',
  operationId: 'Occupancy_Get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: TflApiPresentationEntitiesCarParkOccupancySchema },
        'application/xml': { schema: TflApiPresentationEntitiesCarParkOccupancySchema },
        'text/json': { schema: TflApiPresentationEntitiesCarParkOccupancySchema },
        'text/xml': { schema: TflApiPresentationEntitiesCarParkOccupancySchema },
      },
    },
  },
})

export const getOccupancyChargeConnectorRoute = createRoute({
  method: 'get',
  path: '/Occupancy/ChargeConnector',
  tags: ['Occupancy'],
  summary: 'Gets the occupancy for all charge connectors',
  operationId: 'Occupancy_GetAllChargeConnectorStatus',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(TflApiPresentationEntitiesChargeConnectorOccupancySchema),
        },
        'application/xml': {
          schema: z.array(TflApiPresentationEntitiesChargeConnectorOccupancySchema),
        },
        'text/json': { schema: z.array(TflApiPresentationEntitiesChargeConnectorOccupancySchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesChargeConnectorOccupancySchema) },
      },
    },
  },
})

export const getOccupancyChargeConnectorIdsRoute = createRoute({
  method: 'get',
  path: '/Occupancy/ChargeConnector/{ids}',
  tags: ['Occupancy'],
  summary: 'Gets the occupancy for a charge connectors with a given id (sourceSystemPlaceId)',
  operationId: 'Occupancy_GetChargeConnectorStatus',
  request: {
    params: z.object({
      ids: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            in: 'path',
            name: 'ids',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(TflApiPresentationEntitiesChargeConnectorOccupancySchema),
        },
        'application/xml': {
          schema: z.array(TflApiPresentationEntitiesChargeConnectorOccupancySchema),
        },
        'text/json': { schema: z.array(TflApiPresentationEntitiesChargeConnectorOccupancySchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesChargeConnectorOccupancySchema) },
      },
    },
  },
})

export const getPlaceRoute = createRoute({
  method: 'get',
  path: '/Place',
  tags: ['Place'],
  summary:
    'Gets the places that lie within a geographic region. The geographic region of interest can either be specified\r\n            by using a lat/lon geo-point and a radius in metres to return places within the locus defined by the lat/lon of\r\n            its centre or alternatively, by the use of a bounding box defined by the lat/lon of its north-west and south-east corners.\r\n            Optionally filters on type and can strip properties for a smaller payload.',
  operationId: 'Place_GetByGeo',
  request: {
    query: z.object({
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The radius of the bounding circle in metres when only lat/lon are specified.',
            in: 'query',
            name: 'radius',
            required: false,
            schema: { format: 'double', type: 'number' },
          },
        }),
      categories: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'An optional list of comma separated property categories to return in the Place\'s property bag. If null or empty, all categories of property are returned. Pass the keyword "none" to return no properties (a valid list of categories can be obtained from the /Place/Meta/categories endpoint)',
            explode: true,
            in: 'query',
            name: 'categories',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      includeChildren: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Defaults to false. If true child places e.g. individual charging stations at a charge point while be included, otherwise just the URLs of any child places will be returned',
            in: 'query',
            name: 'includeChildren',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Place types to filter on, or null to return all types',
            explode: true,
            in: 'query',
            name: 'type',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      activeOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "An optional parameter to limit the results to active records only (Currently only the 'VariableMessageSign' place type is supported)",
            in: 'query',
            name: 'activeOnly',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      numberOfPlacesToReturn: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, limits the number of returned places equal to the given value',
            in: 'query',
            name: 'numberOfPlacesToReturn',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      'placeGeo.swLat': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'placeGeo.swLat',
            required: false,
            schema: { format: 'double', type: 'number' },
          },
        }),
      'placeGeo.swLon': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'placeGeo.swLon',
            required: false,
            schema: { format: 'double', type: 'number' },
          },
        }),
      'placeGeo.neLat': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'placeGeo.neLat',
            required: false,
            schema: { format: 'double', type: 'number' },
          },
        }),
      'placeGeo.neLon': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'placeGeo.neLon',
            required: false,
            schema: { format: 'double', type: 'number' },
          },
        }),
      'placeGeo.lat': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'placeGeo.lat',
            required: false,
            schema: { format: 'double', type: 'number' },
          },
        }),
      'placeGeo.lon': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'placeGeo.lon',
            required: false,
            schema: { format: 'double', type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
      },
    },
  },
})

export const getPlaceAddressStreetsPostcodeRoute = createRoute({
  method: 'get',
  path: '/Place/Address/Streets/{Postcode}',
  tags: ['Place'],
  summary: 'Gets the set of streets associated with a post code.',
  operationId: 'Place_GetStreetsByPostCode',
  request: {
    query: z.object({
      postcode: z
        .string()
        .openapi({
          param: { in: 'query', name: 'postcode', required: true, schema: { type: 'string' } },
        }),
      'postcodeInput.postcode': z
        .string()
        .regex(
          /^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/,
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'postcodeInput.postcode',
            required: false,
            schema: {
              pattern:
                '^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$',
              type: 'string',
            },
          },
        }),
    }),
    params: z.object({
      Postcode: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'Postcode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
  },
})

export const getPlaceMetaCategoriesRoute = createRoute({
  method: 'get',
  path: '/Place/Meta/Categories',
  tags: ['Place'],
  summary: 'Gets a list of all of the available place property categories and keys.',
  operationId: 'Place_MetaCategories',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesPlaceCategorySchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesPlaceCategorySchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesPlaceCategorySchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesPlaceCategorySchema) },
      },
    },
  },
})

export const getPlaceMetaPlaceTypesRoute = createRoute({
  method: 'get',
  path: '/Place/Meta/PlaceTypes',
  tags: ['Place'],
  summary: 'Gets a list of the available types of Place.',
  operationId: 'Place_MetaPlaceTypes',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesPlaceCategorySchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesPlaceCategorySchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesPlaceCategorySchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesPlaceCategorySchema) },
      },
    },
  },
})

export const getPlaceSearchRoute = createRoute({
  method: 'get',
  path: '/Place/Search',
  tags: ['Place'],
  summary: 'Gets all places that matches the given query',
  operationId: 'Place_Search',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the place, you can use the /Place/Types/{types} endpoint to get a list of places for a given type including their names.',
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma-separated list of the types to return. Max. approx 12 types.',
            explode: true,
            in: 'query',
            name: 'types',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
      },
    },
  },
})

export const getPlaceTypeTypesRoute = createRoute({
  method: 'get',
  path: '/Place/Type/{types}',
  tags: ['Place'],
  summary: 'Gets all places of a given type',
  operationId: 'Place_GetByType',
  request: {
    params: z.object({
      types: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description:
              'A comma-separated list of the types to return. Max. approx 12 types.\r\n            A valid list of place types can be obtained from the /Place/Meta/placeTypes endpoint.',
            in: 'path',
            name: 'types',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      activeOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "An optional parameter to limit the results to active records only (Currently only the 'VariableMessageSign' place type is supported)",
            in: 'query',
            name: 'activeOnly',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
      },
    },
  },
})

export const getPlaceIdRoute = createRoute({
  method: 'get',
  path: '/Place/{id}',
  tags: ['Place'],
  summary: 'Gets the place with the given id.',
  operationId: 'Place_Get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'The id of the place, you can use the /Place/Types/{types} endpoint to get a list of places for a given type including their ids',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      includeChildren: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Defaults to false. If true child places e.g. individual charging stations at a charge point while be included, otherwise just the URLs of any child places will be returned',
            in: 'query',
            name: 'includeChildren',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
      },
    },
  },
})

export const getPlaceTypeAtLatLonRoute = createRoute({
  method: 'get',
  path: '/Place/{type}/At/{Lat}/{Lon}',
  tags: ['Place'],
  summary:
    'Gets any places of the given type whose geography intersects the given latitude and longitude. In practice this means the Place\r\n            must be polygonal e.g. a BoroughBoundary.',
  operationId: 'Place_GetAt',
  request: {
    params: z.object({
      type: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description:
              'The place type (a valid list of place types can be obtained from the /Place/Meta/placeTypes endpoint)',
            in: 'path',
            name: 'type',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
      Lat: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'Lat',
            required: true,
            schema: { type: 'string' },
          },
        }),
      Lon: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'Lon',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      lat: z
        .string()
        .openapi({
          param: { in: 'query', name: 'lat', required: true, schema: { type: 'string' } },
        }),
      lon: z
        .string()
        .openapi({
          param: { in: 'query', name: 'lon', required: true, schema: { type: 'string' } },
        }),
      'location.lat': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'location.lat',
            required: true,
            schema: { format: 'double', type: 'number' },
          },
        }),
      'location.lon': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'location.lon',
            required: true,
            schema: { format: 'double', type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
  },
})

export const getPlaceTypeOverlayZLatLonWidthHeightRoute = createRoute({
  method: 'get',
  path: '/Place/{type}/overlay/{z}/{Lat}/{Lon}/{width}/{height}',
  tags: ['Place'],
  summary: 'Gets the place overlay for a given set of co-ordinates and a given width/height.',
  operationId: 'Place_GetOverlay',
  request: {
    params: z.object({
      z: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The zoom level',
            in: 'path',
            name: 'z',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      type: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description:
              'The place type (a valid list of place types can be obtained from the /Place/Meta/placeTypes endpoint)',
            in: 'path',
            name: 'type',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
      width: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The width of the requested overlay.',
            in: 'path',
            name: 'width',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      height: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The height of the requested overlay.',
            in: 'path',
            name: 'height',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      Lat: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'Lat',
            required: true,
            schema: { type: 'string' },
          },
        }),
      Lon: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'Lon',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      lat: z
        .string()
        .openapi({
          param: { in: 'query', name: 'lat', required: true, schema: { type: 'string' } },
        }),
      lon: z
        .string()
        .openapi({
          param: { in: 'query', name: 'lon', required: true, schema: { type: 'string' } },
        }),
      'location.lat': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'location.lat',
            required: true,
            schema: { format: 'double', type: 'number' },
          },
        }),
      'location.lon': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'location.lon',
            required: true,
            schema: { format: 'double', type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
  },
})

export const getRoadRoute = createRoute({
  method: 'get',
  path: '/Road',
  tags: ['Road'],
  summary: 'Gets all roads managed by TfL',
  operationId: 'Road_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesRoadCorridorSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesRoadCorridorSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesRoadCorridorSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesRoadCorridorSchema) },
      },
    },
  },
})

export const getRoadMetaCategoriesRoute = createRoute({
  method: 'get',
  path: '/Road/Meta/Categories',
  tags: ['Road'],
  summary: 'Gets a list of valid RoadDisruption categories',
  operationId: 'Road_MetaCategories',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'application/xml': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
        'text/xml': { schema: z.array(z.string()) },
      },
    },
  },
})

export const getRoadMetaSeveritiesRoute = createRoute({
  method: 'get',
  path: '/Road/Meta/Severities',
  tags: ['Road'],
  summary: 'Gets a list of valid RoadDisruption severity codes',
  operationId: 'Road_MetaSeverities',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesStatusSeveritySchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesStatusSeveritySchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesStatusSeveritySchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesStatusSeveritySchema) },
      },
    },
  },
})

export const getRoadAllDisruptionDisruptionIdsRoute = createRoute({
  method: 'get',
  path: '/Road/all/Disruption/{disruptionIds}',
  tags: ['Road'],
  summary: 'Gets a list of active disruptions filtered by disruption Ids.',
  operationId: 'Road_DisruptionById',
  request: {
    params: z.object({
      disruptionIds: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description: 'Comma-separated list of disruption identifiers to filter by.',
            in: 'path',
            name: 'disruptionIds',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      stripContent: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional, defaults to false. When true, removes every property/node except for id, point, severity, severityDescription, startDate, endDate, corridor details, location and comments.',
            in: 'query',
            name: 'stripContent',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/geo+json': { schema: TflApiPresentationEntitiesRoadDisruptionSchema },
        'application/json': { schema: TflApiPresentationEntitiesRoadDisruptionSchema },
        'application/xml': { schema: TflApiPresentationEntitiesRoadDisruptionSchema },
        'text/json': { schema: TflApiPresentationEntitiesRoadDisruptionSchema },
        'text/xml': { schema: TflApiPresentationEntitiesRoadDisruptionSchema },
      },
    },
  },
})

export const getRoadAllStreetDisruptionRoute = createRoute({
  method: 'get',
  path: '/Road/all/Street/Disruption',
  tags: ['Road'],
  summary:
    'Gets a list of disrupted streets. If no date filters are provided, current disruptions are returned.',
  operationId: 'Road_DisruptedStreets',
  request: {
    query: z.object({
      startDate: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'Optional, the start time to filter on.',
            in: 'query',
            name: 'startDate',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      endDate: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'Optional, The end time to filter on.',
            in: 'query',
            name: 'endDate',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
  },
})

export const getRoadIdsRoute = createRoute({
  method: 'get',
  path: '/Road/{ids}',
  tags: ['Road'],
  summary: 'Gets the road with the specified id (e.g. A1)',
  request: {
    params: z.object({
      ids: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description:
              'Comma-separated list of road identifiers e.g. "A406, A2" (a full list of supported road identifiers can be found at the /Road/ endpoint)',
            in: 'path',
            name: 'ids',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesRoadCorridorSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesRoadCorridorSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesRoadCorridorSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesRoadCorridorSchema) },
      },
    },
  },
})

export const getRoadIdsDisruptionRoute = createRoute({
  method: 'get',
  path: '/Road/{ids}/Disruption',
  tags: ['Road'],
  summary: 'Get active disruptions, filtered by road ids',
  operationId: 'Road_Disruption',
  request: {
    params: z.object({
      ids: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description:
              'Comma-separated list of road identifiers e.g. "A406, A2" use all for all to ignore id filter (a full list of supported road identifiers can be found at the /Road/ endpoint)',
            in: 'path',
            name: 'ids',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      stripContent: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional, defaults to false. When true, removes every property/node except for id, point, severity, severityDescription, startDate, endDate, corridor details, location, comments and streets',
            in: 'query',
            name: 'stripContent',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      severities: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'an optional list of Severity names to filter on (a valid list of severities can be obtained from the /Road/Meta/severities endpoint)',
            explode: true,
            in: 'query',
            name: 'severities',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      categories: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'an optional list of category names to filter on (a valid list of categories can be obtained from the /Road/Meta/categories endpoint)',
            explode: true,
            in: 'query',
            name: 'categories',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      closures: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional, defaults to true. When true, always includes disruptions that have road closures, regardless of the severity filter. When false, the severity filter works as normal.',
            in: 'query',
            name: 'closures',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/geo+json': { schema: z.array(TflApiPresentationEntitiesRoadDisruptionSchema) },
        'application/json': { schema: z.array(TflApiPresentationEntitiesRoadDisruptionSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesRoadDisruptionSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesRoadDisruptionSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesRoadDisruptionSchema) },
      },
    },
  },
})

export const getRoadIdsStatusRoute = createRoute({
  method: 'get',
  path: '/Road/{ids}/Status',
  tags: ['Road'],
  summary:
    'Gets the specified roads with the status aggregated over the date range specified, or now until the end of today if no dates are passed.',
  operationId: 'Road_Status',
  request: {
    params: z.object({
      ids: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description:
              'Comma-separated list of road identifiers e.g. "A406, A2" or use "all" to ignore id filter (a full list of supported road identifiers can be found at the /Road/ endpoint)',
            in: 'path',
            name: 'ids',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      'dateRangeNullable.startDate': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dateRangeNullable.startDate',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      'dateRangeNullable.endDate': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dateRangeNullable.endDate',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesRoadCorridorSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesRoadCorridorSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesRoadCorridorSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesRoadCorridorSchema) },
      },
    },
  },
})

export const getSearchRoute = createRoute({
  method: 'get',
  path: '/Search',
  tags: ['Search'],
  summary:
    'Search the site for occurrences of the query string. The maximum number of results returned is equal to the maximum page size\r\n            of 100. To return subsequent pages, use the paginated overload.',
  operationId: 'Search_Get',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'The search query',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: TflApiPresentationEntitiesSearchResponseSchema },
        'application/xml': { schema: TflApiPresentationEntitiesSearchResponseSchema },
        'text/json': { schema: TflApiPresentationEntitiesSearchResponseSchema },
        'text/xml': { schema: TflApiPresentationEntitiesSearchResponseSchema },
      },
    },
  },
})

export const getSearchBusSchedulesRoute = createRoute({
  method: 'get',
  path: '/Search/BusSchedules',
  tags: ['Search'],
  summary: 'Searches the bus schedules folder on S3 for a given bus number.',
  operationId: 'Search_BusSchedules',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'The search query',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: TflApiPresentationEntitiesSearchResponseSchema },
        'application/xml': { schema: TflApiPresentationEntitiesSearchResponseSchema },
        'text/json': { schema: TflApiPresentationEntitiesSearchResponseSchema },
        'text/xml': { schema: TflApiPresentationEntitiesSearchResponseSchema },
      },
    },
  },
})

export const getSearchMetaCategoriesRoute = createRoute({
  method: 'get',
  path: '/Search/Meta/Categories',
  tags: ['Search'],
  summary: 'Gets the available search categories.',
  operationId: 'Search_MetaCategories',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'application/xml': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
        'text/xml': { schema: z.array(z.string()) },
      },
    },
  },
})

export const getSearchMetaSearchProvidersRoute = createRoute({
  method: 'get',
  path: '/Search/Meta/SearchProviders',
  tags: ['Search'],
  summary: 'Gets the available searchProvider names.',
  operationId: 'Search_MetaSearchProviders',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'application/xml': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
        'text/xml': { schema: z.array(z.string()) },
      },
    },
  },
})

export const getSearchMetaSortsRoute = createRoute({
  method: 'get',
  path: '/Search/Meta/Sorts',
  tags: ['Search'],
  summary: 'Gets the available sorting options.',
  operationId: 'Search_MetaSorts',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'application/xml': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
        'text/xml': { schema: z.array(z.string()) },
      },
    },
  },
})

export const getStopPointRoute = createRoute({
  method: 'get',
  path: '/StopPoint',
  tags: ['StopPoint'],
  summary: 'Gets a list of StopPoints within {radius} by the specified criteria',
  operationId: 'StopPoint_GetByGeoPoint',
  request: {
    query: z.object({
      stopTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'a list of stopTypes that should be returned (a list of valid stop types can be obtained from the StopPoint/meta/stoptypes endpoint)',
            explode: true,
            in: 'query',
            name: 'stopTypes',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'the radius of the bounding circle in metres (default : 200)',
            in: 'query',
            name: 'radius',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      useStopPointHierarchy: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Re-arrange the output into a parent/child hierarchy',
            in: 'query',
            name: 'useStopPointHierarchy',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      modes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'the list of modes to search (comma separated mode names e.g. tube,dlr)',
            explode: true,
            in: 'query',
            name: 'modes',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      categories: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'an optional list of comma separated property categories to return in the StopPoint\'s property bag. If null or empty, all categories of property are returned. Pass the keyword "none" to return no properties (a valid list of categories can be obtained from the /StopPoint/Meta/categories endpoint)',
            explode: true,
            in: 'query',
            name: 'categories',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      returnLines: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'true to return the lines that each stop point serves as a nested resource',
            in: 'query',
            name: 'returnLines',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      'location.lat': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'location.lat',
            required: true,
            schema: { format: 'double', type: 'number' },
          },
        }),
      'location.lon': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'location.lon',
            required: true,
            schema: { format: 'double', type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: TflApiPresentationEntitiesStopPointsResponseSchema },
        'application/xml': { schema: TflApiPresentationEntitiesStopPointsResponseSchema },
        'text/json': { schema: TflApiPresentationEntitiesStopPointsResponseSchema },
        'text/xml': { schema: TflApiPresentationEntitiesStopPointsResponseSchema },
      },
    },
  },
})

export const getStopPointMetaCategoriesRoute = createRoute({
  method: 'get',
  path: '/StopPoint/Meta/Categories',
  tags: ['StopPoint'],
  summary: 'Gets the list of available StopPoint additional information categories',
  operationId: 'StopPoint_MetaCategories',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesStopPointCategorySchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesStopPointCategorySchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesStopPointCategorySchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesStopPointCategorySchema) },
      },
    },
  },
})

export const getStopPointMetaModesRoute = createRoute({
  method: 'get',
  path: '/StopPoint/Meta/Modes',
  tags: ['StopPoint'],
  summary: 'Gets the list of available StopPoint modes',
  operationId: 'StopPoint_MetaModes',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesModeSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesModeSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesModeSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesModeSchema) },
      },
    },
  },
})

export const getStopPointMetaStopTypesRoute = createRoute({
  method: 'get',
  path: '/StopPoint/Meta/StopTypes',
  tags: ['StopPoint'],
  summary: 'Gets the list of available StopPoint types',
  operationId: 'StopPoint_MetaStopTypes',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'application/xml': { schema: z.array(z.string()) },
        'text/json': { schema: z.array(z.string()) },
        'text/xml': { schema: z.array(z.string()) },
      },
    },
  },
})

export const getStopPointModeModesRoute = createRoute({
  method: 'get',
  path: '/StopPoint/Mode/{modes}',
  tags: ['StopPoint'],
  summary: 'Gets a list of StopPoints filtered by the modes available at that StopPoint.',
  operationId: 'StopPoint_GetByMode',
  request: {
    params: z.object({
      modes: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description: 'A comma-seperated list of modes e.g. tube,dlr',
            in: 'path',
            name: 'modes',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The data set page to return. Page 1 equates to the first 1000 stop points, page 2 equates to 1001-2000 etc. Must be entered for bus mode as data set is too large.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: TflApiPresentationEntitiesStopPointsResponseSchema },
        'application/xml': { schema: TflApiPresentationEntitiesStopPointsResponseSchema },
        'text/json': { schema: TflApiPresentationEntitiesStopPointsResponseSchema },
        'text/xml': { schema: TflApiPresentationEntitiesStopPointsResponseSchema },
      },
    },
  },
})

export const getStopPointModeModesDisruptionRoute = createRoute({
  method: 'get',
  path: '/StopPoint/Mode/{modes}/Disruption',
  tags: ['StopPoint'],
  summary: 'Gets a distinct list of disrupted stop points for the given modes',
  operationId: 'StopPoint_DisruptionByMode',
  request: {
    params: z.object({
      modes: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description: 'A comma-seperated list of modes e.g. tube,dlr',
            in: 'path',
            name: 'modes',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      includeRouteBlockedStops: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'includeRouteBlockedStops',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesDisruptedPointSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesDisruptedPointSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesDisruptedPointSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesDisruptedPointSchema) },
      },
    },
  },
})

export const getStopPointSearchRoute = createRoute({
  method: 'get',
  path: '/StopPoint/Search',
  tags: ['StopPoint'],
  summary: 'Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description:
              'The query string, case-insensitive. Leading and trailing wildcards are applied automatically.',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      modes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional, parameter separated list of the modes to filter by',
            explode: true,
            in: 'query',
            name: 'modes',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      faresOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'True to only return stations in that have Fares data available for single fares to another station.',
            in: 'query',
            name: 'faresOnly',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'An optional result limit, defaulting to and with a maximum of 50. Since children of the stop point heirarchy are returned for matches,\r\n            it is possible that the flattened result set will contain more than 50 items.',
            in: 'query',
            name: 'maxResults',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      lines: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional, parameter separated list of the lines to filter by',
            explode: true,
            in: 'query',
            name: 'lines',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      includeHubs: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results including HUBs.',
            in: 'query',
            name: 'includeHubs',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      tflOperatedNationalRailStationsOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If the national-rail mode is included, this flag will filter the national rail stations so that only those operated by TfL are returned',
            in: 'query',
            name: 'tflOperatedNationalRailStationsOnly',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: TflApiPresentationEntitiesSearchResponseSchema },
        'application/xml': { schema: TflApiPresentationEntitiesSearchResponseSchema },
        'text/json': { schema: TflApiPresentationEntitiesSearchResponseSchema },
        'text/xml': { schema: TflApiPresentationEntitiesSearchResponseSchema },
      },
    },
  },
})

export const getStopPointSearchQueryRoute = createRoute({
  method: 'get',
  path: '/StopPoint/Search/{query}',
  tags: ['StopPoint'],
  summary: 'Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.',
  operationId: 'StopPoint_Search',
  request: {
    params: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description:
              'The query string, case-insensitive. Leading and trailing wildcards are applied automatically.',
            in: 'path',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      modes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional, parameter separated list of the modes to filter by',
            explode: true,
            in: 'query',
            name: 'modes',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      faresOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'True to only return stations in that have Fares data available for single fares to another station.',
            in: 'query',
            name: 'faresOnly',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'An optional result limit, defaulting to and with a maximum of 50. Since children of the stop point heirarchy are returned for matches,\r\n            it is possible that the flattened result set will contain more than 50 items.',
            in: 'query',
            name: 'maxResults',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      lines: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'An optional, parameter separated list of the lines to filter by',
            explode: true,
            in: 'query',
            name: 'lines',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      includeHubs: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results including HUBs.',
            in: 'query',
            name: 'includeHubs',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      tflOperatedNationalRailStationsOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If the national-rail mode is included, this flag will filter the national rail stations so that only those operated by TfL are returned',
            in: 'query',
            name: 'tflOperatedNationalRailStationsOnly',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: TflApiPresentationEntitiesSearchResponseSchema },
        'application/xml': { schema: TflApiPresentationEntitiesSearchResponseSchema },
        'text/json': { schema: TflApiPresentationEntitiesSearchResponseSchema },
        'text/xml': { schema: TflApiPresentationEntitiesSearchResponseSchema },
      },
    },
  },
})

export const getStopPointServiceTypesRoute = createRoute({
  method: 'get',
  path: '/StopPoint/ServiceTypes',
  tags: ['StopPoint'],
  summary: 'Gets the service types for a given stoppoint',
  operationId: 'StopPoint_GetServiceTypes',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The Naptan id of the stop',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      lineIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The lines which contain the given Naptan id (all lines relevant to the given stoppoint if empty)',
            explode: true,
            in: 'query',
            name: 'lineIds',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      modes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The modes which the lines are relevant to (all if empty)',
            explode: true,
            in: 'query',
            name: 'modes',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesLineServiceTypeSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesLineServiceTypeSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesLineServiceTypeSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesLineServiceTypeSchema) },
      },
    },
  },
})

export const getStopPointSmsIdRoute = createRoute({
  method: 'get',
  path: '/StopPoint/Sms/{id}',
  tags: ['StopPoint'],
  summary: 'Gets a StopPoint for a given sms code.',
  operationId: 'StopPoint_GetBySms',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'A 5-digit Countdown Bus Stop Code e.g. 73241, 50435, 56334.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      output: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to "web", a 302 redirect to relevant website bus stop page is returned. Valid values are : web. All other values are ignored.',
            in: 'query',
            name: 'output',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'application/xml': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
        'text/xml': { schema: SystemObjectSchema },
      },
    },
  },
})

export const getStopPointTypeTypesRoute = createRoute({
  method: 'get',
  path: '/StopPoint/Type/{types}',
  tags: ['StopPoint'],
  summary: 'Gets all stop points of a given type',
  operationId: 'StopPoint_GetByType',
  request: {
    params: z.object({
      types: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description:
              'A comma-separated list of the types to return. Max. approx. 12 types. \r\n            A list of valid stop types can be obtained from the StopPoint/meta/stoptypes endpoint.',
            in: 'path',
            name: 'types',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
      },
    },
  },
})

export const getStopPointTypeTypesPagePageRoute = createRoute({
  method: 'get',
  path: '/StopPoint/Type/{types}/page/{page}',
  tags: ['StopPoint'],
  summary: 'Gets all the stop points of given type(s) with a page number',
  operationId: 'StopPoint_GetByTypeWithPagination',
  request: {
    params: z.object({
      types: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'types',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'page',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
      },
    },
  },
})

export const getStopPointIdsRoute = createRoute({
  method: 'get',
  path: '/StopPoint/{ids}',
  tags: ['StopPoint'],
  summary: 'Gets a list of StopPoints corresponding to the given list of stop ids.',
  operationId: 'StopPoint_Get',
  request: {
    params: z.object({
      ids: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description:
              'A comma-separated list of stop point ids (station naptan code e.g. 940GZZLUASL). Max. approx. 20 ids.\r\n            You can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name.',
            in: 'path',
            name: 'ids',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      includeCrowdingData: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Include the crowding data (static). To Filter further use: /StopPoint/{ids}/Crowding/{line}',
            in: 'query',
            name: 'includeCrowdingData',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
      },
    },
  },
})

export const getStopPointIdsDisruptionRoute = createRoute({
  method: 'get',
  path: '/StopPoint/{ids}/Disruption',
  tags: ['StopPoint'],
  summary:
    'Gets all disruptions for the specified StopPointId, plus disruptions for any child Naptan records it may have.',
  operationId: 'StopPoint_Disruption',
  request: {
    params: z.object({
      ids: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description:
              'A comma-seperated list of stop point ids. Max. approx. 20 ids.\r\n            You can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name.',
            in: 'path',
            name: 'ids',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      getFamily: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify true to return disruptions for entire family, or false to return disruptions for just this stop point. Defaults to false.',
            in: 'query',
            name: 'getFamily',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      includeRouteBlockedStops: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'includeRouteBlockedStops',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      flattenResponse: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify true to associate all disruptions with parent stop point. (Only applicable when getFamily is true).',
            in: 'query',
            name: 'flattenResponse',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesDisruptedPointSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesDisruptedPointSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesDisruptedPointSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesDisruptedPointSchema) },
      },
    },
  },
})

export const getStopPointIdArrivalDeparturesRoute = createRoute({
  method: 'get',
  path: '/StopPoint/{id}/ArrivalDepartures',
  tags: ['StopPoint'],
  summary:
    'Gets the list of arrival and departure predictions for the given stop point id (overground, Elizabeth line and thameslink only)',
  operationId: 'StopPoint_ArrivalDepartures',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'A StopPoint id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      lineIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'A comma-separated list of line ids e.g. elizabeth, london-overground, thameslink',
            explode: true,
            in: 'query',
            name: 'lineIds',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesArrivalDepartureSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesArrivalDepartureSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesArrivalDepartureSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesArrivalDepartureSchema) },
      },
    },
  },
})

export const getStopPointIdArrivalsRoute = createRoute({
  method: 'get',
  path: '/StopPoint/{id}/Arrivals',
  tags: ['StopPoint'],
  summary: 'Gets the list of arrival predictions for the given stop point id',
  operationId: 'StopPoint_Arrivals',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'A StopPoint id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesPredictionSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesPredictionSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesPredictionSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesPredictionSchema) },
      },
    },
  },
})

export const getStopPointIdCanReachOnLineLineIdRoute = createRoute({
  method: 'get',
  path: '/StopPoint/{id}/CanReachOnLine/{lineId}',
  tags: ['StopPoint'],
  summary: 'Gets Stopoints that are reachable from a station/line combination.',
  operationId: 'StopPoint_ReachableFrom',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'The id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name) of the stop point to filter by',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      lineId: z
        .string()
        .openapi({
          param: {
            description: 'Line id of the line to filter by (e.g. victoria)',
            in: 'path',
            name: 'lineId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      serviceTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['Regular', 'Night'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma-separated list of service types to filter on. If not specified. Supported values: Regular, Night. Defaulted to 'Regular' if not specified",
            explode: true,
            in: 'query',
            name: 'serviceTypes',
            required: false,
            schema: { items: { enum: ['Regular', 'Night'], type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
      },
    },
  },
})

export const getStopPointIdCrowdingLineRoute = createRoute({
  method: 'get',
  path: '/StopPoint/{id}/Crowding/{line}',
  tags: ['StopPoint'],
  summary:
    'Gets all the Crowding data (static) for the StopPointId, plus crowding data for a given line and optionally a particular direction.',
  operationId: 'StopPoint_Crowding',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The Naptan id of the stop',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      line: z
        .string()
        .openapi({
          param: {
            description: 'A particular line e.g. victoria, circle, northern etc.',
            in: 'path',
            name: 'line',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      direction: z
        .enum(['inbound', 'outbound', 'all'])
        .openapi({
          param: {
            description: 'The direction of travel. Can be inbound or outbound.',
            in: 'query',
            name: 'direction',
            required: true,
            schema: { enum: ['inbound', 'outbound', 'all'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesStopPointSchema) },
      },
    },
  },
})

export const getStopPointIdDirectionToToStopPointIdRoute = createRoute({
  method: 'get',
  path: '/StopPoint/{id}/DirectionTo/{toStopPointId}',
  tags: ['StopPoint'],
  summary:
    'Returns the canonical direction, "inbound" or "outbound", for a given pair of stop point Ids in the direction from -&gt; to.',
  operationId: 'StopPoint_Direction',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'Originating stop id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      toStopPointId: z
        .string()
        .openapi({
          param: {
            description:
              'Destination stop id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)',
            in: 'path',
            name: 'toStopPointId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      lineId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional line id filter e.g. victoria',
            in: 'query',
            name: 'lineId',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/xml': { schema: z.string() },
      },
    },
  },
})

export const getStopPointIdRouteRoute = createRoute({
  method: 'get',
  path: '/StopPoint/{id}/Route',
  tags: ['StopPoint'],
  summary: 'Returns the route sections for all the lines that service the given stop point ids',
  operationId: 'StopPoint_Route',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'A stop point id (station naptan codes e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      serviceTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['Regular', 'Night'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "A comma-separated list of service types to filter on. If not specified. Supported values: Regular, Night. Defaulted to 'Regular' if not specified",
            explode: true,
            in: 'query',
            name: 'serviceTypes',
            required: false,
            schema: { items: { enum: ['Regular', 'Night'], type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(TflApiPresentationEntitiesStopPointRouteSectionSchema),
        },
        'application/xml': {
          schema: z.array(TflApiPresentationEntitiesStopPointRouteSectionSchema),
        },
        'text/json': { schema: z.array(TflApiPresentationEntitiesStopPointRouteSectionSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesStopPointRouteSectionSchema) },
      },
    },
  },
})

export const getStopPointIdPlaceTypesRoute = createRoute({
  method: 'get',
  path: '/StopPoint/{id}/placeTypes',
  tags: ['StopPoint'],
  summary: 'Get a list of places corresponding to a given id and place types.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'A naptan id for a stop point (station naptan code e.g. 940GZZLUASL).',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      placeTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'A comcomma-separated value representing the place types.',
            explode: true,
            in: 'query',
            name: 'placeTypes',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
      },
    },
  },
})

export const getStopPointStopPointIdCarParksRoute = createRoute({
  method: 'get',
  path: '/StopPoint/{stopPointId}/CarParks',
  tags: ['StopPoint'],
  summary: 'Get car parks corresponding to the given stop point id.',
  operationId: 'StopPoint_GetCarParksById',
  request: {
    params: z.object({
      stopPointId: z
        .string()
        .openapi({
          param: {
            description: 'stopPointId is required to get the car parks.',
            in: 'path',
            name: 'stopPointId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
      },
    },
  },
})

export const getStopPointStopPointIdTaxiRanksRoute = createRoute({
  method: 'get',
  path: '/StopPoint/{stopPointId}/TaxiRanks',
  tags: ['StopPoint'],
  summary: 'Gets a list of taxi ranks corresponding to the given stop point id.',
  operationId: 'StopPoint_GetTaxiRanksByIds',
  request: {
    params: z.object({
      stopPointId: z
        .string()
        .openapi({
          param: {
            description: 'stopPointId is required to get the taxi ranks.',
            in: 'path',
            name: 'stopPointId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesPlaceSchema) },
      },
    },
  },
})

export const getTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightRoute =
  createRoute({
    method: 'get',
    path: '/TravelTimes/compareOverlay/{z}/mapcenter/{mapCenterLat}/{mapCenterLon}/pinlocation/{pinLat}/{pinLon}/dimensions/{width}/{height}',
    tags: ['TravelTime'],
    summary: 'Gets the TravelTime overlay.',
    operationId: 'TravelTime_GetCompareOverlay',
    request: {
      params: z.object({
        z: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'The zoom level.',
              in: 'path',
              name: 'z',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        pinLat: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.float64(),
          )
          .openapi({
            param: {
              description: 'The latitude of the pin.',
              in: 'path',
              name: 'pinLat',
              required: true,
              schema: { format: 'double', type: 'number' },
            },
          }),
        pinLon: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.float64(),
          )
          .openapi({
            param: {
              description: 'The longitude of the pin.',
              in: 'path',
              name: 'pinLon',
              required: true,
              schema: { format: 'double', type: 'number' },
            },
          }),
        mapCenterLat: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.float64(),
          )
          .openapi({
            param: {
              description: 'The map center latitude.',
              in: 'path',
              name: 'mapCenterLat',
              required: true,
              schema: { format: 'double', type: 'number' },
            },
          }),
        mapCenterLon: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.float64(),
          )
          .openapi({
            param: {
              description: 'The map center longitude.',
              in: 'path',
              name: 'mapCenterLon',
              required: true,
              schema: { format: 'double', type: 'number' },
            },
          }),
        width: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'The width of the requested overlay.',
              in: 'path',
              name: 'width',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        height: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'The height of the requested overlay.',
              in: 'path',
              name: 'height',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
      }),
      query: z.object({
        scenarioTitle: z
          .string()
          .openapi({
            param: {
              description: 'The title of the scenario.',
              in: 'query',
              name: 'scenarioTitle',
              required: true,
              schema: { type: 'string' },
            },
          }),
        timeOfDayId: z
          .string()
          .openapi({
            param: {
              description: 'The id for the time of day (AM/INTER/PM)',
              in: 'query',
              name: 'timeOfDayId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        modeId: z
          .string()
          .openapi({
            param: {
              description: 'The id of the mode.',
              in: 'query',
              name: 'modeId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        direction: z
          .enum(['Average', 'From', 'To'])
          .openapi({
            param: {
              description: 'The direction of travel.',
              in: 'query',
              name: 'direction',
              required: true,
              schema: { enum: ['Average', 'From', 'To'], type: 'string' },
            },
          }),
        travelTimeInterval: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'The total minutes between the travel time bands',
              in: 'query',
              name: 'travelTimeInterval',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        compareType: z
          .string()
          .openapi({
            param: { in: 'query', name: 'compareType', required: true, schema: { type: 'string' } },
          }),
        compareValue: z
          .string()
          .openapi({
            param: {
              in: 'query',
              name: 'compareValue',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': { schema: SystemObjectSchema },
          'application/xml': { schema: SystemObjectSchema },
          'text/json': { schema: SystemObjectSchema },
          'text/xml': { schema: SystemObjectSchema },
        },
      },
    },
  })

export const getTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightRoute =
  createRoute({
    method: 'get',
    path: '/TravelTimes/overlay/{z}/mapcenter/{mapCenterLat}/{mapCenterLon}/pinlocation/{pinLat}/{pinLon}/dimensions/{width}/{height}',
    tags: ['TravelTime'],
    summary: 'Gets the TravelTime overlay.',
    operationId: 'TravelTime_GetOverlay',
    request: {
      params: z.object({
        z: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'The zoom level.',
              in: 'path',
              name: 'z',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        pinLat: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.float64(),
          )
          .openapi({
            param: {
              description: 'The latitude of the pin.',
              in: 'path',
              name: 'pinLat',
              required: true,
              schema: { format: 'double', type: 'number' },
            },
          }),
        pinLon: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.float64(),
          )
          .openapi({
            param: {
              description: 'The longitude of the pin.',
              in: 'path',
              name: 'pinLon',
              required: true,
              schema: { format: 'double', type: 'number' },
            },
          }),
        mapCenterLat: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.float64(),
          )
          .openapi({
            param: {
              description: 'The map center latitude.',
              in: 'path',
              name: 'mapCenterLat',
              required: true,
              schema: { format: 'double', type: 'number' },
            },
          }),
        mapCenterLon: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.float64(),
          )
          .openapi({
            param: {
              description: 'The map center longitude.',
              in: 'path',
              name: 'mapCenterLon',
              required: true,
              schema: { format: 'double', type: 'number' },
            },
          }),
        width: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'The width of the requested overlay.',
              in: 'path',
              name: 'width',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        height: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'The height of the requested overlay.',
              in: 'path',
              name: 'height',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
      }),
      query: z.object({
        scenarioTitle: z
          .string()
          .openapi({
            param: {
              description: 'The title of the scenario.',
              in: 'query',
              name: 'scenarioTitle',
              required: true,
              schema: { type: 'string' },
            },
          }),
        timeOfDayId: z
          .string()
          .openapi({
            param: {
              description: 'The id for the time of day (AM/INTER/PM)',
              in: 'query',
              name: 'timeOfDayId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        modeId: z
          .string()
          .openapi({
            param: {
              description: 'The id of the mode.',
              in: 'query',
              name: 'modeId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        direction: z
          .enum(['Average', 'From', 'To'])
          .openapi({
            param: {
              description: 'The direction of travel.',
              in: 'query',
              name: 'direction',
              required: true,
              schema: { enum: ['Average', 'From', 'To'], type: 'string' },
            },
          }),
        travelTimeInterval: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'The total minutes between the travel time bands',
              in: 'query',
              name: 'travelTimeInterval',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': { schema: SystemObjectSchema },
          'application/xml': { schema: SystemObjectSchema },
          'text/json': { schema: SystemObjectSchema },
          'text/xml': { schema: SystemObjectSchema },
        },
      },
    },
  })

export const getVehicleIdsArrivalsRoute = createRoute({
  method: 'get',
  path: '/Vehicle/{ids}/Arrivals',
  tags: ['Vehicle'],
  summary: "Gets the predictions for a given list of vehicle Id's.",
  operationId: 'Vehicle_Get',
  request: {
    params: z.object({
      ids: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description:
              'A comma-separated list of vehicle ids e.g. LX58CFV,LX11AZB,LX58CFE. Max approx. 25 ids.',
            in: 'path',
            name: 'ids',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(TflApiPresentationEntitiesPredictionSchema) },
        'application/xml': { schema: z.array(TflApiPresentationEntitiesPredictionSchema) },
        'text/json': { schema: z.array(TflApiPresentationEntitiesPredictionSchema) },
        'text/xml': { schema: z.array(TflApiPresentationEntitiesPredictionSchema) },
      },
    },
  },
})
