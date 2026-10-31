import { createRoute, z } from '@hono/zod-openapi'

const SimpleAddressTypeSchema = z
  .object({
    city: z.string().exactOptional().openapi({ description: 'The city or town for the address.' }),
    line1: z
      .string()
      .exactOptional()
      .openapi({ description: 'The street name and number of this address.' }),
    line2: z
      .string()
      .exactOptional()
      .openapi({ description: 'The second line the address, if needed.' }),
    line3: z
      .string()
      .exactOptional()
      .openapi({ description: 'The third line of the address, if needed.' }),
    locationName: z.string().exactOptional().openapi({ description: 'The name of the location.' }),
    state: z
      .string()
      .exactOptional()
      .openapi({ description: 'The US two letter state abbreviation of the address.' }),
    zip: z
      .string()
      .exactOptional()
      .openapi({ description: 'The US Postal Zip Code of the address.' }),
  })
  .openapi({ description: 'A simple representation of an address.', required: [] })
  .openapi('SimpleAddressType')

const ElectionOfficialSchema = z
  .object({
    emailAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address of the election official.' }),
    faxNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The fax number of the election official.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full name of the election official.' }),
    officePhoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The office phone number of the election official.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of the election official.' }),
  })
  .openapi({ description: 'Information about individual election officials.', required: [] })
  .openapi('ElectionOfficial')

const AdministrativeBodySchema = z
  .object({
    absenteeVotingInfoUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL provided by this administrative body for information on absentee voting.',
      }),
    ballotInfoUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL provided by this administrative body to give contest information to the voter.',
      }),
    correspondenceAddress: SimpleAddressTypeSchema.exactOptional().openapi({
      description: 'The mailing address of this administrative body.',
    }),
    electionInfoUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL provided by this administrative body for looking up general election information.',
      }),
    electionNoticeText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A last minute or emergency notification text provided by this administrative body.',
      }),
    electionNoticeUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL provided by this administrative body for additional information related to the last minute or emergency notification.',
      }),
    electionOfficials: z
      .array(ElectionOfficialSchema)
      .exactOptional()
      .openapi({ description: 'The election officials for this election administrative body.' }),
    electionRegistrationConfirmationUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL provided by this administrative body for confirming that the voter is registered to vote.',
      }),
    electionRegistrationUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL provided by this administrative body for looking up how to register to vote.',
      }),
    electionRulesUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL provided by this administrative body describing election rules to the voter.',
      }),
    hoursOfOperation: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A description of the hours of operation for this administrative body.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of this election administrative body.' }),
    physicalAddress: SimpleAddressTypeSchema.exactOptional().openapi({
      description: 'The physical address of this administrative body.',
    }),
    voter_services: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A description of the services this administrative body may provide.',
      }),
    votingLocationFinderUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL provided by this administrative body for looking up where to vote.',
      }),
  })
  .openapi({
    description:
      'Information about an election administrative body (e.g. County Board of Elections).',
    required: [],
  })
  .openapi('AdministrativeBody')

const SourceSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The name of the data source.' }),
    official: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this data comes from an official government source.' }),
  })
  .openapi({
    description: 'Contains information about the data source for the element containing it.',
    required: [],
  })
  .openapi('Source')

type AdministrationRegionType = {
  electionAdministrationBody?: z.infer<typeof AdministrativeBodySchema>
  local_jurisdiction?: AdministrationRegionType
  name?: string
  sources?: z.infer<typeof SourceSchema>[]
}

const AdministrationRegionSchema: z.ZodType<AdministrationRegionType> = z
  .lazy(() =>
    z
      .object({
        electionAdministrationBody: AdministrativeBodySchema.exactOptional().openapi({
          description: 'The election administration body for this area.',
        }),
        local_jurisdiction: AdministrationRegionSchema.exactOptional().openapi({
          description:
            'The city or county that provides election information for this voter. This object can have the same elements as state.',
        }),
        name: z.string().exactOptional().openapi({ description: 'The name of the jurisdiction.' }),
        sources: z
          .array(SourceSchema)
          .exactOptional()
          .openapi({
            description:
              'A list of sources for this area. If multiple sources are listed the data has been aggregated from those sources.',
          }),
      })
      .openapi({
        description: 'Describes information about a regional election administrative area.',
        required: [],
      }),
  )
  .openapi('AdministrationRegion')

const ChannelSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: "The unique public identifier for the candidate's channel." }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of channel. The following is a list of types of channels, but is not exhaustive. More channel types may be added at a later time. One of: GooglePlus, YouTube, Facebook, Twitter',
      }),
  })
  .openapi({ description: 'A social media or web channel for a candidate.', required: [] })
  .openapi('Channel')

const CandidateSchema = z
  .object({
    candidateUrl: z
      .string()
      .exactOptional()
      .openapi({ description: "The URL for the candidate's campaign web site." }),
    channels: z
      .array(ChannelSchema)
      .exactOptional()
      .openapi({ description: 'A list of known (social) media channels for this candidate.' }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: "The email address for the candidate's campaign." }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The candidate\'s name. If this is a joint ticket it will indicate the name of the candidate at the top of a ticket followed by a / and that name of candidate at the bottom of the ticket. e.g. "Mitt Romney / Paul Ryan"',
      }),
    orderOnBallot: z
      .string()
      .exactOptional()
      .openapi({ description: 'The order the candidate appears on the ballot for this contest.' }),
    party: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full name of the party the candidate is a member of.' }),
    phone: z
      .string()
      .exactOptional()
      .openapi({ description: "The voice phone number for the candidate's campaign office." }),
    photoUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'A URL for a photo of the candidate.' }),
  })
  .openapi({
    description: 'Information about a candidate running for elected office.',
    required: [],
  })
  .openapi('Candidate')

const ElectoralDistrictSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An identifier for this district, relative to its scope. For example, the 34th State Senate district would have id "34" and a scope of stateUpper.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the district.' }),
    scope: z
      .enum([
        'statewide',
        'congressional',
        'stateUpper',
        'stateLower',
        'countywide',
        'judicial',
        'schoolBoard',
        'citywide',
        'special',
        'countyCouncil',
        'township',
        'ward',
        'cityCouncil',
        'national',
      ])
      .exactOptional()
      .openapi({
        description:
          "The geographic scope of this district. If unspecified the district's geography is not known. One of: national, statewide, congressional, stateUpper, stateLower, countywide, judicial, schoolBoard, cityWide, township, countyCouncil, cityCouncil, ward, special",
      }),
  })
  .openapi({ description: 'Describes the geographic scope of a contest.', required: [] })
  .openapi('ElectoralDistrict')

const ContestSchema = z
  .object({
    ballotPlacement: z
      .string()
      .exactOptional()
      .openapi({
        description: "A number specifying the position of this contest on the voter's ballot.",
      }),
    ballotTitle: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The official title on the ballot for this contest, only where available.',
      }),
    candidates: z
      .array(CandidateSchema)
      .exactOptional()
      .openapi({ description: 'The candidate choices for this contest.' }),
    district: ElectoralDistrictSchema.exactOptional().openapi({
      description: 'Information about the electoral district that this contest is in.',
    }),
    electorateSpecifications: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A description of any additional eligibility requirements for voting in this contest.',
      }),
    level: z
      .array(
        z.enum([
          'international',
          'country',
          'administrativeArea1',
          'regional',
          'administrativeArea2',
          'locality',
          'subLocality1',
          'subLocality2',
          'special',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'The levels of government of the office for this contest. There may be more than one in cases where a jurisdiction effectively acts at two different levels of government; for example, the mayor of the District of Columbia acts at "locality" level, but also effectively at both "administrative-area-2" and "administrative-area-1".',
      }),
    numberElected: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The number of candidates that will be elected to office in this contest.',
      }),
    numberVotingFor: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The number of candidates that a voter may vote for in this contest.',
      }),
    office: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the office for this contest.' }),
    primaryParties: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'If this is a partisan election, the name of the party/parties it is for.',
      }),
    referendumBallotResponses: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The set of ballot responses for the referendum. A ballot response represents a line on the ballot. Common examples might include "yes" or "no" for referenda. This field is only populated for contests of type \'Referendum\'.',
      }),
    referendumBrief: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Specifies a short summary of the referendum that is typically on the ballot below the title but above the text. This field is only populated for contests of type 'Referendum'.",
      }),
    referendumConStatement: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A statement in opposition to the referendum. It does not necessarily appear on the ballot. This field is only populated for contests of type 'Referendum'.",
      }),
    referendumEffectOfAbstain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Specifies what effect abstaining (not voting) on the proposition will have (i.e. whether abstaining is considered a vote against it). This field is only populated for contests of type 'Referendum'.",
      }),
    referendumPassageThreshold: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The threshold of votes that the referendum needs in order to pass, e.g. "two-thirds". This field is only populated for contests of type \'Referendum\'.',
      }),
    referendumProStatement: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A statement in favor of the referendum. It does not necessarily appear on the ballot. This field is only populated for contests of type 'Referendum'.",
      }),
    referendumSubtitle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A brief description of the referendum. This field is only populated for contests of type 'Referendum'.",
      }),
    referendumText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The full text of the referendum. This field is only populated for contests of type 'Referendum'.",
      }),
    referendumTitle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The title of the referendum (e.g. 'Proposition 42'). This field is only populated for contests of type 'Referendum'.",
      }),
    referendumUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A link to the referendum. This field is only populated for contests of type 'Referendum'.",
      }),
    roles: z
      .array(
        z.enum([
          'headOfState',
          'headOfGovernment',
          'deputyHeadOfGovernment',
          'governmentOfficer',
          'executiveCouncil',
          'legislatorUpperBody',
          'legislatorLowerBody',
          'highestCourtJudge',
          'judge',
          'schoolBoard',
          'specialPurposeOfficer',
          'otherRole',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'The roles which this office fulfills.' }),
    sources: z
      .array(SourceSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of sources for this contest. If multiple sources are listed, the data has been aggregated from those sources.',
      }),
    special: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '"Yes" or "No" depending on whether this a contest being held outside the normal election cycle.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The type of contest. Usually this will be 'General', 'Primary', or 'Run-off' for contests with candidates. For referenda this will be 'Referendum'. For Retention contests this will typically be 'Retention'.",
      }),
  })
  .openapi({
    description: "Information about a contest that appears on a voter's ballot.",
    required: [],
  })
  .openapi('Contest')

const DivisionSearchResultSchema = z
  .object({
    aliases: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Other Open Civic Data identifiers that refer to the same division -- for example, those that refer to other political divisions whose boundaries are defined to be coterminous with this one. For example, ocd-division/country:us/state:wy will include an alias of ocd-division/country:us/state:wy/cd:1, since Wyoming has only one Congressional district.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the division.' }),
    ocdId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique Open Civic Data identifier for this division' }),
  })
  .openapi({
    description: 'Represents a political geographic division that matches the requested query.',
    required: [],
  })
  .openapi('DivisionSearchResult')

const DivisionSearchResponseSchema = z
  .object({
    kind: z
      .string()
      .default('civicinfo#divisionSearchResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "civicinfo#divisionSearchResponse".',
      }),
    results: z.array(DivisionSearchResultSchema).exactOptional(),
  })
  .openapi({ description: 'The result of a division search query.', required: [] })
  .openapi('DivisionSearchResponse')

const ElectionSchema = z
  .object({
    electionDay: z
      .string()
      .exactOptional()
      .openapi({ description: 'Day of the election in YYYY-MM-DD format.' }),
    id: z.string().exactOptional().openapi({ description: 'The unique ID of this election.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'A displayable name for the election.' }),
    ocdDivisionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The political division of the election. Represented as an OCD Division ID. Voters within these political jurisdictions are covered by this election. This is typically a state such as ocd-division/country:us/state:ca or for the midterms or general election the entire US (i.e. ocd-division/country:us).',
      }),
    shapeLookupBehavior: z
      .enum(['shapeLookupDefault', 'shapeLookupDisabled', 'shapeLookupEnabled'])
      .exactOptional(),
  })
  .openapi({ description: 'Information about the election that was queried.', required: [] })
  .openapi('Election')

const ElectionsQueryResponseSchema = z
  .object({
    elections: z
      .array(ElectionSchema)
      .exactOptional()
      .openapi({ description: 'A list of available elections' }),
    kind: z
      .string()
      .default('civicinfo#electionsQueryResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "civicinfo#electionsQueryResponse".',
      }),
  })
  .openapi({
    description: 'The list of elections available for this version of the API.',
    required: [],
  })
  .openapi('ElectionsQueryResponse')

const MessageSetSchema = z
  .object({})
  .openapi({ description: "This is proto2's version of MessageSet." })
  .openapi('MessageSet')

const FeatureIdProtoSchema = z
  .object({
    cellId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The S2CellId corresponding to the approximate location of this feature as of when it was first created. This can be of variable accuracy, ranging from the exact centroid of the feature at creation, a very large S2 Cell, or even being completely randomized for locationless features. Cell ids have the nice property that they follow a space-filling curve over the surface of the earth. (See s2cellid.h for details.) WARNING: Clients should only use cell IDs to perform spatial locality optimizations. There is no strict guarantee that the cell ID of a feature is related to the current geometry of the feature in any way.',
      }),
    fprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A 64-bit fingerprint used to identify features. Most clients should rely on MapFacts or OneRing to choose fingerprints. If creating new fprints, the strategy should be chosen so that the chance of collision is remote or non-existent, and the distribution should be reasonably uniform. For example, if the source data assigns unique ids to features, then a fingerprint of the provider name, version, and source id is sufficient.',
      }),
    temporaryData: MessageSetSchema.exactOptional().openapi({
      description:
        'A place for clients to attach arbitrary data to a feature ID. Never set in MapFacts.',
    }),
  })
  .openapi({
    description:
      'A globally unique identifier associated with each feature. We use 128-bit identifiers so that we have lots of bits available to distinguish between features. The feature id currently consists of a 64-bit "cell id" that **sometimes** corresponds to the approximate centroid of the feature, plus a 64-bit fingerprint of other identifying information. See more on each respective field in its comments. Feature ids are first assigned when the data is created in MapFacts. After initial creation of the feature, they are immutable. This means that the only properties that you should rely on are that they are unique, and that cell_ids often - but not always - preserve spatial locality. The degree of locality varies as the feature undergoes geometry changes, and should not in general be considered a firm guarantee of the location of any particular feature. In fact, some locationless features have randomized cell IDs! Consumers of FeatureProtos from Mapfacts are guaranteed that fprints in the id field of features will be globally unique. Using the fprint allows consumers who don\'t need the spatial benefit of cell ids to uniquely identify features in a 64-bit address space. This property is not guaranteed for other sources of FeatureProtos.',
    required: [],
  })
  .openapi('FeatureIdProto')

const GeocodingSummarySchema = z
  .object({
    addressUnderstood: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Represents the best estimate of whether or not the input address was fully understood and the address is correctly componentized. Mirrors the same-name field in geostore.staging.AddressLinkupScoringProto.',
      }),
    featureId: FeatureIdProtoSchema.exactOptional().openapi({
      description: 'The ID of the FeatureProto returned by the geocoder',
    }),
    featureType: z
      .enum([
        'typeAny',
        'typeTransportation',
        'typeRoute',
        'typeDeprecatedHighwayDoNotUse',
        'typeHighway',
        'typeHighway1',
        'typeHighway2',
        'typeHighway3',
        'typeHighway4',
        'typeHighway5',
        'typeHighway6',
        'typeHighway7',
        'typeHighway8',
        'typeHighway9',
        'typeBicycleRoute',
        'typeTrail',
        'typeSegment',
        'typeRoad',
        'typeRailway',
        'typeStandardTrack',
        'typeJrTrack',
        'typeNarrowTrack',
        'typeMonorailTrack',
        'typeSubwayTrack',
        'typeLightRailTrack',
        'typeBroadTrack',
        'typeHighSpeedRail',
        'typeTrolleyTrack',
        'typeFerry',
        'typeFerryBoat',
        'typeFerryTrain',
        'typeVirtualSegment',
        'typeIntersection',
        'typeTransit',
        'typeTransitStation',
        'typeBusStation',
        'typeTramwayStation',
        'typeTrainStation',
        'typeSubwayStation',
        'typeFerryTerminal',
        'typeAirport',
        'typeAirportCivil',
        'typeAirportMilitary',
        'typeAirportMixed',
        'typeHeliport',
        'typeSeaplaneBase',
        'typeAirstrip',
        'typeCableCarStation',
        'typeGondolaLiftStation',
        'typeFunicularStation',
        'typeSpecialStation',
        'typeHorseCarriageStation',
        'typeMonorailStation',
        'typeSeaport',
        'typeTransitStop',
        'typeTransitTrip',
        'typeTransitDeparture',
        'typeTransitLeg',
        'typeTransitLine',
        'typeTransitAgencyDeprecatedValue',
        'typeTransitTransfer',
        'typeSegmentPath',
        'typeRoadSign',
        'typeIntersectionGroup',
        'typePathway',
        'typeRestrictionGroup',
        'typeTollCluster',
        'typePolitical',
        'typeCountry',
        'typeAdministrativeArea',
        'typeAdministrativeArea1',
        'typeUsState',
        'typeGbCountry',
        'typeJpTodoufuken',
        'typeAdministrativeArea2',
        'typeGbFormerPostalCounty',
        'typeGbTraditionalCounty',
        'typeAdministrativeArea3',
        'typeAdministrativeArea4',
        'typeAdministrativeArea5',
        'typeAdministrativeArea6',
        'typeAdministrativeArea7',
        'typeAdministrativeArea8',
        'typeAdministrativeArea9',
        'typeColloquialArea',
        'typeReservation',
        'typeLocality',
        'typeGbPostTown',
        'typeJpGun',
        'typeJpShikuchouson',
        'typeJpSubShikuchouson',
        'typeColloquialCity',
        'typeSublocality',
        'typeUsBorough',
        'typeGbDependentLocality',
        'typeJpOoaza',
        'typeJpKoaza',
        'typeJpGaiku',
        'typeGbDoubleDependentLocality',
        'typeJpChiban',
        'typeJpEdaban',
        'typeSublocality1',
        'typeSublocality2',
        'typeSublocality3',
        'typeSublocality4',
        'typeSublocality5',
        'typeNeighborhood',
        'typeConstituency',
        'typeDesignatedMarketArea',
        'typeSchoolDistrict',
        'typeLandParcel',
        'typeDisputedArea',
        'typePoliceJurisdiction',
        'typeStatisticalArea',
        'typeConstituencyFuture',
        'typePark',
        'typeGolfCourse',
        'typeLocalPark',
        'typeNationalPark',
        'typeUsNationalPark',
        'typeUsNationalMonument',
        'typeNationalForest',
        'typeProvincialPark',
        'typeProvincialForest',
        'typeCampgrounds',
        'typeHikingArea',
        'typeBusiness',
        'typeGovernment',
        'typeBorderCrossing',
        'typeCityHall',
        'typeCourthouse',
        'typeEmbassy',
        'typeLibrary',
        'typeSchool',
        'typeUniversity',
        'typeEmergency',
        'typeHospital',
        'typePharmacy',
        'typePolice',
        'typeFire',
        'typeDoctor',
        'typeDentist',
        'typeVeterinarian',
        'typeTravelService',
        'typeLodging',
        'typeRestaurant',
        'typeGasStation',
        'typeParking',
        'typePostOffice',
        'typeRestArea',
        'typeCashMachine',
        'typeCarRental',
        'typeCarRepair',
        'typeShopping',
        'typeGrocery',
        'typeTouristDestination',
        'typeEcoTouristDestination',
        'typeBirdWatching',
        'typeFishing',
        'typeHunting',
        'typeNatureReserve',
        'typeTemple',
        'typeChurch',
        'typeGurudwara',
        'typeHinduTemple',
        'typeMosque',
        'typeSynagogue',
        'typeStadium',
        'typeBar',
        'typeMovieRental',
        'typeCoffee',
        'typeGolf',
        'typeBank',
        'typeDoodle',
        'typeGrounds',
        'typeAirportGrounds',
        'typeBuildingGrounds',
        'typeCemetery',
        'typeHospitalGrounds',
        'typeIndustrial',
        'typeMilitary',
        'typeShoppingCenter',
        'typeSportsComplex',
        'typeUniversityGrounds',
        'typeDeprecatedTarmac',
        'typeEnclosedTrafficArea',
        'typeParkingLot',
        'typeParkingGarage',
        'typeOffRoadArea',
        'typeBorder',
        'typeBuilding',
        'typeGeocodedAddress',
        'typeNaturalFeature',
        'typeTerrain',
        'typeSand',
        'typeBeach',
        'typeDune',
        'typeRocky',
        'typeIce',
        'typeGlacier',
        'typeBuiltUpArea',
        'typeVegetation',
        'typeShrubbery',
        'typeWoods',
        'typeAgricultural',
        'typeGrassland',
        'typeTundra',
        'typeDesert',
        'typeSaltFlat',
        'typeWater',
        'typeOcean',
        'typeBay',
        'typeBight',
        'typeLagoon',
        'typeSea',
        'typeStrait',
        'typeInlet',
        'typeFjord',
        'typeLake',
        'typeSeasonalLake',
        'typeReservoir',
        'typePond',
        'typeRiver',
        'typeRapids',
        'typeDistributary',
        'typeConfluence',
        'typeWaterfall',
        'typeSpring',
        'typeGeyser',
        'typeHotSpring',
        'typeSeasonalRiver',
        'typeWadi',
        'typeEstuary',
        'typeWetland',
        'typeWaterNavigation',
        'typeFord',
        'typeCanal',
        'typeHarbor',
        'typeChannel',
        'typeReef',
        'typeReefFlat',
        'typeReefGrowth',
        'typeReefExtent',
        'typeReefRockSubmerged',
        'typeIrrigation',
        'typeDam',
        'typeDrinkingWater',
        'typeCurrent',
        'typeWateringHole',
        'typeTectonic',
        'typeWateringHoleDeprecated',
        'typeVolcano',
        'typeLavaField',
        'typeFissure',
        'typeFault',
        'typeLandMass',
        'typeContinent',
        'typeIsland',
        'typeAtoll',
        'typeOceanRockExposed',
        'typeCay',
        'typePeninsula',
        'typeIsthmus',
        'typeElevated',
        'typePeak',
        'typeNunatak',
        'typeSpur',
        'typePass',
        'typePlateau',
        'typeRidge',
        'typeRavine',
        'typeCrater',
        'typeKarst',
        'typeCliff',
        'typeVista',
        'typeDigitalElevationModel',
        'typeUpland',
        'typeTerrace',
        'typeSlope',
        'typeContourLine',
        'typePan',
        'typeUnstableHillside',
        'typeMountainRange',
        'typeUndersea',
        'typeSubmarineSeamount',
        'typeSubmarineRidge',
        'typeSubmarineGap',
        'typeSubmarinePlateau',
        'typeSubmarineDeep',
        'typeSubmarineValley',
        'typeSubmarineBasin',
        'typeSubmarineSlope',
        'typeSubmarineCliff',
        'typeSubmarinePlain',
        'typeSubmarineFractureZone',
        'typeCave',
        'typeRock',
        'typeArchipelago',
        'typePostal',
        'typePostalCode',
        'typePostalCodePrefix',
        'typePremise',
        'typeSubPremise',
        'typeSuite',
        'typePostTown',
        'typePostalRound',
        'typeMetaFeature',
        'typeDataSource',
        'typeLocale',
        'typeTimezone',
        'typeBusinessChain',
        'typePhoneNumberPrefix',
        'typePhoneNumberAreaCode',
        'typeBusinessCorridor',
        'typeAddressTemplate',
        'typeTransitAgency',
        'typeFutureGeometry',
        'typeEvent',
        'typeEarthquake',
        'typeHurricane',
        'typeWeatherCondition',
        'typeTransient',
        'typeEntrance',
        'typeCartographic',
        'typeHighTension',
        'typeSkiTrail',
        'typeSkiLift',
        'typeSkiBoundary',
        'typeWatershedBoundary',
        'typeTarmac',
        'typeWall',
        'typePicnicArea',
        'typePlayGround',
        'typeTrailHead',
        'typeGolfTeeingGround',
        'typeGolfPuttingGreen',
        'typeGolfRough',
        'typeGolfSandBunker',
        'typeGolfFairway',
        'typeGolfHole',
        'typeDeprecatedGolfShop',
        'typeCampingSite',
        'typeDesignatedBarbecuePit',
        'typeDesignatedCookingArea',
        'typeCampfirePit',
        'typeWaterFountain',
        'typeLitterReceptacle',
        'typeLockerArea',
        'typeAnimalEnclosure',
        'typeCartographicLine',
        'typeEstablishment',
        'typeEstablishmentGrounds',
        'typeEstablishmentBuilding',
        'typeEstablishmentPoi',
        'typeEstablishmentService',
        'typeCelestial',
        'typeRoadMonitor',
        'typePublicSpacesAndMonuments',
        'typeStatue',
        'typeTownSquare',
        'typeLevel',
        'typeCompound',
        'typeCompoundGrounds',
        'typeCompoundBuilding',
        'typeCompoundSection',
        'typeTerminalPoint',
        'typeRegulatedArea',
        'typeLogicalBorder',
        'typeDoNotUseReservedToCatchGeneratedFiles',
        'typeUnknown',
      ])
      .exactOptional()
      .openapi({ description: 'The feature type for the FeatureProto returned by the geocoder' }),
    positionPrecisionMeters: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Precision of the center point (lat/long) of the geocoded FeatureProto',
      }),
    queryString: z
      .string()
      .exactOptional()
      .openapi({ description: 'The query sent to the geocoder' }),
  })
  .openapi({
    description: 'Detailed summary of the result from geocoding an address',
    required: [],
  })
  .openapi('GeocodingSummary')

const GeographicDivisionSchema = z
  .object({
    alsoKnownAs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Any other valid OCD IDs that refer to the same division.\\n\\nBecause OCD IDs are meant to be human-readable and at least somewhat predictable, there are occasionally several identifiers for a single division. These identifiers are defined to be equivalent to one another, and one is always indicated as the primary identifier. The primary identifier will be returned in ocd_id above, and any other equivalent valid identifiers will be returned in this list.\\n\\nFor example, if this division's OCD ID is ocd-division/country:us/district:dc, this will contain ocd-division/country:us/state:dc.",
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the division.' }),
    officeIndices: z
      .array(z.uint32())
      .exactOptional()
      .openapi({
        description:
          'List of indices in the offices array, one for each office elected from this division. Will only be present if includeOffices was true (or absent) in the request.',
      }),
  })
  .openapi({ description: 'Describes a political geography.', required: [] })
  .openapi('GeographicDivision')

const OfficeSchema = z
  .object({
    divisionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The OCD ID of the division with which this office is associated.' }),
    levels: z
      .array(
        z.enum([
          'international',
          'country',
          'administrativeArea1',
          'regional',
          'administrativeArea2',
          'locality',
          'subLocality1',
          'subLocality2',
          'special',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'The levels of government of which this office is part. There may be more than one in cases where a jurisdiction effectively acts at two different levels of government; for example, the mayor of the District of Columbia acts at "locality" level, but also effectively at both "administrative-area-2" and "administrative-area-1".',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human-readable name of the office.' }),
    officialIndices: z
      .array(z.uint32())
      .exactOptional()
      .openapi({
        description:
          'List of indices in the officials array of people who presently hold this office.',
      }),
    roles: z
      .array(
        z.enum([
          'headOfState',
          'headOfGovernment',
          'deputyHeadOfGovernment',
          'governmentOfficer',
          'executiveCouncil',
          'legislatorUpperBody',
          'legislatorLowerBody',
          'highestCourtJudge',
          'judge',
          'schoolBoard',
          'specialPurposeOfficer',
          'otherRole',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'The roles which this office fulfills. Roles are not meant to be exhaustive, or to exactly specify the entire set of responsibilities of a given office, but are meant to be rough categories that are useful for general selection from or sorting of a list of offices.',
      }),
    sources: z
      .array(SourceSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of sources for this office. If multiple sources are listed, the data has been aggregated from those sources.',
      }),
  })
  .openapi({
    description: 'Information about an Office held by one or more Officials.',
    required: [],
  })
  .openapi('Office')

const OfficialSchema = z
  .object({
    address: z
      .array(SimpleAddressTypeSchema)
      .exactOptional()
      .openapi({ description: 'Addresses at which to contact the official.' }),
    channels: z
      .array(ChannelSchema)
      .exactOptional()
      .openapi({ description: 'A list of known (social) media channels for this official.' }),
    emails: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The direct email addresses for the official.' }),
    geocodingSummaries: z
      .array(GeocodingSummarySchema)
      .exactOptional()
      .openapi({ description: "Detailed summary about the official's address's geocoding" }),
    name: z.string().exactOptional().openapi({ description: "The official's name." }),
    party: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full name of the party the official belongs to.' }),
    phones: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: "The official's public contact phone numbers." }),
    photoUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'A URL for a photo of the official.' }),
    urls: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: "The official's public website URLs." }),
  })
  .openapi({ description: 'Information about a person holding an elected office.', required: [] })
  .openapi('Official')

const PollingLocationSchema = z
  .object({
    address: SimpleAddressTypeSchema.exactOptional().openapi({
      description: 'The address of the location.',
    }),
    endDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The last date that this early vote site or drop off location may be used. This field is not populated for polling locations.',
      }),
    latitude: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Latitude of the location, in degrees north of the equator. Note this field may not be available for some locations.',
      }),
    longitude: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Longitude of the location, in degrees east of the Prime Meridian. Note this field may not be available for some locations.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the early vote site or drop off location. This field is not populated for polling locations.',
      }),
    notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Notes about this location (e.g. accessibility ramp or entrance to use).',
      }),
    pollingHours: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of when this location is open.' }),
    sources: z
      .array(SourceSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of sources for this location. If multiple sources are listed the data has been aggregated from those sources.',
      }),
    startDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The first date that this early vote site or drop off location may be used. This field is not populated for polling locations.',
      }),
    voterServices: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The services provided by this early vote site or drop off location. This field is not populated for polling locations.',
      }),
  })
  .openapi({
    description:
      'A location where a voter can vote. This may be an early vote site, an election day voting location, or a drop off location for a completed ballot.',
    required: [],
  })
  .openapi('PollingLocation')

const PrecinctSchema = z
  .object({
    administrationRegionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the AdministrationRegion message for this precinct. Corresponds to LocalityId xml tag.',
      }),
    contestId: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'ID(s) of the Contest message(s) for this precinct.' }),
    datasetId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Dataset ID. What datasets our Precincts come from.' }),
    earlyVoteSiteId: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'ID(s) of the PollingLocation message(s) for this precinct.' }),
    electoralDistrictId: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'ID(s) of the ElectoralDistrict message(s) for this precinct.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. A unique identifier for this precinct.' }),
    mailOnly: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Specifies if the precinct runs mail-only elections.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The name of the precinct.' }),
    number: z.string().exactOptional().openapi({ description: 'The number of the precinct.' }),
    ocdId: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Encouraged. The OCD ID of the precinct' }),
    pollingLocationId: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'ID(s) of the PollingLocation message(s) for this precinct.' }),
    spatialBoundaryId: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'ID(s) of the SpatialBoundary message(s) for this precinct. Used to specify a geometrical boundary of the precinct.',
      }),
    splitName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If present, this proto corresponds to one portion of split precinct. Other portions of this precinct are guaranteed to have the same `name`. If not present, this proto represents a full precicnt.',
      }),
    ward: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies the ward the precinct is contained within.' }),
  })
  .openapi({ required: [] })
  .openapi('Precinct')

const RepresentativeInfoDataSchema = z
  .object({
    divisions: z
      .record(z.string(), GeographicDivisionSchema)
      .exactOptional()
      .openapi({
        description:
          'A map of political geographic divisions that contain the requested address, keyed by the unique Open Civic Data identifier for this division.',
      }),
    offices: z
      .array(OfficeSchema)
      .exactOptional()
      .openapi({
        description:
          'Elected offices referenced by the divisions listed above. Will only be present if includeOffices was true in the request.',
      }),
    officials: z
      .array(OfficialSchema)
      .exactOptional()
      .openapi({
        description:
          'Officials holding the offices listed above. Will only be present if includeOffices was true in the request.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RepresentativeInfoData')

const RepresentativeInfoResponseSchema = z
  .object({
    divisions: z
      .record(z.string(), GeographicDivisionSchema)
      .exactOptional()
      .openapi({
        description:
          'A map of political geographic divisions that contain the requested address, keyed by the unique Open Civic Data identifier for this division.',
      }),
    kind: z
      .string()
      .default('civicinfo#representativeInfoResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "civicinfo#representativeInfoResponse".',
      }),
    normalizedInput: SimpleAddressTypeSchema.exactOptional().openapi({
      description: 'The normalized version of the requested address',
    }),
    offices: z
      .array(OfficeSchema)
      .exactOptional()
      .openapi({
        description:
          'Elected offices referenced by the divisions listed above. Will only be present if includeOffices was true in the request.',
      }),
    officials: z
      .array(OfficialSchema)
      .exactOptional()
      .openapi({
        description:
          'Officials holding the offices listed above. Will only be present if includeOffices was true in the request.',
      }),
  })
  .openapi({ description: 'The result of a representative info lookup query.', required: [] })
  .openapi('RepresentativeInfoResponse')

const VoterInfoResponseSchema = z
  .object({
    contests: z
      .array(ContestSchema)
      .exactOptional()
      .openapi({ description: "Contests that will appear on the voter's ballot." }),
    dropOffLocations: z
      .array(PollingLocationSchema)
      .exactOptional()
      .openapi({
        description:
          'Locations where a voter is eligible to drop off a completed ballot. The voter must have received and completed a ballot prior to arriving at the location. The location may not have ballots available on the premises. These locations could be open on or before election day as indicated in the pollingHours field.',
      }),
    earlyVoteSites: z
      .array(PollingLocationSchema)
      .exactOptional()
      .openapi({
        description: 'Locations where the voter is eligible to vote early, prior to election day.',
      }),
    election: ElectionSchema.exactOptional().openapi({
      description: 'The election that was queried.',
    }),
    kind: z
      .string()
      .default('civicinfo#voterInfoResponse')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "civicinfo#voterInfoResponse".',
      }),
    mailOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specifies whether voters in the precinct vote only by mailing their ballots (with the possible option of dropping off their ballots as well).',
      }),
    normalizedInput: SimpleAddressTypeSchema.exactOptional().openapi({
      description: 'The normalized version of the requested address',
    }),
    otherElections: z
      .array(ElectionSchema)
      .exactOptional()
      .openapi({
        description:
          'When there are multiple elections for a voter address, the otherElections field is populated in the API response and there are two possibilities: 1. If the earliest election is not the intended election, specify the election ID of the desired election in a second API request using the electionId field. 2. If these elections occur on the same day, the API doesn?t return any polling location, contest, or election official information to ensure that an additional query is made. For user-facing applications, we recommend displaying these elections to the user to disambiguate. A second API request using the electionId field should be made for the election that is relevant to the user.',
      }),
    pollingLocations: z
      .array(PollingLocationSchema)
      .exactOptional()
      .openapi({ description: 'Locations where the voter is eligible to vote on election day.' }),
    precinctId: z.string().exactOptional(),
    precincts: z
      .array(PrecinctSchema)
      .exactOptional()
      .openapi({
        description:
          'The precincts that match this voter\'s address. Will only be returned for project IDs which have been whitelisted as "partner projects".',
      }),
    state: z
      .array(AdministrationRegionSchema)
      .exactOptional()
      .openapi({
        description:
          'Local Election Information for the state that the voter votes in. For the US, there will only be one element in this array.',
      }),
  })
  .openapi({ description: 'The result of a voter info lookup query.', required: [] })
  .openapi('VoterInfoResponse')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

export const getCivicinfoV2DivisionsRoute = createRoute({
  method: 'get',
  path: '/civicinfo/v2/divisions',
  tags: ['divisions'],
  description: 'Searches for political divisions by their natural name or OCD ID.',
  operationId: 'civicinfo.divisions.search',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The search query. Queries can cover any parts of a OCD ID or a human readable division name. All words given in the query are treated as required patterns. In addition to that, most query operators of the Apache Lucene library are supported. See http://lucene.apache.org/core/2_9_4/queryparsersyntax.html',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DivisionSearchResponseSchema } },
    },
  },
})

export const getCivicinfoV2ElectionsRoute = createRoute({
  method: 'get',
  path: '/civicinfo/v2/elections',
  tags: ['elections'],
  description: 'List of available elections to query.',
  operationId: 'civicinfo.elections.electionQuery',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ElectionsQueryResponseSchema } },
    },
  },
})

export const getCivicinfoV2RepresentativesRoute = createRoute({
  method: 'get',
  path: '/civicinfo/v2/representatives',
  tags: ['representatives'],
  description: 'Looks up political geography and representative information for a single address.',
  operationId: 'civicinfo.representatives.representativeInfoByAddress',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      address: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The address to look up. May only be specified if the field ocdId is not given in the URL',
            in: 'query',
            name: 'address',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeOffices: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to return information about offices and officials. If false, only the top-level district information will be returned.',
            in: 'query',
            name: 'includeOffices',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      levels: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'international',
              'country',
              'administrativeArea1',
              'regional',
              'administrativeArea2',
              'locality',
              'subLocality1',
              'subLocality2',
              'special',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "A list of office levels to filter by. Only offices that serve at least one of these levels will be returned. Divisions that don't contain a matching office will not be returned.",
            explode: true,
            in: 'query',
            name: 'levels',
            schema: {
              items: {
                enum: [
                  'international',
                  'country',
                  'administrativeArea1',
                  'regional',
                  'administrativeArea2',
                  'locality',
                  'subLocality1',
                  'subLocality2',
                  'special',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      roles: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'headOfState',
              'headOfGovernment',
              'deputyHeadOfGovernment',
              'governmentOfficer',
              'executiveCouncil',
              'legislatorUpperBody',
              'legislatorLowerBody',
              'highestCourtJudge',
              'judge',
              'schoolBoard',
              'specialPurposeOfficer',
              'otherRole',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "A list of office roles to filter by. Only offices fulfilling one of these roles will be returned. Divisions that don't contain a matching office will not be returned.",
            explode: true,
            in: 'query',
            name: 'roles',
            schema: {
              items: {
                enum: [
                  'headOfState',
                  'headOfGovernment',
                  'deputyHeadOfGovernment',
                  'governmentOfficer',
                  'executiveCouncil',
                  'legislatorUpperBody',
                  'legislatorLowerBody',
                  'highestCourtJudge',
                  'judge',
                  'schoolBoard',
                  'specialPurposeOfficer',
                  'otherRole',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RepresentativeInfoResponseSchema } },
    },
  },
})

export const getCivicinfoV2RepresentativesOcdIdRoute = createRoute({
  method: 'get',
  path: '/civicinfo/v2/representatives/{ocdId}',
  tags: ['representatives'],
  description: 'Looks up representative information for a single geographic division.',
  operationId: 'civicinfo.representatives.representativeInfoByDivision',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      levels: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'international',
              'country',
              'administrativeArea1',
              'regional',
              'administrativeArea2',
              'locality',
              'subLocality1',
              'subLocality2',
              'special',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "A list of office levels to filter by. Only offices that serve at least one of these levels will be returned. Divisions that don't contain a matching office will not be returned.",
            explode: true,
            in: 'query',
            name: 'levels',
            schema: {
              items: {
                enum: [
                  'international',
                  'country',
                  'administrativeArea1',
                  'regional',
                  'administrativeArea2',
                  'locality',
                  'subLocality1',
                  'subLocality2',
                  'special',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      recursive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If true, information about all divisions contained in the division requested will be included as well. For example, if querying ocd-division/country:us/district:dc, this would also return all DC's wards and ANCs.",
            in: 'query',
            name: 'recursive',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      roles: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'headOfState',
              'headOfGovernment',
              'deputyHeadOfGovernment',
              'governmentOfficer',
              'executiveCouncil',
              'legislatorUpperBody',
              'legislatorLowerBody',
              'highestCourtJudge',
              'judge',
              'schoolBoard',
              'specialPurposeOfficer',
              'otherRole',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "A list of office roles to filter by. Only offices fulfilling one of these roles will be returned. Divisions that don't contain a matching office will not be returned.",
            explode: true,
            in: 'query',
            name: 'roles',
            schema: {
              items: {
                enum: [
                  'headOfState',
                  'headOfGovernment',
                  'deputyHeadOfGovernment',
                  'governmentOfficer',
                  'executiveCouncil',
                  'legislatorUpperBody',
                  'legislatorLowerBody',
                  'highestCourtJudge',
                  'judge',
                  'schoolBoard',
                  'specialPurposeOfficer',
                  'otherRole',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      ocdId: z
        .string()
        .openapi({
          param: {
            description: 'The Open Civic Data division identifier of the division to look up.',
            in: 'path',
            name: 'ocdId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RepresentativeInfoDataSchema } },
    },
  },
})

export const getCivicinfoV2VoterinfoRoute = createRoute({
  method: 'get',
  path: '/civicinfo/v2/voterinfo',
  tags: ['elections'],
  description: "Looks up information relevant to a voter based on the voter's registered address.",
  operationId: 'civicinfo.elections.voterInfoQuery',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      address: z
        .string()
        .openapi({
          param: {
            description: 'The registered address of the voter to look up.',
            in: 'query',
            name: 'address',
            required: true,
            schema: { type: 'string' },
          },
        }),
      electionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The unique ID of the election to look up. A list of election IDs can be obtained at https://www.googleapis.com/civicinfo/{version}/elections. If no election ID is specified in the query and there is more than one election with data for the given voter, the additional elections are provided in the otherElections response field.',
            in: 'query',
            name: 'electionId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      officialOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If set to true, only data from official state sources will be returned.',
            in: 'query',
            name: 'officialOnly',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      returnAllAvailableData: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to true, the query will return the success code and include any partial information when it is unable to determine a matching address or unable to determine the election for electionId=0 queries.',
            in: 'query',
            name: 'returnAllAvailableData',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VoterInfoResponseSchema } },
    },
  },
})
