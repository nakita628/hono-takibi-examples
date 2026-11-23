import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523DeleteApplicationSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20180523DeleteApplicationSnapshotHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20180523DeleteApplicationSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
