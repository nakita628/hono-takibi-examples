import { createRoute, z } from '@hono/zod-openapi'

const PlaceCountryIsoSchema = z
  .string()
  .openapi({
    description: '  3 letter country code (ISO 3166-1)\n',
    example: 'GBR',
    title: 'Country',
  })
  .openapi('PlaceCountryIso')

const PlaceDescriptiveNameSchema = z
  .string()
  .openapi({
    description: 'Longer form description of the place.\n',
    example: 'London, United Kingdom',
    title: 'Descriptive Place Name',
  })
  .openapi('PlaceDescriptiveName')

const LanguageSchema = z
  .enum(['en', 'cy', 'ga'])
  .openapi({
    description: 'Language represented by 2 letter ISO Code (639-1)\n',
    title: 'Language',
  })
  .openapi('Language')

const LatitudeSchema = z
  .xor([
    z.string().openapi({ description: 'Empty string `""` if not available' }),
    z.number().min(-90).max(90).openapi({ description: 'Represents latitude', example: 52.938278 }),
  ])
  .openapi({
    description:
      'The latitude of the postcode (WGS84/ETRS89).\n\nCan be a positive or negative decimal. E.g. `51.5083983`.\n\nReturns an empty string if no location data is available. ',
    title: 'Longitude',
  })
  .openapi('Latitude')

const LongitudeSchema = z
  .xor([
    z.string().openapi({ description: 'Empty string `""` if not available' }),
    z
      .number()
      .min(-180)
      .max(180)
      .openapi({ description: 'Represents longitude', example: 0.002823 }),
  ])
  .openapi({
    description:
      'The longitude of the postcode (WGS84/ETRS89).\n\nCan be a positive or negative decimal. E.g. -0.1283983\n\nReturns an empty string if no location data is available. ',
    title: 'Longitude',
  })
  .openapi('Longitude')

const PlaceNameSchema = z
  .string()
  .openapi({ description: 'Place name\n', example: 'London', title: 'Place Name' })
  .openapi('PlaceName')

const GeonamesPlaceSchema = z
  .object({
    admin1_code: z
      .string()
      .min(0)
      .max(20)
      .exactOptional()
      .openapi({ description: 'Fipscode (subject to change to iso code)', example: 'ENG' }),
    admin1_geonameid: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'GeoName ID for first administrative area', example: 5353 }),
    admin1_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of first administrative area', example: 'England' }),
    admin2_code: z
      .string()
      .min(0)
      .max(20)
      .exactOptional()
      .openapi({ description: 'Code for the second administrative division', example: '06' }),
    admin2_geonameid: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'GeoName ID for second administrative area', example: 5353 }),
    admin2_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of second administrative area', example: 'England' }),
    admin3_code: z
      .string()
      .min(0)
      .max(20)
      .exactOptional()
      .openapi({ description: 'Code for third level administrative division', example: '08' }),
    admin4_code: z
      .string()
      .min(0)
      .max(20)
      .exactOptional()
      .openapi({ description: 'Code for fourth level administrative division', example: '07' }),
    alternatenames: z
      .array(
        z.xor([
          z
            .string()
            .min(0)
            .max(40)
            .openapi({ description: 'Alternate name for place', example: 'London' }),
        ]),
      )
      .exactOptional()
      .openapi({ description: 'List of alternate ASCII names' }),
    asciiname: z
      .string()
      .min(0)
      .max(200)
      .exactOptional()
      .openapi({ description: 'Place Name (ASCII)', example: 'London' }),
    cc2: z
      .array(
        z.xor([
          z.string().length(2).openapi({ description: 'Alternate name for place', example: 'IE' }),
        ]),
      )
      .exactOptional()
      .openapi({ description: 'List of other countries codes mapping to this place' }),
    country_code: z
      .string()
      .length(2)
      .exactOptional()
      .openapi({ description: '2 Letter ISO country code', example: 'GB' }),
    dataset: z.literal('geonames').exactOptional(),
    dem: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Digital elevation model', example: 32 }),
    elevation: z.int32().nullable().exactOptional().openapi({ description: 'Elevation in meters' }),
    feature_class: z
      .enum(['A', 'H', 'L', 'P', 'R', 'S', 'T', 'U', 'V'])
      .exactOptional()
      .openapi({ description: 'GeoNames single letter feature code' }),
    feature_code: z
      .string()
      .min(0)
      .max(7)
      .exactOptional()
      .openapi({
        description: 'Full GeoNames feature code (http://www.geonames.org/export/codes.html)',
        example: 'ADM1',
      }),
    geonameid: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Unique identifier for GeoNames place', example: 5353 }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique place ID', example: 'geonames_5353' }),
    latitude: LatitudeSchema.exactOptional(),
    longitude: LongitudeSchema.exactOptional(),
    modification_date: z
      .string()
      .length(10)
      .exactOptional()
      .openapi({ description: 'Datetime format', example: '2015-03-09' }),
    name: z
      .string()
      .min(0)
      .max(200)
      .exactOptional()
      .openapi({ description: 'Place name (UTF8)', example: 'London' }),
    population: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Population at place. Represented as string as it could be a larger than a 32bit integer',
        example: '7392832',
      }),
    timezone: z
      .string()
      .min(0)
      .max(40)
      .exactOptional()
      .openapi({ description: 'The IANA timezone ID', example: 'Europe/London' }),
  })
  .openapi({ required: [] })
  .openapi({
    description: 'Full GeoNames place specification',
    required: [
      'geonameid',
      'name',
      'asciiname',
      'alternatenames',
      'latitude',
      'longitude',
      'feature_class',
      'feature_code',
      'country_code',
      'cc2',
      'admin1_geonameid',
      'admin2_geonameid',
      'admin1_name',
      'admin2_name',
      'admin1_code',
      'admin2_code',
      'admin3_code',
      'admin4_code',
      'population',
      'elevation',
      'dem',
      'timezone',
      'modification_date',
    ],
    title: 'GeoNames Place',
  })
  .openapi('GeonamesPlace')

type PlaceType = {
  country_iso: z.infer<typeof PlaceCountryIsoSchema>
  dataset: 'geonames'
  descriptive_name: z.infer<typeof PlaceDescriptiveNameSchema>
  id: string
  language: z.infer<typeof LanguageSchema>
  latitude: z.infer<typeof LatitudeSchema>
  longitude: z.infer<typeof LongitudeSchema>
  name: z.infer<typeof PlaceNameSchema>
  native?: z.infer<typeof GeonamesPlaceSchema>
}

const AddressLatitudeParamSchema = z
  .float32()
  .min(-90)
  .max(90)
  .openapi({
    description:
      'Latitude query for reverse geocoding.\n\nAn accompanying longitude (lon=) query must be submitted for a valid reverse geocode query.\n',
    example: 51.503541,
    title: 'Latitude',
  })
  .openapi('AddressLatitudeParam')

const AddressLongitudeParamSchema = z
  .float32()
  .min(-90)
  .max(90)
  .openapi({
    description:
      'Longitude query for reverse geocoding.\n\nAn accompanying latitude (lat=) query must be submitted for a valid reverse geocode query.\n',
    example: -0.12767,
    title: 'Longitude',
  })
  .openapi('AddressLongitudeParam')

const PafAdministrativeCountySchema = z
  .string()
  .openapi({
    description:
      'The current administrative county to which the postcode has been assigned.\n\nA Unitary Authority name, where one is present. If there is no Unitary Authority, the County name is used. This information is not static, because County boundaries may change due to administrative changes. Data\n\nsource: ONS',
    example: '',
    title: 'Administrative County',
  })
  .openapi('PafAdministrativeCounty')

const PafBuildingNameSchema = z
  .string()
  .max(50)
  .openapi({
    description:
      'Name of residential or commercial premise. \n\nExamples:\n  - The Manor\n  - 1-2\n  - A\n  - 12A\n  - K\n  - Victoria House',
    example: '',
    title: 'Building Name',
  })
  .openapi('PafBuildingName')

const PafBuildingNumberSchema = z
  .string()
  .max(4)
  .openapi({
    description: 'Number to identify premise on a thoroughfare or dependant thoroughfare.',
    example: '10',
    title: 'Building Number',
  })
  .openapi('PafBuildingNumber')

const PafCountrySchema = z
  .string()
  .openapi({
    description: '  Full country names (ISO 3166)\n',
    example: 'England',
    title: 'Country',
  })
  .openapi('PafCountry')

const PafCountryIsoSchema = z
  .string()
  .openapi({ description: '  3 letter country code (ISO 3166-1)\n', title: 'ISO Country Code (3)' })
  .openapi('PafCountryIso')

const PafCountryIso_2Schema = z
  .string()
  .openapi({ description: ' 2 letter country code (ISO 3166-1)\n', title: 'ISO Country Code (2)' })
  .openapi('PafCountryIso_2')

const PafCountySchema = z
  .string()
  .openapi({
    description:
      'Since postal, administrative or traditional counties may not apply to some addresses, the county field is designed to return whatever county data is available. Normally, the postal county is returned. If this is not present, the county field will fall back to the administrative county. If the administrative county is also not present, the county field will fall back to the traditional county. May be empty in cases where no administrative, postal or traditional county present.',
    example: 'London',
    title: 'County',
  })
  .openapi('PafCounty')

const PafDatasetSchema = z
  .string()
  .openapi({ description: 'Indicates the provenance of an address', title: 'Dataset' })
  .openapi('PafDataset')

const PafDeliveryPointSuffixSchema = z
  .string()
  .openapi({
    description:
      "A unique Royal Mail 2-character code (the first numeric & the second alphabetical), which, when added to the Postcode, enables each live Delivery Point to be uniquely identified. Once the Delivery Point is deleted from PAF the DPS may be reused (although they aren’t reused until all remaining Delivery Points in the range have been allocated). The DPS for a Large User is always '1A' as each Large User has its own Postcode.",
    example: '1A',
    title: 'Delivery Point Suffix',
  })
  .openapi('PafDeliveryPointSuffix')

const PafDepartmentNameSchema = z
  .string()
  .max(60)
  .openapi({
    description:
      'Used to supplment Organisation Name to identify a deparment within the organisation.',
    example: '',
    title: 'Department Name',
  })
  .openapi('PafDepartmentName')

const PafDependantLocalitySchema = z
  .string()
  .max(35)
  .openapi({
    description:
      'When the same thoroughfare name reoccurs in a Post town, it may not be possible to make it dependant on a dependant thoroughfare. In this case the thoroughfare is dependant on a locality. For example if we want to find 1 Back Lane in Huddersfield we see that there are three.',
    example: '',
    title: 'Dependant Locality',
  })
  .openapi('PafDependantLocality')

const PafDependantThoroughfareSchema = z
  .string()
  .max(80)
  .openapi({
    description:
      'Used to supplement thoroughfare. When a thoroughfare name is used twice in the same Post Town, the dependant thoroughfare is added to uniquely indentify a delivery point.',
    example: '',
    title: 'Dependant Thoroughfare',
  })
  .openapi('PafDependantThoroughfare')

const PafDistrictSchema = z
  .string()
  .openapi({
    description: 'The current district/unitary authority to which the postcode has been assigned.',
    example: 'Westminster',
    title: 'District',
  })
  .openapi('PafDistrict')

const PafDoubleDependantLocalitySchema = z
  .string()
  .max(35)
  .openapi({
    description:
      'Used to supplement Dependant Locality. A Double Dependant Locality supplied along with a Dependant Locality if the Dependant Locality exists twice in the same locality.',
    example: '',
    title: 'Double Dependant Locality',
  })
  .openapi('PafDoubleDependantLocality')

const EastingsSchema = z
  .xor([
    z.string().openapi({ description: 'Empty string `""` if not available' }),
    z
      .number()
      .min(0)
      .max(999999)
      .openapi({ description: 'Metres offset east from origin', example: 9382 }),
  ])
  .openapi({
    description:
      'Eastings reference using the [Ordnance Survey National Grid reference system](https://en.wikipedia.org/wiki/Ordnance_Survey_National_Grid).\n\nNorthern Ireland Eastings uses the [Irish Grid Reference System](https://en.wikipedia.org/wiki/Irish_grid_reference_system).\n\nMetres from origin. E.g. `550458`\n\nReturns an empty string if no location data is available. Otherwise a number is returned.',
    title: 'Eastings',
  })
  .openapi('Eastings')

const IDSchema = z
  .string()
  .openapi({
    description: 'Global unique internally generated identifier for an address',
    example: 'paf_8387729',
    title: 'ID',
  })
  .openapi('ID')

const PafLanguageSchema = z
  .string()
  .openapi({
    description: 'Language represented by 2 letter ISO Code (639-1)\n',
    title: 'Language',
  })
  .openapi('PafLanguage')

const PafLine1Schema = z
  .string()
  .openapi({
    description:
      'First Address Line. Often contains premise and thoroughfare information. In the case of a commercial premise, the first line is always the full name of the registered organisation. Never empty.',
    example: 'Prime Minister &amp; First Lord of Treasury',
    title: 'Line 1',
  })
  .openapi('PafLine1')

const PafLine2Schema = z
  .string()
  .openapi({
    description:
      'Second Address Line. Often contains thoroughfare and locality information. May be empty',
    example: '10 Downing Street',
    title: 'Line 2',
  })
  .openapi('PafLine2')

const PafLine3Schema = z
  .string()
  .openapi({ description: 'Third address line. May be empty.', example: '', title: 'Line 3' })
  .openapi('PafLine3')

const NorthingsSchema = z
  .xor([
    z.string().openapi({ description: 'Empty string `""` if not available' }),
    z
      .number()
      .min(0)
      .max(999999)
      .openapi({ description: 'Metres offset north from origin', example: 123932 }),
  ])
  .openapi({
    description:
      'Northings reference using the [Ordnance Survey National Grid reference system](https://en.wikipedia.org/wiki/Ordnance_Survey_National_Grid)\n\nNorthern Ireland Northings uses the [Irish Grid Reference System](https://en.wikipedia.org/wiki/Irish_grid_reference_system)\n\nMetres from origin. E.g. `180458`\n\nReturns an empty string if no location data is available. Otherwise a number is returned  ',
    title: 'Northings',
  })
  .openapi('Northings')

const PafOrganisationNameSchema = z
  .string()
  .max(60)
  .openapi({
    description:
      'Used to supplment Organisation Name to identify a deparment within the organisation',
    example: 'Prime Minister &amp; First Lord Of The Treasury',
    title: 'Organisation Name',
  })
  .openapi('PafOrganisationName')

const PafPoboxSchema = z
  .string()
  .max(6)
  .openapi({
    description:
      'When the PO Box Number field is populated it will contain PO BOX nnnnnn where n represents the PO Box number. Note that the PO Box details can occasionally consist of a combination of numbers and letters. PO Box Numbers are only allocated to Large Users.',
    example: '100',
    title: 'PO Box',
  })
  .openapi('PafPobox')

const PafPostTownSchema = z
  .string()
  .max(30)
  .openapi({
    description:
      'A Post Town is mandatory for delivery of mail to a Delivery Point. This is not necessarily the nearest town geographically, but a routing instruction to the Royal Mail delivery office sorting mail for that Delivery Point. A Post Town will always be present in every address, and for some Localities the Post Town will be the only locality element present.',
    example: 'London',
    title: 'Post Town',
  })
  .openapi('PafPostTown')

const PafPostalCountySchema = z
  .string()
  .openapi({
    description:
      'Postal counties were used for the distribution of mail before the Postcode system was introduced in the 1970s. The Former Postal County was the Administrative County at the time. This data rarely changes. May be empty.',
    example: 'London',
    title: 'Postal County',
  })
  .openapi('PafPostalCounty')

const PafPostcodeSchema = z
  .string()
  .min(6)
  .max(8)
  .openapi({
    description: 'Correctly formatted postcode. Capitalised and spaced.',
    example: 'SW1A 2AA',
    title: 'Postcode',
  })
  .openapi('PafPostcode')

const PafPostcodeInwardSchema = z
  .string()
  .length(3)
  .openapi({
    description:
      'The second part of a postcode is known as the inward code. e.g. The inward code of ID1 1QD is 1QD.\n\nThe number identifies the sector in the postal district. The number is followed by 2 letters. The letters then define one or more properties in that sector.',
    example: '2AA',
    title: 'Postcode Inward',
  })
  .openapi('PafPostcodeInward')

const PafPostcodeOutwardSchema = z
  .string()
  .min(2)
  .max(4)
  .openapi({
    description:
      'The first part of a postcode is known as the outward code. e.g. The outward code of ID1 1QD is ID1. Enables mail to be sorted to the correct local area for delivery. This part of the code contains the area and the district to which the mail is to be delivered, e.g. ‘PO1’, ‘SW1A’ or ‘B23’.',
    example: 'SW1A',
    title: 'Postcode Outward',
  })
  .openapi('PafPostcodeOutward')

const PafPostcodeTypeSchema = z
  .enum(['S', 'L'])
  .openapi({
    description:
      "This indicates the type of user. It can only take the values 'S' or 'L' indicating small or large respectively. Large User Postcodes. These are assigned to one single address either due to the large volume of mail received at that address, or because a PO Box or Selectapost service has been set up. Small User Postcodes. These identify a group of Delivery Points.\n\nOn average there are 15 Delivery Points per Postcode. However this can vary between 1 and, in some cases, 100. There will never be more than 100 Delivery Points on a Postcode.",
    title: 'Postcode Type',
  })
  .openapi('PafPostcodeType')

const PafPremiseSchema = z
  .string()
  .max(84)
  .openapi({
    description:
      "A pre-computed string which sensibly combines building_number, building_name and sub_building_name. building_number, building_name and sub_building_name represent raw data from Royal Mail's and can be difficult to parse if you are unaware of how the Postcode Address File premise fields work together. For this reason, we also provide a pre-computed premise field which intelligently gathers these points into a single, simple premise string. This field is ideal if you want to pull premise information and thoroughfare information separately instead of using our address lines data.",
    example: '10',
    title: 'Premise',
  })
  .openapi('PafPremise')

const PafSuOrganisationIndicatorSchema = z
  .string()
  .openapi({
    description:
      "Small User Organisation Indicator can have the values 'Y' or space. A value of 'Y' indicates that a Small User Organisation is present at this address.",
    example: 'Y',
    title: 'Small User Organisation Indicator',
  })
  .openapi('PafSuOrganisationIndicator')

const PafSubBuildingNameSchema = z
  .string()
  .max(30)
  .openapi({
    description:
      'When a premise is split into individual units such as flats, apartments or business units. Cannot be present without either building_name or building_number. E.g. Flat 1, A, 10B',
    example: 'Flat 1',
    title: 'Sub-Building Name',
  })
  .openapi('PafSubBuildingName')

const PafThoroughfareSchema = z
  .string()
  .max(80)
  .openapi({
    description:
      'Also known as the street or road name. In general each Thoroughfare Name will have a separate Postcode. Longer Thoroughfares with high number ranges often have multiple Postcodes covering the entire length of the road, with breaks at suitable points e.g. junctions or natural breaks in the road.',
    example: 'Downing Street',
    title: 'Thoroughfare',
  })
  .openapi('PafThoroughfare')

const PafTraditionalCountySchema = z
  .string()
  .openapi({
    description:
      'Traditional counties are provided by the Association of British Counties. It is historical data, and can date from the 1800s. May be empty.',
    example: 'Greater London',
    title: 'Traditional County',
  })
  .openapi('PafTraditionalCounty')

const PafUdprnSchema = z
  .int32()
  .openapi({
    description:
      'UDPRN stands for ‘Unique Delivery Point Reference Number’. Royal Mail assigns a unique UDPRN code for each premise on PAF. Simple, unique reference number for each Delivery Point. Unlikely to be reused when an address expires.\n\nUp to 8-digit numeric code.\n\nA new UDPRN is automatically assigned to each new Delivery Point added to PAF.',
    example: 23747771,
    title: 'Unique Delivery Point Reference Number (UDPRN)',
  })
  .openapi('PafUdprn')

const PafUmprnSchema = z
  .xor([
    z
      .string()
      .openapi({
        description: 'If premise is not multiple occupancy, this will be an empty string',
      }),
    z
      .number()
      .min(0)
      .max(99999999)
      .openapi({
        description: 'If premise is multiple occupancy, this will be an integer',
        example: 983729,
      }),
  ])
  .openapi({
    description:
      'A small minority of individual premises (as identified by a UDPRN) may have multiple occupants behind the same letterbox. These are known as Multiple Residence occupants and can be queried via the Multiple Residence dataset. Simple, unique reference number for each Multiple Residence occupant.\n\nNote: this will be an empty string `""` when not used.',
    title: 'UMPRN',
  })
  .openapi('PafUmprn')

const PafUprnSchema = z
  .string()
  .openapi({
    description:
      'UPRN stands for Unique Property Reference Number and is maintained by the Ordnance Survey (OS). Local governments in the UK have allocated a unique number for each land or property.\n\nUp to 12 digits in length.\n\nMultiple Residence premises currently share the same UPRN as the parent premise.\n\nMay not be available for a small number of Great Britain addresses due to longer update cycles for Ordnance Survey\'s AddressBase datasets. Returns empty string "" in these instances.\n\nAlthough UPRN takes an integer format, we encode and transmit this data as strings. As a 12 digit number, the UPRN can exceed the maximum safe integer `Number.MAX_SAFE_INTEGER` in most browsers causing this datapoint to be corrupted.\n\nTake special care when storing UPRN. As a 12 digit identifier, you will need 64 bits to encode every possible UPRN value. This means applications like Excel will corrupt cells containing UPRN values.',
    title: 'Unique Property Reference Number',
  })
  .openapi('PafUprn')

const PafWardSchema = z
  .string()
  .openapi({
    description:
      'The current administrative/electoral area to which the postcode has been assigned. May be empty for a small number of addresses.',
    example: "St. James'",
    title: 'Ward',
  })
  .openapi('PafWard')

const PafBaseSchema = z
  .object({
    administrative_county: PafAdministrativeCountySchema,
    building_name: PafBuildingNameSchema,
    building_number: PafBuildingNumberSchema,
    country: PafCountrySchema,
    country_iso: PafCountryIsoSchema,
    country_iso_2: PafCountryIso_2Schema,
    county: PafCountySchema,
    county_code: z
      .string()
      .openapi({
        description: 'Short code representing the county or province. May be empty (`""`)',
        example: '',
        title: 'County Code',
      }),
    dataset: PafDatasetSchema,
    delivery_point_suffix: PafDeliveryPointSuffixSchema,
    department_name: PafDepartmentNameSchema,
    dependant_locality: PafDependantLocalitySchema,
    dependant_thoroughfare: PafDependantThoroughfareSchema,
    district: PafDistrictSchema,
    double_dependant_locality: PafDoubleDependantLocalitySchema,
    eastings: EastingsSchema,
    id: IDSchema,
    language: PafLanguageSchema,
    latitude: LatitudeSchema,
    line_1: PafLine1Schema,
    line_2: PafLine2Schema,
    line_3: PafLine3Schema,
    longitude: LongitudeSchema,
    northings: NorthingsSchema,
    organisation_name: PafOrganisationNameSchema,
    po_box: PafPoboxSchema,
    post_town: PafPostTownSchema,
    postal_county: PafPostalCountySchema,
    postcode: PafPostcodeSchema,
    postcode_inward: PafPostcodeInwardSchema,
    postcode_outward: PafPostcodeOutwardSchema,
    postcode_type: PafPostcodeTypeSchema,
    premise: PafPremiseSchema,
    su_organisation_indicator: PafSuOrganisationIndicatorSchema,
    sub_building_name: PafSubBuildingNameSchema,
    thoroughfare: PafThoroughfareSchema,
    traditional_county: PafTraditionalCountySchema,
    udprn: PafUdprnSchema,
    umprn: PafUmprnSchema,
    uprn: PafUprnSchema,
    ward: PafWardSchema,
  })
  .openapi({
    required: [
      'postcode',
      'postcode_outward',
      'postcode_inward',
      'post_town',
      'dependant_locality',
      'double_dependant_locality',
      'thoroughfare',
      'dependant_thoroughfare',
      'building_number',
      'building_name',
      'sub_building_name',
      'po_box',
      'department_name',
      'organisation_name',
      'udprn',
      'umprn',
      'postcode_type',
      'su_organisation_indicator',
      'delivery_point_suffix',
      'line_1',
      'line_2',
      'line_3',
      'premise',
      'country',
      'administrative_county',
      'postal_county',
      'traditional_county',
      'district',
      'ward',
      'longitude',
      'latitude',
      'eastings',
      'northings',
      'uprn',
      'county',
      'county_code',
      'id',
      'dataset',
      'country_iso',
      'country_iso_2',
      'language',
    ],
  })
  .openapi('PafBase')

const PafAddressSchema = PafBaseSchema.and(
  z
    .object({
      country: z
        .enum([
          'England',
          'Scotland',
          'Wales',
          'Northern Ireland',
          'Jersey',
          'Guernsey',
          'Isle of Man',
        ])
        .exactOptional(),
      country_iso: z.enum(['GBR', 'IMN', 'JEY', 'GGY']).exactOptional(),
      country_iso_2: z.enum(['GB', 'IM', 'JE', 'GG']).exactOptional(),
      dataset: z.literal('paf').exactOptional(),
      language: z.literal('en').exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description:
      'Standard UK Address. Also known as a Postcode Address File (PAF) address is defined by Royal Mail and updated on a daily cadence.\n\nA PAF Address represents a deliverable endpoint.',
    title: 'Postcode Address File Address',
  })
  .openapi('PafAddress')

const MrAddressSchema = PafBaseSchema.and(
  z
    .object({
      country: z
        .enum([
          'England',
          'Scotland',
          'Wales',
          'Northern Ireland',
          'Jersey',
          'Guernsey',
          'Isle of Man',
        ])
        .exactOptional(),
      country_iso: z.enum(['GBR', 'IMN', 'JEY', 'GGY']).exactOptional(),
      country_iso_2: z.enum(['GB', 'IM', 'JE', 'GG']).exactOptional(),
      dataset: z.literal('mr').exactOptional(),
      language: z.literal('en').exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description:
      'Subdivision of a Postcode Address File address. Also known as a Multiple Residence or Multiple Occupancy address.\n\nA Multiple Residence address does not have its own deliverable endpoint. Instead it relies on the deliverable endpoint of a parent address, where the parent address can be found on the main Postcode Address File.\n',
    title: 'Multiple Residence Address',
  })
  .openapi('MrAddress')

const NybAddressSchema = PafBaseSchema.and(
  z
    .object({
      country: z
        .enum([
          'England',
          'Scotland',
          'Wales',
          'Northern Ireland',
          'Jersey',
          'Guernsey',
          'Isle of Man',
        ])
        .exactOptional(),
      country_iso: z.enum(['GBR', 'IMN', 'JEY', 'GGY']).exactOptional(),
      country_iso_2: z.enum(['GB', 'IM', 'JE', 'GG']).exactOptional(),
      dataset: z.literal('nyb').exactOptional(),
      language: z.literal('en').exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description:
      'A UK premise under construction and currently not occupied.\n\nThis dataset is updated by Royal Mail on a monthly cadence.',
    title: 'Not Yet Built Address',
  })
  .openapi('NybAddress')

const WelshPafAddressSchema = PafBaseSchema.and(
  z
    .object({
      country: z.literal('Wales').exactOptional(),
      country_iso: z.literal('GBR').exactOptional(),
      country_iso_2: z.literal('GB').exactOptional(),
      dataset: z.literal('pafw').exactOptional(),
      language: z.literal('cy').exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description: 'Welsh language alternative for a PAF Address',
    title: 'Welsh PAF Address',
  })
  .openapi('WelshPafAddress')

const PafAliasAddressSchema = PafBaseSchema.and(
  z
    .object({
      country: z
        .enum([
          'England',
          'Scotland',
          'Wales',
          'Northern Ireland',
          'Jersey',
          'Guernsey',
          'Isle of Man',
        ])
        .exactOptional(),
      country_iso: z.enum(['GBR', 'IMN', 'JEY', 'GGY']).exactOptional(),
      country_iso_2: z.enum(['GB', 'IM', 'JE', 'GG']).exactOptional(),
      dataset: z.literal('pafa').exactOptional(),
      language: z.literal('en').exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description:
      'PAF Aliases addresses are alternate ways to present an address already found on PAF.\n\nAlias data is information the public chooses to use when addressing mail, but which isn’t actually required for delivery purposes.  The Alias data contains records of alternative address details that are included in the address but not necessarily needed for delivery purposes.',
    title: 'PAF Alias Address',
  })
  .openapi('PafAliasAddress')

const AddressResponseSchema = z
  .object({
    code: z.literal(2000),
    message: z.literal('Success'),
    result: z
      .object({
        hits: z
          .array(
            z.xor([
              PafAddressSchema,
              MrAddressSchema,
              NybAddressSchema,
              WelshPafAddressSchema,
              PafAliasAddressSchema,
            ]),
          )
          .openapi({ description: 'List of matching addresses\n' }),
        limit: z.int32().min(0).max(100).default(10).openapi({ example: 10 }),
        page: z.int32().min(0).max(10).default(0).openapi({ example: 0 }),
        total: z.int32().min(0).max(10000),
      })
      .openapi({ required: ['hits', 'total', 'limit', 'page'] }),
  })
  .openapi({ required: ['message', 'code', 'result'], title: 'Address Search Response' })
  .openapi('AddressResponse')

const AddressSuggestionSchema = z
  .object({
    id: IDSchema,
    suggestion: z
      .string()
      .openapi({
        description: 'Address Suggestion to be displayed to the user',
        example: 'Flat 6, 12 Roskear, Camborne, TR14',
      }),
    urls: z.object({}),
  })
  .openapi({
    description: 'Represents an address suggestion for any address in the world',
    required: ['id', 'suggestion', 'urls'],
    title: 'Address Suggestion',
  })
  .openapi('AddressSuggestion')

const ContextSchema = z
  .string()
  .openapi({
    description: 'Limits search results within a geographical boundary or country.',
    title: 'Context',
  })
  .openapi('Context')

const NoContextSchema = z
  .literal('')
  .openapi({
    description: 'Empty string if no context is provided or key check has failed',
    title: 'No Context Provided',
  })
  .openapi('NoContext')

const AvailableContextsSchema = z
  .array(
    z
      .object({
        description: z
          .string()
          .openapi({
            description: 'Country descriptor to show in Address Finder\n',
            example: 'United States',
          }),
        emoji: z.string().openapi({ description: 'Emoji text icon', example: '🇺🇸' }),
        iso_2: z.string().openapi({ description: '2 letter ISO code', example: 'US' }),
        iso_3: z.string().openapi({ description: '3 letter ISO code', example: 'USA' }),
        rgeo: z
          .boolean()
          .openapi({
            description: 'Indicates availability of reverse geolocation search\n',
            example: true,
          }),
      })
      .openapi({ required: ['iso_3', 'iso_2', 'description', 'emoji', 'rgeo'] }),
  )
  .openapi({ description: 'A list of available contexts for a key', title: 'Available Contexts' })
  .openapi('AvailableContexts')

const ApiKeySchema = z
  .object({
    available: z
      .boolean()
      .openapi({
        description:
          'Determines whether the key can be used by the requesting agent. \n\nReturns false if one of the following conditions are met:\n  - Key has no lookups remaining\n  - Daily limit has been reached on the key\n  - Daily individual limit has been reached\n  - Key is not being used via an authorised URL\n  - (Sublicensed key only) Key has a valid licensee attached\n  - (Sublicensed key only) Key is not being used via an authorised URL specified by licensee\n',
        example: true,
      }),
    context: z
      .xor([ContextSchema, NoContextSchema])
      .openapi({
        description:
          'Returns current context if it is in the list of available contexts for this key.\n',
      }),
    contexts: AvailableContextsSchema,
  })
  .openapi({ required: ['available', 'context', 'contexts'], title: 'Key' })
  .openapi('ApiKey')

const ApiKeyAutomatedTopupSchema = z
  .object({
    enabled: z
      .boolean()
      .openapi({ description: 'Indicates whether automated top-ups are enabled', example: true }),
  })
  .openapi({
    description: 'Automated topup status',
    required: ['enabled'],
    title: 'API Key Automated Topup',
  })
  .openapi('ApiKeyAutomatedTopup')

const ApiKeyCurrentPurchaseSchema = z
  .object({
    consumed: z
      .int32()
      .min(0)
      .openapi({ description: 'Number of consumed lookups off this purchase.', example: 121 }),
    expires: z
      .string()
      .openapi({
        description:
          '`string` or `null` The date when this purchase will expire in simplified \nextended ISO format (ISO 8601). This is typically 365 days from the time \nof first use. This field will be `null` if the purchase has not yet been \nused.',
        example: '2022-01-06T11:41:27.092Z',
        'x-nullable': true,
      }),
    purchased: z
      .int32()
      .min(0)
      .openapi({ description: 'Number of procured lookups from this purchase.', example: 20000 }),
  })
  .openapi({ required: ['expires', 'purchased', 'consumed'], title: 'API Key Batch Purchase' })
  .openapi('ApiKeyCurrentPurchase')

const ApiKeyDailyLimitSchema = z
  .object({
    consumed: z
      .int32()
      .min(0)
      .openapi({
        description: 'Number of lookups performed today which count towards your daily limit.',
        example: 288,
      }),
    limit: z
      .int32()
      .min(0)
      .openapi({
        description:
          '`number` or `null`. The daily lookup limit currently set on your key. \n`null` means the limit is currently disabled.',
        example: 1000,
        'x-nullable': true,
      }),
  })
  .openapi({ required: ['limit', 'consumed'], title: 'API Key Daily Limit' })
  .openapi('ApiKeyDailyLimit')

const ApiKeyDatasetsSchema = z
  .object({
    ecad: z
      .boolean()
      .openapi({ description: 'IE Address File. Eircode Address Database', example: false }),
    ecaf: z
      .boolean()
      .openapi({ description: 'IE Base Address File. Eircode Address File', example: false }),
    herewe: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Western Europe Address File', example: true }),
    mr: z.boolean().openapi({ description: 'UK Multiple Residence Dataset', example: true }),
    nyb: z.boolean().openapi({ description: 'UK Not Yet Built Dataset', example: false }),
    paf: z
      .boolean()
      .openapi({ description: 'UK Main Address File (Postcode Address File)', example: true }),
    pafa: z.boolean().openapi({ description: 'UK Property Alias dataset', example: false }),
    pafw: z.boolean().openapi({ description: 'UK Welsh Language Dataset', example: false }),
    usps: z.boolean().openapi({ description: 'US Address Dataset', example: true }),
  })
  .openapi({
    description:
      'Indicates which datasets are available and added by default to the address responses',
    required: ['paf', 'mr', 'nyb', 'pafa', 'pafw', 'ecad', 'ecaf', 'usps'],
    title: 'API Key Dataset Availability',
  })
  .openapi('ApiKeyDatasets')

const ApiKeyIndividualLimitSchema = z
  .object({
    limit: z
      .int32()
      .min(0)
      .openapi({
        description:
          '`number` or `null` Limit set on the number of lookups that can be \nperformed from a single IP address. `null` means the limit is currently \ndisabled.',
        example: 30,
        'x-nullable': true,
      }),
  })
  .openapi({ required: ['limit'], title: 'API Key Individual Limit' })
  .openapi('ApiKeyIndividualLimit')

const ApiKeyNotificationsSchema = z
  .object({
    emails: z
      .array(z.string().openapi({ example: 'person@example.com' }))
      .openapi({
        description:
          'A list of email addresses designated by you to receive notifications about this key.',
      }),
    enabled: z
      .boolean()
      .openapi({ description: 'Indicates whether email notifications are enabled.' }),
  })
  .openapi({ required: ['emails', 'enabled'], title: 'API Key Notifications' })
  .openapi('ApiKeyNotifications')

const ApiKeyDetailsSchema = z
  .object({
    allowed_urls: z
      .array(z.string())
      .openapi({
        description: 'A list of allowed URLs. An empty list means that allowed URLs are disabled.',
      }),
    automated_topups: ApiKeyAutomatedTopupSchema,
    current_purchases: z
      .array(ApiKeyCurrentPurchaseSchema)
      .openapi({ description: 'Current balance purchases attached to key.' }),
    daily_limit: ApiKeyDailyLimitSchema,
    datasets: ApiKeyDatasetsSchema.exactOptional(),
    individual_limit: ApiKeyIndividualLimitSchema,
    lookups_remaining: z.int32().min(0).openapi({ example: 19889 }),
    notifications: ApiKeyNotificationsSchema.exactOptional(),
  })
  .openapi({
    required: [
      'lookups_remaining',
      'daily_limit',
      'individual_limit',
      'allowed_urls',
      'notificatinos',
      'automated_topups',
      'current_purchases',
    ],
    title: 'API Key Details',
  })
  .openapi('ApiKeyDetails')

const ApiKeyDetailsResponseSchema = z
  .object({ code: z.literal(2000), message: z.literal('Success'), result: ApiKeyDetailsSchema })
  .openapi({ required: ['message', 'code', 'result'], title: 'API Key Details Response' })
  .openapi('ApiKeyDetailsResponse')

const ApiKeyParamSchema = z
  .string()
  .openapi({
    description: 'Your API Key. Typically beings `ak_`.\n\nAvailable from your dashboard\n',
    example: 'ak_test',
    title: 'API Key',
  })
  .openapi('ApiKeyParam')

const ApiKeyResponseSchema = z
  .object({ code: z.literal(2000), message: z.literal('Success'), result: ApiKeySchema })
  .openapi({ required: ['message', 'code', 'result'], title: 'API Key Response' })
  .openapi('ApiKeyResponse')

const KeyUsageResultSchema = z
  .object({
    dailyCount: z
      .array(
        z
          .object({
            count: z.int32().openapi({ example: 132 }),
            date: z.string().openapi({ example: '2015-01-22T00:00:00.000Z' }),
          })
          .openapi({ required: ['date', 'count'] }),
      )
      .openapi({
        description:
          'An array of objects representing number of paid lookups made on specific days, ordered by date. Each object contains a `date` attribute, which represents the day and a `count` attribute, which represents the number of paid lookups made on that day.\n',
      }),
    end: z
      .string()
      .openapi({
        description: 'End date in ISO 8601 format.',
        example: '2015-01-23T15:08:06.609Z',
      }),
    start: z
      .string()
      .openapi({
        description: 'Start date in ISO 8601 format.',
        example: '2015-01-22T15:08:06.609Z',
      }),
    total: z
      .int32()
      .openapi({
        description: 'Total of paid lookups performed in specified period.',
        example: 132,
      }),
  })
  .openapi({ required: ['start', 'end', 'total', 'dailyCount'], title: 'Key Usage' })
  .openapi('KeyUsageResult')

const ApiKeyUsageResponseSchema = z
  .object({ code: z.literal(2000), message: z.literal('Success'), result: KeyUsageResultSchema })
  .openapi({ required: ['message', 'code', 'result'], title: 'Key Usage Response' })
  .openapi('ApiKeyUsageResponse')

const UkAddressSuggestionSchema = z
  .object({
    id: IDSchema,
    suggestion: z
      .string()
      .openapi({
        description: 'Address suggestion for a given query.',
        example: 'Flat 6, 12 Roskear, Camborne, TR14',
      }),
    udprn: PafUdprnSchema,
    umprn: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Optionally returned field, representing the UMPRN of a Multiple Residence household',
        example: 51103417,
      }),
    urls: z
      .object({
        udprn: z
          .string()
          .openapi({
            description:
              'URL to retrieve the entire details for a given address suggestion by the UDPRN',
            example: '/v1/udprn/50985827',
          }),
        umprn: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Optionally returned field, to retrieve the entire details for a suggested Multiple Residence household',
            example: '/v1/umprn/51103417',
          }),
      })
      .openapi({ required: ['udprn'] }),
  })
  .openapi({
    description:
      "Represents a possible address given an autocomplete query.\n\nUK Address Suggestions will return a UDPRN attribute if it references a deliverable endpoint found on Royal Mail's Postcode Address File dataset.\n\nUK Address Suggestion will return a UMPRN if it references a multiple occupancy premise found on Royal Mail's Multiple Residence dataset.\n",
    required: ['id', 'suggestion', 'udprn', 'urls'],
    title: 'UK Address Suggestion',
  })
  .openapi('UkAddressSuggestion')

const AutocompleteResponseSchema = z
  .object({
    code: z.literal(2000),
    message: z.literal('Success'),
    result: z
      .object({ hits: z.array(z.xor([AddressSuggestionSchema, UkAddressSuggestionSchema])) })
      .openapi({ required: ['hits'] }),
  })
  .openapi({ required: ['message', 'code', 'result'], title: 'Address Autocomplete Response' })
  .openapi('AutocompleteResponse')

const ErrorResponseSchema = z
  .object({
    code: z
      .int32()
      .openapi({
        description:
          'API Response Code. Non `2xxx` code indicates a failure. This code will provide a more specific reason when a failure occurs and facilitates debugging.',
      }),
    message: z
      .string()
      .openapi({ description: 'Human readable error message supplied with every error response.' }),
  })
  .openapi({ required: ['code', 'message'], title: 'Basic Error Response' })
  .openapi('ErrorResponse')

const BadRequestResponseSchema = ErrorResponseSchema.and(
  z
    .object({
      code: z.int32().openapi({ description: '`400X` type error response code' }),
      errors: z
        .array(
          z
            .object({
              errorCode: z
                .string()
                .exactOptional()
                .openapi({ example: 'required.openapi.validation' }),
              message: z
                .string()
                .openapi({
                  description: 'Indicates location of error in request query or URL parameter',
                  example: "should have required property 'type'",
                }),
              path: z
                .string()
                .openapi({
                  description: 'Indicates location of error in request query or URL parameter',
                  example: '.query.type',
                }),
            })
            .openapi({ required: ['path', 'message'] }),
        )
        .exactOptional(),
      message: z.string().openapi({ description: 'Bad request error description' }),
    })
    .openapi({ required: ['code', 'message'] }),
)
  .openapi({ title: 'Bad Request Error Response' })
  .openapi('BadRequestResponse')

const BiasCountryIsoParamSchema = z
  .string()
  .openapi({
    description:
      'Bias by country ISO code. Uses 3 letter country code (ISO 3166-1) standard.\nBias by multiple countries with a comma separated list. E.g. `GBR,IRL`',
    example: 'GBR',
    title: 'Country',
  })
  .openapi('BiasCountryIsoParam')

const BiasCountryParamSchema = z
  .string()
  .openapi({
    description:
      'Bias by country. Possible values are England, Scotland, Wales, Northern Ireland, Jersey, Guernsey and Isle of Man.',
    title: 'Bias Country',
  })
  .openapi('BiasCountryParam')

const BiasIpParamSchema = z
  .literal('true')
  .openapi({
    description:
      'Biases search based on approximate geolocation of IP address.\nSet `bias_ip=true` to enable.',
    example: 'true',
    title: 'Bias query by Geolocation of IP',
  })
  .openapi('BiasIpParam')

const BiasLonLatParamSchema = z
  .string()
  .openapi({
    description:
      'Bias search to a geospatial circle determined by an origin and radius in meters. Max radius is `50000`.  Uses the format bias_lonlat=[longitude],[latitude],[radius in metres] Only one geospatial bias may be provided',
    example: '-2.095,57.15,100',
    title: 'Bias Lon/Lat',
  })
  .openapi('BiasLonLatParam')

const BiasPostcodeAreaParamSchema = z
  .string()
  .openapi({
    description:
      'Bias by postcode area, the first one or two non-numeric characters of a postcode.',
    example: 'The postcode area of SW1A 2AA and N1 6RT are SW and N respectively',
    title: 'Bias Postcode Area',
  })
  .openapi('BiasPostcodeAreaParam')

const BiasPostcodeOutwardParamSchema = z
  .string()
  .openapi({ description: 'Bias by outward code', title: 'Bias Postcode Outward' })
  .openapi('BiasPostcodeOutwardParam')

const BiasPostcodeParamSchema = z
  .string()
  .openapi({
    description:
      'Bias by postcode. Can be combined with query to perform a postcode + building number/name search.',
    example: '/addresses?postcode=SW1A2AA&q=10',
    title: 'Bias Postcode',
  })
  .openapi('BiasPostcodeParam')

const BiasPostcodeSectorParamSchema = z
  .string()
  .openapi({
    description: 'Bias by postcode sector, the outward code plus first numeric of the inward code.',
    example: 'SW1A 2AA is SW1A 2',
    title: 'Bias Postcode Sector',
  })
  .openapi('BiasPostcodeSectorParam')

const BiasPosttownParamSchema = z
  .string()
  .openapi({ description: 'Bias by town.', title: 'Bias Post Town' })
  .openapi('BiasPosttownParam')

const BiasThoroughfareParamSchema = z
  .string()
  .openapi({ description: 'Bias by street name.', title: 'Bias Thoroughfare' })
  .openapi('BiasThoroughfareParam')

const BoxParamSchema = z
  .string()
  .openapi({
    description:
      'Restrict search to a geospatial box determined by the "top-left" and "bottom-right" gelocations.   Only one geospatial box can be provided.',
    example: '2.095,57.15,-2.096,57.14',
    title: 'Box',
  })
  .openapi('BoxParam')

const CarrierSchema = z
  .object({
    country: z
      .string()
      .nullable()
      .openapi({
        description: 'Country that number is associated with. In ISO 3166-1 alpha-2 format.',
        example: 'GB',
        title: 'Country ISO Alpha-2 Code',
        'x-nullable': true,
      }),
    name: z
      .string()
      .nullable()
      .openapi({
        description: 'The full name of the carrier that number is associated with.',
        example: 'BT Group',
        title: 'Name',
        'x-nullable': true,
      }),
    network_code: z
      .string()
      .nullable()
      .openapi({
        description:
          'The [Mobile Country Code](https://en.wikipedia.org/wiki/Mobile_country_code) for the carrier.',
        example: '234',
        title: 'Network Code',
        'x-nullable': true,
      }),
    network_type: z
      .enum([
        'mobile',
        'landline',
        'landline_premium',
        'landline_tollfree',
        'virtual',
        'unknown',
        'pager',
      ])
      .nullable()
      .openapi({
        description: 'Type of network that number is associated with.',
        title: 'Network Type',
        'x-nullable': true,
      }),
  })
  .nullable()
  .openapi({
    required: ['network_code', 'name', 'country', 'network_type'],
    title: 'Carrier Object',
    'x-nullable': true,
  })
  .openapi('Carrier')

const GbrCleanseMatchSchema = z
  .object({
    confidence: z
      .number()
      .min(0)
      .max(1)
      .openapi({
        description:
          'A confidence score represented as number between 1 and 0. 1 indicates a full match. 0 indicates no complete matching elements.\n',
      }),
    count: z
      .number()
      .min(0)
      .max(10)
      .openapi({
        description:
          'The number of addresses we matched to the input. We return the closest match by default.\n',
      }),
    fit: z
      .number()
      .min(0)
      .max(1)
      .openapi({
        description:
          'A score represented as number between 1 and 0. Fit compares the address elements present in your query against the matching address elements. It does not incorporate elements you have not presented in the score. A partial address (e.g. 12 Pye Green Road) will have a fit of 1 even though it is missing post town and postcode. Its confidence score will be less than 1 however because it is missing some crucial elements.\n',
      }),
    locality_match: z
      .enum(['FULL', 'PARTIAL', 'INCORRECT', 'MISSING', 'NA'])
      .openapi({ description: 'Match indicator for the locality' }),
    match: z
      .xor([
        PafAddressSchema,
        MrAddressSchema,
        NybAddressSchema,
        PafAliasAddressSchema,
        WelshPafAddressSchema,
      ])
      .openapi({ description: 'Nearest matching address' }),
    organisation_match: z
      .enum(['FULL', 'PARTIAL', 'INCORRECT', 'MISSING', 'NA'])
      .openapi({ description: 'Match indicator for the organisation' }),
    post_town_match: z
      .enum(['FULL', 'PARTIAL', 'INCORRECT', 'MISSING', 'NA'])
      .openapi({ description: 'Match indicator for the post_town' }),
    postcode_match: z
      .enum(['FULL', 'PARTIAL', 'INCORRECT', 'MISSING', 'NA'])
      .openapi({ description: 'Match indicator for the postcode' }),
    premise_match: z
      .enum(['FULL', 'PARTIAL', 'INCORRECT', 'MISSING', 'NA'])
      .openapi({ description: 'Match indicator for the premise' }),
    query: z.string().openapi({ description: 'Originally submitted query' }),
    thoroughfare_match: z
      .enum(['FULL', 'PARTIAL', 'INCORRECT', 'MISSING', 'NA'])
      .openapi({ description: 'Match indicator for the street' }),
  })
  .openapi({
    required: [
      'query',
      'match',
      'count',
      'fit',
      'confidence',
      'organisation_match',
      'premise_match',
      'thoroughfare_match',
      'postcode_match',
      'locality_match',
      'post_town_match',
    ],
    title: 'Address Match',
  })
  .openapi('GbrCleanseMatch')

const GbrCleanseNoMatchSchema = z
  .object({
    confidence: z.literal(0).openapi({ description: '' }),
    count: z.literal(0).openapi({ description: '' }),
    fit: z.literal(0).openapi({ description: '' }),
    locality_match: z.literal('NO_MATCH').openapi({ description: '' }),
    match: z.literal(null).nullable().openapi({ description: 'Nearest matching address' }),
    organisation_match: z.literal('NO_MATCH').openapi({ description: '' }),
    post_town_match: z.literal('NO_MATCH').openapi({ description: '' }),
    postcode_match: z.literal('NO_MATCH').openapi({ description: '' }),
    premise_match: z.literal('NO_MATCH').openapi({ description: '' }),
    query: z.string().openapi({ description: 'Originally submitted query' }),
    thoroughfare_match: z.literal('NO_MATCH').openapi({ description: '' }),
  })
  .openapi({
    required: [
      'query',
      'match',
      'count',
      'fit',
      'confidence',
      'organisation_match',
      'premise_match',
      'thoroughfare_match',
      'postcode_match',
      'locality_match',
      'post_town_match',
    ],
    title: 'No Address Match',
  })
  .openapi('GbrCleanseNoMatch')

const CleanseResponseSchema = z
  .object({
    code: z.literal(2000),
    message: z.literal('Success'),
    result: z.xor([GbrCleanseMatchSchema, GbrCleanseNoMatchSchema]),
  })
  .openapi({ required: ['message', 'code', 'result'], title: 'Address Cleanse Response' })
  .openapi('CleanseResponse')

const ConfigSchema = z
  .object({
    createdAt: z
      .string()
      .openapi({
        description: 'Timestamp for when the config was updated',
        example: '2016-01-21T17:14:49.971Z',
      }),
    name: z
      .string()
      .openapi({
        description: 'A unique name to identify the configuration payload',
        example: 'woocommerce',
      }),
    payload: z
      .string()
      .openapi({
        description: 'A serialised payload of up to `4096` characters',
        example: '{\n  "removeOrganisation": false\n}\n',
      }),
    updatedAt: z
      .string()
      .openapi({
        description: 'Timestamp for when the config was created',
        example: '2016-01-21T17:14:49.971Z',
      }),
  })
  .openapi({ required: ['updatedAt', 'createdAt', 'name', 'payload'], title: 'Config Object' })
  .openapi('Config')

const ConfigNewParamSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description: 'A unique name to identify the configuration payload',
        example: 'woocommerce',
      }),
    payload: z
      .string()
      .openapi({
        description: 'A serialised payload of up to `4096` characters',
        example: '{\n  "removeOrganisation": false\n}\n',
      }),
  })
  .openapi({
    description: 'Required configuration object parameters',
    required: ['name', 'payload'],
    title: 'New Config Object',
  })
  .openapi('ConfigNewParam')

const ConfigParamSchema = z
  .string()
  .openapi({
    description: 'User provided configuration object name',
    example: 'idpc-be',
    title: 'Configuration Name',
  })
  .openapi('ConfigParam')

const ConfigResponseSchema = z
  .object({ code: z.literal(2000), message: z.literal('Success'), result: ConfigSchema })
  .openapi({ required: ['result', 'code', 'message'], title: 'Config Response' })
  .openapi('ConfigResponse')

const ConfigUpdateParamSchema = z
  .object({
    payload: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A serialised payload of up to `4096` characters',
        example: '{\n  "removeOrganisation": false\n}\n',
      }),
  })
  .openapi({
    description: 'Config object update parameters',
    title: 'Update Config Object',
    required: [],
  })
  .openapi('ConfigUpdateParam')

const ConfigsResponseSchema = z
  .object({
    code: z.literal(2000),
    message: z.literal('Success'),
    result: z
      .object({ configs: z.array(ConfigSchema) })
      .openapi({ description: 'List of configurations', required: ['configs'] }),
  })
  .openapi({ required: ['message', 'code', 'result'], title: 'Config List Response' })
  .openapi('ConfigsResponse')

const CountrySchema = z
  .enum([
    'United States',
    'Guam',
    'Puerto Rico',
    'England',
    'Scotland',
    'Wales',
    'Northern Ireland',
    'Jersey',
    'Guernsey',
    'Isle of Man',
    'Ireland',
  ])
  .openapi({
    description: '  Full country names (ISO 3166)\n',
    example: 'England',
    title: 'Country',
  })
  .openapi('Country')

const CountryISOSchema = z
  .enum(['GBR', 'IMN', 'JEY', 'GGY', 'USA', 'PRI', 'GUM', 'IRL'])
  .openapi({ description: '  3 letter country code (ISO 3166-1)\n', title: 'ISO Country Code (3)' })
  .openapi('CountryISO')

const CountryISO2Schema = z
  .enum(['GB', 'IM', 'JE', 'GG', 'US', 'PR', 'GU', 'IE'])
  .openapi({ description: ' 2 letter country code (ISO 3166-1)\n', title: 'ISO Country Code (2)' })
  .openapi('CountryISO2')

const CountryIsoParamSchema = z
  .string()
  .openapi({
    description:
      'Filter by country ISO code. Uses 3 letter country code (ISO 3166-1) standard.\nFilter by multiple countries with a comma separated list. E.g. `GBR,IRL`',
    example: 'GBR',
    title: 'Country',
  })
  .openapi('CountryIsoParam')

const CountryParamSchema = z
  .string()
  .openapi({
    description:
      'Filter by country. Possible values are England, Scotland, Wales, Northern Ireland, Jersey, Guernsey and Isle of Man.',
    example: 'England',
    title: 'Country',
  })
  .openapi('CountryParam')

const DatasetSchema = z
  .enum(['paf', 'pafw', 'pafa', 'mr', 'nyb', 'usps', 'ecaf', 'ecad'])
  .openapi({
    description:
      'Indicates the provenance of an address.\n\n  - `paf` (GBR) Postcode Address File\n  - `mr` (GBR) Multiple Residence File\n  - `nyb` (GBR) Not Yet Built File\n  - `pafa` (GBR) Alias File\n  - `pafw` (GBR) Welsh File\n  - `ecaf` (IRL) Eircode ECAF\n  - `ecad` (IRL) Eircode ECAD\n  - `usps` (USA) USPS Zip+4',
    title: 'Dataset',
  })
  .openapi('Dataset')

const EircBaseSchema = z
  .object({
    address_reference: z
      .string()
      .min(0)
      .max(16)
      .openapi({
        description:
          'The address reference is the An Post GeoDirectory address reference identifier used by the Universal Service Provider.',
      }),
    building_group: z
      .string()
      .min(0)
      .max(60)
      .openapi({
        description:
          'A building group is a collection of buildings with a collective name, located on or near the same thoroughfare.',
        example: 'Marrian Terrace',
      }),
    building_name: z
      .string()
      .min(0)
      .max(60)
      .openapi({
        description:
          'The name given to the building. Prepended by sub building, if any, when the sub building does not appear on a line to itself. The building name is omitted if it is the same as either the Organisation or Building Group.',
        example: 'Rose Cottage',
      }),
    building_number: z
      .string()
      .min(0)
      .max(40)
      .openapi({
        description:
          "A number associated with the whole building. The building number may have a numeric and an alphanumeric component, which are concatenated e.g. 2A, or alternatively will have a simple building number or a complex building number. The building number always relates to the whole building and not a sub-unit within it.\nA complex building number may be one of the following:\n  - Dual. Two number separated by '/' e.g. 63/64 = 63, 64\n  - Sequence. An odd or even sequence of numbers with lower and upper bound separated by an underscore '_' e.g. `1_5` = 1,3,5 and `2_6` = 2,4,6 \n  - Range. A range of consecutive numbers with lower and upper bound separated by a dash '-' e.g. `63-66` = 63, 64, 56, 66\nThe building number never appears on a line by itself and can prepend Building Group, Primary Thoroughfare or Primary Locality.",
        example: 22,
      }),
    country: z.literal('Ireland').openapi({ description: '  Full country names (ISO 3166)\n' }),
    country_iso: z
      .literal('IRL')
      .openapi({ description: '  3 letter country code (ISO 3166-1)\n' }),
    country_iso_2: z
      .literal('IE')
      .openapi({ description: ' 2 letter country code (ISO 3166-1)\n' }),
    dataset: z.string().openapi({ description: 'Source of address' }),
    department: z
      .string()
      .min(0)
      .max(60)
      .openapi({
        description:
          'The department or division within an organisation. If the department element exists, then the organisation must also exist.',
        example: 'Accounts Department',
      }),
    eircode: z
      .string()
      .min(0)
      .max(60)
      .openapi({
        description:
          'The seven character Eircode has an A65 F4E2 format. The Eircode is a mandatory address element. The last line of a Postal Address will contain the Eircode, displayed with a space. e.g. `A65 F4E2`.\n\nThe Eircode is always the last line of a Postal Address generated within the state, e.g. if an address has four lines then the Eircode will be on its own on Address Line 5. For inbound international mail the country name IRELAND should be appended as the last line of the Postal Address.',
        example: 'A65 R2AF',
      }),
    id: IDSchema,
    language: z
      .enum(['en', 'ga'])
      .openapi({ description: 'Language represented by 2 letter ISO Code (639-1)\n' }),
    latitude: LatitudeSchema,
    line_1: z.string().min(0).max(200).openapi({ description: 'Address Line 1' }),
    line_2: z.string().min(0).max(200).openapi({ description: 'Address Line 2' }),
    line_3: z.string().min(0).max(200).openapi({ description: 'Address Line 3' }),
    line_4: z.string().min(0).max(200).openapi({ description: 'Address Line 4' }),
    line_5: z.string().min(0).max(200).openapi({ description: 'Address Line 5' }),
    line_6: z.string().min(0).max(200).openapi({ description: 'Address Line 6' }),
    line_7: z.string().min(0).max(200).openapi({ description: 'Address Line 7' }),
    line_8: z.string().min(0).max(200).openapi({ description: 'Address Line 8' }),
    line_9: z.string().min(0).max(200).openapi({ description: 'Address Line 9' }),
    longitude: LongitudeSchema,
    organisation: z
      .string()
      .min(0)
      .max(60)
      .openapi({ description: 'Organisation name', example: 'Oak Tree Limited' }),
    post_county: z
      .string()
      .min(0)
      .max(30)
      .openapi({
        description:
          'One of the 26 Counties in the Republic of Ireland. These counties are sub-national divisions used for the purposes of administrative, geographical and political demarcation. Post County is the County associated with the Post Town, not the geographic county in which the building is located. The Post County is normally used as part of the Postal Address with some exceptions e.g. Dublin Postal Districts where the Post County is not used and some Post Towns (e.g. Tipperary, Kildare, etc.) that have the same name as the Post County.',
        example: 'Cork',
      }),
    primary_locality: z
      .string()
      .min(0)
      .max(40)
      .openapi({
        description:
          'First locality elements which can refer to areas, districts, industrial estates, towns, etc.\n\nThe primary locality refers to the specific place the address is.\n\nIn urban areas, the primary locality can be required to distinguish between two thoroughfares of the same name in the same district or town. Industrial estates with named thoroughfares are also held as localities. In rural areas the primary locality is generally a townland name.',
        example: 'Cookstown Industrial Estate',
      }),
    primary_thoroughfare: z
      .string()
      .min(0)
      .max(40)
      .openapi({
        description:
          'The name of the thoroughfare on which premises are located. It may appear on a line by itself or be appended to either a sub building or building number.\n\nAddresses with thoroughfares can sometimes have the thoroughfare excluded where a Building Group exists, such as a Retail Centre or Business Park, and the thoroughfare is not part of the Postal Address.',
        example: 'Griffith Road',
      }),
    secondary_locality: z
      .string()
      .min(0)
      .max(40)
      .openapi({
        description:
          'Never present without a primary locality. The secondary locality has a wider geographic scope than the primary locality.\n\nIt is the secondary locality therefore which differentiates addresses with the same primary locality name within the same county.\n\nSecondary localities are more likely to be required for rural addresses.\n\nSecond locality elements which can refer to areas, districts, industrial estates, towns, etc\n\nThe secondary locality helps identify where the primary locality is located.',
        example: 'Manorhamilton',
      }),
    secondary_thoroughfare: z
      .string()
      .min(0)
      .max(40)
      .openapi({
        description:
          'It is never present without a primary thoroughfare. The primary thoroughfare is dependent on the secondary thoroughfare and appears before the secondary thoroughfare in any address.\n\nSecondary thoroughfare are generally used to assist locating a primary thoroughfare.',
        example: 'Navan Road',
      }),
    sub_building_name: z
      .string()
      .min(0)
      .max(60)
      .openapi({
        description: 'The sub-building refers to an apartment, flat or unit within a building.',
        example: 'Flat 1',
      }),
    tertiary_locality: z
      .string()
      .min(0)
      .max(40)
      .openapi({
        description:
          'Also known as the Post Town.\n\nThe name of the post town associated with the premises for postal delivery purposes. This includes Dublin Postal Districts "Dublin 1" to "Dublin 24".\n\nThe post town is a significant element of the Postal Address, however it is not always populated in an address. The official post office guide, Eolaí an Phoist4, describes post towns in the following manner:\n\n"A provincial postal address may include the name of a town or village several miles distant, with which the addressee has little or no connection, and, in some places, especially if this residence happens to be near a county boundary, the name of the neighbouring county instead of the county in which he actually resides. The explanation is that the main mail despatches have to be sent for more detailed sub division to certain centres known as POST TOWNS, chosen because of their accessibility and convenience."',
        example: 'Dublin 14',
      }),
  })
  .openapi({
    required: [
      'id',
      'dataset',
      'country',
      'country_iso',
      'country_iso_2',
      'language',
      'longitude',
      'latitude',
      'department',
      'organisation',
      'sub_building_name',
      'building_name',
      'building_number',
      'building_group',
      'primary_thoroughfare',
      'secondary_thoroughfare',
      'primary_locality',
      'secondary_locality',
      'tertiary_locality',
      'post_county',
      'eircode',
      'line_1',
      'line_2',
      'line_3',
      'line_4',
      'line_5',
      'line_6',
      'line_7',
      'line_8',
      'line_9',
      'address_reference',
    ],
  })
  .openapi('EircBase')

const EcadAddressSchema = EircBaseSchema.and(
  z
    .object({
      address_point_id: z
        .string()
        .min(1)
        .max(10)
        .exactOptional()
        .openapi({ description: 'Address Point ID', example: '10098783' }),
      address_type: z
        .string()
        .min(0)
        .exactOptional()
        .openapi({
          description:
            'Addresses points can assume one of the following values:\n\n- Residential Address Point. This type of address point has one residential addresses associated with it.\n- Non-Residential Address Point. This type of address point has one or more non-residential address (business, club or other organisation) associated with it.\n- Mixed Address Point. This is a special case where the residential and non residential addresses in the building are essentially the same address. The typical example is a farm house on an active farm. It is important to note that this is a special case. In general a building with both residential and non-residential addresses (e.g. an apartment over a shop) will receive two address points, one commercial and one residential, and hence two Eircodes.\n\nBuildings can contain multiple address points of type Residential and/or Non-Residential.',
        }),
      building_address_type: z
        .string()
        .min(0)
        .exactOptional()
        .openapi({
          description:
            'The building type can assume one of the following values:\n\n- Single Occupancy Residential Building. This type of building contains one residential address.\n- Multi Occupancy Residential Building. This type of building contains multiple residential addresses.\n- Single Occupancy Non-Residential Building. This type of building contains one non-residential address (business, club or other organisation).\n- Multi Occupancy Non-Residential Building. This type of building contains multiple non-residential addresses (business, club or other organisation).\n- Multi Occupancy Mixed Use Building. This type of building contains multiple residential and non- residential addresses.\n\nBuildings can also have a more specific address types such as a Hospital, School, Shopping Centre, etc.',
        }),
      building_group_address_type: z
        .string()
        .min(0)
        .exactOptional()
        .openapi({
          description:
            'The building group type can be:\n\n- Residential Building Group. This type of building group contains buildings with residential addresses only.\n- Non-Residential Building Group This type of building group contains buildings with non-residential addresses (business, club or other organisation) only.\n- Mixed Building Group. This type of building group contains buildings with residential and non-residential addresses. Can also have a more specific address type such as a Hospital, School, Shopping Centre, etc.\n\nBuilding groups can also have a more specific address type such as a Hospital, School, Shopping Centre, etc.',
        }),
      building_group_id: z
        .string()
        .exactOptional()
        .openapi({ description: 'Building Group ID', example: '10098783' }),
      building_id: z
        .string()
        .min(1)
        .max(10)
        .exactOptional()
        .openapi({ description: 'Building ID', example: '10098783' }),
      building_type: z
        .string()
        .min(0)
        .exactOptional()
        .openapi({
          description: 'Describes the type of building, e.g. detached, semi-detached, bungalow.',
        }),
      building_use: z
        .enum(['R', 'C', 'B', 'U'])
        .exactOptional()
        .openapi({
          description:
            'Can be one of:\n\n- `R` Residential \n- `C` Commercial\n- `B` Both \n- `U` Unknown',
        }),
      dataset: z.literal('ecad').exactOptional(),
      ded_id: z
        .string()
        .min(0)
        .exactOptional()
        .openapi({
          description:
            'Unique Identifier for Electoral Divisions 2017 data.\n\nNote that this field is subject to breaking changes if a new generation of government data IDs is released. Currently this uses 2017 IDs. Contact us to be notified ahead of his change.',
        }),
      ecad_id: z
        .string()
        .min(1)
        .max(10)
        .exactOptional()
        .openapi({ description: 'Unique 10 digit ECAD ID', example: '17000000' }),
      gaeltacht: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'Gaeltact refers to a district where the Irish government recognises that the Irish language is the predominant language.\n\nReturns `true` if address is in a Gaeltacht area and `false` if not.',
        }),
      gaeltacht_id: z
        .string()
        .min(0)
        .exactOptional()
        .openapi({
          description:
            'Unique Identifier for the 7 Gaeltacht areas 2017 data.\n\nNote that this field is subject to breaking changes if a new generation of government data IDs is released. Currently this uses 2017 IDs. Contact us to be notified ahead of his change.',
        }),
      holiday_home: z
        .enum(['N', 'Y', ''])
        .exactOptional()
        .openapi({
          description: 'A Yes/No field, indicating whether or not the building is a holiday home.',
        }),
      local_authority: z
        .string()
        .min(0)
        .exactOptional()
        .openapi({ description: 'Name of local authority' }),
      nace_category: z
        .string()
        .min(0)
        .exactOptional()
        .openapi({ description: 'Name of the NACE Category' }),
      nace_code: z
        .string()
        .min(0)
        .exactOptional()
        .openapi({ description: 'The NACE Code for the Category.' }),
      nua: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'NUA means "non-unique address".\n\nThe NUA field contains `true` when the address is a non-unique address, and `false` when it is a unique address.\n\nIreland has a very high level of non-unique addresses (NUA), i.e. the address does not contain a unique building number or name. Approximately 35% of all Irish addresses are non-unique which equates to 600,000 addresses.\n\nThe typical example of NUA addressing is where every address in a townland is the same. The way that post is delivered is by local knowledge of postal delivery personnel of which addressee lives in which house.\n\nN.B. For a NUA address, it is impossible to match to a unique record in the ECAD and assign an Eircode.',
        }),
      org_vacant: z
        .enum(['Y', 'N', ''])
        .exactOptional()
        .openapi({ description: 'A Yes/No field, indicating whether the organisation is vacant.' }),
      organisation_id: z
        .string()
        .min(1)
        .max(10)
        .exactOptional()
        .openapi({ description: 'Organisation ID', example: '10098783' }),
      post_county_id: z
        .string()
        .min(1)
        .max(10)
        .exactOptional()
        .openapi({ description: 'Post County ID', example: '10098783' }),
      post_town: z
        .string()
        .min(0)
        .exactOptional()
        .openapi({
          description:
            'The post town is a significant element of the Postal Address, however it is not always populated in an address. The official post office guide, Eolaí an Phoist1, describes post towns in the following manner:\n\n"A provincial postal address may include the name of a town or village several miles distant, with which the addressee has little or no connection, and, in some places, especially if this residence happens to be near a county boundary, the name of the neighbouring county instead of the county in which he actually resides. The explanation is that the main mail despatches have to be sent for more detailed sub division to certain centres known as post towns, chosen because of their accessibility and convenience."',
        }),
      post_town_id: z
        .string()
        .min(1)
        .max(10)
        .exactOptional()
        .openapi({ description: 'Post Town ID', example: '10098783' }),
      postaim_presort_152: z
        .string()
        .min(0)
        .exactOptional()
        .openapi({ description: 'An Post sorting information.' }),
      postaim_presort_61: z
        .string()
        .min(0)
        .exactOptional()
        .openapi({ description: 'An Post sorting information.' }),
      primary_locality_address_type: z
        .string()
        .min(0)
        .exactOptional()
        .openapi({
          description:
            'The locality type can be:\n  - Rural Locality. This is generally a townland.\n  - Industrial Estate. Industrial Estate, Industrial Park, Business Campus, etc.\n  - Shopping District. Shopping Centre.\n  - Housing Estate. Residential Housing Estate.\n  - Village. Based on Census 2011 population < 1,500.\n  - Town. Based on Census 2011 population > 1,500.\n  - Urban Area. Wholly within a village/town/city e.g. Rathmines.\n  - Suburban Locality. This is an area that is both rural and urban, as it is both a townland, and also an area name applied to houses in a town, as the town has extended partially into the townland.\n\nWhere the locality is also the post town, the type can be:\n  - Village. Based on Census 2011 population < 1,500\n  - Town. Based on Census 2011 population > 1,500\n  - Postal District. Dublin 1 to 24\n  - City. Dublin, Cork, Limerick, Galway or Waterford',
        }),
      primary_locality_id: z
        .string()
        .min(1)
        .max(10)
        .exactOptional()
        .openapi({ description: 'Primary Locality ID', example: '10098783' }),
      primary_thoroughfare_id: z
        .string()
        .min(1)
        .max(10)
        .exactOptional()
        .openapi({ description: 'Primary Thoroughfare ID', example: '10098783' }),
      publicity_post_zone: z
        .string()
        .min(0)
        .exactOptional()
        .openapi({ description: 'An Post publicity post zone information.' }),
      secondary_locality_address_type: z
        .string()
        .min(0)
        .exactOptional()
        .openapi({
          description:
            'The locality type can be:\n  - Rural Locality. This is generally a townland.\n  - Industrial Estate. Industrial Estate, Industrial Park, Business Campus, etc.\n  - Shopping District. Shopping Centre.\n  - Housing Estate. Residential Housing Estate.\n  - Village. Based on Census 2011 population < 1,500.\n  - Town. Based on Census 2011 population > 1,500.\n  - Urban Area. Wholly within a village/town/city e.g. Rathmines.\n  - Suburban Locality. This is an area that is both rural and urban, as it is both a townland, and also an area name applied to houses in a town, as the town has extended partially into the townland.\n\nWhere the locality is also the post town, the type can be:\n  - Village. Based on Census 2011 population < 1,500\n  - Town. Based on Census 2011 population > 1,500\n  - Postal District. Dublin 1 to 24\n  - City. Dublin, Cork, Limerick, Galway or Waterford',
        }),
      secondary_locality_id: z
        .string()
        .exactOptional()
        .openapi({ description: 'Secondary Locality ID', example: '10098783' }),
      secondary_thoroughfare_id: z
        .string()
        .exactOptional()
        .openapi({ description: 'Secondary Thoroughfare ID', example: '10098783' }),
      small_area_id: z
        .string()
        .min(0)
        .exactOptional()
        .openapi({
          description:
            'Unique Identifier for the Small Area 2017 data.\n\nNote that this field is subject to breaking changes if a new generation of government data IDs is released. Currently this uses 2017 IDs. Contact us to be notified ahead of his change.',
        }),
      townland_id: z
        .string()
        .min(0)
        .exactOptional()
        .openapi({
          description:
            'Unique Identifier for townland 2017 data.\n\nNote that this field is subject to breaking changes if a new generation of government data IDs is released. Currently this uses 2017 IDs. Contact us to be notified ahead of his change.',
        }),
      under_construction: z
        .enum(['N', 'Y', ''])
        .exactOptional()
        .openapi({
          description:
            'A Yes/No field, indicating whether or not the building is under construction.',
        }),
      vacant: z
        .enum(['Y', 'N', ''])
        .exactOptional()
        .openapi({ description: 'A Yes/No field, indicating whether the building is vacant.' }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description: 'The ECAD contains additional data for each ECAF address.',
    required: [
      'organisation_id',
      'address_point_id',
      'building_id',
      'building_group_id',
      'primary_thoroughfare_id',
      'secondary_thoroughfare_id',
      'primary_locality_id',
      'secondary_locality_id',
      'post_town',
      'post_town_id',
      'post_county_id',
      'nua',
      'gaeltacht',
      'address_type',
      'building_address_type',
      'building_group_address_type',
      'primary_locality_address_type',
      'secondary_locality_address_type',
      'building_type',
      'holiday_home',
      'under_construction',
      'building_use',
      'vacant',
      'org_vacant',
      'nace_code',
      'nace_category',
      'local_authority',
      'ded_id',
      'small_area_id',
      'townland_id',
      'gaeltacht_id',
      'postaim_presort_61',
      'postaim_presort_152',
      'publicity_post_zone',
    ],
    title: 'Ireland ECAD Address',
  })
  .openapi('EcadAddress')

const EcafAddressSchema = EircBaseSchema.and(
  z
    .object({
      dataset: z.literal('ecaf').exactOptional(),
      ecaf_id: z
        .string()
        .min(0)
        .max(10)
        .exactOptional()
        .openapi({
          description:
            'The unique identifier in the ECAF is the `ecaf_id`. This unique identifier allows each address in the ECAF to be uniquely identified. It can also be used as index once the data has been imported into a relational database. This is a numeric field that can store values from 0 to 2,147,483,647. It is represented as a number up to 10 digits long. All other fields in ECAF are alphanumeric.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description:
      'ECAF is the Eircode Address File which contains one record for each Postal Address. English language and Irish language versions are available. It is distributed as a flat file, details of data provision and updates are provided in section 2.',
    required: ['ecaf_id'],
    title: 'Ireland ECAF Address',
  })
  .openapi('EcafAddress')

const EmailSchema = z
  .object({
    catchall: z
      .boolean()
      .openapi({
        description: 'Returns `true` if this domain accepts all emails regardless of username',
      }),
    deliverable: z
      .boolean()
      .openapi({ description: 'Returns `true` if the email can be delivered' }),
    disposable: z
      .boolean()
      .openapi({
        description: 'Returns `true` if email comes from a disposable email service like temp-mail',
      }),
    free: z
      .boolean()
      .openapi({
        description:
          'Returns `true` if the email originates from a free service like Outlook or Gmail.',
      }),
    result: z.enum(['deliverable', 'not_deliverable']),
    role: z
      .boolean()
      .openapi({
        description:
          'Returns `true` if email address represents an organisational role like `admin`, `support`, `postmaster` etc',
      }),
  })
  .openapi({
    required: ['result', 'deliverable', 'role', 'free', 'disposable', 'catchall'],
    title: 'Email Object',
  })
  .openapi('Email')

const UnknownEmailSchema = z
  .object({
    catchall: z
      .literal(null)
      .nullable()
      .openapi({ description: 'Catch-all status is not known', 'x-nullable': true }),
    deliverable: z
      .literal(null)
      .nullable()
      .openapi({ description: 'Deliverability is not known', 'x-nullable': true }),
    disposable: z
      .literal(null)
      .nullable()
      .openapi({ description: 'Disposability is not known', 'x-nullable': true }),
    free: z
      .literal(null)
      .nullable()
      .openapi({ description: 'Free email provider is not known', 'x-nullable': true }),
    result: z.literal('unknown'),
    role: z
      .literal(null)
      .nullable()
      .openapi({ description: 'Role is not known', 'x-nullable': true }),
  })
  .openapi({
    required: ['result', 'deliverable', 'role', 'free', 'disposable', 'catchall'],
    title: 'Unknown Email Object',
  })
  .openapi('UnknownEmail')

const EmailResponseSchema = z
  .object({
    code: z.literal(2000),
    message: z.literal('Success'),
    result: z.xor([EmailSchema, UnknownEmailSchema]),
  })
  .openapi({ required: ['message', 'code', 'result'], title: 'Email Verification Response' })
  .openapi('EmailResponse')

const EndParamSchema = z
  .int32()
  .openapi({
    description:
      'An start date/time in the form of a UNIX Timestamp in milliseconds, e.g.  `1418556477882`.\n',
    example: 1418556477882,
    title: 'End Time',
  })
  .openapi('EndParam')

const FilterParamSchema = z
  .string()
  .openapi({
    description:
      'Comma separated whitelist of address elements to return. \n\nE.g. `filter=line_1,line_2,line_3` returns only `line_1`, `line_2` and `line_3` address elements in your response\n',
    example: 'line_1,line_2,line_3',
    title: 'Filter',
  })
  .openapi('FilterParam')

const AddressSecondaryAbbreviationSchema = z
  .string()
  .openapi({
    description:
      'A descriptive code used to identify the type of address secondary range information in the Address Secondary Range field. \nThis code may be useful in address matching, e.g., the secondary address numbers may indicate apartment, suite, or trailer numbers.',
    title: 'Address Secondary Abbreviation',
  })
  .openapi('AddressSecondaryAbbreviation')

const BaseAlternateCodeSchema = z
  .enum(['A', 'B', ''])
  .openapi({
    description:
      'Code that specifies whether a record is a base (preferred) or alternate record. \nBase records (represented as "B") can represent a range of addresses or an individual address, such as a firm record, while alternate records (represented as "A") are individual delivery points. Base records are generally preferred over alternate records.\nGovernment deliveries will only be listed on alternate records with the appropriate government building indicator (federal, state, or city) set.',
    title: 'Base Alternate Code',
  })
  .openapi('BaseAlternateCode')

const BuildingOrFirmNameSchema = z
  .string()
  .openapi({
    description:
      'The name of a company, building, apartment complex, shopping center, or other distinguishing secondary address information.\nThis field is normally used with firm and highrise records but may also contain literals such as “Postmaster” or “United States Postal Service.”',
    example: 'POSTMASTER',
    title: 'Building or Firm Name',
  })
  .openapi('BuildingOrFirmName')

const CarrierRouteIdSchema = z
  .string()
  .openapi({
    description:
      'A 4 character ID identifying the postal route for the address.\nThe first character indicates the route type. Specifically:\n- "B" indicates PO Box\n- "H" indicates highway\n- "C" indicates city\n- "G" indicates general\n- "R" indicates rural',
    example: 'R012',
    title: 'Carrier Route ID',
  })
  .openapi('CarrierRouteId')

const CarrierRouteRateSortationSchema = z
  .string()
  .openapi({
    description:
      'Identifies where automation Carrier Route rates are available and where the commingling of automation and non-automation mail, including Enhanced Carrier Routes and 5-digit presort, on the same pallet or in the same container is allowed.',
    title: 'Carrier Route Rate Sortation and Merged 5-Digit Indicator',
  })
  .openapi('CarrierRouteRateSortation')

const CitySchema = z
  .string()
  .openapi({
    description:
      'A valid city name for mailing purposes; appears in the last line of an address on a mail piece.',
    example: 'HOLTSVILLE',
    title: 'City Name',
  })
  .openapi('City')

const CityAbbreviationSchema = z
  .string()
  .openapi({
    description:
      'A standard 13-character abbreviation for a city/state name. This field is only used for names that are greater than 13 characters in length and have a city/state mailing name indicator of "Y." If the field is longer than 13 characters and the city/state mailing name indicator is "N," the field will be blank.',
    example: 'W TOWNSHEND',
    title: 'City State Name Abbreviation',
  })
  .openapi('CityAbbreviation')

const CityStateMailingNameIndicatorSchema = z
  .string()
  .openapi({
    description:
      'Specifies whether or not the city state name can be used as a last line of address on a mail piece.\n- "Y = City/state name is a USPS-approved mailing name."\n- "N = City/state name is not approved for mailing purposes."',
    title: 'City State Mailing Name Indicator',
  })
  .openapi('CityStateMailingNameIndicator')

const CityStateNameFacilityCodeSchema = z
  .enum(['B', 'C', 'N', 'P', 'S', 'U', 'Y', ''])
  .openapi({
    description:
      'The type of locale identified in the city/state name. The facility may be a USPS facility, such as a post office, station, or branch, or it may be a non-postal place name. City/state name facility codes include the following:\n- B = Branch\n- C = Community post office (CPO)\n- N = Non-postal community name, former USPS facility, or place name\n- P = Post Office\n- S = Station\n- U = Urbanization',
    title: 'City State Name Facility Code',
  })
  .openapi('CityStateNameFacilityCode')

const CongressionalDistrictNumberSchema = z
  .xor([
    z.string().openapi({ description: 'Empty string `""` if not available' }),
    z.number().openapi({ description: 'Congressional district number', example: 6 }),
  ])
  .openapi({
    description:
      'A standard value identifying a geographic area within the United States served by a member of the U.S. House of Representatives. If Army/Air Force (APO), Fleet Post Office (FPO), or Diplomatic/Defense Post Office (DPO), this field will be blank. If there is only one member of Congress within a state, the code will be "AL" (at large).',
    title: 'Congressional District Number',
  })
  .openapi('CongressionalDistrictNumber')

const UspsCountrySchema = z
  .enum(['United States', 'Guam', 'Puerto Rico'])
  .openapi({ description: '  Full country names (ISO 3166)\n', title: 'Country' })
  .openapi('UspsCountry')

const UspsCountryIsoSchema = z
  .enum(['USA', 'PRI', 'GUM'])
  .openapi({ description: '  3 letter country code (ISO 3166-1)\n', title: 'ISO Country Code (3)' })
  .openapi('UspsCountryIso')

const UspsCountryIso_2Schema = z
  .enum(['US', 'PR', 'GU'])
  .openapi({ description: ' 2 letter country code (ISO 3166-1)\n', title: 'ISO Country Code (2)' })
  .openapi('UspsCountryIso_2')

const CountySchema = z
  .string()
  .openapi({
    description:
      'The name of the county or parish in which the 5-digit ZIP Code resides. If APO/FPO/DPO, then the county name will be blank.',
    example: 'Suffolk',
    title: 'County Name',
  })
  .openapi('County')

const CountyNumberSchema = z
  .xor([
    z.string().openapi({ description: 'Empty string `""` if not available' }),
    z.number().openapi({ description: 'FIPS code', example: 53 }),
  ])
  .openapi({
    description:
      'The Federal Information Processing Standard (FIPS) code assigned to a given county or parish within a state. In Alaska, it identifies a region within the state. If APO/FPO/DPO, and the record type is “S,” “H,” or “F,” the county number will be blank.',
    title: 'County Number',
  })
  .openapi('CountyNumber')

const UspsDatasetSchema = z
  .literal('usps')
  .openapi({ description: 'Identifies the address as sourced from USPS', title: 'USA Dataset' })
  .openapi('UspsDataset')

const FinanceNumberSchema = z
  .xor([
    z.string().openapi({ description: 'Empty string `""` if not available' }),
    z.number().openapi({ description: 'Finance Number', example: 351560 }),
  ])
  .openapi({
    description:
      'A code assigned to Postal Service facilities (primarily Post Offices) to collect cost and statistical data and compile revenue and expense data.',
    title: 'Finance Number',
  })
  .openapi('FinanceNumber')

const GovernmentBuildingIndicatorSchema = z
  .enum(['', 'A', 'B', 'C', 'D', 'E', 'F', 'G'])
  .openapi({
    description:
      'An alphabetic value that identifies the type of government agency at the delivery point and/or whether a firm is the only delivery at an address. For this purpose, "address" is defined as the complete delivery line (e.g., complete street address and, if included as part of the firm record, the secondary abbreviation and/or address secondary number).\n- A = City government building—alternates only\n- B = Federal government building—alternates only\n- C = State government building—alternates only\n- D = Firm only—base and alternates\n- E = City government building and firm only—alternates only\n- F = Federal government building and firm only—alternates only\n- G = State government building and firm only—alternates only',
    title: 'Government Building Indicator',
  })
  .openapi('GovernmentBuildingIndicator')

const LacsStatusIndicatorSchema = z
  .enum(['', 'L'])
  .openapi({
    description:
      'The Locatable Address Conversion Service (LACS) indicator describes records that have been converted to the LACS system (a product/system in a different USPS® product line that allows mailers to identify and convert a rural route address to a city-style address). Rural route and some city addresses are being modified to city-style addresses so that emergency services (e.g., ambulances, police) can find these addresses more efficiently.\n- L = LACS address: The old (usually rural-route) address that has been converted for the LACS system.\n- Blank = Not applicable',
    title: 'LACS Status Indicator',
  })
  .openapi('LacsStatusIndicator')

const UspsLanguageSchema = z
  .literal('en')
  .openapi({
    description: 'Language represented by 2 letter ISO Code (639-1)\n',
    title: 'Language',
  })
  .openapi('UspsLanguage')

const LastLineSchema = z
  .string()
  .openapi({
    description: 'Last line of the address comprising of city, state, zip code and zip+4',
    example: 'Greenwich CT 06830-1234',
    title: 'Last Line',
  })
  .openapi('LastLine')

const Line_1Schema = z
  .string()
  .openapi({
    description: 'The primary delivery line (usually the street address) of the address.',
    example: '12 Armstrong Ct Apt 12',
    title: 'First Address Line',
  })
  .openapi('Line_1')

const Line_2Schema = z
  .string()
  .openapi({
    description:
      'Secondary delivery line of the address. Typically populated if the first line is the firm or building name.',
    example: '9450 Pinecroft Dr',
    title: 'Second Address Line',
  })
  .openapi('Line_2')

const MunicipalityCityStateKeySchema = z
  .string()
  .openapi({
    description: 'Municipality City State Key. Currently blank.',
    title: 'Municipality City State Key',
  })
  .openapi('MunicipalityCityStateKey')

const Plus_4CodeSchema = z
  .string()
  .openapi({ description: '4 digit ZIP add-on code.', example: '1234', title: 'Plus 4 Code' })
  .openapi('Plus_4Code')

const PreferredCitySchema = z
  .string()
  .openapi({
    description:
      'Field that contains the default preferred or alternate preferred last-line name for a ZIP Code.',
    example: 'AGUADA',
    title: 'Preferred Last Line City State Name',
  })
  .openapi('PreferredCity')

const PreferredLastLineCityStateKeySchema = z
  .string()
  .openapi({
    description:
      'In the Carrier Route, Five-Digit ZIP Code, Delivery Statistics, and ZIP + 4 products, an index to the City State product record that provides the preferred last-line name for this address range. In the City State product, the preferred last line city/state key contains the key value of a City State product record that has the default preferred or alternate preferred last-line key for a given ZIP Code.',
    example: 'V13916',
    title: 'Preferred Last Line City State Key',
  })
  .openapi('PreferredLastLineCityStateKey')

const PrimaryNumberSchema = z
  .string()
  .openapi({
    description:
      'A house, rural route, contract box, or Post Office Box number. The numeric or alphanumeric component of an address preceding the street name. Often referred to as house number.',
    example: 'A298',
    title: 'Primary Number',
  })
  .openapi('PrimaryNumber')

const RecordTypeCodeSchema = z
  .enum(['G', 'H', 'F', 'S', 'P', 'R', 'M', ''])
  .openapi({
    description:
      'An alphabetic value that identifies the type of data in the record. - G = General delivery (5-Digit ZIP, ZIP + 4, and Carrier Route products) - H = High-rise (ZIP + 4 only) - F = Firm (ZIP + 4 only) - S = Street (5-Digit ZIP, ZIP + 4, and Carrier Route products) - P = PO Box (5-Digit ZIP, ZIP + 4, and Carrier Route products) - R = Rural route/contract (5-Digit ZIP, ZIP + 4, and Carrier Route products) - M = Multi-carrier (Carrier Route product only)',
    title: 'Record Type Code',
  })
  .openapi('RecordTypeCode')

const SecondaryNumberSchema = z
  .string()
  .openapi({
    description: 'Number of the sub unit, apartment, suite etc',
    example: '123A',
    title: 'Secondary Number',
  })
  .openapi('SecondaryNumber')

const StateSchema = z
  .string()
  .openapi({
    description: 'Full name of a state, U.S. territory, or armed forces ZIP Code designation.',
    example: 'New York',
    title: 'State',
  })
  .openapi('State')

const StateAbbreviationSchema = z
  .string()
  .openapi({
    description:
      'A 2-character abbreviation for the name of a state, U.S. territory, or armed forces ZIP Code designation. If APO/FPO/DPO, then the state abbreviation will be “AA,” “AE,” or “AP.”',
    example: 'NY',
    title: 'State Abbreviation',
  })
  .openapi('StateAbbreviation')

const StreetNameSchema = z
  .string()
  .openapi({
    description:
      'The official name of a street as assigned by a local governing authority. The Street Name field contains only the street name and does not include directionals (EAST, WEST, etc.) or suffixes (ST, DR, BLVD, etc.). This element may also contain literals, such as PO BOX, GENERAL DELIVERY, USS, PSC, or UNIT.',
    example: 'GOSHEN',
    title: 'Street Name',
  })
  .openapi('StreetName')

const StreetPostDirectionalAbbreviationSchema = z
  .string()
  .openapi({
    description: 'A geographic direction that follows the street name.',
    title: 'Street Post Directional Abbreviation',
  })
  .openapi('StreetPostDirectionalAbbreviation')

const StreetPreDirectionalAbbreviationSchema = z
  .string()
  .openapi({
    description: 'A geographic direction that precedes the street name.',
    title: 'Street Pre-Directional Abbreviation',
  })
  .openapi('StreetPreDirectionalAbbreviation')

const StreetSuffixAbbreviationSchema = z
  .string()
  .openapi({
    description:
      'Code that is the standard USPS abbreviation for the trailing designator in a street address. ',
    example: 'ST',
    title: 'Street Suffix Abbreviation',
  })
  .openapi('StreetSuffixAbbreviation')

const UpdateKeyNumberSchema = z
  .string()
  .openapi({
    description:
      'Field that contains a number that uniquely identifies a record; used to identify the base record to which an add or delete transaction is being directed. The Update Key Number field is used only when applying transactions to the base file; it is not used in address matching and remains fixed for the life of the record. The field is alphanumeric and consists of the database segment code (V1, V2, W1, W2, X1, X2, Y1, Y2, Z1, or Z2) and eight characters containing an alphanumeric value ranging from 00000001 to AAAAAAAA.',
    example: '00000001',
    title: 'Update Key Number',
  })
  .openapi('UpdateKeyNumber')

const UrbanizationCityStateKeySchema = z
  .string()
  .openapi({
    description:
      'An index to the City State file that provides the urbanization name for this delivery range.',
    example: 'V18475',
    title: 'Urbanization City State Key',
  })
  .openapi('UrbanizationCityStateKey')

const ZipClassificationCodeSchema = z
  .enum(['', 'M', 'P', 'U'])
  .openapi({
    description:
      'A field that describes the type of ZIP area that a 5-digit ZIP Code serves, e.g., a single educational institution, post office boxes only, or a single address that has unusually high mail volume or many different addresses.\n - M = Military ZIP Code\n - P = ZIP Code having only Post Office Boxes\n - U = Unique ZIP Code (ZIP assigned to a single organization)\n - Blank = Standard ZIP with many addresses assigned to it',
    title: 'ZIP Classification Code',
  })
  .openapi('ZipClassificationCode')

const ZipCodeSchema = z
  .string()
  .openapi({
    description:
      'A 5-digit code that identifies a specific geographic delivery area. ZIP Codes can represent an area within a state, or a single building or company that has a very high mail volume. ',
    example: '1234',
    title: 'ZIP Code',
  })
  .openapi('ZipCode')

const ZipPlus_4CodeSchema = z
  .string()
  .openapi({
    description:
      'Nine-digit code that identifies a small geographic delivery area that is serviceable by a single carrier; appears in the last line of the address on a mail piece.',
    example: '12345-6789',
    title: 'ZIP + 4 Code',
  })
  .openapi('ZipPlus_4Code')

const UspsAddressSchema = z
  .object({
    address_secondary_abbreviation: AddressSecondaryAbbreviationSchema,
    base_alternate_code: BaseAlternateCodeSchema,
    building_or_firm_name: BuildingOrFirmNameSchema,
    carrier_route_id: CarrierRouteIdSchema,
    carrier_route_rate_sortation: CarrierRouteRateSortationSchema,
    city: CitySchema,
    city_abbreviation: CityAbbreviationSchema,
    city_state_mailing_name_indicator: CityStateMailingNameIndicatorSchema,
    city_state_name_facility_code: CityStateNameFacilityCodeSchema,
    congressional_district_number: CongressionalDistrictNumberSchema,
    country: UspsCountrySchema,
    country_iso: UspsCountryIsoSchema,
    country_iso_2: UspsCountryIso_2Schema,
    county: CountySchema,
    county_number: CountyNumberSchema,
    dataset: UspsDatasetSchema,
    finance_number: FinanceNumberSchema,
    government_building_indicator: GovernmentBuildingIndicatorSchema,
    id: IDSchema,
    lacs_status_indicator: LacsStatusIndicatorSchema,
    language: UspsLanguageSchema,
    last_line: LastLineSchema,
    line_1: Line_1Schema,
    line_2: Line_2Schema,
    municipality_city_state_key: MunicipalityCityStateKeySchema,
    plus_4_code: Plus_4CodeSchema,
    preferred_city: PreferredCitySchema,
    preferred_last_line_city_state_key: PreferredLastLineCityStateKeySchema,
    primary_number: PrimaryNumberSchema,
    record_type_code: RecordTypeCodeSchema,
    secondary_number: SecondaryNumberSchema,
    state: StateSchema,
    state_abbreviation: StateAbbreviationSchema,
    street_name: StreetNameSchema,
    street_post_directional_abbreviation: StreetPostDirectionalAbbreviationSchema,
    street_pre_directional_abbreviation: StreetPreDirectionalAbbreviationSchema,
    street_suffix_abbreviation: StreetSuffixAbbreviationSchema,
    update_key_number: UpdateKeyNumberSchema,
    urbanization_city_state_key: UrbanizationCityStateKeySchema,
    zip_classification_code: ZipClassificationCodeSchema,
    zip_code: ZipCodeSchema,
    zip_plus_4_code: ZipPlus_4CodeSchema,
  })
  .openapi({
    description: 'Standard USA Address',
    required: [
      'id',
      'dataset',
      'country',
      'country_iso',
      'country_iso_2',
      'language',
      'primary_number',
      'secondary_number',
      'plus_4_code',
      'line_1',
      'line_2',
      'last_line',
      'zip_code',
      'zip_plus_4_code',
      'update_key_number',
      'record_type_code',
      'carrier_route_id',
      'street_pre_directional_abbreviation',
      'street_name',
      'street_suffix_abbreviation',
      'street_post_directional_abbreviation',
      'building_or_firm_name',
      'address_secondary_abbreviation',
      'base_alternate_code',
      'lacs_status_indicator',
      'government_building_indicator',
      'state_abbreviation',
      'state',
      'municipality_city_state_key',
      'urbanization_city_state_key',
      'preferred_last_line_city_state_key',
      'county',
      'city',
      'city_abbreviation',
      'preferred_city',
      'city_state_name_facility_code',
      'zip_classification_code',
      'city_state_mailing_name_indicator',
      'carrier_route_rate_sortation',
      'finance_number',
      'congressional_district_number',
      'county_number',
    ],
    title: 'United States Postal Service Address',
  })
  .openapi('UspsAddress')

const GbrGlobalAddressSchema = z
  .object({
    administrative_county: z
      .literal('')
      .openapi({ description: 'Not available for non-UK addresses' }),
    building_name: z.literal('').openapi({ description: 'Not available for non-UK addresses' }),
    building_number: z.literal('').openapi({ description: 'Not available for non-UK addresses' }),
    country: CountrySchema,
    country_iso: CountryISOSchema,
    country_iso_2: CountryISO2Schema,
    county: z.string().openapi({ description: 'State or county name', example: 'Georgia' }),
    county_code: z
      .string()
      .openapi({
        description: 'Code abbreviation for state or county used in some countries.',
        example: 'GA',
      }),
    dataset: DatasetSchema,
    delivery_point_suffix: z
      .literal('')
      .openapi({ description: 'Not available for non-UK addresses' }),
    department_name: z.literal('').openapi({ description: 'Not available for non-UK addresses' }),
    dependant_locality: z
      .literal('')
      .openapi({ description: 'Not available for non-UK addresses' }),
    dependant_thoroughfare: z
      .literal('')
      .openapi({ description: 'Not available for non-UK addresses' }),
    district: z.literal('').openapi({ description: 'Not available for non-UK addresses' }),
    double_dependant_locality: z
      .literal('')
      .openapi({ description: 'Not available for non-UK addresses' }),
    eastings: z.literal('').openapi({ description: 'Not available for non-UK addresses' }),
    id: IDSchema,
    language: LanguageSchema,
    latitude: LatitudeSchema,
    line_1: z
      .string()
      .openapi({
        description: 'First line of the address. Typically the building number and street name',
        example: '10 Georgia Ave',
        title: 'Address First Line',
      }),
    line_2: z
      .string()
      .openapi({
        description: 'Second line of the address. Can be blank',
        example: '',
        title: 'Address Second Line',
      }),
    line_3: z
      .string()
      .openapi({
        description: 'Third line of the address. Can also be blank',
        example: '',
        title: 'Address Third Line',
      }),
    longitude: LongitudeSchema,
    native: z
      .xor([EcadAddressSchema, EcafAddressSchema, UspsAddressSchema])
      .openapi({ description: 'The native representation of a non-UK address' }),
    northings: z.literal('').openapi({ description: 'Not available for non-UK addresses' }),
    organisation_name: z.literal('').openapi({ description: 'Not available for non-UK addresses' }),
    po_box: z.literal('').openapi({ description: 'Not available for non-UK addresses' }),
    post_town: z
      .string()
      .openapi({ description: 'The city, town or other primary locality\n', example: 'Commerce' }),
    postal_county: z.literal('').openapi({ description: 'Not available for non-UK addresses' }),
    postcode: z
      .string()
      .openapi({
        description: 'Represents the postal or zip code',
        example: '30529-2320',
        title: 'Postal Code',
      }),
    postcode_inward: z.literal('').openapi({ description: 'Not available for non-UK addresses' }),
    postcode_outward: z.literal('').openapi({ description: 'Not available for non-UK addresses' }),
    postcode_type: z.literal('').openapi({ description: 'Not available for non-UK addresses' }),
    premise: z.literal('').openapi({ description: 'Not available for non-UK addresses' }),
    su_organisation_indicator: z
      .literal('')
      .openapi({ description: 'Not available for non-UK addresses' }),
    sub_building_name: z.literal('').openapi({ description: 'Not available for non-UK addresses' }),
    thoroughfare: z.literal('').openapi({ description: 'Not available for non-UK addresses' }),
    traditional_county: z
      .literal('')
      .openapi({ description: 'Not available for non-UK addresses' }),
    udprn: z
      .string()
      .openapi({
        description: 'Not available for non-UK addresses. See `id` for address identifier',
      }),
    umprn: z
      .literal('')
      .openapi({
        description: 'Not available for non-UK addresses. See `id` for address identifier',
      }),
    uprn: z
      .literal('')
      .openapi({
        description: 'Not available for non-UK addresses. See `id` for address identifier',
      }),
    ward: z.literal('').openapi({ description: 'Not available for non-UK addresses' }),
  })
  .openapi({
    description: 'Global (non-UK) address in the UK address format',
    required: [
      'postcode',
      'postcode_outward',
      'postcode_inward',
      'post_town',
      'dependant_locality',
      'double_dependant_locality',
      'thoroughfare',
      'dependant_thoroughfare',
      'building_number',
      'building_name',
      'sub_building_name',
      'po_box',
      'department_name',
      'organisation_name',
      'udprn',
      'umprn',
      'postcode_type',
      'su_organisation_indicator',
      'delivery_point_suffix',
      'line_1',
      'line_2',
      'line_3',
      'premise',
      'country',
      'administrative_county',
      'postal_county',
      'traditional_county',
      'district',
      'ward',
      'longitude',
      'latitude',
      'eastings',
      'northings',
      'uprn',
      'county',
      'county_code',
      'id',
      'dataset',
      'country_iso',
      'country_iso_2',
      'language',
      'native',
    ],
    title: 'Global Address',
  })
  .openapi('GbrGlobalAddress')

const GbrResolveAddressResponseSchema = z
  .object({
    code: z.literal(2000),
    message: z.literal('Success'),
    result: z.xor([
      PafAddressSchema,
      MrAddressSchema,
      WelshPafAddressSchema,
      PafAliasAddressSchema,
      NybAddressSchema,
      GbrGlobalAddressSchema,
    ]),
  })
  .openapi({ required: ['message', 'code', 'result'], title: 'Address Resolution Response (GBR)' })
  .openapi('GbrResolveAddressResponse')

const InvalidPhoneNumberSchema = z
  .object({
    country: z
      .literal(null)
      .nullable()
      .openapi({ description: 'Full country name', 'x-nullable': true }),
    current_carrier: z
      .literal(null)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Representation of current phone carrier information like network code, name, country, network type',
        'x-nullable': true,
      }),
    international_format: z
      .literal(null)
      .nullable()
      .openapi({
        description: 'Phone number formatted to international standard',
        'x-nullable': true,
      }),
    iso_country: z
      .literal(null)
      .nullable()
      .openapi({ description: 'Country code in 3 letter ISO format', 'x-nullable': true }),
    iso_country_2: z
      .literal(null)
      .nullable()
      .openapi({ description: 'Country code in 2 letter ISO format', 'x-nullable': true }),
    national_format: z
      .literal(null)
      .nullable()
      .openapi({ description: 'Phone number formatted to local standard', 'x-nullable': true }),
    original_carrier: z
      .literal(null)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Representation of original phone carrier information like network code, name, country, network type',
        'x-nullable': true,
      }),
    valid: z.literal(false),
  })
  .openapi({
    required: [
      'valid',
      'national_format',
      'international_format',
      'iso_country',
      'iso_country_2',
      'country',
    ],
    title: 'Invalid Phone Number Object',
  })
  .openapi('InvalidPhoneNumber')

const LicenseeEditableSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Licensee's first, second and third line address as well as post town concatenated by commas",
        example: '12 High Street, Manchester',
      }),
    daily: z
      .object({
        limit: z
          .number()
          .min(0)
          .exactOptional()
          .openapi({
            description:
              'The maximum number of lookups this licensee can perform in a day. `null` indicates the limit is not active',
            example: 10000,
            'x-nullable': true,
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Licensee individual or organisation name',
        example: 'Qwerty Widgets Limited',
      }),
    postcode: z
      .string()
      .exactOptional()
      .openapi({ description: "Licensee's postcode", example: 'ID1 1QD' }),
    whitelist: z
      .array(z.string().openapi({ example: 'https://www.example.com' }))
      .exactOptional()
      .openapi({
        description: 'A list of allowed URLs. An empty list means that whitelisting is disabled',
      }),
  })
  .openapi({
    description: 'Licensee object which can be defined by user',
    title: 'Licensee',
    required: [],
  })
  .openapi('LicenseeEditable')

const LicenseeSchema = LicenseeEditableSchema.and(
  z
    .object({
      createdAt: z
        .string()
        .openapi({
          description: 'Timestamp for when the licensee was created',
          example: '2016-01-21T17:14:49.971Z',
        }),
      daily: z
        .object({
          count: z
            .number()
            .min(0)
            .openapi({
              description:
                'The number lookups performed by the licensee on the day represented b `licesees.daily.updatedAt`',
              example: 232,
            }),
          updatedAt: z
            .string()
            .openapi({
              description: 'The timestamp when the limit was last used.',
              example: '2016-08-05T16:43:28.865Z',
            }),
        })
        .openapi({ required: ['count', 'updatedAt'] }),
      id: z
        .string()
        .openapi({
          description:
            'An immutable ID provided for every licensee. Primarily used for paginated list requests.\n',
          example: '56a11209ebe230380bf104c3',
        }),
      key: z
        .string()
        .openapi({
          description:
            'Uniquely identifies a licensee for a key. \n\nRequired to perform paid lookups for a specific licensee. Typically begins `sk_`.\n',
          example: 'sl_ijoiqsxeQgXW2gkiE0X94',
        }),
    })
    .openapi({
      required: ['id', 'key', 'createdAt', 'name', 'address', 'postcode', 'whitelist', 'daily'],
    }),
)
  .openapi({ title: 'Licensee' })
  .openapi('Licensee')

const LicenseeParamSchema = z
  .string()
  .openapi({
    description: 'Uniquely identifies a licensee\n',
    example: 'sk_hk71kco54zGSGvF9eXXrvvnMOLLNh',
    title: 'Licensee Key',
  })
  .openapi('LicenseeParam')

const LicenseeResponseSchema = z
  .object({ code: z.literal(2000), message: z.literal('Success'), result: LicenseeSchema })
  .openapi({ required: ['message', 'code', 'result'], title: 'Licensee Response' })
  .openapi('LicenseeResponse')

const LicenseesResponseSchema = z
  .object({
    code: z.literal(2000),
    message: z.literal('Success'),
    result: z
      .object({
        hasMore: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Returns true if there are more licensees listed after the maximum number of results as implied by `limit`',
          }),
        licensees: z.array(LicenseeSchema).exactOptional(),
      })
      .openapi({ description: 'List of licensees', required: [] }),
  })
  .openapi({ required: ['message', 'code', 'result'], title: 'Licensee List Response' })
  .openapi('LicenseesResponse')

const LimitParamSchema = z
  .int32()
  .min(1)
  .max(100)
  .default(10)
  .openapi({
    description:
      'Specifies the maximum number of suggestions to retrieve.\n\nBy default the limit is 10, unless a postcode is queried (then all addresses at that postcode will be returned). Limit can be shortened to `l=`\n',
    example: 5,
    title: 'Limit',
  })
  .openapi('LimitParam')

const NotFoundResponseSchema = ErrorResponseSchema.and(
  z
    .object({
      code: z.int32().openapi({ description: '`404X` type error response code' }),
      message: z.string().openapi({ description: 'Resource not found error description' }),
    })
    .openapi({ required: ['code', 'message'] }),
)
  .openapi({ title: 'Not Found Response' })
  .openapi('NotFoundResponse')

const PageParamSchema = z
  .int32()
  .min(0)
  .default(0)
  .openapi({
    description:
      '0 indexed indicator of the page of results to receive. Virtually all postcode results are returned on page 0. \n\nA small number of Multiple Residence postcodes may need pagination (i.e. have more than 100 premises).\n',
    example: 0,
    title: 'Page',
  })
  .openapi('PageParam')

const PhoneNumberSchema = z
  .object({
    country: z.string().openapi({ description: 'Full country name', example: 'United Kingdom' }),
    current_carrier: CarrierSchema.openapi({
      description:
        'Representation of current phone carrier information like network code, name, country, network type',
    }),
    international_format: z
      .string()
      .openapi({
        description: 'Phone number formatted to international standard',
        example: '442071128019',
      }),
    iso_country: z
      .string()
      .openapi({ description: 'Country code in 3 letter ISO format', example: 'GBR' }),
    iso_country_2: z
      .string()
      .openapi({ description: 'Country code in 2 letter ISO format', example: 'GB' }),
    national_format: z
      .string()
      .openapi({
        description: 'Phone number formatted to local standard',
        example: '020 7112 8019',
      }),
    original_carrier: CarrierSchema.openapi({
      description:
        'Representation of original phone carrier information like network code, name, country, network type',
    }),
    valid: z.literal(true),
  })
  .openapi({
    required: [
      'valid',
      'national_format',
      'international_format',
      'iso_country',
      'iso_country_2',
      'country',
      'current_carrier',
      'original_carrier',
    ],
    title: 'Phone Number Object',
  })
  .openapi('PhoneNumber')

const PhoneNumberResponseSchema = z
  .object({
    code: z.literal(2000),
    message: z.literal('Success'),
    result: z.xor([PhoneNumberSchema, InvalidPhoneNumberSchema]),
  })
  .openapi({ required: ['message', 'code', 'result'], title: 'Phone Number Verification Response' })
  .openapi('PhoneNumberResponse')

const PlaceSchema: z.ZodType<PlaceType> = z
  .lazy(() =>
    z
      .object({
        country_iso: PlaceCountryIsoSchema,
        dataset: z
          .literal('geonames')
          .openapi({
            description: 'Indicates the provenance of a place.\n\n  - `geonames` GeoNames place',
            title: 'Dataset',
          }),
        descriptive_name: PlaceDescriptiveNameSchema,
        id: z
          .string()
          .openapi({
            description: 'Global unique internally generated identifier for a place',
            example: 'geonames_5353',
            title: 'ID',
          }),
        language: LanguageSchema,
        latitude: LatitudeSchema,
        longitude: LongitudeSchema,
        name: PlaceNameSchema,
        native: z
          .xor([GeonamesPlaceSchema])
          .exactOptional()
          .openapi({ description: 'Native representation of a place' }),
      })
      .openapi({
        description: 'Represents a geographical place',
        required: [
          'id',
          'dataset',
          'name',
          'descriptive_name',
          'country_iso',
          'language',
          'longitude',
          'latitude',
        ],
        title: 'Place',
      }),
  )
  .openapi('Place')

const PlaceIdSchema = z
  .string()
  .openapi({ description: 'Unique identifier for place\n', example: 'geonames_5324', title: 'ID' })
  .openapi('PlaceId')

const PlaceSuggestionSchema = z
  .object({
    country_iso: PlaceCountryIsoSchema,
    descriptive_name: PlaceDescriptiveNameSchema,
    id: PlaceIdSchema,
    name: PlaceNameSchema,
  })
  .openapi({
    description: 'Represents a possible place given an autocomplete query.\n',
    required: ['name', 'descriptive_name', 'id', 'country_iso'],
    title: 'Place Description',
  })
  .openapi('PlaceSuggestion')

const PlaceResponseSchema = z
  .object({
    code: z.literal(2000),
    message: z.literal('Success'),
    result: z
      .object({
        hits: z
          .array(z.xor([PlaceSuggestionSchema]))
          .openapi({ description: 'List of up to 10 matching places\n' }),
      })
      .openapi({ required: ['hits'] }),
  })
  .openapi({ required: ['message', 'code', 'result'], title: 'Place Search Response' })
  .openapi('PlaceResponse')

const PostTownParamSchema = z
  .string()
  .openapi({ description: 'Filter by town. ', example: 'London', title: 'Post Town' })
  .openapi('PostTownParam')

const PostcodeAreaParamSchema = z
  .string()
  .openapi({
    description:
      'Filter by postcode. Can be combined with query to perform a postcode + building number/name search.',
    example: 'SW',
    title: 'Postcode Area',
  })
  .openapi('PostcodeAreaParam')

const PostcodeNotFoundResponseSchema = z
  .object({
    code: z.literal(4040),
    message: z.literal('Postcode not found'),
    suggestions: z
      .array(z.string().openapi({ example: 'SN13 0SF' }))
      .openapi({ description: 'A list of alternate nearest matching postcodes you can try' }),
  })
  .openapi({ required: ['message', 'code', 'suggestions'], title: 'Postcode Not Found' })
  .openapi('PostcodeNotFoundResponse')

const PostcodeOutwardParamSchema = z
  .string()
  .openapi({ description: 'Filter by outward code.', example: '1AA', title: 'Postcode Outward' })
  .openapi('PostcodeOutwardParam')

const PostcodeParamSchema = z
  .string()
  .openapi({
    description:
      'Filter by postcode. Can be combined with query to perform a postcode + building number/name search.',
    example: 'SW1A 2AA',
    title: 'Postcode',
  })
  .openapi('PostcodeParam')

const PostcodeResponseSchema = z
  .object({
    code: z.literal(2000),
    message: z.literal('Success'),
    result: z
      .array(
        z.xor([
          PafAddressSchema,
          MrAddressSchema,
          NybAddressSchema,
          PafAliasAddressSchema,
          WelshPafAddressSchema,
          GbrGlobalAddressSchema,
        ]),
      )
      .openapi({
        description:
          'All addresses listed at the postcode.\n\nIf Eircode is enabled, addreses for the Republic of Ireland will be returned in the English format.\n',
      }),
  })
  .openapi({ required: ['message', 'code', 'result'], title: 'Postcode Response' })
  .openapi('PostcodeResponse')

const PostcodeSectorParamSchema = z
  .string()
  .openapi({
    description:
      'Filter by postcode sector, the outward code plus first numeric of the inward code. ',
    example: 'SW1A 2',
    title: 'Postcode Sector',
  })
  .openapi('PostcodeSectorParam')

const PostcodeTypeParamSchema = z
  .string()
  .openapi({
    description:
      'Filter by Postcode Type. Useful for separating organisational and residential addresses',
    example: 'L',
    title: 'Country',
  })
  .openapi('PostcodeTypeParam')

const RateLimitedResponseSchema = ErrorResponseSchema.and(
  z
    .object({
      code: z.int32().openapi({ description: '`429X` type error response code' }),
      message: z.string().openapi({ description: 'Request is being rate limited' }),
    })
    .openapi({ required: ['code', 'message'] }),
)
  .openapi({ title: 'Unauthorized Request Error Response' })
  .openapi('RateLimitedResponse')

const ResolvePlaceResponseSchema = z
  .object({ code: z.literal(2000), message: z.literal('Success'), result: z.xor([PlaceSchema]) })
  .openapi({ required: ['message', 'code', 'result'], title: 'Place Resolution Response' })
  .openapi('ResolvePlaceResponse')

const SmallUserParamSchema = z
  .string()
  .openapi({
    description:
      'Filter by Organisation Indicator. Useful for separating organisational and residential addresses',
    example: 'Y',
    title: 'SU Organisation Indicator',
  })
  .openapi('SmallUserParam')

const StartParamSchema = z
  .int32()
  .openapi({
    description:
      'A start date/time in the form of a UNIX Timestamp in milliseconds, e.g.  `1418556452651`.\n',
    example: 1418556452651,
    title: 'Start Time',
  })
  .openapi('StartParam')

const TagsParamSchema = z
  .string()
  .openapi({
    description:
      'A comma separated list of tags to query over. \n\nUseful if you want to specify the circumstances in which the request was made.\n\nIf multiple tags are specified, the response will only comprise of requests for which all the tags are satisfied - i.e. searching `"foo,bar"` will only query requests which tagged both `"foo"` and `"bar"`.\n',
    example: 'foo,bar',
    title: 'Tags',
  })
  .openapi('TagsParam')

const UDPRNResponseSchema = z
  .object({
    code: z.literal(2000),
    message: z.literal('Success'),
    result: z.xor([PafAddressSchema, NybAddressSchema]),
  })
  .openapi({ required: ['message', 'code', 'result'], title: 'UDPRN Response' })
  .openapi('UDPRNResponse')

const UMPRNResponseSchema = z
  .object({
    code: z.literal(2000),
    message: z.literal('Success'),
    result: z.xor([MrAddressSchema]),
  })
  .openapi({ required: ['message', 'code', 'result'], title: 'UDPRN Response' })
  .openapi('UMPRNResponse')

const UPRNParamSchema = z
  .int()
  .openapi({
    description:
      'Filters by UPRN. Does not accept comma separated terms. Only a single term is permitted',
    example: '100023336956',
    title: 'UPRN',
  })
  .openapi('UPRNParam')

const UnauthorizedResponseSchema = ErrorResponseSchema.and(
  z
    .object({
      code: z.int32().openapi({ description: '`401X` type error response code' }),
      message: z.string().openapi({ description: 'Unauthorized request error description' }),
    })
    .openapi({ required: ['code', 'message'] }),
)
  .openapi({ title: 'Unauthorized Request Error Response' })
  .openapi('UnauthorizedResponse')

const UsaGlobalAddressSchema = z
  .object({
    address_secondary_abbreviation: z
      .literal('')
      .openapi({ description: 'Not available for non-US addresses' }),
    base_alternate_code: z
      .literal('')
      .openapi({ description: 'Not available for non-US addresses' }),
    building_or_firm_name: z
      .literal('')
      .openapi({ description: 'Not available for non-US addresses' }),
    carrier_route_id: z.literal('').openapi({ description: 'Not available for non-US addresses' }),
    carrier_route_rate_sortation: z
      .literal('')
      .openapi({ description: 'Not available for non-US addresses' }),
    city: z.string().openapi({ description: 'City name' }),
    city_abbreviation: z.string().openapi({ description: 'City name abbreviation (if available)' }),
    city_state_mailing_name_indicator: z
      .literal('')
      .openapi({ description: 'Not available for non-US addresses' }),
    city_state_name_facility_code: z
      .literal('')
      .openapi({ description: 'Not available for non-US addresses' }),
    congressional_district_number: z
      .literal('')
      .openapi({ description: 'Not available for non-US addresses' }),
    country: CountrySchema,
    country_iso: CountryISOSchema,
    country_iso_2: CountryISO2Schema,
    county: z.string().openapi({ description: 'County name' }),
    county_number: z.literal('').openapi({ description: 'Not available for non-US addresses' }),
    dataset: DatasetSchema,
    finance_number: z.literal('').openapi({ description: 'Not available for non-US addresses' }),
    government_building_indicator: z
      .literal('')
      .openapi({ description: 'Not available for non-US addresses' }),
    id: IDSchema,
    lacs_status_indicator: z
      .literal('')
      .openapi({ description: 'Not available for non-US addresses' }),
    language: LanguageSchema,
    last_line: z.literal('').openapi({ description: 'Not available for non-US addresses' }),
    line_1: z.string().openapi({ description: 'First line of address' }),
    line_2: z.string().openapi({ description: 'Second line of address' }),
    municipality_city_state_key: z
      .literal('')
      .openapi({ description: 'Not available for non-US addresses' }),
    native: z
      .xor([
        EcadAddressSchema,
        EcafAddressSchema,
        PafAddressSchema,
        MrAddressSchema,
        NybAddressSchema,
        PafAliasAddressSchema,
        WelshPafAddressSchema,
      ])
      .openapi({ description: 'The native representation of a non-US address' }),
    plus_4_code: z.literal('').openapi({ description: 'Not available for non-US addresses' }),
    preferred_city: z.literal('').openapi({ description: 'Not available for non-US addresses' }),
    preferred_last_line_city_state_key: z
      .literal('')
      .openapi({ description: 'Not available for non-US addresses' }),
    primary_number: z.literal('').openapi({ description: 'Not available for non-US addresses' }),
    record_type_code: z.literal('').openapi({ description: 'Not available for non-US addresses' }),
    secondary_number: z.literal('').openapi({ description: 'Not available for non-US addresses' }),
    state: z.string().openapi({ description: 'State or province' }),
    state_abbreviation: z
      .string()
      .openapi({ description: 'Code of state or province (if available)' }),
    street_name: z.literal('').openapi({ description: 'Not available for non-US addresses' }),
    street_post_directional_abbreviation: z
      .literal('')
      .openapi({ description: 'Not available for non-US addresses' }),
    street_pre_directional_abbreviation: z
      .literal('')
      .openapi({ description: 'Not available for non-US addresses' }),
    street_suffix_abbreviation: z
      .literal('')
      .openapi({ description: 'Not available for non-US addresses' }),
    update_key_number: z.literal('').openapi({ description: 'Not available for non-US addresses' }),
    urbanization_city_state_key: z
      .literal('')
      .openapi({ description: 'Not available for non-US addresses' }),
    zip_classification_code: z
      .literal('')
      .openapi({ description: 'Not available for non-US addresses' }),
    zip_code: z.string().openapi({ description: 'Partial postcode of address' }),
    zip_plus_4_code: z.string().openapi({ description: 'Full postal code of address' }),
  })
  .openapi({
    description: 'Global (non-US) Address in the US address format',
    required: [
      'id',
      'dataset',
      'country',
      'country_iso',
      'country_iso_2',
      'language',
      'primary_number',
      'secondary_number',
      'plus_4_code',
      'line_1',
      'line_2',
      'last_line',
      'zip_code',
      'zip_plus_4_code',
      'update_key_number',
      'record_type_code',
      'carrier_route_id',
      'street_pre_directional_abbreviation',
      'street_name',
      'street_suffix_abbreviation',
      'street_post_directional_abbreviation',
      'building_or_firm_name',
      'address_secondary_abbreviation',
      'base_alternate_code',
      'lacs_status_indicator',
      'government_building_indicator',
      'state_abbreviation',
      'state',
      'municipality_city_state_key',
      'urbanization_city_state_key',
      'preferred_last_line_city_state_key',
      'county',
      'city',
      'city_abbreviation',
      'preferred_city',
      'city_state_name_facility_code',
      'zip_classification_code',
      'city_state_mailing_name_indicator',
      'carrier_route_rate_sortation',
      'finance_number',
      'congressional_district_number',
      'county_number',
      'native',
    ],
    title: 'Global Address',
  })
  .openapi('UsaGlobalAddress')

const UsaResolveAddressResponseSchema = z
  .object({
    code: z.literal(2000),
    message: z.literal('Success'),
    result: z.xor([UspsAddressSchema, UsaGlobalAddressSchema]),
  })
  .openapi({ required: ['message', 'code', 'result'], title: 'Address Resolution Response (USA)' })
  .openapi('UsaResolveAddressResponse')

const UserTokenParamSchema = z
  .string()
  .openapi({
    description:
      'A secret key used for sensitive operations on your account and API Keys.\n\nYour user token can be retrieved and managed from your [accounts page](https://ideal-postcodes.co.uk/account).\n\nTypically beings `uk_...`\n',
    example: 'uk_B59ScW1p1HHouf1VqclEPZUx',
    title: 'User Token',
  })
  .openapi('UserTokenParam')

const EcadSchema = EcadAddressSchema.openapi('Ecad')

const EcafSchema = EcafAddressSchema.openapi('Ecaf')

const GeonamesSchema = GeonamesPlaceSchema.openapi('Geonames')

export const getAddressesRoute = createRoute({
  method: 'get',
  path: '/addresses',
  tags: ['UK'],
  summary: 'Extract Addresses',
  description:
    'Extract a list of complete addresses that match the query ordered by relevance score. This query accepts an optional limit and page query (defaults to 10 and 0 respectively).\n\nIf a valid postcode is passed as the query string, the entire address list for that postcode is passed as a result. Note, in these cases, limit and page parameters are ignored.\n\nThis API is designed as a multi-purpose tool for generating address lists, cleansing and wholesale data extraction according to specific parameters.\n\nFor address autocomplete, see our address finder API - which is designed for speed and address completion.\n\n## Reverse Geocoding\n\nReturn a list of addresses around a point using the lon= and lat= querystring arguments. Addresses will be sorted in order of distance to the point. The search radius is 100m.\n\n## Filters\n\nYou can strictly narrow your result by adding filters to your query string which correspond with an address attribute.\n\nFor instance, you can restrict to postcode `SW1A 2AA` by appending `postcode=sw1a2aa`.\n\nIf a filter term is invalid, e.g. `postcode=SW1A2AAA`, then an empty result set is returned and no lookup is incurred.\n\nYou can also scope using multiple terms for the same filter with a comma separated list of terms. E.g. Restrict results to E1, E2 and E3 outward codes: `postcode_outward=e1,e2,e3`. Multiple terms are `OR`\'ed, i.e. the matching result sets are combined.\n\nAll filters can accept multiple terms unless stated otherwise below.\n\nMultiple filters can also be combined. E.g. Restrict results to small user organisations in the N postcode area: `su_organisation_indicator=Y&postcode_area=n`. Multiple filters are `AND`\'ed, i.e. each additional filter narrows the result set.\n\nA combined maximum of 5 terms are allowed across all filters.\n\n## Biases\n\nYou can boost certain addresses results that correspond with a certain address attribute. All bias searches are prefixed with `bias_`.\n\nBiased searches, unlike filtered searches, also allow unmatched addresses to appear . These will rank lower.\n\nFor instance, you can boost addresses with postcode areas `SW` and `SE` by appending `bias_postcode_area=SW,SE`.\n\nIf a bias term is invalid, e.g. `bias_postcode=SW1A2AAA` no bias effect is applied.\n\nYou may scope using multiple terms for the same bias with a comma separated list of terms. E.g. Restrict results to `E1`, `E2` and `E3` outward codes: `bias_postcode_outward=e1,e2,e3`.\n\nAll biases can accept multiple terms unless stated otherwise below.\n\nA combined maximum of 5 terms are allowed across all biases.\n\n## Search by Postcode and Building Name or Number\n\nSearch by postcode and building attribute with the postcode filter and query argument. E.g. For "SW1A 2AA Prime Minister" `/v1/addresses?postcode=sw1a2aa&q=prime minister`.\n\nThe advantage of using filters is a postcode mismatch does not result in a lookup as no results are returned.\n\n#### Search By UPRN\n\nSearch by UPRN using the `uprn` filter and excluding the query argument. E.g. `/v1/addresses?uprn=100`.\n\n## Testing\n\n- **ID1 1QD** Returns a successful query response `2000`\n- **ID1 KFA** Returns an empty query response `2000`\n- **ID1 CLIP** Returns "no lookups remaining" error `4020`\n- **ID1 CHOP** Returns "daily (or individual) lookup limit breached" error `4021`\n\nTest request undergo the usual authentication and restriction rules. This is to help surface any issues that occur during implementation and does not cost you a lookup.\n',
  operationId: 'Addresses',
  request: {
    query: z.object({
      api_key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'api_key',
          required: true,
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'form',
        },
      }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the address you wish to query. Query can be shortened to `q=`',
            explode: false,
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          LimitParamSchema.openapi({
            param: {
              explode: false,
              in: 'query',
              name: 'limit',
              schema: { $ref: '#/components/schemas/LimitParam' },
              style: 'form',
              required: false,
            },
          }),
        )
        .exactOptional(),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          PageParamSchema.openapi({
            param: {
              explode: false,
              in: 'query',
              name: 'page',
              schema: { $ref: '#/components/schemas/PageParam' },
              style: 'form',
              required: false,
            },
          }),
        )
        .exactOptional(),
      filter: FilterParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'filter',
          schema: { $ref: '#/components/schemas/FilterParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      lon: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          AddressLongitudeParamSchema.openapi({
            param: {
              explode: false,
              in: 'query',
              name: 'lon',
              schema: { $ref: '#/components/schemas/AddressLongitudeParam' },
              style: 'form',
              required: false,
            },
          }),
        )
        .exactOptional(),
      lat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          AddressLatitudeParamSchema.openapi({
            param: {
              explode: false,
              in: 'query',
              name: 'lat',
              schema: { $ref: '#/components/schemas/AddressLatitudeParam' },
              style: 'form',
              required: false,
            },
          }),
        )
        .exactOptional(),
      postcode_outward: PostcodeOutwardParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'postcode_outward',
          schema: { $ref: '#/components/schemas/PostcodeOutwardParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      postcode: PostcodeParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'postcode',
          schema: { $ref: '#/components/schemas/PostcodeParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      postcode_area: PostcodeAreaParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'postcode_area',
          schema: { $ref: '#/components/schemas/PostcodeAreaParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      postcode_sector: PostcodeSectorParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'postcode_sector',
          schema: { $ref: '#/components/schemas/PostcodeSectorParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      post_town: PostTownParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'post_town',
          schema: { $ref: '#/components/schemas/PostTownParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      uprn: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          UPRNParamSchema.openapi({
            param: {
              explode: false,
              in: 'query',
              name: 'uprn',
              schema: { $ref: '#/components/schemas/UPRNParam' },
              style: 'form',
              required: false,
            },
          }),
        )
        .exactOptional(),
      country: CountryParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'country',
          schema: { $ref: '#/components/schemas/CountryParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      postcode_type: PostcodeTypeParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'postcode_type',
          schema: { $ref: '#/components/schemas/PostcodeTypeParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      su_organisation_indicator: SmallUserParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'su_organisation_indicator',
          schema: { $ref: '#/components/schemas/SmallUserParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      box: BoxParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'box',
          schema: { $ref: '#/components/schemas/BoxParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      bias_postcode_outward: BiasPostcodeOutwardParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'bias_postcode_outward',
          schema: { $ref: '#/components/schemas/BiasPostcodeOutwardParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      bias_postcode: BiasPostcodeParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'bias_postcode',
          schema: { $ref: '#/components/schemas/BiasPostcodeParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      bias_postcode_area: BiasPostcodeAreaParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'bias_postcode_area',
          schema: { $ref: '#/components/schemas/BiasPostcodeAreaParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      bias_postcode_sector: BiasPostcodeSectorParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'bias_postcode_sector',
          schema: { $ref: '#/components/schemas/BiasPostcodeSectorParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      bias_post_town: BiasPosttownParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'bias_post_town',
          schema: { $ref: '#/components/schemas/BiasPosttownParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      bias_thoroughfare: BiasThoroughfareParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'bias_thoroughfare',
          schema: { $ref: '#/components/schemas/BiasThoroughfareParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      bias_country: BiasCountryParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'bias_country',
          schema: { $ref: '#/components/schemas/BiasCountryParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      bias_lonlat: BiasLonLatParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'bias_lonlat',
          schema: { $ref: '#/components/schemas/BiasLonLatParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddressResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
    404: {
      description: 'Postcode Not Found',
      content: { 'application/json': { schema: PostcodeNotFoundResponseSchema } },
    },
  },
})

export const getAutocompleteAddressesRoute = createRoute({
  method: 'get',
  path: '/autocomplete/addresses',
  tags: ['Address Search'],
  summary: 'Find Address',
  description:
    "The address autocomplete API returns a list of address suggestions that match the query ordered by relevance.\n\nThis API can be used to power realtime address finders, also known as address autofill or address autocomplete.\n\nConsider using our Address Autocomplete JavaScript libraries to add address lookup to a form in moments.\n\n## Implementing Address Autocomplete\n\nRapid address autocompletion using our Address Autocomplete API is a 2 step process.\n\n1. Retrieve partial address suggestions via `/autocomplete/addresses`\n2. Retrieve the entire address with the ID provided in the suggestion\n\nStep 2 will decrement your lookup balance.\n\nPlease note, this API is not intended to be a free standalone resource.\n\n## Filters\n\nYou can strictly narrow your result by adding filters to your querystring. For instance, you can restrict to postcode `SW1A 2AA` by appending `postcode=sw1a2aa`.\n\nIf a filter term is invalid, e.g. `postcode=SW1A2AAA`, then an empty result set is returned and no lookup is incurred.\n\nYou can also scope using multiple terms for the same filter with a comma separated list of terms. E.g. Restrict results to E1, E2 and E3 outward codes: `postcode_outward=e1,e2,e3`. Multiple terms are `OR`'ed, i.e. the matching result sets are combined.\n\nAll filters can accept multiple terms unless stated otherwise below.\n\nFilters can also be combined. E.g. Restrict results to small user organisations in the N postcode area: `su_organisation_indicator=Y&postcode_area=n`. Multiple filters are `AND`'ed, i.e. each additional filter narrows the result set.\n\nA maximum of **10** terms are allowed across all filters.\n\n## Biases\n\nYou can boost certain addresses results that match specific address criteria. All bias searches are prefixed with `bias_`.\n\nBiasing (unlike filtering) also allow unmatched addresses to appear with lower precedence.\n\nFor instance, can boost addresses with postcode areas `SW` and `SE` by appending `bias_postcode_area=SW,SE`.\n\nNo bias effect applies to bias terms that are invalid. e.g. `bias_postcode=SW1A2AAA`\n\nYou may scope using multiple terms for the same bias with a comma separated list of terms. E.g. Restrict results to `E1`, `E2` and `E3` outward codes: <code>bias_postcode_outward=e1,e2,e3</code>.\n\nAll biases can accept multiple terms unless stated otherwise below.\n\nA combined maximum of **5** terms are allowed across all biases.\n\n## Suggestion Format\n\nThe suggestion format is prone to change over time. Attempts to parse the suggestion may result in your integration breaking. Instead use the suggestion as-is.\n\n## Rate Limiting\n\nYou can make up to 3000 requests to the autocomplete API within a 5 minute span. The HTTP Header contains information on your current rate limit.\n\n| Header                  | Description                                                                            |\n| ----------------------- | -------------------------------------------------------------------------------------- |\n| `X-RateLimit-Limit`     | The maximum number of requests that can be made in 5 minutes                           |\n| `X-RateLimit-Remaining` | The remaining requests within the current rate limit window                            |\n| `X-RateLimit-Reset`     | The time when the rate limit window resets in Unix Time (seconds) or UTC Epoch seconds |\n\n## Pricing\n\nThis API currently does not affect your balance. However, resolving a suggestion into a full address requires a paid request.\n\nPlease note, this API is not intended as a standalone free resource. Integrations that consistently make autocomplete requests without a paid request to resolve an address may be disrupted via tightened rate limits. Continued misuse will result in account suspension.\n",
  operationId: 'AddressAutocomplete',
  request: {
    query: z.object({
      api_key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'api_key',
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the address you wish to query. Query can be shortened to `q=`',
            explode: false,
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      context: ContextSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'context',
          schema: { $ref: '#/components/schemas/Context' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          LimitParamSchema.openapi({
            param: {
              description:
                'Limits number of address suggestions unless a postcode is detected. In this instance entire list of addreses for that postcode is returned.\n',
              explode: false,
              in: 'query',
              name: 'limit',
              schema: { $ref: '#/components/schemas/LimitParam' },
              style: 'form',
              required: false,
            },
          }),
        )
        .exactOptional(),
      postcode_outward: PostcodeOutwardParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'postcode_outward',
          schema: { $ref: '#/components/schemas/PostcodeOutwardParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      postcode: PostcodeParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'postcode',
          schema: { $ref: '#/components/schemas/PostcodeParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      postcode_area: PostcodeAreaParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'postcode_area',
          schema: { $ref: '#/components/schemas/PostcodeAreaParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      postcode_sector: PostcodeSectorParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'postcode_sector',
          schema: { $ref: '#/components/schemas/PostcodeSectorParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      post_town: PostTownParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'post_town',
          schema: { $ref: '#/components/schemas/PostTownParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      uprn: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          UPRNParamSchema.openapi({
            param: {
              explode: false,
              in: 'query',
              name: 'uprn',
              schema: { $ref: '#/components/schemas/UPRNParam' },
              style: 'form',
              required: false,
            },
          }),
        )
        .exactOptional(),
      country: CountryParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'country',
          schema: { $ref: '#/components/schemas/CountryParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      postcode_type: PostcodeTypeParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'postcode_type',
          schema: { $ref: '#/components/schemas/PostcodeTypeParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      su_organisation_indicator: SmallUserParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'su_organisation_indicator',
          schema: { $ref: '#/components/schemas/SmallUserParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      box: BoxParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'box',
          schema: { $ref: '#/components/schemas/BoxParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      bias_postcode_outward: BiasPostcodeOutwardParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'bias_postcode_outward',
          schema: { $ref: '#/components/schemas/BiasPostcodeOutwardParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      bias_postcode: BiasPostcodeParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'bias_postcode',
          schema: { $ref: '#/components/schemas/BiasPostcodeParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      bias_postcode_area: BiasPostcodeAreaParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'bias_postcode_area',
          schema: { $ref: '#/components/schemas/BiasPostcodeAreaParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      bias_postcode_sector: BiasPostcodeSectorParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'bias_postcode_sector',
          schema: { $ref: '#/components/schemas/BiasPostcodeSectorParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      bias_post_town: BiasPosttownParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'bias_post_town',
          schema: { $ref: '#/components/schemas/BiasPosttownParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      bias_thoroughfare: BiasThoroughfareParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'bias_thoroughfare',
          schema: { $ref: '#/components/schemas/BiasThoroughfareParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      bias_country: BiasCountryParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'bias_country',
          schema: { $ref: '#/components/schemas/BiasCountryParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      bias_lonlat: BiasLonLatParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'bias_lonlat',
          schema: { $ref: '#/components/schemas/BiasLonLatParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      bias_ip: BiasIpParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'bias_ip',
          schema: { $ref: '#/components/schemas/BiasIpParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AutocompleteResponseSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The maximum number of requests that can be made in 5 minutes',
          schema: z
            .number()
            .exactOptional()
            .openapi({
              description: 'The maximum number of requests that can be made in 5 minutes',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The remaining requests within the current rate limit window',
          schema: z
            .number()
            .exactOptional()
            .openapi({
              description: 'The remaining requests within the current rate limit window',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description:
            'The time when the rate limit window resets in Unix Time (seconds) or UTC Epoch seconds.\n',
          schema: z
            .number()
            .exactOptional()
            .openapi({
              description:
                'The time when the rate limit window resets in Unix Time (seconds) or UTC Epoch seconds.\n',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
  },
})

export const getAutocompleteAddressesAddressGbrRoute = createRoute({
  method: 'get',
  path: '/autocomplete/addresses/{address}/gbr',
  tags: ['Address Search'],
  summary: 'Resolve Address (GBR)',
  description:
    'Resolves an address autocompletion by its address ID.\n\nResolved addresses (including global addresses) are returned in a UK format (up to 3 address lines) using UK nomenclature (like postcode and county).\n',
  operationId: 'Resolve',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'ID of address suggestion',
            explode: false,
            in: 'path',
            name: 'address',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      api_key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'api_key',
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GbrResolveAddressResponseSchema } },
      headers: z.object({}),
    },
    404: {
      description: 'Resource not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getAutocompleteAddressesAddressUsaRoute = createRoute({
  method: 'get',
  path: '/autocomplete/addresses/{address}/usa',
  tags: ['Address Search'],
  summary: 'Resolve Address (USA)',
  description:
    'Resolves an address autocompletion by its address ID.\n\nResolved addresses (including global addresses) are returned in a US format (up to 2 address lines) using US nomenclature (like zipcode, state and city).\n',
  operationId: 'ResolveUsa',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'ID of address suggestion',
            explode: false,
            in: 'path',
            name: 'address',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      api_key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'api_key',
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UsaResolveAddressResponseSchema } },
      headers: z.object({}),
    },
    404: {
      description: 'Resource not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postCleanseAddressesRoute = createRoute({
  method: 'post',
  path: '/cleanse/addresses',
  tags: ['UK'],
  summary: 'Cleanse',
  description:
    'The address cleanse API attempts to return the closest matching address for any given address inputs. We also return a number of Match Level indicators that describe the degree to which the suggested address matches the input address. The more impaired the input address, the harder it is to cleanse.\n\n## Confidence Score\n\nThe confidence score is a number ranging between 0 and 1. Where 1 implies a full match and 0 implies no major elements completely match. Each incorrect, missing or misspelled element will subtract from the overall confidence score.\n\n### Deciding on an Acceptable Confidence Score Threshold\n\nDifferent address cleanse projects can have radically different inputs. However, within each project, the inputs tend to repeat the same errors. For instance, some input datasets may be exclusively inputted manually and be prone to typos. Others may have a persistently missing datapoint such as organistation name or postcode. For this reason, it is important to understand that there is no absolute Confidence Score threshold. Instead, the acceptable confidence score must be determined on a project by project basis based on systematic errors present in the data and business goals.\n\nWhen determining an acceptable Confidence Score threshold you should load a subset of the dataset into a spreadsheet application like Excel and sort on the score. Scrolling from top-to-bottom you will be able to observe matches from best to worst. As you start to hit the lower quality searches, you will be able to roughly determine:\n- Which confidence scores indicate ambigious matches (i.e. up to building level only)\n- Which confidence scores indicate a poor or no match (i.e. the nearest matching address is too far from the input address)\n\nDepending on your business goals, you can also use the Match Levels to determine an acceptable match. For instance, do you need to match up to the throroughfare or building name only? Are accurate organisation names an important feature?\n',
  operationId: 'AddressCleanse',
  request: {
    query: z.object({
      api_key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'api_key',
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              query: z
                .string()
                .openapi({
                  description: 'Freeform address input to cleanse\n',
                  example: '10 Downing Street, London, SW2A 2BN',
                }),
            })
            .openapi({ required: ['query'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CleanseResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: UnauthorizedResponseSchema } },
    },
    429: {
      description: 'Rate Limited',
      content: { 'application/json': { schema: RateLimitedResponseSchema } },
    },
  },
})

export const getEmailsRoute = createRoute({
  method: 'get',
  path: '/emails',
  tags: ['Emails'],
  summary: 'Email Validation',
  description: 'Query for and validate email addresses.\n',
  operationId: 'EmailValidation',
  request: {
    query: z.object({
      api_key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'api_key',
          required: true,
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'form',
        },
      }),
      query: z
        .string()
        .openapi({
          param: {
            description: 'Specifies the email address to validate',
            explode: false,
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EmailResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
  },
})

export const getKeysKeyRoute = createRoute({
  method: 'get',
  path: '/keys/{key}',
  tags: ['Keys'],
  summary: 'Availability',
  description:
    'Returns public information on key. Currently only returns whether the key is currently useable via the `available` property. Use this to discover if the key is useable before making further requests.\n\nYou may pass both API Keys (beginning `ak_`) and Sub-licensed Keys (beginning `sl_`).\n## Testing\n\nTo test your implementation of our API, you may use the following test keys.\n\n- **iddqd** Availability will return as `true`\n- **idkfa** Availability will return as `false`\n\n',
  operationId: 'KeyAvailability',
  request: {
    params: z.object({
      key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'path',
          name: 'key',
          required: true,
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'simple',
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ApiKeyResponseSchema } },
    },
    404: {
      description: 'Invalid Key',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getKeysKeyConfigsRoute = createRoute({
  method: 'get',
  path: '/keys/{key}/configs',
  tags: ['Configs'],
  summary: 'List',
  description: 'Lists configurations associated with a key',
  operationId: 'ListConfigs',
  request: {
    params: z.object({
      key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'path',
          name: 'key',
          required: true,
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      user_token: UserTokenParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'user_token',
          schema: { $ref: '#/components/schemas/UserTokenParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConfigsResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
    401: {
      description: 'Unauthorized Request',
      content: { 'application/json': { schema: UnauthorizedResponseSchema } },
    },
  },
})

export const postKeysKeyConfigsRoute = createRoute({
  method: 'post',
  path: '/keys/{key}/configs',
  tags: ['Configs'],
  summary: 'Create',
  description: 'Create a config',
  operationId: 'CreateConfig',
  request: {
    params: z.object({
      key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'path',
          name: 'key',
          required: true,
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      user_token: UserTokenParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'user_token',
          schema: { $ref: '#/components/schemas/UserTokenParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
    }),
    body: { content: { 'application/json': { schema: ConfigNewParamSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConfigResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
    401: {
      description: 'Unauthorized Request',
      content: { 'application/json': { schema: UnauthorizedResponseSchema } },
    },
  },
})

export const getKeysKeyConfigsConfigRoute = createRoute({
  method: 'get',
  path: '/keys/{key}/configs/{config}',
  tags: ['Configs'],
  summary: 'Retrieve',
  description: 'Retrieve config object by name',
  operationId: 'RetrieveConfig',
  request: {
    params: z.object({
      key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'path',
          name: 'key',
          required: true,
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'simple',
        },
      }),
      config: ConfigParamSchema.openapi({
        param: {
          explode: false,
          in: 'path',
          name: 'config',
          required: true,
          schema: { $ref: '#/components/schemas/ConfigParam' },
          style: 'simple',
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConfigResponseSchema } },
      headers: z.object({}),
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: NotFoundResponseSchema } },
    },
  },
})

export const postKeysKeyConfigsConfigRoute = createRoute({
  method: 'post',
  path: '/keys/{key}/configs/{config}',
  tags: ['Configs'],
  summary: 'Update',
  description: 'Updates configuration object',
  operationId: 'UpdateConfig',
  request: {
    params: z.object({
      key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'path',
          name: 'key',
          required: true,
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'simple',
        },
      }),
      config: ConfigParamSchema.openapi({
        param: {
          explode: false,
          in: 'path',
          name: 'config',
          required: true,
          schema: { $ref: '#/components/schemas/ConfigParam' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      user_token: UserTokenParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'user_token',
          schema: { $ref: '#/components/schemas/UserTokenParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
    }),
    body: { content: { 'application/json': { schema: ConfigUpdateParamSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConfigResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
    401: {
      description: 'Unauthorized Request',
      content: { 'application/json': { schema: UnauthorizedResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: NotFoundResponseSchema } },
    },
  },
})

export const deleteKeysKeyConfigsConfigRoute = createRoute({
  method: 'delete',
  path: '/keys/{key}/configs/{config}',
  tags: ['Configs'],
  summary: 'Delete',
  description: 'Permanently deletes a configuration object.',
  operationId: 'DeleteConfig',
  request: {
    params: z.object({
      key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'path',
          name: 'key',
          required: true,
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'simple',
        },
      }),
      config: ConfigParamSchema.openapi({
        param: {
          explode: false,
          in: 'path',
          name: 'config',
          required: true,
          schema: { $ref: '#/components/schemas/ConfigParam' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      user_token: UserTokenParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'user_token',
          schema: { $ref: '#/components/schemas/UserTokenParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.literal(2000),
              message: z.literal('Success'),
              result: z
                .object({ deleted: z.number().min(0).openapi({ example: 1 }) })
                .openapi({ required: ['deleted'] }),
            })
            .openapi({ required: ['result', 'code', 'message'], title: 'Config Delete Response' }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
    401: {
      description: 'Unauthorized Request',
      content: { 'application/json': { schema: UnauthorizedResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: NotFoundResponseSchema } },
    },
  },
})

export const getKeysKeyDetailsRoute = createRoute({
  method: 'get',
  path: '/keys/{key}/details',
  tags: ['Keys'],
  summary: 'Details',
  description:
    'Returns private data on the key including remaining lookups, available datasets and usage limits.\n',
  operationId: 'KeyDetails',
  request: {
    params: z.object({
      key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'path',
          name: 'key',
          required: true,
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      user_token: UserTokenParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'user_token',
          schema: { $ref: '#/components/schemas/UserTokenParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ApiKeyDetailsResponseSchema } },
    },
    401: {
      description: 'Unauthorised',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Resource not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getKeysKeyLicenseesRoute = createRoute({
  method: 'get',
  path: '/keys/{key}/licensees',
  tags: ['Licensees'],
  summary: 'List',
  description: 'Returns a list of licensees for a key.',
  operationId: 'ListLicensees',
  request: {
    params: z.object({
      key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'path',
          name: 'key',
          required: true,
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      starting_after: z
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
            description: 'Specify ID of the licensee after which you would like to list results',
            explode: false,
            in: 'query',
            name: 'starting_after',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
      user_token: UserTokenParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'user_token',
          schema: { $ref: '#/components/schemas/UserTokenParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          LimitParamSchema.openapi({
            param: {
              description:
                'Specify the maximum number of results to return per page. Default and maximum is `100`.',
              explode: false,
              in: 'query',
              name: 'limit',
              schema: { $ref: '#/components/schemas/LimitParam' },
              style: 'form',
              required: false,
            },
          }),
        )
        .exactOptional(),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter result by licensee name. Query can be shortened to `q=`',
            explode: false,
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LicenseesResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
  },
})

export const postKeysKeyLicenseesRoute = createRoute({
  method: 'post',
  path: '/keys/{key}/licensees',
  tags: ['Licensees'],
  summary: 'Create',
  description: 'Create a licensee for the specified API Key.',
  operationId: 'CreateLicensee',
  request: {
    params: z.object({
      key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'path',
          name: 'key',
          required: true,
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      user_token: UserTokenParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'user_token',
          schema: { $ref: '#/components/schemas/UserTokenParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
    }),
    body: { content: { 'application/json': { schema: LicenseeEditableSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LicenseeResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
  },
})

export const getKeysKeyLicenseesLicenseeRoute = createRoute({
  method: 'get',
  path: '/keys/{key}/licensees/{licensee}',
  tags: ['Licensees'],
  summary: 'Retrieve',
  description: 'Returns licensee information as identified by the licensee key.',
  operationId: 'RetrieveLicensee',
  request: {
    params: z.object({
      key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'path',
          name: 'key',
          required: true,
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'simple',
        },
      }),
      licensee: LicenseeParamSchema.openapi({
        param: {
          explode: false,
          in: 'path',
          name: 'licensee',
          required: true,
          schema: { $ref: '#/components/schemas/LicenseeParam' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      user_token: UserTokenParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'user_token',
          schema: { $ref: '#/components/schemas/UserTokenParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LicenseeResponseSchema } },
      headers: z.object({}),
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
  },
})

export const putKeysKeyLicenseesLicenseeRoute = createRoute({
  method: 'put',
  path: '/keys/{key}/licensees/{licensee}',
  tags: ['Licensees'],
  summary: 'Update',
  description: 'Update Licensee',
  operationId: 'UpdateLicensee',
  request: {
    params: z.object({
      key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'path',
          name: 'key',
          required: true,
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'simple',
        },
      }),
      licensee: LicenseeParamSchema.openapi({
        param: {
          explode: false,
          in: 'path',
          name: 'licensee',
          required: true,
          schema: { $ref: '#/components/schemas/LicenseeParam' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      user_token: UserTokenParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'user_token',
          schema: { $ref: '#/components/schemas/UserTokenParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
    }),
    body: { content: { 'application/json': { schema: LicenseeEditableSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LicenseeResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
  },
})

export const deleteKeysKeyLicenseesLicenseeRoute = createRoute({
  method: 'delete',
  path: '/keys/{key}/licensees/{licensee}',
  tags: ['Licensees'],
  summary: 'Cancel',
  description:
    'Cancels a licensee key. This renders a licensee unusable. This action can be reversed if you get in contact with us.',
  operationId: 'DeleteLicensee',
  request: {
    params: z.object({
      key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'path',
          name: 'key',
          required: true,
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'simple',
        },
      }),
      licensee: LicenseeParamSchema.openapi({
        param: {
          explode: false,
          in: 'path',
          name: 'licensee',
          required: true,
          schema: { $ref: '#/components/schemas/LicenseeParam' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      user_token: UserTokenParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'user_token',
          schema: { $ref: '#/components/schemas/UserTokenParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.literal(2000),
              message: z.literal('Success'),
              result: z
                .object({ deleted: z.number().min(0).openapi({ example: 1 }) })
                .openapi({ required: ['deleted'] }),
            })
            .openapi({
              required: ['result', 'code', 'message'],
              title: 'Licensee Delete Response',
            }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
  },
})

export const getKeysKeyLookupsRoute = createRoute({
  method: 'get',
  path: '/keys/{key}/lookups',
  tags: ['Keys'],
  summary: 'Logs (CSV)',
  description:
    'Reports lookup information on a key for paid lookups.\n\nThis method requires a `user_token`, which can be found on your [accounts page](https://ideal-postcodes.co.uk/account).\n\nA maximum interval of 90 days can be provided for analysis. If no start or end date is provided, the last 21 days will be used as the default interval.\n\n## Download Usage History (CSV)\n\n`GET /keys/:key/lookups`\n\nReturns a CSV download of lookups performed and associated information.\n\nNote that the Content-Type returned will be CSV (text/csv). For a non 200 response, the `Content-Type` will revert to JSON with the error code and message embedded.\n\n## Data Redaction\n\nPersonally Identifiable Data (PII) caught in this your usage log (including IP, search term and URL data) will be redacted on a weekly basis.\n\nBy default, PII will be redacted if it is older than 21 days. This timeframe can be configured from your dashboard.\n\nYou may prevent PII collection altogether by setting the interval to `0` days.\n',
  operationId: 'KeyLogs',
  request: {
    params: z.object({
      key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'path',
          name: 'key',
          required: true,
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          StartParamSchema.openapi({
            param: {
              description:
                'An start date/time in the form of a UNIX Timestamp in milliseconds, e.g. `1418556452651`. If no start time is provided, the start time will be assigned to a time 21 days prior to the end time.',
              explode: false,
              in: 'query',
              name: 'start',
              schema: { $ref: '#/components/schemas/StartParam' },
              style: 'form',
              required: false,
            },
          }),
        )
        .exactOptional(),
      end: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          EndParamSchema.openapi({
            param: {
              description:
                'An end date/time in the form of a UNIX Timestamp in milliseconds, e.g. `1418556452651`. If no end time is provided, the current time will be used.',
              explode: false,
              in: 'query',
              name: 'end',
              schema: { $ref: '#/components/schemas/EndParam' },
              style: 'form',
              required: false,
            },
          }),
        )
        .exactOptional(),
      licensee: LicenseeParamSchema.openapi({
        param: {
          description:
            'Sublicensed keys only. This will restrict the analysed dataset to a specific licensee.',
          explode: false,
          in: 'query',
          name: 'licensee',
          schema: { $ref: '#/components/schemas/LicenseeParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'text/csv': {
          schema: z.string().openapi({ description: 'Success' }),
          example:
            '2015-02-21T16:05:22.991Z,82.85.128.18,SW12AA,https://www.example.com/,Postcode Lookup,\n2015-02-21T16:05:38.298Z,82.85.128.18,10 Downing Street London,https://www.example.com/,Address Lookup,CRM\n2015-02-21T16:06:49.227Z,82.85.128.18,OX44PP,https://www.example.com/,Postcode Lookup,"Website,Live"\n2015-02-21T16:07:02.706Z,82.85.128.18,PL9 9HE,https://www.example.com/,Postcode Lookup,\n',
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
  },
})

export const getKeysKeyUsageRoute = createRoute({
  method: 'get',
  path: '/keys/{key}/usage',
  tags: ['Keys'],
  summary: 'Usage Stats',
  description:
    'Reports the number of lookups consumed on a key for a range of days.\n\nA maximum interval of 90 days can be provided for analysis. If no start or end date is provided, the last 21 days will be used as the default interval.\n',
  operationId: 'KeyUsage',
  request: {
    params: z.object({
      key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'path',
          name: 'key',
          required: true,
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          StartParamSchema.openapi({
            param: {
              description:
                'A start date/time in the form of a UNIX Timestamp in milliseconds, e.g. `1418556452651`. If no start time is provided, the start time will be assigned to a time 21 days prior to the end time.',
              explode: false,
              in: 'query',
              name: 'start',
              schema: { $ref: '#/components/schemas/StartParam' },
              style: 'form',
              required: false,
            },
          }),
        )
        .exactOptional(),
      end: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          EndParamSchema.openapi({
            param: {
              description:
                'An end date/time in the form of a UNIX Timestamp in milliseconds, e.g. `1418556452651`. If no end time is provided, the current time will be used.',
              explode: false,
              in: 'query',
              name: 'end',
              schema: { $ref: '#/components/schemas/EndParam' },
              style: 'form',
              required: false,
            },
          }),
        )
        .exactOptional(),
      tags: TagsParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'tags',
          schema: { $ref: '#/components/schemas/TagsParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      licensee: LicenseeParamSchema.openapi({
        param: {
          description:
            'Sublicensed keys only. This will restrict the analysed dataset to a specific licensee.',
          explode: false,
          in: 'query',
          name: 'licensee',
          schema: { $ref: '#/components/schemas/LicenseeParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ApiKeyUsageResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
  },
})

export const getPhoneNumbersRoute = createRoute({
  method: 'get',
  path: '/phone_numbers',
  tags: ['Phone Numbers'],
  summary: 'Phone Number Validation',
  description: 'Query for and validate phone numbers.\n',
  operationId: 'PhoneNumberValidation',
  request: {
    query: z.object({
      api_key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'api_key',
          required: true,
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'form',
        },
      }),
      query: z
        .string()
        .openapi({
          param: {
            description:
              'Specifies the phone number to validate. Phone number must include a country code in acceptable format. For instance, UK phone numbers should be suffixed `+44`, `44` or `0044`.',
            explode: false,
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PhoneNumberResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
  },
})

export const getPlacesRoute = createRoute({
  method: 'get',
  path: '/places',
  tags: ['Place Search'],
  summary: 'Find Place',
  description:
    'Query for geographical places across countries. Each query will return a list of place suggestions, which consists of a place name, descriptive name and id.\n\nThis API returns geographical information such as countries, capitals, administrative areas and more. It is ideal for correctly identifying a place along with any other details like geolocation.\n\n## Implementing Place Autocomplete\n\nExtracting the full information of a place is a 2 step process:\n\n1. Retrieve place suggestions via /places\n2. Retrieve the entire place with the ID provided in the suggestion\n\n## Suggestion Format\n\nEach place suggestion contains a descriptive name which you can provide to users to uniquely idenfity a place.\n\n## Rate Limiting\n\nYou can make up to 3000 requests to the autocomplete API within a 5 minute span. The HTTP Header contains information on your current rate limit.\n\n| Header                  | Description                                                                            |\n| ----------------------- | -------------------------------------------------------------------------------------- |\n| `X-RateLimit-Limit`     | The maximum number of requests that can be made in 5 minutes                           |\n| `X-RateLimit-Remaining` | The remaining requests within the current rate limit window                            |\n| `X-RateLimit-Reset`     | The time when the rate limit window resets in Unix Time (seconds) or UTC Epoch seconds |\n\n## Pricing\n\nThis API currently does not affect your balance. However, resolving a suggestion into a full place requires a paid request.\n\nPlease note, this API is not intended as a standalone free resource. Integrations that consistently make autocomplete requests without a paid request to resolve an place may be disrupted via tightened rate limits.\n',
  operationId: 'FindPlace',
  request: {
    query: z.object({
      api_key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'api_key',
          required: true,
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'form',
        },
      }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the place you wish to query. Query can be shortened to `q=`',
            explode: false,
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      country_iso: CountryIsoParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'country_iso',
          schema: { $ref: '#/components/schemas/CountryIsoParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      bias_country_iso: BiasCountryIsoParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'bias_country_iso',
          schema: { $ref: '#/components/schemas/BiasCountryIsoParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      bias_lonlat: BiasLonLatParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'bias_lonlat',
          schema: { $ref: '#/components/schemas/BiasLonLatParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      bias_ip: BiasIpParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'bias_ip',
          schema: { $ref: '#/components/schemas/BiasIpParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PlaceResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
  },
})

export const getPlacesPlaceRoute = createRoute({
  method: 'get',
  path: '/places/${place}',
  tags: ['Place Search'],
  summary: 'Resolve Place',
  description: 'Resolves a place autocompletion by its place ID.\n',
  operationId: 'ResolvePlace',
  request: {
    params: z.object({
      place: z
        .string()
        .openapi({
          param: {
            description: 'ID of place suggestion',
            explode: false,
            in: 'path',
            name: 'place',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      api_key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'api_key',
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResolvePlaceResponseSchema } },
      headers: z.object({}),
    },
    404: {
      description: 'Resource not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getPostcodesPostcodeRoute = createRoute({
  method: 'get',
  path: '/postcodes/{postcode}',
  tags: ['UK'],
  summary: 'Lookup Postcode',
  description:
    'Returns the complete list of addresses for a postcode. Postcode searches are space and case insensitive.\n\nThe Postcode Lookup API provides a JSON interface to search UK addresses from a postcode. It can be used to power Postcode Lookup driven address searches, like [Postcode Lookup](/postcode-lookup).\n\n## Postcode Not Found\n\nLookup balance is unaffected by invalid postcodes. The API returns a `404` response with response body:\n\n```json\n{\n  "code": 4040,\n  "message": "Postcode not found",\n  "suggestions": ["SW1A 0AA"]\n}\n```\n\n### Suggestions\n\nIf a postcode cannot be found, the API will provide up to 5 closest matching postcodes. Common errors will be corrected first (e.g. mixing up `O` and `0` or `I` and `1`).\n\nIf the suggestion list is small (fewer than 3), there is a high probability the correct postcode is there. You may notify the user or immediately trigger new searches.\n\nThe suggestion list will be empty if the postcode has deviated too far from a valid postcode format.\n\n## Multiple Residence\n\nA small number of postcodes will return more than 100 premises. These may require pagination. Use `page` to paginate the result set.\n',
  operationId: 'Postcodes',
  request: {
    params: z.object({
      postcode: PafPostcodeSchema.openapi({
        param: {
          description: 'Postcode to retrieve',
          explode: false,
          in: 'path',
          name: 'postcode',
          required: true,
          schema: { $ref: '#/components/schemas/paf_postcode' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      api_key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'api_key',
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      filter: FilterParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'filter',
          required: false,
          schema: { $ref: '#/components/schemas/FilterParam' },
          style: 'form',
        },
      }).exactOptional(),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          PageParamSchema.openapi({
            param: {
              explode: false,
              in: 'query',
              name: 'page',
              required: false,
              schema: { $ref: '#/components/schemas/PageParam' },
              style: 'form',
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PostcodeResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: BadRequestResponseSchema } },
    },
    404: {
      description: 'Postcode Not Found',
      content: { 'application/json': { schema: PostcodeNotFoundResponseSchema } },
    },
  },
})

export const getUdprnUdprnRoute = createRoute({
  method: 'get',
  path: '/udprn/{udprn}',
  tags: ['UK'],
  summary: 'Retrieve by UDPRN',
  description:
    'Returns an address as identified by its Unique Delivery Point Reference Number (UDPRN).\n\nYou may find it useful to store UDPRN information as it can be used to retrieve the most recent information for an address. It can also be used to test for a deleted address.\n\nUDPRNs are an eight digit unique numeric code (e.g. 25962203) for any premise on the Postcode Address File. It\'s essentially a unique identifier for every address in the UK that Royal Mail has in its database.\n\n## Testing\n\nTo test your implementation of our API we have a range of test UDPRNs that yield both successful and unsuccessful responses to your request.\n\nThey are the following:\n\n- `0` Returns a successful UDPRN lookup response\n  `2000`\n- `-1` Returns "UDPRN not found", error `4044`\n- `-2` Returns "no lookups remaining", error `4020`\n- `-3` Returns "daily (or individual) lookup limit breached",\n  error `4021`\n\nTest request undergo the usual authentication and restriction rules. This is to help surface any issues that occur during implementation and does not cost you a lookup.',
  operationId: 'UDPRN',
  request: {
    params: z.object({
      udprn: z
        .string()
        .openapi({
          param: {
            description: 'UDPRN to be retrieved',
            explode: false,
            in: 'path',
            name: 'udprn',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      api_key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'api_key',
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      filter: FilterParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'filter',
          schema: { $ref: '#/components/schemas/FilterParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UDPRNResponseSchema } },
      headers: z.object({}),
    },
    404: {
      description: 'Resource not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getUmprnUmprnRoute = createRoute({
  method: 'get',
  path: '/umprn/{umprn}',
  tags: ['UK'],
  summary: 'Retrieve by UMPRN',
  description:
    'Returns a multiple occupancy address identifited via its UMPRN (Multiple Residence Unique ID).\n\nUMPRNs are a unique numeric code for any Multiple Residence household on the optional Multiple Residence dataset.\n\n## Testing\n\nTo test your implementation of our API we have a range of test UMPRNs that yield both successful and unsuccessful responses to your request. They are the following\n\n- `0` Returns a successful UMPRN lookup response `2000`\n- `-1` Returns "UMPRN not found", error `4044`\n- `-2` Returns "no lookups remaining", error `4020`\n- `-3` Returns "daily (or individual) lookup limit breached", error `4021`\n\nTest request undergo the usual authentication and restriction rules. This is to help surface any issues that occur during implementation and does not cost you a lookup.\n\n### Pricing\n\nPer lookup charges apply. Empty responses are not charged.\n',
  operationId: 'UMPRN',
  request: {
    params: z.object({
      umprn: z
        .string()
        .openapi({
          param: {
            description: 'UMPRN to be retrieved',
            explode: false,
            in: 'path',
            name: 'umprn',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      api_key: ApiKeyParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'api_key',
          schema: { $ref: '#/components/schemas/ApiKeyParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
      filter: FilterParamSchema.openapi({
        param: {
          explode: false,
          in: 'query',
          name: 'filter',
          schema: { $ref: '#/components/schemas/FilterParam' },
          style: 'form',
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UMPRNResponseSchema } },
      headers: z.object({}),
    },
    404: {
      description: 'Resource not found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})
