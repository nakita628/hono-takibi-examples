type TflApiPresentationEntitiesAccidentStatsCasualty = {
  age?: number | undefined
  ageBand?: string | undefined
  class?: string | undefined
  mode?: string | undefined
  severity?: string | undefined
}
type TflApiPresentationEntitiesAccidentStatsVehicle = { type?: string | undefined }
type TflApiPresentationEntitiesAccidentStatsAccidentDetail = {
  borough?: string | undefined
  casualties?: TflApiPresentationEntitiesAccidentStatsCasualty[] | undefined
  date?: string | undefined
  id?: number | undefined
  lat?: number | undefined
  location?: string | undefined
  lon?: number | undefined
  severity?: string | undefined
  vehicles?: TflApiPresentationEntitiesAccidentStatsVehicle[] | undefined
}
type SystemObject = { [x: string]: unknown }
type TflApiPresentationEntitiesAdditionalProperties = {
  category?: string | undefined
  key?: string | undefined
  modified?: string | undefined
  sourceSystemKey?: string | undefined
  value?: string | undefined
}
type TflApiPresentationEntitiesPlace = {
  additionalProperties?: TflApiPresentationEntitiesAdditionalProperties[] | undefined
  children?: TflApiPresentationEntitiesPlace[] | undefined
  childrenUrls?: string[] | undefined
  commonName?: string | undefined
  distance?: number | undefined
  id?: string | undefined
  lat?: number | undefined
  lon?: number | undefined
  placeType?: string | undefined
  url?: string | undefined
}
type TflApiPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationData = {
  destinationId?: string | undefined
  destinationNumberOfBikes?: number | undefined
  destinationNumberOfEmptySlots?: number | undefined
  originId?: string | undefined
  originNumberOfBikes?: number | undefined
  originNumberOfEmptySlots?: number | undefined
}
type TflApiPresentationEntitiesJourneyPlannerJourneyVector = {
  from?: string | undefined
  to?: string | undefined
  uri?: string | undefined
  via?: string | undefined
}
type TflApiPresentationEntitiesJourneyPlannerFareCaveat = {
  text?: string | undefined
  type?: string | undefined
}
type TflApiPresentationEntitiesJourneyPlannerFareTapDetails = {
  busRouteId?: string | undefined
  hostDeviceType?: string | undefined
  modeType?: string | undefined
  nationalLocationCode?: number | undefined
  tapTimestamp?: string | undefined
  validationType?: string | undefined
}
type TflApiPresentationEntitiesJourneyPlannerFareTap = {
  atcoCode?: string | undefined
  tapDetails?: TflApiPresentationEntitiesJourneyPlannerFareTapDetails | undefined
}
type TflApiPresentationEntitiesJourneyPlannerFare = {
  chargeLevel?: string | undefined
  chargeProfileName?: string | undefined
  cost?: number | undefined
  highZone?: number | undefined
  isHopperFare?: boolean | undefined
  lowZone?: number | undefined
  offPeak?: number | undefined
  peak?: number | undefined
  taps?: TflApiPresentationEntitiesJourneyPlannerFareTap[] | undefined
}
type TflApiPresentationEntitiesJourneyPlannerJourneyFare = {
  caveats?: TflApiPresentationEntitiesJourneyPlannerFareCaveat[] | undefined
  fares?: TflApiPresentationEntitiesJourneyPlannerFare[] | undefined
  totalCost?: number | undefined
}
type TflApiPresentationEntitiesPoint = { lat?: number | undefined; lon?: number | undefined }
type TflApiPresentationEntitiesLineGroup = {
  lineIdentifier?: string[] | undefined
  naptanIdReference?: string | undefined
  stationAtcoCode?: string | undefined
}
type TflApiPresentationEntitiesLineModeGroup = {
  lineIdentifier?: string[] | undefined
  modeName?: string | undefined
}
type TflApiPresentationEntitiesPassengerFlow = {
  timeSlice?: string | undefined
  value?: number | undefined
}
type TflApiPresentationEntitiesTrainLoading = {
  direction?: string | undefined
  line?: string | undefined
  lineDirection?: string | undefined
  naptanTo?: string | undefined
  platformDirection?: string | undefined
  timeSlice?: string | undefined
  value?: number | undefined
}
type TflApiPresentationEntitiesCrowding = {
  passengerFlows?: TflApiPresentationEntitiesPassengerFlow[] | undefined
  trainLoadings?: TflApiPresentationEntitiesTrainLoading[] | undefined
}
type TflApiPresentationEntitiesIdentifier = {
  crowding?: TflApiPresentationEntitiesCrowding | undefined
  fullName?: string | undefined
  id?: string | undefined
  motType?: string | undefined
  name?: string | undefined
  network?: string | undefined
  routeType?:
    | 'Unknown'
    | 'All'
    | 'Cycle Superhighways'
    | 'Quietways'
    | 'Cycleways'
    | 'Mini-Hollands'
    | 'Central London Grid'
    | 'Streetspace Route'
    | undefined
  status?:
    | 'Unknown'
    | 'All'
    | 'Open'
    | 'In Progress'
    | 'Planned'
    | 'Planned - Subject to feasibility and consultation.'
    | 'Not Open'
    | undefined
  type?: string | undefined
  uri?: string | undefined
}
type TflApiPresentationEntitiesStopPoint = {
  accessibilitySummary?: string | undefined
  additionalProperties?: TflApiPresentationEntitiesAdditionalProperties[] | undefined
  children?: TflApiPresentationEntitiesPlace[] | undefined
  childrenUrls?: string[] | undefined
  commonName?: string | undefined
  distance?: number | undefined
  fullName?: string | undefined
  hubNaptanCode?: string | undefined
  icsCode?: string | undefined
  id?: string | undefined
  indicator?: string | undefined
  individualStopId?: string | undefined
  lat?: number | undefined
  lineGroup?: TflApiPresentationEntitiesLineGroup[] | undefined
  lineModeGroups?: TflApiPresentationEntitiesLineModeGroup[] | undefined
  lines?: TflApiPresentationEntitiesIdentifier[] | undefined
  lon?: number | undefined
  modes?: string[] | undefined
  naptanId?: string | undefined
  naptanMode?: string | undefined
  placeType?: string | undefined
  platformName?: string | undefined
  smsCode?: string | undefined
  stationNaptan?: string | undefined
  status?: boolean | undefined
  stopLetter?: string | undefined
  stopType?: string | undefined
  url?: string | undefined
}
type TflApiPresentationEntitiesRouteSectionNaptanEntrySequence = {
  ordinal?: number | undefined
  stopPoint?: TflApiPresentationEntitiesStopPoint | undefined
}
type TflApiPresentationEntitiesDisruptedRoute = {
  destinationName?: string | undefined
  direction?: string | undefined
  id?: string | undefined
  isEntireRouteSection?: boolean | undefined
  lineId?: string | undefined
  lineString?: string | undefined
  name?: string | undefined
  originationName?: string | undefined
  routeCode?: string | undefined
  routeSectionNaptanEntrySequence?:
    | TflApiPresentationEntitiesRouteSectionNaptanEntrySequence[]
    | undefined
  validFrom?: string | undefined
  validTo?: string | undefined
  via?: TflApiPresentationEntitiesRouteSectionNaptanEntrySequence | undefined
}
type TflApiPresentationEntitiesDisruption = {
  additionalInfo?: string | undefined
  affectedRoutes?: TflApiPresentationEntitiesDisruptedRoute[] | undefined
  affectedStops?: TflApiPresentationEntitiesStopPoint[] | undefined
  category?:
    | 'Undefined'
    | 'RealTime'
    | 'PlannedWork'
    | 'Information'
    | 'Event'
    | 'Crowding'
    | 'StatusAlert'
    | undefined
  categoryDescription?: string | undefined
  closureText?: string | undefined
  created?: string | undefined
  description?: string | undefined
  lastUpdate?: string | undefined
  summary?: string | undefined
  type?: string | undefined
}
type TflApiPresentationEntitiesPathAttribute = {
  name?: string | undefined
  value?: string | undefined
}
type TflApiPresentationEntitiesInstructionStep = {
  cumulativeDistance?: number | undefined
  cumulativeTravelTime?: number | undefined
  description?: string | undefined
  descriptionHeading?: string | undefined
  distance?: number | undefined
  latitude?: number | undefined
  longitude?: number | undefined
  pathAttribute?: TflApiPresentationEntitiesPathAttribute | undefined
  skyDirection?: number | undefined
  skyDirectionDescription?:
    | 'North'
    | 'NorthEast'
    | 'East'
    | 'SouthEast'
    | 'South'
    | 'SouthWest'
    | 'West'
    | 'NorthWest'
    | undefined
  streetName?: string | undefined
  trackType?:
    | 'CycleSuperHighway'
    | 'CanalTowpath'
    | 'QuietRoad'
    | 'ProvisionForCyclists'
    | 'BusyRoads'
    | 'None'
    | 'PushBike'
    | 'Quietway'
    | undefined
  turnDirection?: string | undefined
}
type TflApiPresentationEntitiesInstruction = {
  detailed?: string | undefined
  steps?: TflApiPresentationEntitiesInstructionStep[] | undefined
  summary?: string | undefined
}
type TflApiPresentationEntitiesJourneyPlannerObstacle = {
  incline?: string | undefined
  position?: string | undefined
  stopId?: number | undefined
  type?: string | undefined
}
type TflApiCommonJourneyPlannerJpElevation = {
  distance?: number | undefined
  endLat?: number | undefined
  endLon?: number | undefined
  gradient?: number | undefined
  heightFromPreviousPoint?: number | undefined
  startLat?: number | undefined
  startLon?: number | undefined
}
type TflApiPresentationEntitiesJourneyPlannerPath = {
  elevation?: TflApiCommonJourneyPlannerJpElevation[] | undefined
  lineString?: string | undefined
  stopPoints?: TflApiPresentationEntitiesIdentifier[] | undefined
}
type TflApiPresentationEntitiesJourneyPlannerPlannedWork = {
  createdDateTime?: string | undefined
  description?: string | undefined
  id?: string | undefined
  lastUpdateDateTime?: string | undefined
}
type TflApiPresentationEntitiesJourneyPlannerRouteOption = {
  direction?: string | undefined
  directions?: string[] | undefined
  id?: string | undefined
  lineIdentifier?: TflApiPresentationEntitiesIdentifier | undefined
  name?: string | undefined
}
type TflApiPresentationEntitiesJourneyPlannerLeg = {
  arrivalPoint?: TflApiPresentationEntitiesPoint | undefined
  arrivalTime?: string | undefined
  departurePoint?: TflApiPresentationEntitiesPoint | undefined
  departureTime?: string | undefined
  disruptions?: TflApiPresentationEntitiesDisruption[] | undefined
  distance?: number | undefined
  duration?: number | undefined
  hasFixedLocations?: boolean | undefined
  instruction?: TflApiPresentationEntitiesInstruction | undefined
  interChangeDuration?: string | undefined
  interChangePosition?: string | undefined
  isDisrupted?: boolean | undefined
  mode?: TflApiPresentationEntitiesIdentifier | undefined
  obstacles?: TflApiPresentationEntitiesJourneyPlannerObstacle[] | undefined
  path?: TflApiPresentationEntitiesJourneyPlannerPath | undefined
  plannedWorks?: TflApiPresentationEntitiesJourneyPlannerPlannedWork[] | undefined
  routeOptions?: TflApiPresentationEntitiesJourneyPlannerRouteOption[] | undefined
  scheduledArrivalTime?: string | undefined
  scheduledDepartureTime?: string | undefined
  speed?: string | undefined
}
type TflApiPresentationEntitiesJourneyPlannerJourney = {
  arrivalDateTime?: string | undefined
  duration?: number | undefined
  fare?: TflApiPresentationEntitiesJourneyPlannerJourneyFare | undefined
  legs?: TflApiPresentationEntitiesJourneyPlannerLeg[] | undefined
  startDateTime?: string | undefined
}
type TflApiPresentationEntitiesValidityPeriod = {
  fromDate?: string | undefined
  isNow?: boolean | undefined
  toDate?: string | undefined
}
type TflApiPresentationEntitiesLineStatus = {
  created?: string | undefined
  disruption?: TflApiPresentationEntitiesDisruption | undefined
  id?: number | undefined
  lineId?: string | undefined
  modified?: string | undefined
  reason?: string | undefined
  statusSeverity?: number | undefined
  statusSeverityDescription?: string | undefined
  validityPeriods?: TflApiPresentationEntitiesValidityPeriod[] | undefined
}
type TflApiPresentationEntitiesMatchedRoute = {
  destination?: string | undefined
  destinationName?: string | undefined
  direction?: string | undefined
  name?: string | undefined
  originationName?: string | undefined
  originator?: string | undefined
  routeCode?: string | undefined
  serviceType?: string | undefined
  validFrom?: string | undefined
  validTo?: string | undefined
}
type TflApiPresentationEntitiesLineServiceTypeInfo = {
  name?: string | undefined
  uri?: string | undefined
}
type TflApiPresentationEntitiesLine = {
  created?: string | undefined
  crowding?: TflApiPresentationEntitiesCrowding | undefined
  disruptions?: TflApiPresentationEntitiesDisruption[] | undefined
  id?: string | undefined
  lineStatuses?: TflApiPresentationEntitiesLineStatus[] | undefined
  modeName?: string | undefined
  modified?: string | undefined
  name?: string | undefined
  routeSections?: TflApiPresentationEntitiesMatchedRoute[] | undefined
  serviceTypes?: TflApiPresentationEntitiesLineServiceTypeInfo[] | undefined
}
type TflApiPresentationEntitiesJourneyPlannerTimeAdjustment = {
  date?: string | undefined
  time?: string | undefined
  timeIs?: string | undefined
  uri?: string | undefined
}
type TflApiPresentationEntitiesJourneyPlannerTimeAdjustments = {
  earlier?: TflApiPresentationEntitiesJourneyPlannerTimeAdjustment | undefined
  earliest?: TflApiPresentationEntitiesJourneyPlannerTimeAdjustment | undefined
  later?: TflApiPresentationEntitiesJourneyPlannerTimeAdjustment | undefined
  latest?: TflApiPresentationEntitiesJourneyPlannerTimeAdjustment | undefined
}
type TflApiPresentationEntitiesJourneyPlannerSearchCriteria = {
  dateTime?: string | undefined
  dateTimeType?: 'Arriving' | 'Departing' | undefined
  timeAdjustments?: TflApiPresentationEntitiesJourneyPlannerTimeAdjustments | undefined
}
type TflApiPresentationEntitiesJourneyPlannerItineraryResult = {
  cycleHireDockingStationData?:
    | TflApiPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationData
    | undefined
  journeyVector?: TflApiPresentationEntitiesJourneyPlannerJourneyVector | undefined
  journeys?: TflApiPresentationEntitiesJourneyPlannerJourney[] | undefined
  lines?: TflApiPresentationEntitiesLine[] | undefined
  recommendedMaxAgeMinutes?: number | undefined
  searchCriteria?: TflApiPresentationEntitiesJourneyPlannerSearchCriteria | undefined
  stopMessages?: string[] | undefined
}
type TflApiPresentationEntitiesMode = {
  isFarePaying?: boolean | undefined
  isScheduledService?: boolean | undefined
  isTflService?: boolean | undefined
  modeName?: string | undefined
  motType?: string | undefined
  network?: string | undefined
}
type TflApiPresentationEntitiesStatusSeverity = {
  description?: string | undefined
  modeName?: string | undefined
  severityLevel?: number | undefined
}
type TflApiPresentationEntitiesLineRouteSection = {
  destination?: string | undefined
  direction?: string | undefined
  fromStation?: string | undefined
  routeId?: number | undefined
  serviceType?: string | undefined
  toStation?: string | undefined
  vehicleDestinationText?: string | undefined
}
type TflApiPresentationEntitiesMatchedRouteSections = { id?: number | undefined }
type TflApiPresentationEntitiesMatchedStop = {
  accessibilitySummary?: string | undefined
  direction?: string | undefined
  hasDisruption?: boolean | undefined
  icsId?: string | undefined
  id?: string | undefined
  lat?: number | undefined
  lines?: TflApiPresentationEntitiesIdentifier[] | undefined
  lon?: number | undefined
  modes?: string[] | undefined
  name?: string | undefined
  parentId?: string | undefined
  routeId?: number | undefined
  stationId?: string | undefined
  status?: boolean | undefined
  stopLetter?: string | undefined
  stopType?: string | undefined
  topMostParentId?: string | undefined
  towards?: string | undefined
  url?: string | undefined
  zone?: string | undefined
}
type TflApiPresentationEntitiesRouteSearchMatch = {
  id?: string | undefined
  lat?: number | undefined
  lineId?: string | undefined
  lineName?: string | undefined
  lineRouteSection?: TflApiPresentationEntitiesLineRouteSection[] | undefined
  lon?: number | undefined
  matchedRouteSections?: TflApiPresentationEntitiesMatchedRouteSections[] | undefined
  matchedStops?: TflApiPresentationEntitiesMatchedStop[] | undefined
  mode?: string | undefined
  name?: string | undefined
  url?: string | undefined
}
type TflApiPresentationEntitiesRouteSearchResponse = {
  input?: string | undefined
  searchMatches?: TflApiPresentationEntitiesRouteSearchMatch[] | undefined
}
type TflApiPresentationEntitiesPredictionTiming = {
  countdownServerAdjustment?: string | undefined
  insert?: string | undefined
  read?: string | undefined
  received?: string | undefined
  sent?: string | undefined
  source?: string | undefined
}
type TflApiPresentationEntitiesPrediction = {
  bearing?: string | undefined
  currentLocation?: string | undefined
  destinationName?: string | undefined
  destinationNaptanId?: string | undefined
  direction?: string | undefined
  expectedArrival?: string | undefined
  id?: string | undefined
  lineId?: string | undefined
  lineName?: string | undefined
  modeName?: string | undefined
  naptanId?: string | undefined
  operationType?: number | undefined
  platformName?: string | undefined
  stationName?: string | undefined
  timeToLive?: string | undefined
  timeToStation?: number | undefined
  timestamp?: string | undefined
  timing?: TflApiPresentationEntitiesPredictionTiming | undefined
  towards?: string | undefined
  vehicleId?: string | undefined
}
type TflApiPresentationEntitiesOrderedRoute = {
  name?: string | undefined
  naptanIds?: string[] | undefined
  serviceType?: string | undefined
}
type TflApiPresentationEntitiesStopPointSequence = {
  branchId?: number | undefined
  direction?: string | undefined
  lineId?: string | undefined
  lineName?: string | undefined
  nextBranchIds?: number[] | undefined
  prevBranchIds?: number[] | undefined
  serviceType?: 'Regular' | 'Night' | undefined
  stopPoint?: TflApiPresentationEntitiesMatchedStop[] | undefined
}
type TflApiPresentationEntitiesRouteSequence = {
  direction?: string | undefined
  isOutboundOnly?: boolean | undefined
  lineId?: string | undefined
  lineName?: string | undefined
  lineStrings?: string[] | undefined
  mode?: string | undefined
  orderedLineRoutes?: TflApiPresentationEntitiesOrderedRoute[] | undefined
  stations?: TflApiPresentationEntitiesMatchedStop[] | undefined
  stopPointSequences?: TflApiPresentationEntitiesStopPointSequence[] | undefined
}
type TflApiPresentationEntitiesTimetablesDisambiguationOption = {
  description?: string | undefined
  uri?: string | undefined
}
type TflApiPresentationEntitiesTimetablesDisambiguation = {
  disambiguationOptions?: TflApiPresentationEntitiesTimetablesDisambiguationOption[] | undefined
}
type TflApiPresentationEntitiesKnownJourney = {
  hour?: string | undefined
  intervalId?: number | undefined
  minute?: string | undefined
}
type TflApiPresentationEntitiesServiceFrequency = {
  highestFrequency?: number | undefined
  lowestFrequency?: number | undefined
}
type TflApiPresentationEntitiesTwentyFourHourClockTime = {
  hour?: string | undefined
  minute?: string | undefined
}
type TflApiPresentationEntitiesPeriod = {
  frequency?: TflApiPresentationEntitiesServiceFrequency | undefined
  fromTime?: TflApiPresentationEntitiesTwentyFourHourClockTime | undefined
  toTime?: TflApiPresentationEntitiesTwentyFourHourClockTime | undefined
  type?: 'Normal' | 'FrequencyHours' | 'FrequencyMinutes' | 'Unknown' | undefined
}
type TflApiPresentationEntitiesSchedule = {
  firstJourney?: TflApiPresentationEntitiesKnownJourney | undefined
  knownJourneys?: TflApiPresentationEntitiesKnownJourney[] | undefined
  lastJourney?: TflApiPresentationEntitiesKnownJourney | undefined
  name?: string | undefined
  periods?: TflApiPresentationEntitiesPeriod[] | undefined
}
type TflApiPresentationEntitiesInterval = {
  stopId?: string | undefined
  timeToArrival?: number | undefined
}
type TflApiPresentationEntitiesStationInterval = {
  id?: string | undefined
  intervals?: TflApiPresentationEntitiesInterval[] | undefined
}
type TflApiPresentationEntitiesTimetableRoute = {
  schedules?: TflApiPresentationEntitiesSchedule[] | undefined
  stationIntervals?: TflApiPresentationEntitiesStationInterval[] | undefined
}
type TflApiPresentationEntitiesTimetable = {
  departureStopId?: string | undefined
  routes?: TflApiPresentationEntitiesTimetableRoute[] | undefined
}
type TflApiPresentationEntitiesTimetableResponse = {
  direction?: string | undefined
  disambiguation?: TflApiPresentationEntitiesTimetablesDisambiguation | undefined
  lineId?: string | undefined
  lineName?: string | undefined
  pdfUrl?: string | undefined
  stations?: TflApiPresentationEntitiesMatchedStop[] | undefined
  statusErrorMessage?: string | undefined
  stops?: TflApiPresentationEntitiesMatchedStop[] | undefined
  timetable?: TflApiPresentationEntitiesTimetable | undefined
}
type TflApiPresentationEntitiesActiveServiceType = {
  mode?: string | undefined
  serviceType?: string | undefined
}
type TflApiPresentationEntitiesBikePointOccupancy = {
  bikesCount?: number | undefined
  eBikesCount?: number | undefined
  emptyDocks?: number | undefined
  id?: string | undefined
  name?: string | undefined
  standardBikesCount?: number | undefined
  totalDocks?: number | undefined
}
type TflApiPresentationEntitiesBay = {
  bayCount?: number | undefined
  bayType?: string | undefined
  free?: number | undefined
  occupied?: number | undefined
}
type TflApiPresentationEntitiesCarParkOccupancy = {
  bays?: TflApiPresentationEntitiesBay[] | undefined
  carParkDetailsUrl?: string | undefined
  id?: string | undefined
  name?: string | undefined
}
type TflApiPresentationEntitiesChargeConnectorOccupancy = {
  id?: number | undefined
  sourceSystemPlaceId?: string | undefined
  status?: string | undefined
}
type TflApiPresentationEntitiesPlaceCategory = {
  availableKeys?: string[] | undefined
  category?: string | undefined
}
type TflApiPresentationEntitiesRoadCorridor = {
  bounds?: string | undefined
  displayName?: string | undefined
  envelope?: string | undefined
  group?: string | undefined
  id?: string | undefined
  statusAggregationEndDate?: string | undefined
  statusAggregationStartDate?: string | undefined
  statusSeverity?: string | undefined
  statusSeverityDescription?: string | undefined
  url?: string | undefined
}
type SystemDataSpatialDbGeographyWellKnownValue = {
  coordinateSystemId?: number | undefined
  wellKnownBinary?: string | undefined
  wellKnownText?: string | undefined
}
type SystemDataSpatialDbGeography = {
  geography?: SystemDataSpatialDbGeographyWellKnownValue | undefined
}
type TflApiPresentationEntitiesRoadDisruptionSchedule = {
  endTime?: string | undefined
  startTime?: string | undefined
}
type TflApiPresentationEntitiesRoadDisruptionImpactArea = {
  endDate?: string | undefined
  endTime?: string | undefined
  id?: number | undefined
  polygon?: SystemDataSpatialDbGeography | undefined
  roadDisruptionId?: string | undefined
  startDate?: string | undefined
  startTime?: string | undefined
}
type TflApiPresentationEntitiesRoadDisruptionLine = {
  endDate?: string | undefined
  endTime?: string | undefined
  id?: number | undefined
  isDiversion?: boolean | undefined
  multiLineString?: SystemDataSpatialDbGeography | undefined
  roadDisruptionId?: string | undefined
  startDate?: string | undefined
  startTime?: string | undefined
}
type TflApiPresentationEntitiesRoadProject = {
  boroughsBenefited?: string[] | undefined
  constructionEndDate?: string | undefined
  constructionStartDate?: string | undefined
  consultationEndDate?: string | undefined
  consultationPageUrl?: string | undefined
  consultationStartDate?: string | undefined
  contactEmail?: string | undefined
  contactName?: string | undefined
  cycleSuperhighwayId?: string | undefined
  externalPageUrl?: string | undefined
  phase?:
    | 'Unscoped'
    | 'Concept'
    | 'ConsultationEnded'
    | 'Consultation'
    | 'Construction'
    | 'Complete'
    | undefined
  projectDescription?: string | undefined
  projectId?: string | undefined
  projectName?: string | undefined
  projectPageUrl?: string | undefined
  projectSummaryPageUrl?: string | undefined
  schemeName?: string | undefined
}
type TflApiPresentationEntitiesStreetSegment = {
  lineString?: string | undefined
  sourceSystemId?: bigint | undefined
  sourceSystemKey?: string | undefined
  toid?: string | undefined
}
type TflApiPresentationEntitiesStreet = {
  closure?: string | undefined
  directions?: string | undefined
  name?: string | undefined
  segments?: TflApiPresentationEntitiesStreetSegment[] | undefined
  sourceSystemId?: bigint | undefined
  sourceSystemKey?: string | undefined
}
type TflApiPresentationEntitiesRoadDisruption = {
  category?: string | undefined
  comments?: string | undefined
  corridorIds?: string[] | undefined
  currentUpdate?: string | undefined
  currentUpdateDateTime?: string | undefined
  endDateTime?: string | undefined
  geography?: SystemDataSpatialDbGeography | undefined
  geometry?: SystemDataSpatialDbGeography | undefined
  hasClosures?: boolean | undefined
  id?: string | undefined
  isProvisional?: boolean | undefined
  lastModifiedTime?: string | undefined
  levelOfInterest?: string | undefined
  linkText?: string | undefined
  linkUrl?: string | undefined
  location?: string | undefined
  ordinal?: number | undefined
  point?: string | undefined
  publishEndDate?: string | undefined
  publishStartDate?: string | undefined
  recurringSchedules?: TflApiPresentationEntitiesRoadDisruptionSchedule[] | undefined
  roadDisruptionImpactAreas?: TflApiPresentationEntitiesRoadDisruptionImpactArea[] | undefined
  roadDisruptionLines?: TflApiPresentationEntitiesRoadDisruptionLine[] | undefined
  roadProject?: TflApiPresentationEntitiesRoadProject | undefined
  severity?: string | undefined
  startDateTime?: string | undefined
  status?: string | undefined
  streets?: TflApiPresentationEntitiesStreet[] | undefined
  subCategory?: string | undefined
  timeFrame?: string | undefined
  url?: string | undefined
}
type TflApiPresentationEntitiesSearchMatch = {
  id?: string | undefined
  lat?: number | undefined
  lon?: number | undefined
  name?: string | undefined
  url?: string | undefined
}
type TflApiPresentationEntitiesSearchResponse = {
  from?: number | undefined
  matches?: TflApiPresentationEntitiesSearchMatch[] | undefined
  maxScore?: number | undefined
  page?: number | undefined
  pageSize?: number | undefined
  provider?: string | undefined
  query?: string | undefined
  total?: number | undefined
}
type TflApiPresentationEntitiesStopPointsResponse = {
  centrePoint?: number[] | undefined
  page?: number | undefined
  pageSize?: number | undefined
  stopPoints?: TflApiPresentationEntitiesStopPoint[] | undefined
  total?: number | undefined
}
type TflApiPresentationEntitiesStopPointCategory = {
  availableKeys?: string[] | undefined
  category?: string | undefined
}
type TflApiPresentationEntitiesDisruptedPoint = {
  additionalInformation?: string | undefined
  appearance?: string | undefined
  atcoCode?: string | undefined
  commonName?: string | undefined
  description?: string | undefined
  fromDate?: string | undefined
  mode?: string | undefined
  stationAtcoCode?: string | undefined
  toDate?: string | undefined
  type?: string | undefined
}
type TflApiPresentationEntitiesLineSpecificServiceType = {
  serviceType?: TflApiPresentationEntitiesLineServiceTypeInfo | undefined
  stopServesServiceType?: boolean | undefined
}
type TflApiPresentationEntitiesLineServiceType = {
  lineName?: string | undefined
  lineSpecificServiceTypes?: TflApiPresentationEntitiesLineSpecificServiceType[] | undefined
}
type TflApiPresentationEntitiesArrivalDeparture = {
  cause?: string | undefined
  departureStatus?: 'OnTime' | 'Delayed' | 'Cancelled' | 'NotStoppingAtStation' | undefined
  destinationName?: string | undefined
  destinationNaptanId?: string | undefined
  estimatedTimeOfArrival?: string | undefined
  estimatedTimeOfDeparture?: string | undefined
  minutesAndSecondsToArrival?: string | undefined
  minutesAndSecondsToDeparture?: string | undefined
  naptanId?: string | undefined
  platformName?: string | undefined
  scheduledTimeOfArrival?: string | undefined
  scheduledTimeOfDeparture?: string | undefined
  stationName?: string | undefined
  timing?: TflApiPresentationEntitiesPredictionTiming | undefined
}
type TflApiPresentationEntitiesStopPointRouteSection = {
  destinationName?: string | undefined
  direction?: string | undefined
  isActive?: boolean | undefined
  lineId?: string | undefined
  lineString?: string | undefined
  mode?: string | undefined
  naptanId?: string | undefined
  routeSectionName?: string | undefined
  serviceType?: string | undefined
  validFrom?: string | undefined
  validTo?: string | undefined
  vehicleDestinationText?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/AccidentStats/:year': {
      $get:
        | {
            input: { param: { year: number } }
            output: TflApiPresentationEntitiesAccidentStatsAccidentDetail[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { year: number } }
            output: TflApiPresentationEntitiesAccidentStatsAccidentDetail[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { year: number } }
            output: TflApiPresentationEntitiesAccidentStatsAccidentDetail[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { year: number } }
            output: TflApiPresentationEntitiesAccidentStatsAccidentDetail[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/AirQuality': {
      $get:
        | { input: {}; output: SystemObject; outputFormat: 'json'; status: 200 }
        | { input: {}; output: SystemObject; outputFormat: 'text'; status: 200 }
        | { input: {}; output: SystemObject; outputFormat: 'text'; status: 200 }
        | { input: {}; output: SystemObject; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/BikePoint': {
      $get:
        | {
            input: {}
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/BikePoint/Search': {
      $get:
        | {
            input: { query: { query: string } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query: string } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { query: string } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { query: string } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/BikePoint/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: TflApiPresentationEntitiesPlace
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TflApiPresentationEntitiesPlace
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TflApiPresentationEntitiesPlace
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TflApiPresentationEntitiesPlace
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Cabwise/search': {
      $get:
        | {
            input: {
              query: {
                lat: number
                lon: number
                optype?: string | undefined
                wc?: string | undefined
                radius?: number | undefined
                name?: string | undefined
                maxResults?: number | undefined
                legacyFormat?: boolean | undefined
                forceXml?: boolean | undefined
                twentyFourSevenOnly?: boolean | undefined
              }
            }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                lat: number
                lon: number
                optype?: string | undefined
                wc?: string | undefined
                radius?: number | undefined
                name?: string | undefined
                maxResults?: number | undefined
                legacyFormat?: boolean | undefined
                forceXml?: boolean | undefined
                twentyFourSevenOnly?: boolean | undefined
              }
            }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                lat: number
                lon: number
                optype?: string | undefined
                wc?: string | undefined
                radius?: number | undefined
                name?: string | undefined
                maxResults?: number | undefined
                legacyFormat?: boolean | undefined
                forceXml?: boolean | undefined
                twentyFourSevenOnly?: boolean | undefined
              }
            }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                lat: number
                lon: number
                optype?: string | undefined
                wc?: string | undefined
                radius?: number | undefined
                name?: string | undefined
                maxResults?: number | undefined
                legacyFormat?: boolean | undefined
                forceXml?: boolean | undefined
                twentyFourSevenOnly?: boolean | undefined
              }
            }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Journey/JourneyResults/:from/to/:to': {
      $get:
        | {
            input: { param: { from: string; to: string } } & {
              query: {
                via?: string | undefined
                nationalSearch?: boolean | undefined
                date?: string | undefined
                time?: string | undefined
                timeIs?: 'Arriving' | 'Departing' | undefined
                journeyPreference?: 'LeastInterchange' | 'LeastTime' | 'LeastWalking' | undefined
                mode?: string[] | undefined
                accessibilityPreference?:
                  | (
                      | 'NoRequirements'
                      | 'NoSolidStairs'
                      | 'NoEscalators'
                      | 'NoElevators'
                      | 'StepFreeToVehicle'
                      | 'StepFreeToPlatform'
                    )[]
                  | undefined
                fromName?: string | undefined
                toName?: string | undefined
                viaName?: string | undefined
                maxTransferMinutes?: string | undefined
                maxWalkingMinutes?: string | undefined
                walkingSpeed?: 'Slow' | 'Average' | 'Fast' | undefined
                cyclePreference?:
                  | 'None'
                  | 'LeaveAtStation'
                  | 'TakeOnTransport'
                  | 'AllTheWay'
                  | 'CycleHire'
                  | undefined
                adjustment?: string | undefined
                bikeProficiency?: ('Easy' | 'Moderate' | 'Fast')[] | undefined
                alternativeCycle?: boolean | undefined
                alternativeWalking?: boolean | undefined
                applyHtmlMarkup?: boolean | undefined
                useMultiModalCall?: boolean | undefined
                walkingOptimization?: boolean | undefined
                taxiOnlyTrip?: boolean | undefined
                routeBetweenEntrances?: boolean | undefined
                useRealTimeLiveArrivals?: boolean | undefined
                calcOneDirection?: boolean | undefined
              }
            }
            output: TflApiPresentationEntitiesJourneyPlannerItineraryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { from: string; to: string } } & {
              query: {
                via?: string | undefined
                nationalSearch?: boolean | undefined
                date?: string | undefined
                time?: string | undefined
                timeIs?: 'Arriving' | 'Departing' | undefined
                journeyPreference?: 'LeastInterchange' | 'LeastTime' | 'LeastWalking' | undefined
                mode?: string[] | undefined
                accessibilityPreference?:
                  | (
                      | 'NoRequirements'
                      | 'NoSolidStairs'
                      | 'NoEscalators'
                      | 'NoElevators'
                      | 'StepFreeToVehicle'
                      | 'StepFreeToPlatform'
                    )[]
                  | undefined
                fromName?: string | undefined
                toName?: string | undefined
                viaName?: string | undefined
                maxTransferMinutes?: string | undefined
                maxWalkingMinutes?: string | undefined
                walkingSpeed?: 'Slow' | 'Average' | 'Fast' | undefined
                cyclePreference?:
                  | 'None'
                  | 'LeaveAtStation'
                  | 'TakeOnTransport'
                  | 'AllTheWay'
                  | 'CycleHire'
                  | undefined
                adjustment?: string | undefined
                bikeProficiency?: ('Easy' | 'Moderate' | 'Fast')[] | undefined
                alternativeCycle?: boolean | undefined
                alternativeWalking?: boolean | undefined
                applyHtmlMarkup?: boolean | undefined
                useMultiModalCall?: boolean | undefined
                walkingOptimization?: boolean | undefined
                taxiOnlyTrip?: boolean | undefined
                routeBetweenEntrances?: boolean | undefined
                useRealTimeLiveArrivals?: boolean | undefined
                calcOneDirection?: boolean | undefined
              }
            }
            output: TflApiPresentationEntitiesJourneyPlannerItineraryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { from: string; to: string } } & {
              query: {
                via?: string | undefined
                nationalSearch?: boolean | undefined
                date?: string | undefined
                time?: string | undefined
                timeIs?: 'Arriving' | 'Departing' | undefined
                journeyPreference?: 'LeastInterchange' | 'LeastTime' | 'LeastWalking' | undefined
                mode?: string[] | undefined
                accessibilityPreference?:
                  | (
                      | 'NoRequirements'
                      | 'NoSolidStairs'
                      | 'NoEscalators'
                      | 'NoElevators'
                      | 'StepFreeToVehicle'
                      | 'StepFreeToPlatform'
                    )[]
                  | undefined
                fromName?: string | undefined
                toName?: string | undefined
                viaName?: string | undefined
                maxTransferMinutes?: string | undefined
                maxWalkingMinutes?: string | undefined
                walkingSpeed?: 'Slow' | 'Average' | 'Fast' | undefined
                cyclePreference?:
                  | 'None'
                  | 'LeaveAtStation'
                  | 'TakeOnTransport'
                  | 'AllTheWay'
                  | 'CycleHire'
                  | undefined
                adjustment?: string | undefined
                bikeProficiency?: ('Easy' | 'Moderate' | 'Fast')[] | undefined
                alternativeCycle?: boolean | undefined
                alternativeWalking?: boolean | undefined
                applyHtmlMarkup?: boolean | undefined
                useMultiModalCall?: boolean | undefined
                walkingOptimization?: boolean | undefined
                taxiOnlyTrip?: boolean | undefined
                routeBetweenEntrances?: boolean | undefined
                useRealTimeLiveArrivals?: boolean | undefined
                calcOneDirection?: boolean | undefined
              }
            }
            output: TflApiPresentationEntitiesJourneyPlannerItineraryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { from: string; to: string } } & {
              query: {
                via?: string | undefined
                nationalSearch?: boolean | undefined
                date?: string | undefined
                time?: string | undefined
                timeIs?: 'Arriving' | 'Departing' | undefined
                journeyPreference?: 'LeastInterchange' | 'LeastTime' | 'LeastWalking' | undefined
                mode?: string[] | undefined
                accessibilityPreference?:
                  | (
                      | 'NoRequirements'
                      | 'NoSolidStairs'
                      | 'NoEscalators'
                      | 'NoElevators'
                      | 'StepFreeToVehicle'
                      | 'StepFreeToPlatform'
                    )[]
                  | undefined
                fromName?: string | undefined
                toName?: string | undefined
                viaName?: string | undefined
                maxTransferMinutes?: string | undefined
                maxWalkingMinutes?: string | undefined
                walkingSpeed?: 'Slow' | 'Average' | 'Fast' | undefined
                cyclePreference?:
                  | 'None'
                  | 'LeaveAtStation'
                  | 'TakeOnTransport'
                  | 'AllTheWay'
                  | 'CycleHire'
                  | undefined
                adjustment?: string | undefined
                bikeProficiency?: ('Easy' | 'Moderate' | 'Fast')[] | undefined
                alternativeCycle?: boolean | undefined
                alternativeWalking?: boolean | undefined
                applyHtmlMarkup?: boolean | undefined
                useMultiModalCall?: boolean | undefined
                walkingOptimization?: boolean | undefined
                taxiOnlyTrip?: boolean | undefined
                routeBetweenEntrances?: boolean | undefined
                useRealTimeLiveArrivals?: boolean | undefined
                calcOneDirection?: boolean | undefined
              }
            }
            output: TflApiPresentationEntitiesJourneyPlannerItineraryResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Journey/Meta/Modes': {
      $get:
        | { input: {}; output: TflApiPresentationEntitiesMode[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: TflApiPresentationEntitiesMode[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: TflApiPresentationEntitiesMode[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: TflApiPresentationEntitiesMode[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/Line/Meta/DisruptionCategories': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/Line/Meta/Modes': {
      $get:
        | { input: {}; output: TflApiPresentationEntitiesMode[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: TflApiPresentationEntitiesMode[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: TflApiPresentationEntitiesMode[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: TflApiPresentationEntitiesMode[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/Line/Meta/ServiceTypes': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/Line/Meta/Severity': {
      $get:
        | {
            input: {}
            output: TflApiPresentationEntitiesStatusSeverity[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesStatusSeverity[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesStatusSeverity[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesStatusSeverity[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Line/Mode/:modes': {
      $get:
        | {
            input: { param: { modes: string[] } }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { modes: string[] } }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { modes: string[] } }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { modes: string[] } }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Line/Mode/:modes/Disruption': {
      $get:
        | {
            input: { param: { modes: string[] } }
            output: TflApiPresentationEntitiesDisruption[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { modes: string[] } }
            output: TflApiPresentationEntitiesDisruption[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { modes: string[] } }
            output: TflApiPresentationEntitiesDisruption[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { modes: string[] } }
            output: TflApiPresentationEntitiesDisruption[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Line/Mode/:modes/Route': {
      $get:
        | {
            input: { param: { modes: string[] } } & {
              query: { serviceTypes?: ('Regular' | 'Night')[] | undefined }
            }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { modes: string[] } } & {
              query: { serviceTypes?: ('Regular' | 'Night')[] | undefined }
            }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { modes: string[] } } & {
              query: { serviceTypes?: ('Regular' | 'Night')[] | undefined }
            }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { modes: string[] } } & {
              query: { serviceTypes?: ('Regular' | 'Night')[] | undefined }
            }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Line/Mode/:modes/Status': {
      $get:
        | {
            input: { param: { modes: string[] } } & {
              query: { detail?: boolean | undefined; severityLevel?: string | undefined }
            }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { modes: string[] } } & {
              query: { detail?: boolean | undefined; severityLevel?: string | undefined }
            }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { modes: string[] } } & {
              query: { detail?: boolean | undefined; severityLevel?: string | undefined }
            }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { modes: string[] } } & {
              query: { detail?: boolean | undefined; severityLevel?: string | undefined }
            }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Line/Route': {
      $get:
        | {
            input: { query: { serviceTypes?: ('Regular' | 'Night')[] | undefined } }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { serviceTypes?: ('Regular' | 'Night')[] | undefined } }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { serviceTypes?: ('Regular' | 'Night')[] | undefined } }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { serviceTypes?: ('Regular' | 'Night')[] | undefined } }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Line/Search/:query': {
      $get:
        | {
            input: { param: { query: string } } & {
              query: {
                modes?: string[] | undefined
                serviceTypes?: ('Regular' | 'Night')[] | undefined
              }
            }
            output: TflApiPresentationEntitiesRouteSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { query: string } } & {
              query: {
                modes?: string[] | undefined
                serviceTypes?: ('Regular' | 'Night')[] | undefined
              }
            }
            output: TflApiPresentationEntitiesRouteSearchResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { query: string } } & {
              query: {
                modes?: string[] | undefined
                serviceTypes?: ('Regular' | 'Night')[] | undefined
              }
            }
            output: TflApiPresentationEntitiesRouteSearchResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { query: string } } & {
              query: {
                modes?: string[] | undefined
                serviceTypes?: ('Regular' | 'Night')[] | undefined
              }
            }
            output: TflApiPresentationEntitiesRouteSearchResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Line/Status/:severity': {
      $get:
        | {
            input: { param: { severity: number } }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { severity: number } }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { severity: number } }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { severity: number } }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Line/:ids': {
      $get:
        | {
            input: { param: { ids: string[] } }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ids: string[] } }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[] } }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[] } }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Line/:ids/Arrivals/:stopPointId': {
      $get:
        | {
            input: { param: { ids: string[]; stopPointId: string } } & {
              query: {
                direction?: 'inbound' | 'outbound' | 'all' | undefined
                destinationStationId?: string | undefined
              }
            }
            output: TflApiPresentationEntitiesPrediction[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ids: string[]; stopPointId: string } } & {
              query: {
                direction?: 'inbound' | 'outbound' | 'all' | undefined
                destinationStationId?: string | undefined
              }
            }
            output: TflApiPresentationEntitiesPrediction[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[]; stopPointId: string } } & {
              query: {
                direction?: 'inbound' | 'outbound' | 'all' | undefined
                destinationStationId?: string | undefined
              }
            }
            output: TflApiPresentationEntitiesPrediction[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[]; stopPointId: string } } & {
              query: {
                direction?: 'inbound' | 'outbound' | 'all' | undefined
                destinationStationId?: string | undefined
              }
            }
            output: TflApiPresentationEntitiesPrediction[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Line/:ids/Disruption': {
      $get:
        | {
            input: { param: { ids: string[] } }
            output: TflApiPresentationEntitiesDisruption[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ids: string[] } }
            output: TflApiPresentationEntitiesDisruption[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[] } }
            output: TflApiPresentationEntitiesDisruption[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[] } }
            output: TflApiPresentationEntitiesDisruption[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Line/:ids/Route': {
      $get:
        | {
            input: { param: { ids: string[] } } & {
              query: { serviceTypes?: ('Regular' | 'Night')[] | undefined }
            }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ids: string[] } } & {
              query: { serviceTypes?: ('Regular' | 'Night')[] | undefined }
            }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[] } } & {
              query: { serviceTypes?: ('Regular' | 'Night')[] | undefined }
            }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[] } } & {
              query: { serviceTypes?: ('Regular' | 'Night')[] | undefined }
            }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Line/:ids/Status': {
      $get:
        | {
            input: { param: { ids: string[] } } & { query: { detail?: boolean | undefined } }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ids: string[] } } & { query: { detail?: boolean | undefined } }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[] } } & { query: { detail?: boolean | undefined } }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[] } } & { query: { detail?: boolean | undefined } }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Line/:ids/Status/:StartDate/to/:EndDate': {
      $get:
        | {
            input: { param: { ids: string[]; StartDate: string; EndDate: string } } & {
              query: {
                detail?: boolean | undefined
                startDate: string
                endDate: string
                'dateRange.startDate'?: string | undefined
                'dateRange.endDate'?: string | undefined
              }
            }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ids: string[]; StartDate: string; EndDate: string } } & {
              query: {
                detail?: boolean | undefined
                startDate: string
                endDate: string
                'dateRange.startDate'?: string | undefined
                'dateRange.endDate'?: string | undefined
              }
            }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[]; StartDate: string; EndDate: string } } & {
              query: {
                detail?: boolean | undefined
                startDate: string
                endDate: string
                'dateRange.startDate'?: string | undefined
                'dateRange.endDate'?: string | undefined
              }
            }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[]; StartDate: string; EndDate: string } } & {
              query: {
                detail?: boolean | undefined
                startDate: string
                endDate: string
                'dateRange.startDate'?: string | undefined
                'dateRange.endDate'?: string | undefined
              }
            }
            output: TflApiPresentationEntitiesLine[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Line/:id/Route/Sequence/:direction': {
      $get:
        | {
            input: { param: { id: string; direction: 'inbound' | 'outbound' | 'all' } } & {
              query: {
                serviceTypes?: ('Regular' | 'Night')[] | undefined
                excludeCrowding?: boolean | undefined
              }
            }
            output: TflApiPresentationEntitiesRouteSequence
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; direction: 'inbound' | 'outbound' | 'all' } } & {
              query: {
                serviceTypes?: ('Regular' | 'Night')[] | undefined
                excludeCrowding?: boolean | undefined
              }
            }
            output: TflApiPresentationEntitiesRouteSequence
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string; direction: 'inbound' | 'outbound' | 'all' } } & {
              query: {
                serviceTypes?: ('Regular' | 'Night')[] | undefined
                excludeCrowding?: boolean | undefined
              }
            }
            output: TflApiPresentationEntitiesRouteSequence
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string; direction: 'inbound' | 'outbound' | 'all' } } & {
              query: {
                serviceTypes?: ('Regular' | 'Night')[] | undefined
                excludeCrowding?: boolean | undefined
              }
            }
            output: TflApiPresentationEntitiesRouteSequence
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Line/:id/StopPoints': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { tflOperatedNationalRailStationsOnly?: boolean | undefined }
            }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { tflOperatedNationalRailStationsOnly?: boolean | undefined }
            }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { tflOperatedNationalRailStationsOnly?: boolean | undefined }
            }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { tflOperatedNationalRailStationsOnly?: boolean | undefined }
            }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Line/:id/Timetable/:fromStopPointId': {
      $get:
        | {
            input: { param: { fromStopPointId: string; id: string } }
            output: TflApiPresentationEntitiesTimetableResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fromStopPointId: string; id: string } }
            output: TflApiPresentationEntitiesTimetableResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { fromStopPointId: string; id: string } }
            output: TflApiPresentationEntitiesTimetableResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { fromStopPointId: string; id: string } }
            output: TflApiPresentationEntitiesTimetableResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Line/:id/Timetable/:fromStopPointId/to/:toStopPointId': {
      $get:
        | {
            input: { param: { fromStopPointId: string; id: string; toStopPointId: string } }
            output: TflApiPresentationEntitiesTimetableResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fromStopPointId: string; id: string; toStopPointId: string } }
            output: TflApiPresentationEntitiesTimetableResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { fromStopPointId: string; id: string; toStopPointId: string } }
            output: TflApiPresentationEntitiesTimetableResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { fromStopPointId: string; id: string; toStopPointId: string } }
            output: TflApiPresentationEntitiesTimetableResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Mode/ActiveServiceTypes': {
      $get:
        | {
            input: {}
            output: TflApiPresentationEntitiesActiveServiceType[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesActiveServiceType[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesActiveServiceType[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesActiveServiceType[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Mode/:mode/Arrivals': {
      $get:
        | {
            input: { param: { mode: string } } & { query: { count?: number | undefined } }
            output: TflApiPresentationEntitiesPrediction[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { mode: string } } & { query: { count?: number | undefined } }
            output: TflApiPresentationEntitiesPrediction[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { mode: string } } & { query: { count?: number | undefined } }
            output: TflApiPresentationEntitiesPrediction[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { mode: string } } & { query: { count?: number | undefined } }
            output: TflApiPresentationEntitiesPrediction[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Occupancy/BikePoints/:ids': {
      $get:
        | {
            input: { param: { ids: string[] } }
            output: TflApiPresentationEntitiesBikePointOccupancy[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ids: string[] } }
            output: TflApiPresentationEntitiesBikePointOccupancy[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[] } }
            output: TflApiPresentationEntitiesBikePointOccupancy[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[] } }
            output: TflApiPresentationEntitiesBikePointOccupancy[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Occupancy/CarPark': {
      $get:
        | {
            input: {}
            output: TflApiPresentationEntitiesCarParkOccupancy[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesCarParkOccupancy[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesCarParkOccupancy[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesCarParkOccupancy[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Occupancy/CarPark/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: TflApiPresentationEntitiesCarParkOccupancy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TflApiPresentationEntitiesCarParkOccupancy
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TflApiPresentationEntitiesCarParkOccupancy
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TflApiPresentationEntitiesCarParkOccupancy
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Occupancy/ChargeConnector': {
      $get:
        | {
            input: {}
            output: TflApiPresentationEntitiesChargeConnectorOccupancy[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesChargeConnectorOccupancy[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesChargeConnectorOccupancy[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesChargeConnectorOccupancy[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Occupancy/ChargeConnector/:ids': {
      $get:
        | {
            input: { param: { ids: string[] } }
            output: TflApiPresentationEntitiesChargeConnectorOccupancy[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ids: string[] } }
            output: TflApiPresentationEntitiesChargeConnectorOccupancy[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[] } }
            output: TflApiPresentationEntitiesChargeConnectorOccupancy[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[] } }
            output: TflApiPresentationEntitiesChargeConnectorOccupancy[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Place': {
      $get:
        | {
            input: {
              query: {
                radius?: number | undefined
                categories?: string[] | undefined
                includeChildren?: boolean | undefined
                type?: string[] | undefined
                activeOnly?: boolean | undefined
                numberOfPlacesToReturn?: number | undefined
                'placeGeo.swLat'?: number | undefined
                'placeGeo.swLon'?: number | undefined
                'placeGeo.neLat'?: number | undefined
                'placeGeo.neLon'?: number | undefined
                'placeGeo.lat'?: number | undefined
                'placeGeo.lon'?: number | undefined
              }
            }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                radius?: number | undefined
                categories?: string[] | undefined
                includeChildren?: boolean | undefined
                type?: string[] | undefined
                activeOnly?: boolean | undefined
                numberOfPlacesToReturn?: number | undefined
                'placeGeo.swLat'?: number | undefined
                'placeGeo.swLon'?: number | undefined
                'placeGeo.neLat'?: number | undefined
                'placeGeo.neLon'?: number | undefined
                'placeGeo.lat'?: number | undefined
                'placeGeo.lon'?: number | undefined
              }
            }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                radius?: number | undefined
                categories?: string[] | undefined
                includeChildren?: boolean | undefined
                type?: string[] | undefined
                activeOnly?: boolean | undefined
                numberOfPlacesToReturn?: number | undefined
                'placeGeo.swLat'?: number | undefined
                'placeGeo.swLon'?: number | undefined
                'placeGeo.neLat'?: number | undefined
                'placeGeo.neLon'?: number | undefined
                'placeGeo.lat'?: number | undefined
                'placeGeo.lon'?: number | undefined
              }
            }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                radius?: number | undefined
                categories?: string[] | undefined
                includeChildren?: boolean | undefined
                type?: string[] | undefined
                activeOnly?: boolean | undefined
                numberOfPlacesToReturn?: number | undefined
                'placeGeo.swLat'?: number | undefined
                'placeGeo.swLon'?: number | undefined
                'placeGeo.neLat'?: number | undefined
                'placeGeo.neLon'?: number | undefined
                'placeGeo.lat'?: number | undefined
                'placeGeo.lon'?: number | undefined
              }
            }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Place/Address/Streets/:Postcode': {
      $get:
        | {
            input: { param: { Postcode: string } } & {
              query: { postcode: string; 'postcodeInput.postcode'?: string | undefined }
            }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Postcode: string } } & {
              query: { postcode: string; 'postcodeInput.postcode'?: string | undefined }
            }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { Postcode: string } } & {
              query: { postcode: string; 'postcodeInput.postcode'?: string | undefined }
            }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { Postcode: string } } & {
              query: { postcode: string; 'postcodeInput.postcode'?: string | undefined }
            }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Place/Meta/Categories': {
      $get:
        | {
            input: {}
            output: TflApiPresentationEntitiesPlaceCategory[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesPlaceCategory[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesPlaceCategory[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesPlaceCategory[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Place/Meta/PlaceTypes': {
      $get:
        | {
            input: {}
            output: TflApiPresentationEntitiesPlaceCategory[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesPlaceCategory[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesPlaceCategory[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesPlaceCategory[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Place/Search': {
      $get:
        | {
            input: { query: { name: string; types?: string[] | undefined } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name: string; types?: string[] | undefined } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { name: string; types?: string[] | undefined } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { name: string; types?: string[] | undefined } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Place/Type/:types': {
      $get:
        | {
            input: { param: { types: string[] } } & { query: { activeOnly?: boolean | undefined } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { types: string[] } } & { query: { activeOnly?: boolean | undefined } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { types: string[] } } & { query: { activeOnly?: boolean | undefined } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { types: string[] } } & { query: { activeOnly?: boolean | undefined } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Place/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { includeChildren?: boolean | undefined } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { includeChildren?: boolean | undefined } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { includeChildren?: boolean | undefined } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { includeChildren?: boolean | undefined } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Place/:type/At/:Lat/:Lon': {
      $get:
        | {
            input: { param: { type: string[]; Lat: string; Lon: string } } & {
              query: { lat: string; lon: string; 'location.lat': number; 'location.lon': number }
            }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string[]; Lat: string; Lon: string } } & {
              query: { lat: string; lon: string; 'location.lat': number; 'location.lon': number }
            }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { type: string[]; Lat: string; Lon: string } } & {
              query: { lat: string; lon: string; 'location.lat': number; 'location.lon': number }
            }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { type: string[]; Lat: string; Lon: string } } & {
              query: { lat: string; lon: string; 'location.lat': number; 'location.lon': number }
            }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Place/:type/overlay/:z/:Lat/:Lon/:width/:height': {
      $get:
        | {
            input: {
              param: {
                z: number
                type: string[]
                width: number
                height: number
                Lat: string
                Lon: string
              }
            } & {
              query: { lat: string; lon: string; 'location.lat': number; 'location.lon': number }
            }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                z: number
                type: string[]
                width: number
                height: number
                Lat: string
                Lon: string
              }
            } & {
              query: { lat: string; lon: string; 'location.lat': number; 'location.lon': number }
            }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                z: number
                type: string[]
                width: number
                height: number
                Lat: string
                Lon: string
              }
            } & {
              query: { lat: string; lon: string; 'location.lat': number; 'location.lon': number }
            }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                z: number
                type: string[]
                width: number
                height: number
                Lat: string
                Lon: string
              }
            } & {
              query: { lat: string; lon: string; 'location.lat': number; 'location.lon': number }
            }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Road': {
      $get:
        | {
            input: {}
            output: TflApiPresentationEntitiesRoadCorridor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesRoadCorridor[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesRoadCorridor[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesRoadCorridor[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Road/Meta/Categories': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/Road/Meta/Severities': {
      $get:
        | {
            input: {}
            output: TflApiPresentationEntitiesStatusSeverity[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesStatusSeverity[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesStatusSeverity[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesStatusSeverity[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Road/all/Disruption/:disruptionIds': {
      $get:
        | {
            input: { param: { disruptionIds: string[] } } & {
              query: { stripContent?: boolean | undefined }
            }
            output: TflApiPresentationEntitiesRoadDisruption
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { disruptionIds: string[] } } & {
              query: { stripContent?: boolean | undefined }
            }
            output: TflApiPresentationEntitiesRoadDisruption
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { disruptionIds: string[] } } & {
              query: { stripContent?: boolean | undefined }
            }
            output: TflApiPresentationEntitiesRoadDisruption
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { disruptionIds: string[] } } & {
              query: { stripContent?: boolean | undefined }
            }
            output: TflApiPresentationEntitiesRoadDisruption
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { disruptionIds: string[] } } & {
              query: { stripContent?: boolean | undefined }
            }
            output: TflApiPresentationEntitiesRoadDisruption
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Road/all/Street/Disruption': {
      $get:
        | {
            input: { query: { startDate: string; endDate: string } }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { startDate: string; endDate: string } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { startDate: string; endDate: string } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { startDate: string; endDate: string } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Road/:ids': {
      $get:
        | {
            input: { param: { ids: string[] } }
            output: TflApiPresentationEntitiesRoadCorridor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ids: string[] } }
            output: TflApiPresentationEntitiesRoadCorridor[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[] } }
            output: TflApiPresentationEntitiesRoadCorridor[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[] } }
            output: TflApiPresentationEntitiesRoadCorridor[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Road/:ids/Disruption': {
      $get:
        | {
            input: { param: { ids: string[] } } & {
              query: {
                stripContent?: boolean | undefined
                severities?: string[] | undefined
                categories?: string[] | undefined
                closures?: boolean | undefined
              }
            }
            output: TflApiPresentationEntitiesRoadDisruption[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ids: string[] } } & {
              query: {
                stripContent?: boolean | undefined
                severities?: string[] | undefined
                categories?: string[] | undefined
                closures?: boolean | undefined
              }
            }
            output: TflApiPresentationEntitiesRoadDisruption[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ids: string[] } } & {
              query: {
                stripContent?: boolean | undefined
                severities?: string[] | undefined
                categories?: string[] | undefined
                closures?: boolean | undefined
              }
            }
            output: TflApiPresentationEntitiesRoadDisruption[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[] } } & {
              query: {
                stripContent?: boolean | undefined
                severities?: string[] | undefined
                categories?: string[] | undefined
                closures?: boolean | undefined
              }
            }
            output: TflApiPresentationEntitiesRoadDisruption[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[] } } & {
              query: {
                stripContent?: boolean | undefined
                severities?: string[] | undefined
                categories?: string[] | undefined
                closures?: boolean | undefined
              }
            }
            output: TflApiPresentationEntitiesRoadDisruption[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Road/:ids/Status': {
      $get:
        | {
            input: { param: { ids: string[] } } & {
              query: {
                'dateRangeNullable.startDate'?: string | undefined
                'dateRangeNullable.endDate'?: string | undefined
              }
            }
            output: TflApiPresentationEntitiesRoadCorridor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ids: string[] } } & {
              query: {
                'dateRangeNullable.startDate'?: string | undefined
                'dateRangeNullable.endDate'?: string | undefined
              }
            }
            output: TflApiPresentationEntitiesRoadCorridor[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[] } } & {
              query: {
                'dateRangeNullable.startDate'?: string | undefined
                'dateRangeNullable.endDate'?: string | undefined
              }
            }
            output: TflApiPresentationEntitiesRoadCorridor[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[] } } & {
              query: {
                'dateRangeNullable.startDate'?: string | undefined
                'dateRangeNullable.endDate'?: string | undefined
              }
            }
            output: TflApiPresentationEntitiesRoadCorridor[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Search': {
      $get:
        | {
            input: { query: { query: string } }
            output: TflApiPresentationEntitiesSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query: string } }
            output: TflApiPresentationEntitiesSearchResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { query: string } }
            output: TflApiPresentationEntitiesSearchResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { query: string } }
            output: TflApiPresentationEntitiesSearchResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Search/BusSchedules': {
      $get:
        | {
            input: { query: { query: string } }
            output: TflApiPresentationEntitiesSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query: string } }
            output: TflApiPresentationEntitiesSearchResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { query: string } }
            output: TflApiPresentationEntitiesSearchResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { query: string } }
            output: TflApiPresentationEntitiesSearchResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Search/Meta/Categories': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/Search/Meta/SearchProviders': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/Search/Meta/Sorts': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/StopPoint': {
      $get:
        | {
            input: {
              query: {
                stopTypes: string[]
                radius?: number | undefined
                useStopPointHierarchy?: boolean | undefined
                modes?: string[] | undefined
                categories?: string[] | undefined
                returnLines?: boolean | undefined
                'location.lat': number
                'location.lon': number
              }
            }
            output: TflApiPresentationEntitiesStopPointsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                stopTypes: string[]
                radius?: number | undefined
                useStopPointHierarchy?: boolean | undefined
                modes?: string[] | undefined
                categories?: string[] | undefined
                returnLines?: boolean | undefined
                'location.lat': number
                'location.lon': number
              }
            }
            output: TflApiPresentationEntitiesStopPointsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                stopTypes: string[]
                radius?: number | undefined
                useStopPointHierarchy?: boolean | undefined
                modes?: string[] | undefined
                categories?: string[] | undefined
                returnLines?: boolean | undefined
                'location.lat': number
                'location.lon': number
              }
            }
            output: TflApiPresentationEntitiesStopPointsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                stopTypes: string[]
                radius?: number | undefined
                useStopPointHierarchy?: boolean | undefined
                modes?: string[] | undefined
                categories?: string[] | undefined
                returnLines?: boolean | undefined
                'location.lat': number
                'location.lon': number
              }
            }
            output: TflApiPresentationEntitiesStopPointsResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/StopPoint/Meta/Categories': {
      $get:
        | {
            input: {}
            output: TflApiPresentationEntitiesStopPointCategory[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesStopPointCategory[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesStopPointCategory[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {}
            output: TflApiPresentationEntitiesStopPointCategory[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/StopPoint/Meta/Modes': {
      $get:
        | { input: {}; output: TflApiPresentationEntitiesMode[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: TflApiPresentationEntitiesMode[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: TflApiPresentationEntitiesMode[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: TflApiPresentationEntitiesMode[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/StopPoint/Meta/StopTypes': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/StopPoint/Mode/:modes': {
      $get:
        | {
            input: { param: { modes: string[] } } & { query: { page?: number | undefined } }
            output: TflApiPresentationEntitiesStopPointsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { modes: string[] } } & { query: { page?: number | undefined } }
            output: TflApiPresentationEntitiesStopPointsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { modes: string[] } } & { query: { page?: number | undefined } }
            output: TflApiPresentationEntitiesStopPointsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { modes: string[] } } & { query: { page?: number | undefined } }
            output: TflApiPresentationEntitiesStopPointsResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/StopPoint/Mode/:modes/Disruption': {
      $get:
        | {
            input: { param: { modes: string[] } } & {
              query: { includeRouteBlockedStops?: boolean | undefined }
            }
            output: TflApiPresentationEntitiesDisruptedPoint[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { modes: string[] } } & {
              query: { includeRouteBlockedStops?: boolean | undefined }
            }
            output: TflApiPresentationEntitiesDisruptedPoint[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { modes: string[] } } & {
              query: { includeRouteBlockedStops?: boolean | undefined }
            }
            output: TflApiPresentationEntitiesDisruptedPoint[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { modes: string[] } } & {
              query: { includeRouteBlockedStops?: boolean | undefined }
            }
            output: TflApiPresentationEntitiesDisruptedPoint[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/StopPoint/Search': {
      $get:
        | {
            input: {
              query: {
                query: string
                modes?: string[] | undefined
                faresOnly?: boolean | undefined
                maxResults?: number | undefined
                lines?: string[] | undefined
                includeHubs?: boolean | undefined
                tflOperatedNationalRailStationsOnly?: boolean | undefined
              }
            }
            output: TflApiPresentationEntitiesSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                modes?: string[] | undefined
                faresOnly?: boolean | undefined
                maxResults?: number | undefined
                lines?: string[] | undefined
                includeHubs?: boolean | undefined
                tflOperatedNationalRailStationsOnly?: boolean | undefined
              }
            }
            output: TflApiPresentationEntitiesSearchResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                modes?: string[] | undefined
                faresOnly?: boolean | undefined
                maxResults?: number | undefined
                lines?: string[] | undefined
                includeHubs?: boolean | undefined
                tflOperatedNationalRailStationsOnly?: boolean | undefined
              }
            }
            output: TflApiPresentationEntitiesSearchResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                query: string
                modes?: string[] | undefined
                faresOnly?: boolean | undefined
                maxResults?: number | undefined
                lines?: string[] | undefined
                includeHubs?: boolean | undefined
                tflOperatedNationalRailStationsOnly?: boolean | undefined
              }
            }
            output: TflApiPresentationEntitiesSearchResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/StopPoint/Search/:query': {
      $get:
        | {
            input: { param: { query: string } } & {
              query: {
                modes?: string[] | undefined
                faresOnly?: boolean | undefined
                maxResults?: number | undefined
                lines?: string[] | undefined
                includeHubs?: boolean | undefined
                tflOperatedNationalRailStationsOnly?: boolean | undefined
              }
            }
            output: TflApiPresentationEntitiesSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { query: string } } & {
              query: {
                modes?: string[] | undefined
                faresOnly?: boolean | undefined
                maxResults?: number | undefined
                lines?: string[] | undefined
                includeHubs?: boolean | undefined
                tflOperatedNationalRailStationsOnly?: boolean | undefined
              }
            }
            output: TflApiPresentationEntitiesSearchResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { query: string } } & {
              query: {
                modes?: string[] | undefined
                faresOnly?: boolean | undefined
                maxResults?: number | undefined
                lines?: string[] | undefined
                includeHubs?: boolean | undefined
                tflOperatedNationalRailStationsOnly?: boolean | undefined
              }
            }
            output: TflApiPresentationEntitiesSearchResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { query: string } } & {
              query: {
                modes?: string[] | undefined
                faresOnly?: boolean | undefined
                maxResults?: number | undefined
                lines?: string[] | undefined
                includeHubs?: boolean | undefined
                tflOperatedNationalRailStationsOnly?: boolean | undefined
              }
            }
            output: TflApiPresentationEntitiesSearchResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/StopPoint/ServiceTypes': {
      $get:
        | {
            input: {
              query: { id: string; lineIds?: string[] | undefined; modes?: string[] | undefined }
            }
            output: TflApiPresentationEntitiesLineServiceType[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { id: string; lineIds?: string[] | undefined; modes?: string[] | undefined }
            }
            output: TflApiPresentationEntitiesLineServiceType[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { id: string; lineIds?: string[] | undefined; modes?: string[] | undefined }
            }
            output: TflApiPresentationEntitiesLineServiceType[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { id: string; lineIds?: string[] | undefined; modes?: string[] | undefined }
            }
            output: TflApiPresentationEntitiesLineServiceType[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/StopPoint/Sms/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { output?: string | undefined } }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { output?: string | undefined } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { output?: string | undefined } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { output?: string | undefined } }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/StopPoint/Type/:types': {
      $get:
        | {
            input: { param: { types: string[] } }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { types: string[] } }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { types: string[] } }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { types: string[] } }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/StopPoint/Type/:types/page/:page': {
      $get:
        | {
            input: { param: { types: string[]; page: number } }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { types: string[]; page: number } }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { types: string[]; page: number } }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { types: string[]; page: number } }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/StopPoint/:ids': {
      $get:
        | {
            input: { param: { ids: string[] } } & {
              query: { includeCrowdingData?: boolean | undefined }
            }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ids: string[] } } & {
              query: { includeCrowdingData?: boolean | undefined }
            }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[] } } & {
              query: { includeCrowdingData?: boolean | undefined }
            }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[] } } & {
              query: { includeCrowdingData?: boolean | undefined }
            }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/StopPoint/:ids/Disruption': {
      $get:
        | {
            input: { param: { ids: string[] } } & {
              query: {
                getFamily?: boolean | undefined
                includeRouteBlockedStops?: boolean | undefined
                flattenResponse?: boolean | undefined
              }
            }
            output: TflApiPresentationEntitiesDisruptedPoint[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ids: string[] } } & {
              query: {
                getFamily?: boolean | undefined
                includeRouteBlockedStops?: boolean | undefined
                flattenResponse?: boolean | undefined
              }
            }
            output: TflApiPresentationEntitiesDisruptedPoint[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[] } } & {
              query: {
                getFamily?: boolean | undefined
                includeRouteBlockedStops?: boolean | undefined
                flattenResponse?: boolean | undefined
              }
            }
            output: TflApiPresentationEntitiesDisruptedPoint[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[] } } & {
              query: {
                getFamily?: boolean | undefined
                includeRouteBlockedStops?: boolean | undefined
                flattenResponse?: boolean | undefined
              }
            }
            output: TflApiPresentationEntitiesDisruptedPoint[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/StopPoint/:id/ArrivalDepartures': {
      $get:
        | {
            input: { param: { id: string } } & { query: { lineIds: string[] } }
            output: TflApiPresentationEntitiesArrivalDeparture[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { lineIds: string[] } }
            output: TflApiPresentationEntitiesArrivalDeparture[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { lineIds: string[] } }
            output: TflApiPresentationEntitiesArrivalDeparture[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { lineIds: string[] } }
            output: TflApiPresentationEntitiesArrivalDeparture[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/StopPoint/:id/Arrivals': {
      $get:
        | {
            input: { param: { id: string } }
            output: TflApiPresentationEntitiesPrediction[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TflApiPresentationEntitiesPrediction[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TflApiPresentationEntitiesPrediction[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TflApiPresentationEntitiesPrediction[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/StopPoint/:id/CanReachOnLine/:lineId': {
      $get:
        | {
            input: { param: { id: string; lineId: string } } & {
              query: { serviceTypes?: ('Regular' | 'Night')[] | undefined }
            }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; lineId: string } } & {
              query: { serviceTypes?: ('Regular' | 'Night')[] | undefined }
            }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string; lineId: string } } & {
              query: { serviceTypes?: ('Regular' | 'Night')[] | undefined }
            }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string; lineId: string } } & {
              query: { serviceTypes?: ('Regular' | 'Night')[] | undefined }
            }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/StopPoint/:id/Crowding/:line': {
      $get:
        | {
            input: { param: { id: string; line: string } } & {
              query: { direction: 'inbound' | 'outbound' | 'all' }
            }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; line: string } } & {
              query: { direction: 'inbound' | 'outbound' | 'all' }
            }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string; line: string } } & {
              query: { direction: 'inbound' | 'outbound' | 'all' }
            }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string; line: string } } & {
              query: { direction: 'inbound' | 'outbound' | 'all' }
            }
            output: TflApiPresentationEntitiesStopPoint[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/StopPoint/:id/DirectionTo/:toStopPointId': {
      $get:
        | {
            input: { param: { id: string; toStopPointId: string } } & {
              query: { lineId?: string | undefined }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; toStopPointId: string } } & {
              query: { lineId?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string; toStopPointId: string } } & {
              query: { lineId?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string; toStopPointId: string } } & {
              query: { lineId?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/StopPoint/:id/Route': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { serviceTypes?: ('Regular' | 'Night')[] | undefined }
            }
            output: TflApiPresentationEntitiesStopPointRouteSection[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { serviceTypes?: ('Regular' | 'Night')[] | undefined }
            }
            output: TflApiPresentationEntitiesStopPointRouteSection[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { serviceTypes?: ('Regular' | 'Night')[] | undefined }
            }
            output: TflApiPresentationEntitiesStopPointRouteSection[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { serviceTypes?: ('Regular' | 'Night')[] | undefined }
            }
            output: TflApiPresentationEntitiesStopPointRouteSection[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/StopPoint/:id/placeTypes': {
      $get:
        | {
            input: { param: { id: string } } & { query: { placeTypes: string[] } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { placeTypes: string[] } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { placeTypes: string[] } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { placeTypes: string[] } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/StopPoint/:stopPointId/CarParks': {
      $get:
        | {
            input: { param: { stopPointId: string } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stopPointId: string } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stopPointId: string } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stopPointId: string } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/StopPoint/:stopPointId/TaxiRanks': {
      $get:
        | {
            input: { param: { stopPointId: string } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stopPointId: string } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stopPointId: string } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { stopPointId: string } }
            output: TflApiPresentationEntitiesPlace[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/TravelTimes/compareOverlay/:z/mapcenter/:mapCenterLat/:mapCenterLon/pinlocation/:pinLat/:pinLon/dimensions/:width/:height': {
      $get:
        | {
            input: {
              param: {
                z: number
                pinLat: number
                pinLon: number
                mapCenterLat: number
                mapCenterLon: number
                width: number
                height: number
              }
            } & {
              query: {
                scenarioTitle: string
                timeOfDayId: string
                modeId: string
                direction: 'Average' | 'From' | 'To'
                travelTimeInterval: number
                compareType: string
                compareValue: string
              }
            }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                z: number
                pinLat: number
                pinLon: number
                mapCenterLat: number
                mapCenterLon: number
                width: number
                height: number
              }
            } & {
              query: {
                scenarioTitle: string
                timeOfDayId: string
                modeId: string
                direction: 'Average' | 'From' | 'To'
                travelTimeInterval: number
                compareType: string
                compareValue: string
              }
            }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                z: number
                pinLat: number
                pinLon: number
                mapCenterLat: number
                mapCenterLon: number
                width: number
                height: number
              }
            } & {
              query: {
                scenarioTitle: string
                timeOfDayId: string
                modeId: string
                direction: 'Average' | 'From' | 'To'
                travelTimeInterval: number
                compareType: string
                compareValue: string
              }
            }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                z: number
                pinLat: number
                pinLon: number
                mapCenterLat: number
                mapCenterLon: number
                width: number
                height: number
              }
            } & {
              query: {
                scenarioTitle: string
                timeOfDayId: string
                modeId: string
                direction: 'Average' | 'From' | 'To'
                travelTimeInterval: number
                compareType: string
                compareValue: string
              }
            }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/TravelTimes/overlay/:z/mapcenter/:mapCenterLat/:mapCenterLon/pinlocation/:pinLat/:pinLon/dimensions/:width/:height': {
      $get:
        | {
            input: {
              param: {
                z: number
                pinLat: number
                pinLon: number
                mapCenterLat: number
                mapCenterLon: number
                width: number
                height: number
              }
            } & {
              query: {
                scenarioTitle: string
                timeOfDayId: string
                modeId: string
                direction: 'Average' | 'From' | 'To'
                travelTimeInterval: number
              }
            }
            output: SystemObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                z: number
                pinLat: number
                pinLon: number
                mapCenterLat: number
                mapCenterLon: number
                width: number
                height: number
              }
            } & {
              query: {
                scenarioTitle: string
                timeOfDayId: string
                modeId: string
                direction: 'Average' | 'From' | 'To'
                travelTimeInterval: number
              }
            }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                z: number
                pinLat: number
                pinLon: number
                mapCenterLat: number
                mapCenterLon: number
                width: number
                height: number
              }
            } & {
              query: {
                scenarioTitle: string
                timeOfDayId: string
                modeId: string
                direction: 'Average' | 'From' | 'To'
                travelTimeInterval: number
              }
            }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                z: number
                pinLat: number
                pinLon: number
                mapCenterLat: number
                mapCenterLon: number
                width: number
                height: number
              }
            } & {
              query: {
                scenarioTitle: string
                timeOfDayId: string
                modeId: string
                direction: 'Average' | 'From' | 'To'
                travelTimeInterval: number
              }
            }
            output: SystemObject
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Vehicle/:ids/Arrivals': {
      $get:
        | {
            input: { param: { ids: string[] } }
            output: TflApiPresentationEntitiesPrediction[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ids: string[] } }
            output: TflApiPresentationEntitiesPrediction[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[] } }
            output: TflApiPresentationEntitiesPrediction[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ids: string[] } }
            output: TflApiPresentationEntitiesPrediction[]
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
