import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUserApiKeysRoute,
  getUserGroupsRoute,
  getUserPublicKeysRoute,
  patchUserRoute,
  postUserApiKeysRoute,
  postUserPublicKeysRoute,
} from '../routes'

export const patchUserRouteHandler: RouteHandler<typeof patchUserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserApiKeysRouteHandler: RouteHandler<typeof getUserApiKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserApiKeysRouteHandler: RouteHandler<typeof postUserApiKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserGroupsRouteHandler: RouteHandler<typeof getUserGroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserPublicKeysRouteHandler: RouteHandler<typeof getUserPublicKeysRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUserPublicKeysRouteHandler: RouteHandler<typeof postUserPublicKeysRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
