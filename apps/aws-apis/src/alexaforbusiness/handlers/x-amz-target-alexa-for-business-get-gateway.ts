import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessGetGatewayRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessGetGatewayHandler = app.openapi(
  postXAmzTargetAlexaForBusinessGetGatewayRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
