import { OpenAPIHono } from '@hono/zod-openapi'
import { putDriverOnTheirWayToDeliveryAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const driverOnTheirWayToDeliveryAddressHandler = app.openapi(
  putDriverOnTheirWayToDeliveryAddressRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
