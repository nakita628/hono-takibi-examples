import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523AddApplicationInputProcessingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesisAnalytics20180523AddApplicationInputProcessingConfigurationHandler =
  app.openapi(
    postXAmzTargetKinesisAnalytics20180523AddApplicationInputProcessingConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
