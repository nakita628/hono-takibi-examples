import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetDiskSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetDiskSnapshotHandler = app.openapi(
  postXAmzTargetLightsail20161128GetDiskSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
