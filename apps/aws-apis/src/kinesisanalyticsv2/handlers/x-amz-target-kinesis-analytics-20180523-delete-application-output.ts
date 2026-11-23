import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523DeleteApplicationOutputRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20180523DeleteApplicationOutputHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20180523DeleteApplicationOutputRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
