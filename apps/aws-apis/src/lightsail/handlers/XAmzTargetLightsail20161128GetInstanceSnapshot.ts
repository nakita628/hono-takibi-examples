import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetInstanceSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128GetInstanceSnapshotHandler = app.openapi(
  postXAmzTargetLightsail20161128GetInstanceSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
