import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessUpdateGatewayRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessUpdateGatewayHandler = app.openapi(
  postXAmzTargetAlexaForBusinessUpdateGatewayRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
