import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessListGatewayGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessListGatewayGroupsHandler = app.openapi(
  postXAmzTargetAlexaForBusinessListGatewayGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
