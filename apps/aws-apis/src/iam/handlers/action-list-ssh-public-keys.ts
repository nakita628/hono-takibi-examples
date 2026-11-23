import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListSSHPublicKeysRoute, postActionListSSHPublicKeysRoute } from '../routes'

export const getActionListSSHPublicKeysRouteHandler: RouteHandler<
  typeof getActionListSSHPublicKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListSSHPublicKeysRouteHandler: RouteHandler<
  typeof postActionListSSHPublicKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}
