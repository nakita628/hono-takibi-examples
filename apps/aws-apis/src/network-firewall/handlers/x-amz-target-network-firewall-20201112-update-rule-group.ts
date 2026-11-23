import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112UpdateRuleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112UpdateRuleGroupHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112UpdateRuleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
