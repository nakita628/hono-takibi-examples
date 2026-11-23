import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteKeysUidOrKeyRoute,
  getKeysRoute,
  getKeysUidOrKeyRoute,
  patchKeysUidOrKeyRoute,
  postKeysRoute,
} from '../routes'

export const getKeysRouteHandler: RouteHandler<typeof getKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postKeysRouteHandler: RouteHandler<typeof postKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getKeysUidOrKeyRouteHandler: RouteHandler<typeof getKeysUidOrKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKeysUidOrKeyRouteHandler: RouteHandler<typeof deleteKeysUidOrKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchKeysUidOrKeyRouteHandler: RouteHandler<typeof patchKeysUidOrKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
