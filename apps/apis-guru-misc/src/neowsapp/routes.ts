import { createRoute, z } from '@hono/zod-openapi'

const MissDistanceSchema = z
  .object({
    astronomical: z.string().exactOptional(),
    kilometers: z.string().exactOptional(),
    lunar: z.string().exactOptional(),
    miles: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MissDistance')

const RelVelocitySchema = z
  .object({
    kilometers_per_hour: z.string().exactOptional(),
    miles_per_hour: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RelVelocity')

const CloseApproachDataSchema = z
  .object({
    close_approach_date: z.string().exactOptional(),
    close_approach_date_full: z.string().exactOptional(),
    epoch_date_close_approach: z
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
    miss_distance: MissDistanceSchema.exactOptional(),
    orbiting_body: z.string().exactOptional(),
    relative_velocity: RelVelocitySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CloseApproachData')

const EstimatedDiameterSchema = z
  .object({
    estimated_diameter_max: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'An estimate of the maximum size of the Asteroid - bases on the abosolute magnitude',
      }),
    estimated_diameter_min: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'An estimate of the minimum size of the Asteroid - bases on the abosolute magnitude',
      }),
  })
  .openapi({ required: [] })
  .openapi('EstimatedDiameter')

const EstimatedDiameterContainerSchema = z
  .object({
    feet: EstimatedDiameterSchema.exactOptional().openapi({
      description: 'estimated diameter feet',
    }),
    kilometers: EstimatedDiameterSchema.exactOptional().openapi({
      description: 'estimated diameter kilometer',
    }),
    meters: EstimatedDiameterSchema.exactOptional().openapi({
      description: 'estimated diameter meter',
    }),
    miles: EstimatedDiameterSchema.exactOptional().openapi({
      description: 'estimated diameter miles',
    }),
  })
  .openapi({ required: [] })
  .openapi('EstimatedDiameterContainer')

const HashMapStringListNearEarthObjectSchema = z.any().openapi('HashMapStringListNearEarthObject')

const OrbitClassSchema = z
  .object({
    orbit_class_description: z.string().exactOptional(),
    orbit_class_range: z.string().exactOptional(),
    orbit_class_type: z
      .enum([
        'IEO',
        'ATE',
        'APO',
        'AMO',
        'MCA',
        'IMB',
        'MBA',
        'OMB',
        'TJN',
        'CEN',
        'TNO',
        'PAA',
        'HYA',
        'HYP',
        'PAR',
        'COM',
        'JFC',
        'HTC',
        'ETC',
        'CTC',
        'JFc',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrbitClass')

const OrbitalDataSchema = z
  .object({
    aphelion_distance: z.string().exactOptional(),
    ascending_node_longitude: z.string().exactOptional(),
    data_arc_in_days: z
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
    eccentricity: z.string().exactOptional(),
    epoch_osculation: z.string().exactOptional(),
    equinox: z.string().exactOptional(),
    first_observation_date: z.string().exactOptional(),
    inclination: z.string().exactOptional(),
    jupiter_tisserand_invariant: z.string().exactOptional(),
    last_observation_date: z.string().exactOptional(),
    mean_anomaly: z.string().exactOptional(),
    mean_motion: z.string().exactOptional(),
    minimum_orbit_intersection: z.string().exactOptional(),
    observations_used: z
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
    orbit_class: OrbitClassSchema.exactOptional(),
    orbit_determination_date: z.string().exactOptional(),
    orbit_id: z.string().exactOptional(),
    orbit_uncertainty: z.string().exactOptional(),
    orbital_period: z.string().exactOptional(),
    perihelion_argument: z.string().exactOptional(),
    perihelion_distance: z.string().exactOptional(),
    perihelion_time: z.string().exactOptional(),
    semi_major_axis: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrbitalData')

const NearEarthObjectSchema = z
  .object({
    absolute_magnitude_h: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Is a measure of an asteroids brightness' }),
    close_approach_data: z
      .array(CloseApproachDataSchema)
      .exactOptional()
      .openapi({ description: 'Close approach information of the Asteroid' }),
    designation: z.string().exactOptional(),
    estimated_diameter: EstimatedDiameterContainerSchema.exactOptional().openapi({
      description: 'A collection of estimated diameters (kilometers, meters, miles, feet',
    }),
    is_potentially_hazardous_asteroid: z.boolean().exactOptional(),
    is_sentry_object: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
    name_limited: z.string().exactOptional(),
    nasa_jpl_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'A Link to the NASA JPL Small-Body Database website' }),
    neo_reference_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reference ID of the Asteroid - This correlates to the SPK ID for the JPL NEO data',
      }),
    orbital_data: OrbitalDataSchema.exactOptional().openapi({
      description: 'Orbital information of t1he asteroid',
    }),
    sentry_data: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NearEarthObject')

const NearEarthObjectListSchema = z
  .object({
    element_count: z.int32().exactOptional().openapi({ description: 'Number of NEOs in list' }),
    links: z.object({}).exactOptional().openapi({ description: 'Hypermedia links to collection' }),
    near_earth_objects: HashMapStringListNearEarthObjectSchema.exactOptional().openapi({
      description: 'A collection of NearEarthObjects',
    }),
  })
  .openapi({ required: [] })
  .openapi('NearEarthObjectList')

const PageMetaDataSchema = z
  .object({
    number: z
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
    size: z
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
    total_elements: z
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
    total_pages: z
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
  .openapi('PageMetaData')

const SentryImpactRiskObjectSchema = z
  .object({
    Palermo_scale_max: z.string().exactOptional(),
    absolute_magnitude: z.string().exactOptional(),
    average_lunar_distance: z.float64().exactOptional(),
    designation: z.string().exactOptional(),
    estimated_diameter: z.string().exactOptional(),
    fullname: z.string().exactOptional(),
    impact_probability: z.string().exactOptional(),
    is_active_sentry_object: z.boolean().exactOptional(),
    last_obs: z.string().exactOptional(),
    last_obs_jd: z.string().exactOptional(),
    palermo_scale_ave: z.string().exactOptional(),
    potential_impacts: z.string().exactOptional(),
    removal_date: z.string().exactOptional(),
    sentryId: z.string().exactOptional(),
    torino_scale: z.string().exactOptional(),
    v_infinity: z.string().exactOptional(),
    year_range_max: z.string().exactOptional(),
    year_range_min: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SentryImpactRiskObject')

const SentryObjectPagingDtoSchema = z
  .object({
    links: z.object({}).exactOptional(),
    page: PageMetaDataSchema.exactOptional(),
    sentry_objects: z.array(SentryImpactRiskObjectSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SentryObjectPagingDto')

const URLSchema = z
  .object({
    authority: z.string().exactOptional(),
    content: z.object({}).exactOptional(),
    defaultPort: z.int32().exactOptional(),
    file: z.string().exactOptional(),
    host: z.string().exactOptional(),
    path: z.string().exactOptional(),
    port: z.int32().exactOptional(),
    protocol: z.string().exactOptional(),
    query: z.string().exactOptional(),
    ref: z.string().exactOptional(),
    userInfo: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('URL')

const StatisticsSchema = z
  .object({
    close_approach_count: z
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
        description: 'Number of Close Approach listings across all NEOs listed in NeoWs',
      }),
    last_updated: z
      .string()
      .exactOptional()
      .openapi({ description: 'TimeStamp the last time the DB was updated' }),
    nasa_jpl_url: URLSchema.exactOptional(),
    near_earth_object_count: z
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
        description: 'Number of NearEarthObjects listed in NeoWs',
      }),
    source: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Statistics')

export const getRestV1FeedRoute = createRoute({
  method: 'get',
  path: '/rest/v1/feed',
  tags: ['feed'],
  summary: 'Find Near Earth Objects by date',
  description:
    'Get a list of Near Earth Objects within a date range, The max range in one query is 7 days',
  operationId: 'retrieveNearEarthObjectFeed',
  request: {
    query: z.object({
      start_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Start of date range search, format: yyyy-MM-dd - (ex: 2015-04-28)',
            in: 'query',
            name: 'start_date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      end_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'End of date range search, format: yyyy-MM-dd - (ex: 2015-04-28). If left off search will extends 7 days from start_date',
            in: 'query',
            name: 'end_date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      detailed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'detailed',
            in: 'query',
            name: 'detailed',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: NearEarthObjectListSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRestV1FeedTodayRoute = createRoute({
  method: 'get',
  path: '/rest/v1/feed/today',
  tags: ['feed'],
  summary: 'Find Near Earth Objects for today',
  description: 'Get a list of Near Earth Objects for today',
  operationId: 'retrieveNEOFeedToday',
  request: {
    query: z.object({
      detailed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'detailed',
            in: 'query',
            name: 'detailed',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: NearEarthObjectListSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRestV1NeoBrowseRoute = createRoute({
  method: 'get',
  path: '/rest/v1/neo/browse',
  tags: ['neo'],
  summary: 'Browse the Near Earth Objects service',
  description: 'Retieve a paginated list of Near Earth Objects',
  operationId: 'browseNearEarthObjects',
  request: {
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
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'page',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'size',
            in: 'query',
            name: 'size',
            required: false,
            schema: { default: 20, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: NearEarthObjectSchema } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRestV1NeoSentryRoute = createRoute({
  method: 'get',
  path: '/rest/v1/neo/sentry',
  tags: ['neosentry'],
  summary: 'Retrieve Sentry (Impact Risk ) Near Earth Objects',
  description: 'Retrieves Near Earth Objects listed in the NASA sentry data set',
  operationId: 'retrieveSentryRiskData',
  request: {
    query: z.object({
      is_active: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'show current list of Sentry objects, or show removed Sentry objects',
            in: 'query',
            name: 'is_active',
            required: false,
            schema: { default: true, type: 'boolean' },
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
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'page',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description: 'size',
            in: 'query',
            name: 'size',
            required: false,
            schema: { default: 50, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SentryObjectPagingDtoSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRestV1NeoSentryAsteroidIdRoute = createRoute({
  method: 'get',
  path: '/rest/v1/neo/sentry/{asteroid_id}',
  tags: ['neosentry'],
  summary: 'Retrieve Sentry (Impact Risk ) Near Earth Objectby ID ',
  description: 'Retrieves Sentry Near Earth Object by ID',
  operationId: 'retrieveSentryRiskDataById',
  request: {
    params: z.object({
      asteroid_id: z
        .string()
        .openapi({
          param: {
            description:
              'ID of NearEarth object.  ID can be SPK_ID, Asteroid des (designation) or Sentry ID',
            in: 'path',
            name: 'asteroid_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SentryImpactRiskObjectSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRestV1NeoAsteroidIdRoute = createRoute({
  method: 'get',
  path: '/rest/v1/neo/{asteroid_id}',
  tags: ['neo'],
  summary: 'Find Near Earth Objects by id',
  description: 'Retrieve a Near Earth Objects with a given id',
  operationId: 'retrieveNearEarthObjectById',
  request: {
    params: z.object({
      asteroid_id: z
        .string()
        .openapi({
          param: {
            description: 'ID of Near Earth Object - (ex: 3729835)',
            in: 'path',
            name: 'asteroid_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: NearEarthObjectSchema } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRestV1StatsRoute = createRoute({
  method: 'get',
  path: '/rest/v1/stats',
  tags: ['stats'],
  summary: 'Get the Near Earth Object data set totals',
  description: 'retrieveCurrentNeoStatistics',
  operationId: 'retrieveCurrentNeoStatistics',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: StatisticsSchema } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})
