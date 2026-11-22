import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112DescribeRuleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetNetworkFirewall20201112DescribeRuleGroupHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112DescribeRuleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
