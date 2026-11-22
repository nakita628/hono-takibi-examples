import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeVpcPeeringAuthorizationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDescribeVpcPeeringAuthorizationsHandler = app.openapi(
  postXAmzTargetGameLiftDescribeVpcPeeringAuthorizationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
