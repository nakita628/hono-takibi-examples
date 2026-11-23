import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessUpdateGatewayGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessUpdateGatewayGroupHandler = app.openapi(
  postXAmzTargetAlexaForBusinessUpdateGatewayGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
