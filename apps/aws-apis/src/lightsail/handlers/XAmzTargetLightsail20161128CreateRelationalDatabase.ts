import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CreateRelationalDatabaseRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128CreateRelationalDatabaseHandler = app.openapi(
  postXAmzTargetLightsail20161128CreateRelationalDatabaseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
