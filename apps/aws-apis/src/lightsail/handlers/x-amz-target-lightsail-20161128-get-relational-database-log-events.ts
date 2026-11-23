import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetRelationalDatabaseLogEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetRelationalDatabaseLogEventsHandler = app.openapi(
  postXAmzTargetLightsail20161128GetRelationalDatabaseLogEventsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
