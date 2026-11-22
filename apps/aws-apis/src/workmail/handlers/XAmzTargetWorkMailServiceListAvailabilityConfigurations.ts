import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceListAvailabilityConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceListAvailabilityConfigurationsHandler = app.openapi(
  postXAmzTargetWorkMailServiceListAvailabilityConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
