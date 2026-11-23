import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20150814DeleteApplicationOutputRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20150814DeleteApplicationOutputHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20150814DeleteApplicationOutputRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
