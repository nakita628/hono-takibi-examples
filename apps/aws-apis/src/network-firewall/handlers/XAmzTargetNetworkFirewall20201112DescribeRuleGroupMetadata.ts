import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112DescribeRuleGroupMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetNetworkFirewall20201112DescribeRuleGroupMetadataHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112DescribeRuleGroupMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
