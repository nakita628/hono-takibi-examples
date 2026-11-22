import { OpenAPIHono } from '@hono/zod-openapi'
import { putV2DestinationCalendarsRoute } from '../routes'

const app = new OpenAPIHono()

export const destinationCalendarsHandler = app.openapi(putV2DestinationCalendarsRoute, (c) => {
  throw new Error('Not implemented')
})
