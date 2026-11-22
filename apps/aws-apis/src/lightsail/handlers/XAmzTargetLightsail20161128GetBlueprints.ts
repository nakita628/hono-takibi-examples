import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetBlueprintsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128GetBlueprintsHandler = app.openapi(
  postXAmzTargetLightsail20161128GetBlueprintsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
