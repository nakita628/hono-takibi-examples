import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerDescribeVpcConnectorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAppRunnerDescribeVpcConnectorHandler = app.openapi(
  postXAmzTargetAppRunnerDescribeVpcConnectorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
