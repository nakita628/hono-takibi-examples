import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessListSmartHomeAppliancesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessListSmartHomeAppliancesHandler = app.openapi(
  postXAmzTargetAlexaForBusinessListSmartHomeAppliancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
