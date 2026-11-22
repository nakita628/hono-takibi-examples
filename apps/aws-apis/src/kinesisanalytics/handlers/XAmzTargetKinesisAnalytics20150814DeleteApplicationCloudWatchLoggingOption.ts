import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20150814DeleteApplicationCloudWatchLoggingOptionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesisAnalytics20150814DeleteApplicationCloudWatchLoggingOptionHandler =
  app.openapi(
    postXAmzTargetKinesisAnalytics20150814DeleteApplicationCloudWatchLoggingOptionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
