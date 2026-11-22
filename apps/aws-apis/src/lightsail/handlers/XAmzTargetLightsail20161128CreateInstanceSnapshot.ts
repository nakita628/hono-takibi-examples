import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CreateInstanceSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128CreateInstanceSnapshotHandler = app.openapi(
  postXAmzTargetLightsail20161128CreateInstanceSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
