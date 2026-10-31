import { createRoute, z } from '@hono/zod-openapi'

const XFungeneratorsApiSecretSecurityScheme = {
  in: 'header',
  name: 'X-Fungenerators-Api-Secret',
  type: 'apiKey',
}

export const postBarcodeDecodeRoute = createRoute({
  method: 'post',
  path: '/barcode/decode',
  tags: ['Barcode'],
  description: 'Decode a Barcode image and return the cotents if successful',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              barimage: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'Barcode image to decode and get the content value',
                }),
            })
            .openapi({ required: ['barimage'] }),
        },
      },
    },
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})

export const getBarcodeDecodeTypesRoute = createRoute({
  method: 'get',
  path: '/barcode/decode/types',
  tags: ['Barcode'],
  description: 'Get the supported barcode types for the decoding process.',
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})

export const getBarcodeEncodeRoute = createRoute({
  method: 'get',
  path: '/barcode/encode',
  tags: ['Barcode'],
  description: 'Get a Bar Code image for the given barcode number',
  request: {
    query: z.object({
      number: z
        .string()
        .openapi({
          param: {
            description: 'Barcode number',
            in: 'query',
            name: 'number',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      barcodeformat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Barcode format default C39. Valid values are the keys to those returned from /barcode/encode/types.',
            in: 'query',
            name: 'barcodeformat',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      outputformat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Output image format. Must be one of png/html/jpg/svg',
            in: 'query',
            name: 'outputformat',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      widthfactor: z
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
            description: 'Width factor of the image',
            in: 'query',
            name: 'widthfactor',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
      totalheight: z
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
            description: 'Total height of the image',
            in: 'query',
            name: 'totalheight',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})

export const getBarcodeEncodeTypesRoute = createRoute({
  method: 'get',
  path: '/barcode/encode/types',
  tags: ['Barcode'],
  description: 'Get the supported barcode types for encoding / image generation.',
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})
