import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetSSHPublicKeyRoute, postActionGetSSHPublicKeyRoute } from '../routes'

export const getActionGetSSHPublicKeyRouteHandler: RouteHandler<
  typeof getActionGetSSHPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetSSHPublicKeyRouteHandler: RouteHandler<
  typeof postActionGetSSHPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
