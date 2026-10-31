import { createRoute, z } from '@hono/zod-openapi'

const DesFacetSchema = z.xor([z.array(z.any()), z.string()]).openapi('DesFacet')

const GeoFacetSchema = z
  .xor([z.array(z.any()), z.string()])
  .nullable()
  .openapi('GeoFacet')

const OrgFacetSchema = z.array(z.any()).nullable().openapi('OrgFacet')

const PerFacetSchema = z.array(z.any()).nullable().openapi('PerFacet')

const ArticleSchema = z
  .object({
    abstract: z.string().exactOptional(),
    byline: z.string().exactOptional(),
    column: z.string().exactOptional(),
    des_facet: DesFacetSchema.exactOptional(),
    geo_facet: GeoFacetSchema.exactOptional(),
    media: z.xor([z.array(z.any()), z.string()]).exactOptional(),
    org_facet: OrgFacetSchema.exactOptional(),
    per_facet: PerFacetSchema.exactOptional(),
    published_date: z.string().exactOptional(),
    section: z.string().exactOptional(),
    source: z.string().exactOptional(),
    title: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Article')

const ArticleWithCountTypeSchema = z
  .object({
    abstract: z.string().exactOptional(),
    byline: z.string().exactOptional(),
    column: z.string().exactOptional(),
    count_type: z.string().exactOptional(),
    des_facet: DesFacetSchema.exactOptional(),
    geo_facet: GeoFacetSchema.exactOptional(),
    media: z
      .array(
        z
          .object({
            caption: z.string().exactOptional(),
            copyright: z.string().exactOptional(),
            'media-metadata': z
              .object({
                format: z.string().exactOptional(),
                height: z.int().exactOptional(),
                url: z.string().exactOptional(),
                width: z.int().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            subtype: z.string().exactOptional(),
            type: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ 'x-runscope/nullable': true, 'x-runscope/nullable/value': "''" }),
    org_facet: OrgFacetSchema.exactOptional(),
    per_facet: PerFacetSchema.exactOptional(),
    published_date: z.string().exactOptional(),
    section: z.string().exactOptional(),
    source: z.string().exactOptional(),
    title: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ArticleWithCountType')

const OffSetParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .default(20)
  .exactOptional()
  .openapi({
    param: {
      description: 'Positive integer in a multiple of 20',
      in: 'query',
      name: 'offset',
      schema: { default: 20, type: 'integer' },
      required: false,
    },
  })

const SectionParamsSchema = z
  .enum([
    'Arts',
    'Automobiles',
    'Blogs',
    'Books',
    'Business Day',
    'Education',
    'Fashion & Style',
    'Food',
    'Health',
    'Job Market',
    'Magazine',
    'membercenter',
    'Movies',
    'Multimedia',
    'N.Y.%20%2F%20Region',
    'NYT Now',
    'Obituaries',
    'Open',
    'Opinion',
    'Public Editor',
    'Real Estate',
    'Science',
    'Sports',
    'Style',
    'Sunday Review',
    'T Magazine',
    'Technology',
    'The Upshot',
    'Theater',
    'Times Insider',
    'Today’s Paper',
    'Travel',
    'U.S.',
    'World',
    'Your Money',
    'all-sections',
  ])
  .openapi({
    param: {
      description:
        'Limits the results by one or more sections. You can use\n`all-sections` or one or more section names seperated by semicolons. See `viewed/sections.json` call to get a list of sections. \n',
      in: 'path',
      name: 'section',
      required: true,
      schema: {
        enum: [
          'Arts',
          'Automobiles',
          'Blogs',
          'Books',
          'Business Day',
          'Education',
          'Fashion & Style',
          'Food',
          'Health',
          'Job Market',
          'Magazine',
          'membercenter',
          'Movies',
          'Multimedia',
          'N.Y.%20%2F%20Region',
          'NYT Now',
          'Obituaries',
          'Open',
          'Opinion',
          'Public Editor',
          'Real Estate',
          'Science',
          'Sports',
          'Style',
          'Sunday Review',
          'T Magazine',
          'Technology',
          'The Upshot',
          'Theater',
          'Times Insider',
          'Today’s Paper',
          'Travel',
          'U.S.',
          'World',
          'Your Money',
          'all-sections',
        ],
        type: 'string',
      },
    },
  })

const SharedTypesParamsSchema = z
  .enum([
    'digg',
    'email',
    'facebook',
    'mixx',
    'myspace',
    'permalink',
    'timespeople',
    'twitter',
    'yahoobuzz',
  ])
  .exactOptional()
  .openapi({
    param: {
      description:
        'Limits the results by the method used to share the items only works on mostshared requests.',
      in: 'query',
      name: 'shared-types',
      schema: {
        enum: [
          'digg',
          'email',
          'facebook',
          'mixx',
          'myspace',
          'permalink',
          'timespeople',
          'twitter',
          'yahoobuzz',
        ],
        type: 'string',
      },
      required: false,
    },
  })

const TimePeriodParamsSchema = z
  .enum(['1', '7', '30'])
  .openapi({
    param: {
      description:
        'Number of days `1 | 7 | 30 ` corresponds to a day, a week, or a month of content.',
      in: 'path',
      name: 'time-period',
      required: true,
      schema: { enum: ['1', '7', '30'], type: 'string' },
    },
  })

const ApiKeySecurityScheme = { in: 'query', name: 'api-key', type: 'apiKey' }

export const getMostemailedSectionTimePeriodJsonRoute = createRoute({
  method: 'get',
  path: '/mostemailed/{section}/{time-period}.json',
  summary: 'Most Emailed by Section & Time Period',
  operationId: 'GET_mostemailed-section-time-period-json',
  request: {
    params: z.object({ section: SectionParamsSchema, 'time-period': TimePeriodParamsSchema }),
  },
  responses: {
    200: {
      description: 'An array of Articles',
      content: {
        'application/json': {
          schema: z
            .object({
              copyright: z.string().exactOptional(),
              num_results: z.int().exactOptional(),
              results: z.array(ArticleWithCountTypeSchema).exactOptional(),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
        'application/xml': {
          schema: z
            .object({
              copyright: z.string().exactOptional(),
              num_results: z.int().exactOptional(),
              results: z.array(ArticleWithCountTypeSchema).exactOptional(),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              copyright: z.string().exactOptional(),
              errors: z.array(z.string()).exactOptional(),
              results: z.array(z.any()).exactOptional(),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                copyright: 'Copyright (c) 2016 The New York Times Company.  All Rights Reserved.',
                errors: ["Param 'period' is invalid."],
                results: [],
                status: 'ERROR',
              },
            },
          },
        },
        'application/xml': {
          schema: z
            .object({
              copyright: z.string().exactOptional(),
              errors: z.array(z.string()).exactOptional(),
              results: z.array(z.any()).exactOptional(),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    403: {
      description: '',
      content: {
        'application/json': { schema: z.object({}) },
        'application/xml': {
          schema: z.object({}),
          examples: { response: { value: '<h1>Developer Over Qps</h1>' } },
        },
      },
    },
  },
  security: [{ 'api-key': [] }],
})

export const getMostsharedSectionTimePeriodJsonRoute = createRoute({
  method: 'get',
  path: '/mostshared/{section}/{time-period}.json',
  summary: 'Most Shared by Section & Time Period',
  operationId: 'GET_mostshared-section-time-period-json',
  request: {
    params: z.object({ section: SectionParamsSchema, 'time-period': TimePeriodParamsSchema }),
  },
  responses: {
    200: {
      description: 'An array of Articles',
      content: {
        'application/json': {
          schema: z
            .object({
              copyright: z.string().exactOptional(),
              num_results: z.int().exactOptional(),
              results: z.array(ArticleSchema).exactOptional(),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                copyright: 'Copyright (c) 2016 The New York Times Company.  All Rights Reserved.',
                num_results: 24,
                results: [
                  {
                    abstract:
                      'Timothy D. Cook, Apple’s chief, said the government’s request to bypass security on the phone used by Syed Rizwan Farook had “chilling” implications.',
                    asset_id: 100000004214575,
                    byline: 'By ERIC LICHTBLAU and KATIE BENNER',
                    column: '',
                    des_facet: ['IPHONE'],
                    geo_facet: '',
                    media: [
                      {
                        caption:
                          'Timothy D. Cook, the chief executive of Apple, released a letter to customers several hours after a California judge ordered the company to unlock an iPhone used by one of the shooters in a recent attack that killed 14 people in San Bernardino.',
                        copyright: 'Jeff Chiu/Associated Press',
                        'media-metadata': [
                          {
                            format: 'Standard Thumbnail',
                            height: 75,
                            url: 'http://static01.nyt.com/images/2016/02/18/world/18Appleletter-web/18Appleletter-web-thumbStandard.jpg',
                            width: 75,
                          },
                        ],
                        subtype: 'photo',
                        type: 'image',
                      },
                    ],
                    org_facet: ['APPLE INC'],
                    per_facet: ['COOK, TIMOTHY D'],
                    published_date: '2016-02-18',
                    section: 'Technology',
                    source: 'The New York Times',
                    title: 'Apple Fights Order to Unlock San Bernardino Gunman’s iPhone',
                    total_shares: 1,
                    url: 'http://www.nytimes.com/2016/02/18/technology/apple-timothy-cook-fbi-san-bernardino.html',
                  },
                ],
                status: 'OK',
              },
            },
          },
        },
      },
    },
    400: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              copyright: z.string().exactOptional(),
              errors: z.array(z.string()).exactOptional(),
              results: z.array(z.any()).exactOptional(),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                copyright: 'Copyright (c) 2016 The New York Times Company.  All Rights Reserved.',
                errors: ['Please specify a supported period, options are: 1,7,30'],
                results: [],
                status: 'ERROR',
              },
            },
          },
        },
      },
    },
  },
  security: [{ 'api-key': [] }],
})

export const getMostviewedSectionTimePeriodJsonRoute = createRoute({
  method: 'get',
  path: '/mostviewed/{section}/{time-period}.json',
  summary: 'Most Viewed by Section & Time Period',
  operationId: 'GET_mostviewed-section-time-period-json',
  request: {
    params: z.object({ section: SectionParamsSchema, 'time-period': TimePeriodParamsSchema }),
  },
  responses: {
    200: {
      description: 'An array of Articles',
      content: {
        'application/json': {
          schema: z
            .object({
              copyright: z.string().exactOptional(),
              num_results: z.int().exactOptional(),
              results: z.array(ArticleSchema).exactOptional(),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                copyright: 'Copyright (c) 2016 The New York Times Company.  All Rights Reserved.',
                num_results: 121,
                results: [
                  {
                    abstract:
                      'Republicans have parked themselves so far to the right for so many years that it’s not clear if they can hear how deranged they sound.',
                    adx_keywords:
                      'Supreme Court (US);McConnell, Mitch;Scalia, Antonin;Obama, Barack;Kirk, Mark Steven;Republican Party;Senate;Cornyn, John;Collins, Susan M',
                    asset_id: 100000004229487,
                    byline: 'By THE EDITORIAL BOARD',
                    column: 'Editorial',
                    des_facet: '',
                    geo_facet: '',
                    id: 100000004229487,
                    media: '',
                    org_facet: ['SUPREME COURT (US)'],
                    per_facet: ['MCCONNELL, MITCH'],
                    published_date: '2016-02-25',
                    section: 'Opinion',
                    source: 'The New York Times',
                    title: 'Senate Republicans Lose Their Minds on a Supreme Court Seat',
                    type: 'Article',
                    url: 'http://www.nytimes.com/2016/02/25/opinion/senate-republicans-lose-their-minds-on-a-supreme-court-seat.html',
                    views: 1,
                  },
                ],
                status: 'OK',
              },
            },
          },
        },
      },
    },
  },
  security: [{ 'api-key': [] }],
})
