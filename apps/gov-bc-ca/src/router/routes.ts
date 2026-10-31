import { createRoute, z } from '@hono/zod-openapi'

const ApikeySecurityScheme = { in: 'header', name: 'apikey', type: 'apiKey' }

export const getDirectionsOutputFormatRoute = createRoute({
  method: 'get',
  path: '/directions.{outputFormat}',
  tags: ['directions'],
  summary:
    'Get the directions, path, distance and travel time between a series of geographic points',
  description:
    'Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'kml', 'html'])
        .default('json')
        .openapi({
          param: {
            description: 'Format of representation',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'kml', 'html'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      points: z
        .string()
        .openapi({
          param: {
            description:
              "A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>",
            example: '-123.70794,48.77869,-123.53785,48.38200',
            in: 'query',
            name: 'points',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      criteria: z
        .enum(['shortest', 'fastest'])
        .default('shortest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.',
            in: 'query',
            name: 'criteria',
            required: false,
            schema: { default: 'shortest', enum: ['shortest', 'fastest'], type: 'string' },
          },
        }),
      distanceUnit: z
        .enum(['km', 'mi'])
        .default('km')
        .exactOptional()
        .openapi({
          param: {
            description: 'distance unit of measure (e.g., km, mi). Default is km.',
            in: 'query',
            name: 'distanceUnit',
            required: false,
            schema: { default: 'km', enum: ['km', 'mi'], type: 'string' },
          },
        }),
      roundTrip: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, route ends at start point. Default is false.',
            in: 'query',
            name: 'roundTrip',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      departure: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled',
            in: 'query',
            name: 'departure',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      correctSide: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, route starts and ends on same side of road as start/end point.Default is false.',
            in: 'query',
            name: 'correctSide',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      disable: z
        .string()
        .default('sc,tf,ev,td')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)',
            in: 'query',
            name: 'disable',
            required: false,
            schema: { default: 'sc,tf,ev,td', type: 'string' },
          },
        }),
      routeDescription: z
        .string()
        .default('Routing results')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)',
            in: 'query',
            name: 'routeDescription',
            required: false,
            schema: { default: 'Routing results', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'turn-by-turn directions, geometry, distance, and time of the shortest or fastest route',
    },
  },
})

export const postDirectionsOutputFormatRoute = createRoute({
  method: 'post',
  path: '/directions.{outputFormat}',
  tags: ['directions'],
  summary:
    'Get the directions, path, distance and travel time between a series of geographic points',
  description:
    'Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'kml', 'html'])
        .default('json')
        .openapi({
          param: {
            description: 'Format of representation',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'kml', 'html'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      points: z
        .string()
        .openapi({
          param: {
            description:
              "A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>",
            example: '-123.70794,48.77869,-123.53785,48.38200',
            in: 'query',
            name: 'points',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      criteria: z
        .enum(['shortest', 'fastest'])
        .default('shortest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.',
            in: 'query',
            name: 'criteria',
            required: false,
            schema: { default: 'shortest', enum: ['shortest', 'fastest'], type: 'string' },
          },
        }),
      distanceUnit: z
        .enum(['km', 'mi'])
        .default('km')
        .exactOptional()
        .openapi({
          param: {
            description: 'distance unit of measure (e.g., km, mi). Default is km.',
            in: 'query',
            name: 'distanceUnit',
            required: false,
            schema: { default: 'km', enum: ['km', 'mi'], type: 'string' },
          },
        }),
      roundTrip: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, route ends at start point. Default is false.',
            in: 'query',
            name: 'roundTrip',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      departure: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled',
            in: 'query',
            name: 'departure',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      correctSide: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, route starts and ends on same side of road as start/end point.Default is false.',
            in: 'query',
            name: 'correctSide',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      disable: z
        .string()
        .default('sc,tf,ev,td')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)',
            in: 'query',
            name: 'disable',
            required: false,
            schema: { default: 'sc,tf,ev,td', type: 'string' },
          },
        }),
      routeDescription: z
        .string()
        .default('Routing results')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)',
            in: 'query',
            name: 'routeDescription',
            required: false,
            schema: { default: 'Routing results', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'turn-by-turn directions, geometry, distance, and time of the shortest or fastest route',
    },
  },
})

export const getDistanceOutputFormatRoute = createRoute({
  method: 'get',
  path: '/distance.{outputFormat}',
  tags: ['distance'],
  summary: 'Get distance and travel time between two geographic points',
  description:
    'Represents the distance and time of the shortest or fastest path between given start and end points.',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'kml', 'html'])
        .default('json')
        .openapi({
          param: {
            description: 'Format of representation',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'kml', 'html'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      points: z
        .string()
        .openapi({
          param: {
            description:
              "A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>",
            example: '-123.70794,48.77869,-123.53785,48.38200',
            in: 'query',
            name: 'points',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      criteria: z
        .enum(['shortest', 'fastest'])
        .default('shortest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.',
            in: 'query',
            name: 'criteria',
            required: false,
            schema: { default: 'shortest', enum: ['shortest', 'fastest'], type: 'string' },
          },
        }),
      distanceUnit: z
        .enum(['km', 'mi'])
        .default('km')
        .exactOptional()
        .openapi({
          param: {
            description: 'distance unit of measure (e.g., km, mi). Default is km.',
            in: 'query',
            name: 'distanceUnit',
            required: false,
            schema: { default: 'km', enum: ['km', 'mi'], type: 'string' },
          },
        }),
      roundTrip: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, route ends at start point. Default is false.',
            in: 'query',
            name: 'roundTrip',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      departure: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled',
            in: 'query',
            name: 'departure',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      correctSide: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, route starts and ends on same side of road as start and end points.Default is false.',
            in: 'query',
            name: 'correctSide',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      disable: z
        .string()
        .default('sc,tf,ev,td')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)',
            in: 'query',
            name: 'disable',
            required: false,
            schema: { default: 'sc,tf,ev,td', type: 'string' },
          },
        }),
      routeDescription: z
        .string()
        .default('Routing results')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)',
            in: 'query',
            name: 'routeDescription',
            required: false,
            schema: { default: 'Routing results', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Distance and time of the shortest or fastest route' } },
})

export const postDistanceOutputFormatRoute = createRoute({
  method: 'post',
  path: '/distance.{outputFormat}',
  tags: ['distance'],
  summary: 'Get distance and travel time between two geographic points',
  description:
    'Represents the distance and time of the shortest or fastest path between given start and end points.',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'kml', 'html'])
        .default('json')
        .openapi({
          param: {
            description: 'Format of representation',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'kml', 'html'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      points: z
        .string()
        .openapi({
          param: {
            description:
              "A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>",
            example: '-123.70794,48.77869,-123.53785,48.38200',
            in: 'query',
            name: 'points',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      criteria: z
        .enum(['shortest', 'fastest'])
        .default('shortest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.',
            in: 'query',
            name: 'criteria',
            required: false,
            schema: { default: 'shortest', enum: ['shortest', 'fastest'], type: 'string' },
          },
        }),
      distanceUnit: z
        .enum(['km', 'mi'])
        .default('km')
        .exactOptional()
        .openapi({
          param: {
            description: 'distance unit of measure (e.g., km, mi). Default is km.',
            in: 'query',
            name: 'distanceUnit',
            required: false,
            schema: { default: 'km', enum: ['km', 'mi'], type: 'string' },
          },
        }),
      roundTrip: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, route ends at start point. Default is false.',
            in: 'query',
            name: 'roundTrip',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      departure: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled',
            in: 'query',
            name: 'departure',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      correctSide: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, route starts and ends on same side of road as start and end points.Default is false.',
            in: 'query',
            name: 'correctSide',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      disable: z
        .string()
        .default('sc,tf,ev,td')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)',
            in: 'query',
            name: 'disable',
            required: false,
            schema: { default: 'sc,tf,ev,td', type: 'string' },
          },
        }),
      routeDescription: z
        .string()
        .default('Routing results')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)',
            in: 'query',
            name: 'routeDescription',
            required: false,
            schema: { default: 'Routing results', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Distance and time of the shortest or fastest route' } },
})

export const getDistanceBetweenPairsOutputFormatRoute = createRoute({
  method: 'get',
  path: '/distance/betweenPairs.{outputFormat}',
  tags: ['distance'],
  summary: 'Get distance and travel time between each pair of geographic points',
  description:
    'Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'html'])
        .default('json')
        .openapi({
          param: {
            description: 'Format of representation',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'html'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      fromPoints: z
        .string()
        .openapi({
          param: {
            description:
              "A comma-separated list of origin points.  See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#fromPoints target='_blank'>fromPoints</a>",
            example: '-123.70794,48.77869,-123.53785,48.38200',
            in: 'query',
            name: 'fromPoints',
            required: true,
            schema: { type: 'string' },
          },
        }),
      toPoints: z
        .string()
        .openapi({
          param: {
            description:
              "A comma-separated list of destination points. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#toPoints target='_blank'>toPoints</a>",
            example: '-124.972951,49.715181,-123.139464,49.704015',
            in: 'query',
            name: 'toPoints',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      criteria: z
        .enum(['shortest', 'fastest'])
        .default('shortest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.',
            in: 'query',
            name: 'criteria',
            required: false,
            schema: { default: 'shortest', enum: ['shortest', 'fastest'], type: 'string' },
          },
        }),
      distanceUnit: z
        .enum(['km', 'mi'])
        .default('km')
        .exactOptional()
        .openapi({
          param: {
            description: 'distance unit of measure (e.g., km, mi). Default is km.',
            in: 'query',
            name: 'distanceUnit',
            required: false,
            schema: { default: 'km', enum: ['km', 'mi'], type: 'string' },
          },
        }),
      departure: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled',
            in: 'query',
            name: 'departure',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      correctSide: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, route starts and ends on same side of road as start and end points.Default is false.',
            in: 'query',
            name: 'correctSide',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      disable: z
        .string()
        .default('sc,tf,ev,td')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)',
            in: 'query',
            name: 'disable',
            required: false,
            schema: { default: 'sc,tf,ev,td', type: 'string' },
          },
        }),
      routeDescription: z
        .string()
        .default('Routing results')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)',
            in: 'query',
            name: 'routeDescription',
            required: false,
            schema: { default: 'Routing results', type: 'string' },
          },
        }),
      maxPairs: z
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
              'The maximum number of pairs to return for each toPoint.  Pairs are ordered by distance/time from fromPoint. For example, given 1 fromPoint, and 10 toPoints, and maxPairs=1 , return the nearest toPoint to the fromPoint. Given 3 fromPoints and 10 toPoints, maxPairs=3 means return the 3 nearest toPoints to each fromPoint.',
            in: 'query',
            name: 'maxPairs',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'A list of routes and their route distances/times.' } },
})

export const postDistanceBetweenPairsOutputFormatRoute = createRoute({
  method: 'post',
  path: '/distance/betweenPairs.{outputFormat}',
  tags: ['distance'],
  summary: 'Get distance and travel time between each pair of geographic points',
  description:
    'Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'html'])
        .default('json')
        .openapi({
          param: {
            description: 'Format of representation',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'html'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      fromPoints: z
        .string()
        .openapi({
          param: {
            description:
              "A comma-separated list of origin points.  See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#fromPoints target='_blank'>fromPoints</a>",
            example: '-123.70794,48.77869,-123.53785,48.38200',
            in: 'query',
            name: 'fromPoints',
            required: true,
            schema: { type: 'string' },
          },
        }),
      toPoints: z
        .string()
        .openapi({
          param: {
            description:
              "A comma-separated list of destination points. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#toPoints target='_blank'>toPoints</a>",
            example: '-124.972951,49.715181,-123.139464,49.704015',
            in: 'query',
            name: 'toPoints',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      criteria: z
        .enum(['shortest', 'fastest'])
        .default('shortest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.',
            in: 'query',
            name: 'criteria',
            required: false,
            schema: { default: 'shortest', enum: ['shortest', 'fastest'], type: 'string' },
          },
        }),
      distanceUnit: z
        .enum(['km', 'mi'])
        .default('km')
        .exactOptional()
        .openapi({
          param: {
            description: 'distance unit of measure (e.g., km, mi). Default is km.',
            in: 'query',
            name: 'distanceUnit',
            required: false,
            schema: { default: 'km', enum: ['km', 'mi'], type: 'string' },
          },
        }),
      departure: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled',
            in: 'query',
            name: 'departure',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      correctSide: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, route starts and ends on same side of road as start and end points.Default is false.',
            in: 'query',
            name: 'correctSide',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      disable: z
        .string()
        .default('sc,tf,ev,td')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)',
            in: 'query',
            name: 'disable',
            required: false,
            schema: { default: 'sc,tf,ev,td', type: 'string' },
          },
        }),
      routeDescription: z
        .string()
        .default('Routing results')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)',
            in: 'query',
            name: 'routeDescription',
            required: false,
            schema: { default: 'Routing results', type: 'string' },
          },
        }),
      maxPairs: z
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
              'The maximum number of pairs to return for each toPoint.  Pairs are ordered by distance/time from fromPoint. For example, given 1 fromPoint, and 10 toPoints, and maxPairs=1 , return the nearest toPoint to the fromPoint. Given 3 fromPoints and 10 toPoints, maxPairs=3 means return the 3 nearest toPoints to each fromPoint.',
            in: 'query',
            name: 'maxPairs',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'A list of routes and their route distances/times.' } },
})

export const getOptimalDirectionsOutputFormatRoute = createRoute({
  method: 'get',
  path: '/optimalDirections.{outputFormat}',
  tags: ['directions'],
  summary:
    'Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.',
  description:
    'Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and a series of end points which are reordered to minimize distance/time',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'kml', 'html'])
        .default('json')
        .openapi({
          param: {
            description: 'Format of representation',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'kml', 'html'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      points: z
        .string()
        .openapi({
          param: {
            description:
              "A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>",
            example: '-123.70794,48.77869,-123.53785,48.38200',
            in: 'query',
            name: 'points',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      criteria: z
        .enum(['shortest', 'fastest'])
        .default('shortest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.',
            in: 'query',
            name: 'criteria',
            required: false,
            schema: { default: 'shortest', enum: ['shortest', 'fastest'], type: 'string' },
          },
        }),
      distanceUnit: z
        .enum(['km', 'mi'])
        .default('km')
        .exactOptional()
        .openapi({
          param: {
            description: 'distance unit of measure (e.g., km, mi). Default is km.',
            in: 'query',
            name: 'distanceUnit',
            required: false,
            schema: { default: 'km', enum: ['km', 'mi'], type: 'string' },
          },
        }),
      roundTrip: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, route ends at start point. Default is false.',
            in: 'query',
            name: 'roundTrip',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      departure: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled',
            in: 'query',
            name: 'departure',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      correctSide: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, route starts and ends on same side of road as start and end points.Default is false.',
            in: 'query',
            name: 'correctSide',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      disable: z
        .string()
        .default('sc,tf,ev,td')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)',
            in: 'query',
            name: 'disable',
            required: false,
            schema: { default: 'sc,tf,ev,td', type: 'string' },
          },
        }),
      routeDescription: z
        .string()
        .default('Routing results')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)',
            in: 'query',
            name: 'routeDescription',
            required: false,
            schema: { default: 'Routing results', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'turn-by-turn directions, geometry, distance, and time of the shortest or fastest route. End points are reordered to minimize total distance or time.',
    },
  },
})

export const postOptimalDirectionsOutputFormatRoute = createRoute({
  method: 'post',
  path: '/optimalDirections.{outputFormat}',
  tags: ['directions'],
  summary:
    'Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.',
  description:
    'Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and one or more end points which are reordered to minimize distance or time.',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'kml', 'html'])
        .default('json')
        .openapi({
          param: {
            description: 'Format of representation',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'kml', 'html'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      points: z
        .string()
        .openapi({
          param: {
            description:
              "A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>",
            example: '-123.70794,48.77869,-123.53785,48.38200',
            in: 'query',
            name: 'points',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      criteria: z
        .enum(['shortest', 'fastest'])
        .default('shortest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.',
            in: 'query',
            name: 'criteria',
            required: false,
            schema: { default: 'shortest', enum: ['shortest', 'fastest'], type: 'string' },
          },
        }),
      distanceUnit: z
        .enum(['km', 'mi'])
        .default('km')
        .exactOptional()
        .openapi({
          param: {
            description: 'distance unit of measure (e.g., km, mi). Default is km.',
            in: 'query',
            name: 'distanceUnit',
            required: false,
            schema: { default: 'km', enum: ['km', 'mi'], type: 'string' },
          },
        }),
      roundTrip: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, route ends at start point. Default is false.',
            in: 'query',
            name: 'roundTrip',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      departure: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled',
            in: 'query',
            name: 'departure',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      correctSide: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, route starts and ends on same side of road as start and end points.Default is false.',
            in: 'query',
            name: 'correctSide',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      disable: z
        .string()
        .default('sc,tf,ev,td')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)',
            in: 'query',
            name: 'disable',
            required: false,
            schema: { default: 'sc,tf,ev,td', type: 'string' },
          },
        }),
      routeDescription: z
        .string()
        .default('Routing results')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)',
            in: 'query',
            name: 'routeDescription',
            required: false,
            schema: { default: 'Routing results', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'turn-by-turn directions, geometry, distance, and time of the shortest or fastest route. End points are reordered to minimize total distance or time.',
    },
  },
})

export const getOptimalRouteOutputFormatRoute = createRoute({
  method: 'get',
  path: '/optimalRoute.{outputFormat}',
  tags: ['route'],
  summary:
    'Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.',
  description:
    'Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize distance or time',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'kml', 'html'])
        .default('json')
        .openapi({
          param: {
            description: 'Format of representation',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'kml', 'html'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      points: z
        .string()
        .openapi({
          param: {
            description:
              "A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>",
            example: '-123.70794,48.77869,-123.53785,48.38200',
            in: 'query',
            name: 'points',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      criteria: z
        .enum(['shortest', 'fastest'])
        .default('shortest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.',
            in: 'query',
            name: 'criteria',
            required: false,
            schema: { default: 'shortest', enum: ['shortest', 'fastest'], type: 'string' },
          },
        }),
      distanceUnit: z
        .enum(['km', 'mi'])
        .default('km')
        .exactOptional()
        .openapi({
          param: {
            description: 'distance unit of measure (e.g., km, mi). Default is km.',
            in: 'query',
            name: 'distanceUnit',
            required: false,
            schema: { default: 'km', enum: ['km', 'mi'], type: 'string' },
          },
        }),
      roundTrip: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, route ends at start point. Default is false.',
            in: 'query',
            name: 'roundTrip',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      departure: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled',
            in: 'query',
            name: 'departure',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      correctSide: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, route starts and ends on same side of road as start and end points.Default is false.',
            in: 'query',
            name: 'correctSide',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      disable: z
        .string()
        .default('sc,tf,ev,td')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)',
            in: 'query',
            name: 'disable',
            required: false,
            schema: { default: 'sc,tf,ev,td', type: 'string' },
          },
        }),
      routeDescription: z
        .string()
        .default('Routing results')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)',
            in: 'query',
            name: 'routeDescription',
            required: false,
            schema: { default: 'Routing results', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Geometry, distance, and time of the shortest or fastest route. End points are reordered to minimize total distance or time',
    },
  },
})

export const postOptimalRouteOutputFormatRoute = createRoute({
  method: 'post',
  path: '/optimalRoute.{outputFormat}',
  tags: ['route'],
  summary:
    'Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.',
  description:
    'Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize total distance or time.',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'kml', 'html'])
        .default('json')
        .openapi({
          param: {
            description: 'Format of representation',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'kml', 'html'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      points: z
        .string()
        .openapi({
          param: {
            description:
              "A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>",
            example: '-123.70794,48.77869,-123.53785,48.38200',
            in: 'query',
            name: 'points',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      criteria: z
        .enum(['shortest', 'fastest'])
        .default('shortest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.',
            in: 'query',
            name: 'criteria',
            required: false,
            schema: { default: 'shortest', enum: ['shortest', 'fastest'], type: 'string' },
          },
        }),
      distanceUnit: z
        .enum(['km', 'mi'])
        .default('km')
        .exactOptional()
        .openapi({
          param: {
            description: 'distance unit of measure (e.g., km, mi). Default is km.',
            in: 'query',
            name: 'distanceUnit',
            required: false,
            schema: { default: 'km', enum: ['km', 'mi'], type: 'string' },
          },
        }),
      roundTrip: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, route ends at start point. Default is false.',
            in: 'query',
            name: 'roundTrip',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      departure: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled',
            in: 'query',
            name: 'departure',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      correctSide: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, route starts and ends on same side of road as start and end points.Default is false.',
            in: 'query',
            name: 'correctSide',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      disable: z
        .string()
        .default('sc,tf,ev,td')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)',
            in: 'query',
            name: 'disable',
            required: false,
            schema: { default: 'sc,tf,ev,td', type: 'string' },
          },
        }),
      routeDescription: z
        .string()
        .default('Routing results')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)',
            in: 'query',
            name: 'routeDescription',
            required: false,
            schema: { default: 'Routing results', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Geometry, distance, and time of the shortest or fastest route. End points are reordered to minimize total distance or time.',
    },
  },
})

export const getRouteOutputFormatRoute = createRoute({
  method: 'get',
  path: '/route.{outputFormat}',
  tags: ['route'],
  summary: 'Get the path, distance and travel time between a series of geographic points',
  description:
    'Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'kml', 'html'])
        .default('json')
        .openapi({
          param: {
            description: 'Format of representation',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'kml', 'html'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      points: z
        .string()
        .openapi({
          param: {
            description:
              "A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>",
            example: '-123.70794,48.77869,-123.53785,48.38200',
            in: 'query',
            name: 'points',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      criteria: z
        .enum(['shortest', 'fastest'])
        .default('shortest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.',
            in: 'query',
            name: 'criteria',
            required: false,
            schema: { default: 'shortest', enum: ['shortest', 'fastest'], type: 'string' },
          },
        }),
      distanceUnit: z
        .enum(['km', 'mi'])
        .default('km')
        .exactOptional()
        .openapi({
          param: {
            description: 'distance unit of measure (e.g., km, mi). Default is km.',
            in: 'query',
            name: 'distanceUnit',
            required: false,
            schema: { default: 'km', enum: ['km', 'mi'], type: 'string' },
          },
        }),
      roundTrip: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, route ends at start point. Default is false.',
            in: 'query',
            name: 'roundTrip',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      departure: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled',
            in: 'query',
            name: 'departure',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      correctSide: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, route starts and ends on same side of road as start/end point.Default is false.',
            in: 'query',
            name: 'correctSide',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      disable: z
        .string()
        .default('sc,tf,ev,td')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br> Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)',
            in: 'query',
            name: 'disable',
            required: false,
            schema: { default: 'sc,tf,ev,td', type: 'string' },
          },
        }),
      routeDescription: z
        .string()
        .default('Routing results')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)',
            in: 'query',
            name: 'routeDescription',
            required: false,
            schema: { default: 'Routing results', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Geometry, distance, and time of the shortest or fastest route' },
  },
})

export const postRouteOutputFormatRoute = createRoute({
  method: 'post',
  path: '/route.{outputFormat}',
  tags: ['route'],
  summary: 'Get the path, distance and travel time between a series of geographic points',
  description:
    'Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'kml', 'html'])
        .default('json')
        .openapi({
          param: {
            description: 'Format of representation',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'kml', 'html'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      points: z
        .string()
        .openapi({
          param: {
            description:
              "A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>",
            example: '-123.70794,48.77869,-123.53785,48.38200',
            in: 'query',
            name: 'points',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      criteria: z
        .enum(['shortest', 'fastest'])
        .default('shortest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.',
            in: 'query',
            name: 'criteria',
            required: false,
            schema: { default: 'shortest', enum: ['shortest', 'fastest'], type: 'string' },
          },
        }),
      distanceUnit: z
        .enum(['km', 'mi'])
        .default('km')
        .exactOptional()
        .openapi({
          param: {
            description: 'distance unit of measure (e.g., km, mi). Default is km.',
            in: 'query',
            name: 'distanceUnit',
            required: false,
            schema: { default: 'km', enum: ['km', 'mi'], type: 'string' },
          },
        }),
      roundTrip: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, route ends at start point. Default is false.',
            in: 'query',
            name: 'roundTrip',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      departure: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled',
            in: 'query',
            name: 'departure',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      correctSide: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, route starts and ends on same side of road as start/end point.Default is false.',
            in: 'query',
            name: 'correctSide',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      disable: z
        .string()
        .default('sc,tf,ev,td')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)',
            in: 'query',
            name: 'disable',
            required: false,
            schema: { default: 'sc,tf,ev,td', type: 'string' },
          },
        }),
      routeDescription: z
        .string()
        .default('Routing results')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)',
            in: 'query',
            name: 'routeDescription',
            required: false,
            schema: { default: 'Routing results', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Geometry, distance, and time of the shortest or fastest route' },
  },
})

export const getTruckDirectionsOutputFormatRoute = createRoute({
  method: 'get',
  path: '/truck/directions.{outputFormat}',
  tags: ['directions'],
  summary:
    'Get the directions, path, distance and travel time between a series of geographic points for a commercial vehicle',
  description:
    'Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points for a commercial vehicle',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'kml', 'html'])
        .default('json')
        .openapi({
          param: {
            description: 'Format of representation',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'kml', 'html'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      points: z
        .string()
        .openapi({
          param: {
            description:
              "A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>",
            example: '-123.70794,48.77869,-123.53785,48.38200',
            in: 'query',
            name: 'points',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      criteria: z
        .enum(['shortest', 'fastest'])
        .default('shortest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.',
            in: 'query',
            name: 'criteria',
            required: false,
            schema: { default: 'shortest', enum: ['shortest', 'fastest'], type: 'string' },
          },
        }),
      distanceUnit: z
        .enum(['km', 'mi'])
        .default('km')
        .exactOptional()
        .openapi({
          param: {
            description: 'distance unit of measure (e.g., km, mi). Default is km.',
            in: 'query',
            name: 'distanceUnit',
            required: false,
            schema: { default: 'km', enum: ['km', 'mi'], type: 'string' },
          },
        }),
      roundTrip: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, route ends at start point. Default is false.',
            in: 'query',
            name: 'roundTrip',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      departure: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled',
            in: 'query',
            name: 'departure',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      correctSide: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, route starts and ends on same side of road as start/end point.Default is false.',
            in: 'query',
            name: 'correctSide',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      truckRouteMultiplier: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(9)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The truck route multiplier value is used to multiply the cost of using roads that are not truck routes.',
            in: 'query',
            name: 'truckRouteMultiplier',
            required: false,
            schema: { default: 9, type: 'integer' },
          },
        }),
      partition: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of values to identify sections of the route that correspond to truck route sections and non-truck route sections, ferry sections and non-ferry sections, and locality names.  The response includes a partitions attribute, which is an array of objects, each of which has an index (into the route coordinate array) and a value for each of the attributes requested in the partition parameter. Any or all of the following values can be used. <br><br>Partition values:<br> isTruckRoute – Distinguish between truck route sections and non-truck route sections <br> isFerry – Distinguish between ferry sections and non-ferry sections <br> locality – Include the locality name for the route partition',
            in: 'query',
            name: 'partition',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      disable: z
        .string()
        .default('sc,tf,ev,td')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)',
            in: 'query',
            name: 'disable',
            required: false,
            schema: { default: 'sc,tf,ev,td', type: 'string' },
          },
        }),
      routeDescription: z
        .string()
        .default('Routing results')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)',
            in: 'query',
            name: 'routeDescription',
            required: false,
            schema: { default: 'Routing results', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'turn-by-turn directions, geometry, distance, and time of the shortest or fastest route',
    },
  },
})

export const postTruckDirectionsOutputFormatRoute = createRoute({
  method: 'post',
  path: '/truck/directions.{outputFormat}',
  tags: ['directions'],
  summary:
    'Get the directions, path, distance and travel time between a series of geographic points',
  description:
    'Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'kml', 'html'])
        .default('json')
        .openapi({
          param: {
            description: 'Format of representation',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'kml', 'html'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      points: z
        .string()
        .openapi({
          param: {
            description:
              "A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>",
            example: '-123.70794,48.77869,-123.53785,48.38200',
            in: 'query',
            name: 'points',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      criteria: z
        .enum(['shortest', 'fastest'])
        .default('shortest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.',
            in: 'query',
            name: 'criteria',
            required: false,
            schema: { default: 'shortest', enum: ['shortest', 'fastest'], type: 'string' },
          },
        }),
      distanceUnit: z
        .enum(['km', 'mi'])
        .default('km')
        .exactOptional()
        .openapi({
          param: {
            description: 'distance unit of measure (e.g., km, mi). Default is km.',
            in: 'query',
            name: 'distanceUnit',
            required: false,
            schema: { default: 'km', enum: ['km', 'mi'], type: 'string' },
          },
        }),
      roundTrip: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, route ends at start point. Default is false.',
            in: 'query',
            name: 'roundTrip',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      departure: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled',
            in: 'query',
            name: 'departure',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      correctSide: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, route starts and ends on same side of road as start/end point.Default is false.',
            in: 'query',
            name: 'correctSide',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      truckRouteMultiplier: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(9)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The truck route multiplier value is used to multiply the cost of using roads that are not truck routes.',
            in: 'query',
            name: 'truckRouteMultiplier',
            required: false,
            schema: { default: 9, type: 'integer' },
          },
        }),
      partition: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of values to identify sections of the route that correspond to truck route sections and non-truck route sections, ferry sections and non-ferry sections, and locality names.  The response includes a partitions attribute, which is an array of objects, each of which has an index (into the route coordinate array) and a value for each of the attributes requested in the partition parameter. Any or all of the following values can be used. <br><br>Partition values:<br> isTruckRoute – Distinguish between truck route sections and non-truck route sections <br> isFerry – Distinguish between ferry sections and non-ferry sections <br> locality – Include the locality name for the route partition',
            in: 'query',
            name: 'partition',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      disable: z
        .string()
        .default('sc,tf,ev,td')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)',
            in: 'query',
            name: 'disable',
            required: false,
            schema: { default: 'sc,tf,ev,td', type: 'string' },
          },
        }),
      routeDescription: z
        .string()
        .default('Routing results')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)',
            in: 'query',
            name: 'routeDescription',
            required: false,
            schema: { default: 'Routing results', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'turn-by-turn directions, geometry, distance, and time of the shortest or fastest route',
    },
  },
})

export const getTruckDistanceOutputFormatRoute = createRoute({
  method: 'get',
  path: '/truck/distance.{outputFormat}',
  tags: ['distance'],
  summary: 'Get distance and travel time between two geographic points for a commercial vehicle',
  description:
    'Represents the distance and time of the shortest or fastest path between given start and end points.',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'kml', 'html'])
        .default('json')
        .openapi({
          param: {
            description: 'Format of representation',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'kml', 'html'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      points: z
        .string()
        .openapi({
          param: {
            description:
              "A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>",
            example: '-123.70794,48.77869,-123.53785,48.38200',
            in: 'query',
            name: 'points',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      criteria: z
        .enum(['shortest', 'fastest'])
        .default('shortest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.',
            in: 'query',
            name: 'criteria',
            required: false,
            schema: { default: 'shortest', enum: ['shortest', 'fastest'], type: 'string' },
          },
        }),
      distanceUnit: z
        .enum(['km', 'mi'])
        .default('km')
        .exactOptional()
        .openapi({
          param: {
            description: 'distance unit of measure (e.g., km, mi). Default is km.',
            in: 'query',
            name: 'distanceUnit',
            required: false,
            schema: { default: 'km', enum: ['km', 'mi'], type: 'string' },
          },
        }),
      roundTrip: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, route ends at start point. Default is false.',
            in: 'query',
            name: 'roundTrip',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      departure: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled',
            in: 'query',
            name: 'departure',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      correctSide: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, route starts and ends on same side of road as start and end points.Default is false.',
            in: 'query',
            name: 'correctSide',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      truckRouteMultiplier: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(9)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The truck route multiplier value is used to multiply the cost of using roads that are not truck routes.',
            in: 'query',
            name: 'truckRouteMultiplier',
            required: false,
            schema: { default: 9, type: 'integer' },
          },
        }),
      disable: z
        .string()
        .default('sc,tf,ev,td')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)',
            in: 'query',
            name: 'disable',
            required: false,
            schema: { default: 'sc,tf,ev,td', type: 'string' },
          },
        }),
      routeDescription: z
        .string()
        .default('Routing results')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)',
            in: 'query',
            name: 'routeDescription',
            required: false,
            schema: { default: 'Routing results', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Distance and time of the shortest or fastest route' } },
})

export const postTruckDistanceOutputFormatRoute = createRoute({
  method: 'post',
  path: '/truck/distance.{outputFormat}',
  tags: ['distance'],
  summary: 'Get distance and travel time between two geographic points',
  description:
    'Represents the distance and time of the shortest or fastest path between given start and end points.',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'kml', 'html'])
        .default('json')
        .openapi({
          param: {
            description: 'Format of representation',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'kml', 'html'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      points: z
        .string()
        .openapi({
          param: {
            description:
              "A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>",
            example: '-123.70794,48.77869,-123.53785,48.38200',
            in: 'query',
            name: 'points',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      criteria: z
        .enum(['shortest', 'fastest'])
        .default('shortest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.',
            in: 'query',
            name: 'criteria',
            required: false,
            schema: { default: 'shortest', enum: ['shortest', 'fastest'], type: 'string' },
          },
        }),
      distanceUnit: z
        .enum(['km', 'mi'])
        .default('km')
        .exactOptional()
        .openapi({
          param: {
            description: 'distance unit of measure (e.g., km, mi). Default is km.',
            in: 'query',
            name: 'distanceUnit',
            required: false,
            schema: { default: 'km', enum: ['km', 'mi'], type: 'string' },
          },
        }),
      roundTrip: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, route ends at start point. Default is false.',
            in: 'query',
            name: 'roundTrip',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      departure: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled',
            in: 'query',
            name: 'departure',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      correctSide: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, route starts and ends on same side of road as start and end points.Default is false.',
            in: 'query',
            name: 'correctSide',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      disable: z
        .string()
        .default('sc,tf,ev,td')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)',
            in: 'query',
            name: 'disable',
            required: false,
            schema: { default: 'sc,tf,ev,td', type: 'string' },
          },
        }),
      routeDescription: z
        .string()
        .default('Routing results')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)',
            in: 'query',
            name: 'routeDescription',
            required: false,
            schema: { default: 'Routing results', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Distance and time of the shortest or fastest route' } },
})

export const getTruckDistanceBetweenPairsOutputFormatRoute = createRoute({
  method: 'get',
  path: '/truck/distance/betweenPairs.{outputFormat}',
  tags: ['distance'],
  summary:
    'Get distance and travel time between each pair of geographic points for a commercial vehicle',
  description:
    'Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints for a commercial vehicle. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'html'])
        .default('json')
        .openapi({
          param: {
            description: 'Format of representation',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'html'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      fromPoints: z
        .string()
        .openapi({
          param: {
            description:
              "A comma-separated list of origin points.  See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#fromPoints target='_blank'>fromPoints</a>",
            example: '-123.70794,48.77869,-123.53785,48.38200',
            in: 'query',
            name: 'fromPoints',
            required: true,
            schema: { type: 'string' },
          },
        }),
      toPoints: z
        .string()
        .openapi({
          param: {
            description:
              "A comma-separated list of destination points. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#toPoints target='_blank'>toPoints</a>",
            example: '-124.972951,49.715181,-123.139464,49.704015',
            in: 'query',
            name: 'toPoints',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      criteria: z
        .enum(['shortest', 'fastest'])
        .default('shortest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.',
            in: 'query',
            name: 'criteria',
            required: false,
            schema: { default: 'shortest', enum: ['shortest', 'fastest'], type: 'string' },
          },
        }),
      distanceUnit: z
        .enum(['km', 'mi'])
        .default('km')
        .exactOptional()
        .openapi({
          param: {
            description: 'distance unit of measure (e.g., km, mi). Default is km.',
            in: 'query',
            name: 'distanceUnit',
            required: false,
            schema: { default: 'km', enum: ['km', 'mi'], type: 'string' },
          },
        }),
      departure: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled',
            in: 'query',
            name: 'departure',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      correctSide: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, route starts and ends on same side of road as start and end points.Default is false.',
            in: 'query',
            name: 'correctSide',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      disable: z
        .string()
        .default('sc,tf,ev,td')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)',
            in: 'query',
            name: 'disable',
            required: false,
            schema: { default: 'sc,tf,ev,td', type: 'string' },
          },
        }),
      routeDescription: z
        .string()
        .default('Routing results')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)',
            in: 'query',
            name: 'routeDescription',
            required: false,
            schema: { default: 'Routing results', type: 'string' },
          },
        }),
      maxPairs: z
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
              'The maximum number of pairs to return for each toPoint.  Pairs are ordered by distance/time from fromPoint. For example, given 1 fromPoint, and 10 toPoints, and maxPairs=1 , return the nearest toPoint to the fromPoint. Given 3 fromPoints and 10 toPoints, maxPairs=3 means return the 3 nearest toPoints to each fromPoint.',
            in: 'query',
            name: 'maxPairs',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'A list of routes and their route distances/times.' } },
})

export const postTruckDistanceBetweenPairsOutputFormatRoute = createRoute({
  method: 'post',
  path: '/truck/distance/betweenPairs.{outputFormat}',
  tags: ['distance'],
  summary: 'Get distance and travel time between each pair of geographic points',
  description:
    'Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'html'])
        .default('json')
        .openapi({
          param: {
            description: 'Format of representation',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'html'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      fromPoints: z
        .string()
        .openapi({
          param: {
            description:
              "A comma-separated list of origin points.  See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#fromPoints target='_blank'>fromPoints</a>",
            example: '-123.70794,48.77869,-123.53785,48.38200',
            in: 'query',
            name: 'fromPoints',
            required: true,
            schema: { type: 'string' },
          },
        }),
      toPoints: z
        .string()
        .openapi({
          param: {
            description:
              "A comma-separated list of destination points. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#toPoints target='_blank'>toPoints</a>",
            example: '-124.972951,49.715181,-123.139464,49.704015',
            in: 'query',
            name: 'toPoints',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      criteria: z
        .enum(['shortest', 'fastest'])
        .default('shortest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.',
            in: 'query',
            name: 'criteria',
            required: false,
            schema: { default: 'shortest', enum: ['shortest', 'fastest'], type: 'string' },
          },
        }),
      distanceUnit: z
        .enum(['km', 'mi'])
        .default('km')
        .exactOptional()
        .openapi({
          param: {
            description: 'distance unit of measure (e.g., km, mi). Default is km.',
            in: 'query',
            name: 'distanceUnit',
            required: false,
            schema: { default: 'km', enum: ['km', 'mi'], type: 'string' },
          },
        }),
      departure: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled',
            in: 'query',
            name: 'departure',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      correctSide: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, route starts and ends on same side of road as start and end points.Default is false.',
            in: 'query',
            name: 'correctSide',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      disable: z
        .string()
        .default('sc,tf,ev,td')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)',
            in: 'query',
            name: 'disable',
            required: false,
            schema: { default: 'sc,tf,ev,td', type: 'string' },
          },
        }),
      routeDescription: z
        .string()
        .default('Routing results')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)',
            in: 'query',
            name: 'routeDescription',
            required: false,
            schema: { default: 'Routing results', type: 'string' },
          },
        }),
      maxPairs: z
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
              'The maximum number of pairs to return for each toPoint.  Pairs are ordered by distance/time from fromPoint. For example, given 1 fromPoint, and 10 toPoints, and maxPairs=1 , return the nearest toPoint to the fromPoint. Given 3 fromPoints and 10 toPoints, maxPairs=3 means return the 3 nearest toPoints to each fromPoint.',
            in: 'query',
            name: 'maxPairs',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'A list of routes and their route distances/times.' } },
})

export const getTruckOptimalDirectionsOutputFormatRoute = createRoute({
  method: 'get',
  path: '/truck/optimalDirections.{outputFormat}',
  tags: ['directions'],
  summary:
    'Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle',
  description:
    'Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and a series of end points which are reordered to minimize distance/time for a commercial vehicle.',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'kml', 'html'])
        .default('json')
        .openapi({
          param: {
            description: 'Format of representation',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'kml', 'html'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      points: z
        .string()
        .openapi({
          param: {
            description:
              "A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>",
            example: '-123.70794,48.77869,-123.53785,48.38200',
            in: 'query',
            name: 'points',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      criteria: z
        .enum(['shortest', 'fastest'])
        .default('shortest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.',
            in: 'query',
            name: 'criteria',
            required: false,
            schema: { default: 'shortest', enum: ['shortest', 'fastest'], type: 'string' },
          },
        }),
      distanceUnit: z
        .enum(['km', 'mi'])
        .default('km')
        .exactOptional()
        .openapi({
          param: {
            description: 'distance unit of measure (e.g., km, mi). Default is km.',
            in: 'query',
            name: 'distanceUnit',
            required: false,
            schema: { default: 'km', enum: ['km', 'mi'], type: 'string' },
          },
        }),
      roundTrip: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, route ends at start point. Default is false.',
            in: 'query',
            name: 'roundTrip',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      departure: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled',
            in: 'query',
            name: 'departure',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      correctSide: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, route starts and ends on same side of road as start and end points.Default is false.',
            in: 'query',
            name: 'correctSide',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      truckRouteMultiplier: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(9)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The truck route multiplier value is used to multiply the cost of using roads that are not truck routes.',
            in: 'query',
            name: 'truckRouteMultiplier',
            required: false,
            schema: { default: 9, type: 'integer' },
          },
        }),
      partition: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of values to identify sections of the route that correspond to truck route sections and non-truck route sections, ferry sections and non-ferry sections, and locality names.  The response includes a partitions attribute, which is an array of objects, each of which has an index (into the route coordinate array) and a value for each of the attributes requested in the partition parameter. Any or all of the following values can be used. <br><br>Partition values:<br> isTruckRoute – Distinguish between truck route sections and non-truck route sections <br> isFerry – Distinguish between ferry sections and non-ferry sections <br> locality – Include the locality name for the route partition',
            in: 'query',
            name: 'partition',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      disable: z
        .string()
        .default('sc,tf,ev,td')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)',
            in: 'query',
            name: 'disable',
            required: false,
            schema: { default: 'sc,tf,ev,td', type: 'string' },
          },
        }),
      routeDescription: z
        .string()
        .default('Routing results')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)',
            in: 'query',
            name: 'routeDescription',
            required: false,
            schema: { default: 'Routing results', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'turn-by-turn directions, geometry, distance, and time of the shortest or fastest route. End points are reordered to minimize total distance or time.',
    },
  },
})

export const postTruckOptimalDirectionsOutputFormatRoute = createRoute({
  method: 'post',
  path: '/truck/optimalDirections.{outputFormat}',
  tags: ['directions'],
  summary:
    'Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.',
  description:
    'Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and one or more end points which are reordered to minimize distance or time.',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'kml', 'html'])
        .default('json')
        .openapi({
          param: {
            description: 'Format of representation',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'kml', 'html'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      points: z
        .string()
        .openapi({
          param: {
            description:
              "A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>",
            example: '-123.70794,48.77869,-123.53785,48.38200',
            in: 'query',
            name: 'points',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      criteria: z
        .enum(['shortest', 'fastest'])
        .default('shortest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.',
            in: 'query',
            name: 'criteria',
            required: false,
            schema: { default: 'shortest', enum: ['shortest', 'fastest'], type: 'string' },
          },
        }),
      distanceUnit: z
        .enum(['km', 'mi'])
        .default('km')
        .exactOptional()
        .openapi({
          param: {
            description: 'distance unit of measure (e.g., km, mi). Default is km.',
            in: 'query',
            name: 'distanceUnit',
            required: false,
            schema: { default: 'km', enum: ['km', 'mi'], type: 'string' },
          },
        }),
      roundTrip: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, route ends at start point. Default is false.',
            in: 'query',
            name: 'roundTrip',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      departure: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled',
            in: 'query',
            name: 'departure',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      correctSide: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, route starts and ends on same side of road as start and end points.Default is false.',
            in: 'query',
            name: 'correctSide',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      truckRouteMultiplier: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(9)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The truck route multiplier value is used to multiply the cost of using roads that are not truck routes.',
            in: 'query',
            name: 'truckRouteMultiplier',
            required: false,
            schema: { default: 9, type: 'integer' },
          },
        }),
      partition: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of values to identify sections of the route that correspond to truck route sections and non-truck route sections, ferry sections and non-ferry sections, and locality names.  The response includes a partitions attribute, which is an array of objects, each of which has an index (into the route coordinate array) and a value for each of the attributes requested in the partition parameter. Any or all of the following values can be used. <br><br>Partition values:<br> isTruckRoute – Distinguish between truck route sections and non-truck route sections <br> isFerry – Distinguish between ferry sections and non-ferry sections <br> locality – Include the locality name for the route partition',
            in: 'query',
            name: 'partition',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      disable: z
        .string()
        .default('sc,tf,ev,td')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)',
            in: 'query',
            name: 'disable',
            required: false,
            schema: { default: 'sc,tf,ev,td', type: 'string' },
          },
        }),
      routeDescription: z
        .string()
        .default('Routing results')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)',
            in: 'query',
            name: 'routeDescription',
            required: false,
            schema: { default: 'Routing results', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'turn-by-turn directions, geometry, distance, and time of the shortest or fastest route. End points are reordered to minimize total distance or time.',
    },
  },
})

export const getTruckOptimalRouteOutputFormatRoute = createRoute({
  method: 'get',
  path: '/truck/optimalRoute.{outputFormat}',
  tags: ['route'],
  summary:
    'Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle',
  description:
    'Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize distance or time for a commercial vehicle.',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'kml', 'html'])
        .default('json')
        .openapi({
          param: {
            description: 'Format of representation',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'kml', 'html'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      points: z
        .string()
        .openapi({
          param: {
            description:
              "A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>",
            example: '-123.70794,48.77869,-123.53785,48.38200',
            in: 'query',
            name: 'points',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      criteria: z
        .enum(['shortest', 'fastest'])
        .default('shortest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.',
            in: 'query',
            name: 'criteria',
            required: false,
            schema: { default: 'shortest', enum: ['shortest', 'fastest'], type: 'string' },
          },
        }),
      distanceUnit: z
        .enum(['km', 'mi'])
        .default('km')
        .exactOptional()
        .openapi({
          param: {
            description: 'distance unit of measure (e.g., km, mi). Default is km.',
            in: 'query',
            name: 'distanceUnit',
            required: false,
            schema: { default: 'km', enum: ['km', 'mi'], type: 'string' },
          },
        }),
      roundTrip: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, route ends at start point. Default is false.',
            in: 'query',
            name: 'roundTrip',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      departure: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled',
            in: 'query',
            name: 'departure',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      correctSide: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, route starts and ends on same side of road as start and end points.Default is false.',
            in: 'query',
            name: 'correctSide',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      truckRouteMultiplier: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(9)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The truck route multiplier value is used to multiply the cost of using roads that are not truck routes.',
            in: 'query',
            name: 'truckRouteMultiplier',
            required: false,
            schema: { default: 9, type: 'integer' },
          },
        }),
      partition: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of values to identify sections of the route that correspond to truck route sections and non-truck route sections, ferry sections and non-ferry sections, and locality names.  The response includes a partitions attribute, which is an array of objects, each of which has an index (into the route coordinate array) and a value for each of the attributes requested in the partition parameter. Any or all of the following values can be used. <br><br>Partition values:<br> isTruckRoute – Distinguish between truck route sections and non-truck route sections <br> isFerry – Distinguish between ferry sections and non-ferry sections <br> locality – Include the locality name for the route partition',
            in: 'query',
            name: 'partition',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      disable: z
        .string()
        .default('sc,tf,ev,td')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)',
            in: 'query',
            name: 'disable',
            required: false,
            schema: { default: 'sc,tf,ev,td', type: 'string' },
          },
        }),
      routeDescription: z
        .string()
        .default('Routing results')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)',
            in: 'query',
            name: 'routeDescription',
            required: false,
            schema: { default: 'Routing results', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Geometry, distance, and time of the shortest or fastest route. End points are reordered to minimize total distance or time',
    },
  },
})

export const postTruckOptimalRouteOutputFormatRoute = createRoute({
  method: 'post',
  path: '/truck/optimalRoute.{outputFormat}',
  tags: ['route'],
  summary:
    'Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.',
  description:
    'Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize total distance or time.',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'kml', 'html'])
        .default('json')
        .openapi({
          param: {
            description: 'Format of representation',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'kml', 'html'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      points: z
        .string()
        .openapi({
          param: {
            description:
              "A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>",
            example: '-123.70794,48.77869,-123.53785,48.38200',
            in: 'query',
            name: 'points',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      criteria: z
        .enum(['shortest', 'fastest'])
        .default('shortest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.',
            in: 'query',
            name: 'criteria',
            required: false,
            schema: { default: 'shortest', enum: ['shortest', 'fastest'], type: 'string' },
          },
        }),
      distanceUnit: z
        .enum(['km', 'mi'])
        .default('km')
        .exactOptional()
        .openapi({
          param: {
            description: 'distance unit of measure (e.g., km, mi). Default is km.',
            in: 'query',
            name: 'distanceUnit',
            required: false,
            schema: { default: 'km', enum: ['km', 'mi'], type: 'string' },
          },
        }),
      roundTrip: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, route ends at start point. Default is false.',
            in: 'query',
            name: 'roundTrip',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      departure: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled',
            in: 'query',
            name: 'departure',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      correctSide: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, route starts and ends on same side of road as start and end points.Default is false.',
            in: 'query',
            name: 'correctSide',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      truckRouteMultiplier: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(9)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The truck route multiplier value is used to multiply the cost of using roads that are not truck routes.',
            in: 'query',
            name: 'truckRouteMultiplier',
            required: false,
            schema: { default: 9, type: 'integer' },
          },
        }),
      partition: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of values to identify sections of the route that correspond to truck route sections and non-truck route sections, ferry sections and non-ferry sections, and locality names.  The response includes a partitions attribute, which is an array of objects, each of which has an index (into the route coordinate array) and a value for each of the attributes requested in the partition parameter. Any or all of the following values can be used. <br><br>Partition values:<br> isTruckRoute – Distinguish between truck route sections and non-truck route sections <br> isFerry – Distinguish between ferry sections and non-ferry sections <br> locality – Include the locality name for the route partition',
            in: 'query',
            name: 'partition',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      disable: z
        .string()
        .default('sc,tf,ev,td')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)',
            in: 'query',
            name: 'disable',
            required: false,
            schema: { default: 'sc,tf,ev,td', type: 'string' },
          },
        }),
      routeDescription: z
        .string()
        .default('Routing results')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)',
            in: 'query',
            name: 'routeDescription',
            required: false,
            schema: { default: 'Routing results', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Geometry, distance, and time of the shortest or fastest route. End points are reordered to minimize total distance or time.',
    },
  },
})

export const getTruckRouteOutputFormatRoute = createRoute({
  method: 'get',
  path: '/truck/route.{outputFormat}',
  tags: ['route'],
  summary:
    'Get the path, distance and travel time between a series of geographic points for a commercial vehicle',
  description:
    'Represents the geometry, distance, and time of the shortest or fastest path between given start and end points for a commercial vehicle.',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'kml', 'html'])
        .default('json')
        .openapi({
          param: {
            description: 'Format of representation',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'kml', 'html'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      points: z
        .string()
        .openapi({
          param: {
            description:
              "A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>",
            example: '-123.70794,48.77869,-123.53785,48.38200',
            in: 'query',
            name: 'points',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      criteria: z
        .enum(['shortest', 'fastest'])
        .default('shortest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.',
            in: 'query',
            name: 'criteria',
            required: false,
            schema: { default: 'shortest', enum: ['shortest', 'fastest'], type: 'string' },
          },
        }),
      distanceUnit: z
        .enum(['km', 'mi'])
        .default('km')
        .exactOptional()
        .openapi({
          param: {
            description: 'distance unit of measure (e.g., km, mi). Default is km.',
            in: 'query',
            name: 'distanceUnit',
            required: false,
            schema: { default: 'km', enum: ['km', 'mi'], type: 'string' },
          },
        }),
      roundTrip: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, route ends at start point. Default is false.',
            in: 'query',
            name: 'roundTrip',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      departure: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled',
            in: 'query',
            name: 'departure',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      correctSide: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, route starts and ends on same side of road as start/end point.Default is false.',
            in: 'query',
            name: 'correctSide',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      truckRouteMultiplier: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(9)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The truck route multiplier value is used to multiply the cost of using roads that are not truck routes.',
            in: 'query',
            name: 'truckRouteMultiplier',
            required: false,
            schema: { default: 9, type: 'integer' },
          },
        }),
      partition: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of values to identify sections of the route that correspond to truck route sections and non-truck route sections, ferry sections and non-ferry sections, and locality names.  The response includes a partitions attribute, which is an array of objects, each of which has an index (into the route coordinate array) and a value for each of the attributes requested in the partition parameter. Any or all of the following values can be used. <br><br>Partition values:<br> isTruckRoute – Distinguish between truck route sections and non-truck route sections <br> isFerry – Distinguish between ferry sections and non-ferry sections <br> locality – Include the locality name for the route partition',
            in: 'query',
            name: 'partition',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      disable: z
        .string()
        .default('sc,tf,ev,td')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br> Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)',
            in: 'query',
            name: 'disable',
            required: false,
            schema: { default: 'sc,tf,ev,td', type: 'string' },
          },
        }),
      routeDescription: z
        .string()
        .default('Routing results')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)',
            in: 'query',
            name: 'routeDescription',
            required: false,
            schema: { default: 'Routing results', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Geometry, distance, and time of the shortest or fastest route' },
  },
})

export const postTruckRouteOutputFormatRoute = createRoute({
  method: 'post',
  path: '/truck/route.{outputFormat}',
  tags: ['route'],
  summary: 'Get the path, distance and travel time between a series of geographic points',
  description:
    'Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.',
  request: {
    params: z.object({
      outputFormat: z
        .enum(['json', 'kml', 'html'])
        .default('json')
        .openapi({
          param: {
            description: 'Format of representation',
            example: 'json',
            in: 'path',
            name: 'outputFormat',
            required: true,
            schema: { default: 'json', enum: ['json', 'kml', 'html'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      points: z
        .string()
        .openapi({
          param: {
            description:
              "A list of any number of route points in start to end order. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#points target='_blank'>points</a>",
            example: '-123.70794,48.77869,-123.53785,48.38200',
            in: 'query',
            name: 'points',
            required: true,
            schema: { type: 'string' },
          },
        }),
      outputSRS: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(4326),
            z.literal(4269),
            z.literal(3005),
            z.literal(26907),
            z.literal(26908),
            z.literal(26909),
            z.literal(26910),
            z.literal(26911),
          ]),
        )
        .default(4326)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-router/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>',
            in: 'query',
            name: 'outputSRS',
            required: false,
            schema: {
              default: 4326,
              enum: [4326, 4269, 3005, 26907, 26908, 26909, 26910, 26911],
              type: 'integer',
            },
          },
        }),
      criteria: z
        .enum(['shortest', 'fastest'])
        .default('shortest')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Routing criteria to optimize (e.g., shortest, fastest). Default is shortest.',
            in: 'query',
            name: 'criteria',
            required: false,
            schema: { default: 'shortest', enum: ['shortest', 'fastest'], type: 'string' },
          },
        }),
      distanceUnit: z
        .enum(['km', 'mi'])
        .default('km')
        .exactOptional()
        .openapi({
          param: {
            description: 'distance unit of measure (e.g., km, mi). Default is km.',
            in: 'query',
            name: 'distanceUnit',
            required: false,
            schema: { default: 'km', enum: ['km', 'mi'], type: 'string' },
          },
        }),
      roundTrip: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, route ends at start point. Default is false.',
            in: 'query',
            name: 'roundTrip',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      departure: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'departure date and time in internet timestamp notation as defined in RFC 3339, section 5.6 (e.g., 2019-02-28T11:36:00-08:00);<br> Ignored if time-dependency modules are disabled',
            in: 'query',
            name: 'departure',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      correctSide: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, route starts and ends on same side of road as start/end point.Default is false.',
            in: 'query',
            name: 'correctSide',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      truckRouteMultiplier: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(9)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The truck route multiplier value is used to multiply the cost of using roads that are not truck routes.',
            in: 'query',
            name: 'truckRouteMultiplier',
            required: false,
            schema: { default: 9, type: 'integer' },
          },
        }),
      partition: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of values to identify sections of the route that correspond to truck route sections and non-truck route sections, ferry sections and non-ferry sections, and locality names.  The response includes a partitions attribute, which is an array of objects, each of which has an index (into the route coordinate array) and a value for each of the attributes requested in the partition parameter. Any or all of the following values can be used. <br><br>Partition values:<br> isTruckRoute – Distinguish between truck route sections and non-truck route sections <br> isFerry – Distinguish between ferry sections and non-ferry sections <br> locality – Include the locality name for the route partition',
            in: 'query',
            name: 'partition',
            required: false,
            schema: { default: '', type: 'string' },
          },
        }),
      disable: z
        .string()
        .default('sc,tf,ev,td')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of time-related modules to disable (e.g., sc,tf,ev,td).<br><br>Module names include:<br> sc – ferry schedules; disabled by default; disabled by default and only suitable for demos<br>tf – historic traffic congestion; disabled by default and only suitable for demos<br>ev – road events; disabled by default and only suitable for demos<br>td – time-dependency; disabling this disables sc, tf, and ev modules<br>tr – turn restrictions; if td is disabled, time-dependent turn restrictions are ignored<br>tc - turn costs (e.g., left turns take longer than right turns)',
            in: 'query',
            name: 'disable',
            required: false,
            schema: { default: 'sc,tf,ev,td', type: 'string' },
          },
        }),
      routeDescription: z
        .string()
        .default('Routing results')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Route description (e.g., Shortest route from 1002 Johnson St, Victoria to 1105 Royal Ave,New Westminster)',
            in: 'query',
            name: 'routeDescription',
            required: false,
            schema: { default: 'Routing results', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Geometry, distance, and time of the shortest or fastest route' },
  },
})
