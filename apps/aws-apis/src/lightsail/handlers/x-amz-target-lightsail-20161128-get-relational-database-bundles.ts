import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetRelationalDatabaseBundlesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetRelationalDatabaseBundlesHandler = app.openapi(
  postXAmzTargetLightsail20161128GetRelationalDatabaseBundlesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
