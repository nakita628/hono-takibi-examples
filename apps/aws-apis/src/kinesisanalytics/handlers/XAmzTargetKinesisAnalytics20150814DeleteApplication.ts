import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20150814DeleteApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesisAnalytics20150814DeleteApplicationHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20150814DeleteApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
