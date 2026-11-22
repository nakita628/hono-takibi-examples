import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftCreateVpcPeeringAuthorizationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftCreateVpcPeeringAuthorizationHandler = app.openapi(
  postXAmzTargetGameLiftCreateVpcPeeringAuthorizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
