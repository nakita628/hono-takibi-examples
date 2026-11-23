type DivisionSearchResult = {
  aliases?: string[] | undefined
  name?: string | undefined
  ocdId?: string | undefined
}
type DivisionSearchResponse = {
  kind?: string | undefined
  results?: DivisionSearchResult[] | undefined
}
type Election = {
  electionDay?: string | undefined
  id?: string | undefined
  name?: string | undefined
  ocdDivisionId?: string | undefined
  shapeLookupBehavior?:
    | 'shapeLookupDefault'
    | 'shapeLookupDisabled'
    | 'shapeLookupEnabled'
    | undefined
}
type ElectionsQueryResponse = { elections?: Election[] | undefined; kind?: string | undefined }
type GeographicDivision = {
  alsoKnownAs?: string[] | undefined
  name?: string | undefined
  officeIndices?: number[] | undefined
}
type SimpleAddressType = {
  city?: string | undefined
  line1?: string | undefined
  line2?: string | undefined
  line3?: string | undefined
  locationName?: string | undefined
  state?: string | undefined
  zip?: string | undefined
}
type Source = { name?: string | undefined; official?: boolean | undefined }
type Office = {
  divisionId?: string | undefined
  levels?:
    | (
        | 'international'
        | 'country'
        | 'administrativeArea1'
        | 'regional'
        | 'administrativeArea2'
        | 'locality'
        | 'subLocality1'
        | 'subLocality2'
        | 'special'
      )[]
    | undefined
  name?: string | undefined
  officialIndices?: number[] | undefined
  roles?:
    | (
        | 'headOfState'
        | 'headOfGovernment'
        | 'deputyHeadOfGovernment'
        | 'governmentOfficer'
        | 'executiveCouncil'
        | 'legislatorUpperBody'
        | 'legislatorLowerBody'
        | 'highestCourtJudge'
        | 'judge'
        | 'schoolBoard'
        | 'specialPurposeOfficer'
        | 'otherRole'
      )[]
    | undefined
  sources?: Source[] | undefined
}
type Channel = { id?: string | undefined; type?: string | undefined }
type MessageSet = { [x: string]: unknown }
type FeatureIdProto = {
  cellId?: string | undefined
  fprint?: string | undefined
  temporaryData?: MessageSet | undefined
}
type GeocodingSummary = {
  addressUnderstood?: boolean | undefined
  featureId?: FeatureIdProto | undefined
  featureType?:
    | 'typeAny'
    | 'typeTransportation'
    | 'typeRoute'
    | 'typeDeprecatedHighwayDoNotUse'
    | 'typeHighway'
    | 'typeHighway1'
    | 'typeHighway2'
    | 'typeHighway3'
    | 'typeHighway4'
    | 'typeHighway5'
    | 'typeHighway6'
    | 'typeHighway7'
    | 'typeHighway8'
    | 'typeHighway9'
    | 'typeBicycleRoute'
    | 'typeTrail'
    | 'typeSegment'
    | 'typeRoad'
    | 'typeRailway'
    | 'typeStandardTrack'
    | 'typeJrTrack'
    | 'typeNarrowTrack'
    | 'typeMonorailTrack'
    | 'typeSubwayTrack'
    | 'typeLightRailTrack'
    | 'typeBroadTrack'
    | 'typeHighSpeedRail'
    | 'typeTrolleyTrack'
    | 'typeFerry'
    | 'typeFerryBoat'
    | 'typeFerryTrain'
    | 'typeVirtualSegment'
    | 'typeIntersection'
    | 'typeTransit'
    | 'typeTransitStation'
    | 'typeBusStation'
    | 'typeTramwayStation'
    | 'typeTrainStation'
    | 'typeSubwayStation'
    | 'typeFerryTerminal'
    | 'typeAirport'
    | 'typeAirportCivil'
    | 'typeAirportMilitary'
    | 'typeAirportMixed'
    | 'typeHeliport'
    | 'typeSeaplaneBase'
    | 'typeAirstrip'
    | 'typeCableCarStation'
    | 'typeGondolaLiftStation'
    | 'typeFunicularStation'
    | 'typeSpecialStation'
    | 'typeHorseCarriageStation'
    | 'typeMonorailStation'
    | 'typeSeaport'
    | 'typeTransitStop'
    | 'typeTransitTrip'
    | 'typeTransitDeparture'
    | 'typeTransitLeg'
    | 'typeTransitLine'
    | 'typeTransitAgencyDeprecatedValue'
    | 'typeTransitTransfer'
    | 'typeSegmentPath'
    | 'typeRoadSign'
    | 'typeIntersectionGroup'
    | 'typePathway'
    | 'typeRestrictionGroup'
    | 'typeTollCluster'
    | 'typePolitical'
    | 'typeCountry'
    | 'typeAdministrativeArea'
    | 'typeAdministrativeArea1'
    | 'typeUsState'
    | 'typeGbCountry'
    | 'typeJpTodoufuken'
    | 'typeAdministrativeArea2'
    | 'typeGbFormerPostalCounty'
    | 'typeGbTraditionalCounty'
    | 'typeAdministrativeArea3'
    | 'typeAdministrativeArea4'
    | 'typeAdministrativeArea5'
    | 'typeAdministrativeArea6'
    | 'typeAdministrativeArea7'
    | 'typeAdministrativeArea8'
    | 'typeAdministrativeArea9'
    | 'typeColloquialArea'
    | 'typeReservation'
    | 'typeLocality'
    | 'typeGbPostTown'
    | 'typeJpGun'
    | 'typeJpShikuchouson'
    | 'typeJpSubShikuchouson'
    | 'typeColloquialCity'
    | 'typeSublocality'
    | 'typeUsBorough'
    | 'typeGbDependentLocality'
    | 'typeJpOoaza'
    | 'typeJpKoaza'
    | 'typeJpGaiku'
    | 'typeGbDoubleDependentLocality'
    | 'typeJpChiban'
    | 'typeJpEdaban'
    | 'typeSublocality1'
    | 'typeSublocality2'
    | 'typeSublocality3'
    | 'typeSublocality4'
    | 'typeSublocality5'
    | 'typeNeighborhood'
    | 'typeConstituency'
    | 'typeDesignatedMarketArea'
    | 'typeSchoolDistrict'
    | 'typeLandParcel'
    | 'typeDisputedArea'
    | 'typePoliceJurisdiction'
    | 'typeStatisticalArea'
    | 'typeConstituencyFuture'
    | 'typePark'
    | 'typeGolfCourse'
    | 'typeLocalPark'
    | 'typeNationalPark'
    | 'typeUsNationalPark'
    | 'typeUsNationalMonument'
    | 'typeNationalForest'
    | 'typeProvincialPark'
    | 'typeProvincialForest'
    | 'typeCampgrounds'
    | 'typeHikingArea'
    | 'typeBusiness'
    | 'typeGovernment'
    | 'typeBorderCrossing'
    | 'typeCityHall'
    | 'typeCourthouse'
    | 'typeEmbassy'
    | 'typeLibrary'
    | 'typeSchool'
    | 'typeUniversity'
    | 'typeEmergency'
    | 'typeHospital'
    | 'typePharmacy'
    | 'typePolice'
    | 'typeFire'
    | 'typeDoctor'
    | 'typeDentist'
    | 'typeVeterinarian'
    | 'typeTravelService'
    | 'typeLodging'
    | 'typeRestaurant'
    | 'typeGasStation'
    | 'typeParking'
    | 'typePostOffice'
    | 'typeRestArea'
    | 'typeCashMachine'
    | 'typeCarRental'
    | 'typeCarRepair'
    | 'typeShopping'
    | 'typeGrocery'
    | 'typeTouristDestination'
    | 'typeEcoTouristDestination'
    | 'typeBirdWatching'
    | 'typeFishing'
    | 'typeHunting'
    | 'typeNatureReserve'
    | 'typeTemple'
    | 'typeChurch'
    | 'typeGurudwara'
    | 'typeHinduTemple'
    | 'typeMosque'
    | 'typeSynagogue'
    | 'typeStadium'
    | 'typeBar'
    | 'typeMovieRental'
    | 'typeCoffee'
    | 'typeGolf'
    | 'typeBank'
    | 'typeDoodle'
    | 'typeGrounds'
    | 'typeAirportGrounds'
    | 'typeBuildingGrounds'
    | 'typeCemetery'
    | 'typeHospitalGrounds'
    | 'typeIndustrial'
    | 'typeMilitary'
    | 'typeShoppingCenter'
    | 'typeSportsComplex'
    | 'typeUniversityGrounds'
    | 'typeDeprecatedTarmac'
    | 'typeEnclosedTrafficArea'
    | 'typeParkingLot'
    | 'typeParkingGarage'
    | 'typeOffRoadArea'
    | 'typeBorder'
    | 'typeBuilding'
    | 'typeGeocodedAddress'
    | 'typeNaturalFeature'
    | 'typeTerrain'
    | 'typeSand'
    | 'typeBeach'
    | 'typeDune'
    | 'typeRocky'
    | 'typeIce'
    | 'typeGlacier'
    | 'typeBuiltUpArea'
    | 'typeVegetation'
    | 'typeShrubbery'
    | 'typeWoods'
    | 'typeAgricultural'
    | 'typeGrassland'
    | 'typeTundra'
    | 'typeDesert'
    | 'typeSaltFlat'
    | 'typeWater'
    | 'typeOcean'
    | 'typeBay'
    | 'typeBight'
    | 'typeLagoon'
    | 'typeSea'
    | 'typeStrait'
    | 'typeInlet'
    | 'typeFjord'
    | 'typeLake'
    | 'typeSeasonalLake'
    | 'typeReservoir'
    | 'typePond'
    | 'typeRiver'
    | 'typeRapids'
    | 'typeDistributary'
    | 'typeConfluence'
    | 'typeWaterfall'
    | 'typeSpring'
    | 'typeGeyser'
    | 'typeHotSpring'
    | 'typeSeasonalRiver'
    | 'typeWadi'
    | 'typeEstuary'
    | 'typeWetland'
    | 'typeWaterNavigation'
    | 'typeFord'
    | 'typeCanal'
    | 'typeHarbor'
    | 'typeChannel'
    | 'typeReef'
    | 'typeReefFlat'
    | 'typeReefGrowth'
    | 'typeReefExtent'
    | 'typeReefRockSubmerged'
    | 'typeIrrigation'
    | 'typeDam'
    | 'typeDrinkingWater'
    | 'typeCurrent'
    | 'typeWateringHole'
    | 'typeTectonic'
    | 'typeWateringHoleDeprecated'
    | 'typeVolcano'
    | 'typeLavaField'
    | 'typeFissure'
    | 'typeFault'
    | 'typeLandMass'
    | 'typeContinent'
    | 'typeIsland'
    | 'typeAtoll'
    | 'typeOceanRockExposed'
    | 'typeCay'
    | 'typePeninsula'
    | 'typeIsthmus'
    | 'typeElevated'
    | 'typePeak'
    | 'typeNunatak'
    | 'typeSpur'
    | 'typePass'
    | 'typePlateau'
    | 'typeRidge'
    | 'typeRavine'
    | 'typeCrater'
    | 'typeKarst'
    | 'typeCliff'
    | 'typeVista'
    | 'typeDigitalElevationModel'
    | 'typeUpland'
    | 'typeTerrace'
    | 'typeSlope'
    | 'typeContourLine'
    | 'typePan'
    | 'typeUnstableHillside'
    | 'typeMountainRange'
    | 'typeUndersea'
    | 'typeSubmarineSeamount'
    | 'typeSubmarineRidge'
    | 'typeSubmarineGap'
    | 'typeSubmarinePlateau'
    | 'typeSubmarineDeep'
    | 'typeSubmarineValley'
    | 'typeSubmarineBasin'
    | 'typeSubmarineSlope'
    | 'typeSubmarineCliff'
    | 'typeSubmarinePlain'
    | 'typeSubmarineFractureZone'
    | 'typeCave'
    | 'typeRock'
    | 'typeArchipelago'
    | 'typePostal'
    | 'typePostalCode'
    | 'typePostalCodePrefix'
    | 'typePremise'
    | 'typeSubPremise'
    | 'typeSuite'
    | 'typePostTown'
    | 'typePostalRound'
    | 'typeMetaFeature'
    | 'typeDataSource'
    | 'typeLocale'
    | 'typeTimezone'
    | 'typeBusinessChain'
    | 'typePhoneNumberPrefix'
    | 'typePhoneNumberAreaCode'
    | 'typeBusinessCorridor'
    | 'typeAddressTemplate'
    | 'typeTransitAgency'
    | 'typeFutureGeometry'
    | 'typeEvent'
    | 'typeEarthquake'
    | 'typeHurricane'
    | 'typeWeatherCondition'
    | 'typeTransient'
    | 'typeEntrance'
    | 'typeCartographic'
    | 'typeHighTension'
    | 'typeSkiTrail'
    | 'typeSkiLift'
    | 'typeSkiBoundary'
    | 'typeWatershedBoundary'
    | 'typeTarmac'
    | 'typeWall'
    | 'typePicnicArea'
    | 'typePlayGround'
    | 'typeTrailHead'
    | 'typeGolfTeeingGround'
    | 'typeGolfPuttingGreen'
    | 'typeGolfRough'
    | 'typeGolfSandBunker'
    | 'typeGolfFairway'
    | 'typeGolfHole'
    | 'typeDeprecatedGolfShop'
    | 'typeCampingSite'
    | 'typeDesignatedBarbecuePit'
    | 'typeDesignatedCookingArea'
    | 'typeCampfirePit'
    | 'typeWaterFountain'
    | 'typeLitterReceptacle'
    | 'typeLockerArea'
    | 'typeAnimalEnclosure'
    | 'typeCartographicLine'
    | 'typeEstablishment'
    | 'typeEstablishmentGrounds'
    | 'typeEstablishmentBuilding'
    | 'typeEstablishmentPoi'
    | 'typeEstablishmentService'
    | 'typeCelestial'
    | 'typeRoadMonitor'
    | 'typePublicSpacesAndMonuments'
    | 'typeStatue'
    | 'typeTownSquare'
    | 'typeLevel'
    | 'typeCompound'
    | 'typeCompoundGrounds'
    | 'typeCompoundBuilding'
    | 'typeCompoundSection'
    | 'typeTerminalPoint'
    | 'typeRegulatedArea'
    | 'typeLogicalBorder'
    | 'typeDoNotUseReservedToCatchGeneratedFiles'
    | 'typeUnknown'
    | undefined
  positionPrecisionMeters?: number | undefined
  queryString?: string | undefined
}
type Official = {
  address?: SimpleAddressType[] | undefined
  channels?: Channel[] | undefined
  emails?: string[] | undefined
  geocodingSummaries?: GeocodingSummary[] | undefined
  name?: string | undefined
  party?: string | undefined
  phones?: string[] | undefined
  photoUrl?: string | undefined
  urls?: string[] | undefined
}
type RepresentativeInfoResponse = {
  divisions?: { [x: string]: GeographicDivision } | undefined
  kind?: string | undefined
  normalizedInput?: SimpleAddressType | undefined
  offices?: Office[] | undefined
  officials?: Official[] | undefined
}
type RepresentativeInfoData = {
  divisions?: { [x: string]: GeographicDivision } | undefined
  offices?: Office[] | undefined
  officials?: Official[] | undefined
}
type Candidate = {
  candidateUrl?: string | undefined
  channels?: Channel[] | undefined
  email?: string | undefined
  name?: string | undefined
  orderOnBallot?: string | undefined
  party?: string | undefined
  phone?: string | undefined
  photoUrl?: string | undefined
}
type ElectoralDistrict = {
  id?: string | undefined
  name?: string | undefined
  scope?:
    | 'statewide'
    | 'congressional'
    | 'stateUpper'
    | 'stateLower'
    | 'countywide'
    | 'judicial'
    | 'schoolBoard'
    | 'citywide'
    | 'special'
    | 'countyCouncil'
    | 'township'
    | 'ward'
    | 'cityCouncil'
    | 'national'
    | undefined
}
type Contest = {
  ballotPlacement?: string | undefined
  ballotTitle?: string | undefined
  candidates?: Candidate[] | undefined
  district?: ElectoralDistrict | undefined
  electorateSpecifications?: string | undefined
  level?:
    | (
        | 'international'
        | 'country'
        | 'administrativeArea1'
        | 'regional'
        | 'administrativeArea2'
        | 'locality'
        | 'subLocality1'
        | 'subLocality2'
        | 'special'
      )[]
    | undefined
  numberElected?: string | undefined
  numberVotingFor?: string | undefined
  office?: string | undefined
  primaryParties?: string[] | undefined
  referendumBallotResponses?: string[] | undefined
  referendumBrief?: string | undefined
  referendumConStatement?: string | undefined
  referendumEffectOfAbstain?: string | undefined
  referendumPassageThreshold?: string | undefined
  referendumProStatement?: string | undefined
  referendumSubtitle?: string | undefined
  referendumText?: string | undefined
  referendumTitle?: string | undefined
  referendumUrl?: string | undefined
  roles?:
    | (
        | 'headOfState'
        | 'headOfGovernment'
        | 'deputyHeadOfGovernment'
        | 'governmentOfficer'
        | 'executiveCouncil'
        | 'legislatorUpperBody'
        | 'legislatorLowerBody'
        | 'highestCourtJudge'
        | 'judge'
        | 'schoolBoard'
        | 'specialPurposeOfficer'
        | 'otherRole'
      )[]
    | undefined
  sources?: Source[] | undefined
  special?: string | undefined
  type?: string | undefined
}
type PollingLocation = {
  address?: SimpleAddressType | undefined
  endDate?: string | undefined
  latitude?: number | undefined
  longitude?: number | undefined
  name?: string | undefined
  notes?: string | undefined
  pollingHours?: string | undefined
  sources?: Source[] | undefined
  startDate?: string | undefined
  voterServices?: string | undefined
}
type Precinct = {
  administrationRegionId?: string | undefined
  contestId?: string[] | undefined
  datasetId?: string | undefined
  earlyVoteSiteId?: string[] | undefined
  electoralDistrictId?: string[] | undefined
  id?: string | undefined
  mailOnly?: boolean | undefined
  name?: string | undefined
  number?: string | undefined
  ocdId?: string[] | undefined
  pollingLocationId?: string[] | undefined
  spatialBoundaryId?: string[] | undefined
  splitName?: string | undefined
  ward?: string | undefined
}
type ElectionOfficial = {
  emailAddress?: string | undefined
  faxNumber?: string | undefined
  name?: string | undefined
  officePhoneNumber?: string | undefined
  title?: string | undefined
}
type AdministrativeBody = {
  absenteeVotingInfoUrl?: string | undefined
  ballotInfoUrl?: string | undefined
  correspondenceAddress?: SimpleAddressType | undefined
  electionInfoUrl?: string | undefined
  electionNoticeText?: string | undefined
  electionNoticeUrl?: string | undefined
  electionOfficials?: ElectionOfficial[] | undefined
  electionRegistrationConfirmationUrl?: string | undefined
  electionRegistrationUrl?: string | undefined
  electionRulesUrl?: string | undefined
  hoursOfOperation?: string | undefined
  name?: string | undefined
  physicalAddress?: SimpleAddressType | undefined
  voter_services?: string[] | undefined
  votingLocationFinderUrl?: string | undefined
}
type AdministrationRegion = {
  electionAdministrationBody?: AdministrativeBody | undefined
  local_jurisdiction?: AdministrationRegion | undefined
  name?: string | undefined
  sources?: Source[] | undefined
}
type VoterInfoResponse = {
  contests?: Contest[] | undefined
  dropOffLocations?: PollingLocation[] | undefined
  earlyVoteSites?: PollingLocation[] | undefined
  election?: Election | undefined
  kind?: string | undefined
  mailOnly?: boolean | undefined
  normalizedInput?: SimpleAddressType | undefined
  otherElections?: Election[] | undefined
  pollingLocations?: PollingLocation[] | undefined
  precinctId?: string | undefined
  precincts?: Precinct[] | undefined
  state?: AdministrationRegion[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/civicinfo/v2/divisions': {
      $get: {
        input: {
          query: {
            query?: string | undefined
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
        output: DivisionSearchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/civicinfo/v2/elections': {
      $get: {
        input: {
          query: {
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
        output: ElectionsQueryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/civicinfo/v2/representatives': {
      $get: {
        input: {
          query: {
            address?: string | undefined
            includeOffices?: boolean | undefined
            levels?:
              | (
                  | 'international'
                  | 'country'
                  | 'administrativeArea1'
                  | 'regional'
                  | 'administrativeArea2'
                  | 'locality'
                  | 'subLocality1'
                  | 'subLocality2'
                  | 'special'
                )[]
              | undefined
            roles?:
              | (
                  | 'headOfState'
                  | 'headOfGovernment'
                  | 'deputyHeadOfGovernment'
                  | 'governmentOfficer'
                  | 'executiveCouncil'
                  | 'legislatorUpperBody'
                  | 'legislatorLowerBody'
                  | 'highestCourtJudge'
                  | 'judge'
                  | 'schoolBoard'
                  | 'specialPurposeOfficer'
                  | 'otherRole'
                )[]
              | undefined
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
        output: RepresentativeInfoResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/civicinfo/v2/representatives/:ocdId': {
      $get: {
        input: { param: { ocdId: string } } & {
          query: {
            levels?:
              | (
                  | 'international'
                  | 'country'
                  | 'administrativeArea1'
                  | 'regional'
                  | 'administrativeArea2'
                  | 'locality'
                  | 'subLocality1'
                  | 'subLocality2'
                  | 'special'
                )[]
              | undefined
            recursive?: boolean | undefined
            roles?:
              | (
                  | 'headOfState'
                  | 'headOfGovernment'
                  | 'deputyHeadOfGovernment'
                  | 'governmentOfficer'
                  | 'executiveCouncil'
                  | 'legislatorUpperBody'
                  | 'legislatorLowerBody'
                  | 'highestCourtJudge'
                  | 'judge'
                  | 'schoolBoard'
                  | 'specialPurposeOfficer'
                  | 'otherRole'
                )[]
              | undefined
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
        output: RepresentativeInfoData
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/civicinfo/v2/voterinfo': {
      $get: {
        input: {
          query: {
            address: string
            electionId?: string | undefined
            officialOnly?: boolean | undefined
            returnAllAvailableData?: boolean | undefined
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
        output: VoterInfoResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
