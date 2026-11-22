import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessUpdateGatewayGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessUpdateGatewayGroupHandler = app.openapi(
  postXAmzTargetAlexaForBusinessUpdateGatewayGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
