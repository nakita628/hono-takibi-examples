import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftCreateVpcPeeringAuthorizationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftCreateVpcPeeringAuthorizationHandler = app.openapi(
  postXAmzTargetGameLiftCreateVpcPeeringAuthorizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
