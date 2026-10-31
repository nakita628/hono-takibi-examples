import { createRoute, z } from '@hono/zod-openapi'

const ErrorSchema = z
  .object({ error: z.string() })
  .openapi({ required: ['error'] })
  .openapi('Error')

const ForecastSchema = z
  .object({ uv: z.number(), uv_time: z.string() })
  .openapi({ required: ['uv', 'uv_time'] })
  .openapi('Forecast')

const ForecastResultSchema = z
  .array(ForecastSchema)
  .superRefine((items, ctx) => {
    const seen = new Map()
    for (const [i, val] of items.entries()) {
      const key = JSON.stringify(val)
      if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
      else seen.set(key, i)
    }
  })
  .openapi({ title: 'result' })
  .openapi('ForecastResult')

const ProtectionResultSchema = z
  .object({
    ozone: z.number(),
    ozone_time: z.string(),
    uv: z.number(),
    uv_max: z.number(),
    uv_max_time: z.string(),
    uv_time: z.string(),
  })
  .openapi({
    required: ['uv', 'uv_time', 'uv_max', 'uv_max_time', 'ozone', 'ozone_time'],
    title: 'result',
  })
  .openapi('ProtectionResult')

const UvIndexResultSchema = z
  .object({ from_time: z.string(), from_uv: z.number(), to_time: z.string(), to_uv: z.number() })
  .openapi({ required: ['from_time', 'from_uv', 'to_time', 'to_uv'], title: 'result' })
  .openapi('UvIndexResult')

export const getForecastRoute = createRoute({
  method: 'get',
  path: '/forecast',
  description:
    'Get hourly UV Index Forecast by location and date. Optional altitude, ozone level and datetime could be provided.',
  request: {
    query: z.object({
      lat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'latitude, from -90.00 to 90.00',
            in: 'query',
            name: 'lat',
            required: true,
            schema: {
              description: 'latitude, from -90.00 to 90.00',
              example: 78.67,
              type: 'number',
            },
          },
          description: 'latitude, from -90.00 to 90.00',
          example: 78.67,
        }),
      lng: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'longitude, from -180.00 to 180.00',
            in: 'query',
            name: 'lng',
            required: true,
            schema: {
              description: 'longitude, from -180.00 to 180.00',
              example: 115.67,
              type: 'number',
            },
          },
          description: 'longitude, from -180.00 to 180.00',
          example: 115.67,
        }),
      alt: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value.',
            in: 'query',
            name: 'alt',
            required: false,
            schema: {
              description:
                'Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value.',
              example: 1050,
              type: 'number',
            },
          },
          description:
            'Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value.',
          example: 1050,
        }),
      ozone: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Ozone in du (Dobson Units), from 100 to 550du, the latest forecast from OMI dataset is used by default.',
            in: 'query',
            name: 'ozone',
            required: false,
            schema: {
              description:
                'Ozone in du (Dobson Units), from 100 to 550du, the latest forecast from OMI dataset is used by default.',
              example: 304.5,
              type: 'number',
            },
          },
          description:
            'Ozone in du (Dobson Units), from 100 to 550du, the latest forecast from OMI dataset is used by default.',
          example: 304.5,
        }),
      dt: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'UTC datetime in ISO-8601 format, now by default. Use that parameter to get UV Index Forecast for any point in time.',
            in: 'query',
            name: 'dt',
            required: false,
            schema: {
              description:
                'UTC datetime in ISO-8601 format, now by default. Use that parameter to get UV Index Forecast for any point in time.',
              example: '2018-02-04T04:39:06.467Z',
              format: 'date-time',
              type: 'string',
            },
          },
          description:
            'UTC datetime in ISO-8601 format, now by default. Use that parameter to get UV Index Forecast for any point in time.',
          example: '2018-02-04T04:39:06.467Z',
        }),
    }),
    headers: z.object({
      'x-access-token': z
        .string()
        .openapi({
          param: {
            description: 'This header is used to send data that contains your OpenUV API key',
            in: 'header',
            name: 'x-access-token',
            required: true,
            schema: {
              description: 'This header is used to send data that contains your OpenUV API key',
              title: 'x-access-token',
              type: 'string',
            },
          },
          description: 'This header is used to send data that contains your OpenUV API key',
          title: 'x-access-token',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(ForecastResultSchema) } },
    },
  },
})

export const getProtectionRoute = createRoute({
  method: 'get',
  path: '/protection',
  description:
    'Get daily protection time by location, UV Index from and UV Index to with 10 minutes accuracy. Optional altitide and ozone level could be provided.',
  request: {
    query: z.object({
      lat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'latitude, from -90.00 to 90.00',
            in: 'query',
            name: 'lat',
            required: true,
            schema: {
              description: 'latitude, from -90.00 to 90.00',
              example: 78.67,
              type: 'number',
            },
          },
          description: 'latitude, from -90.00 to 90.00',
          example: 78.67,
        }),
      lng: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'longitude, from -180.00 to 180.00',
            in: 'query',
            name: 'lng',
            required: true,
            schema: {
              description: 'longitude, from -180.00 to 180.00',
              example: 115.67,
              type: 'number',
            },
          },
          description: 'longitude, from -180.00 to 180.00',
          example: 115.67,
        }),
      from: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'UV Index from value for protection datetime lookup. From 0 to 40.',
            in: 'query',
            name: 'from',
            required: true,
            schema: {
              description: 'UV Index from value for protection datetime lookup. From 0 to 40.',
              example: 2.5,
              type: 'number',
            },
          },
          description: 'UV Index from value for protection datetime lookup. From 0 to 40.',
          example: 2.5,
        }),
      to: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'UV Index to value for protection datetime lookup. From 0 to 40.',
            in: 'query',
            name: 'to',
            required: true,
            schema: {
              description: 'UV Index to value for protection datetime lookup. From 0 to 40.',
              example: 3.6,
              type: 'number',
            },
          },
          description: 'UV Index to value for protection datetime lookup. From 0 to 40.',
          example: 3.6,
        }),
      alt: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value.',
            in: 'query',
            name: 'alt',
            required: false,
            schema: {
              description:
                'Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value.',
              example: 1050,
              type: 'number',
            },
          },
          description:
            'Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value.',
          example: 1050,
        }),
      ozone: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Ozone in du (Dobson Units), from 100 to 550du, the latest forecast from OMI dataset is used by default.',
            in: 'query',
            name: 'ozone',
            required: false,
            schema: {
              description:
                'Ozone in du (Dobson Units), from 100 to 550du, the latest forecast from OMI dataset is used by default.',
              example: 304.5,
              type: 'number',
            },
          },
          description:
            'Ozone in du (Dobson Units), from 100 to 550du, the latest forecast from OMI dataset is used by default.',
          example: 304.5,
        }),
    }),
    headers: z.object({
      'x-access-token': z
        .string()
        .openapi({
          param: {
            description: 'This header is used to send data that contains your OpenUV API key',
            in: 'header',
            name: 'x-access-token',
            required: true,
            schema: {
              description: 'This header is used to send data that contains your OpenUV API key',
              title: 'x-access-token',
              type: 'string',
            },
          },
          description: 'This header is used to send data that contains your OpenUV API key',
          title: 'x-access-token',
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ProtectionResultSchema } } },
  },
})

export const getUvRoute = createRoute({
  method: 'get',
  path: '/uv',
  description:
    'Get real-time UV Index by location. Optional altitude, ozone level and datetime could be provided.',
  request: {
    query: z.object({
      lat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'latitude, from -90.00 to 90.00',
            in: 'query',
            name: 'lat',
            required: true,
            schema: {
              description: 'latitude, from -90.00 to 90.00',
              example: 78.67,
              type: 'number',
            },
          },
          description: 'latitude, from -90.00 to 90.00',
          example: 78.67,
        }),
      lng: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'longitude, from -180.00 to 180.00',
            in: 'query',
            name: 'lng',
            required: true,
            schema: {
              description: 'longitude, from -180.00 to 180.00',
              example: 115.67,
              type: 'number',
            },
          },
          description: 'longitude, from -180.00 to 180.00',
          example: 115.67,
        }),
      alt: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value.',
            in: 'query',
            name: 'alt',
            required: false,
            schema: {
              description:
                'Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value.',
              example: 1050,
              type: 'number',
            },
          },
          description:
            'Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value.',
          example: 1050,
        }),
      ozone: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Ozone in du (Dobson Units), from 100 to 550du, the latest forecast from OMI dataset is used by default.',
            in: 'query',
            name: 'ozone',
            required: false,
            schema: {
              description:
                'Ozone in du (Dobson Units), from 100 to 550du, the latest forecast from OMI dataset is used by default.',
              example: 304.5,
              type: 'number',
            },
          },
          description:
            'Ozone in du (Dobson Units), from 100 to 550du, the latest forecast from OMI dataset is used by default.',
          example: 304.5,
        }),
      dt: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'UTC datetime in ISO-8601 format, now by default. Use that parameter to get UV Index Forecast for any point in time.',
            in: 'query',
            name: 'dt',
            required: false,
            schema: {
              description:
                'UTC datetime in ISO-8601 format, now by default. Use that parameter to get UV Index Forecast for any point in time.',
              example: '2018-02-04T04:39:06.467Z',
              format: 'date-time',
              type: 'string',
            },
          },
          description:
            'UTC datetime in ISO-8601 format, now by default. Use that parameter to get UV Index Forecast for any point in time.',
          example: '2018-02-04T04:39:06.467Z',
        }),
    }),
    headers: z.object({
      'x-access-token': z
        .string()
        .openapi({
          param: {
            description: 'This header is used to send data that contains your OpenUV API key',
            in: 'header',
            name: 'x-access-token',
            required: true,
            schema: {
              description: 'This header is used to send data that contains your OpenUV API key',
              title: 'x-access-token',
              type: 'string',
            },
          },
          description: 'This header is used to send data that contains your OpenUV API key',
          title: 'x-access-token',
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: UvIndexResultSchema } } },
  },
})
