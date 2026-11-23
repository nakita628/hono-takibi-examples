import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDeleteGatewayGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessDeleteGatewayGroupHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDeleteGatewayGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
