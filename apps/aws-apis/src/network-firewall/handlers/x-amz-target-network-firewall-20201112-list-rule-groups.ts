import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetNetworkFirewall20201112ListRuleGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetNetworkFirewall20201112ListRuleGroupsHandler = app.openapi(
  postXAmzTargetNetworkFirewall20201112ListRuleGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
