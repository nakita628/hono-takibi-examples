import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRuleConfigScopeRoute,
  getRuleConfigRoute,
  getRuleConfigScopeRoute,
  patchRuleConfigScopeRoute,
  postRuleConfigRuleEntityDocumentIdRoute,
  postRuleConfigRuleEntityIndexRoute,
  postRuleConfigWhereToSearchDocumentIdRoute,
} from '../routes'

export const getRuleConfigRouteHandler: RouteHandler<typeof getRuleConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRuleConfigRuleEntityIndexRouteHandler: RouteHandler<
  typeof postRuleConfigRuleEntityIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRuleConfigRuleEntityDocumentIdRouteHandler: RouteHandler<
  typeof postRuleConfigRuleEntityDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRuleConfigWhereToSearchDocumentIdRouteHandler: RouteHandler<
  typeof postRuleConfigWhereToSearchDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRuleConfigScopeRouteHandler: RouteHandler<
  typeof deleteRuleConfigScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRuleConfigScopeRouteHandler: RouteHandler<typeof getRuleConfigScopeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchRuleConfigScopeRouteHandler: RouteHandler<
  typeof patchRuleConfigScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
