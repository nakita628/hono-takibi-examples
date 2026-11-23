import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteKeyValueRedisIdRoute,
  getKeyValueRedisIdConnectionInfoRoute,
  getKeyValueRedisIdRoute,
  getKeyValueRoute,
  patchKeyValueRedisIdRoute,
  postKeyValueRedisIdResumeRoute,
  postKeyValueRedisIdSuspendRoute,
  postKeyValueRoute,
} from '../routes'

export const getKeyValueRouteHandler: RouteHandler<typeof getKeyValueRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postKeyValueRouteHandler: RouteHandler<typeof postKeyValueRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getKeyValueRedisIdRouteHandler: RouteHandler<typeof getKeyValueRedisIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchKeyValueRedisIdRouteHandler: RouteHandler<
  typeof patchKeyValueRedisIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKeyValueRedisIdRouteHandler: RouteHandler<
  typeof deleteKeyValueRedisIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKeyValueRedisIdConnectionInfoRouteHandler: RouteHandler<
  typeof getKeyValueRedisIdConnectionInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKeyValueRedisIdSuspendRouteHandler: RouteHandler<
  typeof postKeyValueRedisIdSuspendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKeyValueRedisIdResumeRouteHandler: RouteHandler<
  typeof postKeyValueRedisIdResumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
