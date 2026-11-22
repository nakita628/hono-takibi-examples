import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DeleteDiskSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128DeleteDiskSnapshotHandler = app.openapi(
  postXAmzTargetLightsail20161128DeleteDiskSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
