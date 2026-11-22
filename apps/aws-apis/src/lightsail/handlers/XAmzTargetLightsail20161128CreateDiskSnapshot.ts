import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CreateDiskSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128CreateDiskSnapshotHandler = app.openapi(
  postXAmzTargetLightsail20161128CreateDiskSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
