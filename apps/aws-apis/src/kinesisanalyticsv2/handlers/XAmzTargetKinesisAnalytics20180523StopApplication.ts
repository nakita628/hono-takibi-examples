import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523StopApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesisAnalytics20180523StopApplicationHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20180523StopApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
