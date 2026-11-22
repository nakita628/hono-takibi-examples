import { OpenAPIHono } from '@hono/zod-openapi'
import { putAttemptedDeliveryQueryResolvedRoute, putDeliveryFailedRoute } from '../routes'

const app = new OpenAPIHono()

export const attemptedDeliveryWebhooksHandler = app
  .openapi(putAttemptedDeliveryQueryResolvedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDeliveryFailedRoute, (c) => {
    throw new Error('Not implemented')
  })
