import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRedisRedisIdRoute,
  getRedisRedisIdConnectionInfoRoute,
  getRedisRedisIdRoute,
  getRedisRoute,
  patchRedisRedisIdRoute,
  postRedisRedisIdResumeRoute,
  postRedisRedisIdSuspendRoute,
  postRedisRoute,
} from '../routes'

export const getRedisRouteHandler: RouteHandler<typeof getRedisRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRedisRouteHandler: RouteHandler<typeof postRedisRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRedisRedisIdRouteHandler: RouteHandler<typeof getRedisRedisIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchRedisRedisIdRouteHandler: RouteHandler<typeof patchRedisRedisIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteRedisRedisIdRouteHandler: RouteHandler<typeof deleteRedisRedisIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRedisRedisIdConnectionInfoRouteHandler: RouteHandler<
  typeof getRedisRedisIdConnectionInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRedisRedisIdSuspendRouteHandler: RouteHandler<
  typeof postRedisRedisIdSuspendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRedisRedisIdResumeRouteHandler: RouteHandler<
  typeof postRedisRedisIdResumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
