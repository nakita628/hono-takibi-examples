import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeVpcPeeringAuthorizationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDescribeVpcPeeringAuthorizationsHandler = app.openapi(
  postXAmzTargetGameLiftDescribeVpcPeeringAuthorizationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
