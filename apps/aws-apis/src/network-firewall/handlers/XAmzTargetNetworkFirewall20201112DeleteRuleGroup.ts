import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112DeleteRuleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetNetworkFirewall20201112DeleteRuleGroupHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112DeleteRuleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
