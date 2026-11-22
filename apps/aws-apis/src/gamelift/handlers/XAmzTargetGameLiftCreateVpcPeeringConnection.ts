import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftCreateVpcPeeringConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftCreateVpcPeeringConnectionHandler = app.openapi(
  postXAmzTargetGameLiftCreateVpcPeeringConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
