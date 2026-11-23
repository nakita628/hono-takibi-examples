import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20150814TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20150814TagResourceHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20150814TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
