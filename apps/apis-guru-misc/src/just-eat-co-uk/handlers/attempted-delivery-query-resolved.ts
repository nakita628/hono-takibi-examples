import { OpenAPIHono } from '@hono/zod-openapi'
import { putAttemptedDeliveryQueryResolvedRoute } from '../routes'

const app = new OpenAPIHono()

export const attemptedDeliveryQueryResolvedHandler = app.openapi(
  putAttemptedDeliveryQueryResolvedRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
