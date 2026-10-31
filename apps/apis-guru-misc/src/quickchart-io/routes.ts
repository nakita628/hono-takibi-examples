import { createRoute, z } from '@hono/zod-openapi'

export const getChartRoute = createRoute({
  method: 'get',
  path: '/chart',
  summary: 'Generate a chart (GET)',
  description: 'Generate a chart based on the provided parameters.',
  request: {
    query: z.object({
      chart: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The chart configuration in Chart.js format (JSON or Javascript).',
            in: 'query',
            name: 'chart',
            schema: { type: 'string' },
            required: false,
          },
        }),
      width: z
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
            description: 'The width of the chart in pixels.',
            in: 'query',
            name: 'width',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      height: z
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
            description: 'The height of the chart in pixels.',
            in: 'query',
            name: 'height',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The output format of the chart, e.g., 'png', 'jpg', 'svg', or 'webp'.",
            in: 'query',
            name: 'format',
            schema: { type: 'string' },
            required: false,
          },
        }),
      backgroundColor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The background color of the chart.',
            in: 'query',
            name: 'backgroundColor',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A generated chart image.',
      content: {
        'image/jpeg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/png': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/svg+xml': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/webp': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
})

export const postChartRoute = createRoute({
  method: 'post',
  path: '/chart',
  summary: 'Generate a chart (POST)',
  description: 'Generate a chart based on the provided configuration in the request body.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              backgroundColor: z
                .string()
                .exactOptional()
                .openapi({ description: 'The background color of the chart.' }),
              chart: z
                .object({})
                .exactOptional()
                .openapi({ description: 'The chart configuration in JSON format.' }),
              format: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The output format of the chart, e.g., 'png', 'jpg', 'svg', or 'webp'.",
                }),
              height: z
                .int()
                .exactOptional()
                .openapi({ description: 'The height of the chart in pixels.' }),
              width: z
                .int()
                .exactOptional()
                .openapi({ description: 'The width of the chart in pixels.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A generated chart image.',
      content: {
        'image/jpeg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/png': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/svg+xml': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/webp': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
})

export const getQrRoute = createRoute({
  method: 'get',
  path: '/qr',
  summary: 'Generate a QR code (GET)',
  description: 'Generate a QR code based on the provided parameters.',
  request: {
    query: z.object({
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The text to be encoded in the QR code.',
            in: 'query',
            name: 'text',
            schema: { type: 'string' },
            required: false,
          },
        }),
      width: z
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
            description: 'The width of the QR code in pixels.',
            in: 'query',
            name: 'width',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      height: z
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
            description: 'The height of the QR code in pixels.',
            in: 'query',
            name: 'height',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The output format of the QR code, e.g., 'png' or 'svg'.",
            in: 'query',
            name: 'format',
            schema: { type: 'string' },
            required: false,
          },
        }),
      margin: z
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
            description: 'The margin around the QR code in pixels.',
            in: 'query',
            name: 'margin',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A generated QR code image.',
      content: {
        'image/png': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/svg+xml': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
})

export const postQrRoute = createRoute({
  method: 'post',
  path: '/qr',
  summary: 'Generate a QR code (POST)',
  description: 'Generate a QR code based on the provided configuration in the request body.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              format: z
                .string()
                .exactOptional()
                .openapi({
                  description: "The output format of the QR code, e.g., 'png' or 'svg'.",
                }),
              height: z
                .int()
                .exactOptional()
                .openapi({ description: 'The height of the QR code in pixels.' }),
              margin: z
                .int()
                .exactOptional()
                .openapi({ description: 'The margin around the QR code in pixels.' }),
              text: z
                .string()
                .exactOptional()
                .openapi({ description: 'The text to be encoded in the QR code.' }),
              width: z
                .int()
                .exactOptional()
                .openapi({ description: 'The width of the QR code in pixels.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'A generated QR code image.',
      content: {
        'image/png': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/svg+xml': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
})
