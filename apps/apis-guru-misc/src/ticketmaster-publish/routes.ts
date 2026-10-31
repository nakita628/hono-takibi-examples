import { createRoute, z } from '@hono/zod-openapi'

const AccessDatesSchema = z
  .object({
    endApproximate: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Boolean flag to indicate whether or not the access end date is approximated',
        example: 'yyyy-MM-ddThh-mm-ssZ',
        'x-position': 3,
      }),
    endDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: "Event's end access time",
        example: 'yyyy-MM-ddThh-mm-ssZ',
        'x-position': 2,
      }),
    startApproximate: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Boolean flag to indicate whether or not the access start date is approximated',
        'x-position': 1,
      }),
    startDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: "Event's start access time", example: 'yyyy-MM-ddThh-mm-ssZ' }),
  })
  .openapi({ description: "Event's Access Date", required: [] })
  .openapi('AccessDates')

const AddressSchema = z
  .object({
    line1s: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Aaddress first line - multi-lingual fields',
        example: 'en-us: line1',
        'x-position': 1,
      }),
    line2s: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Address second line - multi-lingual fields',
        example: 'en-us:line2',
        'x-position': 4,
      }),
    line3s: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Address third line - multi-lingual fields',
        example: 'en-us:line3',
        'x-position': 4,
      }),
  })
  .openapi({ description: 'Address', required: [] })
  .openapi('Address')

const AreaSchema = z
  .object({
    names: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Names of the entity - multi-lingual fields',
        example: 'en-us: name',
        'x-position': 11,
      }),
  })
  .openapi({ description: 'Area', required: [] })
  .openapi('Area')

const LevelSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: "The ID of the classification's level" }),
    names: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: "The Name of the classification's level - multi-lingual fields",
        'x-position': 2,
      }),
  })
  .openapi({ required: [] })
  .openapi('Level')

const SegmentSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: "The ID of the classification's level" }),
    names: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: "The Name of the classification's level - multi-lingual fields",
        'x-position': 2,
      }),
  })
  .openapi({ description: 'Segment', required: [] })
  .openapi('Segment')

const ClassificationSchema = z
  .object({
    genre: LevelSchema.exactOptional(),
    primary: z.boolean().default(false).exactOptional(),
    segment: SegmentSchema.exactOptional(),
    subGenre: LevelSchema.exactOptional(),
    subType: LevelSchema.exactOptional(),
    type: LevelSchema.exactOptional(),
  })
  .openapi({ description: 'Classification', required: [] })
  .openapi('Classification')

const ImageSchema = z
  .object({
    attribution: z
      .string()
      .exactOptional()
      .openapi({ description: 'Attribution of the image', 'x-position': 8 }),
    domains: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Domains on which this image should be displayed', 'x-position': 7 }),
    fallback: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: "true if the image is not the event's image but a fallbak image",
        'x-position': 6,
      }),
    height: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Height of the image', 'x-position': 5 }),
    ratio: z
      .enum(['16_9', '3_2', '4_3'])
      .exactOptional()
      .openapi({ description: 'Aspect ratio of the image', 'x-position': 3 }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Public URL of the image', 'x-position': 2 }),
    width: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Width of the image', 'x-position': 4 }),
  })
  .openapi({ description: 'Image', required: [] })
  .openapi('Image')

const RelationshipSchema = z
  .object({})
  .openapi({ description: 'Relationship' })
  .openapi('Relationship')

const SourceSchema = z
  .object({
    id: z
      .string()
      .regex(/^[a-zA-Z0-9_-]*$/)
      .exactOptional()
      .openapi({ description: "ID of the entity in the source's system", 'x-position': 1 }),
    name: z
      .string()
      .regex(/^[a-zA-Z0-9_-]*$/)
      .exactOptional()
      .openapi({ description: "Source's name" }),
  })
  .openapi({ description: 'Source', required: [] })
  .openapi('Source')

const AttractionSchema = z
  .object({
    active: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          "Indicate if the entity is active, inactive entity won't appear in Discovery API",
        'x-position': 95,
      }),
    additionalInfos: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Additional informations of the entity - multi-lingual fields',
        example: 'en-us: additionalInfo',
        'x-position': 23,
      }),
    classifications: z
      .array(ClassificationSchema)
      .exactOptional()
      .openapi({ description: "Attraction's classifications", 'x-position': 30 }),
    descriptions: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Descriptions of the entity - multi-lingual fields',
        example: 'en-us: description',
        'x-position': 21,
      }),
    discoverable: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'True if the entity is dicoverable in discovery API',
        'x-position': 97,
      }),
    images: z
      .array(ImageSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Images of the entity', 'x-position': 29 }),
    names: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Names of the entity - multi-lingual fields',
        example: 'en-us: name',
        'x-position': 11,
      }),
    references: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'References of this entity in an other system. Reference is the exact same entity',
        example: 'sourceName: id',
        'x-position': 71,
      }),
    relationships: z
      .array(RelationshipSchema)
      .exactOptional()
      .openapi({
        description:
          'Relationships on the entity, like if the entity is a duplicate of another one',
        'x-position': 70,
      }),
    source: SourceSchema.exactOptional(),
    test: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          "Indicate if this is a test entity, by default test entities won't appear in discovery API",
        'x-position': 96,
      }),
    type: z.enum(['event', 'venue', 'attraction']).openapi({ description: 'Type of the entity' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of a web site detail page of the entity', 'x-position': 24 }),
    version: z
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
        description:
          'Version of the entity. Version is to avoid updated an entity with an older version',
        'x-position': 80,
      }),
  })
  .openapi({ description: 'Attraction', required: ['type'] })
  .openapi('Attraction')

const AttractionExtensionsSchema = z
  .object({})
  .openapi({ description: "All Attraction's extensions" })
  .openapi('AttractionExtensions')

const ChangeSchema = z
  .object({
    from: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Json path of the source entity when using the move operation.',
        'x-position': 1,
      }),
    op: z
      .enum(['add', 'remove', 'replace', 'move', 'copy', 'test'])
      .openapi({ description: 'Operation to apply on the entity.' }),
    path: z
      .string()
      .openapi({
        description:
          'Json path from the root of the document to the place where the change should be applied.',
        'x-position': 2,
      }),
    value: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Data to change. MUST be a valid json object.', 'x-position': 3 }),
  })
  .openapi({
    description: 'This class defines the Changes on the Publish API',
    required: ['op', 'path'],
  })
  .openapi('Change')

const AugmentationDataSchema = z
  .object({
    changes: z
      .array(ChangeSchema)
      .openapi({ description: 'List of changes to apply to the related entity', 'x-position': 5 }),
    relatedEntityId: z
      .string()
      .openapi({
        description: 'Id of the entity to apply the augmentation data.',
        'x-position': 1,
      }),
    relatedEntityType: z
      .enum(['event', 'attraction', 'venue'])
      .openapi({ description: 'The type of the entity to apply the augmentation data.' }),
    score: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The confidence (%) level of the accuracy of this augmention data. 100 is the better',
        'x-position': 4,
      }),
    source: z
      .string()
      .openapi({
        description: 'The source where the augementation data came from',
        'x-position': 2,
      }),
    versionNumber: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Vesion of this augmentation data. This field is to avoid updating entity with old data. ',
        'x-position': 3,
      }),
  })
  .openapi({
    description: 'This class defines the Augmentation Data on the Publish API',
    required: ['changes', 'relatedEntityId', 'relatedEntityType', 'source', 'versionNumber'],
  })
  .openapi('AugmentationData')

const DateTimeZoneSchema = z
  .object({ fixed: z.boolean().default(false).exactOptional(), id: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('DateTimeZone')

const ChronologySchema = z
  .object({ zone: DateTimeZoneSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Chronology')

const CitySchema = z
  .object({
    names: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Names of the entity - multi-lingual fields',
        example: 'en-us: name',
        'x-position': 11,
      }),
  })
  .openapi({ description: 'City', required: [] })
  .openapi('City')

const CountrySchema = z
  .object({
    countryCode: z.string().exactOptional().openapi({ description: 'Country code (ISO 3166)' }),
    names: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Names of the entity - multi-lingual fields',
        example: 'en-us: name',
        'x-position': 11,
      }),
  })
  .openapi({ description: 'Country', required: [] })
  .openapi('Country')

const DurationFieldTypeSchema = z
  .object({ name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('DurationFieldType')

const DurationFieldSchema = z
  .object({
    name: z.string().exactOptional(),
    precise: z.boolean().default(false).exactOptional(),
    supported: z.boolean().default(false).exactOptional(),
    type: DurationFieldTypeSchema.exactOptional(),
    unitMillis: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('DurationField')

const DateTimeFieldTypeSchema = z
  .object({
    durationType: DurationFieldTypeSchema.exactOptional(),
    name: z.string().exactOptional(),
    rangeDurationType: DurationFieldTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DateTimeFieldType')

const DateTimeFieldSchema = z
  .object({
    durationField: DurationFieldSchema.exactOptional(),
    leapDurationField: DurationFieldSchema.exactOptional(),
    lenient: z.boolean().default(false).exactOptional(),
    maximumValue: z.int32().exactOptional(),
    minimumValue: z.int32().exactOptional(),
    name: z.string().exactOptional(),
    rangeDurationField: DurationFieldSchema.exactOptional(),
    supported: z.boolean().default(false).exactOptional(),
    type: DateTimeFieldTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DateTimeField')

const DisplaySettingExtensionSchema = z
  .object({})
  .openapi({ description: "Event's display settings extension" })
  .openapi('DisplaySettingExtension')

const DmaSchema = z
  .object({ id: z.int32().exactOptional().openapi({ description: "DMS's id" }) })
  .openapi({ description: 'DMA (Designated Market Area)', required: [] })
  .openapi('Dma')

const LocalTimeSchema = z
  .object({
    chronology: ChronologySchema.exactOptional(),
    fieldTypes: z.array(DateTimeFieldTypeSchema).exactOptional(),
    fields: z.array(DateTimeFieldSchema).exactOptional(),
    hourOfDay: z.int32().exactOptional(),
    millisOfDay: z.int32().exactOptional(),
    millisOfSecond: z.int32().exactOptional(),
    minuteOfHour: z.int32().exactOptional(),
    secondOfMinute: z.int32().exactOptional(),
    values: z.array(z.int32()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LocalTime')

const EndDatesSchema = z
  .object({
    approximate: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Boolean flag to indicate whether or not the end date is approximated',
        'x-position': 2,
      }),
    dateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The event end date time',
        example: 'yyyy-MM-ddThh-mm-ssZ',
        'x-position': 1,
      }),
    localTime: LocalTimeSchema.exactOptional(),
  })
  .openapi({ description: "Event's End Dates", required: [] })
  .openapi('EndDates')

const EntitlementSchema = z
  .object({
    data: z
      .object({})
      .openapi({
        description: 'The actual entitlements information to add to the entity',
        'x-position': 6,
      }),
    relatedEntityId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the entity to add this extionsion to. If the relatedEntityId is Null, a relatedEntitySource MUST be provided',
        'x-position': 1,
      }),
    relatedEntitySource: SourceSchema.exactOptional(),
    relatedEntityType: z
      .enum(['event', 'venue', 'attraction'])
      .openapi({
        description: 'The type of the entity to add this entitlement to',
        'x-position': 2,
      }),
    source: z
      .literal('ticketmaster')
      .openapi({ description: 'Source of the extension, where it came from' }),
    versionNumber: z
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
        description:
          'Version of the entitlements. Version is to prevent to override an entitlements with an older one',
        'x-position': 5,
      }),
  })
  .openapi({
    description: 'This class defines an entitlement data on the Publish API',
    required: ['data', 'relatedEntityType', 'source'],
  })
  .openapi('Entitlement')

const EntityChangesSchema = z
  .object({
    changes: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    newlyCreated: z.boolean().default(false).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EntityChanges')

const StartDatesSchema = z
  .object({
    dateTBA: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Boolean flag to indicate whether or not the start date is TBA',
        'x-position': 4,
      }),
    dateTBD: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Boolean flag to indicate whether or not the start date is TBD',
        'x-position': 3,
      }),
    dateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The event start datetime',
        example: 'yyyy-MM-ddThh:mm:ssZ',
        'x-position': 2,
      }),
    localDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The event start date in local date', example: 'yyyy-MM-dd' }),
    localTime: LocalTimeSchema.exactOptional(),
    noSpecificTime: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Boolean flag to indicate whether or not the event has no specific time',
        'x-position': 6,
      }),
    timeTBA: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Boolean flag to indicate whether or not the start time is TBA',
        'x-position': 5,
      }),
  })
  .openapi({ description: "Event's Start Dates", required: [] })
  .openapi('StartDates')

const EventStatusSchema = z
  .object({
    code: z
      .enum(['onsale', 'offsale', 'canceled', 'postponed', 'rescheduled'])
      .exactOptional()
      .openapi({ description: "The event's status code" }),
  })
  .openapi({ description: "Event's Status", required: [] })
  .openapi('EventStatus')

const EventDatesSchema = z
  .object({
    access: AccessDatesSchema.exactOptional(),
    end: EndDatesSchema.exactOptional(),
    start: StartDatesSchema.exactOptional(),
    status: EventStatusSchema.exactOptional(),
    timezone: z
      .string()
      .exactOptional()
      .openapi({ description: "Event's timezone", 'x-position': 3 }),
  })
  .openapi({ description: "Event's Dates", required: [] })
  .openapi('EventDates')

const LocationSchema = z
  .object({
    latitude: z.number().exactOptional().openapi({ description: 'Latitude' }),
    longitude: z.number().exactOptional().openapi({ description: 'Longitude' }),
  })
  .openapi({ description: 'Location', required: [] })
  .openapi('Location')

const StateSchema = z
  .object({
    names: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Names of the entity - multi-lingual fields',
        example: 'en-us: name',
        'x-position': 11,
      }),
    stateCode: z.string().exactOptional().openapi({ description: 'State code' }),
  })
  .openapi({ description: 'State', required: [] })
  .openapi('State')

const PlaceSchema = z
  .object({
    address: AddressSchema.exactOptional(),
    area: AreaSchema.exactOptional(),
    city: CitySchema.exactOptional(),
    country: CountrySchema.exactOptional(),
    location: LocationSchema.exactOptional(),
    names: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Names of the entity - multi-lingual fields',
        example: 'en-us: name',
        'x-position': 11,
      }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Postal code / zipcode of the place', 'x-position': 5 }),
    state: StateSchema.exactOptional(),
  })
  .openapi({ description: 'Place', required: [] })
  .openapi('Place')

const PriceRangeSchema = z
  .object({
    currency: z.string().exactOptional().openapi({ description: 'Currency', 'x-position': 1 }),
    max: z.float64().exactOptional().openapi({ description: 'Maximum price', 'x-position': 3 }),
    min: z.float64().exactOptional().openapi({ description: 'Minimum price', 'x-position': 2 }),
    type: z.literal('standard').exactOptional().openapi({ description: 'Type of price' }),
  })
  .openapi({ description: 'PriceRange', required: [] })
  .openapi('PriceRange')

const PromoterSchema = z
  .object({
    descriptions: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Description of the promoter - multi-lingual fields',
        example: 'en-us: description',
        'x-position': 4,
      }),
    id: z.string().exactOptional().openapi({ description: 'Id of the promoter' }),
    names: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Name of the promoter - multi-lingual fields',
        example: 'en-us: name',
        'x-position': 2,
      }),
  })
  .openapi({ description: 'Promoter', required: [] })
  .openapi('Promoter')

const PublicVisibilitySchema = z
  .object({
    endDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The end of the public visibility. The date and time when the event will be public visible',
        'x-position': 1,
      }),
    startDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The start of the public visibility. The date and time when the event will be public visible',
      }),
    visible: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'True if you want to have the event visible in the discovery API',
        'x-position': 2,
      }),
  })
  .openapi({
    description: 'The class defines the public visibility period on the Discovery/Publish API.',
    required: [],
  })
  .openapi('PublicVisibility')

const PresaleSchema = z
  .object({
    descriptions: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Description of the presale - multi-lingual fields',
        example: 'en-us: description',
        'x-position': 2,
      }),
    endDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: "Presale's end dates. The date and time when the presale will end",
        'x-position': 5,
      }),
    names: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Name of the presale - multi-lingual fields',
        example: 'en-us: name',
      }),
    startDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: "Presale's start dates. The date and time when the presale will start",
        'x-position': 4,
      }),
    url: z.string().exactOptional().openapi({ description: 'Presale link URL', 'x-position': 3 }),
  })
  .openapi({ description: "Event's Presale Info", required: [] })
  .openapi('Presale')

const PublicSaleDatesSchema = z
  .object({
    endDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: "Public sale's end dates. The date and time when the public sale will end",
        'x-position': 1,
      }),
    startDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: "Public sale's start dates. The date and time when the public sale will start",
      }),
    startTBD: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: "True if the public sale's date is to be determined",
        'x-position': 2,
      }),
  })
  .openapi({ description: "Event's Public Onsales Dates", required: [] })
  .openapi('PublicSaleDates')

const EventSalesDatesSchema = z
  .object({
    presales: z
      .array(PresaleSchema)
      .exactOptional()
      .openapi({ description: 'Presale information on this event', 'x-position': 1 }),
    public: PublicSaleDatesSchema.exactOptional(),
  })
  .openapi({ description: "Event's Sales Dates", required: [] })
  .openapi('EventSalesDates')

const VenueBoxOfficeInfoSchema = z
  .object({
    acceptedPaymentDetails: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Venue box office accepted payment details - multi-lingual fields',
        example: 'en-us:paymentDetails',
        'x-position': 4,
      }),
    openHoursDetails: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Venue box office opening hours - multi-lingual fields',
        example: 'en-us:openHours',
        'x-position': 2,
      }),
    phoneNumberDetails: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Venue box office phone number - multi-lingual fields',
        example: 'en-us:phoneNumbers',
      }),
    willCallDetails: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Venue box office will call details - multi-lingual fields',
        example: 'en-us:willCall',
        'x-position': 6,
      }),
  })
  .openapi({ description: 'Venue box office information', required: [] })
  .openapi('VenueBoxOfficeInfo')

const VenueGeneralInfoSchema = z
  .object({
    childRules: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Venue children rules - multi-lingual fields',
        example: 'en-us: rule',
        'x-position': 2,
      }),
    generalRules: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Venue general rules - multi-lingual fields',
        example: 'en-us: rule',
      }),
  })
  .openapi({ description: 'Venue general information', required: [] })
  .openapi('VenueGeneralInfo')

const MarketSchema = z
  .object({ id: z.string().exactOptional().openapi({ description: "Market's id" }) })
  .openapi({ description: 'Market', required: [] })
  .openapi('Market')

const TwitterSchema = z
  .object({
    handle: z
      .literal('@a Twitter handle')
      .exactOptional()
      .openapi({ description: 'Twitter handle', example: '@a Twitter handle exampe' }),
    hashtags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Twitter hashtags',
        example: '#hashtag example #hashtag another example',
        'x-position': 1,
      }),
  })
  .openapi({ description: 'Twitter data', required: [] })
  .openapi('Twitter')

const SocialSchema = z
  .object({ twitter: TwitterSchema.exactOptional() })
  .openapi({ description: 'Social networks data', required: [] })
  .openapi('Social')

const VenueSchema = z
  .object({
    accessibleSeatingDetails: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Venue accessible seating details - multi-lingual fields',
        example: 'en-us:seatingDetails',
        'x-position': 34,
      }),
    active: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          "Indicate if the entity is active, inactive entity won't appear in Discovery API",
        'x-position': 95,
      }),
    additionalInfos: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Additional informations of the entity - multi-lingual fields',
        example: 'en-us: additionalInfo',
        'x-position': 23,
      }),
    address: AddressSchema.exactOptional(),
    boxOfficeInfo: VenueBoxOfficeInfoSchema.exactOptional(),
    city: CitySchema.exactOptional(),
    country: CountrySchema.exactOptional(),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Default currency of ticket prices for events in this venue',
        'x-position': 27,
      }),
    descriptions: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Descriptions of the entity - multi-lingual fields',
        example: 'en-us: description',
        'x-position': 21,
      }),
    discoverable: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'True if the entity is dicoverable in discovery API',
        'x-position': 97,
      }),
    distance: z.float64().exactOptional(),
    dma: z
      .array(DmaSchema)
      .exactOptional()
      .openapi({
        description: 'The list of associated DMAs (Designated Market Areas) of the venue',
        'x-position': 29,
      }),
    generalInfo: VenueGeneralInfoSchema.exactOptional(),
    images: z
      .array(ImageSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Images of the entity', 'x-position': 29 }),
    location: LocationSchema.exactOptional(),
    markets: z
      .array(MarketSchema)
      .exactOptional()
      .openapi({ description: 'Markets of the venue', 'x-position': 28 }),
    names: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Names of the entity - multi-lingual fields',
        example: 'en-us: name',
        'x-position': 11,
      }),
    parkingDetails: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Venue parking info - multi-lingual fields',
        example: 'en-us:parkingDetails',
        'x-position': 32,
      }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Postal code / zipcode of the venue', 'x-position': 24 }),
    references: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'References of this entity in an other system. Reference is the exact same entity',
        example: 'sourceName: id',
        'x-position': 71,
      }),
    relationships: z
      .array(RelationshipSchema)
      .exactOptional()
      .openapi({
        description:
          'Relationships on the entity, like if the entity is a duplicate of another one',
        'x-position': 70,
      }),
    social: SocialSchema.exactOptional(),
    source: SourceSchema.exactOptional(),
    state: StateSchema.exactOptional(),
    test: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          "Indicate if this is a test entity, by default test entities won't appear in discovery API",
        'x-position': 96,
      }),
    timezone: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timezone of the venue', 'x-position': 26 }),
    type: z.enum(['event', 'venue', 'attraction']).openapi({ description: 'Type of the entity' }),
    units: z.string().exactOptional(),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of a web site detail page of the entity', 'x-position': 24 }),
    version: z
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
        description:
          'Version of the entity. Version is to avoid updated an entity with an older version',
        'x-position': 80,
      }),
  })
  .openapi({ description: 'Venue', required: ['type'] })
  .openapi('Venue')

const EventSchema = z
  .object({
    active: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          "Indicate if the entity is active, inactive entity won't appear in Discovery API",
        'x-position': 95,
      }),
    additionalInfos: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Additional informations of the entity - multi-lingual fields',
        example: 'en-us: additionalInfo',
        'x-position': 23,
      }),
    attractions: z
      .array(AttractionSchema)
      .exactOptional()
      .openapi({ description: 'Ordered Attraction related to the event', 'x-position': 53 }),
    classifications: z
      .array(ClassificationSchema)
      .exactOptional()
      .openapi({ description: "Event's classifications", 'x-position': 50 }),
    dates: EventDatesSchema.exactOptional(),
    descriptions: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Descriptions of the entity - multi-lingual fields',
        example: 'en-us: description',
        'x-position': 21,
      }),
    discoverable: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'True if the entity is dicoverable in discovery API',
        'x-position': 97,
      }),
    distance: z.float64().exactOptional(),
    images: z
      .array(ImageSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Images of the entity', 'x-position': 29 }),
    infos: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Any information related to the event - multi-lingual fields',
        example: 'en-us: info',
        'x-position': 33,
      }),
    location: LocationSchema.exactOptional(),
    names: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Names of the entity - multi-lingual fields',
        example: 'en-us: name',
        'x-position': 11,
      }),
    place: PlaceSchema.exactOptional(),
    pleaseNotes: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Any notes related to the event - multi-lingual fields',
        example: 'en-us: note',
        'x-position': 35,
      }),
    priceRanges: z
      .array(PriceRangeSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Price ranges of this event', 'x-position': 36 }),
    promoter: PromoterSchema.exactOptional(),
    publicVisibility: PublicVisibilitySchema.exactOptional(),
    references: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'References of this entity in an other system. Reference is the exact same entity',
        example: 'sourceName: id',
        'x-position': 71,
      }),
    relationships: z
      .array(RelationshipSchema)
      .exactOptional()
      .openapi({
        description:
          'Relationships on the entity, like if the entity is a duplicate of another one',
        'x-position': 70,
      }),
    sales: EventSalesDatesSchema.exactOptional(),
    source: SourceSchema.exactOptional(),
    test: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          "Indicate if this is a test entity, by default test entities won't appear in discovery API",
        'x-position': 96,
      }),
    type: z.enum(['event', 'venue', 'attraction']).openapi({ description: 'Type of the entity' }),
    units: z.string().exactOptional(),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of a web site detail page of the entity', 'x-position': 24 }),
    venue: VenueSchema.exactOptional(),
    version: z
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
        description:
          'Version of the entity. Version is to avoid updated an entity with an older version',
        'x-position': 80,
      }),
  })
  .openapi({ description: 'Event', required: ['type'] })
  .openapi('Event')

const EventExtensionsSchema = z
  .object({})
  .openapi({ description: "All Event's extensions" })
  .openapi('EventExtensions')

const ExtensionSchema = z.object({}).openapi('Extension')

const ExtensionDataSchema = z
  .object({
    data: z
      .object({})
      .openapi({ description: 'The actual information to add to the entity', 'x-position': 6 }),
    relatedEntityId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the entity to add this extionsion to. If the relatedEntityId is Null, a relatedEntitySource MUST be provided',
        'x-position': 3,
      }),
    relatedEntitySource: SourceSchema.exactOptional(),
    relatedEntityType: z
      .enum(['event', 'venue', 'attraction'])
      .openapi({
        description: 'The type of the entity to add this extensions to',
        'x-position': 2,
      }),
    source: z.string().openapi({ description: 'Source of the extension, where it came from' }),
    type: z
      .string()
      .openapi({
        description: 'The type of the extension. This represent the data sent',
        'x-position': 1,
      }),
    versionNumber: z
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
        description:
          'Version of the extensions. Version is to prevent to override an extension with an older one',
        'x-position': 5,
      }),
  })
  .openapi({
    description: 'This class defines an extenstion data on the Publish API',
    required: ['data', 'relatedEntityType', 'source', 'type'],
  })
  .openapi('ExtensionData')

const GeometrySchema = z
  .object({ location: LocationSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Geometry')

const GeocodeExtensionSchema = z
  .object({
    city: z.string().exactOptional(),
    country: z.string().exactOptional(),
    county: z.string().exactOptional(),
    formattedAddress: z.string().exactOptional(),
    geometry: GeometrySchema.exactOptional(),
    postalCode: z.string().exactOptional(),
    route: z.string().exactOptional(),
    state: z.string().exactOptional(),
    streetNumber: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GeocodeExtension')

const GeolocationVenueExtensionsSchema = z
  .object({})
  .openapi({ description: "Venue's geocode extension" })
  .openapi('GeolocationVenueExtensions')

const HostExtensionSchema = z
  .object({})
  .openapi({ description: "Venue's Host extension" })
  .openapi('HostExtension')

const IngestionResultSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Id of the entity ingested in the discovery api' }),
    ignoredProperties: z
      .record(z.string(), z.object({}))
      .exactOptional()
      .openapi({
        description: 'List properties that are ignored in the validation',
        'x-position': 5,
      }),
    invalidProperties: z
      .record(z.string(), z.object({}))
      .exactOptional()
      .openapi({ description: 'List of invalid properties', 'x-position': 5 }),
    invalidValues: z
      .record(z.string(), z.object({}))
      .exactOptional()
      .openapi({ description: 'List of invalid values', 'x-position': 5 }),
    missingProperties: z
      .record(z.string(), z.object({}))
      .exactOptional()
      .openapi({
        description:
          'List of properties that should be present in your entity to ease its dicovery',
        'x-position': 4,
      }),
    status: z
      .enum(['Error', 'SuccessWarning', 'Success'])
      .openapi({ description: 'Status of the result', 'x-position': 1 }),
    unknownProperties: z
      .record(z.string(), z.object({}))
      .exactOptional()
      .openapi({ description: 'List of unknown properties that will be dropped', 'x-position': 5 }),
  })
  .openapi({
    description: 'This class defines the IngestionResult on the Publish API',
    required: ['status'],
  })
  .openapi('IngestionResult')

const RegionRestrictionsSchema = z
  .object({
    allowed: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Restrictions based on regions' }),
  })
  .openapi({
    description: 'This class defines an entitlement data on the Publish API',
    required: [],
  })
  .openapi('RegionRestrictions')

const LicensingInformationSchema = z
  .object({
    license: z.string().openapi({ description: 'License name' }),
    regionRestriction: RegionRestrictionsSchema.exactOptional(),
  })
  .openapi({
    description: 'This class defines an entitlement data on the Publish API',
    required: ['license'],
  })
  .openapi('LicensingInformation')

const LocaleSchema = z
  .object({
    country: z.string().exactOptional(),
    displayCountry: z.string().exactOptional(),
    displayLanguage: z.string().exactOptional(),
    displayName: z.string().exactOptional(),
    displayScript: z.string().exactOptional(),
    displayVariant: z.string().exactOptional(),
    extensionKeys: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    iso3Country: z.string().exactOptional(),
    iso3Language: z.string().exactOptional(),
    language: z.string().exactOptional(),
    script: z.string().exactOptional(),
    unicodeLocaleAttributes: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    unicodeLocaleKeys: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    variant: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Locale')

const ParkingSchema = z
  .object({
    names: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Names of the entity - multi-lingual fields',
        example: 'en-us: name',
        'x-position': 11,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Url to the web page of the parking', 'x-position': 20 }),
  })
  .openapi({ description: 'Parking', required: [] })
  .openapi('Parking')

const TatExtensionSchema = z
  .object({})
  .openapi({ description: 'The Attraction Tool (TAT) extension' })
  .openapi('TatExtension')

const TicketmasterAttractionExtensionsSchema = z
  .object({})
  .openapi({ description: "Attraction's extension (ticketmaster source)" })
  .openapi('TicketmasterAttractionExtensions')

const TicketmasterEventExtensionsSchema = z
  .object({})
  .openapi({ description: "Event's extension (ticketmaster source)" })
  .openapi('TicketmasterEventExtensions')

const TicketmasterVenueExtensionsSchema = z
  .object({})
  .openapi({ description: "Venue's extension (ticketmaster source)" })
  .openapi('TicketmasterVenueExtensions')

const VenueExtensionsSchema = z
  .object({})
  .openapi({ description: "All Venue's extensions" })
  .openapi('VenueExtensions')

const VideoSchema = z
  .object({
    embedUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The url of the embeded video', 'x-position': 6 }),
    licensingInformation: LicensingInformationSchema,
    source: SourceSchema,
    url: z.string().openapi({ description: 'The url of the video', 'x-position': 6 }),
  })
  .openapi({
    description: 'This class defines an entitlement data on the Publish API',
    required: ['licensingInformation', 'source', 'url'],
  })
  .openapi('Video')

const AugmentationDataRequestBody = {
  description: 'Patch to apply',
  content: { 'application/json': { schema: AugmentationDataSchema } },
  required: true,
}

const VideoRequestBody = {
  description: 'Video data',
  content: { 'application/json': { schema: VideoSchema } },
  required: true,
}

export const postPublishV2AttractionsRoute = createRoute({
  method: 'post',
  path: '/publish/v2/attractions',
  summary: 'Publish an attractions',
  description: 'Since 1.0.0',
  operationId: 'publishAttraction',
  request: {
    headers: z.object({
      'TMPS-Correlation-Id': z
        .string()
        .default('')
        .openapi({
          param: {
            description: 'Unique correlation id to be able to trace the request in our system',
            in: 'header',
            name: 'TMPS-Correlation-Id',
            required: true,
            schema: { default: '', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attraction',
      content: { 'application/json': { schema: AttractionSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: IngestionResultSchema } },
    },
  },
})

export const patchPublishV2AttractionsIdRoute = createRoute({
  method: 'patch',
  path: '/publish/v2/attractions/{id}',
  summary: 'Publish a patch on an attraction',
  description: 'Since 1.0.0',
  operationId: 'patchAttraction',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the attraction the patch will be applied',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'TMPS-Correlation-Id': z
        .string()
        .default('')
        .openapi({
          param: {
            description: 'Unique correlation id to be able to trace the request in our system',
            in: 'header',
            name: 'TMPS-Correlation-Id',
            required: true,
            schema: { default: '', type: 'string' },
          },
        }),
    }),
    body: AugmentationDataRequestBody,
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: IngestionResultSchema } },
    },
  },
})

export const postPublishV2AttractionsIdVideosRoute = createRoute({
  method: 'post',
  path: '/publish/v2/attractions/{id}/videos',
  summary: 'Publish a video on an attraction',
  description: 'Since 1.0.0',
  operationId: 'publishAttractionVideos',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the attraction the video is linked to',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'TMPS-Correlation-Id': z
        .string()
        .default('')
        .openapi({
          param: {
            description: 'Unique correlation id to be able to trace the request in our system',
            in: 'header',
            name: 'TMPS-Correlation-Id',
            required: true,
            schema: { default: '', type: 'string' },
          },
        }),
    }),
    body: VideoRequestBody,
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: IngestionResultSchema } },
    },
  },
})

export const postPublishV2EntitlementsRoute = createRoute({
  method: 'post',
  path: '/publish/v2/entitlements',
  summary: 'Publish entitlements on an entity',
  description: 'Since 2.0.0',
  operationId: 'publishEntitlements',
  request: {
    headers: z.object({
      'TMPS-Correlation-Id': z
        .string()
        .default('')
        .openapi({
          param: {
            description: 'Unique correlation id to be able to trace the request in our system',
            in: 'header',
            name: 'TMPS-Correlation-Id',
            required: true,
            schema: { default: '', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Entitlements information to add to the entity',
      content: { 'application/json': { schema: EntitlementSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: IngestionResultSchema } },
    },
  },
})

export const postPublishV2EventsRoute = createRoute({
  method: 'post',
  path: '/publish/v2/events',
  summary: 'Publish an event',
  description: 'Since 1.0.0',
  operationId: 'publishEvent',
  request: {
    headers: z.object({
      'TMPS-Correlation-Id': z
        .string()
        .default('')
        .openapi({
          param: {
            description: 'Unique correlation id to be able to trace the request in our system',
            in: 'header',
            name: 'TMPS-Correlation-Id',
            required: true,
            schema: { default: '', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Event',
      content: { 'application/json': { schema: EventSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: IngestionResultSchema } },
    },
  },
})

export const patchPublishV2EventsIdRoute = createRoute({
  method: 'patch',
  path: '/publish/v2/events/{id}',
  summary: 'Publish a patch on an event',
  description: 'Since 1.0.0',
  operationId: 'patchEvent',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the event the patch will be applied',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'TMPS-Correlation-Id': z
        .string()
        .default('')
        .openapi({
          param: {
            description: 'Unique correlation id to be able to trace the request in our system',
            in: 'header',
            name: 'TMPS-Correlation-Id',
            required: true,
            schema: { default: '', type: 'string' },
          },
        }),
    }),
    body: AugmentationDataRequestBody,
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: IngestionResultSchema } },
    },
  },
})

export const postPublishV2EventsIdVideosRoute = createRoute({
  method: 'post',
  path: '/publish/v2/events/{id}/videos',
  summary: 'Publish a video on an event',
  description: 'Since 1.0.0',
  operationId: 'publishEventVideos',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the event the video is linked to',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'TMPS-Correlation-Id': z
        .string()
        .default('')
        .openapi({
          param: {
            description: 'Unique correlation id to be able to trace the request in our system',
            in: 'header',
            name: 'TMPS-Correlation-Id',
            required: true,
            schema: { default: '', type: 'string' },
          },
        }),
    }),
    body: VideoRequestBody,
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: IngestionResultSchema } },
    },
  },
})

export const postPublishV2ExtensionsRoute = createRoute({
  method: 'post',
  path: '/publish/v2/extensions',
  summary: 'Publish extension on an entity',
  description: 'Since 1.0.0',
  operationId: 'publishExtension',
  request: {
    headers: z.object({
      'TMPS-Correlation-Id': z
        .string()
        .default('')
        .openapi({
          param: {
            description: 'Unique correlation id to be able to trace the request in our system',
            in: 'header',
            name: 'TMPS-Correlation-Id',
            required: true,
            schema: { default: '', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Extension information to add to the entity',
      content: { 'application/json': { schema: ExtensionDataSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: IngestionResultSchema } },
    },
  },
})

export const postPublishV2VenuesRoute = createRoute({
  method: 'post',
  path: '/publish/v2/venues',
  summary: 'Publish a venue',
  description: 'Since 1.0.0',
  operationId: 'publishVenue',
  request: {
    headers: z.object({
      'TMPS-Correlation-Id': z
        .string()
        .default('')
        .openapi({
          param: {
            description: 'Unique correlation id to be able to trace the request in our system',
            in: 'header',
            name: 'TMPS-Correlation-Id',
            required: true,
            schema: { default: '', type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Venue',
      content: { 'application/json': { schema: VenueSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: IngestionResultSchema } },
    },
  },
})

export const patchPublishV2VenuesIdRoute = createRoute({
  method: 'patch',
  path: '/publish/v2/venues/{id}',
  summary: 'Publish a patch on a venue',
  description: 'Since 1.0.0',
  operationId: 'patchVenue',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the venue the patch will be applied',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'TMPS-Correlation-Id': z
        .string()
        .default('')
        .openapi({
          param: {
            description: 'Unique correlation id to be able to trace the request in our system',
            in: 'header',
            name: 'TMPS-Correlation-Id',
            required: true,
            schema: { default: '', type: 'string' },
          },
        }),
    }),
    body: AugmentationDataRequestBody,
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: IngestionResultSchema } },
    },
  },
})
