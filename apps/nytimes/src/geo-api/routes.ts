import { createRoute, z } from '@hono/zod-openapi'

const EventSchema = z
  .object({
    city: z.string().exactOptional(),
    critic_name: z.string().exactOptional(),
    event_detail_url: z.string().exactOptional(),
    event_id: z.int().exactOptional(),
    event_name: z.string().exactOptional(),
    event_schedule_id: z.int().exactOptional(),
    festival: z.boolean().exactOptional(),
    film_rating: z.boolean().exactOptional(),
    free: z.boolean().exactOptional(),
    kid_friendly: z.boolean().exactOptional(),
    last_chance: z.boolean().exactOptional(),
    last_modified: z.string().exactOptional(),
    long_running_show: z.boolean().exactOptional(),
    previews_and_openings: z.boolean().exactOptional(),
    recur_days: z.array(z.string()).exactOptional(),
    recurring_start_date: z.string().exactOptional(),
    state: z.string().exactOptional(),
    times_pick: z.boolean().exactOptional(),
    web_description: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Event')

const ApikeySecurityScheme = { in: 'query', name: 'api-key', type: 'apiKey' }

export const getQueryJsonRoute = createRoute({
  method: 'get',
  path: '/query.json',
  tags: ['Events'],
  summary: 'Geographic API',
  description: 'Geographic API',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A displayable name for the specified place.',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      latitude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The latitude of the specified place.\n',
            in: 'query',
            name: 'latitude',
            schema: { type: 'string' },
            required: false,
          },
        }),
      longitude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The longitude of the specified place.',
            in: 'query',
            name: 'longitude',
            schema: { type: 'string' },
            required: false,
          },
        }),
      elevation: z
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
            description: 'The elevation of the specified place, in meters.',
            in: 'query',
            name: 'elevation',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      sw: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Along with ne, forms a bounded box using the longitude and latitude coordinates specified as the southwest corner. The search results are limited to the resulting box. Two float values, separated by a comma `latitude,longitude` <br/> The ne parameter is required to use this parameter.',
            in: 'query',
            name: 'sw',
            required: false,
            schema: { type: 'string' },
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Search keywords to perform a text search on the fields: web_description, event_name and venue_name. 'AND' searches can be performed by wrapping query terms in quotes. If you do not specify a query, all results will be returned.\n",
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters search results based on the facets provided.  For more information on the values you can filter on, see Facets.\n',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      date_range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Start date to end date in the following format- YYYY-MM-DD:YYYY-MM-DD',
            in: 'query',
            name: 'date_range',
            required: false,
            schema: { type: 'string' },
          },
        }),
      facets: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'When facets is set to 1, a count of all facets will be included in the response.',
            in: 'query',
            name: 'facets',
            schema: { default: 0, enum: [0, 1], type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sorts your results on the fields specified. <br/> `sort_value1+[asc | desc],sort_value2+[asc|desc],[...]`<br/> Appending +asc to a facet or response will sort results on that value in ascending order. Appending +desc to a facet or response  will sort results in descending order. You can sort on multiple fields. You can sort on any facet. For the list of responses you can sort on, see the Sortable Field column in the Response table. <br/><br/>If you are doing a spatial search with the ll parameter, you can also sort by the distance from the center of the search: dist+[asc | desc] <br/> **Note:** either +asc or +desc is required when using the sort parameter.\n',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
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
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Limits the number of results returned',
            in: 'query',
            name: 'limit',
            schema: { default: 20, type: 'integer' },
            required: false,
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
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Sets the starting point of the result set',
            in: 'query',
            name: 'offset',
            schema: { default: 0, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of events',
      content: {
        'application/json': {
          schema: z
            .object({ results: z.array(EventSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})
