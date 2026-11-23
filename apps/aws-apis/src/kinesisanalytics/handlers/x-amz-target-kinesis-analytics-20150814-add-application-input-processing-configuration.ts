import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20150814AddApplicationInputProcessingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20150814AddApplicationInputProcessingConfigurationHandler =
  app.openapi(
    postXAmzTargetKinesisAnalytics20150814AddApplicationInputProcessingConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
