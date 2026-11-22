import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessListSmartHomeAppliancesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessListSmartHomeAppliancesHandler = app.openapi(
  postXAmzTargetAlexaForBusinessListSmartHomeAppliancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
