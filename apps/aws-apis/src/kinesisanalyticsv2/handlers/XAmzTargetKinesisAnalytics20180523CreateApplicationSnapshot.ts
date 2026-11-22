import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523CreateApplicationSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesisAnalytics20180523CreateApplicationSnapshotHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20180523CreateApplicationSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
