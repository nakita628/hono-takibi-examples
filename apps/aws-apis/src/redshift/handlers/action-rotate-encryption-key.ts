import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRotateEncryptionKeyRoute,
  postActionRotateEncryptionKeyRoute,
} from '../routes'

export const getActionRotateEncryptionKeyRouteHandler: RouteHandler<
  typeof getActionRotateEncryptionKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRotateEncryptionKeyRouteHandler: RouteHandler<
  typeof postActionRotateEncryptionKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
