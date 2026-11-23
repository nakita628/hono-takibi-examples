import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiKeysNameRoute,
  deleteApiKeysUserIdNameRoute,
  getApiKeysCurrentRoute,
  getApiKeysNameRoute,
  getApiKeysRoute,
  postApiKeysRoute,
} from '../routes'

export const getApiKeysRouteHandler: RouteHandler<typeof getApiKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiKeysRouteHandler: RouteHandler<typeof postApiKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKeysCurrentRouteHandler: RouteHandler<typeof getApiKeysCurrentRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiKeysNameRouteHandler: RouteHandler<typeof deleteApiKeysNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiKeysNameRouteHandler: RouteHandler<typeof getApiKeysNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiKeysUserIdNameRouteHandler: RouteHandler<
  typeof deleteApiKeysUserIdNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
