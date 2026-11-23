import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523DeleteApplicationInputProcessingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20180523DeleteApplicationInputProcessingConfigurationHandler =
  app.openapi(
    postXAmzTargetKinesisAnalytics20180523DeleteApplicationInputProcessingConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
