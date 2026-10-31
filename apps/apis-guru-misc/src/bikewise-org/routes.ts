import { createRoute, z } from '@hono/zod-openapi'

export const getV2IncidentsRoute = createRoute({
  method: 'get',
  path: '/v2/incidents',
  tags: ['incidents'],
  summary: 'Paginated incidents matching parameters',
  description:
    '\n<p>If you’d like more detailed information about bike incidents, use this endpoint. For mapping, <code>locations</code> is probably a better bet.</p>\n\n<p><strong>Notes on location searching</strong>: <br />\n- <code>proximity</code> accepts an ip address, an address, zipcode, city, or latitude,longitude - i.e. <code>70.210.133.87</code>, <code>210 NW 11th Ave, Portland, OR</code>, <code>60647</code>, <code>Chicago, IL</code>, and <code>45.521728,-122.67326</code> are all acceptable<br />\n- <code>proximity_square</code> sets the length of the sides of the square to find matches inside of. The square is centered on the location specified by <code>proximity</code>. It defaults to 100.</p>\n',
  operationId: 'GET--version-incidents---format-',
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
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: '<p>Page of results to fetch.</p>\n',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
          },
        }),
      per_page: z
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
            description: '<p>Number of results to return per page.</p>\n',
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      occurred_before: z
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
            description: '<p>End of period</p>\n',
            in: 'query',
            name: 'occurred_before',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      occurred_after: z
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
            description: '<p>Start of period</p>\n',
            in: 'query',
            name: 'occurred_after',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      incident_type: z
        .enum(['crash', 'hazard', 'theft', 'unconfirmed', 'infrastructure_issue', 'chop_shop'])
        .exactOptional()
        .openapi({
          param: {
            description: '<p>Only incidents of specific type</p>\n',
            in: 'query',
            name: 'incident_type',
            required: false,
            schema: {
              enum: [
                'crash',
                'hazard',
                'theft',
                'unconfirmed',
                'infrastructure_issue',
                'chop_shop',
              ],
              type: 'string',
            },
          },
        }),
      proximity: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '<p>Center of location for proximity search</p>\n',
            in: 'query',
            name: 'proximity',
            required: false,
            schema: { type: 'string' },
          },
        }),
      proximity_square: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: '<p>Size of the proximity search</p>\n',
            in: 'query',
            name: 'proximity_square',
            required: false,
            schema: { default: 100, format: 'int32', type: 'integer' },
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '<p>Full text search of incidents</p>\n',
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'No response was specified' } },
})

export const getV2IncidentsIdRoute = createRoute({
  method: 'get',
  path: '/v2/incidents/{id}',
  tags: ['incidents'],
  operationId: 'GET--version-incidents--id---format-',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: '<p>Incident ID</p>\n',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'No response was specified' } },
})

export const getV2LocationsRoute = createRoute({
  method: 'get',
  path: '/v2/locations',
  tags: ['locations'],
  summary: 'Unpaginated geojson response',
  description:
    '<p><strong>This endpoint behaves exactly like</strong> <code>incidents</code>, but returns a valid geojson <code>FeatureCollection</code> that looks like this:</p>\n\n<pre><code>{\n  type: "FeatureCollection",\n  features: [\n    {\n      type: "Feature",\n      properties: {\n      id: 4474199,\n      type: "Theft",\n      occurred_at: 1428536937\n    },\n      geometry: {\n      type: "Point",\n      coordinates: [ -122.6244177, 45.5164386 ]\n    }\n  }\n}\n</code></pre>\n\n<p>It doesn’t paginate. If you pass the <code>all</code> parameter it returns all matches (which can be big, &gt; 4mb), otherwise it returns the 100 most recent.</p>\n\n<p><strong>Go forth and make maps!</strong></p>\n',
  operationId: 'GET--version-locations---format-',
  request: {
    query: z.object({
      occurred_before: z
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
            description: '<p>End of period</p>\n',
            in: 'query',
            name: 'occurred_before',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      occurred_after: z
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
            description: '<p>Start of period</p>\n',
            in: 'query',
            name: 'occurred_after',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      incident_type: z
        .enum(['crash', 'hazard', 'theft', 'unconfirmed', 'infrastructure_issue', 'chop_shop'])
        .exactOptional()
        .openapi({
          param: {
            description: '<p>Only incidents of specific type</p>\n',
            in: 'query',
            name: 'incident_type',
            required: false,
            schema: {
              enum: [
                'crash',
                'hazard',
                'theft',
                'unconfirmed',
                'infrastructure_issue',
                'chop_shop',
              ],
              type: 'string',
            },
          },
        }),
      proximity: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '<p>Center of location for proximity search</p>\n',
            in: 'query',
            name: 'proximity',
            required: false,
            schema: { type: 'string' },
          },
        }),
      proximity_square: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: '<p>Size of the proximity search</p>\n',
            in: 'query',
            name: 'proximity_square',
            required: false,
            schema: { default: 100, format: 'int32', type: 'integer' },
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '<p>Full text search of incidents</p>\n',
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '<p>Max number of results to return. Defaults to 100</p>\n',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      all: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: '<p>Give ‘em all to me. Will ignore limit</p>\n',
            in: 'query',
            name: 'all',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'No response was specified' } },
})

export const getV2LocationsMarkersRoute = createRoute({
  method: 'get',
  path: '/v2/locations/markers',
  tags: ['locations'],
  summary: 'Unpaginated geojson response with simplestyled markers',
  description:
    '<p>This behaves exactly like the root <code>locations</code> endpoint, but returns <a href="https://github.com/mapbox/simplestyle-spec">simplestyled markers</a> (<a href="https://www.mapbox.com/guides/markers/#simple-style">mapbox styled markers</a>)</p>\n\n<p><strong>Go forth and make maps!</strong></p>\n',
  operationId: 'GET--version-locations-markers---format-',
  request: {
    query: z.object({
      occurred_before: z
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
            description: '<p>End of period</p>\n',
            in: 'query',
            name: 'occurred_before',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      occurred_after: z
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
            description: '<p>Start of period</p>\n',
            in: 'query',
            name: 'occurred_after',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      incident_type: z
        .enum(['crash', 'hazard', 'theft', 'unconfirmed', 'infrastructure_issue', 'chop_shop'])
        .exactOptional()
        .openapi({
          param: {
            description: '<p>Only incidents of specific type</p>\n',
            in: 'query',
            name: 'incident_type',
            required: false,
            schema: {
              enum: [
                'crash',
                'hazard',
                'theft',
                'unconfirmed',
                'infrastructure_issue',
                'chop_shop',
              ],
              type: 'string',
            },
          },
        }),
      proximity: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '<p>Center of location for proximity search</p>\n',
            in: 'query',
            name: 'proximity',
            required: false,
            schema: { type: 'string' },
          },
        }),
      proximity_square: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: '<p>Size of the proximity search</p>\n',
            in: 'query',
            name: 'proximity_square',
            required: false,
            schema: { default: 100, format: 'int32', type: 'integer' },
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '<p>Full text search of incidents</p>\n',
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '<p>Max number of results to return. Defaults to 100</p>\n',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      all: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: '<p>Give ‘em all to me. Will ignore limit</p>\n',
            in: 'query',
            name: 'all',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'No response was specified' } },
})
