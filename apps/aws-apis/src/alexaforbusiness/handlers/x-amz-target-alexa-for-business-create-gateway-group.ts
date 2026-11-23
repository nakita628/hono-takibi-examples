import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessCreateGatewayGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessCreateGatewayGroupHandler = app.openapi(
  postXAmzTargetAlexaForBusinessCreateGatewayGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
