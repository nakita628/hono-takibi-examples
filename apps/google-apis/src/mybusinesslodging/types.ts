type Accessibility = {
  mobilityAccessible?: boolean | undefined
  mobilityAccessibleElevator?: boolean | undefined
  mobilityAccessibleElevatorException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  mobilityAccessibleException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  mobilityAccessibleParking?: boolean | undefined
  mobilityAccessibleParkingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  mobilityAccessiblePool?: boolean | undefined
  mobilityAccessiblePoolException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type Activities = {
  beachAccess?: boolean | undefined
  beachAccessException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  beachFront?: boolean | undefined
  beachFrontException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  bicycleRental?: boolean | undefined
  bicycleRentalException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  boutiqueStores?: boolean | undefined
  boutiqueStoresException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  casino?: boolean | undefined
  casinoException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  freeBicycleRental?: boolean | undefined
  freeBicycleRentalException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  freeWatercraftRental?: boolean | undefined
  freeWatercraftRentalException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  gameRoom?: boolean | undefined
  gameRoomException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  golf?: boolean | undefined
  golfException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  horsebackRiding?: boolean | undefined
  horsebackRidingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  nightclub?: boolean | undefined
  nightclubException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  privateBeach?: boolean | undefined
  privateBeachException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  scuba?: boolean | undefined
  scubaException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  snorkeling?: boolean | undefined
  snorkelingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  tennis?: boolean | undefined
  tennisException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  waterSkiing?: boolean | undefined
  waterSkiingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  watercraftRental?: boolean | undefined
  watercraftRentalException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type LivingAreaAccessibility = {
  adaCompliantUnit?: boolean | undefined
  adaCompliantUnitException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  hearingAccessibleDoorbell?: boolean | undefined
  hearingAccessibleDoorbellException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  hearingAccessibleFireAlarm?: boolean | undefined
  hearingAccessibleFireAlarmException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  hearingAccessibleUnit?: boolean | undefined
  hearingAccessibleUnitException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  mobilityAccessibleBathtub?: boolean | undefined
  mobilityAccessibleBathtubException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  mobilityAccessibleShower?: boolean | undefined
  mobilityAccessibleShowerException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  mobilityAccessibleToilet?: boolean | undefined
  mobilityAccessibleToiletException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  mobilityAccessibleUnit?: boolean | undefined
  mobilityAccessibleUnitException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type LivingAreaEating = {
  coffeeMaker?: boolean | undefined
  coffeeMakerException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  cookware?: boolean | undefined
  cookwareException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  dishwasher?: boolean | undefined
  dishwasherException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  indoorGrill?: boolean | undefined
  indoorGrillException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  kettle?: boolean | undefined
  kettleException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  kitchenAvailable?: boolean | undefined
  kitchenAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  microwave?: boolean | undefined
  microwaveException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  minibar?: boolean | undefined
  minibarException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  outdoorGrill?: boolean | undefined
  outdoorGrillException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  oven?: boolean | undefined
  ovenException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  refrigerator?: boolean | undefined
  refrigeratorException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  sink?: boolean | undefined
  sinkException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  snackbar?: boolean | undefined
  snackbarException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  stove?: boolean | undefined
  stoveException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  teaStation?: boolean | undefined
  teaStationException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  toaster?: boolean | undefined
  toasterException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type LivingAreaFeatures = {
  airConditioning?: boolean | undefined
  airConditioningException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  bathtub?: boolean | undefined
  bathtubException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  bidet?: boolean | undefined
  bidetException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  dryer?: boolean | undefined
  dryerException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  electronicRoomKey?: boolean | undefined
  electronicRoomKeyException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  fireplace?: boolean | undefined
  fireplaceException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  hairdryer?: boolean | undefined
  hairdryerException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  heating?: boolean | undefined
  heatingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  inunitSafe?: boolean | undefined
  inunitSafeException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  inunitWifiAvailable?: boolean | undefined
  inunitWifiAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  ironingEquipment?: boolean | undefined
  ironingEquipmentException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  payPerViewMovies?: boolean | undefined
  payPerViewMoviesException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  privateBathroom?: boolean | undefined
  privateBathroomException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  shower?: boolean | undefined
  showerException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  toilet?: boolean | undefined
  toiletException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  tv?: boolean | undefined
  tvCasting?: boolean | undefined
  tvCastingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  tvException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  tvStreaming?: boolean | undefined
  tvStreamingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  universalPowerAdapters?: boolean | undefined
  universalPowerAdaptersException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  washer?: boolean | undefined
  washerException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type LivingAreaLayout = {
  balcony?: boolean | undefined
  balconyException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  livingAreaSqMeters?: number | undefined
  livingAreaSqMetersException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  loft?: boolean | undefined
  loftException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  nonSmoking?: boolean | undefined
  nonSmokingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  patio?: boolean | undefined
  patioException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  stairs?: boolean | undefined
  stairsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type LivingAreaSleeping = {
  bedsCount?: number | undefined
  bedsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  bunkBedsCount?: number | undefined
  bunkBedsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  cribsCount?: number | undefined
  cribsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  doubleBedsCount?: number | undefined
  doubleBedsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  featherPillows?: boolean | undefined
  featherPillowsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  hypoallergenicBedding?: boolean | undefined
  hypoallergenicBeddingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  kingBedsCount?: number | undefined
  kingBedsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  memoryFoamPillows?: boolean | undefined
  memoryFoamPillowsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  otherBedsCount?: number | undefined
  otherBedsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  queenBedsCount?: number | undefined
  queenBedsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  rollAwayBedsCount?: number | undefined
  rollAwayBedsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  singleOrTwinBedsCount?: number | undefined
  singleOrTwinBedsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  sofaBedsCount?: number | undefined
  sofaBedsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  syntheticPillows?: boolean | undefined
  syntheticPillowsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type LivingArea = {
  accessibility?: LivingAreaAccessibility | undefined
  eating?: LivingAreaEating | undefined
  features?: LivingAreaFeatures | undefined
  layout?: LivingAreaLayout | undefined
  sleeping?: LivingAreaSleeping | undefined
}
type ViewsFromUnit = {
  beachView?: boolean | undefined
  beachViewException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  cityView?: boolean | undefined
  cityViewException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  gardenView?: boolean | undefined
  gardenViewException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  lakeView?: boolean | undefined
  lakeViewException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  landmarkView?: boolean | undefined
  landmarkViewException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  oceanView?: boolean | undefined
  oceanViewException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  poolView?: boolean | undefined
  poolViewException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  valleyView?: boolean | undefined
  valleyViewException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type GuestUnitFeatures = {
  bungalowOrVilla?: boolean | undefined
  bungalowOrVillaException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  connectingUnitAvailable?: boolean | undefined
  connectingUnitAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  executiveFloor?: boolean | undefined
  executiveFloorException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  maxAdultOccupantsCount?: number | undefined
  maxAdultOccupantsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  maxChildOccupantsCount?: number | undefined
  maxChildOccupantsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  maxOccupantsCount?: number | undefined
  maxOccupantsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  privateHome?: boolean | undefined
  privateHomeException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  suite?: boolean | undefined
  suiteException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  tier?: 'UNIT_TIER_UNSPECIFIED' | 'STANDARD_UNIT' | 'DELUXE_UNIT' | undefined
  tierException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  totalLivingAreas?: LivingArea | undefined
  views?: ViewsFromUnit | undefined
}
type Business = {
  businessCenter?: boolean | undefined
  businessCenterException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  meetingRooms?: boolean | undefined
  meetingRoomsCount?: number | undefined
  meetingRoomsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  meetingRoomsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type Connectivity = {
  freeWifi?: boolean | undefined
  freeWifiException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  publicAreaWifiAvailable?: boolean | undefined
  publicAreaWifiAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  publicInternetTerminal?: boolean | undefined
  publicInternetTerminalException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  wifiAvailable?: boolean | undefined
  wifiAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type Families = {
  babysitting?: boolean | undefined
  babysittingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  kidsActivities?: boolean | undefined
  kidsActivitiesException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  kidsClub?: boolean | undefined
  kidsClubException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  kidsFriendly?: boolean | undefined
  kidsFriendlyException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type FoodAndDrink = {
  bar?: boolean | undefined
  barException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  breakfastAvailable?: boolean | undefined
  breakfastAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  breakfastBuffet?: boolean | undefined
  breakfastBuffetException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  buffet?: boolean | undefined
  buffetException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  dinnerBuffet?: boolean | undefined
  dinnerBuffetException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  freeBreakfast?: boolean | undefined
  freeBreakfastException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  restaurant?: boolean | undefined
  restaurantException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  restaurantsCount?: number | undefined
  restaurantsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  roomService?: boolean | undefined
  roomServiceException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  tableService?: boolean | undefined
  tableServiceException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  twentyFourHourRoomService?: boolean | undefined
  twentyFourHourRoomServiceException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  vendingMachine?: boolean | undefined
  vendingMachineException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type GuestUnitType = {
  codes?: string[] | undefined
  features?: GuestUnitFeatures | undefined
  label?: string | undefined
}
type EnhancedCleaning = {
  commercialGradeDisinfectantCleaning?: boolean | undefined
  commercialGradeDisinfectantCleaningException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  commonAreasEnhancedCleaning?: boolean | undefined
  commonAreasEnhancedCleaningException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  employeesTrainedCleaningProcedures?: boolean | undefined
  employeesTrainedCleaningProceduresException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  employeesTrainedThoroughHandWashing?: boolean | undefined
  employeesTrainedThoroughHandWashingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  employeesWearProtectiveEquipment?: boolean | undefined
  employeesWearProtectiveEquipmentException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  guestRoomsEnhancedCleaning?: boolean | undefined
  guestRoomsEnhancedCleaningException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type IncreasedFoodSafety = {
  diningAreasAdditionalSanitation?: boolean | undefined
  diningAreasAdditionalSanitationException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  disposableFlatware?: boolean | undefined
  disposableFlatwareException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  foodPreparationAndServingAdditionalSafety?: boolean | undefined
  foodPreparationAndServingAdditionalSafetyException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  individualPackagedMeals?: boolean | undefined
  individualPackagedMealsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  singleUseFoodMenus?: boolean | undefined
  singleUseFoodMenusException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type MinimizedContact = {
  contactlessCheckinCheckout?: boolean | undefined
  contactlessCheckinCheckoutException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  digitalGuestRoomKeys?: boolean | undefined
  digitalGuestRoomKeysException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  housekeepingScheduledRequestOnly?: boolean | undefined
  housekeepingScheduledRequestOnlyException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  noHighTouchItemsCommonAreas?: boolean | undefined
  noHighTouchItemsCommonAreasException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  noHighTouchItemsGuestRooms?: boolean | undefined
  noHighTouchItemsGuestRoomsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  plasticKeycardsDisinfected?: boolean | undefined
  plasticKeycardsDisinfectedException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  roomBookingsBuffer?: boolean | undefined
  roomBookingsBufferException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type PersonalProtection = {
  commonAreasOfferSanitizingItems?: boolean | undefined
  commonAreasOfferSanitizingItemsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  faceMaskRequired?: boolean | undefined
  faceMaskRequiredException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  guestRoomHygieneKitsAvailable?: boolean | undefined
  guestRoomHygieneKitsAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  protectiveEquipmentAvailable?: boolean | undefined
  protectiveEquipmentAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type PhysicalDistancing = {
  commonAreasPhysicalDistancingArranged?: boolean | undefined
  commonAreasPhysicalDistancingArrangedException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  physicalDistancingRequired?: boolean | undefined
  physicalDistancingRequiredException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  safetyDividers?: boolean | undefined
  safetyDividersException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  sharedAreasLimitedOccupancy?: boolean | undefined
  sharedAreasLimitedOccupancyException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  wellnessAreasHavePrivateSpaces?: boolean | undefined
  wellnessAreasHavePrivateSpacesException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type HealthAndSafety = {
  enhancedCleaning?: EnhancedCleaning | undefined
  increasedFoodSafety?: IncreasedFoodSafety | undefined
  minimizedContact?: MinimizedContact | undefined
  personalProtection?: PersonalProtection | undefined
  physicalDistancing?: PhysicalDistancing | undefined
}
type Housekeeping = {
  dailyHousekeeping?: boolean | undefined
  dailyHousekeepingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  housekeepingAvailable?: boolean | undefined
  housekeepingAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  turndownService?: boolean | undefined
  turndownServiceException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type LodgingMetadata = { updateTime?: string | undefined }
type Parking = {
  electricCarChargingStations?: boolean | undefined
  electricCarChargingStationsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  freeParking?: boolean | undefined
  freeParkingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  freeSelfParking?: boolean | undefined
  freeSelfParkingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  freeValetParking?: boolean | undefined
  freeValetParkingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  parkingAvailable?: boolean | undefined
  parkingAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  selfParkingAvailable?: boolean | undefined
  selfParkingAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  valetParkingAvailable?: boolean | undefined
  valetParkingAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type Pets = {
  catsAllowed?: boolean | undefined
  catsAllowedException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  dogsAllowed?: boolean | undefined
  dogsAllowedException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  petsAllowed?: boolean | undefined
  petsAllowedException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  petsAllowedFree?: boolean | undefined
  petsAllowedFreeException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type TimeOfDay = {
  hours?: number | undefined
  minutes?: number | undefined
  nanos?: number | undefined
  seconds?: number | undefined
}
type PaymentOptions = {
  cash?: boolean | undefined
  cashException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  cheque?: boolean | undefined
  chequeException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  creditCard?: boolean | undefined
  creditCardException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  debitCard?: boolean | undefined
  debitCardException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  mobileNfc?: boolean | undefined
  mobileNfcException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type Policies = {
  allInclusiveAvailable?: boolean | undefined
  allInclusiveAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  allInclusiveOnly?: boolean | undefined
  allInclusiveOnlyException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  checkinTime?: TimeOfDay | undefined
  checkinTimeException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  checkoutTime?: TimeOfDay | undefined
  checkoutTimeException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  kidsStayFree?: boolean | undefined
  kidsStayFreeException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  maxChildAge?: number | undefined
  maxChildAgeException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  maxKidsStayFreeCount?: number | undefined
  maxKidsStayFreeCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  paymentOptions?: PaymentOptions | undefined
  smokeFreeProperty?: boolean | undefined
  smokeFreePropertyException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type Pools = {
  adultPool?: boolean | undefined
  adultPoolException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  hotTub?: boolean | undefined
  hotTubException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  indoorPool?: boolean | undefined
  indoorPoolException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  indoorPoolsCount?: number | undefined
  indoorPoolsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  lazyRiver?: boolean | undefined
  lazyRiverException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  lifeguard?: boolean | undefined
  lifeguardException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  outdoorPool?: boolean | undefined
  outdoorPoolException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  outdoorPoolsCount?: number | undefined
  outdoorPoolsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  pool?: boolean | undefined
  poolException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  poolsCount?: number | undefined
  poolsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  wadingPool?: boolean | undefined
  wadingPoolException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  waterPark?: boolean | undefined
  waterParkException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  waterslide?: boolean | undefined
  waterslideException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  wavePool?: boolean | undefined
  wavePoolException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type Property = {
  builtYear?: number | undefined
  builtYearException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  floorsCount?: number | undefined
  floorsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  lastRenovatedYear?: number | undefined
  lastRenovatedYearException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  roomsCount?: number | undefined
  roomsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type LanguageSpoken = {
  languageCode?: string | undefined
  spoken?: boolean | undefined
  spokenException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type Services = {
  baggageStorage?: boolean | undefined
  baggageStorageException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  concierge?: boolean | undefined
  conciergeException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  convenienceStore?: boolean | undefined
  convenienceStoreException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  currencyExchange?: boolean | undefined
  currencyExchangeException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  elevator?: boolean | undefined
  elevatorException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  frontDesk?: boolean | undefined
  frontDeskException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  fullServiceLaundry?: boolean | undefined
  fullServiceLaundryException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  giftShop?: boolean | undefined
  giftShopException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  languagesSpoken?: LanguageSpoken[] | undefined
  selfServiceLaundry?: boolean | undefined
  selfServiceLaundryException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  socialHour?: boolean | undefined
  socialHourException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  twentyFourHourFrontDesk?: boolean | undefined
  twentyFourHourFrontDeskException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  wakeUpCalls?: boolean | undefined
  wakeUpCallsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type EnergyEfficiency = {
  carbonFreeEnergySources?: boolean | undefined
  carbonFreeEnergySourcesException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  energyConservationProgram?: boolean | undefined
  energyConservationProgramException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  energyEfficientHeatingAndCoolingSystems?: boolean | undefined
  energyEfficientHeatingAndCoolingSystemsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  energyEfficientLighting?: boolean | undefined
  energyEfficientLightingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  energySavingThermostats?: boolean | undefined
  energySavingThermostatsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  greenBuildingDesign?: boolean | undefined
  greenBuildingDesignException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  independentOrganizationAuditsEnergyUse?: boolean | undefined
  independentOrganizationAuditsEnergyUseException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type EcoCertification = {
  awarded?: boolean | undefined
  awardedException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  ecoCertificate?:
    | 'ECO_CERTIFICATE_UNSPECIFIED'
    | 'ISO14001'
    | 'ISO50001'
    | 'ASIAN_ECOTOURISM'
    | 'BIOSPHERE_RESPOSNIBLE_TOURISM'
    | 'BUREAU_VERITAS'
    | 'CONTROL_UNION'
    | 'EARTHCHECK'
    | 'ECO_CERTIFICATION_MALTA'
    | 'ECOTOURISM_AUSTRALIAS_ECO'
    | 'GREAT_GREEN_DEAL'
    | 'GREEN_GLOBE'
    | 'GREEN_GROWTH2050'
    | 'GREEN_KEY'
    | 'GREEN_KEY_ECO_RATING'
    | 'GREEN_SEAL'
    | 'GREEN_STAR'
    | 'GREEN_TOURISM_ACTIVE'
    | 'HILTON_LIGHTSTAY'
    | 'HOSTELLING_INTERNATIONALS_QUALITY_AND_SUSTAINABILITY'
    | 'HOTELES_MAS_VERDES'
    | 'NORDIC_SWAN_ECOLABEL'
    | 'PREFERRED_BY_NATURE_SUSTAINABLE_TOURISM'
    | 'SUSTAINABLE_TRAVEL_IRELAND'
    | 'TOF_TIGERS_INITITIVES_PUG'
    | 'TRAVELIFE'
    | 'UNITED_CERTIFICATION_SYSTEMS_LIMITED'
    | 'VIREO_SRL'
    | undefined
}
type SustainabilityCertifications = {
  breeamCertification?:
    | 'BREEAM_CERTIFICATION_UNSPECIFIED'
    | 'NO_BREEAM_CERTIFICATION'
    | 'BREEAM_PASS'
    | 'BREEAM_GOOD'
    | 'BREEAM_VERY_GOOD'
    | 'BREEAM_EXCELLENT'
    | 'BREEAM_OUTSTANDING'
    | undefined
  breeamCertificationException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  ecoCertifications?: EcoCertification[] | undefined
  leedCertification?:
    | 'LEED_CERTIFICATION_UNSPECIFIED'
    | 'NO_LEED_CERTIFICATION'
    | 'LEED_CERTIFIED'
    | 'LEED_SILVER'
    | 'LEED_GOLD'
    | 'LEED_PLATINUM'
    | undefined
  leedCertificationException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type SustainableSourcing = {
  ecoFriendlyToiletries?: boolean | undefined
  ecoFriendlyToiletriesException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  locallySourcedFoodAndBeverages?: boolean | undefined
  locallySourcedFoodAndBeveragesException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  organicCageFreeEggs?: boolean | undefined
  organicCageFreeEggsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  organicFoodAndBeverages?: boolean | undefined
  organicFoodAndBeveragesException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  responsiblePurchasingPolicy?: boolean | undefined
  responsiblePurchasingPolicyException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  responsiblySourcesSeafood?: boolean | undefined
  responsiblySourcesSeafoodException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  veganMeals?: boolean | undefined
  veganMealsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  vegetarianMeals?: boolean | undefined
  vegetarianMealsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type WasteReduction = {
  compostableFoodContainersAndCutlery?: boolean | undefined
  compostableFoodContainersAndCutleryException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  compostsExcessFood?: boolean | undefined
  compostsExcessFoodException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  donatesExcessFood?: boolean | undefined
  donatesExcessFoodException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  foodWasteReductionProgram?: boolean | undefined
  foodWasteReductionProgramException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  noSingleUsePlasticStraws?: boolean | undefined
  noSingleUsePlasticStrawsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  noSingleUsePlasticWaterBottles?: boolean | undefined
  noSingleUsePlasticWaterBottlesException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  noStyrofoamFoodContainers?: boolean | undefined
  noStyrofoamFoodContainersException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  recyclingProgram?: boolean | undefined
  recyclingProgramException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  refillableToiletryContainers?: boolean | undefined
  refillableToiletryContainersException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  safelyDisposesBatteries?: boolean | undefined
  safelyDisposesBatteriesException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  safelyDisposesElectronics?: boolean | undefined
  safelyDisposesElectronicsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  safelyDisposesLightbulbs?: boolean | undefined
  safelyDisposesLightbulbsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  safelyHandlesHazardousSubstances?: boolean | undefined
  safelyHandlesHazardousSubstancesException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  soapDonationProgram?: boolean | undefined
  soapDonationProgramException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  toiletryDonationProgram?: boolean | undefined
  toiletryDonationProgramException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  waterBottleFillingStations?: boolean | undefined
  waterBottleFillingStationsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type WaterConservation = {
  independentOrganizationAuditsWaterUse?: boolean | undefined
  independentOrganizationAuditsWaterUseException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  linenReuseProgram?: boolean | undefined
  linenReuseProgramException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  towelReuseProgram?: boolean | undefined
  towelReuseProgramException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  waterSavingShowers?: boolean | undefined
  waterSavingShowersException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  waterSavingSinks?: boolean | undefined
  waterSavingSinksException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  waterSavingToilets?: boolean | undefined
  waterSavingToiletsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type Sustainability = {
  energyEfficiency?: EnergyEfficiency | undefined
  sustainabilityCertifications?: SustainabilityCertifications | undefined
  sustainableSourcing?: SustainableSourcing | undefined
  wasteReduction?: WasteReduction | undefined
  waterConservation?: WaterConservation | undefined
}
type Transportation = {
  airportShuttle?: boolean | undefined
  airportShuttleException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  carRentalOnProperty?: boolean | undefined
  carRentalOnPropertyException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  freeAirportShuttle?: boolean | undefined
  freeAirportShuttleException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  freePrivateCarService?: boolean | undefined
  freePrivateCarServiceException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  localShuttle?: boolean | undefined
  localShuttleException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  privateCarService?: boolean | undefined
  privateCarServiceException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  transfer?: boolean | undefined
  transferException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type Wellness = {
  doctorOnCall?: boolean | undefined
  doctorOnCallException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  ellipticalMachine?: boolean | undefined
  ellipticalMachineException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  fitnessCenter?: boolean | undefined
  fitnessCenterException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  freeFitnessCenter?: boolean | undefined
  freeFitnessCenterException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  freeWeights?: boolean | undefined
  freeWeightsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  massage?: boolean | undefined
  massageException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  salon?: boolean | undefined
  salonException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  sauna?: boolean | undefined
  saunaException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  spa?: boolean | undefined
  spaException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  treadmill?: boolean | undefined
  treadmillException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  weightMachine?: boolean | undefined
  weightMachineException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type Lodging = {
  accessibility?: Accessibility | undefined
  activities?: Activities | undefined
  allUnits?: GuestUnitFeatures | undefined
  business?: Business | undefined
  commonLivingArea?: LivingArea | undefined
  connectivity?: Connectivity | undefined
  families?: Families | undefined
  foodAndDrink?: FoodAndDrink | undefined
  guestUnits?: GuestUnitType[] | undefined
  healthAndSafety?: HealthAndSafety | undefined
  housekeeping?: Housekeeping | undefined
  metadata?: LodgingMetadata | undefined
  name?: string | undefined
  parking?: Parking | undefined
  pets?: Pets | undefined
  policies?: Policies | undefined
  pools?: Pools | undefined
  property?: Property | undefined
  services?: Services | undefined
  someUnits?: GuestUnitFeatures | undefined
  sustainability?: Sustainability | undefined
  transportation?: Transportation | undefined
  wellness?: Wellness | undefined
}
type GetGoogleUpdatedLodgingResponse = {
  diffMask?: string | undefined
  lodging?: Lodging | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:name': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            readMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Lodging
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Lodging }
        output: Lodging
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:getGoogleUpdated': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            readMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GetGoogleUpdatedLodgingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
