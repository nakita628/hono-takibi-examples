import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetRelationalDatabaseLogStreamsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetRelationalDatabaseLogStreamsHandler = app.openapi(
  postXAmzTargetLightsail20161128GetRelationalDatabaseLogStreamsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
