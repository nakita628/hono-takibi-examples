import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceCreateAvailabilityConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceCreateAvailabilityConfigurationHandler = app.openapi(
  postXAmzTargetWorkMailServiceCreateAvailabilityConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
