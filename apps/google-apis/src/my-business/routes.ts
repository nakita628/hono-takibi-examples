import { createRoute, z } from '@hono/zod-openapi'

const TimeOfDaySchema = z
  .object({
    hours: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.',
      }),
    minutes: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Minutes of hour of day. Must be from 0 to 59.' }),
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.',
      }),
    seconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.',
      }),
  })
  .openapi({
    description:
      'Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.',
    required: [],
  })
  .openapi('TimeOfDay')

const TimeRangeSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Epoch timestamp for the end of the range (exclusive).' }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Epoch timestamp for the start of the range (inclusive).' }),
  })
  .openapi({
    description:
      'A range of time. Data will be pulled over the range as a half-open inverval (that is, [start_time, end_time)).',
    required: [],
  })
  .openapi('TimeRange')

const TimeDimensionSchema = z
  .object({
    dayOfWeek: z
      .enum([
        'DAY_OF_WEEK_UNSPECIFIED',
        'MONDAY',
        'TUESDAY',
        'WEDNESDAY',
        'THURSDAY',
        'FRIDAY',
        'SATURDAY',
        'SUNDAY',
      ])
      .exactOptional()
      .openapi({
        description:
          'The day of the week ("MONDAY" to "SUNDAY") this value corresponds to. Set for BREAKDOWN_DAY_OF_WEEK option.',
      }),
    timeOfDay: TimeOfDaySchema.exactOptional().openapi({
      description:
        'The hour of the day (0 to 23) this value corresponds to. Set for BREAKDOWN_HOUR_OF_DAY option.',
    }),
    timeRange: TimeRangeSchema.exactOptional().openapi({
      description:
        'The range of time this value covers. Set for AGGREGATED_TOTAL and AGGREGATED_DAILY options.',
    }),
  })
  .openapi({ description: 'The dimension for which data is divided over.', required: [] })
  .openapi('TimeDimension')

const DimensionalMetricValueSchema = z
  .object({
    metricOption: z
      .enum([
        'METRIC_OPTION_UNSPECIFIED',
        'AGGREGATED_TOTAL',
        'AGGREGATED_DAILY',
        'BREAKDOWN_DAY_OF_WEEK',
        'BREAKDOWN_HOUR_OF_DAY',
      ])
      .exactOptional()
      .openapi({ description: 'The option that requested this dimensional value.' }),
    timeDimension: TimeDimensionSchema.exactOptional().openapi({
      description: 'The dimension for the value.',
    }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The value. If no value is set, then the requested data is missing.',
      }),
  })
  .openapi({
    description: 'A value for a single metric with a given time dimension.',
    required: [],
  })
  .openapi('DimensionalMetricValue')

type MetricValueType = {
  dimensionalValues?: z.infer<typeof DimensionalMetricValueSchema>[]
  metric?:
    | 'METRIC_UNSPECIFIED'
    | 'ALL'
    | 'QUERIES_DIRECT'
    | 'QUERIES_INDIRECT'
    | 'QUERIES_CHAIN'
    | 'VIEWS_MAPS'
    | 'VIEWS_SEARCH'
    | 'ACTIONS_WEBSITE'
    | 'ACTIONS_PHONE'
    | 'ACTIONS_DRIVING_DIRECTIONS'
    | 'PHOTOS_VIEWS_MERCHANT'
    | 'PHOTOS_VIEWS_CUSTOMERS'
    | 'PHOTOS_COUNT_MERCHANT'
    | 'PHOTOS_COUNT_CUSTOMERS'
    | 'LOCAL_POST_VIEWS_SEARCH'
    | 'LOCAL_POST_ACTIONS_CALL_TO_ACTION'
  totalValue?: z.infer<typeof DimensionalMetricValueSchema>
}

const LabelSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Description of the price list, section, or item.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Display name for the price list, section, or item.' }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The BCP-47 language code that these strings apply for. Only one set of labels may be set per language.',
      }),
  })
  .openapi({
    description: 'Label to be used when displaying the price list, section, or item.',
    required: [],
  })
  .openapi('Label')

const FreeFormServiceItemSchema = z
  .object({
    categoryId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The `category_id` and `service_type_id` should match the possible combinations provided in the `Category` message.',
      }),
    label: LabelSchema.exactOptional().openapi({
      description:
        'Required. Language-tagged labels for the item. We recommend that item names be 140 characters or less, and descriptions 250 characters or less. This field should only be set if the input is a custom service item. Standardized service types should be updated via service_type_id.',
    }),
  })
  .openapi({
    description:
      'Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for of such services via a geomerchant surface.',
    required: [],
  })
  .openapi('FreeFormServiceItem')

const MoneySchema = z
  .object({
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The three-letter currency code defined in ISO 4217.' }),
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.',
      }),
    units: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.',
      }),
  })
  .openapi({ description: 'Represents an amount of money with its currency type.', required: [] })
  .openapi('Money')

const StructuredServiceItemSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Description of structured service item. The character limit is 300.',
      }),
    serviceTypeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The `service_type_id` field is a Google provided unique ID that can be found in `ServiceTypeMetadata`. This information is provided by BatchGetBusinessCategories rpc service.',
      }),
  })
  .openapi({
    description:
      'Represents a structured service offered by the merchant. For eg: toilet_installation.',
    required: [],
  })
  .openapi('StructuredServiceItem')

type ServiceItemType = {
  freeFormServiceItem?: z.infer<typeof FreeFormServiceItemSchema>
  isOffered?: boolean
  price?: z.infer<typeof MoneySchema>
  structuredServiceItem?: z.infer<typeof StructuredServiceItemSchema>
}

const AcceptInvitationRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for AccessControl.AcceptInvitation.' })
  .openapi('AcceptInvitationRequest')

const AccessibilitySchema = z
  .object({
    mobilityAccessible: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Mobility accessible. Throughout the property there are physical adaptations to ease the stay of a person in a wheelchair, such as auto-opening doors, wide elevators, wide bathrooms or ramps.',
      }),
    mobilityAccessibleElevator: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Mobility accessible elevator. A lift that transports people from one level to another and is built to accommodate a wheelchair-using passenger owing to the width of its doors and placement of call buttons.',
      }),
    mobilityAccessibleElevatorException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Mobility accessible elevator exception.' }),
    mobilityAccessibleException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Mobility accessible exception.' }),
    mobilityAccessibleParking: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Mobility accessible parking. The presence of a marked, designated area of prescribed size in which only registered, labeled vehicles transporting a person with physical challenges may park.',
      }),
    mobilityAccessibleParkingException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Mobility accessible parking exception.' }),
    mobilityAccessiblePool: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Mobility accessible pool. A swimming pool equipped with a mechanical chair that can be lowered and raised for the purpose of moving physically challenged guests into and out of the pool. May be powered by electricity or water. Also known as pool lift.',
      }),
    mobilityAccessiblePoolException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Mobility accessible pool exception.' }),
  })
  .openapi({
    description:
      'Physical adaptations made to the property in consideration of varying levels of human physical ability.',
    required: [],
  })
  .openapi('Accessibility')

const PostalAddressSchema = z
  .object({
    addressLines: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Unstructured address lines describing the lower levels of an address. Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).',
      }),
    administrativeArea: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don\'t use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address\' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en".',
      }),
    locality: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines.',
      }),
    organization: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The name of the organization at the address.' }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).',
      }),
    recipients: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.',
      }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See http://cldr.unicode.org/ and http://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.',
      }),
    revision: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions.',
      }),
    sortingCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d\'Ivoire).',
      }),
    sublocality: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts.',
      }),
  })
  .openapi({
    description:
      'Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an i18n-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478',
    required: [],
  })
  .openapi('PostalAddress')

const OrganizationInfoSchema = z
  .object({
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The contact number for the organization.' }),
    postalAddress: PostalAddressSchema.exactOptional().openapi({
      description: 'The postal address for the account.',
    }),
    registeredDomain: z
      .string()
      .exactOptional()
      .openapi({ description: 'The registered domain for the account.' }),
  })
  .openapi({ description: 'Additional Info stored for an organization.', required: [] })
  .openapi('OrganizationInfo')

const AccountStateSchema = z
  .object({
    status: z
      .enum(['ACCOUNT_STATUS_UNSPECIFIED', 'VERIFIED', 'UNVERIFIED', 'VERIFICATION_REQUESTED'])
      .exactOptional()
      .openapi({
        description:
          'If verified, future locations that are created are automatically connected to Google Maps, and have Google+ pages created, without requiring moderation.',
      }),
  })
  .openapi({
    description:
      'Indicates status of the account, such as whether the account has been verified by Google.',
    required: [],
  })
  .openapi('AccountState')

const AccountSchema = z
  .object({
    accountName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the account. *Note:* For an account with AccountType `PERSONAL`, this is the first and last name of the user account.',
      }),
    accountNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account reference number if provisioned.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The resource name, in the format `accounts/{account_id}`.' }),
    organizationInfo: OrganizationInfoSchema.exactOptional().openapi({
      description:
        'Additional info for an organization. This is populated only for an organization account.',
    }),
    permissionLevel: z
      .enum(['PERMISSION_LEVEL_UNSPECIFIED', 'OWNER_LEVEL', 'MEMBER_LEVEL'])
      .exactOptional()
      .openapi({
        description: 'Output only. Specifies the PermissionLevel the caller has for this account.',
      }),
    role: z
      .enum(['ACCOUNT_ROLE_UNSPECIFIED', 'OWNER', 'CO_OWNER', 'MANAGER', 'COMMUNITY_MANAGER'])
      .exactOptional()
      .openapi({
        description: 'Output only. Specifies the AccountRole the caller has for this account.',
      }),
    state: AccountStateSchema.exactOptional().openapi({
      description: 'Output only. Indicates the AccountState of this account.',
    }),
    type: z
      .enum([
        'ACCOUNT_TYPE_UNSPECIFIED',
        'PERSONAL',
        'LOCATION_GROUP',
        'USER_GROUP',
        'ORGANIZATION',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. Specifies the AccountType of this account.' }),
  })
  .openapi({
    description:
      "An account is a container for your business's locations. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325).",
    required: [],
  })
  .openapi('Account')

const ActivitiesSchema = z
  .object({
    beachAccess: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Beach access. The hotel property is in close proximity to a beach and offers a way to get to that beach. This can include a route to the beach such as stairs down if hotel is on a bluff, or a short trail. Not the same as beachfront (with beach access, the hotel's proximity is close to but not right on the beach).",
      }),
    beachAccessException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Beach access exception.' }),
    beachFront: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Breach front. The hotel property is physically located on the beach alongside an ocean, sea, gulf, or bay. It is not on a lake, river, stream, or pond. The hotel is not separated from the beach by a public road allowing vehicular, pedestrian, or bicycle traffic.',
      }),
    beachFrontException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Beach front exception.' }),
    bicycleRental: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Bicycle rental. The hotel owns bicycles that it permits guests to borrow and use. Can be free or for a fee.',
      }),
    bicycleRentalException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Bicycle rental exception.' }),
    boutiqueStores: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boutique stores. There are stores selling clothing, jewelry, art and decor either on hotel premises or very close by. Does not refer to the hotel gift shop or convenience store.',
      }),
    boutiqueStoresException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Boutique stores exception.' }),
    casino: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Casino. A space designated for gambling and gaming featuring croupier-run table and card games, as well as electronic slot machines. May be on hotel premises or located nearby.',
      }),
    casinoException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Casino exception.' }),
    freeBicycleRental: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Free bicycle rental. The hotel owns bicycles that it permits guests to borrow and use for free.',
      }),
    freeBicycleRentalException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Free bicycle rental exception.' }),
    freeWatercraftRental: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Free watercraft rental. The hotel owns watercraft that it permits guests to borrow and use for free.',
      }),
    freeWatercraftRentalException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Free Watercraft rental exception.' }),
    gameRoom: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Game room. There is a room at the hotel containing electronic machines for play such as pinball, prize machines, driving simulators, and other items commonly found at a family fun center or arcade. May also include non-electronic games like pool, foosball, darts, and more. May or may not be designed for children. Also known as arcade, fun room, or family fun center.',
      }),
    gameRoomException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Game room exception.' }),
    golf: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Golf. There is a golf course on hotel grounds or there is a nearby, independently run golf course that allows use by hotel guests. Can be free or for a fee.',
      }),
    golfException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Golf exception.' }),
    horsebackRiding: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Horseback riding. The hotel has a horse barn onsite or an affiliation with a nearby barn to allow for guests to sit astride a horse and direct it to walk, trot, cantor, gallop and/or jump. Can be in a riding ring, on designated paths, or in the wilderness. May or may not involve instruction.',
      }),
    horsebackRidingException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Horseback riding exception.' }),
    nightclub: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Nightclub. There is a room at the hotel with a bar, a dance floor, and seating where designated staffers play dance music. There may also be a designated area for the performance of live music, singing and comedy acts.',
      }),
    nightclubException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Nightclub exception.' }),
    privateBeach: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Private beach. The beach which is in close proximity to the hotel is open only to guests.',
      }),
    privateBeachException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Private beach exception.' }),
    scuba: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Scuba. The provision for guests to dive under naturally occurring water fitted with a self-contained underwater breathing apparatus (SCUBA) for the purpose of exploring underwater life. Apparatus consists of a tank providing oxygen to the diver through a mask. Requires certification of the diver and supervision. The hotel may have the activity at its own waterfront or have an affiliation with a nearby facility. Required equipment is most often supplied to guests. Can be free or for a fee. Not snorkeling. Not done in a swimming pool.',
      }),
    scubaException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Scuba exception.' }),
    snorkeling: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Snorkeling. The provision for guests to participate in a recreational water activity in which swimmers wear a diving mask, a simple, shaped breathing tube and flippers/swim fins for the purpose of exploring below the surface of an ocean, gulf or lake. Does not usually require user certification or professional supervision. Equipment may or may not be available for rent or purchase. Not scuba diving.',
      }),
    snorkelingException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Snorkeling exception.' }),
    tennis: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Tennis. The hotel has the requisite court(s) on site or has an affiliation with a nearby facility for the purpose of providing guests with the opportunity to play a two-sided court-based game in which players use a stringed racquet to hit a ball across a net to the side of the opposing player. The court can be indoors or outdoors. Instructors, racquets and balls may or may not be provided.',
      }),
    tennisException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Tennis exception.' }),
    waterSkiing: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Water skiing. The provision of giving guests the opportunity to be pulled across naturally occurring water while standing on skis and holding a tow rope attached to a motorboat. Can occur on hotel premises or at a nearby waterfront. Most often performed in a lake or ocean.',
      }),
    waterSkiingException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Water skiing exception.' }),
    watercraftRental: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Watercraft rental. The hotel owns water vessels that it permits guests to borrow and use. Can be free or for a fee. Watercraft may include boats, pedal boats, rowboats, sailboats, powerboats, canoes, kayaks, or personal watercraft (such as a Jet Ski).',
      }),
    watercraftRentalException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Watercraft rental exception.' }),
  })
  .openapi({ description: 'Amenities and features related to leisure and play.', required: [] })
  .openapi('Activities')

const AdWordsLocationExtensionsSchema = z
  .object({
    adPhone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An alternate phone number to display on AdWords location extensions instead of the location's primary phone number.",
      }),
  })
  .openapi({ description: 'Additional information that is surfaced in AdWords.', required: [] })
  .openapi('AdWordsLocationExtensions')

const AddressInputSchema = z
  .object({
    mailerContactName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Contact name the mail should be sent to.' }),
  })
  .openapi({ description: 'Input for ADDRESS verification.', required: [] })
  .openapi('AddressInput')

const AddressVerificationDataSchema = z
  .object({
    address: PostalAddressSchema.exactOptional().openapi({
      description: 'Address that a postcard can be sent to.',
    }),
    businessName: z.string().exactOptional().openapi({ description: "Merchant's business name." }),
  })
  .openapi({ description: 'Display data for verifications through postcard.', required: [] })
  .openapi('AddressVerificationData')

const AdminSchema = z
  .object({
    adminName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The name of the admin. When making the initial invitation, this is the invitee's email address. On `GET` calls, the user's email address is returned if the invitation is still pending. Otherwise, it contains the user's first and last names.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name. For account admins, this is in the form: `accounts/{account_id}/admins/{admin_id}` For location admins, this is in the form: `accounts/{account_id}/locations/{location_id}/admins/{admin_id}`',
      }),
    pendingInvitation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Indicates whether this admin has a pending invitation for the specified resource.',
      }),
    role: z
      .enum(['ADMIN_ROLE_UNSPECIFIED', 'OWNER', 'CO_OWNER', 'MANAGER', 'COMMUNITY_MANAGER'])
      .exactOptional()
      .openapi({
        description:
          'Specifies the AdminRole that this admin uses with the specified Account or Location resource.',
      }),
  })
  .openapi({ description: 'An administrator of an Account or a Location.', required: [] })
  .openapi('Admin')

const AuthorSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name of the user' }),
    profilePhotoUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The profile photo URL of the user.' }),
    type: z
      .enum(['AUTHOR_TYPE_UNSPECIFIED', 'REGULAR_USER', 'LOCAL_GUIDE', 'MERCHANT'])
      .exactOptional()
      .openapi({ description: 'The type of user the author is.' }),
  })
  .openapi({ description: 'Represents the author of a question or answer', required: [] })
  .openapi('Author')

const AnswerSchema = z
  .object({
    author: AuthorSchema.exactOptional().openapi({
      description: 'Output only. The author of the answer.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The timestamp for when the answer was written.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The unique name for the answer accounts/*/locations/*/questions/*/answers/*',
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text of the answer. It should contain at least one non-whitespace character. The maximum length is 4096 characters.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp for when the answer was last modified.',
      }),
    upvoteCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. The number of upvotes for the answer.' }),
  })
  .openapi({ description: 'Represents an answer to a question', required: [] })
  .openapi('Answer')

const AssociateLocationRequestSchema = z
  .object({
    placeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The association to establish. If not set, it indicates no match.' }),
  })
  .openapi({ description: 'Request message for Locations.AssociateLocationRequest.', required: [] })
  .openapi('AssociateLocationRequest')

const RepeatedEnumAttributeValueSchema = z
  .object({
    setValues: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Enum values that are set.' }),
    unsetValues: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Enum values that are unset.' }),
  })
  .openapi({
    description:
      'Values for an attribute with a `value_type` of REPEATED_ENUM. This consists of two lists of value IDs: those that are set (true) and those that are unset (false). Values absent are considered unknown. At least one value must be specified.',
    required: [],
  })
  .openapi('RepeatedEnumAttributeValue')

const UrlAttributeValueSchema = z
  .object({ url: z.string().exactOptional().openapi({ description: 'The URL.' }) })
  .openapi({ description: 'Values for an attribute with a `value_type` of URL.', required: [] })
  .openapi('UrlAttributeValue')

const AttributeSchema = z
  .object({
    attributeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the attribute. Attribute IDs are provided by Google.' }),
    repeatedEnumValue: RepeatedEnumAttributeValueSchema.exactOptional().openapi({
      description:
        'When the attribute value type is REPEATED_ENUM, this contains the attribute value, and the other values fields must be empty.',
    }),
    urlValues: z
      .array(UrlAttributeValueSchema)
      .exactOptional()
      .openapi({
        description:
          'When the attribute value type is URL, this field contains the value(s) for this attribute, and the other values fields must be empty.',
      }),
    valueType: z
      .enum(['ATTRIBUTE_VALUE_TYPE_UNSPECIFIED', 'BOOL', 'ENUM', 'URL', 'REPEATED_ENUM'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The type of value that this attribute contains. This should be used to determine how to interpret the value.',
      }),
    values: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description:
          'The values for this attribute. The type of the values supplied must match that expected for that attribute; see [AttributeValueType](/my-business/reference/rest/v4/AttributeValueType). This is a repeated field where multiple attribute values may be provided. Attribute types only support one value.',
      }),
  })
  .openapi({
    description:
      'A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes.',
    required: [],
  })
  .openapi('Attribute')

const AttributeValueMetadataSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The display name for this value, localized where available; otherwise, in English. The value display name is intended to be used in context with the attribute display name. For example, for a "WiFi" enum attribute, this could contain "Paid" to represent paid Wi-Fi.',
      }),
    value: z.any().exactOptional().openapi({ description: 'The attribute value.' }),
  })
  .openapi({ description: 'Metadata for supported attribute values.', required: [] })
  .openapi('AttributeValueMetadata')

const AttributeMetadataSchema = z
  .object({
    attributeId: z.string().exactOptional().openapi({ description: 'The ID of the attribute.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The localized display name for the attribute, if available; otherwise, the English display name.',
      }),
    groupDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The localized display name of the group that contains this attribute, if available; otherwise, the English group name. Related attributes are collected into a group and should be displayed together under the heading given here.',
      }),
    isDeprecated: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the attribute is deprecated and should no longer be used. If deprecated, updating this attribute will not result in an error, but updates will not be saved. At some point after being deprecated, the attribute will be removed entirely and it will become an error.',
      }),
    isRepeatable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the attribute supports multiple values. If false, only a single value should be provided.',
      }),
    valueMetadata: z
      .array(AttributeValueMetadataSchema)
      .exactOptional()
      .openapi({
        description:
          'For some types of attributes (for example, enums), a list of supported values and corresponding display names for those values is provided.',
      }),
    valueType: z
      .enum(['ATTRIBUTE_VALUE_TYPE_UNSPECIFIED', 'BOOL', 'ENUM', 'URL', 'REPEATED_ENUM'])
      .exactOptional()
      .openapi({
        description:
          'The value type for the attribute. Values set and retrieved should be expected to be of this type.',
      }),
  })
  .openapi({
    description:
      'Metadata for an attribute. Contains display information for the attribute, including a localized name and a heading for grouping related attributes together.',
    required: [],
  })
  .openapi('AttributeMetadata')

const AttributionSchema = z
  .object({
    profileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user name to attribute the media item to.' }),
    profilePhotoUrl: z
      .string()
      .exactOptional()
      .openapi({ description: "URL of the attributed user's profile photo thumbnail." }),
    profileUrl: z
      .string()
      .exactOptional()
      .openapi({ description: "The URL of the attributed user's Google Maps profile page." }),
    takedownUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL of the takedown page, where the media item can be reported if it is inappropriate.',
      }),
  })
  .openapi({
    description:
      "Attribution information for customer media items, such as the contributor's name and profile picture.",
    required: [],
  })
  .openapi('Attribution')

const MetricRequestSchema = z
  .object({
    metric: z
      .enum([
        'METRIC_UNSPECIFIED',
        'ALL',
        'QUERIES_DIRECT',
        'QUERIES_INDIRECT',
        'QUERIES_CHAIN',
        'VIEWS_MAPS',
        'VIEWS_SEARCH',
        'ACTIONS_WEBSITE',
        'ACTIONS_PHONE',
        'ACTIONS_DRIVING_DIRECTIONS',
        'PHOTOS_VIEWS_MERCHANT',
        'PHOTOS_VIEWS_CUSTOMERS',
        'PHOTOS_COUNT_MERCHANT',
        'PHOTOS_COUNT_CUSTOMERS',
        'LOCAL_POST_VIEWS_SEARCH',
        'LOCAL_POST_ACTIONS_CALL_TO_ACTION',
      ])
      .exactOptional()
      .openapi({ description: 'The requested metric.' }),
    options: z
      .array(
        z.enum([
          'METRIC_OPTION_UNSPECIFIED',
          'AGGREGATED_TOTAL',
          'AGGREGATED_DAILY',
          'BREAKDOWN_DAY_OF_WEEK',
          'BREAKDOWN_HOUR_OF_DAY',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'How the values should appear when returned.' }),
  })
  .openapi({
    description:
      'A request to return values for one metric and the options for how those values should be returned.',
    required: [],
  })
  .openapi('MetricRequest')

const BasicMetricsRequestSchema = z
  .object({
    metricRequests: z
      .array(MetricRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'A collection of metrics to return values for including the options for how the data should be returned.',
      }),
    timeRange: TimeRangeSchema.exactOptional().openapi({
      description:
        'The range to gather metrics for. The maximum range is 18 months from the request date. In some cases, the data may still be missing for days close to the request date. Missing data will be specified in the `metricValues` in the response.',
    }),
  })
  .openapi({ description: 'A request for basic metric insights.', required: [] })
  .openapi('BasicMetricsRequest')

const MoreHoursTypeSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The human-readable English display name for the hours type.',
        readOnly: true,
      }),
    hoursTypeId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. A stable ID provided by Google for this hours type.',
        readOnly: true,
      }),
    localizedDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The human-readable localized display name for the hours type.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'More hours types that a business can offers, in addition to its regular hours.',
    required: [],
  })
  .openapi('MoreHoursType')

const ServiceTypeSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The human-readable display name for the service type.',
        readOnly: true,
      }),
    serviceTypeId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. A stable ID (provided by Google) for this service type.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A message describing a service type that the business offers.',
    required: [],
  })
  .openapi('ServiceType')

const CategorySchema = z
  .object({
    categoryId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '@OutputOnly. A stable ID (provided by Google) for this category. The `category_id` must be specified when modifying the category (when creating or updating a location).',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '@OutputOnly. The human-readable name of the category. This is set when reading the location. When modifying the location, `category_id` must be set.',
      }),
    moreHoursTypes: z
      .array(MoreHoursTypeSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. More hours types that are available for this business category.',
        readOnly: true,
      }),
    serviceTypes: z
      .array(ServiceTypeSchema)
      .exactOptional()
      .openapi({
        description:
          '@OutputOnly. A list of all the service types that are available for this business category.',
      }),
  })
  .openapi({
    description:
      'A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see [categories.list](https://developers.google.com/my-business/reference/rest/v4/categories/list).',
    required: [],
  })
  .openapi('Category')

const BatchGetBusinessCategoriesResponseSchema = z
  .object({
    categories: z
      .array(CategorySchema)
      .exactOptional()
      .openapi({
        description:
          'Categories that match the GConcept ids provided in the request. They will not come in the same order as category ids in the request.',
      }),
  })
  .openapi({
    description: 'Response message for BusinessCategories.BatchGetBusinessCategories.',
    required: [],
  })
  .openapi('BatchGetBusinessCategoriesResponse')

const BatchGetLocationsRequestSchema = z
  .object({
    locationNames: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A collection of locations to fetch, specified by their names.' }),
  })
  .openapi({ description: 'Request message for Locations.BatchGetLocations.', required: [] })
  .openapi('BatchGetLocationsRequest')

const LatLngSchema = z
  .object({
    latitude: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The latitude in degrees. It must be in the range [-90.0, +90.0].' }),
    longitude: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The longitude in degrees. It must be in the range [-180.0, +180.0].',
      }),
  })
  .openapi({
    description:
      'An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the WGS84 standard. Values must be within normalized ranges.',
    required: [],
  })
  .openapi('LatLng')

const LocationKeySchema = z
  .object({
    explicitNoPlaceId: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. A value of true indicates that an unset place ID is deliberate, which is different from no association being made yet.',
      }),
    placeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If this location has been verified and is connected to/appears on Google Maps, this field is populated with the place ID for the location. This ID can be used in various Places APIs. If this location is unverified, this field may be populated if the location has been associated with a place that appears on Google Maps. This field can be set during Create calls, but not for Update. The additional `explicit_no_place_id` bool qualifies whether an unset place ID is deliberate or not.',
      }),
    plusPageId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. If this location has a Google+ page associated with it, this is populated with the Google+ page ID for this location.',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The `request_id` used to create this location. May be empty if this location was created outside of the Google My Business API or Business Profile Locations.',
      }),
  })
  .openapi({ description: 'Alternate/surrogate key references for a location.', required: [] })
  .openapi('LocationKey')

const LocationStateSchema = z
  .object({
    canDelete: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Indicates whether the location can be deleted using the Google My Business API.',
      }),
    canHaveFoodMenus: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Indicates if the listing is eligible for food menu.',
        readOnly: true,
      }),
    canModifyServiceList: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Indicates if the listing can modify a ServiceList.',
        readOnly: true,
      }),
    canOperateHealthData: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Indicates whether the location can operate on Health data.',
        readOnly: true,
      }),
    canOperateLodgingData: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Indicates whether the location can operate on Lodging data.',
        readOnly: true,
      }),
    canUpdate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Output only. Indicates whether the location can be updated.' }),
    hasPendingEdits: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Output only. Indicates whether any of this Location's properties are in the edit pending state.",
      }),
    hasPendingVerification: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Indicates whether the location has pending verification requests.',
      }),
    isDisabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Output only. Indicates whether the location is disabled.' }),
    isDisconnected: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Indicates whether the location is disconnected from a place on Google Maps.',
      }),
    isDuplicate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Indicates whether the location is a duplicate of another location.',
      }),
    isGoogleUpdated: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Indicates whether the place ID associated with this location has updates.',
      }),
    isLocalPostApiDisabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Indicates whether [accounts.locations.localPosts](/my-business/reference/rest/v4/accounts.locations.localPosts) is disabled for this location.',
      }),
    isPendingReview: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Indicates whether the review of the location is pending.',
      }),
    isPublished: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Output only. Indicates whether the location is published.' }),
    isSuspended: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Indicates whether the location is suspended. Suspended locations are not visible to end users in Google products. If you believe this was a mistake, see the [help center article] (https://support.google.com/business/answer/4569145).',
      }),
    isVerified: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Output only. Indicates whether the location is verified.' }),
    needsReverification: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Indicates whether the location requires reverification.',
      }),
  })
  .openapi({
    description:
      'Contains a set of booleans that reflect the [state of a Location.](https://support.google.com/business/answer/3480862)',
    required: [],
  })
  .openapi('LocationState')

const DuplicateSchema = z
  .object({
    access: z
      .enum(['ACCESS_UNSPECIFIED', 'ACCESS_UNKNOWN', 'ALLOWED', 'INSUFFICIENT'])
      .exactOptional()
      .openapi({
        description: 'Indicates whether the user has access to the location it duplicates.',
      }),
    locationName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the location that this duplicates. Only populated if the authenticated user has access rights to that location and that location is not deleted.',
      }),
    placeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The place ID of the location that this duplicates.' }),
  })
  .openapi({
    description: 'Information about the location that this location duplicates.',
    required: [],
  })
  .openapi('Duplicate')

const MetadataSchema = z
  .object({
    duplicate: DuplicateSchema.exactOptional().openapi({
      description:
        'Information about the location that this location duplicates. Only present when `location_state.is_duplicate` is true. Deprecated: We are no longer supporting detailed information for duplicates.',
    }),
    mapsUrl: z.string().exactOptional().openapi({ description: 'A link to the location on Maps.' }),
    newReviewUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A link to the page on Google Search where a customer can leave a review for the location.',
      }),
  })
  .openapi({
    description: 'Additional non-user-editable information about the location.',
    required: [],
  })
  .openapi('Metadata')

const TimePeriodSchema = z
  .object({
    closeDay: z
      .enum([
        'DAY_OF_WEEK_UNSPECIFIED',
        'MONDAY',
        'TUESDAY',
        'WEDNESDAY',
        'THURSDAY',
        'FRIDAY',
        'SATURDAY',
        'SUNDAY',
      ])
      .exactOptional()
      .openapi({ description: 'Indicates the day of the week this period ends on.' }),
    closeTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time in 24hr ISO 8601 extended format (hh:mm). Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field.',
      }),
    openDay: z
      .enum([
        'DAY_OF_WEEK_UNSPECIFIED',
        'MONDAY',
        'TUESDAY',
        'WEDNESDAY',
        'THURSDAY',
        'FRIDAY',
        'SATURDAY',
        'SUNDAY',
      ])
      .exactOptional()
      .openapi({ description: 'Indicates the day of the week this period starts on.' }),
    openTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time in 24hr ISO 8601 extended format (hh:mm). Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field.',
      }),
  })
  .openapi({
    description:
      'Represents a span of time that the business is open, starting on the specified open day/time and closing on the specified close day/time. The closing time must occur after the opening time, for example later in the same day, or on a subsequent day.',
    required: [],
  })
  .openapi('TimePeriod')

const MoreHoursSchema = z
  .object({
    hoursTypeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Type of hours. Clients should call {#link businessCategories:BatchGet} to get supported hours types for categories of their locations.',
      }),
    periods: z
      .array(TimePeriodSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. A collection of times that this location is open. Each period represents a range of hours when the location is open during the week.',
      }),
  })
  .openapi({
    description: 'The time periods during which a location is open for certain types of business.',
    required: [],
  })
  .openapi('MoreHours')

const DateSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.",
      }),
    month: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.',
      }),
    year: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.',
      }),
  })
  .openapi({
    description:
      'Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.',
    required: [],
  })
  .openapi('Date')

const OpenInfoSchema = z
  .object({
    canReopen: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Indicates whether this business is eligible for re-open.',
      }),
    openingDate: DateSchema.exactOptional().openapi({
      description:
        'The date on which the location first opened. If the exact day is not known, month and year only can be provided. The date must be in the past or be no more than one year in the future.',
    }),
    status: z
      .enum(['OPEN_FOR_BUSINESS_UNSPECIFIED', 'OPEN', 'CLOSED_PERMANENTLY', 'CLOSED_TEMPORARILY'])
      .exactOptional()
      .openapi({
        description:
          'Indicates whether or not the Location is currently open for business. All locations are open by default, unless updated to be closed.',
      }),
  })
  .openapi({
    description: 'Information related to the opening state of the business.',
    required: [],
  })
  .openapi('OpenInfo')

const ItemSchema = z
  .object({
    itemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. ID for the item. Price list, section, and item IDs cannot be duplicated within this Location.',
      }),
    labels: z
      .array(LabelSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Language-tagged labels for the item. We recommend that item names be 140 characters or less, and descriptions 250 characters or less. At least one set of labels is required.',
      }),
    price: MoneySchema.exactOptional().openapi({ description: 'Optional. Price of the item.' }),
  })
  .openapi({
    description:
      'A single list item. Each variation of an item in the price list should have its own Item with its own price data.',
    required: [],
  })
  .openapi('Item')

const SectionSchema = z
  .object({
    items: z
      .array(ItemSchema)
      .exactOptional()
      .openapi({ description: 'Items that are contained within this section of the price list.' }),
    labels: z
      .array(LabelSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Language-tagged labels for the section. We recommend that section names and descriptions be 140 characters or less. At least one set of labels is required.',
      }),
    sectionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. ID for the section. Price list, section, and item IDs cannot be duplicated within this Location.',
      }),
    sectionType: z
      .enum(['SECTION_TYPE_UNSPECIFIED', 'FOOD', 'SERVICES'])
      .exactOptional()
      .openapi({
        description: 'Optional. Type of the current price list section. Default value is FOOD.',
      }),
  })
  .openapi({
    description: 'A section of the price list containing one or more items.',
    required: [],
  })
  .openapi('Section')

const PriceListSchema = z
  .object({
    labels: z
      .array(LabelSchema)
      .exactOptional()
      .openapi({ description: 'Required. Language-tagged labels for the price list.' }),
    priceListId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. ID for the price list. Price list, section, and item IDs cannot be duplicated within this Location.',
      }),
    sections: z
      .array(SectionSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Sections for this price list. Each price list must contain at least one section.',
      }),
    sourceUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional source URL of where the price list was retrieved from. For example, this could be the URL of the page that was automatically scraped to populate the menu information.',
      }),
  })
  .openapi({
    description:
      'A list of item price information. Price lists are structured as one or more price lists, each containing one or more sections with one or more items. For example, food price lists may represent breakfast/lunch/dinner menus, with sections for burgers/steak/seafood.',
    required: [],
  })
  .openapi('PriceList')

const ProfileSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Description of the location in your own voice, not editable by anyone else.',
      }),
  })
  .openapi({ description: "All information pertaining to the location's profile.", required: [] })
  .openapi('Profile')

const BusinessHoursSchema = z
  .object({
    periods: z
      .array(TimePeriodSchema)
      .exactOptional()
      .openapi({
        description:
          'A collection of times that this location is open for business. Each period represents a range of hours when the location is open during the week.',
      }),
  })
  .openapi({
    description:
      'Represents the time periods that this location is open for business. Holds a collection of TimePeriod instances.',
    required: [],
  })
  .openapi('BusinessHours')

const RelationshipDataSchema = z
  .object({
    parentChain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the Chain that this location is member of. How to find Chain ID',
      }),
  })
  .openapi({
    description: 'Information of all parent and children locations related to this one.',
    required: [],
  })
  .openapi('RelationshipData')

const PlaceInfoSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The localized name of the place. For example, `Scottsdale, AZ`.' }),
    placeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the place. Must correspond to a [region.] (https://developers.google.com/places/web-service/supported_types#table3)',
      }),
  })
  .openapi({ description: "Defines an area that's represented by a place ID.", required: [] })
  .openapi('PlaceInfo')

const PlacesSchema = z
  .object({
    placeInfos: z
      .array(PlaceInfoSchema)
      .exactOptional()
      .openapi({
        description: 'The areas represented by place IDs. Limited to a maximum of 20 places.',
      }),
  })
  .openapi({
    description: 'Defines the union of areas represented by a set of places.',
    required: [],
  })
  .openapi('Places')

const PointRadiusSchema = z
  .object({
    latlng: LatLngSchema.exactOptional().openapi({
      description:
        'The latitude/longitude that specifies the center of an area defined by the radius.',
    }),
    radiusKm: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The distance in kilometers of the area around the point.' }),
  })
  .openapi({
    description: 'A radius around a particular point (latitude/longitude).',
    required: [],
  })
  .openapi('PointRadius')

const ServiceAreaBusinessSchema = z
  .object({
    businessType: z
      .enum([
        'BUSINESS_TYPE_UNSPECIFIED',
        'CUSTOMER_LOCATION_ONLY',
        'CUSTOMER_AND_BUSINESS_LOCATION',
      ])
      .exactOptional()
      .openapi({ description: 'Indicates the type of the service area business.' }),
    places: PlacesSchema.exactOptional().openapi({
      description: 'The area that this business serves defined through a set of places.',
    }),
    radius: PointRadiusSchema.exactOptional().openapi({
      description: 'Output only. The area that this business serves centered around a point.',
    }),
  })
  .openapi({
    description:
      "Service area businesses provide their service at the customer's location (for example, a locksmith or plumber).",
    required: [],
  })
  .openapi('ServiceAreaBusiness')

const SpecialHourPeriodSchema = z
  .object({
    closeTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The wall time on `end_date` when a location closes, expressed in 24hr ISO 8601 extended format. (hh:mm) Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field. Must be specified if `is_closed` is false.',
      }),
    endDate: DateSchema.exactOptional().openapi({
      description:
        'The calendar date this special hour period ends on. If `end_date` field is not set, default to the date specified in `start_date`. If set, this field must be equal to or at most 1 day after `start_date`.',
    }),
    isClosed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, `end_date`, `open_time`, and `close_time` are ignored, and the date specified in `start_date` is treated as the location being closed for the entire day.',
      }),
    openTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The wall time on `start_date` when a location opens, expressed in 24hr ISO 8601 extended format. (hh:mm) Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field. Must be specified if `is_closed` is false.',
      }),
    startDate: DateSchema.exactOptional().openapi({
      description: 'The calendar date this special hour period starts on.',
    }),
  })
  .openapi({
    description:
      "Represents a single time period when a location's operational hours differ from its normal business hours. A special hour period must represent a range of less than 24 hours. The `open_time` and `start_date` must predate the `close_time` and `end_date`. The `close_time` and `end_date` can extend to 11:59 a.m. on the day after the specified `start_date`. For example, the following inputs are valid: start_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=11:59 The following inputs are not valid: start_date=2015-11-23, open_time=13:00, close_time=11:59 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=12:00 start_date=2015-11-23, end_date=2015-11-25, open_time=08:00, close_time=18:00",
    required: [],
  })
  .openapi('SpecialHourPeriod')

const SpecialHoursSchema = z
  .object({
    specialHourPeriods: z
      .array(SpecialHourPeriodSchema)
      .exactOptional()
      .openapi({ description: "A list of exceptions to the business's regular hours." }),
  })
  .openapi({
    description:
      "Represents a set of time periods when a location's operational hours differ from its normal business hours.",
    required: [],
  })
  .openapi('SpecialHours')

const LocationSchema = z
  .object({
    adWordsLocationExtensions: AdWordsLocationExtensionsSchema.exactOptional().openapi({
      description: 'Additional information that is surfaced in AdWords.',
    }),
    additionalCategories: z
      .array(CategorySchema)
      .exactOptional()
      .openapi({
        description:
          "Additional categories to describe your business. Categories help your customers find accurate, specific results for services they're interested in. To keep your business information accurate and live, make sure that you use as few categories as possible to describe your overall core business. Choose categories that are as specific as possible, but representative of your main business.",
      }),
    additionalPhones: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Up to two phone numbers (mobile or landline, no fax) at which your business can be called, in addition to your primary phone number.',
      }),
    address: PostalAddressSchema.exactOptional().openapi({
      description:
        'A precise, accurate address to describe your business location. PO boxes or mailboxes located at remote locations are not acceptable. At this time, you can specify a maximum of five `address_lines` values in the address.',
    }),
    attributes: z
      .array(AttributeSchema)
      .exactOptional()
      .openapi({ description: 'Attributes for this location.' }),
    labels: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A collection of free-form strings to allow you to tag your business. These labels are NOT user facing; only you can see them. Limited to 255 characters (per label).',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The language of the location. Set during creation and not updateable.',
      }),
    latlng: LatLngSchema.exactOptional().openapi({
      description:
        'User-provided latitude and longitude. When creating a location, this field is ignored if the provided address geocodes successfully. This field is only returned on get requests if the user-provided `latlng` value was accepted during create, or the `latlng` value was updated through the Business Profile website. This field cannot be updated.',
    }),
    locationKey: LocationKeySchema.exactOptional().openapi({
      description:
        'A collection of keys that link this business to other Google properties, such as a Google+ page and Google Maps Places.',
    }),
    locationName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Location name should reflect your business\'s real-world name, as used consistently on your storefront, website, and stationery, and as known to customers. Any additional information, when relevant, can be included in other fields of the resource (for example, `Address`, `Categories`). Don\'t add unnecessary information to your name (for example, prefer "Google" over "Google Inc. - Mountain View Corporate Headquarters"). Don\'t include marketing taglines, store codes, special characters, hours or closed/open status, phone numbers, website URLs, service/product information, location/address or directions, or containment information (for example, "Chase ATM in Duane Reade").',
      }),
    locationState: LocationStateSchema.exactOptional().openapi({
      description:
        'Output only. A set of booleans that reflects the [state of a location.](https://support.google.com/business/answer/3480862)',
    }),
    metadata: MetadataSchema.exactOptional().openapi({
      description: 'Output Only. Additional non-user-editable information.',
    }),
    moreHours: z
      .array(MoreHoursSchema)
      .exactOptional()
      .openapi({
        description: "More hours for a business's different departments or specific customers.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}` In the context of matches, this field will not be populated.',
      }),
    openInfo: OpenInfoSchema.exactOptional().openapi({
      description: 'A flag that indicates whether the location is currently open for business.',
    }),
    priceLists: z
      .array(PriceListSchema)
      .exactOptional()
      .openapi({ description: 'Price list information for this location.' }),
    primaryCategory: CategorySchema.exactOptional().openapi({
      description: 'Category that best describes the core business this location engages in.',
    }),
    primaryPhone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A phone number that connects to your individual business location as directly as possible. Use a local phone number instead of a central, call center helpline number whenever possible.',
      }),
    profile: ProfileSchema.exactOptional().openapi({
      description:
        'Describes your business in your own voice and shares with users the unique story of your business and offerings.',
    }),
    regularHours: BusinessHoursSchema.exactOptional().openapi({
      description: 'Operating hours for the business.',
    }),
    relationshipData: RelationshipDataSchema.exactOptional().openapi({
      description: 'All locations and chain related to this one.',
    }),
    serviceArea: ServiceAreaBusinessSchema.exactOptional().openapi({
      description:
        "Service area businesses provide their service at the customer's location. If this business is a service area business, this field describes the area(s) serviced by the business.",
    }),
    specialHours: SpecialHoursSchema.exactOptional().openapi({
      description:
        'Special hours for the business. This typically includes holiday hours, and other times outside of regular operating hours. These override regular business hours.',
    }),
    storeCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'External identifier for this location, which must be unique inside a given account. This is a means of associating the location with your own records.',
      }),
    websiteUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL for this business. If possible, use a URL that represents this individual business location instead of a generic website/URL that represents all locations, or the brand.',
      }),
  })
  .openapi({
    description:
      'A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.',
    required: [],
  })
  .openapi('Location')

const BatchGetLocationsResponseSchema = z
  .object({
    locations: z
      .array(LocationSchema)
      .exactOptional()
      .openapi({ description: 'A collection of locations.' }),
  })
  .openapi({ description: 'Response message for Locations.BatchGetLocations.', required: [] })
  .openapi('BatchGetLocationsResponse')

const BatchGetReviewsRequestSchema = z
  .object({
    ignoreRatingOnlyReviews: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to ignore rating-only reviews.' }),
    locationNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A collection of locations to fetch reviews for, specified by their names.',
      }),
    orderBy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Specifies the field to sort reviews by. If unspecified, the order of reviews returned will default to `update_time desc`. Valid orders to sort by are `rating`, `rating desc` and `update_time desc`. `rating` will return reviews in ascending order. `update_time`(i.e. ascending order) is not supported.',
      }),
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'How many reviews to fetch per page. The default value is 200.' }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'If specified, it fetches the next page of reviews.' }),
  })
  .openapi({ description: 'Request message for Reviews.BatchGetReviews.', required: [] })
  .openapi('BatchGetReviewsRequest')

const ReviewReplySchema = z
  .object({
    comment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The body of the reply as plain text with markups. The maximum length is 4096 bytes.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The timestamp for when the reply was last modified.' }),
  })
  .openapi({
    description: "Represents the location owner/manager's reply to a review.",
    required: [],
  })
  .openapi('ReviewReply')

const ReviewerSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The name of the reviewer. Only populated with the reviewer's real name if `is_anonymous` is false.",
      }),
    isAnonymous: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the reviewer has opted to remain anonymous.' }),
    profilePhotoUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The profile photo link of the reviewer. Only populated if `is_anonymous` is false.',
      }),
  })
  .openapi({ description: 'Represents the author of the review.', required: [] })
  .openapi('Reviewer')

const ReviewSchema = z
  .object({
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'The body of the review as plain text with markups.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp for when the review was written.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name. For Review it is of the form `accounts/{account_id}/locations/{location_id}/reviews/{review_id}`',
      }),
    reviewId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The encrypted unique identifier.' }),
    reviewReply: ReviewReplySchema.exactOptional().openapi({
      description: "The owner/manager of this location's reply to this review.",
    }),
    reviewer: ReviewerSchema.exactOptional().openapi({ description: 'The author of the review.' }),
    starRating: z
      .enum(['STAR_RATING_UNSPECIFIED', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE'])
      .exactOptional()
      .openapi({ description: 'The star rating of the review.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp for when the review was last modified.' }),
  })
  .openapi({ description: 'Output only. Represents a review for a location.', required: [] })
  .openapi('Review')

const LocationReviewSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Location resource name.' }),
    review: ReviewSchema.exactOptional().openapi({ description: 'A review for the location.' }),
  })
  .openapi({ description: 'Represents a review with location information.', required: [] })
  .openapi('LocationReview')

const BatchGetReviewsResponseSchema = z
  .object({
    locationReviews: z
      .array(LocationReviewSchema)
      .exactOptional()
      .openapi({ description: 'Reviews with location information.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the number of reviews exceeded the requested page size, this field is populated with a token to fetch the next page of reviews on a subsequent calls. If there are no more reviews, this field will not be present in the response.',
      }),
  })
  .openapi({ description: 'Response message for Reviews.BatchGetReviews.', required: [] })
  .openapi('BatchGetReviewsResponse')

const BusinessSchema = z
  .object({
    businessCenter: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Business center. A designated room at the hotel with one or more desks and equipped with guest-use computers, printers, fax machines and/or photocopiers. May or may not be open 24/7. May or may not require a key to access. Not a meeting room or conference room.',
      }),
    businessCenterException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Business center exception.' }),
    meetingRooms: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Meeting rooms. Rooms at the hotel designated for business-related gatherings. Rooms are usually equipped with tables or desks, office chairs and audio/visual facilities to allow for presentations and conference calls. Also known as conference rooms.',
      }),
    meetingRoomsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Meeting rooms count. The number of meeting rooms at the property.',
      }),
    meetingRoomsCountException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Meeting rooms count exception.' }),
    meetingRoomsException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Meeting rooms exception.' }),
  })
  .openapi({
    description: 'Features of the property of specific interest to the business traveler.',
    required: [],
  })
  .openapi('Business')

const CallToActionSchema = z
  .object({
    actionType: z
      .enum([
        'ACTION_TYPE_UNSPECIFIED',
        'BOOK',
        'ORDER',
        'SHOP',
        'LEARN_MORE',
        'SIGN_UP',
        'GET_OFFER',
        'CALL',
      ])
      .exactOptional()
      .openapi({ description: 'The type of action that will be performed.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL the user will be directed to upon clicking. This field should be left unset for Call CTA.',
      }),
  })
  .openapi({
    description: 'An action that is performed when the user clicks through the post',
    required: [],
  })
  .openapi('CallToAction')

const CaloriesFactSchema = z
  .object({
    lowerAmount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Required. Lower amount of calories' }),
    unit: z
      .enum(['ENERGY_UNIT_UNSPECIFIED', 'CALORIE', 'JOULE'])
      .exactOptional()
      .openapi({ description: 'Required. Unit of the given calories information.' }),
    upperAmount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Optional. Upper amount of calories' }),
  })
  .openapi({
    description:
      'This message denotes calories information with an upper bound and lower bound range. Lower amount must be specified. Both lower and upper amounts are non-negative numbers.',
    required: [],
  })
  .openapi('CaloriesFact')

const ChainNameSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name for this chain.' }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The BCP 47 code of language of the name.' }),
  })
  .openapi({ description: 'Name to be used when displaying the chain.', required: [] })
  .openapi('ChainName')

const ChainUrlSchema = z
  .object({ url: z.string().exactOptional().openapi({ description: 'The url for this chain.' }) })
  .openapi({ description: 'Url to be used when displaying the chain.', required: [] })
  .openapi('ChainUrl')

const ChainSchema = z
  .object({
    chainNames: z
      .array(ChainNameSchema)
      .exactOptional()
      .openapi({ description: 'Names of the chain.' }),
    locationCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of locations that are part of this chain.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: "The chain's resource name, in the format `chains/{chain_place_id}`.",
      }),
    websites: z
      .array(ChainUrlSchema)
      .exactOptional()
      .openapi({ description: 'Websites of the chain.' }),
  })
  .openapi({
    description: "A chain is a brand that your business's locations can be affiliated with.",
    required: [],
  })
  .openapi('Chain')

const ClearLocationAssociationRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for Locations.ClearLocationAssociationRequest.' })
  .openapi('ClearLocationAssociationRequest')

const CompleteVerificationRequestSchema = z
  .object({
    pin: z
      .string()
      .exactOptional()
      .openapi({ description: 'PIN code received by the merchant to complete the verification.' }),
  })
  .openapi({
    description: 'Request message for Verifications.CompleteVerificationAction.',
    required: [],
  })
  .openapi('CompleteVerificationRequest')

const VerificationSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp when the verification is requested.' }),
    method: z
      .enum(['VERIFICATION_METHOD_UNSPECIFIED', 'ADDRESS', 'EMAIL', 'PHONE_CALL', 'SMS', 'AUTO'])
      .exactOptional()
      .openapi({ description: 'The method of the verification.' }),
    name: z.string().exactOptional().openapi({ description: 'Resource name of the verification.' }),
    state: z
      .enum(['VERIFICATION_STATE_UNSPECIFIED', 'PENDING', 'COMPLETED', 'FAILED'])
      .exactOptional()
      .openapi({ description: 'The state of the verification.' }),
  })
  .openapi({
    description: 'A verification represents a verification attempt on a location.',
    required: [],
  })
  .openapi('Verification')

const CompleteVerificationResponseSchema = z
  .object({
    verification: VerificationSchema.exactOptional().openapi({
      description: 'The completed verification.',
    }),
  })
  .openapi({
    description: 'Response message for Verifications.CompleteVerificationAction.',
    required: [],
  })
  .openapi('CompleteVerificationResponse')

const ConnectivitySchema = z
  .object({
    freeWifi: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Free wifi. The hotel offers guests wifi for free.' }),
    freeWifiException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Free wifi exception.' }),
    publicAreaWifiAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Public area wifi available. Guests have the ability to wirelessly connect to the internet in the areas of the hotel accessible to anyone. Can be free or for a fee.',
      }),
    publicAreaWifiAvailableException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Public area wifi available exception.' }),
    publicInternetTerminal: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Public internet terminal. An area of the hotel supplied with computers and designated for the purpose of providing guests with the ability to access the internet.',
      }),
    publicInternetTerminalException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Public internet terminal exception.' }),
    wifiAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Wifi available. The hotel provides the ability for guests to wirelessly connect to the internet. Can be in the public areas of the hotel and/or in the guest rooms. Can be free or for a fee.',
      }),
    wifiAvailableException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Wifi available exception.' }),
  })
  .openapi({
    description:
      'The ways in which the property provides guests with the ability to access the internet.',
    required: [],
  })
  .openapi('Connectivity')

const DeclineInvitationRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for AccessControl.DeclineInvitation.' })
  .openapi('DeclineInvitationRequest')

const DimensionsSchema = z
  .object({
    heightPixels: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Height of the media item, in pixels.' }),
    widthPixels: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Width of the media item, in pixels.' }),
  })
  .openapi({ description: 'Dimensions of the media item.', required: [] })
  .openapi('Dimensions')

const DrivingDirectionMetricsRequestSchema = z
  .object({
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP 47 code for the language. If a language code is not provided, it defaults to English.',
      }),
    numDays: z
      .enum(['SEVEN', 'THIRTY', 'NINETY'])
      .exactOptional()
      .openapi({
        description:
          'The number of days to aggregate data for. Results returned will be available data over the last number of requested days. Valid values are 7, 30, and 90.',
      }),
  })
  .openapi({ description: 'A request for driving direction insights.', required: [] })
  .openapi('DrivingDirectionMetricsRequest')

const EmailInputSchema = z
  .object({
    emailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email address where the PIN should be sent to. An email address is accepted only if it is one of the addresses provided by FetchVerificationOptions. If the EmailVerificationData has is_user_name_editable set to true, the client may specify a different user name (local-part) but must match the domain name.',
      }),
  })
  .openapi({ description: 'Input for EMAIL verification.', required: [] })
  .openapi('EmailInput')

const EmailVerificationDataSchema = z
  .object({
    domainName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Domain name in the email address. e.g. "gmail.com" in foo@gmail.com',
      }),
    isUserNameEditable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether client is allowed to provide a different user name.' }),
    userName: z
      .string()
      .exactOptional()
      .openapi({ description: 'User name in the email address. e.g. "foo" in foo@gmail.com' }),
  })
  .openapi({ description: 'Display data for verifications through email.', required: [] })
  .openapi('EmailVerificationData')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.',
  })
  .openapi('Empty')

const EnhancedCleaningSchema = z
  .object({
    commercialGradeDisinfectantCleaning: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Commercial-grade disinfectant used to clean the property.' }),
    commercialGradeDisinfectantCleaningException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Commercial grade disinfectant cleaning exception.' }),
    commonAreasEnhancedCleaning: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enhanced cleaning of common areas.' }),
    commonAreasEnhancedCleaningException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Common areas enhanced cleaning exception.' }),
    employeesTrainedCleaningProcedures: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Employees trained in COVID-19 cleaning procedures.' }),
    employeesTrainedCleaningProceduresException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Employees trained cleaning procedures exception.' }),
    employeesTrainedThoroughHandWashing: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Employees trained in thorough hand-washing.' }),
    employeesTrainedThoroughHandWashingException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Employees trained thorough hand washing exception.' }),
    employeesWearProtectiveEquipment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Employees wear masks, face shields, and/or gloves.' }),
    employeesWearProtectiveEquipmentException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Employees wear protective equipment exception.' }),
    guestRoomsEnhancedCleaning: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enhanced cleaning of guest rooms.' }),
    guestRoomsEnhancedCleaningException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Guest rooms enhanced cleaning exception.' }),
  })
  .openapi({
    description: 'Enhanced cleaning measures implemented by the hotel during COVID-19.',
    required: [],
  })
  .openapi('EnhancedCleaning')

const FamiliesSchema = z
  .object({
    babysitting: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Babysitting. Child care that is offered by hotel staffers or coordinated by hotel staffers with local child care professionals. Can be free or for a fee.',
      }),
    babysittingException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Babysitting exception.' }),
    kidsActivities: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Kids activities. Recreational options such as sports, films, crafts and games designed for the enjoyment of children and offered at the hotel. May or may not be supervised. May or may not be at a designated time or place. Cab be free or for a fee.',
      }),
    kidsActivitiesException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Kids activities exception.' }),
    kidsClub: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Kids club. An organized program of group activities held at the hotel and designed for the enjoyment of children. Facilitated by hotel staff (or staff procured by the hotel) in an area(s) designated for the purpose of entertaining children without their parents. May include games, outings, water sports, team sports, arts and crafts, and films. Usually has set hours. Can be free or for a fee. Also known as Kids Camp or Kids program.',
      }),
    kidsClubException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Kids club exception.' }),
  })
  .openapi({ description: 'Services and amenities for families and young guests.', required: [] })
  .openapi('Families')

const ServiceBusinessContextSchema = z
  .object({
    address: PostalAddressSchema.exactOptional().openapi({
      description:
        'The verification address of the location. It is used to either enable more verification options or send a postcard.',
    }),
  })
  .openapi({ description: 'Additional data for service business verification.', required: [] })
  .openapi('ServiceBusinessContext')

const FetchVerificationOptionsRequestSchema = z
  .object({
    context: ServiceBusinessContextSchema.exactOptional().openapi({
      description:
        'Extra context information for the verification of service businesses. Required for the locations whose business type is CUSTOMER_LOCATION_ONLY. INVALID_ARGUMENT will be thrown if it is set for other business types of locations.',
    }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP 47 language code representing the language that is to be used for the verification process. Available options vary by language.',
      }),
  })
  .openapi({
    description: 'Request message for Verifications.FetchVerificationOptions.',
    required: [],
  })
  .openapi('FetchVerificationOptionsRequest')

const PhoneVerificationDataSchema = z
  .object({
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Phone number that the PIN will be sent to.' }),
  })
  .openapi({
    description: 'Display Data for verifications through phone, e.g. phone call, sms.',
    required: [],
  })
  .openapi('PhoneVerificationData')

const VerificationOptionSchema = z
  .object({
    addressData: AddressVerificationDataSchema.exactOptional().openapi({
      description: 'Set only if the method is MAIL.',
    }),
    emailData: EmailVerificationDataSchema.exactOptional().openapi({
      description: 'Set only if the method is EMAIL.',
    }),
    phoneData: PhoneVerificationDataSchema.exactOptional().openapi({
      description: 'Set only if the method is PHONE_CALL or SMS.',
    }),
    verificationMethod: z
      .enum(['VERIFICATION_METHOD_UNSPECIFIED', 'ADDRESS', 'EMAIL', 'PHONE_CALL', 'SMS', 'AUTO'])
      .exactOptional()
      .openapi({ description: 'Method to verify the location.' }),
  })
  .openapi({
    description:
      'The verification option represents how to verify the location (indicated by verification method) and where the verification will be sent to (indicated by display data).',
    required: [],
  })
  .openapi('VerificationOption')

const FetchVerificationOptionsResponseSchema = z
  .object({
    options: z
      .array(VerificationOptionSchema)
      .exactOptional()
      .openapi({ description: 'The available verification options.' }),
  })
  .openapi({
    description: 'Response message for Verifications.FetchVerificationOptions.',
    required: [],
  })
  .openapi('FetchVerificationOptionsResponse')

const FindMatchingLocationsRequestSchema = z
  .object({
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The preferred language for the matching location (in BCP-47 format).',
      }),
    maxCacheDuration: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. This field is ignored for all requests.' }),
    numResults: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of matches to return. The default value is 3, with a maximum of 10. Note that latency may increase if more are requested. There is no pagination.',
      }),
  })
  .openapi({ description: 'Request message for Locations.FindMatchingLocations.', required: [] })
  .openapi('FindMatchingLocationsRequest')

const MatchedLocationSchema = z
  .object({
    isExactMatch: z.boolean().exactOptional().openapi({ description: 'Is this an exact match?' }),
    location: LocationSchema.exactOptional().openapi({
      description:
        'The sparsely populated location that is a potential match. Unpopulated fields include, but may not be limited to: name (the matched location cannot be retrieved via `GetLocation` nor `BatchGetLocations`); `store_code`; `service_area` coverage area details; `labels`; `ad_words_location_extensions`; `photos`',
    }),
  })
  .openapi({ description: 'Represents a possible match to a location.', required: [] })
  .openapi('MatchedLocation')

const FindMatchingLocationsResponseSchema = z
  .object({
    matchTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'When the matching algorithm was last executed for this location.' }),
    matchedLocations: z
      .array(MatchedLocationSchema)
      .exactOptional()
      .openapi({
        description:
          'A collection of locations that are potential matches to the specified location, listed in order from best to least match. If there is an exact match, it will be in the first position.',
      }),
  })
  .openapi({ description: 'Response message for Locations.FindMatchingLocations.', required: [] })
  .openapi('FindMatchingLocationsResponse')

const FollowersMetadataSchema = z
  .object({
    count: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total number of followers for the location.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name for this. accounts/{account_id}/locations/{location_id}/followers/metadata',
      }),
  })
  .openapi({ description: 'Follower metadata for a location.', required: [] })
  .openapi('FollowersMetadata')

const FoodAndDrinkSchema = z
  .object({
    bar: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Bar. A designated room, lounge or area of an on-site restaurant with seating at a counter behind which a hotel staffer takes the guest's order and provides the requested alcoholic drink. Can be indoors or outdoors. Also known as Pub.",
      }),
    barException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Bar exception.' }),
    breakfastAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Breakfast available. The morning meal is offered to all guests. Can be free or for a fee.',
      }),
    breakfastAvailableException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Breakfast available exception.' }),
    breakfastBuffet: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Breakfast buffet. Breakfast meal service where guests serve themselves from a variety of dishes/foods that are put out on a table.',
      }),
    breakfastBuffetException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Breakfast buffet exception.' }),
    buffet: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Buffet. A type of meal where guests serve themselves from a variety of dishes/foods that are put out on a table. Includes lunch and/or dinner meals. A breakfast-only buffet is not sufficient.',
      }),
    buffetException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Buffet exception.' }),
    dinnerBuffet: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Dinner buffet. Dinner meal service where guests serve themselves from a variety of dishes/foods that are put out on a table.',
      }),
    dinnerBuffetException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Dinner buffet exception.' }),
    freeBreakfast: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Free breakfast. Breakfast is offered for free to all guests. Does not apply if limited to certain room packages.',
      }),
    freeBreakfastException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Free breakfast exception.' }),
    restaurant: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Restaurant. A business onsite at the hotel that is open to the public as well as guests, and offers meals and beverages to consume at tables or counters. May or may not include table service. Also known as cafe, buffet, eatery. A "breakfast room" where the hotel serves breakfast only to guests (not the general public) does not count as a restaurant.',
      }),
    restaurantException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Restaurant exception.' }),
    restaurantsCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Restaurants count. The number of restaurants at the hotel.' }),
    restaurantsCountException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Restaurants count exception.' }),
    roomService: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Room service. A hotel staffer delivers meals prepared onsite to a guest's room as per their request. May or may not be available during specific hours. Services should be available to all guests (not based on rate/room booked/reward program, etc).",
      }),
    roomServiceException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Room service exception.' }),
    tableService: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Table service. A restaurant in which a staff member is assigned to a guest's table to take their order, deliver and clear away food, and deliver the bill, if applicable. Also known as sit-down restaurant.",
      }),
    tableServiceException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Table service exception.' }),
    twentyFourHourRoomService: z
      .boolean()
      .exactOptional()
      .openapi({ description: '24hr room service. Room service is available 24 hours a day.' }),
    twentyFourHourRoomServiceException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: '24hr room service exception.' }),
    vendingMachine: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Vending machine. A glass-fronted mechanized cabinet displaying and dispensing snacks and beverages for purchase by coins, paper money and/or credit cards.',
      }),
    vendingMachineException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Vending machine exception.' }),
  })
  .openapi({ description: 'Meals, snacks, and beverages available at the property.', required: [] })
  .openapi('FoodAndDrink')

const MenuLabelSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Supplementary information of the component.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Display name of the component.' }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The BCP 47 code of language. If the language is not available, it will default to English.',
      }),
  })
  .openapi({
    description: 'Label to be used when displaying the menu and its various sub-components.',
    required: [],
  })
  .openapi('MenuLabel')

const IngredientSchema = z
  .object({
    labels: z
      .array(MenuLabelSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Labels to describe ingredient. Display names should be 140 characters or less, with descriptions 1,000 characters or less. At least one set of labels is required.',
      }),
  })
  .openapi({
    description: 'This message denotes an ingredient information of a food dish.',
    required: [],
  })
  .openapi('Ingredient')

const NutritionFactSchema = z
  .object({
    lowerAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Required. Lower amount of nutrition' }),
    unit: z
      .enum(['MASS_UNIT_UNSPECIFIED', 'GRAM', 'MILLIGRAM'])
      .exactOptional()
      .openapi({ description: 'Required. Unit of the given nutrition information.' }),
    upperAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Optional. Upper amount of nutrition' }),
  })
  .openapi({
    description:
      'This message denotes nutrition information with an upper bound and lower bound range and can be represented by mass unit. Lower amount must be specified. Both lower and upper amounts are non-negative numbers.',
    required: [],
  })
  .openapi('NutritionFact')

const NutritionFactsSchema = z
  .object({
    calories: CaloriesFactSchema.exactOptional().openapi({
      description: 'Optional. Calories of the dish.',
    }),
    cholesterol: NutritionFactSchema.exactOptional().openapi({
      description: 'Optional. Cholesterol information for a given food dish.',
    }),
    protein: NutritionFactSchema.exactOptional().openapi({
      description: 'Optional. Protein information for a given food dish.',
    }),
    sodium: NutritionFactSchema.exactOptional().openapi({
      description: 'Optional. Sodium information for a given food dish.',
    }),
    totalCarbohydrate: NutritionFactSchema.exactOptional().openapi({
      description: 'Optional. Carbohydrate information for a given food dish.',
    }),
    totalFat: NutritionFactSchema.exactOptional().openapi({
      description: 'Optional. Fat information for a given food dish.',
    }),
  })
  .openapi({
    description: 'This message represents nutrition facts for a food dish.',
    required: [],
  })
  .openapi('NutritionFacts')

const PortionSizeSchema = z
  .object({
    quantity: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Required. Number of the portion.' }),
    unit: z
      .array(MenuLabelSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. The repeated name_info field is for the unit in multiple languages.',
      }),
  })
  .openapi({ description: 'Serving portion size of a food dish.', required: [] })
  .openapi('PortionSize')

const FoodMenuItemAttributesSchema = z
  .object({
    allergen: z
      .array(
        z.enum([
          'ALLERGEN_UNSPECIFIED',
          'DAIRY',
          'EGG',
          'FISH',
          'PEANUT',
          'SHELLFISH',
          'SOY',
          'TREE_NUT',
          'WHEAT',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Optional. Allergens associated with the food dish. It is highly recommended to provide this field.',
      }),
    dietaryRestriction: z
      .array(
        z.enum([
          'DIETARY_RESTRICTION_UNSPECIFIED',
          'HALAL',
          'KOSHER',
          'ORGANIC',
          'VEGAN',
          'VEGETARIAN',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Optional. Dietary information of the food dish. It is highly recommended to provide this field.',
      }),
    ingredients: z
      .array(IngredientSchema)
      .exactOptional()
      .openapi({ description: 'Optional. Ingredients of the food dish option.' }),
    mediaKeys: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The media keys of the media associated with the dish. Only photo media is supported. When there are multiple photos associated, the first photo is considered as the preferred photo.',
      }),
    nutritionFacts: NutritionFactsSchema.exactOptional().openapi({
      description:
        'Optional. Nutrition facts of the food dish option. It is highly recommended to provide this field.',
    }),
    portionSize: PortionSizeSchema.exactOptional().openapi({
      description:
        'Optional. Size of the order, represented in units of items. (e.g. 4 "skewers", 6 "pieces")',
    }),
    preparationMethods: z
      .array(
        z.enum([
          'PREPARATION_METHOD_UNSPECIFIED',
          'BAKED',
          'BARBECUED',
          'BASTED',
          'BLANCHED',
          'BOILED',
          'BRAISED',
          'CODDLED',
          'FERMENTED',
          'FRIED',
          'GRILLED',
          'KNEADED',
          'MARINATED',
          'PAN_FRIED',
          'PICKLED',
          'PRESSURE_COOKED',
          'ROASTED',
          'SAUTEED',
          'SEARED',
          'SIMMERED',
          'SMOKED',
          'STEAMED',
          'STEEPED',
          'STIR_FRIED',
          'OTHER_METHOD',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Optional. Methods on how the food dish option is prepared.' }),
    price: MoneySchema.exactOptional().openapi({
      description: 'Required. Price of the food dish.',
    }),
    servesNumPeople: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Optional. Number of people can be served by this food dish option.',
      }),
    spiciness: z
      .enum(['SPICINESS_UNSPECIFIED', 'MILD', 'MEDIUM', 'HOT'])
      .exactOptional()
      .openapi({ description: 'Optional. Spiciness level of the food dish.' }),
  })
  .openapi({ description: 'Attributes of a food item/dish.', required: [] })
  .openapi('FoodMenuItemAttributes')

const FoodMenuItemOptionSchema = z
  .object({
    attributes: FoodMenuItemAttributesSchema.exactOptional().openapi({
      description:
        'Required. Detailed attributes of the item option. Individual unspecified attributes will be inherited from the item-level attibutes as the base.',
    }),
    labels: z
      .array(MenuLabelSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Language tagged labels for this menu item option. E.g.: "beef pad thai", "veggie pad thai", "small pizza", "large pizza". Display names should be 140 characters or less, with descriptions 1,000 characters or less. At least one set of labels is required.',
      }),
  })
  .openapi({
    description: 'Option of an Item. It requires an explicit user selection.',
    required: [],
  })
  .openapi('FoodMenuItemOption')

const FoodMenuItemSchema = z
  .object({
    attributes: FoodMenuItemAttributesSchema.exactOptional().openapi({
      description:
        'Required. Detailed attributes of the item. When item options are specified, this is considered as the base attributes and populate to each options.',
    }),
    labels: z
      .array(MenuLabelSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Language tagged labels for this menu item. Display names should be 140 characters or less, with descriptions 1,000 characters or less. At least one set of labels is required.',
      }),
    options: z
      .array(FoodMenuItemOptionSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. This is for an item that comes in multiple different options, and users are required to make choices. E.g. "regular" vs. "large" pizza. When options are specified, labels and attributes at item level will automatically become the first option\'s labels and attributes. Clients only need to specify other additional food options in this field.',
      }),
  })
  .openapi({
    description:
      'Item of a Section. It can be the dish itself, or can contain multiple FoodMenuItemOption.',
    required: [],
  })
  .openapi('FoodMenuItem')

const FoodMenuSectionSchema = z
  .object({
    items: z
      .array(FoodMenuItemSchema)
      .exactOptional()
      .openapi({
        description: 'Required. Items of the section. Each Section must have at least an item.',
      }),
    labels: z
      .array(MenuLabelSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Language tagged labels for this menu section. Display names should be 140 characters or less, with descriptions 1,000 characters or less. At least one set of labels is required.',
      }),
  })
  .openapi({
    description: 'Section of a menu. It can contain multiple items/dishes.',
    required: [],
  })
  .openapi('FoodMenuSection')

const FoodMenuSchema = z
  .object({
    cuisines: z
      .array(
        z.enum([
          'CUISINE_UNSPECIFIED',
          'AMERICAN',
          'ASIAN',
          'BRAZILIAN',
          'BREAK_FAST',
          'BRUNCH',
          'CHICKEN',
          'CHINESE',
          'FAMILY',
          'FAST_FOOD',
          'FRENCH',
          'GREEK',
          'GERMAN',
          'HAMBURGER',
          'INDIAN',
          'INDONESIAN',
          'ITALIAN',
          'JAPANESE',
          'KOREAN',
          'LATIN_AMERICAN',
          'MEDITERRANEAN',
          'MEXICAN',
          'PAKISTANI',
          'PIZZA',
          'SEAFOOD',
          'SPANISH',
          'SUSHI',
          'THAI',
          'TURKISH',
          'VEGETARIAN',
          'VIETNAMESE',
          'OTHER_CUISINE',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Optional. Cuisine information for the food menu. It is highly recommended to provide this field.',
      }),
    labels: z
      .array(MenuLabelSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Language-tagged labels for the menu. E.g. "menu", "lunch special". Display names should be 140 characters or less, with descriptions 1,000 characters or less. At least one set of labels is required.',
      }),
    sections: z
      .array(FoodMenuSectionSchema)
      .exactOptional()
      .openapi({ description: 'Required. Sections of the menu.' }),
    sourceUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Source URL of menu if there is a webpage to go to.' }),
  })
  .openapi({ description: 'Menu of a business that serves food dishes.', required: [] })
  .openapi('FoodMenu')

const FoodMenusSchema = z
  .object({
    menus: z
      .array(FoodMenuSchema)
      .exactOptional()
      .openapi({ description: 'Optional. A collection of food menus.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}/foodMenus`',
      }),
  })
  .openapi({ description: 'Menus of a business that serve food dishes.', required: [] })
  .openapi('FoodMenus')

const GenerateAccountNumberRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for Accounts.GenerateAccountNumber.' })
  .openapi('GenerateAccountNumberRequest')

const LivingAreaAccessibilitySchema = z
  .object({
    adaCompliantUnit: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'ADA compliant unit. A guestroom designed to accommodate the physical challenges of a guest with mobility and/or auditory and/or visual issues, as determined by legislative policy. Usually features enlarged doorways, roll-in showers with seats, bathroom grab bars, and communication equipment for the hearing and sight challenged.',
      }),
    adaCompliantUnitException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'ADA compliant unit exception.' }),
    hearingAccessibleDoorbell: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Hearing-accessible doorbell. A visual indicator(s) of a knock or ring at the door.',
      }),
    hearingAccessibleDoorbellException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Hearing-accessible doorbell exception.' }),
    hearingAccessibleFireAlarm: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Hearing-accessible fire alarm. A device that gives warning of a fire through flashing lights.',
      }),
    hearingAccessibleFireAlarmException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Hearing-accessible fire alarm exception.' }),
    hearingAccessibleUnit: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Hearing-accessible unit. A guestroom designed to accommodate the physical challenges of a guest with auditory issues.',
      }),
    hearingAccessibleUnitException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Hearing-accessible unit exception.' }),
    mobilityAccessibleBathtub: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Mobility-accessible bathtub. A bathtub that accomodates the physically challenged with additional railings or hand grips, a transfer seat or lift, and/or a door to enable walking into the tub.',
      }),
    mobilityAccessibleBathtubException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Mobility-accessible bathtub exception.' }),
    mobilityAccessibleShower: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Mobility-accessible shower. A shower with an enlarged door or access point to accommodate a wheelchair or a waterproof seat for the physically challenged.',
      }),
    mobilityAccessibleShowerException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Mobility-accessible shower exception.' }),
    mobilityAccessibleToilet: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Mobility-accessible toilet. A toilet with a higher seat, grab bars, and/or a larger area around it to accommodate the physically challenged.',
      }),
    mobilityAccessibleToiletException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Mobility-accessible toilet exception.' }),
    mobilityAccessibleUnit: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Mobility-accessible unit. A guestroom designed to accommodate the physical challenges of a guest with mobility and/or auditory and/or visual issues. Usually features enlarged doorways, roll-in showers with seats, bathroom grab bars, and communication equipment for the hearing and sight challenged.',
      }),
    mobilityAccessibleUnitException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Mobility-accessible unit exception.' }),
  })
  .openapi({ description: 'Accessibility features of the living area.', required: [] })
  .openapi('LivingAreaAccessibility')

const LivingAreaEatingSchema = z
  .object({
    coffeeMaker: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Coffee maker. An electric appliance that brews coffee by heating and forcing water through ground coffee.',
      }),
    coffeeMakerException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Coffee maker exception.' }),
    cookware: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Cookware. Kitchen pots, pans and utensils used in connection with the preparation of food.',
      }),
    cookwareException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Cookware exception.' }),
    dishwasher: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Dishwasher. A counter-height electrical cabinet containing racks for dirty dishware, cookware and cutlery, and a dispenser for soap built into the pull-down door. The cabinet is attached to the plumbing system to facilitate the automatic cleaning of its contents.',
      }),
    dishwasherException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Dishwasher exception.' }),
    indoorGrill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indoor grill. Metal grates built into an indoor cooktop on which food is cooked over an open flame or electric heat source.',
      }),
    indoorGrillException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Indoor grill exception.' }),
    kettle: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Kettle. A covered container with a handle and a spout used for boiling water.',
      }),
    kettleException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Kettle exception.' }),
    kitchenAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Kitchen available. An area of the guestroom designated for the preparation and storage of food via the presence of a refrigerator, cook top, oven and sink, as well as cutlery, dishes and cookware. Usually includes small appliances such a coffee maker and a microwave. May or may not include an automatic dishwasher.',
      }),
    kitchenAvailableException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Kitchen available exception.' }),
    microwave: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Microwave. An electric oven that quickly cooks and heats food by microwave energy. Smaller than a standing or wall mounted oven. Usually placed on a kitchen counter, a shelf or tabletop or mounted above a cooktop.',
      }),
    microwaveException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Microwave exception.' }),
    minibar: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Minibar. A small refrigerated cabinet in the guestroom containing bottles/cans of soft drinks, mini bottles of alcohol, and snacks. The items are most commonly available for a fee.',
      }),
    minibarException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Minibar exception.' }),
    outdoorGrill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Outdoor grill. Metal grates on which food is cooked over an open flame or electric heat source. Part of an outdoor apparatus that supports the grates. Also known as barbecue grill or barbecue.',
      }),
    outdoorGrillException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Outdoor grill exception.' }),
    oven: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Oven. A temperature controlled, heated metal cabinet powered by gas or electricity in which food is placed for the purpose of cooking or reheating.',
      }),
    ovenException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Oven exception.' }),
    refrigerator: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Refrigerator. A large, climate-controlled electrical cabinet with vertical doors. Built for the purpose of chilling and storing perishable foods.',
      }),
    refrigeratorException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Refrigerator exception.' }),
    sink: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Sink. A basin with a faucet attached to a water source and used for the purpose of washing and rinsing.',
      }),
    sinkException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Sink exception.' }),
    snackbar: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Snackbar. A small cabinet in the guestroom containing snacks. The items are most commonly available for a fee.',
      }),
    snackbarException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Snackbar exception.' }),
    stove: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Stove. A kitchen appliance powered by gas or electricity for the purpose of creating a flame or hot surface on which pots of food can be cooked. Also known as cooktop or hob.',
      }),
    stoveException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Stove exception.' }),
    teaStation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Tea station. A small area with the supplies needed to heat water and make tea.',
      }),
    teaStationException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Tea station exception.' }),
    toaster: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Toaster. A small, temperature controlled electric appliance with rectangular slots at the top that are lined with heated coils for the purpose of browning slices of bread products.',
      }),
    toasterException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Toaster exception.' }),
  })
  .openapi({ description: 'Information about eating features in the living area.', required: [] })
  .openapi('LivingAreaEating')

const LivingAreaFeaturesSchema = z
  .object({
    airConditioning: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Air conditioning. An electrical machine used to cool the temperature of the guestroom.',
      }),
    airConditioningException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Air conditioning exception.' }),
    bathtub: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Bathtub. A fixed plumbing feature set on the floor and consisting of a large container that accommodates the body of an adult for the purpose of seated bathing. Includes knobs or fixtures to control the temperature of the water, a faucet through which the water flows, and a drain that can be closed for filling and opened for draining.',
      }),
    bathtubException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Bathtub exception.' }),
    bidet: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Bidet. A plumbing fixture attached to a toilet or a low, fixed sink designed for the purpose of washing after toilet use.',
      }),
    bidetException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Bidet exception.' }),
    dryer: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Dryer. An electrical machine designed to dry clothing.' }),
    dryerException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Dryer exception.' }),
    electronicRoomKey: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Electronic room key. A card coded by the check-in computer that is read by the lock on the hotel guestroom door to allow for entry.',
      }),
    electronicRoomKeyException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Electronic room key exception.' }),
    fireplace: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Fireplace. A framed opening (aka hearth) at the base of a chimney in which logs or an electrical fire feature are burned to provide a relaxing ambiance or to heat the room. Often made of bricks or stone.',
      }),
    fireplaceException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Fireplace exception.' }),
    hairdryer: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Hairdryer. A handheld electric appliance that blows temperature-controlled air for the purpose of drying wet hair. Can be mounted to a bathroom wall or a freestanding device stored in the guestroom's bathroom or closet.",
      }),
    hairdryerException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Hairdryer exception.' }),
    heating: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Heating. An electrical machine used to warm the temperature of the guestroom.',
      }),
    heatingException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Heating exception.' }),
    inunitSafe: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'In-unit safe. A strong fireproof cabinet with a programmable lock, used for the protected storage of valuables in a guestroom. Often built into a closet.',
      }),
    inunitSafeException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'In-unit safe exception.' }),
    inunitWifiAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'In-unit Wifi available. Guests can wirelessly connect to the Internet in the guestroom. Can be free or for a fee.',
      }),
    inunitWifiAvailableException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'In-unit Wifi available exception.' }),
    ironingEquipment: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Ironing equipment. A device, usually with a flat metal base, that is heated to smooth, finish, or press clothes and a flat, padded, cloth-covered surface on which the clothes are worked.',
      }),
    ironingEquipmentException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Ironing equipment exception.' }),
    payPerViewMovies: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Pay per view movies. Televisions with channels that offer films that can be viewed for a fee, and have an interface to allow the viewer to accept the terms and approve payment.',
      }),
    payPerViewMoviesException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Pay per view movies exception.' }),
    privateBathroom: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Private bathroom. A bathroom designated for the express use of the guests staying in a specific guestroom.',
      }),
    privateBathroomException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Private bathroom exception.' }),
    shower: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Shower. A fixed plumbing fixture for standing bathing that features a tall spray spout or faucet through which water flows, a knob or knobs that control the water's temperature, and a drain in the floor.",
      }),
    showerException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Shower exception.' }),
    toilet: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Toilet. A fixed bathroom feature connected to a sewer or septic system and consisting of a water-flushed bowl with a seat, as well as a device that elicites the water-flushing action. Used for the process and disposal of human waste.',
      }),
    toiletException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Toilet exception.' }),
    tv: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'TV. A television is available in the guestroom.' }),
    tvCasting: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "TV casting. A television equipped with a device through which the video entertainment accessed on a personal computer, phone or tablet can be wirelessly delivered to and viewed on the guestroom's television.",
      }),
    tvCastingException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'TV exception.' }),
    tvException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'TV exception.' }),
    tvStreaming: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'TV streaming. Televisions that embed a range of web-based apps to allow for watching media from those apps.',
      }),
    tvStreamingException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'TV streaming exception.' }),
    universalPowerAdapters: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Universal power adapters. A power supply for electronic devices which plugs into a wall for the purpose of converting AC to a single DC voltage. Also know as AC adapter or charger.',
      }),
    universalPowerAdaptersException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Universal power adapters exception.' }),
    washer: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Washer. An electrical machine connected to a running water source designed to launder clothing.',
      }),
    washerException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Washer exception.' }),
  })
  .openapi({ description: 'Features in the living area.', required: [] })
  .openapi('LivingAreaFeatures')

const LivingAreaLayoutSchema = z
  .object({
    balcony: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Balcony. An outdoor platform attached to a building and surrounded by a short wall, fence or other safety railing. The balcony is accessed through a door in a guestroom or suite and is for use by the guest staying in that room. May or may not include seating or outdoor furniture. Is not located on the ground floor. Also lanai.',
      }),
    balconyException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Balcony exception.' }),
    livingAreaSqMeters: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          "Living area sq meters. The measurement in meters of the area of a guestroom's living space.",
      }),
    livingAreaSqMetersException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Living area sq meters exception.' }),
    loft: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Loft. A three-walled upper area accessed by stairs or a ladder that overlooks the lower area of a room.',
      }),
    loftException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Loft exception.' }),
    nonSmoking: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Non smoking. A guestroom in which the smoking of cigarettes, cigars and pipes is prohibited.',
      }),
    nonSmokingException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Non smoking exception.' }),
    patio: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Patio. A paved, outdoor area with seating attached to and accessed through a ground-floor guestroom for use by the occupants of the guestroom.',
      }),
    patioException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Patio exception.' }),
    stairs: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Stairs. There are steps leading from one level or story to another in the unit.',
      }),
    stairsException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Stairs exception.' }),
  })
  .openapi({ description: 'Information about the layout of the living area.', required: [] })
  .openapi('LivingAreaLayout')

const LivingAreaSleepingSchema = z
  .object({
    bedsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Beds count. The number of permanent beds present in a guestroom. Does not include rollaway beds, cribs or sofabeds.',
      }),
    bedsCountException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Beds count exception.' }),
    bunkBedsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Bunk beds count. The number of furniture pieces in which one framed mattress is fixed directly above another by means of a physical frame. This allows one person(s) to sleep in the bottom bunk and one person(s) to sleep in the top bunk. Also known as double decker bed.',
      }),
    bunkBedsCountException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Bunk beds count exception.' }),
    cribsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Cribs count. The number of small beds for an infant or toddler that the guestroom can obtain. The bed is surrounded by a high railing to prevent the child from falling or climbing out of the bed',
      }),
    cribsCountException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Cribs count exception.' }),
    doubleBedsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Double beds count. The number of medium beds measuring 53"W x 75"L (135cm x 191cm). Also known as full size bed.',
      }),
    doubleBedsCountException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Double beds count exception.' }),
    featherPillows: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Feather pillows. The option for guests to obtain bed pillows that are stuffed with the feathers and down of ducks or geese.',
      }),
    featherPillowsException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Feather pillows exception.' }),
    hypoallergenicBedding: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Hypoallergenic bedding. Bedding such as linens, pillows, mattress covers and/or mattresses that are made of materials known to be resistant to allergens such as mold, dust and dander.',
      }),
    hypoallergenicBeddingException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Hypoallergenic bedding exception.' }),
    kingBedsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'King beds count. The number of large beds measuring 76"W x 80"L (193cm x 102cm). Most often meant to accompany two people. Includes California king and super king.',
      }),
    kingBedsCountException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'King beds count exception.' }),
    memoryFoamPillows: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Memory foam pillows. The option for guests to obtain bed pillows that are stuffed with a man-made foam that responds to body heat by conforming to the body closely, and then recovers its shape when the pillow cools down.',
      }),
    memoryFoamPillowsException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Memory foam pillows exception.' }),
    otherBedsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Other beds count. The number of beds that are not standard mattress and boxspring setups such as Japanese tatami mats, trundle beds, air mattresses and cots.',
      }),
    otherBedsCountException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Other beds count exception.' }),
    queenBedsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Queen beds count. The number of medium-large beds measuring 60"W x 80"L (152cm x 102cm).',
      }),
    queenBedsCountException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Queen beds count exception.' }),
    rollAwayBedsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Roll away beds count. The number of mattresses on wheeled frames that can be folded in half and rolled away for easy storage that the guestroom can obtain upon request.',
      }),
    rollAwayBedsCountException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Roll away beds count exception.' }),
    singleOrTwinBedsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Single or twin count beds. The number of smaller beds measuring 38"W x 75"L (97cm x 191cm) that can accommodate one adult.',
      }),
    singleOrTwinBedsCountException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Single or twin beds count exception.' }),
    sofaBedsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Sofa beds count. The number of specially designed sofas that can be made to serve as a bed by lowering its hinged upholstered back to horizontal position or by pulling out a concealed mattress.',
      }),
    sofaBedsCountException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Sofa beds count exception.' }),
    syntheticPillows: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Synthetic pillows. The option for guests to obtain bed pillows stuffed with polyester material crafted to reproduce the feel of a pillow stuffed with down and feathers.',
      }),
    syntheticPillowsException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Synthetic pillows exception.' }),
  })
  .openapi({ description: 'Information about sleeping features in the living area.', required: [] })
  .openapi('LivingAreaSleeping')

const LivingAreaSchema = z
  .object({
    accessibility: LivingAreaAccessibilitySchema.exactOptional().openapi({
      description: 'Accessibility features of the living area.',
    }),
    eating: LivingAreaEatingSchema.exactOptional().openapi({
      description: 'Information about eating features in the living area.',
    }),
    features: LivingAreaFeaturesSchema.exactOptional().openapi({
      description: 'Features in the living area.',
    }),
    layout: LivingAreaLayoutSchema.exactOptional().openapi({
      description: 'Information about the layout of the living area.',
    }),
    sleeping: LivingAreaSleepingSchema.exactOptional().openapi({
      description: 'Information about sleeping features in the living area.',
    }),
  })
  .openapi({
    description:
      'An individual room, such as kitchen, bathroom, bedroom, within a bookable guest unit.',
    required: [],
  })
  .openapi('LivingArea')

const ViewsFromUnitSchema = z
  .object({
    beachView: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Beach view. A guestroom that features a window through which guests can see the beach.',
      }),
    beachViewException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Beach view exception.' }),
    cityView: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'City view. A guestroom that features a window through which guests can see the buildings, parks and/or streets of the city.',
      }),
    cityViewException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'City view exception.' }),
    gardenView: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Garden view. A guestroom that features a window through which guests can see a garden.',
      }),
    gardenViewException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Garden view exception.' }),
    lakeView: z.boolean().exactOptional().openapi({ description: 'Lake view.' }),
    lakeViewException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Lake view exception.' }),
    landmarkView: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Landmark view. A guestroom that features a window through which guests can see a landmark such as the countryside, a golf course, the forest, a park, a rain forst, a mountain or a slope.',
      }),
    landmarkViewException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Landmark view exception.' }),
    oceanView: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Ocean view. A guestroom that features a window through which guests can see the ocean.',
      }),
    oceanViewException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Ocean view exception.' }),
    poolView: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Pool view. A guestroom that features a window through which guests can see the hotel's swimming pool.",
      }),
    poolViewException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Pool view exception.' }),
    valleyView: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Valley view. A guestroom that features a window through which guests can see over a valley.',
      }),
    valleyViewException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Valley view exception.' }),
  })
  .openapi({ description: 'Views available from the guest unit itself.', required: [] })
  .openapi('ViewsFromUnit')

const GuestUnitFeaturesSchema = z
  .object({
    bungalowOrVilla: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Bungalow or villa. An independent structure that is part of a hotel or resort that is rented to one party for a vacation stay. The hotel or resort may be completely comprised of bungalows or villas, or they may be one of several guestroom options. Guests in the bungalows or villas most often have the same, if not more, amenities and services offered to guests in other guestroom types.',
      }),
    bungalowOrVillaException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Bungalow or villa exception.' }),
    connectingUnitAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Connecting unit available. A guestroom type that features access to an adjacent guestroom for the purpose of booking both rooms. Most often used by families who need more than one room to accommodate the number of people in their group.',
      }),
    connectingUnitAvailableException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Connecting unit available exception.' }),
    executiveFloor: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Executive floor. A floor of the hotel where the guestrooms are only bookable by members of the hotel's frequent guest membership program. Benefits of this room class include access to a designated lounge which may or may not feature free breakfast, cocktails or other perks specific to members of the program.",
      }),
    executiveFloorException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Executive floor exception.' }),
    maxAdultOccupantsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Max adult occupants count. The total number of adult guests allowed to stay overnight in the guestroom.',
      }),
    maxAdultOccupantsCountException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Max adult occupants count exception.' }),
    maxChildOccupantsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Max child occupants count. The total number of children allowed to stay overnight in the room.',
      }),
    maxChildOccupantsCountException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Max child occupants count exception.' }),
    maxOccupantsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Max occupants count. The total number of guests allowed to stay overnight in the guestroom.',
      }),
    maxOccupantsCountException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Max occupants count exception.' }),
    privateHome: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Private home. A privately owned home (house, townhouse, apartment, cabin, bungalow etc) that may or not serve as the owner's residence, but is rented out in its entirety or by the room(s) to paying guest(s) for vacation stays. Not for lease-based, long-term residency.",
      }),
    privateHomeException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Private home exception.' }),
    suite: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Suite. A guestroom category that implies both a bedroom area and a separate living area. There may or may not be full walls and doors separating the two areas, but regardless, they are very distinct. Does not mean a couch or chair in a bedroom.',
      }),
    suiteException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Suite exception.' }),
    tier: z
      .enum(['UNIT_TIER_UNSPECIFIED', 'STANDARD_UNIT', 'DELUXE_UNIT'])
      .exactOptional()
      .openapi({
        description:
          'Tier. Classification of the unit based on available features/amenities. A non-standard tier is only permitted if at least one other unit type falls under the standard tier.',
      }),
    tierException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Tier exception.' }),
    totalLivingAreas: LivingAreaSchema.exactOptional().openapi({
      description: 'Features available in the living areas in the guest unit.',
    }),
    views: ViewsFromUnitSchema.exactOptional().openapi({
      description: 'Views available from the guest unit itself.',
    }),
  })
  .openapi({ description: 'Features and available amenities in the guest unit.', required: [] })
  .openapi('GuestUnitFeatures')

const GuestUnitTypeSchema = z
  .object({
    codes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. Unit or room code identifiers for a single GuestUnitType. Each code must be unique within a Lodging instance.',
      }),
    features: GuestUnitFeaturesSchema.exactOptional().openapi({
      description: 'Features and available amenities of the GuestUnitType.',
    }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Short, English label or name of the GuestUnitType. Target <50 chars.',
      }),
  })
  .openapi({
    description: 'A specific type of unit primarily defined by its features.',
    required: [],
  })
  .openapi('GuestUnitType')

const IncreasedFoodSafetySchema = z
  .object({
    diningAreasAdditionalSanitation: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Additional sanitation in dining areas.' }),
    diningAreasAdditionalSanitationException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Dining areas additional sanitation exception.' }),
    disposableFlatware: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Disposable flatware.' }),
    disposableFlatwareException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Disposable flatware exception.' }),
    foodPreparationAndServingAdditionalSafety: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Additional safety measures during food prep and serving.' }),
    foodPreparationAndServingAdditionalSafetyException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Food preparation and serving additional safety exception.' }),
    individualPackagedMeals: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Individually-packaged meals.' }),
    individualPackagedMealsException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Individual packaged meals exception.' }),
    singleUseFoodMenus: z.boolean().exactOptional().openapi({ description: 'Single-use menus.' }),
    singleUseFoodMenusException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Single use food menus exception.' }),
  })
  .openapi({
    description: 'Increased food safety measures implemented by the hotel during COVID-19.',
    required: [],
  })
  .openapi('IncreasedFoodSafety')

const MinimizedContactSchema = z
  .object({
    contactlessCheckinCheckout: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'No-contact check-in and check-out.' }),
    contactlessCheckinCheckoutException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Contactless check-in check-out exception.' }),
    digitalGuestRoomKeys: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Keyless mobile entry to guest rooms.' }),
    digitalGuestRoomKeysException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Digital guest room keys exception.' }),
    housekeepingScheduledRequestOnly: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Housekeeping scheduled by request only.' }),
    housekeepingScheduledRequestOnlyException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Housekeeping scheduled request only exception.' }),
    noHighTouchItemsCommonAreas: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'High-touch items, such as magazines, removed from common areas.' }),
    noHighTouchItemsCommonAreasException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'No high touch items common areas exception.' }),
    noHighTouchItemsGuestRooms: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'High-touch items, such as decorative pillows, removed from guest rooms.',
      }),
    noHighTouchItemsGuestRoomsException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'No high touch items guest rooms exception.' }),
    plasticKeycardsDisinfected: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Plastic key cards are disinfected or discarded.' }),
    plasticKeycardsDisinfectedException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Plastic keycards disinfected exception.' }),
    roomBookingsBuffer: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Buffer maintained between room bookings.' }),
    roomBookingsBufferException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Room bookings buffer exception.' }),
  })
  .openapi({
    description: 'Minimized contact measures implemented by the hotel during COVID-19.',
    required: [],
  })
  .openapi('MinimizedContact')

const PersonalProtectionSchema = z
  .object({
    commonAreasOfferSanitizingItems: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Hand-sanitizer and/or sanitizing wipes are offered in common areas.',
      }),
    commonAreasOfferSanitizingItemsException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Common areas offer sanitizing items exception.' }),
    faceMaskRequired: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Masks required on the property.' }),
    faceMaskRequiredException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Face mask required exception.' }),
    guestRoomHygieneKitsAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'In-room hygiene kits with masks, hand sanitizer, and/or antibacterial wipes.',
      }),
    guestRoomHygieneKitsAvailableException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Guest room hygiene kits available exception.' }),
    protectiveEquipmentAvailable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Masks and/or gloves available for guests.' }),
    protectiveEquipmentAvailableException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Protective equipment available exception.' }),
  })
  .openapi({
    description: 'Personal protection measures implemented by the hotel during COVID-19.',
    required: [],
  })
  .openapi('PersonalProtection')

const PhysicalDistancingSchema = z
  .object({
    commonAreasPhysicalDistancingArranged: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Common areas arranged to maintain physical distancing.' }),
    commonAreasPhysicalDistancingArrangedException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Common areas physical distancing arranged exception.' }),
    physicalDistancingRequired: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Physical distancing required.' }),
    physicalDistancingRequiredException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Physical distancing required exception.' }),
    safetyDividers: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Safety dividers at front desk and other locations.' }),
    safetyDividersException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Safety dividers exception.' }),
    sharedAreasLimitedOccupancy: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Guest occupancy limited within shared facilities.' }),
    sharedAreasLimitedOccupancyException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Shared areas limited occupancy exception.' }),
    wellnessAreasHavePrivateSpaces: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Private spaces designated in spa and wellness areas.' }),
    wellnessAreasHavePrivateSpacesException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Wellness areas have private spaces exception.' }),
  })
  .openapi({
    description: 'Physical distancing measures implemented by the hotel during COVID-19.',
    required: [],
  })
  .openapi('PhysicalDistancing')

const HealthAndSafetySchema = z
  .object({
    enhancedCleaning: EnhancedCleaningSchema.exactOptional().openapi({
      description: 'Enhanced cleaning measures implemented by the hotel during COVID-19.',
    }),
    increasedFoodSafety: IncreasedFoodSafetySchema.exactOptional().openapi({
      description: 'Increased food safety measures implemented by the hotel during COVID-19.',
    }),
    minimizedContact: MinimizedContactSchema.exactOptional().openapi({
      description: 'Minimized contact measures implemented by the hotel during COVID-19.',
    }),
    personalProtection: PersonalProtectionSchema.exactOptional().openapi({
      description: 'Personal protection measures implemented by the hotel during COVID-19.',
    }),
    physicalDistancing: PhysicalDistancingSchema.exactOptional().openapi({
      description: 'Physical distancing measures implemented by the hotel during COVID-19.',
    }),
  })
  .openapi({
    description: 'Health and safety measures implemented by the hotel during COVID-19.',
    required: [],
  })
  .openapi('HealthAndSafety')

const HousekeepingSchema = z
  .object({
    dailyHousekeeping: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Daily housekeeping. Guest units are cleaned by hotel staff daily during guest's stay.",
      }),
    dailyHousekeepingException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Daily housekeeping exception.' }),
    housekeepingAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Housekeeping available. Guest units are cleaned by hotel staff during guest's stay. Schedule may vary from daily, weekly, or specific days of the week.",
      }),
    housekeepingAvailableException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Housekeeping available exception.' }),
    turndownService: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Turndown service. Hotel staff enters guest units to prepare the bed for sleep use. May or may not include some light housekeeping. May or may not include an evening snack or candy. Also known as evening service.',
      }),
    turndownServiceException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Turndown service exception.' }),
  })
  .openapi({
    description:
      'Conveniences provided in guest units to facilitate an easier, more comfortable stay.',
    required: [],
  })
  .openapi('Housekeeping')

const LodgingMetadataSchema = z
  .object({
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The latest time at which the Lodging data is asserted to be true in the real world. This is not necessarily the time at which the request is made.',
      }),
  })
  .openapi({ description: 'Metadata for the Lodging.', required: [] })
  .openapi('LodgingMetadata')

const ParkingSchema = z
  .object({
    electricCarChargingStations: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Electric car charging stations. Electric power stations, usually located outdoors, into which guests plug their electric cars to receive a charge.',
      }),
    electricCarChargingStationsException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Electric car charging stations exception.' }),
    freeParking: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Free parking. The hotel allows the cars of guests to be parked for free. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. Parking may be performed by the guest or by hotel staff. Free parking must be available to all guests (limited conditions does not apply).',
      }),
    freeParkingException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Free parking exception.' }),
    freeSelfParking: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Free self parking. Guests park their own cars for free. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply.',
      }),
    freeSelfParkingException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Free self parking exception.' }),
    freeValetParking: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Free valet parking. Hotel staff member parks the cars of guests. Parking with this service is free.',
      }),
    freeValetParkingException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Free valet parking exception.' }),
    parkingAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Parking available. The hotel allows the cars of guests to be parked. Can be free or for a fee. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. Parking may be performed by the guest or by hotel staff.',
      }),
    parkingAvailableException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Parking available exception.' }),
    selfParkingAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Self parking available. Guests park their own cars. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. Can be free or for a fee.',
      }),
    selfParkingAvailableException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Self parking available exception.' }),
    valetParkingAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Valet parking available. Hotel staff member parks the cars of guests. Parking with this service can be free or for a fee.',
      }),
    valetParkingAvailableException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Valet parking available exception.' }),
  })
  .openapi({ description: 'Parking options at the property.', required: [] })
  .openapi('Parking')

const PetsSchema = z
  .object({
    catsAllowed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Cats allowed. Domesticated felines are permitted at the property and allowed to stay in the guest room of their owner. May or may not require a fee.',
      }),
    catsAllowedException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Cats allowed exception.' }),
    dogsAllowed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Dogs allowed. Domesticated canines are permitted at the property and allowed to stay in the guest room of their owner. May or may not require a fee.',
      }),
    dogsAllowedException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Dogs allowed exception.' }),
    petsAllowed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Pets allowed. Household animals are allowed at the property and in the specific guest room of their owner. May or may not include dogs, cats, reptiles and/or fish. May or may not require a fee. Service animals are not considered to be pets, so not governed by this policy.',
      }),
    petsAllowedException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Pets allowed exception.' }),
    petsAllowedFree: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Pets allowed free. Household animals are allowed at the property and in the specific guest room of their owner for free. May or may not include dogs, cats, reptiles, and/or fish.',
      }),
    petsAllowedFreeException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Pets allowed free exception.' }),
  })
  .openapi({ description: 'Policies regarding guest-owned animals.', required: [] })
  .openapi('Pets')

const PaymentOptionsSchema = z
  .object({
    cash: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Cash. The hotel accepts payment by paper/coin currency.' }),
    cashException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Cash exception.' }),
    cheque: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Cheque. The hotel accepts a printed document issued by the guest's bank in the guest's name as a form of payment.",
      }),
    chequeException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Cheque exception.' }),
    creditCard: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Credit card. The hotel accepts payment by a card issued by a bank or credit card company. Also known as charge card, debit card, bank card, or charge plate.',
      }),
    creditCardException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Credit card exception.' }),
    debitCard: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Debit card. The hotel accepts a bank-issued card that immediately deducts the charged funds from the guest's bank account upon processing.",
      }),
    debitCardException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Debit card exception.' }),
    mobileNfc: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Mobile nfc. The hotel has the compatible computer hardware terminal that reads and charges a payment app on the guest's smartphone without requiring the two devices to make physical contact. Also known as Apple Pay, Google Pay, Samsung Pay.",
      }),
    mobileNfcException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Mobile nfc exception.' }),
  })
  .openapi({ description: 'Forms of payment accepted at the property.', required: [] })
  .openapi('PaymentOptions')

const PoliciesSchema = z
  .object({
    allInclusiveAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'All inclusive available. The hotel offers a rate option that includes the cost of the room, meals, activities, and other amenities that might otherwise be charged separately.',
      }),
    allInclusiveAvailableException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'All inclusive available exception.' }),
    allInclusiveOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'All inclusive only. The only rate option offered by the hotel is a rate that includes the cost of the room, meals, activities and other amenities that might otherwise be charged separately.',
      }),
    allInclusiveOnlyException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'All inclusive only exception.' }),
    checkinTime: TimeOfDaySchema.exactOptional().openapi({
      description:
        'Check-in time. The time of the day at which the hotel begins providing guests access to their unit at the beginning of their stay.',
    }),
    checkinTimeException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Check-in time exception.' }),
    checkoutTime: TimeOfDaySchema.exactOptional().openapi({
      description:
        "Check-out time. The time of the day on the last day of a guest's reserved stay at which the guest must vacate their room and settle their bill. Some hotels may offer late or early check out for a fee.",
    }),
    checkoutTimeException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Check-out time exception.' }),
    kidsStayFree: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Kids stay free. The children of guests are allowed to stay in the room/suite of a parent or adult without an additional fee. The policy may or may not stipulate a limit of the child's age or the overall number of children allowed.",
      }),
    kidsStayFreeException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Kids stay free exception.' }),
    maxChildAge: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Max child age. The hotel allows children up to a certain age to stay in the room/suite of a parent or adult without an additional fee.',
      }),
    maxChildAgeException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Max child age exception.' }),
    maxKidsStayFreeCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Max kids stay free count. The hotel allows a specific, defined number of children to stay in the room/suite of a parent or adult without an additional fee.',
      }),
    maxKidsStayFreeCountException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Max kids stay free count exception.' }),
    paymentOptions: PaymentOptionsSchema.exactOptional().openapi({
      description: 'Forms of payment accepted at the property.',
    }),
    smokeFreeProperty: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Smoke free property. Smoking is not allowed inside the building, on balconies, or in outside spaces. Hotels that offer a designated area for guests to smoke are not considered smoke-free properties.',
      }),
    smokeFreePropertyException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Smoke free property exception.' }),
  })
  .openapi({ description: 'Property rules that impact guests.', required: [] })
  .openapi('Policies')

const PoolsSchema = z
  .object({
    adultPool: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Adult pool. A pool restricted for use by adults only. Can be indoors or outdoors.',
      }),
    adultPoolException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Adult pool exception.' }),
    hotTub: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Hot tub. A man-made pool containing bubbling water maintained at a higher temperature and circulated by aerating jets for the purpose of soaking, relaxation and hydrotherapy. Can be indoors or outdoors. Not used for active swimming. Also known as Jacuzzi. Hot tub must be in a common area where all guests can access it. Does not apply to room-specific hot tubs that are only accessible to guest occupying that room.',
      }),
    hotTubException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Hot tub exception.' }),
    indoorPool: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indoor pool. A pool located inside the hotel and available for guests to use for swimming and/or soaking. Use may or may not be restricted to adults and/or children.',
      }),
    indoorPoolException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Indoor pool exception.' }),
    indoorPoolsCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Indoor pools count. The sum of all indoor pools at the hotel.' }),
    indoorPoolsCountException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Indoor pools count exception.' }),
    lazyRiver: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Lazy river. A man-made pool or several interconnected recreational pools built to mimic the shape and current of a winding river where guests float in the water on inflated rubber tubes. Can be indoors or outdoors.',
      }),
    lazyRiverException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Lazy river exception.' }),
    lifeguard: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Lifeguard. A trained member of the hotel staff stationed by the hotel's indoor or outdoor swimming area and responsible for the safety of swimming guests.",
      }),
    lifeguardException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Lifeguard exception.' }),
    outdoorPool: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Outdoor pool. A pool located outside on the grounds of the hotel and available for guests to use for swimming, soaking or recreation. Use may or may not be restricted to adults and/or children.',
      }),
    outdoorPoolException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Outdoor pool exception.' }),
    outdoorPoolsCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Outdoor pools count. The sum of all outdoor pools at the hotel.' }),
    outdoorPoolsCountException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Outdoor pools count exception.' }),
    pool: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Pool. The presence of a pool, either indoors or outdoors, for guests to use for swimming and/or soaking. Use may or may not be restricted to adults and/or children.',
      }),
    poolException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Pool exception.' }),
    poolsCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Pools count. The sum of all pools at the hotel.' }),
    poolsCountException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Pools count exception.' }),
    wadingPool: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Wading pool. A shallow pool designed for small children to play in. Can be indoors or outdoors. Also known as kiddie pool.',
      }),
    wadingPoolException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Wading pool exception.' }),
    waterPark: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Water park. An aquatic recreation area with a large pool or series of pools that has features such as a water slide or tube, wavepool, fountains, rope swings, and/or obstacle course. Can be indoors or outdoors. Also known as adventure pool.',
      }),
    waterParkException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Water park exception.' }),
    waterslide: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Waterslide. A continuously wetted chute positioned by an indoor or outdoor pool which people slide down into the water.',
      }),
    waterslideException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Waterslide exception.' }),
    wavePool: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Wave pool. A large indoor or outdoor pool with a machine that produces water currents to mimic the ocean's crests.",
      }),
    wavePoolException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Wave pool exception.' }),
  })
  .openapi({
    description: 'Swimming pool or recreational water facilities available at the hotel.',
    required: [],
  })
  .openapi('Pools')

const PropertySchema = z
  .object({
    builtYear: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Built year. The year that construction of the property was completed.',
      }),
    builtYearException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Built year exception.' }),
    floorsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Floors count. The number of stories the building has from the ground floor to the top floor that are accessible to guests.',
      }),
    floorsCountException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Floors count exception.' }),
    lastRenovatedYear: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Last renovated year. The year when the most recent renovation of the property was completed. Renovation may include all or any combination of the following: the units, the public spaces, the exterior, or the interior.',
      }),
    lastRenovatedYearException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Last renovated year exception.' }),
    roomsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Rooms count. The total number of rooms and suites bookable by guests for an overnight stay. Does not include event space, public spaces, conference rooms, fitness rooms, business centers, spa, salon, restaurants/bars, or shops.',
      }),
    roomsCountException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Rooms count exception.' }),
  })
  .openapi({
    description:
      "General factual information about the property's physical structure and important dates.",
    required: [],
  })
  .openapi('Property')

const LanguagesSpokenSchema = z
  .object({
    arabicSpoken: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Arabic. At least one staff member speaks Arabic.' }),
    arabicSpokenException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Arabic exception.' }),
    cantoneseSpoken: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Cantonese. At least one staff member speaks Cantonese.' }),
    cantoneseSpokenException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Cantonese exception.' }),
    dutchSpoken: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Dutch. At least one staff member speaks Dutch.' }),
    dutchSpokenException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Dutch exception.' }),
    englishSpoken: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'English. At least one staff member speaks English.' }),
    englishSpokenException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'English exception.' }),
    filipinoSpoken: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Filipino. At least one staff member speaks Filipino.' }),
    filipinoSpokenException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Filipino exception.' }),
    frenchSpoken: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'French. At least one staff member speaks French.' }),
    frenchSpokenException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'French exception.' }),
    germanSpoken: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'German. At least one staff member speaks German.' }),
    germanSpokenException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'German exception.' }),
    hindiSpoken: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Hindi. At least one staff member speaks Hindi.' }),
    hindiSpokenException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Hindi exception.' }),
    indonesianSpoken: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indonesian. At least one staff member speaks Indonesian.' }),
    indonesianSpokenException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Indonesian exception.' }),
    italianSpoken: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Italian. At least one staff member speaks Italian.' }),
    italianSpokenException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Italian exception.' }),
    japaneseSpoken: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Japanese. At least one staff member speaks Japanese.' }),
    japaneseSpokenException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Japanese exception.' }),
    koreanSpoken: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Korean. At least one staff member speaks Korean.' }),
    koreanSpokenException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Korean exception.' }),
    mandarinSpoken: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Mandarin. At least one staff member speaks Mandarin.' }),
    mandarinSpokenException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Mandarin exception.' }),
    portugueseSpoken: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Portuguese. At least one staff member speaks Portuguese.' }),
    portugueseSpokenException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Portuguese exception.' }),
    russianSpoken: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Russian. At least one staff member speaks Russian.' }),
    russianSpokenException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Russian exception.' }),
    spanishSpoken: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Spanish. At least one staff member speaks Spanish.' }),
    spanishSpokenException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Spanish exception.' }),
    vietnameseSpoken: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Vietnamese. At least one staff member speaks Vietnamese.' }),
    vietnameseSpokenException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Vietnamese exception.' }),
  })
  .openapi({ description: 'Languages spoken by at least one staff member.', required: [] })
  .openapi('LanguagesSpoken')

const ServicesSchema = z
  .object({
    baggageStorage: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Baggage storage. A provision for guests to leave their bags at the hotel when they arrive for their stay before the official check-in time. May or may not apply for guests who wish to leave their bags after check-out and before departing the locale. Also known as bag dropoff.',
      }),
    baggageStorageException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Baggage storage exception.' }),
    concierge: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Concierge. Hotel staff member(s) responsible for facilitating an easy, comfortable stay through making reservations for meals, sourcing theater tickets, arranging tours, finding a doctor, making recommendations, and answering questions.',
      }),
    conciergeException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Concierge exception.' }),
    convenienceStore: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Convenience store. A shop at the hotel primarily selling snacks, drinks, non-prescription medicines, health and beauty aids, magazines and newspapers.',
      }),
    convenienceStoreException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Convenience store exception.' }),
    currencyExchange: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Currency exchange. A staff member or automated machine tasked with the transaction of providing the native currency of the hotel's locale in exchange for the foreign currency provided by a guest.",
      }),
    currencyExchangeException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Currency exchange exception.' }),
    elevator: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Elevator. A passenger elevator that transports guests from one story to another. Also known as lift.',
      }),
    elevatorException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Elevator exception.' }),
    frontDesk: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Front desk. A counter or desk in the lobby or the immediate interior of the hotel where a member of the staff greets guests and processes the information related to their stay (including check-in and check-out). May or may not be manned and open 24/7.',
      }),
    frontDeskException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Front desk exception.' }),
    fullServiceLaundry: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Full service laundry. Laundry and dry cleaning facilitated and handled by the hotel on behalf of the guest. Does not include the provision for guests to do their own laundry in on-site machines.',
      }),
    fullServiceLaundryException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Full service laundry exception.' }),
    giftShop: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Gift shop. An on-site store primarily selling souvenirs, mementos and other gift items. May or may not also sell sundries, magazines and newspapers, clothing, or snacks.',
      }),
    giftShopException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Gift shop exception.' }),
    languagesSpoken: LanguagesSpokenSchema.exactOptional().openapi({
      description: 'Languages spoken by at least one staff member.',
    }),
    selfServiceLaundry: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Self service laundry. On-site clothes washers and dryers accessible to guests for the purpose of washing and drying their own clothes. May or may not require payment to use the machines.',
      }),
    selfServiceLaundryException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Self service laundry exception.' }),
    socialHour: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Social hour. A reception with complimentary soft drinks, tea, coffee, wine and/or cocktails in the afternoon or evening. Can be hosted by hotel staff or guests may serve themselves. Also known as wine hour. The availability of coffee/tea in the lobby throughout the day does not constitute a social or wine hour.',
      }),
    socialHourException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Social hour exception.' }),
    twentyFourHourFrontDesk: z
      .boolean()
      .exactOptional()
      .openapi({ description: '24hr front desk. Front desk is staffed 24 hours a day.' }),
    twentyFourHourFrontDeskException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: '24hr front desk exception.' }),
    wakeUpCalls: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Wake up calls. By direction of the guest, a hotel staff member will phone the guest unit at the requested hour. Also known as morning call.',
      }),
    wakeUpCallsException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Wake up calls exception.' }),
  })
  .openapi({
    description:
      'Conveniences or help provided by the property to facilitate an easier, more comfortable stay.',
    required: [],
  })
  .openapi('Services')

const TransportationSchema = z
  .object({
    airportShuttle: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Airport shuttle. The hotel provides guests with a chauffeured van or bus to and from the airport. Can be free or for a fee. Guests may share the vehicle with other guests unknown to them. Applies if the hotel has a third-party shuttle service (office/desk etc.) within the hotel. As long as hotel provides this service, it doesn't matter if it's directly with them or a third party they work with. Does not apply if guest has to coordinate with an entity outside/other than the hotel.",
      }),
    airportShuttleException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Airport shuttle exception.' }),
    carRentalOnProperty: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Car rental on property. A branch of a rental car company with a processing desk in the hotel. Available cars for rent may be awaiting at the hotel or in a nearby lot.',
      }),
    carRentalOnPropertyException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Car rental on property exception.' }),
    freeAirportShuttle: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Free airport shuttle. Airport shuttle is free to guests. Must be free to all guests without any conditions.',
      }),
    freeAirportShuttleException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Free airport shuttle exception.' }),
    freePrivateCarService: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Free private car service. Private chauffeured car service is free to guests.',
      }),
    freePrivateCarServiceException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Free private car service exception.' }),
    localShuttle: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Local shuttle. A car, van or bus provided by the hotel to transport guests to destinations within a specified range of distance around the hotel. Usually shopping and/or convention centers, downtown districts, or beaches. Can be free or for a fee.',
      }),
    localShuttleException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Local shuttle exception.' }),
    privateCarService: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Private car service. Hotel provides a private chauffeured car to transport guests to destinations. Passengers in the car are either alone or are known to one another and have requested the car together. Service can be free or for a fee and travel distance is usually limited to a specific range. Not a taxi.',
      }),
    privateCarServiceException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Private car service exception.' }),
    transfer: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Transfer. Hotel provides a shuttle service or car service to take guests to and from the nearest airport or train station. Can be free or for a fee. Guests may share the vehicle with other guests unknown to them.',
      }),
    transferException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Transfer exception.' }),
  })
  .openapi({
    description: 'Vehicles or vehicular services facilitated or owned by the property.',
    required: [],
  })
  .openapi('Transportation')

const WellnessSchema = z
  .object({
    doctorOnCall: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Doctor on call. The hotel has a contract with a medical professional who provides services to hotel guests should they fall ill during their stay. The doctor may or may not have an on-site office or be at the hotel at all times.',
      }),
    doctorOnCallException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Doctor on call exception.' }),
    ellipticalMachine: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Elliptical machine. An electric, stationary fitness machine with pedals that simulates climbing, walking or running and provides a user-controlled range of speeds and tensions. May not have arm-controlled levers to work out the upper body as well. Commonly found in a gym, fitness room, health center, or health club.',
      }),
    ellipticalMachineException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Elliptical machine exception.' }),
    fitnessCenter: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Fitness center. A room or building at the hotel containing equipment to promote physical activity, such as treadmills, elliptical machines, stationary bikes, weight machines, free weights, and/or stretching mats. Use of the fitness center can be free or for a fee. May or may not be staffed. May or may not offer instructor-led classes in various styles of physical conditioning. May or may not be open 24/7. May or may not include locker rooms and showers. Also known as health club, gym, fitness room, health center.',
      }),
    fitnessCenterException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Fitness center exception.' }),
    freeFitnessCenter: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Free fitness center. Guests may use the fitness center for free.' }),
    freeFitnessCenterException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Free fitness center exception.' }),
    freeWeights: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Free weights. Individual handheld fitness equipment of varied weights used for upper body strength training or bodybuilding. Also known as barbells, dumbbells, or kettlebells. Often stored on a rack with the weights arranged from light to heavy. Commonly found in a gym, fitness room, health center, or health club.',
      }),
    freeWeightsException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Free weights exception.' }),
    massage: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Massage. A service provided by a trained massage therapist involving the physical manipulation of a guest's muscles in order to achieve relaxation or pain relief.",
      }),
    massageException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Massage exception.' }),
    salon: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Salon. A room at the hotel where professionals provide hair styling services such as shampooing, blow drying, hair dos, hair cutting and hair coloring. Also known as hairdresser or beauty salon.',
      }),
    salonException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Salon exception.' }),
    sauna: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Sauna. A wood-paneled room heated to a high temperature where guests sit on built-in wood benches for the purpose of perspiring and relaxing their muscles. Can be dry or slightly wet heat. Not a steam room.',
      }),
    saunaException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Sauna exception.' }),
    spa: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Spa. A designated area, room or building at the hotel offering health and beauty treatment through such means as steam baths, exercise equipment, and massage. May also offer facials, nail care, and hair care. Services are usually available by appointment and for an additional fee. Does not apply if hotel only offers a steam room; must offer other beauty and/or health treatments as well.',
      }),
    spaException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Spa exception.' }),
    treadmill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Treadmill. An electric stationary fitness machine that simulates a moving path to promote walking or running within a range of user-controlled speeds and inclines. Also known as running machine. Commonly found in a gym, fitness room, health center, or health club.',
      }),
    treadmillException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Treadmill exception.' }),
    weightMachine: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Weight machine. Non-electronic fitness equipment designed for the user to target the exertion of different muscles. Usually incorporates a padded seat, a stack of flat weights and various bars and pulleys. May be designed for toning a specific part of the body or may involve different user-controlled settings, hardware and pulleys so as to provide an overall workout in one machine. Commonly found in a gym, fitness center, fitness room, or health club.',
      }),
    weightMachineException: z
      .enum([
        'EXCEPTION_UNSPECIFIED',
        'UNDER_CONSTRUCTION',
        'DEPENDENT_ON_SEASON',
        'DEPENDENT_ON_DAY_OF_WEEK',
      ])
      .exactOptional()
      .openapi({ description: 'Weight machine exception.' }),
  })
  .openapi({
    description:
      'Guest facilities at the property to promote or maintain health, beauty, and fitness.',
    required: [],
  })
  .openapi('Wellness')

const LodgingSchema = z
  .object({
    accessibility: AccessibilitySchema.exactOptional().openapi({
      description:
        'Physical adaptations made to the property in consideration of varying levels of human physical ability.',
    }),
    activities: ActivitiesSchema.exactOptional().openapi({
      description: 'Amenities and features related to leisure and play.',
    }),
    allUnits: GuestUnitFeaturesSchema.exactOptional().openapi({
      description: 'All units on the property have at least these attributes.',
    }),
    business: BusinessSchema.exactOptional().openapi({
      description: 'Features of the property of specific interest to the business traveler.',
    }),
    commonLivingArea: LivingAreaSchema.exactOptional().openapi({
      description: 'Features of the shared living areas available in this Lodging.',
    }),
    connectivity: ConnectivitySchema.exactOptional().openapi({
      description:
        'The ways in which the property provides guests with the ability to access the internet.',
    }),
    families: FamiliesSchema.exactOptional().openapi({
      description: 'Services and amenities for families and young guests.',
    }),
    foodAndDrink: FoodAndDrinkSchema.exactOptional().openapi({
      description: 'Meals, snacks, and beverages available at the property.',
    }),
    guestUnits: z
      .array(GuestUnitTypeSchema)
      .exactOptional()
      .openapi({ description: 'Individual GuestUnitTypes that are available in this Lodging.' }),
    healthAndSafety: HealthAndSafetySchema.exactOptional().openapi({
      description: 'Health and safety measures implemented by the hotel during COVID-19.',
    }),
    housekeeping: HousekeepingSchema.exactOptional().openapi({
      description:
        'Conveniences provided in guest units to facilitate an easier, more comfortable stay.',
    }),
    metadata: LodgingMetadataSchema.exactOptional().openapi({
      description: 'Required. Metadata for the lodging.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}/lodging`',
      }),
    parking: ParkingSchema.exactOptional().openapi({
      description: 'Parking options at the property.',
    }),
    pets: PetsSchema.exactOptional().openapi({
      description: 'Policies regarding guest-owned animals.',
    }),
    policies: PoliciesSchema.exactOptional().openapi({
      description: 'Property rules that impact guests.',
    }),
    pools: PoolsSchema.exactOptional().openapi({
      description: 'Swimming pool or recreational water facilities available at the hotel.',
    }),
    property: PropertySchema.exactOptional().openapi({
      description:
        "General factual information about the property's physical structure and important dates.",
    }),
    services: ServicesSchema.exactOptional().openapi({
      description:
        'Conveniences or help provided by the property to facilitate an easier, more comfortable stay.',
    }),
    someUnits: GuestUnitFeaturesSchema.exactOptional().openapi({
      description: 'Some units on the property have as much as these attributes.',
    }),
    transportation: TransportationSchema.exactOptional().openapi({
      description: 'Vehicles or vehicular services facilitated or owned by the property.',
    }),
    wellness: WellnessSchema.exactOptional().openapi({
      description:
        'Guest facilities at the property to promote or maintain health, beauty, and fitness.',
    }),
  })
  .openapi({ description: 'Lodging of a location that provides accomodations.', required: [] })
  .openapi('Lodging')

const GetGoogleUpdatedLodgingResponseSchema = z
  .object({
    diffMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The fields in the Lodging that have been updated by Google. Repeated field items are not individually specified.',
      }),
    lodging: LodgingSchema.exactOptional().openapi({
      description: 'Required. The Google updated Lodging.',
    }),
  })
  .openapi({
    description: 'Response message for LodgingService.GetGoogleUpdatedLodging',
    required: [],
  })
  .openapi('GetGoogleUpdatedLodgingResponse')

const GoogleLocationSchema = z
  .object({
    location: LocationSchema.exactOptional().openapi({
      description:
        'The sparsely populated Location information. This field can be re-used in CreateLocation if it is not currently claimed by a user.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of this GoogleLocation, in the format `googleLocations/{googleLocationId}`.',
      }),
    requestAdminRightsUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL that will redirect the user to the request admin rights UI. This field is only present if the location has already been claimed by any user, including the current user.',
      }),
  })
  .openapi({
    description:
      'Represents a Location that is present on Google. This can be a location that has been claimed by the user, someone else, or could be unclaimed.',
    required: [],
  })
  .openapi('GoogleLocation')

const GoogleUpdatedLocationSchema = z
  .object({
    diffMask: z
      .string()
      .exactOptional()
      .openapi({ description: 'The fields that Google updated.' }),
    location: LocationSchema.exactOptional().openapi({
      description: 'The Google-updated version of this location.',
    }),
  })
  .openapi({ description: 'Represents a location that was modified by Google.', required: [] })
  .openapi('GoogleUpdatedLocation')

const InsuranceNetworkSchema = z
  .object({
    networkId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The id of this insurance network generated by Google.' }),
    networkNames: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. A map of network display names in requested languages where the language is the key and localized display name is the value. The display name in English is set by default.',
        readOnly: true,
      }),
    payerNames: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. A map of payer display names in requested languages where the language is the key and localized display name is the value. The display name in English is set by default.',
        readOnly: true,
      }),
    state: z
      .enum([
        'NETWORK_STATE_UNSPECIFIED',
        'ACCEPTED',
        'PENDING_ADD',
        'PENDING_DELETE',
        'NOT_ACCEPTED',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The state of this insurance network.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A single insurance network. Next id: 5', required: [] })
  .openapi('InsuranceNetwork')

const HealthProviderAttributesSchema = z
  .object({
    insuranceNetworks: z
      .array(InsuranceNetworkSchema)
      .exactOptional()
      .openapi({
        description: 'Optional. A list of insurance networks accpected by this location.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}/healthProviderAttributes`',
      }),
  })
  .openapi({
    description: 'The Health provider attributes linked with this location.',
    required: [],
  })
  .openapi('HealthProviderAttributes')

const TargetLocationSchema = z
  .object({
    locationAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'The address of the location to which the user is invited.' }),
    locationName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the location to which the user is invited.' }),
  })
  .openapi({ description: 'Represents a target location for a pending invitation.', required: [] })
  .openapi('TargetLocation')

const InvitationSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The resource name for the invitation.' }),
    role: z
      .enum(['ADMIN_ROLE_UNSPECIFIED', 'OWNER', 'CO_OWNER', 'MANAGER', 'COMMUNITY_MANAGER'])
      .exactOptional()
      .openapi({ description: 'The invited role on the account.' }),
    targetAccount: AccountSchema.exactOptional().openapi({
      description: 'The sparsely populated account this invitation is for.',
    }),
    targetLocation: TargetLocationSchema.exactOptional().openapi({
      description: 'The target location this invitation is for.',
    }),
  })
  .openapi({ description: 'Output only. Represents a pending invitation.', required: [] })
  .openapi('Invitation')

const ListAccountAdminsResponseSchema = z
  .object({
    admins: z
      .array(AdminSchema)
      .exactOptional()
      .openapi({ description: 'A collection of Admin instances.' }),
  })
  .openapi({ description: 'Response message for AccessControl.ListAccountAdmins.', required: [] })
  .openapi('ListAccountAdminsResponse')

const ListAccountsResponseSchema = z
  .object({
    accounts: z
      .array(AccountSchema)
      .exactOptional()
      .openapi({
        description:
          'A collection of accounts to which the user has access. The personal account of the user doing the query will always be the first item of the result, unless it is filtered out.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the number of accounts exceeds the requested page size, this field is populated with a token to fetch the next page of accounts on a subsequent call to `accounts.list`. If there are no more accounts, this field is not present in the response.',
      }),
  })
  .openapi({ description: 'Response message for Accounts.ListAccounts.', required: [] })
  .openapi('ListAccountsResponse')

const ListAnswersResponseSchema = z
  .object({
    answers: z
      .array(AnswerSchema)
      .exactOptional()
      .openapi({ description: 'The requested answers.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the number of answers exceeds the requested max page size, this field is populated with a token to fetch the next page of answers on a subsequent call. If there are no more answers, this field is not present in the response.',
      }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The total number of answers posted for this question across all pages.',
      }),
  })
  .openapi({ description: 'Response message for QuestionsAndAnswers.ListAnswers', required: [] })
  .openapi('ListAnswersResponse')

const ListAttributeMetadataResponseSchema = z
  .object({
    attributes: z
      .array(AttributeMetadataSchema)
      .exactOptional()
      .openapi({ description: 'A collection of attribute metadata for the available attributes.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the number of attributes exceeded the requested page size, this field will be populated with a token to fetch the next page of attributes on a subsequent call to `attributes.list`. If there are no more attributes, this field will not be present in the response.',
      }),
  })
  .openapi({ description: 'Response message for Locations.ListAttributeMetadata.', required: [] })
  .openapi('ListAttributeMetadataResponse')

const ListBusinessCategoriesResponseSchema = z
  .object({
    categories: z
      .array(CategorySchema)
      .exactOptional()
      .openapi({
        description:
          "The categories. Categories are BASIC view. They don't contain any ServiceType information.",
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the number of categories exceeded the requested page size, this field will be populated with a token to fetch the next page of categories on a subsequent call to `ListBusinessCategories`.',
      }),
    totalCategoryCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of categories for the request parameters.' }),
  })
  .openapi({ required: [] })
  .openapi('ListBusinessCategoriesResponse')

const MediaItemDataRefSchema = z
  .object({
    resourceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique ID for this media item\'s binary data. Used to upload the photo data with [UpdateMedia] and when creating a new media item from those bytes with CreateMediaItem. Example of uploading bytes: `curl -X POST -T{path_to_file} "http://mybusiness.googleapis.com/upload/v1/media/{resource_name}?upload_type=media"` For CreateMediaItem calls, set this as the `MediaItem` `data_ref`.',
      }),
  })
  .openapi({
    description:
      'Reference to the photo binary data of a `MediaItem` uploaded through the Google My Business API. Create a data ref using StartUploadMediaItemData, and use this ref when uploading bytes to [UpdateMedia] and subsequently calling CreateMediaItem.',
    required: [],
  })
  .openapi('MediaItemDataRef')

const MediaInsightsSchema = z
  .object({
    viewCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The number of times the media item has been viewed.' }),
  })
  .openapi({ description: 'Insights and statistics for the media item.', required: [] })
  .openapi('MediaInsights')

const LocationAssociationSchema = z
  .object({
    category: z
      .enum([
        'CATEGORY_UNSPECIFIED',
        'COVER',
        'PROFILE',
        'LOGO',
        'EXTERIOR',
        'INTERIOR',
        'PRODUCT',
        'AT_WORK',
        'FOOD_AND_DRINK',
        'MENU',
        'COMMON_AREA',
        'ROOMS',
        'TEAMS',
        'ADDITIONAL',
      ])
      .exactOptional()
      .openapi({ description: 'The category that this location photo belongs to.' }),
    priceListItemId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of a price list item that this location photo is associated with.',
      }),
  })
  .openapi({ description: 'How the media item is associated with its location.', required: [] })
  .openapi('LocationAssociation')

const MediaItemSchema = z
  .object({
    attribution: AttributionSchema.exactOptional().openapi({
      description:
        'Output only. Attribution information for customer media items. You must display this attribution as provided to your users and must not delete or alter the attribution.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Creation time of this media item.' }),
    dataRef: MediaItemDataRefSchema.exactOptional().openapi({
      description:
        'Input only. A reference to media item binary data as obtained by the `StartUploadMediaItemData` method. When creating a media item, either sourceUrl or dataRef must be set.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Description for this media item. Descriptions cannot be modified through the Google My Business API, but can be set when creating a new media item that is not a cover photo.',
      }),
    dimensions: DimensionsSchema.exactOptional().openapi({
      description: 'Output only. The dimensions (width and height) in pixels.',
    }),
    googleUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Google-hosted URL for this media item. This URL is not static since it may change over time. For video this will be a preview image with an overlaid play icon.',
      }),
    insights: MediaInsightsSchema.exactOptional().openapi({
      description: 'Output only. Statistics for this media item.',
    }),
    locationAssociation: LocationAssociationSchema.exactOptional().openapi({
      description:
        'Required when calling `CreatePhoto`. Describes how this media item is connected to its location. Must be either a category (for example, EXTERIOR) or the ID of a price list item. This is required when adding new media to a location with `CreateMediaItem`. For other types of media, for example, photos on local posts, this will not be present.',
    }),
    mediaFormat: z
      .enum(['MEDIA_FORMAT_UNSPECIFIED', 'PHOTO', 'VIDEO'])
      .exactOptional()
      .openapi({
        description:
          'The format of this media item. Must be set when the media item is created, and is read-only on all other requests. Cannot be updated.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name for this media item. `accounts/{account_id}/locations/{location_id}/media/{media_key}`',
      }),
    sourceUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A publicly accessible URL where the media item can be retrieved from. When creating one of this or data_ref must be set to specify the source of the media item. If `source_url` was used when creating a media item, it will be populated with that source URL when the media item is retrieved. This field cannot be updated.',
      }),
    thumbnailUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Where provided, the URL of a thumbnail image for this media item.',
      }),
  })
  .openapi({ description: 'A single media item.', required: [] })
  .openapi('MediaItem')

const ListCustomerMediaItemsResponseSchema = z
  .object({
    mediaItems: z
      .array(MediaItemSchema)
      .exactOptional()
      .openapi({ description: 'The returned list of media items.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If there are more media items than the requested page size, then this field is populated with a token to fetch the next page of media items on a subsequent call to ListCustomerMediaItems.',
      }),
    totalMediaItemCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of media items for this location, irrespective of pagination. This number is approximate, particularly when there are multiple pages of results.',
      }),
  })
  .openapi({ description: 'Response message for Media.ListCustomerMediaItems.', required: [] })
  .openapi('ListCustomerMediaItemsResponse')

const ListInsuranceNetworksResponseSchema = z
  .object({
    networks: z
      .array(InsuranceNetworkSchema)
      .exactOptional()
      .openapi({ description: 'A list of insurance networks that are supported by Google.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If there are more insurance networks than the requested page size, then this field is populated with a token to fetch the next page of insurance networks on a subsequent call to ListInsuranceNetworks.',
      }),
  })
  .openapi({
    description: 'Response message for InsuranceNetworkService.ListInsuranceNetworks',
    required: [],
  })
  .openapi('ListInsuranceNetworksResponse')

const ListInvitationsResponseSchema = z
  .object({
    invitations: z
      .array(InvitationSchema)
      .exactOptional()
      .openapi({
        description:
          'A collection of location invitations that are pending for the account. The number of invitations listed here cannot exceed 1000.',
      }),
  })
  .openapi({ description: 'Response message for AccessControl.ListInvitations.', required: [] })
  .openapi('ListInvitationsResponse')

const TimeIntervalSchema = z
  .object({
    endDate: DateSchema.exactOptional().openapi({ description: 'The end date of this period.' }),
    endTime: TimeOfDaySchema.exactOptional().openapi({
      description: 'The end time of this period.',
    }),
    startDate: DateSchema.exactOptional().openapi({
      description: 'The start date of this period.',
    }),
    startTime: TimeOfDaySchema.exactOptional().openapi({
      description: 'The start time of this period.',
    }),
  })
  .openapi({
    description: 'An interval of time, inclusive. It must contain all fields to be valid.',
    required: [],
  })
  .openapi('TimeInterval')

const LocalPostEventSchema = z
  .object({
    schedule: TimeIntervalSchema.exactOptional().openapi({
      description: 'Event start and end date/time.',
    }),
    title: z.string().exactOptional().openapi({ description: 'Name of the event.' }),
  })
  .openapi({
    description: 'All the information pertaining to an event featured in a local post.',
    required: [],
  })
  .openapi('LocalPostEvent')

const LocalPostOfferSchema = z
  .object({
    couponCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Offer code that is usable in store or online.' }),
    redeemOnlineUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Online link to redeem offer.' }),
    termsConditions: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Offer terms and conditions.' }),
  })
  .openapi({ description: 'Specific fields for offer posts.', required: [] })
  .openapi('LocalPostOffer')

const LocalPostSchema = z
  .object({
    alertType: z
      .enum(['ALERT_TYPE_UNSPECIFIED', 'COVID_19'])
      .exactOptional()
      .openapi({
        description:
          'The type of alert the post is created for. This field is only applicable for posts of topic_type Alert, and behaves as a sub-type of Alerts.',
      }),
    callToAction: CallToActionSchema.exactOptional().openapi({
      description:
        'The URL that users are sent to when clicking through the promotion. Ignored for topic type `OFFER`.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Time of the creation of the post.' }),
    event: LocalPostEventSchema.exactOptional().openapi({
      description: 'Event information. Required for topic types `EVENT` and `OFFER`.',
    }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The language of the local post.' }),
    media: z
      .array(MediaItemSchema)
      .exactOptional()
      .openapi({
        description:
          'The media associated with the post. source_url is the only supported data field for a LocalPost MediaItem.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Google identifier for this local post in the form: `accounts/{account_id}/locations/{location_id}/localPosts/{local_post_id}`',
      }),
    offer: LocalPostOfferSchema.exactOptional().openapi({
      description:
        'Additional data for offer posts. This should only be set when the topic_type is OFFER.',
    }),
    searchUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The link to the local post in Google search. This link can be used to share the post via social media, email, text, etc.',
      }),
    state: z
      .enum(['LOCAL_POST_STATE_UNSPECIFIED', 'REJECTED', 'LIVE', 'PROCESSING'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The state of the post, indicating what part of its lifecycle it is in.',
      }),
    summary: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description/body of the local post.' }),
    topicType: z
      .enum(['LOCAL_POST_TOPIC_TYPE_UNSPECIFIED', 'STANDARD', 'EVENT', 'OFFER', 'ALERT'])
      .exactOptional()
      .openapi({
        description: 'Required. The topic type of the post: standard, event, offer, or alert.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time of the last modification of the post made by the user.',
      }),
  })
  .openapi({
    description:
      'Represents a [local post](https://support.google.com/business/answer/7662907) for a location.',
    required: [],
  })
  .openapi('LocalPost')

const ListLocalPostsResponseSchema = z
  .object({
    localPosts: z
      .array(LocalPostSchema)
      .exactOptional()
      .openapi({ description: 'The returned list of local posts.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If there are more local posts than the requested page size, then this field is populated with a token to fetch the next page of local posts on a subsequent call to `ListLocalPosts`.',
      }),
  })
  .openapi({ description: 'Response message for ListLocalPosts', required: [] })
  .openapi('ListLocalPostsResponse')

const ListLocationAdminsResponseSchema = z
  .object({
    admins: z
      .array(AdminSchema)
      .exactOptional()
      .openapi({ description: 'A collection of Admin instances.' }),
  })
  .openapi({ description: 'Response message for AccessControl.ListLocationAdmins.', required: [] })
  .openapi('ListLocationAdminsResponse')

const ListLocationsResponseSchema = z
  .object({
    locations: z.array(LocationSchema).exactOptional().openapi({ description: 'The locations.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the number of locations exceeded the requested page size, this field is populated with a token to fetch the next page of locations on a subsequent call to `ListLocations`. If there are no more locations, this field is not present in the response.',
      }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The approximate number of Locations in the list irrespective of pagination.',
      }),
  })
  .openapi({ description: 'Response message for Locations.ListLocations.', required: [] })
  .openapi('ListLocationsResponse')

const ListMediaItemsResponseSchema = z
  .object({
    mediaItems: z
      .array(MediaItemSchema)
      .exactOptional()
      .openapi({ description: 'The returned list of media items.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If there are more media items than the requested page size, then this field is populated with a token to fetch the next page of media items on a subsequent call to ListMediaItems.',
      }),
    totalMediaItemCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of media items for this location, irrespective of pagination.',
      }),
  })
  .openapi({ description: 'Response message for Media.ListMediaItems.', required: [] })
  .openapi('ListMediaItemsResponse')

const QuestionSchema = z
  .object({
    author: AuthorSchema.exactOptional().openapi({
      description: 'Output only. The author of the question.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The timestamp for when the question was written.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The unique name for the question. accounts/*/locations/*/questions/*',
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text of the question. It should contain at least three words and the total length should be greater than or equal to 10 characters. The maximum length is 4096 characters.',
      }),
    topAnswers: z
      .array(AnswerSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. A list of answers to the question, sorted by upvotes. This may not be a complete list of answers depending on the request parameters (answers_per_question)',
      }),
    totalAnswerCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The total number of answers posted for this question.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp for when the question was last modified.',
      }),
    upvoteCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. The number of upvotes for the question.' }),
  })
  .openapi({ description: 'Represents a single question and some of its answers.', required: [] })
  .openapi('Question')

const ListQuestionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the number of questions exceeds the requested max page size, this field is populated with a token to fetch the next page of questions on a subsequent call. If there are no more questions, this field is not present in the response.',
      }),
    questions: z
      .array(QuestionSchema)
      .exactOptional()
      .openapi({ description: 'The requested questions,' }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The total number of questions posted for this location across all pages.',
      }),
  })
  .openapi({ description: 'Response message for QuestionsAndAnswers.ListQuestions', required: [] })
  .openapi('ListQuestionsResponse')

const ListRecommendedGoogleLocationsResponseSchema = z
  .object({
    googleLocations: z
      .array(GoogleLocationSchema)
      .exactOptional()
      .openapi({
        description:
          'The locations recommended to a Business Profile account. Each of these represents a GoogleLocation that is present on Maps. The locations are sorted in decreasing order of relevance to the Business Profile account.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'During pagination, if there are more locations available to be fetched in the next page, this field is populated with a token to fetch the next page of locations in a subsequent call. If there are no more locations to be fetched, this field is not present in the response.',
      }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of recommended locations for this Business Profile account, irrespective of pagination.',
      }),
  })
  .openapi({
    description:
      'Response message for GoogleLocations.ListRecommendedGoogleLocations. It also contains some locations that have been claimed by other Business Profile users since the last time they were recommended to this Business Profile account.',
    required: [],
  })
  .openapi('ListRecommendedGoogleLocationsResponse')

const ListReviewsResponseSchema = z
  .object({
    averageRating: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The average star rating of all reviews for this location on a scale of 1 to 5, where 5 is the highest rating.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the number of reviews exceeded the requested page size, this field is populated with a token to fetch the next page of reviews on a subsequent call to ListReviews. If there are no more reviews, this field is not present in the response.',
      }),
    reviews: z.array(ReviewSchema).exactOptional().openapi({ description: 'The reviews.' }),
    totalReviewCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of reviews for this location.' }),
  })
  .openapi({ description: 'Response message for Reviews.ListReviews.', required: [] })
  .openapi('ListReviewsResponse')

const ListVerificationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the number of verifications exceeded the requested page size, this field will be populated with a token to fetch the next page of verification on a subsequent call. If there are no more attributes, this field will not be present in the response.',
      }),
    verifications: z
      .array(VerificationSchema)
      .exactOptional()
      .openapi({ description: 'List of the verifications.' }),
  })
  .openapi({ description: 'Response message for Verifications.ListVerifications.', required: [] })
  .openapi('ListVerificationsResponse')

const MetricValueSchema: z.ZodType<MetricValueType> = z
  .lazy(() =>
    z
      .object({
        dimensionalValues: z
          .array(DimensionalMetricValueSchema)
          .exactOptional()
          .openapi({ description: 'Dimensional values for this metric.' }),
        metric: z
          .enum([
            'METRIC_UNSPECIFIED',
            'ALL',
            'QUERIES_DIRECT',
            'QUERIES_INDIRECT',
            'QUERIES_CHAIN',
            'VIEWS_MAPS',
            'VIEWS_SEARCH',
            'ACTIONS_WEBSITE',
            'ACTIONS_PHONE',
            'ACTIONS_DRIVING_DIRECTIONS',
            'PHOTOS_VIEWS_MERCHANT',
            'PHOTOS_VIEWS_CUSTOMERS',
            'PHOTOS_COUNT_MERCHANT',
            'PHOTOS_COUNT_CUSTOMERS',
            'LOCAL_POST_VIEWS_SEARCH',
            'LOCAL_POST_ACTIONS_CALL_TO_ACTION',
          ])
          .exactOptional()
          .openapi({ description: 'The metric for which the value applies.' }),
        totalValue: DimensionalMetricValueSchema.exactOptional().openapi({
          description:
            'The total aggregated value for this metric. Set for the AGGREGATED_TOTAL option.',
        }),
      })
      .openapi({ description: 'A value for a single Metric from a starting time.', required: [] }),
  )
  .openapi('MetricValue')

const LocalPostMetricsSchema = z
  .object({
    localPostName: z.string().exactOptional(),
    metricValues: z
      .array(MetricValueSchema)
      .exactOptional()
      .openapi({ description: 'A list of values for the requested metrics.' }),
  })
  .openapi({ description: 'All the metrics requested for a Local Post.', required: [] })
  .openapi('LocalPostMetrics')

const RegionCountSchema = z
  .object({
    count: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of driving-direction requests from this region.' }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable label for the region.' }),
    latlng: LatLngSchema.exactOptional().openapi({ description: 'Center of region.' }),
  })
  .openapi({ description: 'A region with its associated request count.', required: [] })
  .openapi('RegionCount')

const TopDirectionSourcesSchema = z
  .object({
    dayCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of days data is aggregated over.' }),
    regionCounts: z
      .array(RegionCountSchema)
      .exactOptional()
      .openapi({ description: 'Regions sorted in descending order by count.' }),
  })
  .openapi({
    description: 'Top regions where driving-direction requests originated from.',
    required: [],
  })
  .openapi('TopDirectionSources')

const LocationDrivingDirectionMetricsSchema = z
  .object({
    locationName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The location resource name this metric value belongs to.' }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description: "Time zone (IANA timezone IDs, for example, 'Europe/London') of the location.",
      }),
    topDirectionSources: z
      .array(TopDirectionSourcesSchema)
      .exactOptional()
      .openapi({
        description:
          'Driving-direction requests by source region. By convention, these are sorted by count with at most 10 results.',
      }),
  })
  .openapi({
    description:
      'A location indexed with the regions that people usually come from. This is captured by counting how many driving-direction requests to this location are from each region.',
    required: [],
  })
  .openapi('LocationDrivingDirectionMetrics')

const LocationMetricsSchema = z
  .object({
    locationName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The location resource name these values belong to.' }),
    metricValues: z
      .array(MetricValueSchema)
      .exactOptional()
      .openapi({ description: 'A list of values for the requested metrics.' }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({ description: 'IANA timezone for the location.' }),
  })
  .openapi({
    description:
      'A series of Metrics and BreakdownMetrics associated with a Location over some time range.',
    required: [],
  })
  .openapi('LocationMetrics')

const NotificationsSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The notifications resource name.' }),
    notificationTypes: z
      .array(
        z.enum([
          'NOTIFICATION_TYPE_UNSPECIFIED',
          'GOOGLE_UPDATE',
          'NEW_REVIEW',
          'UPDATED_REVIEW',
          'NEW_CUSTOMER_MEDIA',
          'NEW_QUESTION',
          'UPDATED_QUESTION',
          'NEW_ANSWER',
          'UPDATED_ANSWER',
          'UPDATED_LOCATION_STATE',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'The types of notifications that will be sent to the Cloud Pub/Sub topic. At least one must be specified. To stop receiving notifications entirely, use DeleteNotifications.',
      }),
    topicName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Google Cloud Pub/Sub topic that will receive notifications when locations managed by this account are updated. If unset, no notifications will be posted. The account mybusiness-api-pubsub@system.gserviceaccount.com must have at least Publish permissions on the Cloud Pub/Sub topic.',
      }),
  })
  .openapi({
    description:
      'A Google Cloud Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification settings resource per-account.',
    required: [],
  })
  .openapi('Notifications')

const PhoneInputSchema = z
  .object({
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The phone number that should be called or be sent SMS to. It must be one of the phone numbers in the eligible options.',
      }),
  })
  .openapi({ description: 'Input for PHONE_CALL/SMS verification.', required: [] })
  .openapi('PhoneInput')

const ReportGoogleLocationRequestSchema = z
  .object({
    locationGroupName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The resource name of the location group that this Google Location is being reported for, in the format `accounts/{account_id}`.',
      }),
    reportReasonBadLocation: z
      .enum([
        'BAD_LOCATION_REASON_UNSPECIFIED',
        'NOT_A_LOCATION',
        'PERMANENTLY_CLOSED',
        'DOES_NOT_EXIST',
        'SPAM',
        'NOT_A_BUSINESS',
        'MOVED',
        'DUPLICATE',
      ])
      .exactOptional()
      .openapi({
        description:
          'The reason for which the user is reporting this location when the issue is with the location itself.',
      }),
    reportReasonBadRecommendation: z
      .enum([
        'BAD_RECOMMENDATION_REASON_UNSPECIFIED',
        'NOT_A_STORE_FRONT',
        'NOT_PART_OF_SUGGESTED_CHAIN',
        'IRRELEVANT',
      ])
      .exactOptional()
      .openapi({
        description:
          'The reason for which the user is reporting this location when the issue is with the recommendation. This report is useful if the location has been recommended to the Business Profile account.',
      }),
    reportReasonElaboration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A text entry for elaborating on the reason for which the user is reporting this location. The maximum length is 512 characters.',
      }),
    reportReasonLanguageCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. The BCP 47 code of language used in `report_reason_elaboration`.',
      }),
  })
  .openapi({ description: 'Request message for reporting a GoogleLocation.', required: [] })
  .openapi('ReportGoogleLocationRequest')

const ReportLocalPostInsightsRequestSchema = z
  .object({
    basicRequest: BasicMetricsRequestSchema.exactOptional().openapi({
      description:
        'A request to include basic metric insights in the report. This request applies to all posts requested.',
    }),
    localPostNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. The list of posts for which to fetch insights data. All posts have to belong to the location whose name is specified in the `name` field.',
      }),
  })
  .openapi({ description: 'Request message for Insights.ReportLocalPostInsights', required: [] })
  .openapi('ReportLocalPostInsightsRequest')

const ReportLocalPostInsightsResponseSchema = z
  .object({
    localPostMetrics: z
      .array(LocalPostMetricsSchema)
      .exactOptional()
      .openapi({ description: 'One entry per requested post corresponding to this location.' }),
    name: z.string().exactOptional(),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description: "Time zone (IANA timezone IDs, eg, 'Europe/London') of the location.",
      }),
  })
  .openapi({ description: 'Response message for Insights.ReportLocalPostInsights', required: [] })
  .openapi('ReportLocalPostInsightsResponse')

const ReportLocationInsightsRequestSchema = z
  .object({
    basicRequest: BasicMetricsRequestSchema.exactOptional().openapi({
      description: 'A request to include basic metric insights in the report.',
    }),
    drivingDirectionsRequest: DrivingDirectionMetricsRequestSchema.exactOptional().openapi({
      description: 'A request to include insights about driving-direction requests in the report.',
    }),
    locationNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A collection of locations to fetch insights for, specified by their names.',
      }),
  })
  .openapi({ description: 'Request message for Insights.ReportLocationInsights.', required: [] })
  .openapi('ReportLocationInsightsRequest')

const ReportLocationInsightsResponseSchema = z
  .object({
    locationDrivingDirectionMetrics: z
      .array(LocationDrivingDirectionMetricsSchema)
      .exactOptional()
      .openapi({ description: 'A collection of values for driving direction-related metrics.' }),
    locationMetrics: z
      .array(LocationMetricsSchema)
      .exactOptional()
      .openapi({ description: 'A collection of metric values by location.' }),
  })
  .openapi({ description: 'Response message for `Insights.ReportLocationInsights`.', required: [] })
  .openapi('ReportLocationInsightsResponse')

const SearchChainsResponseSchema = z
  .object({
    chains: z
      .array(ChainSchema)
      .exactOptional()
      .openapi({
        description:
          'Chains that match the queried chain_display_name in SearchChainsRequest. If there are no matches, this field will be empty. Results are listed in order of relevance.',
      }),
  })
  .openapi({ description: 'Response message for Locations.SearchChains.', required: [] })
  .openapi('SearchChainsResponse')

const SearchGoogleLocationsRequestSchema = z
  .object({
    location: LocationSchema.exactOptional().openapi({
      description:
        'Location to search for. If provided, will find locations which match the provided location details.',
    }),
    query: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text query to search for. The search results from a query string will be less accurate than if providing an exact location, but can provide more inexact matches.',
      }),
    resultCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of matches to return. The default value is 3, with a maximum of 10. Note that latency may increase if more are requested. There is no pagination.',
      }),
  })
  .openapi({
    description: 'Request message for GoogleLocations.SearchGoogleLocations.',
    required: [],
  })
  .openapi('SearchGoogleLocationsRequest')

const SearchGoogleLocationsResponseSchema = z
  .object({
    googleLocations: z
      .array(GoogleLocationSchema)
      .exactOptional()
      .openapi({
        description:
          'A collection of GoogleLocations that are potential matches to the specified request, listed in order from most to least accuracy.',
      }),
  })
  .openapi({
    description: 'Response message for GoogleLocations.SearchGoogleLocations.',
    required: [],
  })
  .openapi('SearchGoogleLocationsResponse')

const ServiceItemSchema: z.ZodType<ServiceItemType> = z
  .lazy(() =>
    z
      .object({
        freeFormServiceItem: FreeFormServiceItemSchema.exactOptional().openapi({
          description: 'This field will be set case of free-form services data.',
        }),
        isOffered: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Optional. This field decides whether or not the input service is offered by the merchant.',
          }),
        price: MoneySchema.exactOptional().openapi({
          description:
            'Optional. Represents the monetary price of the service item. We recommend that currency_code and units should be set when including a price.',
        }),
        structuredServiceItem: StructuredServiceItemSchema.exactOptional().openapi({
          description: 'This field will be set case of structured services data.',
        }),
      })
      .openapi({
        description:
          'A message that describes a single service item. It is used to describe the type of service that the merchant provides. For example, haircut can be a service.',
        required: [],
      }),
  )
  .openapi('ServiceItem')

const ServiceListSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}/serviceList`',
      }),
    serviceItems: z
      .array(ServiceItemSchema)
      .exactOptional()
      .openapi({
        description:
          'Service items that are contained within this service list. Duplicated service items will be removed automatically.',
      }),
  })
  .openapi({ description: 'A service list containing one or more service items.', required: [] })
  .openapi('ServiceList')

const StartUploadMediaItemDataRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for Media.StartUploadMediaItemData.' })
  .openapi('StartUploadMediaItemDataRequest')

const TransferLocationRequestSchema = z
  .object({
    toAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the account resource to transfer the location to (for example, "accounts/8675309").',
      }),
  })
  .openapi({ description: 'Request message for Locations.TransferLocation.', required: [] })
  .openapi('TransferLocationRequest')

const UpsertAnswerRequestSchema = z
  .object({ answer: AnswerSchema.exactOptional().openapi({ description: 'The new answer.' }) })
  .openapi({ description: 'Request message for QuestionsAndAnswers.UpsertAnswer', required: [] })
  .openapi('UpsertAnswerRequest')

const VerifyLocationRequestSchema = z
  .object({
    addressInput: AddressInputSchema.exactOptional().openapi({
      description: 'The input for ADDRESS method.',
    }),
    context: ServiceBusinessContextSchema.exactOptional().openapi({
      description:
        'Extra context information for the verification of service businesses. Required for the locations whose business type is CUSTOMER_LOCATION_ONLY. For ADDRESS verification, the address will be used to send out postcard. For other methods, it should be the same as the one that is passed to FetchVerificationOptions. INVALID_ARGUMENT will be thrown if it is set for other types of business locations.',
    }),
    emailInput: EmailInputSchema.exactOptional().openapi({
      description: 'The input for EMAIL method.',
    }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP 47 language code representing the language that is to be used for the verification process.',
      }),
    method: z
      .enum(['VERIFICATION_METHOD_UNSPECIFIED', 'ADDRESS', 'EMAIL', 'PHONE_CALL', 'SMS', 'AUTO'])
      .exactOptional()
      .openapi({ description: 'Verification method.' }),
    phoneInput: PhoneInputSchema.exactOptional().openapi({
      description: 'The input for PHONE_CALL/SMS method',
    }),
  })
  .openapi({ description: 'Request message for Verifications.VerifyLocation.', required: [] })
  .openapi('VerifyLocationRequest')

const VerifyLocationResponseSchema = z
  .object({
    verification: VerificationSchema.exactOptional().openapi({
      description: 'The created verification request.',
    }),
  })
  .openapi({ description: 'Response message for Verifications.VerifyLocation.', required: [] })
  .openapi('VerifyLocationResponse')

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

export const getV4AccountsRoute = createRoute({
  method: 'get',
  path: '/v4/accounts',
  tags: ['accounts'],
  description:
    'Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.',
  operationId: 'mybusiness.accounts.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A filter constraining the accounts to return. The response includes only entries that match the filter. If `filter` is empty, then no constraints are applied and all accounts (paginated) are retrieved for the requested account. For example, a request with the filter `type=USER_GROUP` will only return user groups.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The resource name of the account for which the list of directly accessible accounts is to be retrieved. This only makes sense for Organizations and User Groups. If empty, will return `ListAccounts` for the authenticated user.',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'How many accounts to fetch per page. Default is 20, minimum is 2, and maximum page size is 20.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, the next page of accounts is retrieved. The `pageToken` is returned when a call to `accounts.list` returns more results than can fit into the requested page size.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListAccountsResponseSchema } },
    },
  },
})

export const postV4AccountsRoute = createRoute({
  method: 'post',
  path: '/v4/accounts',
  tags: ['accounts'],
  description:
    'Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups. ',
  operationId: 'mybusiness.accounts.create',
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
      primaryOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The resource name of the account which will be the primary owner of the account being created. It should be of the form `accounts/{account_id}/`.',
            in: 'query',
            name: 'primaryOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AccountSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountSchema } },
    },
  },
})

export const getV4AttributesRoute = createRoute({
  method: 'get',
  path: '/v4/attributes',
  tags: ['attributes'],
  description:
    'Returns the list of available attributes that would be available for a location with the given primary category and country.',
  operationId: 'mybusiness.attributes.list',
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
      categoryId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The primary category stable ID to find available attributes.',
            in: 'query',
            name: 'categoryId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ISO 3166-1 alpha-2 country code to find available attributes.',
            in: 'query',
            name: 'country',
            schema: { type: 'string' },
            required: false,
          },
        }),
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The BCP 47 code of language to get attribute display names in. If this language is not available, they will be provided in English.',
            in: 'query',
            name: 'languageCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Resource name of the location to look up available attributes.',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'How many attributes to include per page. Default is 200, minimum is 1.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, the next page of attribute metadata is retrieved. The `pageToken` is returned when a call to `attributes.list` returns more results than can fit into the requested page size.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListAttributeMetadataResponseSchema } },
    },
  },
})

export const getV4CategoriesRoute = createRoute({
  method: 'get',
  path: '/v4/categories',
  tags: ['categories'],
  description:
    "Returns a list of business categories. Search will match the category name but not the category ID. *Note:* Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').",
  operationId: 'mybusiness.categories.list',
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
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The BCP 47 code of language. If the language is not available, it will default to English.',
            in: 'query',
            name: 'languageCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'How many categories to fetch per page. Default is 100, minimum is 1, and maximum page size is 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If specified, the next page of categories will be fetched.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      regionCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ISO 3166-1 alpha-2 country code.',
            in: 'query',
            name: 'regionCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchTerm: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional filter string from user.',
            in: 'query',
            name: 'searchTerm',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['CATEGORY_VIEW_UNSPECIFIED', 'BASIC', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Specifies which parts to the Category resource should be returned in the response.',
            in: 'query',
            name: 'view',
            schema: { enum: ['CATEGORY_VIEW_UNSPECIFIED', 'BASIC', 'FULL'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListBusinessCategoriesResponseSchema } },
    },
  },
})

export const getV4CategoriesBatchGetRoute = createRoute({
  method: 'get',
  path: '/v4/categories:batchGet',
  tags: ['categories'],
  description: 'Returns a list of business categories for the provided language and GConcept ids.',
  operationId: 'mybusiness.categories.batchGet',
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
      categoryIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. At least one name must be set. The GConcept ids the localized category names should be returned for.',
            explode: true,
            in: 'query',
            name: 'categoryIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The BCP 47 code of language that the category names should be returned in.',
            in: 'query',
            name: 'languageCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      regionCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The ISO 3166-1 alpha-2 country code used to infer non-standard language.',
            in: 'query',
            name: 'regionCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['CATEGORY_VIEW_UNSPECIFIED', 'BASIC', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Specifies which parts to the Category resource should be returned in the response.',
            in: 'query',
            name: 'view',
            schema: { enum: ['CATEGORY_VIEW_UNSPECIFIED', 'BASIC', 'FULL'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchGetBusinessCategoriesResponseSchema } },
    },
  },
})

export const getV4ChainsSearchRoute = createRoute({
  method: 'get',
  path: '/v4/chains:search',
  tags: ['chains'],
  description: 'Searches the chain based on chain name.',
  operationId: 'mybusiness.chains.search',
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
      chainDisplayName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Search for a chain by its name. Exact/partial/fuzzy/related queries are supported. Examples: "walmart", "wal-mart", "walmmmart", "沃尔玛"',
            in: 'query',
            name: 'chainDisplayName',
            schema: { type: 'string' },
            required: false,
          },
        }),
      resultCount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of matched chains to return from this query. The default is 10. The maximum possible value is 500.',
            in: 'query',
            name: 'resultCount',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SearchChainsResponseSchema } },
    },
  },
})

export const postV4GoogleLocationsSearchRoute = createRoute({
  method: 'post',
  path: '/v4/googleLocations:search',
  tags: ['googleLocations'],
  description: 'Search all of the possible locations that are a match to the specified request.',
  operationId: 'mybusiness.googleLocations.search',
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
    body: { content: { 'application/json': { schema: SearchGoogleLocationsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SearchGoogleLocationsResponseSchema } },
    },
  },
})

export const getV4NameRoute = createRoute({
  method: 'get',
  path: '/v4/{name}',
  tags: ['chains'],
  description: 'Gets the specified chain. Returns `NOT_FOUND` if the chain does not exist.',
  operationId: 'mybusiness.chains.get',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "The chain's resource name, in the format `chains/{chain_place_id}`.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChainSchema } },
    },
  },
})

export const putV4NameRoute = createRoute({
  method: 'put',
  path: '/v4/{name}',
  tags: ['accounts'],
  description:
    'Sets the pubsub notification settings for the account informing Business Profile which topic to send pubsub notifications for: - New reviews for locations administered by the account. - Updated reviews for locations administered by the account. - New `GoogleUpdates` for locations administered by the account. An account will only have one notification settings resource, and only one pubsub topic can be set.',
  operationId: 'mybusiness.accounts.updateNotifications',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The notification settings resource name.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: NotificationsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: NotificationsSchema } },
    },
  },
})

export const deleteV4NameRoute = createRoute({
  method: 'delete',
  path: '/v4/{name}',
  tags: ['accounts'],
  description: 'Deletes a specific question written by the current user.',
  operationId: 'mybusiness.accounts.locations.questions.delete',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the question to delete.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
})

export const patchV4NameRoute = createRoute({
  method: 'patch',
  path: '/v4/{name}',
  tags: ['accounts'],
  description: 'Updates a specific question written by the current user.',
  operationId: 'mybusiness.accounts.locations.questions.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The specific fields to update. If no mask is specified, then this is treated as a full update and all editable fields are set to the values passed in.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the question to update.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: QuestionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: QuestionSchema } },
    },
  },
})

export const postV4NameLocalPostsReportInsightsRoute = createRoute({
  method: 'post',
  path: '/v4/{name}/localPosts:reportInsights',
  tags: ['accounts'],
  description:
    'Returns insights for a set of local posts associated with a single listing. Which metrics and how they are reported are options specified in the request proto. *Note:* Insight reports are limited to 100 `local_post_names` per call.',
  operationId: 'mybusiness.accounts.locations.localPosts.reportInsights',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the location for which to fetch insights.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReportLocalPostInsightsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReportLocalPostInsightsResponseSchema } },
    },
  },
})

export const postV4NameLocationsBatchGetRoute = createRoute({
  method: 'post',
  path: '/v4/{name}/locations:batchGet',
  tags: ['accounts'],
  description: 'Gets all of the specified locations in the given account.',
  operationId: 'mybusiness.accounts.locations.batchGet',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the account from which to fetch locations.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchGetLocationsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchGetLocationsResponseSchema } },
    },
  },
})

export const postV4NameLocationsBatchGetReviewsRoute = createRoute({
  method: 'post',
  path: '/v4/{name}/locations:batchGetReviews',
  tags: ['accounts'],
  description:
    'Returns the paginated list of reviews for all specified locations. This operation is only valid if the specified locations are verified. *Note:* Reviews are limited to a batch size of 200 `location_names` per call.',
  operationId: 'mybusiness.accounts.locations.batchGetReviews',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the account from which to retrieve a list of reviews across multiple locations.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchGetReviewsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchGetReviewsResponseSchema } },
    },
  },
})

export const postV4NameLocationsReportInsightsRoute = createRoute({
  method: 'post',
  path: '/v4/{name}/locations:reportInsights',
  tags: ['accounts'],
  description:
    'Returns a report containing insights on one or more metrics by location. *Note:* Insight reports are limited to a batch size of 10 `location_names` per call.',
  operationId: 'mybusiness.accounts.locations.reportInsights',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The account resource name.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReportLocationInsightsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReportLocationInsightsResponseSchema } },
    },
  },
})

export const putV4NameReplyRoute = createRoute({
  method: 'put',
  path: '/v4/{name}/reply',
  tags: ['accounts'],
  description:
    'Updates the reply to the specified review. A reply is created if one does not exist. This operation is only valid if the specified location is verified.',
  operationId: 'mybusiness.accounts.locations.reviews.updateReply',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the review to respond to.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReviewReplySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReviewReplySchema } },
    },
  },
})

export const deleteV4NameReplyRoute = createRoute({
  method: 'delete',
  path: '/v4/{name}/reply',
  tags: ['accounts'],
  description:
    'Deletes the response to the specified review. This operation is only valid if the specified location is verified.',
  operationId: 'mybusiness.accounts.locations.reviews.deleteReply',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the review reply to delete.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
})

export const postV4NameAcceptRoute = createRoute({
  method: 'post',
  path: '/v4/{name}:accept',
  tags: ['accounts'],
  description: 'Accepts the specified invitation.',
  operationId: 'mybusiness.accounts.invitations.accept',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the invitation that is being accepted.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AcceptInvitationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
})

export const postV4NameAssociateRoute = createRoute({
  method: 'post',
  path: '/v4/{name}:associate',
  tags: ['accounts'],
  description:
    'Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `FindMatchingLocations`.',
  operationId: 'mybusiness.accounts.locations.associate',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The resource name of the location to associate.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AssociateLocationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
})

export const postV4NameClearAssociationRoute = createRoute({
  method: 'post',
  path: '/v4/{name}:clearAssociation',
  tags: ['accounts'],
  description:
    'Clears an association between a location and its place ID. This operation is only valid if the location is unverified.',
  operationId: 'mybusiness.accounts.locations.clearAssociation',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The resource name of the location to disassociate.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ClearLocationAssociationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
})

export const postV4NameCompleteRoute = createRoute({
  method: 'post',
  path: '/v4/{name}:complete',
  tags: ['accounts'],
  description:
    'Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.',
  operationId: 'mybusiness.accounts.locations.verifications.complete',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Resource name of the verification to complete.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CompleteVerificationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CompleteVerificationResponseSchema } },
    },
  },
})

export const postV4NameDeclineRoute = createRoute({
  method: 'post',
  path: '/v4/{name}:decline',
  tags: ['accounts'],
  description: 'Declines the specified invitation.',
  operationId: 'mybusiness.accounts.invitations.decline',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the account invitation that is being declined.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeclineInvitationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
})

export const postV4NameFetchVerificationOptionsRoute = createRoute({
  method: 'post',
  path: '/v4/{name}:fetchVerificationOptions',
  tags: ['accounts'],
  description: 'Reports all eligible verification options for a location in a specific language.',
  operationId: 'mybusiness.accounts.locations.fetchVerificationOptions',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Resource name of the location to verify.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FetchVerificationOptionsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FetchVerificationOptionsResponseSchema } },
    },
  },
})

export const postV4NameFindMatchesRoute = createRoute({
  method: 'post',
  path: '/v4/{name}:findMatches',
  tags: ['accounts'],
  description:
    'Finds all of the possible locations that are a match to the specified location. This operation is only valid if the location is unverified.',
  operationId: 'mybusiness.accounts.locations.findMatches',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The resource name of the location to find matches for.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FindMatchingLocationsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FindMatchingLocationsResponseSchema } },
    },
  },
})

export const postV4NameGenerateAccountNumberRoute = createRoute({
  method: 'post',
  path: '/v4/{name}:generateAccountNumber',
  tags: ['accounts'],
  description:
    'Generates an account number for this account. The account number is not provisioned when an account is created. Use this request to create an account number when it is required.',
  operationId: 'mybusiness.accounts.generateAccountNumber',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the account to generate an account number for.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GenerateAccountNumberRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountSchema } },
    },
  },
})

export const getV4NameGetGoogleUpdatedRoute = createRoute({
  method: 'get',
  path: '/v4/{name}:getGoogleUpdated',
  tags: ['accounts'],
  description: 'Returns the Google updated Lodging of a specific location.',
  operationId: 'mybusiness.accounts.locations.lodging.getGoogleUpdated',
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
      readMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The specific fields to return. If no mask is specified, then it returns the full Lodging (same as "*"). Repeated field items cannot be individually specified.',
            in: 'query',
            name: 'readMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}/lodging`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetGoogleUpdatedLodgingResponseSchema } },
    },
  },
})

export const getV4NameGoogleUpdatedRoute = createRoute({
  method: 'get',
  path: '/v4/{name}:googleUpdated',
  tags: ['accounts'],
  description:
    'Gets the Google-updated version of the specified location. Returns `NOT_FOUND` if the location does not exist.',
  operationId: 'mybusiness.accounts.locations.getGoogleUpdated',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the location to fetch.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleUpdatedLocationSchema } },
    },
  },
})

export const getV4NameRecommendGoogleLocationsRoute = createRoute({
  method: 'get',
  path: '/v4/{name}:recommendGoogleLocations',
  tags: ['accounts'],
  description:
    'List all the GoogleLocations that have been recommended to the specified Business Profile account. Recommendations are provided for personal accounts and location groups only, requests for all other account types will result in an error. The recommendations for location groups are based on the locations in that group. The recommendations for personal accounts are based on all of the locations that the user has access to on Business Profile (which includes locations they can access through location groups), and is a superset of all recommendations generated for the user.',
  operationId: 'mybusiness.accounts.listRecommendGoogleLocations',
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
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'How many locations to fetch per page. Default is 25, minimum is 1, and maximum page size is 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If specified, the next page of locations is retrieved.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Name of the account resource to fetch recommended Google locations for.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListRecommendedGoogleLocationsResponseSchema } },
    },
  },
})

export const postV4NameReportRoute = createRoute({
  method: 'post',
  path: '/v4/{name}:report',
  tags: ['googleLocations'],
  description: 'Report a GoogleLocation.',
  operationId: 'mybusiness.googleLocations.report',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Resource name of a [GoogleLocation], in the format `googleLocations/{googleLocationId}`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReportGoogleLocationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
})

export const postV4NameTransferRoute = createRoute({
  method: 'post',
  path: '/v4/{name}:transfer',
  tags: ['accounts'],
  description:
    'Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account. Returns the Location with its new resource name.',
  operationId: 'mybusiness.accounts.locations.transfer',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the location to transfer.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TransferLocationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LocationSchema } },
    },
  },
})

export const postV4NameVerifyRoute = createRoute({
  method: 'post',
  path: '/v4/{name}:verify',
  tags: ['accounts'],
  description: 'Starts the verification process for a location.',
  operationId: 'mybusiness.accounts.locations.verify',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Resource name of the location to verify.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: VerifyLocationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VerifyLocationResponseSchema } },
    },
  },
})

export const getV4ParentAdminsRoute = createRoute({
  method: 'get',
  path: '/v4/{parent}/admins',
  tags: ['accounts'],
  description: 'Lists all of the admins for the specified location.',
  operationId: 'mybusiness.accounts.locations.admins.list',
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
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The name of the location to list admins of.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListLocationAdminsResponseSchema } },
    },
  },
})

export const postV4ParentAdminsRoute = createRoute({
  method: 'post',
  path: '/v4/{parent}/admins',
  tags: ['accounts'],
  description:
    'Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.',
  operationId: 'mybusiness.accounts.locations.admins.create',
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
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The resource name of the location this admin is created for.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AdminSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdminSchema } },
    },
  },
})

export const getV4ParentAnswersRoute = createRoute({
  method: 'get',
  path: '/v4/{parent}/answers',
  tags: ['accounts'],
  description: 'Returns the paginated list of answers for a specified question.',
  operationId: 'mybusiness.accounts.locations.questions.answers.list',
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
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The order to return the answers. Valid options include 'update_time desc' and 'upvote_count desc', which will return the answers sorted descendingly by the requested field. The default sort order is 'update_time desc'.",
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'How many answers to fetch per page. The default and maximum `page_size` values are 10.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If specified, the next page of answers is retrieved.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The name of the question to fetch answers for.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListAnswersResponseSchema } },
    },
  },
})

export const deleteV4ParentAnswersDeleteRoute = createRoute({
  method: 'delete',
  path: '/v4/{parent}/answers:delete',
  tags: ['accounts'],
  description: 'Deletes the answer written by the current user to a question.',
  operationId: 'mybusiness.accounts.locations.questions.answers.delete',
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
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The name of the question to delete an answer for.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
})

export const postV4ParentAnswersUpsertRoute = createRoute({
  method: 'post',
  path: '/v4/{parent}/answers:upsert',
  tags: ['accounts'],
  description:
    'Creates an answer or updates the existing answer written by the user for the specified question. A user can only create one answer per question.',
  operationId: 'mybusiness.accounts.locations.questions.answers.upsert',
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
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The name of the question to write an answer for.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpsertAnswerRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AnswerSchema } },
    },
  },
})

export const getV4ParentInsuranceNetworksRoute = createRoute({
  method: 'get',
  path: '/v4/{parent}/insuranceNetworks',
  tags: ['accounts'],
  description: 'Returns a list of all insurance networks supported by Google.',
  operationId: 'mybusiness.accounts.locations.insuranceNetworks.list',
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
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional. The BCP 47 code for the language. If a language code is not provided, it defaults to English. Right now only 'en' is supported.",
            in: 'query',
            name: 'languageCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'How many insurance networks to return per page. The default value is 5000. Maximum page size is 10000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If specified, returns the next page of insurance networks.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the location whose insurance networks will be listed. The name is in the form: accounts/{account_id}/locations/{location_id}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListInsuranceNetworksResponseSchema } },
    },
  },
})

export const getV4ParentInvitationsRoute = createRoute({
  method: 'get',
  path: '/v4/{parent}/invitations',
  tags: ['accounts'],
  description: 'Lists pending invitations for the specified account.',
  operationId: 'mybusiness.accounts.invitations.list',
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
      targetType: z
        .enum(['ALL', 'ACCOUNTS_ONLY', 'LOCATIONS_ONLY'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies which target types should appear in the response.',
            in: 'query',
            name: 'targetType',
            schema: { enum: ['ALL', 'ACCOUNTS_ONLY', 'LOCATIONS_ONLY'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the account from which the list of invitations is being retrieved.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListInvitationsResponseSchema } },
    },
  },
})

export const getV4ParentLocalPostsRoute = createRoute({
  method: 'get',
  path: '/v4/{parent}/localPosts',
  tags: ['accounts'],
  description: 'Returns a list of local posts associated with a location.',
  operationId: 'mybusiness.accounts.locations.localPosts.list',
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
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'How many local posts to return per page. Default of 20. The minimum is 1, and maximum page size is 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If specified, returns the next page of local posts.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The name of the location whose local posts will be listed.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListLocalPostsResponseSchema } },
    },
  },
})

export const postV4ParentLocalPostsRoute = createRoute({
  method: 'post',
  path: '/v4/{parent}/localPosts',
  tags: ['accounts'],
  description: 'Creates a new local post associated with the specified location, and returns it.',
  operationId: 'mybusiness.accounts.locations.localPosts.create',
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
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The name of the location in which to create this local post.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LocalPostSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LocalPostSchema } },
    },
  },
})

export const getV4ParentLocationsRoute = createRoute({
  method: 'get',
  path: '/v4/{parent}/locations',
  tags: ['accounts'],
  description: 'Lists the locations for the specified account.',
  operationId: 'mybusiness.accounts.locations.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A filter constraining the locations to return. The response includes only entries that match the filter. If `filter` is empty, then constraints are applied and all locations (paginated) are retrieved for the requested account. For more information about valid fields and example usage, see [Work with Location Data Guide](https://developers.google.com/my-business/content/location-data#filter_results_when_you_list_locations).',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The BCP 47 code of language to get display location properties in. If this language is not available, they will be provided in the language of the location. If neither is available, they will be provided in English. Deprecated. After August 15th, 2020, this field will no longer be applied. Instead, the language of the location will always be used.',
            in: 'query',
            name: 'languageCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sorting order for the request. Multiple fields should be comma-separated, following SQL syntax. The default sorting order is ascending. To specify descending order, a suffix " desc" should be added. Valid fields to order_by are location_name and store_code. For example: "location_name, store_code desc" or "location_name" or "store_code desc"',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'How many locations to fetch per page. Default is 100, minimum is 1, and maximum page size is 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If specified, it fetches the next `page` of locations. The page token is returned by previous calls to `ListLocations` when there were more locations than could fit in the requested page size.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the account to fetch locations from. If the Account is of AccountType PERSONAL, only Locations that are directly owned by the Account are returned, otherwise it will return all accessible locations from the Account, either directly or indirectly.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListLocationsResponseSchema } },
    },
  },
})

export const postV4ParentLocationsRoute = createRoute({
  method: 'post',
  path: '/v4/{parent}/locations',
  tags: ['accounts'],
  description: 'Creates a new location owned by the specified account, and returns it.',
  operationId: 'mybusiness.accounts.locations.create',
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
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A unique request ID for the server to detect duplicated requests. We recommend using UUIDs. Max length is 50 characters.',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, the request is validated without actually creating the location.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The name of the account in which to create this location.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LocationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LocationSchema } },
    },
  },
})

export const getV4ParentMediaRoute = createRoute({
  method: 'get',
  path: '/v4/{parent}/media',
  tags: ['accounts'],
  description: 'Returns a list of media items associated with a location.',
  operationId: 'mybusiness.accounts.locations.media.list',
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
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'How many media items to return per page. The default value is 100, which is also the maximum supported number of media items able to be added to a location with the Google My Business API. Maximum page size is 2500.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If specified, returns the next page of media items.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The name of the location whose media items will be listed.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListMediaItemsResponseSchema } },
    },
  },
})

export const postV4ParentMediaRoute = createRoute({
  method: 'post',
  path: '/v4/{parent}/media',
  tags: ['accounts'],
  description: 'Creates a new media item for the location.',
  operationId: 'mybusiness.accounts.locations.media.create',
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
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The resource name of the location where this media item will be created.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MediaItemSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MediaItemSchema } },
    },
  },
})

export const getV4ParentMediaCustomersRoute = createRoute({
  method: 'get',
  path: '/v4/{parent}/media/customers',
  tags: ['accounts'],
  description:
    'Returns a list of media items associated with a location that have been contributed by customers.',
  operationId: 'mybusiness.accounts.locations.media.customers.list',
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
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'How many media items to return per page. The default value is 100, the maximum supported page size is 200.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If specified, returns the next page of media items.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The name of the location whose customer media items will be listed.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListCustomerMediaItemsResponseSchema } },
    },
  },
})

export const postV4ParentMediaStartUploadRoute = createRoute({
  method: 'post',
  path: '/v4/{parent}/media:startUpload',
  tags: ['accounts'],
  description: 'Generates a `MediaItemDataRef` for media item uploading.',
  operationId: 'mybusiness.accounts.locations.media.startUpload',
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
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The resource name of the location this media item is to be added to.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StartUploadMediaItemDataRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MediaItemDataRefSchema } },
    },
  },
})

export const getV4ParentQuestionsRoute = createRoute({
  method: 'get',
  path: '/v4/{parent}/questions',
  tags: ['accounts'],
  description:
    'Returns the paginated list of questions and some of its answers for a specified location.',
  operationId: 'mybusiness.accounts.locations.questions.list',
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
      answersPerQuestion: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'How many answers to fetch per question. The default and maximum `answers_per_question` values are 10.',
            in: 'query',
            name: 'answersPerQuestion',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A filter constraining the questions to return. The only filter currently supported is "ignore_answered=true"',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The order to return the questions. Valid options include 'update_time desc' and 'upvote_count desc', which will return the questions sorted descendingly by the requested field. The default sort order is 'update_time desc'.",
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'How many questions to fetch per page. The default and maximum `page_size` values are 10.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If specified, the next page of questions is retrieved.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The name of the location to fetch questions for.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListQuestionsResponseSchema } },
    },
  },
})

export const postV4ParentQuestionsRoute = createRoute({
  method: 'post',
  path: '/v4/{parent}/questions',
  tags: ['accounts'],
  description: 'Adds a question for the specified location.',
  operationId: 'mybusiness.accounts.locations.questions.create',
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
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The name of the location to write a question for.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: QuestionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: QuestionSchema } },
    },
  },
})

export const getV4ParentReviewsRoute = createRoute({
  method: 'get',
  path: '/v4/{parent}/reviews',
  tags: ['accounts'],
  description:
    'Returns the paginated list of reviews for the specified location. This operation is only valid if the specified location is verified.',
  operationId: 'mybusiness.accounts.locations.reviews.list',
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
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the field to sort reviews by. If unspecified, the order of reviews returned will default to `update_time desc`. Valid orders to sort by are `rating`, `rating desc` and `update_time desc`.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'How many reviews to fetch per page. The maximum `page_size` is 50.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If specified, it fetches the next page of reviews.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'The name of the location to fetch reviews for.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListReviewsResponseSchema } },
    },
  },
})

export const getV4ParentVerificationsRoute = createRoute({
  method: 'get',
  path: '/v4/{parent}/verifications',
  tags: ['accounts'],
  description: 'List verifications of a location, ordered by create time.',
  operationId: 'mybusiness.accounts.locations.verifications.list',
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
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'How many verification to include per page. If not set, return all.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If specified, returns the next page of verifications.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Resource name of the location that verification requests belong to.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListVerificationsResponseSchema } },
    },
  },
})
