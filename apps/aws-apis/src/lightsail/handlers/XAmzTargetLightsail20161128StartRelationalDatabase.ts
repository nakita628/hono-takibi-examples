import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128StartRelationalDatabaseRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128StartRelationalDatabaseHandler = app.openapi(
  postXAmzTargetLightsail20161128StartRelationalDatabaseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
