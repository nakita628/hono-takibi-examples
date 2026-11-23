import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteKeysKeyIdOrNameRoute,
  getKeysKeyIdOrNameRoute,
  getKeysRoute,
  patchKeysKeyIdOrNameRoute,
  postKeysRoute,
  putKeysKeyIdOrNameRoute,
} from '../routes'

export const getKeysRouteHandler: RouteHandler<typeof getKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postKeysRouteHandler: RouteHandler<typeof postKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKeysKeyIdOrNameRouteHandler: RouteHandler<
  typeof deleteKeysKeyIdOrNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKeysKeyIdOrNameRouteHandler: RouteHandler<typeof getKeysKeyIdOrNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchKeysKeyIdOrNameRouteHandler: RouteHandler<
  typeof patchKeysKeyIdOrNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKeysKeyIdOrNameRouteHandler: RouteHandler<typeof putKeysKeyIdOrNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
