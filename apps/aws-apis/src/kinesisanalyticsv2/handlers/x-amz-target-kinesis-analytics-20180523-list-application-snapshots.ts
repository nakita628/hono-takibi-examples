import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523ListApplicationSnapshotsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20180523ListApplicationSnapshotsHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20180523ListApplicationSnapshotsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
