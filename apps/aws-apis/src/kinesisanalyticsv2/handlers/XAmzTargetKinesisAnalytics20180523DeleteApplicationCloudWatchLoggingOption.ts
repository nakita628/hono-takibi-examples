import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523DeleteApplicationCloudWatchLoggingOptionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesisAnalytics20180523DeleteApplicationCloudWatchLoggingOptionHandler =
  app.openapi(
    postXAmzTargetKinesisAnalytics20180523DeleteApplicationCloudWatchLoggingOptionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
