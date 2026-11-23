import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftCreateVpcPeeringConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftCreateVpcPeeringConnectionHandler = app.openapi(
  postXAmzTargetGameLiftCreateVpcPeeringConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
