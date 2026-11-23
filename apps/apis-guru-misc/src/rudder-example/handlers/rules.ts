import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRulesCategoriesRuleCategoryIdRoute,
  deleteRulesRuleIdRoute,
  getRulesCategoriesRuleCategoryIdRoute,
  getRulesRoute,
  getRulesRuleIdRoute,
  getRulesTreeRoute,
  postRulesCategoriesRuleCategoryIdRoute,
  postRulesRuleIdRoute,
  putRulesCategoriesRoute,
  putRulesRoute,
} from '../routes'

export const getRulesRouteHandler: RouteHandler<typeof getRulesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putRulesRouteHandler: RouteHandler<typeof putRulesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putRulesCategoriesRouteHandler: RouteHandler<typeof putRulesCategoriesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteRulesCategoriesRuleCategoryIdRouteHandler: RouteHandler<
  typeof deleteRulesCategoriesRuleCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRulesCategoriesRuleCategoryIdRouteHandler: RouteHandler<
  typeof getRulesCategoriesRuleCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRulesCategoriesRuleCategoryIdRouteHandler: RouteHandler<
  typeof postRulesCategoriesRuleCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRulesTreeRouteHandler: RouteHandler<typeof getRulesTreeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRulesRuleIdRouteHandler: RouteHandler<typeof deleteRulesRuleIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRulesRuleIdRouteHandler: RouteHandler<typeof getRulesRuleIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRulesRuleIdRouteHandler: RouteHandler<typeof postRulesRuleIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
