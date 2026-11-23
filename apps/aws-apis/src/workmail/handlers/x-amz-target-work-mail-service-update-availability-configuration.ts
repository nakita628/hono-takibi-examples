import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceUpdateAvailabilityConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceUpdateAvailabilityConfigurationHandler = app.openapi(
  postXAmzTargetWorkMailServiceUpdateAvailabilityConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
