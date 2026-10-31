import { createRoute, z } from '@hono/zod-openapi'

const LocationSchema = z
  .object({
    latitude: z.number().exactOptional().openapi({ description: 'Latitude' }),
    longitude: z.number().exactOptional().openapi({ description: 'Longitude' }),
  })
  .openapi({ description: 'Location', required: [] })
  .openapi('Location')

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
  .object({ geocode: GeocodeExtensionSchema.exactOptional() })
  .openapi({ description: "Venue's geocode extension", required: [] })
  .openapi('GeolocationVenueExtensions')

type VenueExtensionsType = { geolocation?: z.infer<typeof GeolocationVenueExtensionsSchema> }

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

const AccessibilitySchema = z
  .object({
    info: z
      .string()
      .exactOptional()
      .openapi({ description: "Accessibility's information", 'x-position': 1 }),
  })
  .openapi({
    description: 'Additional information for people who experience disabilities',
    required: [],
  })
  .openapi('Accessibility')

const AddressSchema = z
  .object({
    line1: z.string().exactOptional().openapi({ description: 'Address first line' }),
    line2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Address second line', 'x-position': 3 }),
    line3: z
      .string()
      .exactOptional()
      .openapi({ description: 'Address third line', 'x-position': 3 }),
  })
  .openapi({ description: 'Address', required: [] })
  .openapi('Address')

const AreaSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the entity', 'x-position': 10 }),
  })
  .openapi({ description: 'Area', required: [] })
  .openapi('Area')

const LevelSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: "The ID of the classification's level" }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "The Name of the classification's level", 'x-position': 1 }),
  })
  .openapi({ required: [] })
  .openapi('Level')

const SegmentSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: "The ID of the classification's level" }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "The Name of the classification's level", 'x-position': 1 }),
  })
  .openapi({ description: 'Segment', required: [] })
  .openapi('Segment')

const ClassificationSchema = z
  .object({
    genre: LevelSchema.exactOptional(),
    primary: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: "True if this is the entity's primary classification" }),
    segment: SegmentSchema.exactOptional(),
    subGenre: LevelSchema.exactOptional(),
    subType: LevelSchema.exactOptional(),
    type: LevelSchema.exactOptional(),
  })
  .openapi({ description: 'Classification', required: [] })
  .openapi('Classification')

const ExternalLinkSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An external link id is the unique identifier of a resource on a different domain or api',
        'x-position': 2,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An external link url is a url that goes to a different domain or api',
        'x-position': 2,
      }),
  })
  .openapi({ description: 'ExternalLink', required: [] })
  .openapi('ExternalLink')

const ImageSchema = z
  .object({
    attribution: z
      .string()
      .exactOptional()
      .openapi({ description: 'Attribution of the image', 'x-position': 8 }),
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

const AttractionSchema = z
  .object({
    additionalInfo: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional information of the entity', 'x-position': 22 }),
    classifications: z
      .array(ClassificationSchema)
      .exactOptional()
      .openapi({ description: "Attraction's classifications", 'x-position': 30 }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: "Description's of the entity", 'x-position': 20 }),
    externalLinks: z
      .record(z.string(), z.array(ExternalLinkSchema))
      .exactOptional()
      .openapi({ description: 'List of external links', 'x-position': 79 }),
    id: z
      .string()
      .openapi({ description: 'Unique id of the entity in the discovery API', 'x-position': 1 }),
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
    locale: z
      .string()
      .exactOptional()
      .openapi({ description: 'Locale in which the content is returned', 'x-position': 3 }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the entity', 'x-position': 10 }),
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
    upcomingEvents: z
      .record(z.string(), z.int32())
      .exactOptional()
      .openapi({ description: 'number of upcoming events', 'x-position': 110 }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of a web site detail page of the entity', 'x-position': 24 }),
  })
  .openapi({ description: 'Attraction', required: ['id', 'type'] })
  .openapi('Attraction')

const AttractionExtensionsSchema = z
  .object({})
  .openapi({ description: "All Attraction's extensions" })
  .openapi('AttractionExtensions')

const AttributionSchema = z
  .object({
    licenceName: z.string().exactOptional().openapi({ description: 'LicenceName' }),
    licenceUrl: z.string().exactOptional().openapi({ description: 'LicenceUrl' }),
    sourceName: z.string().exactOptional().openapi({ description: 'SourceName' }),
    sourceUrl: z.string().exactOptional().openapi({ description: 'SourceUrl' }),
  })
  .openapi({ description: 'Attribution', required: [] })
  .openapi('Attribution')

const AttributionsSchema = z
  .object({
    description: AttributionSchema.exactOptional(),
    descriptions: z
      .record(z.string(), AttributionSchema)
      .exactOptional()
      .openapi({ description: 'Attribution descriptions - multi-lingual fields' }),
  })
  .openapi({ description: 'Attributions', required: [] })
  .openapi('Attributions')

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
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the entity', 'x-position': 10 }),
  })
  .openapi({ description: 'City', required: [] })
  .openapi('City')

const CountrySchema = z
  .object({
    countryCode: z.string().exactOptional().openapi({ description: 'Country code (ISO 3166)' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the entity', 'x-position': 10 }),
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
  .object({
    softLanding: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: "True the landing is Soft otherwise it's Comingled" }),
  })
  .openapi({ description: "Event's display settings extension", required: [] })
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
        'x-position': 3,
      }),
    dateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The event end date time',
        example: 'yyyy-MM-ddThh-mm-ssZ',
        'x-position': 2,
      }),
    localDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The event end date in local date', example: 'yyyy-MM-dd' }),
    localTime: LocalTimeSchema.exactOptional(),
    noSpecificTime: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Boolean flag to indicate whether or not the event end time has no specific time',
        'x-position': 4,
      }),
  })
  .openapi({ description: "Event's End Dates", required: [] })
  .openapi('EndDates')

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
        description:
          'Boolean flag to indicate whether or not the event start time has no specific time',
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
    spanMultipleDays: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Flag indicating if date spans of multiple days', 'x-position': 5 }),
    start: StartDatesSchema.exactOptional(),
    status: EventStatusSchema.exactOptional(),
    timezone: z
      .string()
      .exactOptional()
      .openapi({ description: "Event's timezone", 'x-position': 3 }),
  })
  .openapi({ description: "Event's Dates", required: [] })
  .openapi('EventDates')

const OutletSchema = z
  .object({
    type: z.string().exactOptional().openapi({ description: "Outlet's type", 'x-position': 2 }),
    url: z.string().exactOptional().openapi({ description: "Outlet's url", 'x-position': 1 }),
  })
  .openapi({ description: 'A selling point for tickets.', required: [] })
  .openapi('Outlet')

const StateSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the entity', 'x-position': 10 }),
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
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the entity', 'x-position': 10 }),
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

const ProductSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: "Product's primary id", 'x-position': 10 }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the entity', 'x-position': 10 }),
    type: z.string().exactOptional().openapi({ description: "Product's type", 'x-position': 13 }),
    url: z.string().exactOptional().openapi({ description: "Product's url", 'x-position': 12 }),
  })
  .openapi({ description: 'Product', required: [] })
  .openapi('Product')

const PromoterSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the promoter', 'x-position': 3 }),
    id: z.string().exactOptional().openapi({ description: 'Id of the promoter' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the promoter', 'x-position': 1 }),
  })
  .openapi({ description: 'Promoter', required: [] })
  .openapi('Promoter')

const PresaleSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the presame', 'x-position': 1 }),
    endDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: "Presale's end dates. The date and time when the presale will end",
        'x-position': 5,
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of the presale' }),
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

const SeatMapSchema = z
  .object({
    staticUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Static Seatmap Url', 'x-position': 3 }),
  })
  .openapi({ description: 'Seatmap', required: [] })
  .openapi('SeatMap')

const EventSchema = z
  .object({
    accessibility: AccessibilitySchema.exactOptional(),
    additionalInfo: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional information of the entity', 'x-position': 22 }),
    classifications: z
      .array(ClassificationSchema)
      .exactOptional()
      .openapi({ description: "Event's classifications", 'x-position': 50 }),
    dates: EventDatesSchema.exactOptional(),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: "Description's of the entity", 'x-position': 20 }),
    distance: z.float64().exactOptional(),
    externalLinks: z
      .record(z.string(), z.array(ExternalLinkSchema))
      .exactOptional()
      .openapi({ description: 'List of external links', 'x-position': 79 }),
    id: z
      .string()
      .openapi({ description: 'Unique id of the entity in the discovery API', 'x-position': 1 }),
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
    info: z
      .string()
      .exactOptional()
      .openapi({ description: 'Any information related to the event', 'x-position': 32 }),
    locale: z
      .string()
      .exactOptional()
      .openapi({ description: 'Locale in which the content is returned', 'x-position': 3 }),
    location: LocationSchema.exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the entity', 'x-position': 10 }),
    outlets: z
      .array(OutletSchema)
      .exactOptional()
      .openapi({ description: 'Related outlets informations', 'x-position': 37 }),
    place: PlaceSchema.exactOptional(),
    pleaseNote: z
      .string()
      .exactOptional()
      .openapi({ description: 'Any notes related to the event', 'x-position': 34 }),
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
    products: z
      .array(ProductSchema)
      .exactOptional()
      .openapi({ description: 'Related products informations', 'x-position': 38 }),
    promoter: PromoterSchema.exactOptional(),
    promoters: z
      .array(PromoterSchema)
      .exactOptional()
      .openapi({ description: "Event's promoters", 'x-position': 37 }),
    sales: EventSalesDatesSchema.exactOptional(),
    seatmap: SeatMapSchema.exactOptional(),
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
  })
  .openapi({ description: 'Event', required: ['id', 'type'] })
  .openapi('Event')

const EventExtensionsSchema = z
  .object({})
  .openapi({ description: "All Event's extensions" })
  .openapi('EventExtensions')

const EventImagesSchema = z
  .object({
    id: z
      .string()
      .openapi({ description: 'Unique id of the entity in the discovery API', 'x-position': 1 }),
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
      .openapi({ description: 'Images of the entity', 'x-position': 2 }),
    type: z.literal('event').openapi({ description: 'Type of the entity' }),
  })
  .openapi({
    description: 'This class defines an Event with only images view on the Discovery API',
    required: ['id', 'type'],
  })
  .openapi('EventImages')

const ExtensionSchema = z.object({}).openapi('Extension')

const GenreSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: "The ID of the classification's level" }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "The Name of the classification's level", 'x-position': 1 }),
  })
  .openapi({ description: 'Secondary Genre', required: [] })
  .openapi('Genre')

const HostExtensionSchema = z
  .object({})
  .openapi({ description: "Event's Host extension" })
  .openapi('HostExtension')

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

const MarketSchema = z
  .object({ id: z.string().exactOptional().openapi({ description: "Market's id" }) })
  .openapi({ description: 'Market', required: [] })
  .openapi('Market')

const ParkingSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the entity', 'x-position': 10 }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Url to the web page of the parking', 'x-position': 20 }),
  })
  .openapi({ description: 'Parking', required: [] })
  .openapi('Parking')

const PublicVisibilitySchema = z
  .object({})
  .openapi({
    description: 'The class defines the public visibility period on the Discovery/Publish API.',
  })
  .openapi('PublicVisibility')

const RelationshipSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the related entity', 'x-position': 2 }),
    references: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'References of this relationship in another system. Reference is the exact same entity',
        example: 'sourceName: id',
        'x-position': 3,
      }),
    source: z
      .string()
      .exactOptional()
      .openapi({ description: 'The source name of the related entity', 'x-position': 1 }),
    type: z
      .literal('duplicate')
      .exactOptional()
      .openapi({ description: 'The type of the relationship' }),
  })
  .openapi({ description: 'Relationship', required: [] })
  .openapi('Relationship')

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

const SourceSchema = z.object({}).openapi({ description: 'Source' }).openapi('Source')

const TatExtensionSchema = z
  .object({})
  .openapi({ description: 'The Attraction Tool (TAT) extension' })
  .openapi('TatExtension')

const TicketmasterAttractionExtensionsSchema = z
  .object({})
  .openapi({ description: "Attraction's extension (ticketmaster source)" })
  .openapi('TicketmasterAttractionExtensions')

const TicketmasterEventExtensionsSchema = z
  .object({ displaySettings: DisplaySettingExtensionSchema.exactOptional() })
  .openapi({ description: "Event's extension (ticketmaster source)", required: [] })
  .openapi('TicketmasterEventExtensions')

const TicketmasterVenueExtensionsSchema = z
  .object({})
  .openapi({ description: "Venue's extension (ticketmaster source)" })
  .openapi('TicketmasterVenueExtensions')

const VenueBoxOfficeInfoSchema = z
  .object({
    acceptedPaymentDetail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Venue box office accepted payment details', 'x-position': 5 }),
    openHoursDetail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Venue box office opening hours', 'x-position': 3 }),
    phoneNumberDetail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Venue box office phone number', 'x-position': 1 }),
    willCallDetail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Venue box office will call details', 'x-position': 7 }),
  })
  .openapi({ description: 'Venue box office information', required: [] })
  .openapi('VenueBoxOfficeInfo')

const VenueGeneralInfoSchema = z
  .object({
    childRule: z
      .string()
      .exactOptional()
      .openapi({ description: 'Venue children rule', 'x-position': 3 }),
    generalRule: z
      .string()
      .exactOptional()
      .openapi({ description: 'Venue general rules', 'x-position': 1 }),
  })
  .openapi({ description: 'Venue general information', required: [] })
  .openapi('VenueGeneralInfo')

const VenueSchema = z
  .object({
    accessibleSeatingDetail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Venue accessible seating detail', 'x-position': 35 }),
    additionalInfo: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional information of the entity', 'x-position': 22 }),
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
    description: z
      .string()
      .exactOptional()
      .openapi({ description: "Description's of the entity", 'x-position': 20 }),
    distance: z.float64().exactOptional(),
    dma: z
      .array(DmaSchema)
      .exactOptional()
      .openapi({
        description: 'The list of associated DMAs (Designated Market Areas) of the venue',
        'x-position': 29,
      }),
    externalLinks: z
      .record(z.string(), z.array(ExternalLinkSchema))
      .exactOptional()
      .openapi({ description: 'List of external links', 'x-position': 79 }),
    generalInfo: VenueGeneralInfoSchema.exactOptional(),
    id: z
      .string()
      .openapi({ description: 'Unique id of the entity in the discovery API', 'x-position': 1 }),
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
    locale: z
      .string()
      .exactOptional()
      .openapi({ description: 'Locale in which the content is returned', 'x-position': 3 }),
    location: LocationSchema.exactOptional(),
    markets: z
      .array(MarketSchema)
      .exactOptional()
      .openapi({ description: 'Markets of the venue', 'x-position': 28 }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the entity', 'x-position': 10 }),
    parkingDetail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Venue parking info', 'x-position': 33 }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Postal code / zipcode of the venue', 'x-position': 24 }),
    social: SocialSchema.exactOptional(),
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
    upcomingEvents: z
      .record(z.string(), z.int32())
      .exactOptional()
      .openapi({ description: 'number of upcoming events', 'x-position': 110 }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of a web site detail page of the entity', 'x-position': 24 }),
  })
  .openapi({ description: 'Venue', required: ['id', 'type'] })
  .openapi('Venue')

const VenueExtensionsSchema: z.ZodType<VenueExtensionsType> = z
  .lazy(() =>
    z
      .object({ geolocation: GeolocationVenueExtensionsSchema.exactOptional() })
      .openapi({ description: "All Venue's extensions", required: [] }),
  )
  .openapi('VenueExtensions')

export const getDiscoveryV2AttractionsRoute = createRoute({
  method: 'get',
  path: '/discovery/v2/attractions',
  summary: 'Attraction Search',
  description:
    'Find attractions (artists, sports, packages, plays and so on) and filter your search by name, and much more.',
  operationId: 'find',
  request: {
    query: z.object({
      sort: z
        .string()
        .regex(/^(name|relevance),(asc|desc)$/)
        .default('relevance,desc')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Sorting order of the search result. Allowable Values : 'name,asc', 'name,desc', 'relevance,asc', 'relevance,desc'",
            example: '',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              default: 'relevance,desc',
              pattern: '^(name|relevance),(asc|desc)$',
              type: 'string',
            },
          },
        }),
      classificationName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.any()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter attractions by classification name: name of any segment, genre, sub-genre, type, sub-type',
            example: '',
            explode: true,
            in: 'query',
            name: 'classificationName',
            required: false,
            schema: { default: '', items: {}, type: 'array' },
          },
          default: '',
        }),
      classificationId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.any()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter attractions by classification id: id of any segment, genre, sub-genre, type, sub-type',
            example: '',
            explode: true,
            in: 'query',
            name: 'classificationId',
            required: false,
            schema: { default: '', items: {}, type: 'array' },
          },
          default: '',
        }),
      keyword: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Keyword to search on',
            example: '',
            in: 'query',
            name: 'keyword',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      id: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter entities by its id',
            example: '',
            in: 'query',
            name: 'id',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      source: z
        .enum(['ticketmaster', ' universe', ' frontgate', ' tmr'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter entities by its source name',
            example: '',
            in: 'query',
            name: 'source',
            required: false,
            schema: {
              default: '',
              enum: ['ticketmaster', ' universe', ' frontgate', ' tmr'],
              type: 'string',
            },
          },
          default: '',
        }),
      includeTest: z
        .enum(['yes', ' no', ' only'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'True if you want to have entities flag as test in the response. Only, if you only wanted test entities',
            example: '',
            in: 'query',
            name: 'includeTest',
            required: false,
            schema: {
              default: 'no',
              enum: ['yes', ' no', ' only'],
              pattern: '^\\s*|yes|no|only$',
              type: 'string',
            },
          },
          default: 'no',
        }),
      page: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            example: '',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: '0', minimum: 0, type: 'string' },
          },
        }),
      size: z
        .string()
        .default('20')
        .exactOptional()
        .openapi({
          param: {
            description: 'Page size of the response',
            example: '',
            in: 'query',
            name: 'size',
            required: false,
            schema: { default: '20', maximum: 500, minimum: 1, type: 'string' },
          },
        }),
      locale: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            example: 'en-us,en,fr',
            in: 'query',
            name: 'locale',
            required: false,
            schema: { default: 'en', type: 'string' },
          },
        }),
      includeLicensedContent: z
        .enum(['yes', ' no'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Yes if you want to display licensed content',
            example: '',
            in: 'query',
            name: 'includeLicensedContent',
            required: false,
            schema: {
              default: 'no',
              enum: ['yes', ' no'],
              pattern: '^\\s*|yes|no$',
              type: 'string',
            },
          },
          default: 'no',
        }),
      includeSpellcheck: z
        .enum(['yes', ' no'])
        .exactOptional()
        .openapi({
          param: {
            description: 'yes, to include spell check suggestions in the response.',
            example: '',
            in: 'query',
            name: 'includeSpellcheck',
            required: false,
            schema: {
              default: 'no',
              enum: ['yes', ' no'],
              pattern: '^\\s*|yes|no',
              type: 'string',
            },
          },
          default: 'no',
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: z.array(AttractionSchema) } },
    },
  },
})

export const getDiscoveryV2AttractionsIdRoute = createRoute({
  method: 'get',
  path: '/discovery/v2/attractions/{id}',
  summary: 'Get Attraction Details',
  description:
    'Get details for a specific attraction using the unique identifier for the attraction.',
  operationId: 'get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the attraction',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      locale: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            example: 'en-us,en,fr',
            in: 'query',
            name: 'locale',
            required: false,
            schema: { default: 'en', type: 'string' },
          },
        }),
      includeLicensedContent: z
        .enum(['yes', ' no'])
        .exactOptional()
        .openapi({
          param: {
            description: 'True if you want to display licensed content',
            example: '',
            in: 'query',
            name: 'includeLicensedContent',
            required: false,
            schema: {
              default: 'no',
              enum: ['yes', ' no'],
              pattern: '^\\s*|yes|no$',
              type: 'string',
            },
          },
          default: 'no',
        }),
    }),
  },
  responses: {
    200: { description: 'successful operation', content: { '*/*': { schema: AttractionSchema } } },
  },
})

export const getDiscoveryV2ClassificationsRoute = createRoute({
  method: 'get',
  path: '/discovery/v2/classifications',
  summary: 'Classification Search',
  description:
    'Find classifications and filter your search by name, and much more. Classifications help define the nature of attractions and events.',
  request: {
    query: z.object({
      sort: z
        .string()
        .regex(/^name,asc|name,desc$/)
        .default('name,asc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting order of the search result',
            example: '',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { default: 'name,asc', pattern: '^name,asc|name,desc$', type: 'string' },
          },
        }),
      keyword: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Keyword to search on',
            example: '',
            in: 'query',
            name: 'keyword',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      id: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter entities by its id',
            example: '',
            in: 'query',
            name: 'id',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      source: z
        .enum(['ticketmaster', ' universe', ' frontgate', ' tmr'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter entities by its source name',
            example: '',
            in: 'query',
            name: 'source',
            required: false,
            schema: {
              default: '',
              enum: ['ticketmaster', ' universe', ' frontgate', ' tmr'],
              type: 'string',
            },
          },
          default: '',
        }),
      includeTest: z
        .enum(['yes', ' no', ' only'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'True if you want to have entities flag as test in the response. Only, if you only wanted test entities',
            example: '',
            in: 'query',
            name: 'includeTest',
            required: false,
            schema: {
              default: 'no',
              enum: ['yes', ' no', ' only'],
              pattern: '^\\s*|yes|no|only$',
              type: 'string',
            },
          },
          default: 'no',
        }),
      page: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            example: '',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: '0', minimum: 0, type: 'string' },
          },
        }),
      size: z
        .string()
        .default('20')
        .exactOptional()
        .openapi({
          param: {
            description: 'Page size of the response',
            example: '',
            in: 'query',
            name: 'size',
            required: false,
            schema: { default: '20', maximum: 500, minimum: 1, type: 'string' },
          },
        }),
      locale: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            example: 'en-us,en,fr',
            in: 'query',
            name: 'locale',
            required: false,
            schema: { default: 'en', type: 'string' },
          },
        }),
      includeLicensedContent: z
        .enum(['yes', ' no'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Yes if you want to display licensed content',
            example: '',
            in: 'query',
            name: 'includeLicensedContent',
            required: false,
            schema: {
              default: 'no',
              enum: ['yes', ' no'],
              pattern: '^\\s*|yes|no$',
              type: 'string',
            },
          },
          default: 'no',
        }),
      includeSpellcheck: z
        .enum(['yes', ' no'])
        .exactOptional()
        .openapi({
          param: {
            description: 'yes, to include spell check suggestions in the response.',
            example: '',
            in: 'query',
            name: 'includeSpellcheck',
            required: false,
            schema: {
              default: 'no',
              enum: ['yes', ' no'],
              pattern: '^\\s*|yes|no',
              type: 'string',
            },
          },
          default: 'no',
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: z.array(ClassificationSchema) } },
    },
  },
})

export const getDiscoveryV2ClassificationsGenresIdRoute = createRoute({
  method: 'get',
  path: '/discovery/v2/classifications/genres/{id}',
  summary: 'Get Genre Details',
  description: 'Get details for a specific genre using its unique identifier.',
  operationId: 'getGenre',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the genre',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      locale: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            example: 'en-us,en,fr',
            in: 'query',
            name: 'locale',
            required: false,
            schema: { default: 'en', type: 'string' },
          },
        }),
      includeLicensedContent: z
        .enum(['yes', ' no'])
        .exactOptional()
        .openapi({
          param: {
            description: 'True if you want to display licensed content',
            example: '',
            in: 'query',
            name: 'includeLicensedContent',
            required: false,
            schema: {
              default: 'no',
              enum: ['yes', ' no'],
              pattern: '^\\s*|yes|no$',
              type: 'string',
            },
          },
          default: 'no',
        }),
    }),
  },
  responses: {
    200: { description: 'successful operation', content: { '*/*': { schema: GenreSchema } } },
  },
})

export const getDiscoveryV2ClassificationsSegmentsIdRoute = createRoute({
  method: 'get',
  path: '/discovery/v2/classifications/segments/{id}',
  summary: 'Get Segment Details',
  description: 'Get details for a specific segment using its unique identifier.',
  operationId: 'getSegment',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the segment',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      locale: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            example: 'en-us,en,fr',
            in: 'query',
            name: 'locale',
            required: false,
            schema: { default: 'en', type: 'string' },
          },
        }),
      includeLicensedContent: z
        .enum(['yes', ' no'])
        .exactOptional()
        .openapi({
          param: {
            description: 'True if you want to display licensed content',
            example: '',
            in: 'query',
            name: 'includeLicensedContent',
            required: false,
            schema: {
              default: 'no',
              enum: ['yes', ' no'],
              pattern: '^\\s*|yes|no$',
              type: 'string',
            },
          },
          default: 'no',
        }),
    }),
  },
  responses: {
    200: { description: 'successful operation', content: { '*/*': { schema: SegmentSchema } } },
  },
})

export const getDiscoveryV2ClassificationsSubgenresIdRoute = createRoute({
  method: 'get',
  path: '/discovery/v2/classifications/subgenres/{id}',
  summary: 'Get Sub-Genre Details',
  description: 'Get details for a specific sub-genre using its unique identifier.',
  operationId: 'getSubgenre',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the subgenre',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      locale: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            example: 'en-us,en,fr',
            in: 'query',
            name: 'locale',
            required: false,
            schema: { default: 'en', type: 'string' },
          },
        }),
      includeLicensedContent: z
        .enum(['yes', ' no'])
        .exactOptional()
        .openapi({
          param: {
            description: 'True if you want to display licensed content',
            example: '',
            in: 'query',
            name: 'includeLicensedContent',
            required: false,
            schema: {
              default: 'no',
              enum: ['yes', ' no'],
              pattern: '^\\s*|yes|no$',
              type: 'string',
            },
          },
          default: 'no',
        }),
    }),
  },
  responses: {
    200: { description: 'successful operation', content: { '*/*': { schema: LevelSchema } } },
  },
})

export const getDiscoveryV2ClassificationsIdRoute = createRoute({
  method: 'get',
  path: '/discovery/v2/classifications/{id}',
  summary: 'Get Classification Details',
  description:
    'Get details for a specific segment, genre, or sub-genre using its unique identifier.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the segment, genre, or sub-genre',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      locale: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            example: 'en-us,en,fr',
            in: 'query',
            name: 'locale',
            required: false,
            schema: { default: 'en', type: 'string' },
          },
        }),
      includeLicensedContent: z
        .enum(['yes', ' no'])
        .exactOptional()
        .openapi({
          param: {
            description: 'True if you want to display licensed content',
            example: '',
            in: 'query',
            name: 'includeLicensedContent',
            required: false,
            schema: {
              default: 'no',
              enum: ['yes', ' no'],
              pattern: '^\\s*|yes|no$',
              type: 'string',
            },
          },
          default: 'no',
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: ClassificationSchema } },
    },
  },
})

export const getDiscoveryV2EventsRoute = createRoute({
  method: 'get',
  path: '/discovery/v2/events',
  summary: 'Event Search',
  description: 'Find events and filter your search by location, date, availability, and much more.',
  request: {
    query: z.object({
      sort: z
        .string()
        .regex(
          /^((name|date|relevance|name,date|date,name),(asc|desc))|(distance,asc)|(onSaleStartDate,asc)|(id,asc)$/,
        )
        .default('relevance,desc')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Sorting order of the search result. Allowable values : 'name,asc', 'name,desc', 'date,asc', 'date,desc', 'relevance,asc', 'relevance,desc', 'distance,asc', 'name,date,asc', 'name,date,desc', 'date,name,asc', 'date,name,desc','onsaleStartDate,asc', 'id,asc'",
            example: '',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              default: 'relevance,desc',
              pattern:
                '^((name|date|relevance|name,date|date,name),(asc|desc))|(distance,asc)|(onSaleStartDate,asc)|(id,asc)$',
              type: 'string',
            },
          },
        }),
      startDateTime: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter events with a start date after this date',
            example: '',
            in: 'query',
            name: 'startDateTime',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      endDateTime: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter events with a start date before this date',
            example: '',
            in: 'query',
            name: 'endDateTime',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      onsaleStartDateTime: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter events with onsale start date after this date',
            example: '',
            in: 'query',
            name: 'onsaleStartDateTime',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      onsaleOnStartDate: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter events with onsale start date on this date',
            example: '',
            in: 'query',
            name: 'onsaleOnStartDate',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      onsaleOnAfterStartDate: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter events with onsale range within this date',
            example: '',
            in: 'query',
            name: 'onsaleOnAfterStartDate',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      onsaleEndDateTime: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter events with onsale end date before this date',
            example: '',
            in: 'query',
            name: 'onsaleEndDateTime',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      city: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter events by city',
            example: '',
            in: 'query',
            name: 'city',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      countryCode: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter events by country code',
            example: '',
            in: 'query',
            name: 'countryCode',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      stateCode: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter events by state code',
            example: '',
            in: 'query',
            name: 'stateCode',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      postalCode: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter events by postal code / zipcode',
            example: '',
            in: 'query',
            name: 'postalCode',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      venueId: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter events by venue id',
            example: '',
            in: 'query',
            name: 'venueId',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      attractionId: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter events by attraction id',
            example: '',
            in: 'query',
            name: 'attractionId',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      segmentId: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter events by segment id',
            example: '',
            in: 'query',
            name: 'segmentId',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      segmentName: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter events by segment name',
            example: '',
            in: 'query',
            name: 'segmentName',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      classificationName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.any()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter events by classification name: name of any segment, genre, sub-genre, type, sub-type',
            example: '',
            explode: true,
            in: 'query',
            name: 'classificationName',
            required: false,
            schema: { default: '', items: {}, type: 'array' },
          },
          default: '',
        }),
      classificationId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.any()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter events by classification id: id of any segment, genre, sub-genre, type, sub-type',
            example: '',
            explode: true,
            in: 'query',
            name: 'classificationId',
            required: false,
            schema: { default: '', items: {}, type: 'array' },
          },
          default: '',
        }),
      marketId: z
        .string()
        .regex(/^\s*$|^(\d+(,\d+)*)?$/)
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter events by market id',
            example: '',
            in: 'query',
            name: 'marketId',
            required: false,
            schema: { default: '', pattern: '^\\s*$|^(\\d+(,\\d+)*)?$', type: 'string' },
          },
        }),
      promoterId: z
        .string()
        .regex(/^\s*$|^(\d+(,\d+)*)?$/)
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter events by promoter id',
            example: '',
            in: 'query',
            name: 'promoterId',
            required: false,
            schema: { default: '', pattern: '^\\s*$|^(\\d+(,\\d+)*)?$', type: 'string' },
          },
        }),
      dmaId: z
        .string()
        .regex(/^\s*$|^(\d+(,\d+)*)?$/)
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter events by dma id',
            example: '',
            in: 'query',
            name: 'dmaId',
            required: false,
            schema: { default: '', pattern: '^\\s*$|^(\\d+(,\\d+)*)?$', type: 'string' },
          },
        }),
      includeTBA: z
        .enum(['yes', ' no', ' only'])
        .exactOptional()
        .openapi({
          param: {
            description: 'True, to include events with date to be announce (TBA)',
            example: '',
            in: 'query',
            name: 'includeTBA',
            required: false,
            schema: {
              default: 'no if date parameter sent, yes otherwise',
              enum: ['yes', ' no', ' only'],
              pattern: '^\\s*|yes|no|only$',
              type: 'string',
            },
          },
          default: 'no if date parameter sent, yes otherwise',
        }),
      includeTBD: z
        .enum(['yes', ' no', ' only'])
        .exactOptional()
        .openapi({
          param: {
            description: 'True, to include event with a date to be defined (TBD)',
            example: '',
            in: 'query',
            name: 'includeTBD',
            required: false,
            schema: {
              default: 'no if date parameter sent, yes otherwise',
              enum: ['yes', ' no', ' only'],
              pattern: '^\\s*|yes|no|only$',
              type: 'string',
            },
          },
          default: 'no if date parameter sent, yes otherwise',
        }),
      clientVisibility: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter events by clientName',
            example: '',
            in: 'query',
            name: 'clientVisibility',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      latlong: z
        .string()
        .regex(
          /^\s*$|^-?(90(\.0+)?|[0-8]?[0-9](\.\d+)?),-?(180(\.0+)?|(1[0-7][0-9]|\d{1,2})(\.\d+)?)$/,
        )
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter events by latitude and longitude, this filter is deprecated and maybe removed in a future release, please use geoPoint instead',
            example: '33.80003000,-117.88304300',
            in: 'query',
            name: 'latlong',
            required: false,
            schema: {
              default: '',
              pattern:
                '^\\s*$|^-?(90(\\.0+)?|[0-8]?[0-9](\\.\\d+)?),-?(180(\\.0+)?|(1[0-7][0-9]|\\d{1,2})(\\.\\d+)?)$',
              type: 'string',
            },
          },
        }),
      radius: z
        .string()
        .regex(/^\s*$|^0*1?\d{1,4}$/)
        .default('50')
        .exactOptional()
        .openapi({
          param: {
            description: 'Radius of the area in which we want to search for events.',
            example: '',
            in: 'query',
            name: 'radius',
            required: false,
            schema: { default: '50', pattern: '^\\s*$|^0*1?\\d{1,4}$', type: 'string' },
          },
        }),
      unit: z
        .enum(['miles', 'km'])
        .default('miles')
        .exactOptional()
        .openapi({
          param: {
            description: 'Unit of the radius',
            example: '',
            in: 'query',
            name: 'unit',
            required: false,
            schema: {
              default: 'miles',
              enum: ['miles', 'km'],
              pattern: '^\\s*|miles|km$',
              type: 'string',
            },
          },
        }),
      geoPoint: z
        .string()
        .regex(
          /^\s*$|^-?(90(\.0+)?|[0-8]?[0-9](\.\d+)?),-?(180(\.0+)?|(1[0-7][0-9]|\d{1,2})(\.\d+)?)$|^[a-zA-Z0-9]{1,9}$/,
        )
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'filter events by geoHash',
            example: 'dr5rh',
            in: 'query',
            name: 'geoPoint',
            required: false,
            schema: {
              default: '',
              pattern:
                '^\\s*$|^-?(90(\\.0+)?|[0-8]?[0-9](\\.\\d+)?),-?(180(\\.0+)?|(1[0-7][0-9]|\\d{1,2})(\\.\\d+)?)$|^[a-zA-Z0-9]{1,9}$',
              type: 'string',
            },
          },
        }),
      keyword: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Keyword to search on',
            example: '',
            in: 'query',
            name: 'keyword',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      id: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter entities by its id',
            example: '',
            in: 'query',
            name: 'id',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      source: z
        .enum(['ticketmaster', ' universe', ' frontgate', ' tmr'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter entities by its source name',
            example: '',
            in: 'query',
            name: 'source',
            required: false,
            schema: {
              default: '',
              enum: ['ticketmaster', ' universe', ' frontgate', ' tmr'],
              type: 'string',
            },
          },
          default: '',
        }),
      includeTest: z
        .enum(['yes', ' no', ' only'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'True if you want to have entities flag as test in the response. Only, if you only wanted test entities',
            example: '',
            in: 'query',
            name: 'includeTest',
            required: false,
            schema: {
              default: 'no',
              enum: ['yes', ' no', ' only'],
              pattern: '^\\s*|yes|no|only$',
              type: 'string',
            },
          },
          default: 'no',
        }),
      page: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            example: '',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: '0', minimum: 0, type: 'string' },
          },
        }),
      size: z
        .string()
        .default('20')
        .exactOptional()
        .openapi({
          param: {
            description: 'Page size of the response',
            example: '',
            in: 'query',
            name: 'size',
            required: false,
            schema: { default: '20', maximum: 500, minimum: 1, type: 'string' },
          },
        }),
      locale: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            example: 'en-us,en,fr',
            in: 'query',
            name: 'locale',
            required: false,
            schema: { default: 'en', type: 'string' },
          },
        }),
      includeLicensedContent: z
        .enum(['yes', ' no'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Yes if you want to display licensed content',
            example: '',
            in: 'query',
            name: 'includeLicensedContent',
            required: false,
            schema: {
              default: 'no',
              enum: ['yes', ' no'],
              pattern: '^\\s*|yes|no$',
              type: 'string',
            },
          },
          default: 'no',
        }),
      includeSpellcheck: z
        .enum(['yes', ' no'])
        .exactOptional()
        .openapi({
          param: {
            description: 'yes, to include spell check suggestions in the response.',
            example: '',
            in: 'query',
            name: 'includeSpellcheck',
            required: false,
            schema: {
              default: 'no',
              enum: ['yes', ' no'],
              pattern: '^\\s*|yes|no',
              type: 'string',
            },
          },
          default: 'no',
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: z.array(EventSchema) } },
    },
  },
})

export const getDiscoveryV2EventsIdRoute = createRoute({
  method: 'get',
  path: '/discovery/v2/events/{id}',
  summary: 'Get Event Details',
  description:
    'Get details for a specific event using the unique identifier for the event. This includes the venue and location, the attraction(s), and the Ticketmaster Website URL for purchasing tickets for the event.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the event',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      locale: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            example: 'en-us,en,fr',
            in: 'query',
            name: 'locale',
            required: false,
            schema: { default: 'en', type: 'string' },
          },
        }),
      includeLicensedContent: z
        .enum(['yes', ' no'])
        .exactOptional()
        .openapi({
          param: {
            description: 'True if you want to display licensed content',
            example: '',
            in: 'query',
            name: 'includeLicensedContent',
            required: false,
            schema: {
              default: 'no',
              enum: ['yes', ' no'],
              pattern: '^\\s*|yes|no$',
              type: 'string',
            },
          },
          default: 'no',
        }),
    }),
  },
  responses: {
    200: { description: 'successful operation', content: { '*/*': { schema: EventSchema } } },
  },
})

export const getDiscoveryV2EventsIdImagesRoute = createRoute({
  method: 'get',
  path: '/discovery/v2/events/{id}/images',
  summary: 'Get Event Images',
  description: 'Get images for a specific event using the unique identifier for the event.',
  operationId: 'getImages',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the event',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      locale: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            example: 'en-us,en,fr',
            in: 'query',
            name: 'locale',
            required: false,
            schema: { default: 'en', type: 'string' },
          },
        }),
      includeLicensedContent: z
        .enum(['yes', ' no'])
        .exactOptional()
        .openapi({
          param: {
            description: 'True if you want to display licensed content',
            example: '',
            in: 'query',
            name: 'includeLicensedContent',
            required: false,
            schema: {
              default: 'no',
              enum: ['yes', ' no'],
              pattern: '^\\s*|yes|no$',
              type: 'string',
            },
          },
          default: 'no',
        }),
    }),
  },
  responses: {
    200: { description: 'successful operation', content: { '*/*': { schema: EventImagesSchema } } },
  },
})

export const getDiscoveryV2SuggestRoute = createRoute({
  method: 'get',
  path: '/discovery/v2/suggest',
  tags: ['v2'],
  summary: 'Find Suggest',
  description: 'Find search suggestions and filter your suggestions by location, source, etc.',
  request: {
    query: z.object({
      keyword: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Keyword to search on',
            example: '',
            in: 'query',
            name: 'keyword',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      source: z
        .enum(['ticketmaster', ' universe', ' frontgate', ' tmr'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter entities by its source name',
            example: '',
            in: 'query',
            name: 'source',
            required: false,
            schema: {
              default: '',
              enum: ['ticketmaster', ' universe', ' frontgate', ' tmr'],
              type: 'string',
            },
          },
          default: '',
        }),
      latlong: z
        .string()
        .regex(
          /^\s*$|^-?(90(\.0+)?|[0-8]?[0-9](\.\d+)?),-?(180(\.0+)?|(1[0-7][0-9]|\d{1,2})(\.\d+)?)$/,
        )
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter events by latitude and longitude, this filter is deprecated and maybe removed in a future release, please use geoPoint instead',
            example: '33.80003000,-117.88304300',
            in: 'query',
            name: 'latlong',
            required: false,
            schema: {
              default: '',
              pattern:
                '^\\s*$|^-?(90(\\.0+)?|[0-8]?[0-9](\\.\\d+)?),-?(180(\\.0+)?|(1[0-7][0-9]|\\d{1,2})(\\.\\d+)?)$',
              type: 'string',
            },
          },
        }),
      radius: z
        .string()
        .regex(/^\s*$|^0*1?\d{1,4}$/)
        .default('100')
        .exactOptional()
        .openapi({
          param: {
            description: 'Radius of the area in which we want to search for events.',
            example: '',
            in: 'query',
            name: 'radius',
            required: false,
            schema: { default: '100', pattern: '^\\s*$|^0*1?\\d{1,4}$', type: 'string' },
          },
        }),
      unit: z
        .enum(['miles', 'km'])
        .default('miles')
        .exactOptional()
        .openapi({
          param: {
            description: 'Unit of the radius',
            example: '',
            in: 'query',
            name: 'unit',
            required: false,
            schema: {
              default: 'miles',
              enum: ['miles', 'km'],
              pattern: '^\\s*|miles|km$',
              type: 'string',
            },
          },
        }),
      size: z
        .string()
        .default('5')
        .exactOptional()
        .openapi({
          param: {
            description: 'Size of every entity returned in the response',
            example: '',
            in: 'query',
            name: 'size',
            required: false,
            schema: { default: '5', maximum: 5, minimum: 1, type: 'string' },
          },
        }),
      includeFuzzy: z
        .enum(['yes', ' no'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'yes, to include fuzzy matches in the search. This has performance impact.',
            example: '',
            in: 'query',
            name: 'includeFuzzy',
            required: false,
            schema: {
              default: 'no',
              enum: ['yes', ' no'],
              pattern: '^\\s*|yes|no',
              type: 'string',
            },
          },
          default: 'no',
        }),
      clientVisibility: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter events to clientName',
            example: '',
            in: 'query',
            name: 'clientVisibility',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      countryCode: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter suggestions by country code',
            example: '',
            in: 'query',
            name: 'countryCode',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      includeTBA: z
        .enum(['yes', ' no', ' only'])
        .exactOptional()
        .openapi({
          param: {
            description: 'True, to include events with date to be announce (TBA)',
            example: '',
            in: 'query',
            name: 'includeTBA',
            required: false,
            schema: {
              default: 'no if date parameter sent, yes otherwise',
              enum: ['yes', ' no', ' only'],
              pattern: '^\\s*|yes|no|only$',
              type: 'string',
            },
          },
          default: 'no if date parameter sent, yes otherwise',
        }),
      includeTBD: z
        .enum(['yes', ' no', ' only'])
        .exactOptional()
        .openapi({
          param: {
            description: 'True, to include event with a date to be defined (TBD)',
            example: '',
            in: 'query',
            name: 'includeTBD',
            required: false,
            schema: {
              default: 'no if date parameter sent, yes otherwise',
              enum: ['yes', ' no', ' only'],
              pattern: '^\\s*|yes|no|only$',
              type: 'string',
            },
          },
          default: 'no if date parameter sent, yes otherwise',
        }),
      segmentId: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter suggestions by segment id',
            example: '',
            in: 'query',
            name: 'segmentId',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      geoPoint: z
        .string()
        .regex(
          /^\s*$|^-?(90(\.0+)?|[0-8]?[0-9](\.\d+)?),-?(180(\.0+)?|(1[0-7][0-9]|\d{1,2})(\.\d+)?)$|^[a-zA-Z0-9]{1,9}$/,
        )
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'filter events by geoHash',
            example: 'dr5rh',
            in: 'query',
            name: 'geoPoint',
            required: false,
            schema: {
              default: '',
              pattern:
                '^\\s*$|^-?(90(\\.0+)?|[0-8]?[0-9](\\.\\d+)?),-?(180(\\.0+)?|(1[0-7][0-9]|\\d{1,2})(\\.\\d+)?)$|^[a-zA-Z0-9]{1,9}$',
              type: 'string',
            },
          },
        }),
      locale: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            example: 'en-us,en,fr',
            in: 'query',
            name: 'locale',
            required: false,
            schema: { default: 'en', type: 'string' },
          },
        }),
      includeLicensedContent: z
        .enum(['yes', ' no'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Yes if you want to display licensed content',
            example: '',
            in: 'query',
            name: 'includeLicensedContent',
            required: false,
            schema: {
              default: 'no',
              enum: ['yes', ' no'],
              pattern: '^\\s*|yes|no$',
              type: 'string',
            },
          },
          default: 'no',
        }),
      includeSpellcheck: z
        .enum(['yes', ' no'])
        .exactOptional()
        .openapi({
          param: {
            description: 'yes, to include spell check suggestions in the response.',
            example: '',
            in: 'query',
            name: 'includeSpellcheck',
            required: false,
            schema: {
              default: 'no',
              enum: ['yes', ' no'],
              pattern: '^\\s*|yes|no',
              type: 'string',
            },
          },
          default: 'no',
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/hal+json; charset=utf-8': { schema: z.string() },
        'application/json; charset=utf-8': { schema: z.string() },
      },
    },
  },
})

export const getDiscoveryV2VenuesRoute = createRoute({
  method: 'get',
  path: '/discovery/v2/venues',
  summary: 'Venue Search',
  description: 'Find venues and filter your search by name, and much more.',
  request: {
    query: z.object({
      sort: z
        .string()
        .regex(/^(name|relevance|distance),(asc|desc)$/)
        .default('relevance,desc')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Sorting order of the search result. Allowable Values: 'name,asc', 'name,desc', 'relevance,asc', 'relevance,desc', 'distance,asc', 'distance,desc'",
            example: '',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              default: 'relevance,desc',
              pattern: '^(name|relevance|distance),(asc|desc)$',
              type: 'string',
            },
          },
        }),
      stateCode: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter venues by state / province code',
            example: '',
            in: 'query',
            name: 'stateCode',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      countryCode: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter venues by country code',
            example: '',
            in: 'query',
            name: 'countryCode',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      latlong: z
        .string()
        .regex(
          /^\s*$|^-?(90(\.0+)?|[0-8]?[0-9](\.\d+)?),-?(180(\.0+)?|(1[0-7][0-9]|\d{1,2})(\.\d+)?)$/,
        )
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter events by latitude and longitude, this filter is deprecated and maybe removed in a future release, please use geoPoint instead',
            example: '33.80003000,-117.88304300',
            in: 'query',
            name: 'latlong',
            required: false,
            schema: {
              default: '',
              pattern:
                '^\\s*$|^-?(90(\\.0+)?|[0-8]?[0-9](\\.\\d+)?),-?(180(\\.0+)?|(1[0-7][0-9]|\\d{1,2})(\\.\\d+)?)$',
              type: 'string',
            },
          },
        }),
      radius: z
        .string()
        .regex(/^\s*$|^0*1?\d{1,4}$/)
        .default('50')
        .exactOptional()
        .openapi({
          param: {
            description: 'Radius of the area in which we want to search for events.',
            example: '',
            in: 'query',
            name: 'radius',
            required: false,
            schema: { default: '50', pattern: '^\\s*$|^0*1?\\d{1,4}$', type: 'string' },
          },
        }),
      unit: z
        .enum(['miles', 'km'])
        .default('miles')
        .exactOptional()
        .openapi({
          param: {
            description: 'Unit of the radius',
            example: '',
            in: 'query',
            name: 'unit',
            required: false,
            schema: {
              default: 'miles',
              enum: ['miles', 'km'],
              pattern: '^\\s*|miles|km$',
              type: 'string',
            },
          },
        }),
      geoPoint: z
        .string()
        .regex(
          /^\s*$|^-?(90(\.0+)?|[0-8]?[0-9](\.\d+)?),-?(180(\.0+)?|(1[0-7][0-9]|\d{1,2})(\.\d+)?)$|^[a-zA-Z0-9]{1,9}$/,
        )
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'filter events by geoHash',
            example: 'dr5rh',
            in: 'query',
            name: 'geoPoint',
            required: false,
            schema: {
              default: '',
              pattern:
                '^\\s*$|^-?(90(\\.0+)?|[0-8]?[0-9](\\.\\d+)?),-?(180(\\.0+)?|(1[0-7][0-9]|\\d{1,2})(\\.\\d+)?)$|^[a-zA-Z0-9]{1,9}$',
              type: 'string',
            },
          },
        }),
      keyword: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Keyword to search on',
            example: '',
            in: 'query',
            name: 'keyword',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      id: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter entities by its id',
            example: '',
            in: 'query',
            name: 'id',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      source: z
        .enum(['ticketmaster', ' universe', ' frontgate', ' tmr'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter entities by its source name',
            example: '',
            in: 'query',
            name: 'source',
            required: false,
            schema: {
              default: '',
              enum: ['ticketmaster', ' universe', ' frontgate', ' tmr'],
              type: 'string',
            },
          },
          default: '',
        }),
      includeTest: z
        .enum(['yes', ' no', ' only'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'True if you want to have entities flag as test in the response. Only, if you only wanted test entities',
            example: '',
            in: 'query',
            name: 'includeTest',
            required: false,
            schema: {
              default: 'no',
              enum: ['yes', ' no', ' only'],
              pattern: '^\\s*|yes|no|only$',
              type: 'string',
            },
          },
          default: 'no',
        }),
      page: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            example: '',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: '0', minimum: 0, type: 'string' },
          },
        }),
      size: z
        .string()
        .default('20')
        .exactOptional()
        .openapi({
          param: {
            description: 'Page size of the response',
            example: '',
            in: 'query',
            name: 'size',
            required: false,
            schema: { default: '20', maximum: 500, minimum: 1, type: 'string' },
          },
        }),
      locale: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            example: 'en-us,en,fr',
            in: 'query',
            name: 'locale',
            required: false,
            schema: { default: 'en', type: 'string' },
          },
        }),
      includeLicensedContent: z
        .enum(['yes', ' no'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Yes if you want to display licensed content',
            example: '',
            in: 'query',
            name: 'includeLicensedContent',
            required: false,
            schema: {
              default: 'no',
              enum: ['yes', ' no'],
              pattern: '^\\s*|yes|no$',
              type: 'string',
            },
          },
          default: 'no',
        }),
      includeSpellcheck: z
        .enum(['yes', ' no'])
        .exactOptional()
        .openapi({
          param: {
            description: 'yes, to include spell check suggestions in the response.',
            example: '',
            in: 'query',
            name: 'includeSpellcheck',
            required: false,
            schema: {
              default: 'no',
              enum: ['yes', ' no'],
              pattern: '^\\s*|yes|no',
              type: 'string',
            },
          },
          default: 'no',
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { '*/*': { schema: z.array(VenueSchema) } },
    },
  },
})

export const getDiscoveryV2VenuesIdRoute = createRoute({
  method: 'get',
  path: '/discovery/v2/venues/{id}',
  summary: 'Get Venue Details',
  description: 'Get details for a specific venue using the unique identifier for the venue.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the venue',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      locale: z
        .string()
        .default('en')
        .exactOptional()
        .openapi({
          param: {
            description:
              "The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') ",
            example: 'en-us,en,fr',
            in: 'query',
            name: 'locale',
            required: false,
            schema: { default: 'en', type: 'string' },
          },
        }),
      includeLicensedContent: z
        .enum(['yes', ' no'])
        .exactOptional()
        .openapi({
          param: {
            description: 'True if you want to display licensed content',
            example: '',
            in: 'query',
            name: 'includeLicensedContent',
            required: false,
            schema: {
              default: 'no',
              enum: ['yes', ' no'],
              pattern: '^\\s*|yes|no$',
              type: 'string',
            },
          },
          default: 'no',
        }),
    }),
  },
  responses: {
    200: { description: 'successful operation', content: { '*/*': { schema: VenueSchema } } },
  },
})
