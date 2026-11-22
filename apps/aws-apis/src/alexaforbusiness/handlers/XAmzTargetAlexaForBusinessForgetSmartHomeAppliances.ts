import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessForgetSmartHomeAppliancesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessForgetSmartHomeAppliancesHandler = app.openapi(
  postXAmzTargetAlexaForBusinessForgetSmartHomeAppliancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
