import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessStartSmartHomeApplianceDiscoveryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessStartSmartHomeApplianceDiscoveryHandler = app.openapi(
  postXAmzTargetAlexaForBusinessStartSmartHomeApplianceDiscoveryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
