import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionUploadSSHPublicKeyRoute, postActionUploadSSHPublicKeyRoute } from '../routes'

export const getActionUploadSSHPublicKeyRouteHandler: RouteHandler<
  typeof getActionUploadSSHPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUploadSSHPublicKeyRouteHandler: RouteHandler<
  typeof postActionUploadSSHPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
