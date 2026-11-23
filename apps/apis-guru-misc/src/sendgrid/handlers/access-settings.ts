import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAccessSettingsWhitelistRoute,
  deleteAccessSettingsWhitelistRuleIdRoute,
  getAccessSettingsActivityRoute,
  getAccessSettingsWhitelistRoute,
  getAccessSettingsWhitelistRuleIdRoute,
  postAccessSettingsWhitelistRoute,
} from '../routes'

export const getAccessSettingsActivityRouteHandler: RouteHandler<
  typeof getAccessSettingsActivityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccessSettingsWhitelistRouteHandler: RouteHandler<
  typeof deleteAccessSettingsWhitelistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccessSettingsWhitelistRouteHandler: RouteHandler<
  typeof getAccessSettingsWhitelistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccessSettingsWhitelistRouteHandler: RouteHandler<
  typeof postAccessSettingsWhitelistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccessSettingsWhitelistRuleIdRouteHandler: RouteHandler<
  typeof deleteAccessSettingsWhitelistRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccessSettingsWhitelistRuleIdRouteHandler: RouteHandler<
  typeof getAccessSettingsWhitelistRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
