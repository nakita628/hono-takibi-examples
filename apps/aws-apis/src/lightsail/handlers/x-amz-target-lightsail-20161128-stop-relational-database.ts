import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128StopRelationalDatabaseRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128StopRelationalDatabaseHandler = app.openapi(
  postXAmzTargetLightsail20161128StopRelationalDatabaseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
