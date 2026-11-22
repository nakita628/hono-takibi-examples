import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceCreateAvailabilityConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceCreateAvailabilityConfigurationHandler = app.openapi(
  postXAmzTargetWorkMailServiceCreateAvailabilityConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
