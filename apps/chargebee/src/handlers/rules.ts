import type { RouteHandler } from '@hono/zod-openapi'
import type { getRulesRuleIdRoute } from '../routes'

export const getRulesRuleIdRouteHandler: RouteHandler<typeof getRulesRuleIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
