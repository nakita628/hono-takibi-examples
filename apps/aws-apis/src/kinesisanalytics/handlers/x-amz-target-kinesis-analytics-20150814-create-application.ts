import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20150814CreateApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20150814CreateApplicationHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20150814CreateApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
