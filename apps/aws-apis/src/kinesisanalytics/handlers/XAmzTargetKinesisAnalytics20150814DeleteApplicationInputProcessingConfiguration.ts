import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20150814DeleteApplicationInputProcessingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesisAnalytics20150814DeleteApplicationInputProcessingConfigurationHandler =
  app.openapi(
    postXAmzTargetKinesisAnalytics20150814DeleteApplicationInputProcessingConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
