import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2BookingsBookingUidGuestsRoute } from '../routes'

const app = new OpenAPIHono()

export const bookingsGuestsHandler = app.openapi(postV2BookingsBookingUidGuestsRoute, (c) => {
  throw new Error('Not implemented')
})
