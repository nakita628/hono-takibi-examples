import { createRoute, z } from '@hono/zod-openapi'

const CodeSchema = z
  .string()
  .openapi({ description: 'The standardized product code in UPC/EAN format.' })
  .openapi('Code')

const ErrorSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The provided code.', example: '329576019311' }),
    codeType: z
      .any()
      .exactOptional()
      .openapi({ description: 'The type of code provided.', example: null }),
    error: z
      .string()
      .openapi({
        description: 'A human readable error message.',
        example: 'The provided code is not in a recognized format.',
      }),
  })
  .openapi({ required: ['error'] })
  .openapi('Error')

const ApiKeyAuthSecurityScheme = { in: 'query', name: 'key', type: 'apiKey' }

export const getCodeCodeRoute = createRoute({
  method: 'get',
  path: '/code/{code}',
  tags: ['Product'],
  summary: 'Retrieve product info for a particular barcode number (UPC, EAN, or ISBN).',
  operationId: 'getProductInfo',
  request: {
    params: z.object({
      code: z
        .string()
        .openapi({
          param: { in: 'path', name: 'code', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The product corresponding to the provided `code`',
      content: {
        'application/json': {
          schema: z
            .object({
              barcodeUrl: z
                .url()
                .exactOptional()
                .openapi({
                  description: 'The URL to the scannable barcode image.',
                  example: 'https://go-upc.com/barcode/829576019311',
                }),
              codeType: z
                .enum(['UPC', 'EAN', 'ISBN'])
                .exactOptional()
                .openapi({
                  description: 'The type of product code (UPC/EAN/ISBN).',
                  example: 'UPC',
                }),
              product: z
                .object({
                  brand: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The brand of the product (if available).',
                      example: 'Goodfellow and Co',
                    }),
                  category: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The category of the product (if available).',
                      example: 'Hair Care',
                    }),
                  description: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'A description of the product (if available).',
                      example:
                        'Gives you an easy way to achieve the hairstyle you love. Made with jojoba esters, vegetable-derived lanolin, glycerin and carnauba wax.',
                    }),
                  ean: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: 'The EAN code of the product.',
                      example: 829576019311,
                    }),
                  imageUrl: z
                    .url()
                    .exactOptional()
                    .openapi({
                      description: 'The URL for the product image.',
                      example: 'http://go-upc.s3.amazonaws.com/images/54066938.jpeg',
                    }),
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The name of the product.',
                      example: 'Blue Sage Tonka Texturizing Fiber',
                    }),
                  region: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The region of the product.',
                      example: 'USA or Canada',
                    }),
                  specs: z
                    .array(z.array(z.string()))
                    .exactOptional()
                    .openapi({
                      description: 'A list of additional item specifications (if available).',
                      example: [
                        ['Item Form', 'Clay'],
                        ['Liquid Volume', '4 Fluid Ounces'],
                        ['Scent', 'Lime'],
                      ],
                    }),
                  upc: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: 'The UPC code of the product.',
                      example: 829576019311,
                    }),
                })
                .exactOptional()
                .openapi({ description: 'all matching product details.', required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'No product information was found for the given `code`.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})
