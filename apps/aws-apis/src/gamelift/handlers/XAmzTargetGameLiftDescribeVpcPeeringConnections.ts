import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeVpcPeeringConnectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDescribeVpcPeeringConnectionsHandler = app.openapi(
  postXAmzTargetGameLiftDescribeVpcPeeringConnectionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
