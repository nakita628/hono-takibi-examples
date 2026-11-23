import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDeleteAvailabilityConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceDeleteAvailabilityConfigurationHandler = app.openapi(
  postXAmzTargetWorkMailServiceDeleteAvailabilityConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
