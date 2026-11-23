import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetInstanceSnapshotsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetInstanceSnapshotsHandler = app.openapi(
  postXAmzTargetLightsail20161128GetInstanceSnapshotsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
