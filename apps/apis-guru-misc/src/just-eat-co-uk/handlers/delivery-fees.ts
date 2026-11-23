import { OpenAPIHono } from '@hono/zod-openapi'
import { getDeliveryFeesTenantRoute } from '../routes'

const app = new OpenAPIHono()

export const deliveryFeesHandler = app.openapi(getDeliveryFeesTenantRoute, (c) => {
  throw new Error('Not implemented')
})
