import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessGetGatewayRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessGetGatewayHandler = app.openapi(
  postXAmzTargetAlexaForBusinessGetGatewayRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
