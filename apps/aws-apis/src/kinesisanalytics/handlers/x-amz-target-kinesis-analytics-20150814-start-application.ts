import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20150814StartApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20150814StartApplicationHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20150814StartApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
