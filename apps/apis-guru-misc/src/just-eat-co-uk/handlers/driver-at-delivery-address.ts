import { OpenAPIHono } from '@hono/zod-openapi'
import { putDriverAtDeliveryAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const driverAtDeliveryAddressHandler = app.openapi(putDriverAtDeliveryAddressRoute, (c) => {
  throw new Error('Not implemented')
})
