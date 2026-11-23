import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112CreateRuleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112CreateRuleGroupHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112CreateRuleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
