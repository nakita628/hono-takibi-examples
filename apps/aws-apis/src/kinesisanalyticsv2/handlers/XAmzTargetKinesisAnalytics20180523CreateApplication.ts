import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523CreateApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesisAnalytics20180523CreateApplicationHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20180523CreateApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
