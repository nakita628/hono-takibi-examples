import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteSSHPublicKeyRoute, postActionDeleteSSHPublicKeyRoute } from '../routes'

export const getActionDeleteSSHPublicKeyRouteHandler: RouteHandler<
  typeof getActionDeleteSSHPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteSSHPublicKeyRouteHandler: RouteHandler<
  typeof postActionDeleteSSHPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
