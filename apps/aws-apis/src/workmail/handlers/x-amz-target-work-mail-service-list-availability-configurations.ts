import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceListAvailabilityConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceListAvailabilityConfigurationsHandler = app.openapi(
  postXAmzTargetWorkMailServiceListAvailabilityConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
