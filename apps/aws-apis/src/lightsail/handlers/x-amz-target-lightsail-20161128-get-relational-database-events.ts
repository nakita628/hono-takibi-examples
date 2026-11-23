import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetRelationalDatabaseEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetRelationalDatabaseEventsHandler = app.openapi(
  postXAmzTargetLightsail20161128GetRelationalDatabaseEventsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
