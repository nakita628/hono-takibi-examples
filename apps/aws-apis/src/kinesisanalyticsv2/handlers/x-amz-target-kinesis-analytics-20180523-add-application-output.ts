import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523AddApplicationOutputRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20180523AddApplicationOutputHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20180523AddApplicationOutputRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
