import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20150814AddApplicationOutputRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20150814AddApplicationOutputHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20150814AddApplicationOutputRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
