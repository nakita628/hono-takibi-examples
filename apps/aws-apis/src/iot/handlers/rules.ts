import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRulesRuleNameRoute,
  getRulesRoute,
  getRulesRuleNameRoute,
  patchRulesRuleNameRoute,
  postRulesRuleNameDisableRoute,
  postRulesRuleNameEnableRoute,
  postRulesRuleNameRoute,
} from '../routes'

export const postRulesRuleNameRouteHandler: RouteHandler<typeof postRulesRuleNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteRulesRuleNameRouteHandler: RouteHandler<
  typeof deleteRulesRuleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRulesRuleNameRouteHandler: RouteHandler<typeof getRulesRuleNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchRulesRuleNameRouteHandler: RouteHandler<typeof patchRulesRuleNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRulesRuleNameDisableRouteHandler: RouteHandler<
  typeof postRulesRuleNameDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRulesRuleNameEnableRouteHandler: RouteHandler<
  typeof postRulesRuleNameEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRulesRouteHandler: RouteHandler<typeof getRulesRoute> = async (c) => {
  throw new Error('Not implemented')
}
