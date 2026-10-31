import { createRoute, z } from '@hono/zod-openapi'

const RulesSchema: z.ZodType<RulesType> = z
  .lazy(() =>
    z
      .object({ transitions: z.array(OffsetTransitionSchema).exactOptional() })
      .openapi({ required: [] }),
  )
  .openapi('Rules')

type OffsetType = { id?: string; rules?: z.infer<typeof RulesSchema> }

const OffsetSchema: z.ZodType<OffsetType> = z
  .lazy(() =>
    z
      .object({ id: z.string().exactOptional(), rules: RulesSchema.exactOptional() })
      .openapi({ required: [] }),
  )
  .openapi('Offset')

type OffsetTransitionType = {
  dateTime?: string
  offsetAfter?: z.infer<typeof OffsetSchema>
  offsetBefore?: z.infer<typeof OffsetSchema>
}

const OffsetTransitionSchema: z.ZodType<OffsetTransitionType> = z
  .lazy(() =>
    z
      .object({
        dateTime: z.iso.datetime({ offset: true }).exactOptional(),
        offsetAfter: OffsetSchema.exactOptional(),
        offsetBefore: OffsetSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('OffsetTransition')

type RulesType = { transitions?: z.infer<typeof OffsetTransitionSchema>[] }

const ProductStockSchema: z.ZodType<ProductStockType> = z
  .lazy(() =>
    z.object({ test_param: z.array(SalesLineSchema).exactOptional() }).openapi({ required: [] }),
  )
  .openapi('ProductStock')

type SalesLineType = { stock?: z.infer<typeof ProductStockSchema> }

const SalesLineSchema: z.ZodType<SalesLineType> = z
  .lazy(() => z.object({ stock: ProductStockSchema.exactOptional() }).openapi({ required: [] }))
  .openapi('SalesLine')

type ProductStockType = { test_param?: z.infer<typeof SalesLineSchema>[] }

const DateTimeSchema = z.iso.datetime({ offset: true }).openapi('DateTime')

export const getAnythingRoute = createRoute({
  method: 'get',
  path: '/anything',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              dateTime: z.iso.datetime({ offset: true }).exactOptional(),
              offsetAfter: OffsetSchema.exactOptional(),
              offsetBefore: OffsetSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const putAnythingRoute = createRoute({
  method: 'put',
  path: '/anything',
  description:
    'This operation is different because it has a circular ref array as a parameter and in its response, but not its request body.',
  request: {
    headers: z.object({
      content: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',').map((part) => part.trim()) : [item],
                ),
          z.array(SalesLineSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'content',
            in: 'header',
            schema: { type: 'array', items: { $ref: '#/components/schemas/SalesLine' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(SalesLineSchema) } },
    },
    201: { description: 'OK', content: { 'application/json': { schema: SalesLineSchema } } },
  },
})

export const postAnythingRoute = createRoute({
  method: 'post',
  path: '/anything',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ circular: OffsetSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})
