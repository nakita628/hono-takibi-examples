import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSecurityGroupIdRoute,
  deleteSecurityGroupIdRulesRuleIdRoute,
  getSecurityGroupIdRoute,
  getSecurityGroupRoute,
  postSecurityGroupIdRulesRoute,
  postSecurityGroupRoute,
  putSecurityGroupIdAddSourceRoute,
  putSecurityGroupIdAttachRoute,
  putSecurityGroupIdDetachRoute,
  putSecurityGroupIdRemoveSourceRoute,
} from '../routes'

export const deleteSecurityGroupIdRulesRuleIdRouteHandler: RouteHandler<
  typeof deleteSecurityGroupIdRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityGroupRouteHandler: RouteHandler<typeof postSecurityGroupRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSecurityGroupRouteHandler: RouteHandler<typeof getSecurityGroupRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSecurityGroupIdRouteHandler: RouteHandler<typeof getSecurityGroupIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteSecurityGroupIdRouteHandler: RouteHandler<
  typeof deleteSecurityGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSecurityGroupIdAttachRouteHandler: RouteHandler<
  typeof putSecurityGroupIdAttachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecurityGroupIdRulesRouteHandler: RouteHandler<
  typeof postSecurityGroupIdRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSecurityGroupIdRemoveSourceRouteHandler: RouteHandler<
  typeof putSecurityGroupIdRemoveSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSecurityGroupIdDetachRouteHandler: RouteHandler<
  typeof putSecurityGroupIdDetachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSecurityGroupIdAddSourceRouteHandler: RouteHandler<
  typeof putSecurityGroupIdAddSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
