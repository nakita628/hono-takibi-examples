import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetAutoSnapshotsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128GetAutoSnapshotsHandler = app.openapi(
  postXAmzTargetLightsail20161128GetAutoSnapshotsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
