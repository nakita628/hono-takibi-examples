import { OpenAPIHono } from '@hono/zod-openapi'
import { putOrderRequiresDeliveryAcceptanceRoute } from '../routes'

const app = new OpenAPIHono()

export const orderRequiresDeliveryAcceptanceHandler = app.openapi(
  putOrderRequiresDeliveryAcceptanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
