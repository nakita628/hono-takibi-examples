import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getComplianceNodesNodeIdRoute,
  getComplianceNodesRoute,
  getComplianceRoute,
  getComplianceRulesRoute,
  getComplianceRulesRuleIdRoute,
} from '../routes'

export const getComplianceRouteHandler: RouteHandler<typeof getComplianceRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getComplianceNodesRouteHandler: RouteHandler<typeof getComplianceNodesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getComplianceNodesNodeIdRouteHandler: RouteHandler<
  typeof getComplianceNodesNodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getComplianceRulesRouteHandler: RouteHandler<typeof getComplianceRulesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getComplianceRulesRuleIdRouteHandler: RouteHandler<
  typeof getComplianceRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
