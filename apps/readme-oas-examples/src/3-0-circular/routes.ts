import { createRoute, z } from '@hono/zod-openapi'

type ErrorMessageType = {
  statusCode?: number
  error?: string | null
  inner?: ErrorMessageType
  canBeRetried?: 'Unknown' | 'Yes' | 'No'
  detailedErrorCode?: number
}

const ErrorMessageSchema: z.ZodType<ErrorMessageType> = z
  .lazy(() =>
    z
      .strictObject({
        statusCode: z.int32().exactOptional(),
        error: z.string().nullable().exactOptional(),
        inner: ErrorMessageSchema.exactOptional(),
        canBeRetried: z.enum(['Unknown', 'Yes', 'No']).exactOptional(),
        detailedErrorCode: z.int32().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('ErrorMessage')

export const getAnythingRoute = createRoute({
  method: 'get',
  path: '/anything',
  responses: {
    200: { description: 'OK' },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})
