import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20150814AddApplicationCloudWatchLoggingOptionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesisAnalytics20150814AddApplicationCloudWatchLoggingOptionHandler =
  app.openapi(
    postXAmzTargetKinesisAnalytics20150814AddApplicationCloudWatchLoggingOptionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
