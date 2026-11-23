import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceTestAvailabilityConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceTestAvailabilityConfigurationHandler = app.openapi(
  postXAmzTargetWorkMailServiceTestAvailabilityConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
