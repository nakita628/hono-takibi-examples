import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpAppsSpreedApiApiVersionDashboardEventsRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutualEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const calendarIntegrationHandler = app
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionDashboardEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutualEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
