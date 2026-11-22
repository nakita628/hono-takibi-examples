import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CopySnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128CopySnapshotHandler = app.openapi(
  postXAmzTargetLightsail20161128CopySnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
