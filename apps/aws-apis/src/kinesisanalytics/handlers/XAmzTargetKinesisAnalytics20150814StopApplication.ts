import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20150814StopApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesisAnalytics20150814StopApplicationHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20150814StopApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
