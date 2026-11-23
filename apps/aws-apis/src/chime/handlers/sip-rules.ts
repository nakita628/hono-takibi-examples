import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSipRulesSipRuleIdRoute,
  getSipRulesRoute,
  getSipRulesSipRuleIdRoute,
  postSipRulesRoute,
  putSipRulesSipRuleIdRoute,
} from '../routes'

export const postSipRulesRouteHandler: RouteHandler<typeof postSipRulesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSipRulesRouteHandler: RouteHandler<typeof getSipRulesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSipRulesSipRuleIdRouteHandler: RouteHandler<
  typeof deleteSipRulesSipRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSipRulesSipRuleIdRouteHandler: RouteHandler<
  typeof getSipRulesSipRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSipRulesSipRuleIdRouteHandler: RouteHandler<
  typeof putSipRulesSipRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
