import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerDescribeVpcIngressConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAppRunnerDescribeVpcIngressConnectionHandler = app.openapi(
  postXAmzTargetAppRunnerDescribeVpcIngressConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
