import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112ListRuleGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetNetworkFirewall20201112ListRuleGroupsHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112ListRuleGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
