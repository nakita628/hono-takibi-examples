import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetRelationalDatabaseBlueprintsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128GetRelationalDatabaseBlueprintsHandler = app.openapi(
  postXAmzTargetLightsail20161128GetRelationalDatabaseBlueprintsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
