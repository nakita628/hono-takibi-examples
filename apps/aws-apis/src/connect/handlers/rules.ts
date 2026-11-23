import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRulesInstanceIdRuleIdRoute,
  getRulesInstanceIdRoute,
  getRulesInstanceIdRuleIdRoute,
  postRulesInstanceIdRoute,
  putRulesInstanceIdRuleIdRoute,
} from '../routes'

export const postRulesInstanceIdRouteHandler: RouteHandler<
  typeof postRulesInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRulesInstanceIdRouteHandler: RouteHandler<typeof getRulesInstanceIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteRulesInstanceIdRuleIdRouteHandler: RouteHandler<
  typeof deleteRulesInstanceIdRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRulesInstanceIdRuleIdRouteHandler: RouteHandler<
  typeof getRulesInstanceIdRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRulesInstanceIdRuleIdRouteHandler: RouteHandler<
  typeof putRulesInstanceIdRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
