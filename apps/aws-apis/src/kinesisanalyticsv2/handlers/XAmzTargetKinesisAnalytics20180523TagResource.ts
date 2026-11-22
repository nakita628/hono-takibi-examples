import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesisAnalytics20180523TagResourceHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20180523TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
