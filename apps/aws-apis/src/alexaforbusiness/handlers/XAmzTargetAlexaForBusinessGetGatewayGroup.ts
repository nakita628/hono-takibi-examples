import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessGetGatewayGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessGetGatewayGroupHandler = app.openapi(
  postXAmzTargetAlexaForBusinessGetGatewayGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
