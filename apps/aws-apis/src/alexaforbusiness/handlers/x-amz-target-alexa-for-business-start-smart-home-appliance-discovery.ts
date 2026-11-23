import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessStartSmartHomeApplianceDiscoveryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessStartSmartHomeApplianceDiscoveryHandler = app.openapi(
  postXAmzTargetAlexaForBusinessStartSmartHomeApplianceDiscoveryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
