import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListAccessKeysRoute, postActionListAccessKeysRoute } from '../routes'

export const getActionListAccessKeysRouteHandler: RouteHandler<
  typeof getActionListAccessKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListAccessKeysRouteHandler: RouteHandler<
  typeof postActionListAccessKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}
