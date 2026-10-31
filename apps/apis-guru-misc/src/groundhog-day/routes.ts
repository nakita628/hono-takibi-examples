import { createRoute, z } from '@hono/zod-openapi'

const PredictionSchema: z.ZodType<PredictionType> = z
  .lazy(() =>
    z
      .object({
        details: z.string(),
        groundhog: GroundhogSchema.exactOptional(),
        shadow: z.int().min(0).max(1).nullable(),
        year: z.int().min(1886),
      })
      .openapi({
        description: 'An annual prediction of an early spring or a longer winter.',
        required: ['year', 'shadow', 'details'],
        title: 'Prediction',
        'x-examples': {
          '/predictions?year=2022': {
            details: '',
            groundhog: {
              active: 1,
              city: 'Barrington',
              contact: '',
              coordinates: '43.5623505,-65.5700017',
              country: 'Canada',
              currentPrediction: 'https://twitter.com/CailinONeil/status/1488894511107485702',
              description:
                'Lucy the Lobster makes Groundhog Day predictions on February 2nd to kick off the Lobster Crawl festival in Barrington, Nova Scotia. The Municipality of Barrington says Lucy is the only prognosticating crustacean to make a prediction in Canada. Bill Murray was reported as being bemused by the idea of a lobster forecaster.',
              id: 46,
              image: 'https://groundhog-day.com/images/ghogs/lucy-the-lobster.png',
              isGroundhog: 0,
              name: 'Lucy the Lobster',
              region: 'Nova Scotia',
              shortname: 'Lucy',
              slug: 'lucy-the-lobster',
              source: 'https://twitter.com/lucylobsterns',
              type: 'Atlantic lobster',
            },
            shadow: 1,
            year: 2022,
          },
        },
      }),
  )
  .openapi('Prediction')

type GroundhogType = {
  active: 0 | 1
  city: string
  contact: string
  coordinates: string
  country: string
  currentPrediction: string
  description: string
  id: number
  image: string
  isGroundhog: number
  name: string
  predictions?: z.infer<typeof PredictionSchema>[]
  predictionsCount?: number
  region: string
  shortname: string
  slug: string
  source: string
  type: string
}

const GroundhogSchema: z.ZodType<GroundhogType> = z
  .lazy(() =>
    z
      .object({
        active: z.union([z.literal(0), z.literal(1)]),
        city: z.string(),
        contact: z.string(),
        coordinates: z.string(),
        country: z.string(),
        currentPrediction: z.string(),
        description: z.string(),
        id: z.int().min(1),
        image: z.string(),
        isGroundhog: z.int().nonnegative().max(1),
        name: z.string(),
        predictions: z.array(PredictionSchema).exactOptional(),
        predictionsCount: z
          .int()
          .min(1)
          .exactOptional()
          .openapi({ description: 'All predictions, excluding nulls.' }),
        region: z.string(),
        shortname: z.string(),
        slug: z.string(),
        source: z.string(),
        type: z.string(),
      })
      .openapi({
        description: 'An animal that makes an annual prediction on Groundhog Day.',
        required: [
          'id',
          'slug',
          'shortname',
          'name',
          'city',
          'region',
          'country',
          'coordinates',
          'source',
          'contact',
          'currentPrediction',
          'isGroundhog',
          'type',
          'active',
          'description',
          'image',
        ],
        title: 'Groundhog',
        'x-examples': {
          '/groundhog/lucy-the-lobster': {
            groundhog: {
              active: 1,
              city: 'Barrington',
              contact: '',
              coordinates: '43.5623505,-65.5700017',
              country: 'Canada',
              currentPrediction: 'https://twitter.com/CailinONeil/status/1488894511107485702',
              description:
                'Lucy the Lobster makes Groundhog Day predictions on February 2nd to kick off the Lobster Crawl festival in Barrington, Nova Scotia. The Municipality of Barrington says Lucy is the only prognosticating crustacean to make a prediction in Canada. Bill Murray was reported as being bemused by the idea of a lobster forecaster.',
              id: 51,
              image: 'https://groundhog-day.com/images/ghogs/lucy-the-lobster.png',
              isGroundhog: 0,
              name: 'Lucy the Lobster',
              predictions: [
                { details: '', shadow: 0, year: 2018 },
                { details: '', shadow: 1, year: 2019 },
                { details: '', shadow: 1, year: 2020 },
                { details: '', shadow: null, year: 2021 },
                { details: '', shadow: 1, year: 2022 },
              ],
              region: 'Nova Scotia',
              shortname: 'Lucy',
              slug: 'lucy-the-lobster',
              source: 'https://twitter.com/lucylobsterns',
              type: 'Atlantic lobster',
            },
          },
        },
      }),
  )
  .openapi('Groundhog')

type PredictionType = {
  details: string
  groundhog?: z.infer<typeof GroundhogSchema>
  shadow: number | null
  year: number
}

export const getApiV1Route = createRoute({
  method: 'get',
  path: '/api/v1',
  tags: ['info'],
  summary: 'Root',
  description: 'Returns a welcome message.',
  operationId: 'root',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              _links: z
                .object({
                  groundhog: z
                    .object({ href: z.string() })
                    .exactOptional()
                    .openapi({ required: ['href'] }),
                  groundhogs: z
                    .object({ href: z.string() })
                    .exactOptional()
                    .openapi({ required: ['href'] }),
                  predictions: z
                    .object({ href: z.string() })
                    .exactOptional()
                    .openapi({ required: ['href'] }),
                  self: z
                    .object({ href: z.string() })
                    .exactOptional()
                    .openapi({ required: ['href'] }),
                  spec: z
                    .object({ href: z.string() })
                    .exactOptional()
                    .openapi({ required: ['href'] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              message: z.string(),
            })
            .openapi({
              required: ['message'],
              'x-examples': {
                'example-1': {
                  _links: {
                    groundhog: {
                      href: 'https://groundhog-day.com/api/v1/groundhogs/wiarton-willie',
                    },
                    groundhogs: { href: 'https://groundhog-day.com/api/v1/groundhogs' },
                    predictions: { href: 'https://groundhog-day.com/api/v1/predictions?year=2022' },
                    self: { href: 'https://groundhog-day.com/api/v1/' },
                    spec: { href: 'https://groundhog-day.com/api/v1/spec' },
                  },
                  message:
                    'Hello! Welcome to the Groundhog Day API: the leading Groundhog Day data source',
                },
              },
            }),
          examples: {
            '/': {
              value: {
                _links: {
                  groundhog: { href: 'https://groundhog-day.com/api/v1/groundhogs/wiarton-willie' },
                  groundhogs: { href: 'https://groundhog-day.com/api/v1/groundhogs' },
                  predictions: { href: 'https://groundhog-day.com/api/v1/predictions?year=2022' },
                  self: { href: 'https://groundhog-day.com/api/v1/' },
                  spec: { href: 'https://groundhog-day.com/api/v1/spec' },
                },
                message:
                  'Hello! Welcome to the Groundhog Day API: the leading Groundhog Day data source',
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV1GroundhogsRoute = createRoute({
  method: 'get',
  path: '/api/v1/groundhogs',
  tags: ['groundhogs'],
  summary: 'Get all groundhogs',
  description: 'Returns all prognosticating animals with their known predictions.',
  operationId: 'groundhogs',
  request: {
    query: z.object({
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter groundhogs by country of origin (USA or Canada).',
            in: 'query',
            name: 'country',
            schema: { example: 'Canada or USA', type: 'string' },
            required: false,
          },
          example: 'Canada or USA',
        }),
      isGroundhog: z
        .enum(['1', '0', 'true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter groundhogs by type (actual, alive groundhogs, or other prognosticators)',
            in: 'query',
            name: 'isGroundhog',
            schema: { enum: ['1', '0', 'true', 'false'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ groundhogs: z.array(GroundhogSchema).exactOptional() }).openapi({
            'x-examples': {
              'example-1': [
                {
                  active: 1,
                  city: 'Punxsutawney',
                  contact: '',
                  country: 'USA',
                  currentPrediction: 'https://www.groundhog.org/prognostication',
                  description:
                    'Punxsutawney Phil is a superstar prognosticating groundhog from Punxsutawney, Pennsylvania. He makes his predictions from his burrow on Gobler’s Knob. According to legend, Phil has made weather prognostications since 1886, owing his improbably long life to the miraculous “groundhog nog” administered at the annual Groundhog Picnic.',
                  id: 1,
                  image: 'https://groundhog-day.com/images/ghogs/punxsutawney-phil.png',
                  isGroundhog: 1,
                  name: 'Punxsutawney Phil',
                  predictions: [
                    {
                      details:
                        'No Shadow- Early Spring It was 28° at Gobbler’s Knob. Phil made his perdition of an Early Spring at 7:25 a.m.',
                      shadow: 0,
                      year: 2016,
                    },
                    {
                      details:
                        '7:25 a.m. Saw His Shadow, Six More Weeks of Winter! There were a few snow flurries during the prognostication.',
                      shadow: 1,
                      year: 2017,
                    },
                    {
                      details:
                        'At 7:25 a.m. with 18,000 Phil Phans present, Phil saw his shadow! Six More Weeks of Winter!',
                      shadow: 1,
                      year: 2018,
                    },
                    {
                      details: 'NO Shadow at 7:28 AM; 14º fog & mist with -1º Wind Chill.',
                      shadow: 0,
                      year: 2019,
                    },
                    {
                      details: 'NO Shadow at 7:26 AM; 30º with light snow falling.',
                      shadow: 0,
                      year: 2020,
                    },
                    {
                      details:
                        'Shadow at 7:25 AM; 19º with light snow. Coronavirus fear prohibits crowds on Gobbler’s Knob.',
                      shadow: 1,
                      year: 2021,
                    },
                    {
                      details:
                        'Shadow at 7:27 AM; 27º with clear skies. A loyal crowd of thousands returned to Gobbler’s Knob.',
                      shadow: 1,
                      year: 2022,
                    },
                  ],
                  predictionsCount: 7,
                  region: 'Pennsylvania',
                  shortname: 'Phil',
                  slug: 'punxsutawney-phil',
                  source: 'https://www.groundhog.org/history-past-predictions',
                  type: 'Groundhog',
                },
                {
                  active: 1,
                  city: 'Barrington',
                  contact: '',
                  country: 'Canada',
                  currentPrediction: 'https://twitter.com/CailinONeil/status/1488894511107485702',
                  description:
                    'Lucy the Lobster makes Groundhog Day predictions on February 2nd to kick off the Lobster Crawl festival in Barrington, Nova Scotia. The Municipality of Barrington says Lucy is the only prognosticating crustacean to make a prediction in Canada. Bill Murray was reported as being bemused by the idea of a lobster forecaster.',
                  id: 46,
                  image: 'https://groundhog-day.com/images/ghogs/lucy-the-lobster.png',
                  isGroundhog: 0,
                  name: 'Lucy the Lobster',
                  predictions: [
                    { details: '', shadow: 0, year: 2018 },
                    { details: '', shadow: 1, year: 2019 },
                    { details: '', shadow: 1, year: 2020 },
                    { details: '', shadow: null, year: 2021 },
                    { details: '', shadow: 1, year: 2022 },
                  ],
                  predictionsCount: 4,
                  region: 'Nova Scotia',
                  shortname: 'Lucy',
                  slug: 'lucy-the-lobster',
                  source: 'https://twitter.com/lucylobsterns',
                  type: 'Atlantic lobster',
                },
              ],
            },
            required: [],
          }),
          examples: {
            '/groundhogs': {
              value: {
                groundhogs: [
                  {
                    active: 1,
                    city: 'Punxsutawney',
                    contact: '',
                    coordinates: '40.9311988,-78.9622483',
                    country: 'USA',
                    currentPrediction: 'https://www.groundhog.org/prognostication',
                    description:
                      'Punxsutawney Phil is a superstar prognosticating groundhog from Punxsutawney, Pennsylvania. He makes his predictions from his burrow on Gobler’s Knob. According to legend, Phil has made weather prognostications since 1886, owing his improbably long life to the miraculous “groundhog nog” administered at the annual Groundhog Picnic.',
                    id: 1,
                    image: 'https://groundhog-day.com/images/ghogs/punxsutawney-phil.png',
                    isGroundhog: 1,
                    name: 'Punxsutawney Phil',
                    predictions: [
                      {
                        details:
                          'At 7:25 a.m. with 18,000 Phil Phans present, Phil saw his shadow! Six More Weeks of Winter!',
                        shadow: 1,
                        year: 2018,
                      },
                      {
                        details: 'NO Shadow at 7:28 AM; 14º fog & mist with -1º Wind Chill.',
                        shadow: 0,
                        year: 2019,
                      },
                      {
                        details: 'NO Shadow at 7:26 AM; 30º with light snow falling.',
                        shadow: 0,
                        year: 2020,
                      },
                      {
                        details:
                          'Shadow at 7:25 AM; 19º with light snow. Coronavirus fear prohibits crowds on Gobbler’s Knob.',
                        shadow: 1,
                        year: 2021,
                      },
                      {
                        details:
                          'Shadow at 7:27 AM; 27º with clear skies. A loyal crowd of thousands returned to Gobbler’s Knob.',
                        shadow: 1,
                        year: 2022,
                      },
                    ],
                    predictionsCount: 127,
                    region: 'Pennsylvania',
                    shortname: 'Phil',
                    slug: 'punxsutawney-phil',
                    source: 'https://www.groundhog.org/history-past-predictions',
                    type: 'Groundhog',
                  },
                  {
                    active: 1,
                    city: 'Barrington',
                    contact: '',
                    coordinates: '43.5623505,-65.5700017',
                    country: 'Canada',
                    currentPrediction: 'https://twitter.com/CailinONeil/status/1488894511107485702',
                    description:
                      'Lucy the Lobster makes Groundhog Day predictions on February 2nd to kick off the Lobster Crawl festival in Barrington, Nova Scotia. The Municipality of Barrington says Lucy is the only prognosticating crustacean to make a prediction in Canada. Bill Murray was reported as being bemused by the idea of a lobster forecaster.',
                    id: 51,
                    image: 'https://groundhog-day.com/images/ghogs/lucy-the-lobster.png',
                    isGroundhog: 0,
                    name: 'Lucy the Lobster',
                    predictions: [
                      { details: '', shadow: 0, year: 2018 },
                      { details: '', shadow: 1, year: 2019 },
                      { details: '', shadow: 1, year: 2020 },
                      { details: '', shadow: null, year: 2021 },
                      { details: '', shadow: 1, year: 2022 },
                    ],
                    predictionsCount: 4,
                    region: 'Nova Scotia',
                    shortname: 'Lucy',
                    slug: 'lucy-the-lobster',
                    source: 'https://twitter.com/lucylobsterns',
                    type: 'Atlantic lobster',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV1GroundhogsSlugRoute = createRoute({
  method: 'get',
  path: '/api/v1/groundhogs/{slug}',
  tags: ['groundhogs'],
  summary: 'Get a groundhog by slug',
  description: 'Returns a prognosticating animal and its known predictions.',
  operationId: 'groundhog',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            description: 'Groundhog name in kebab-case: (eg, lucy-the-lobster)',
            in: 'path',
            name: 'slug',
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
        'application/json': {
          schema: z
            .object({ groundhog: GroundhogSchema.exactOptional() })
            .openapi({ required: [] }),
          examples: {
            '/groundhogs/lucy-the-lobster': {
              value: {
                groundhog: {
                  active: 1,
                  city: 'Barrington',
                  contact: '',
                  coordinates: '43.5623505,-65.5700017',
                  country: 'Canada',
                  currentPrediction: 'https://twitter.com/CailinONeil/status/1488894511107485702',
                  description:
                    'Lucy the Lobster makes Groundhog Day predictions on February 2nd to kick off the Lobster Crawl festival in Barrington, Nova Scotia. The Municipality of Barrington says Lucy is the only prognosticating crustacean to make a prediction in Canada. Bill Murray was reported as being bemused by the idea of a lobster forecaster.',
                  id: 51,
                  image: 'https://groundhog-day.com/images/ghogs/lucy-the-lobster.png',
                  isGroundhog: 0,
                  name: 'Lucy the Lobster',
                  predictions: [
                    { details: '', shadow: 0, year: 2018 },
                    { details: '', shadow: 1, year: 2019 },
                    { details: '', shadow: 1, year: 2020 },
                    { details: '', shadow: null, year: 2021 },
                    { details: '', shadow: 1, year: 2022 },
                  ],
                  predictionsCount: 4,
                  region: 'Nova Scotia',
                  shortname: 'Lucy',
                  slug: 'lucy-the-lobster',
                  source: 'https://twitter.com/lucylobsterns',
                  type: 'Atlantic lobster',
                },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({ message: z.string(), status: z.int(), timestamp: z.string() })
                .exactOptional()
                .openapi({ required: ['status', 'message', 'timestamp'] }),
            })
            .openapi({
              'x-examples': {
                'example-1': {
                  error: {
                    message:
                      "BadRequestError: Bad groundhog identifier ('fake'), maybe you spelled it wrong?",
                    status: 400,
                    timestamp: '2022-10-03T03:36:54.661Z',
                  },
                },
              },
              required: [],
            }),
          examples: {
            '/groundhogs/punxsutawney-paul': {
              value: {
                error: {
                  message:
                    "BadRequestError: Bad groundhog identifier ('punxsutawney-paul'), maybe you spelled it wrong?",
                  status: 400,
                  timestamp: '2022-10-03T03:37:51.567Z',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV1PredictionsRoute = createRoute({
  method: 'get',
  path: '/api/v1/predictions',
  tags: ['predictions'],
  summary: 'Get predictions for a given year',
  description: 'Get all predictions for a given year.',
  operationId: 'predictions',
  request: {
    query: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1886),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'A calendar year',
            in: 'query',
            name: 'year',
            schema: { minimum: 1886, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ predictions: z.array(PredictionSchema).exactOptional() }).openapi({
            'x-examples': {
              'example-1': [
                {
                  details: 'NO Shadow at 7:26 AM; 30º with light snow falling.',
                  groundhog: {
                    active: 1,
                    city: 'Punxsutawney',
                    contact: '',
                    country: 'USA',
                    currentPrediction: 'https://www.groundhog.org/prognostication',
                    description:
                      'Punxsutawney Phil is a superstar prognosticating groundhog from Punxsutawney, Pennsylvania. He makes his predictions from his burrow on Gobler’s Knob. According to legend, Phil has made weather prognostications since 1886, owing his improbably long life to the miraculous “groundhog nog” administered at the annual Groundhog Picnic.',
                    id: 1,
                    image: 'https://groundhog-day.com/images/ghogs/punxsutawney-phil.png',
                    isGroundhog: 1,
                    name: 'Punxsutawney Phil',
                    region: 'Pennsylvania',
                    shortname: 'Phil',
                    slug: 'punxsutawney-phil',
                    source: 'https://www.groundhog.org/history-past-predictions',
                    type: 'Groundhog',
                  },
                  shadow: 0,
                  year: 2020,
                },
                {
                  details: '',
                  groundhog: {
                    active: 1,
                    city: 'Barrington',
                    contact: '',
                    country: 'Canada',
                    currentPrediction: 'https://twitter.com/CailinONeil/status/1488894511107485702',
                    description:
                      'Lucy the Lobster makes Groundhog Day predictions on February 2nd to kick off the Lobster Crawl festival in Barrington, Nova Scotia. The Municipality of Barrington says Lucy is the only prognosticating crustacean to make a prediction in Canada. Bill Murray was reported as being bemused by the idea of a lobster forecaster.',
                    id: 46,
                    image: 'https://groundhog-day.com/images/ghogs/lucy-the-lobster.png',
                    isGroundhog: 0,
                    name: 'Lucy the Lobster',
                    region: 'Nova Scotia',
                    shortname: 'Lucy',
                    slug: 'lucy-the-lobster',
                    source: 'https://twitter.com/lucylobsterns',
                    type: 'Atlantic lobster',
                  },
                  shadow: 1,
                  year: 2020,
                },
              ],
            },
            required: [],
          }),
          examples: {
            '/predictions?year=2020': {
              value: {
                predictions: [
                  {
                    details: 'NO Shadow at 7:26 AM; 30º with light snow falling.',
                    groundhog: {
                      active: 1,
                      city: 'Punxsutawney',
                      contact: '',
                      coordinates: '40.9311988,-78.9622483',
                      country: 'USA',
                      currentPrediction: 'https://www.groundhog.org/prognostication',
                      description:
                        'Punxsutawney Phil is a superstar prognosticating groundhog from Punxsutawney, Pennsylvania. He makes his predictions from his burrow on Gobler’s Knob. According to legend, Phil has made weather prognostications since 1886, owing his improbably long life to the miraculous “groundhog nog” administered at the annual Groundhog Picnic.',
                      id: 1,
                      image: 'https://groundhog-day.com/images/ghogs/punxsutawney-phil.png',
                      isGroundhog: 1,
                      name: 'Punxsutawney Phil',
                      predictionsCount: 127,
                      region: 'Pennsylvania',
                      shortname: 'Phil',
                      slug: 'punxsutawney-phil',
                      source: 'https://www.groundhog.org/history-past-predictions',
                      type: 'Groundhog',
                    },
                    shadow: 0,
                    year: 2020,
                  },
                  {
                    details: '',
                    groundhog: {
                      active: 1,
                      city: 'Barrington',
                      contact: '',
                      coordinates: '43.5623505,-65.5700017',
                      country: 'Canada',
                      currentPrediction:
                        'https://twitter.com/CailinONeil/status/1488894511107485702',
                      description:
                        'Lucy the Lobster makes Groundhog Day predictions on February 2nd to kick off the Lobster Crawl festival in Barrington, Nova Scotia. The Municipality of Barrington says Lucy is the only prognosticating crustacean to make a prediction in Canada. Bill Murray was reported as being bemused by the idea of a lobster forecaster.',
                      id: 51,
                      image: 'https://groundhog-day.com/images/ghogs/lucy-the-lobster.png',
                      isGroundhog: 0,
                      name: 'Lucy the Lobster',
                      predictionsCount: 127,
                      region: 'Nova Scotia',
                      shortname: 'Lucy',
                      slug: 'lucy-the-lobster',
                      source: 'https://twitter.com/lucylobsterns',
                      type: 'Atlantic lobster',
                    },
                    shadow: 1,
                    year: 2020,
                  },
                ],
              },
            },
          },
        },
      },
    },
    302: {
      description: 'Found',
      headers: z.object({
        location: {
          description: '/api/v1/predictions?year=2022',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: '/api/v1/predictions?year=2022', param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({ message: z.string(), status: z.int(), timestamp: z.string() })
                .exactOptional()
                .openapi({ required: ['status', 'message', 'timestamp'] }),
            })
            .openapi({
              'x-examples': {
                'example-1': {
                  error: {
                    message:
                      "BadRequestError: The 'year' must be between 1886 and 2022 (inclusive).",
                    status: 400,
                    timestamp: '2022-10-03T03:38:55.169Z',
                  },
                },
              },
              required: [],
            }),
          examples: {
            '/predictions?year=1800': {
              value: {
                error: {
                  message: "BadRequestError: The 'year' must be between 1886 and 2022 (inclusive).",
                  status: 400,
                  timestamp: '2022-10-03T03:38:55.169Z',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV1SpecRoute = createRoute({
  method: 'get',
  path: '/api/v1/spec',
  tags: ['info'],
  summary: 'Get JSON schema',
  description: 'Gets the schema for the JSON API as a yaml file.',
  operationId: 'spec',
  responses: {
    200: {
      description: 'OK',
      headers: z.object({
        'content-disposition': {
          description: 'attachment; filename="Groundhog-Day-API.v1.yaml"',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'attachment; filename="Groundhog-Day-API.v1.yaml"',
              param: { required: false },
            }),
        },
        'content-type': {
          description: 'text/yaml; charset=UTF-8',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'text/yaml; charset=UTF-8', param: { required: false } }),
        },
      }),
    },
  },
})
