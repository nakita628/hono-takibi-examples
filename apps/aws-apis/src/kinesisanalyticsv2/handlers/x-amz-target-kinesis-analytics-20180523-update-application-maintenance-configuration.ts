import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523UpdateApplicationMaintenanceConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20180523UpdateApplicationMaintenanceConfigurationHandler =
  app.openapi(
    postXAmzTargetKinesisAnalytics20180523UpdateApplicationMaintenanceConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
