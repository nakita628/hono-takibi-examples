import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessCreateGatewayGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessCreateGatewayGroupHandler = app.openapi(
  postXAmzTargetAlexaForBusinessCreateGatewayGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
