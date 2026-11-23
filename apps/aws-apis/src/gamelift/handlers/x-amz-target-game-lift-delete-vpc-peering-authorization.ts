import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDeleteVpcPeeringAuthorizationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDeleteVpcPeeringAuthorizationHandler = app.openapi(
  postXAmzTargetGameLiftDeleteVpcPeeringAuthorizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
