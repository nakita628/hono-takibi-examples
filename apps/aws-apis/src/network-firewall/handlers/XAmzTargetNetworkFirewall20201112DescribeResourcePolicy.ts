import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112DescribeResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetNetworkFirewall20201112DescribeResourcePolicyHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112DescribeResourcePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
