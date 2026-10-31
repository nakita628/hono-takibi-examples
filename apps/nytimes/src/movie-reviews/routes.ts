import { createRoute, z } from '@hono/zod-openapi'

const CriticSchema = z
  .object({
    bio: z.string().exactOptional(),
    display_name: z.string().exactOptional(),
    multimedia: z
      .object({
        resource: z
          .object({
            credit: z.string().exactOptional(),
            height: z.int().exactOptional(),
            src: z.string().exactOptional(),
            type: z.string().exactOptional(),
            width: z.int().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    seo_name: z.string().exactOptional(),
    sort_name: z.string().exactOptional(),
    status: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Critic')

const MovieSchema = z
  .object({
    byline: z.string().exactOptional(),
    critics_pick: z.int().exactOptional(),
    date_updated: z.string().exactOptional(),
    display_title: z.string().exactOptional(),
    headline: z.string().exactOptional(),
    link: z
      .object({
        suggested_link_text: z.string().exactOptional(),
        type: z.string().exactOptional(),
        url: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    mpaa_rating: z.string().exactOptional(),
    multimedia: z
      .object({
        resource: z
          .object({
            height: z.int().exactOptional(),
            src: z.string().exactOptional(),
            type: z.string().exactOptional(),
            width: z.int().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    opening_date: z.string().exactOptional(),
    publication_date: z.string().exactOptional(),
    summary_short: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Movie')

const ApikeySecurityScheme = { in: 'query', name: 'api-key', type: 'apiKey' }

export const getCriticsResourceTypeJsonRoute = createRoute({
  method: 'get',
  path: '/critics/{resource-type}.json',
  request: {
    params: z.object({
      'resource-type': z
        .string()
        .openapi({
          param: {
            description:
              "all | full-time | part-time | [reviewer-name]\n\nSpecify all to get all Times reviewers, or specify full-time or part-time to get that subset. Specify a reviewer's name to get details about a particular reviewer.\n",
            in: 'path',
            name: 'resource-type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of Movie Critics',
      content: {
        'application/json': {
          schema: z
            .object({
              copyright: z.string().exactOptional(),
              num_results: z.int().exactOptional(),
              results: z.array(CriticSchema).exactOptional(),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getReviewsSearchJsonRoute = createRoute({
  method: 'get',
  path: '/reviews/search.json',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Search keywords; matches movie title and indexed terms\n\nTo limit your search to exact matches only, surround your search string with single quotation marks (e.g., query='28+days+later'). Otherwise, responses will include partial matches (\"head words\") as well as exact matches (e.g., president will match president, presidents and presidential).\n  \n  If you specify multiple terms without quotation marks, they will be combined in an OR search.\n  \n  If you omit the query parameter, your request will be equivalent to a reviews and NYT Critics' Picks request.\n",
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'critics-pick': z
        .enum(['Y', 'N'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Set this parameter to Y to limit the results to NYT Critics' Picks. To get only those movies that have not been highlighted by Times critics, specify critics-pick=N. (To get all reviews regardless of critics-pick status, simply omit this parameter.)\n",
            in: 'query',
            name: 'critics-pick',
            schema: { enum: ['Y', 'N'], type: 'string' },
            required: false,
          },
        }),
      reviewer: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Include this parameter to limit your results to reviews by a specific critic. Reviewer names should be formatted like this: Manohla Dargis.\n',
            in: 'query',
            name: 'reviewer',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'publication-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Single date: YYYY-MM-DD\n\nStart and end date: YYYY-MM-DD;YYYY-MM-DD\n\nThe publication-date is the date the review was first published in The Times.\n',
            in: 'query',
            name: 'publication-date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'opening-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Single date: YYYY-MM-DD\n\nStart and end date: YYYY-MM-DD;YYYY-MM-DD\n\nThe opening-date is the date the movie's opening date in the New York region.\n",
            in: 'query',
            name: 'opening-date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
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
            description: 'Positive integer, multiple of 20',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 20, type: 'integer' },
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sets the sort order of the results.\n\nResults ordered by-title are in ascending alphabetical order. Results ordered by one of the date parameters are in reverse chronological order.\n\nIf you do not specify a sort order, the results will be ordered by publication-date.\n',
            in: 'query',
            name: 'order',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of Movies',
      content: {
        'application/json': {
          schema: z
            .object({
              copyright: z.string().exactOptional(),
              num_results: z.int().exactOptional(),
              results: z.array(MovieSchema).exactOptional(),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getReviewsResourceTypeJsonRoute = createRoute({
  method: 'get',
  path: '/reviews/{resource-type}.json',
  request: {
    params: z.object({
      'resource-type': z
        .enum(['all', 'picks'])
        .openapi({
          param: {
            description:
              "Specify all to retrieve all reviews, including NYT Critics' Picks.\n\nSpecify picks to get NYT Critics' Picks currently in theaters.\n\n",
            in: 'path',
            name: 'resource-type',
            required: true,
            schema: { enum: ['all', 'picks'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      offset: z
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
            description: 'Positive integer, multiple of 20',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 20, type: 'integer' },
          },
        }),
      order: z
        .enum(['by-title', 'by-publication-date', 'by-opening-date'])
        .default('by-publication-date')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sets the sort order of the results.\n\nResults ordered by-title are in ascending alphabetical order. Results ordered by one of the date parameters are in reverse chronological order.\n\nIf you do not specify a sort order, the results will be ordered by publication-date.\n',
            in: 'query',
            name: 'order',
            required: false,
            schema: {
              default: 'by-publication-date',
              enum: ['by-title', 'by-publication-date', 'by-opening-date'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of Movies',
      content: {
        'application/json': {
          schema: z
            .object({
              copyright: z.string().exactOptional(),
              num_results: z.int().exactOptional(),
              results: z.array(MovieSchema).exactOptional(),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})
