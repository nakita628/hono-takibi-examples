import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postAuthObtainIndexRoute,
  postAuthRefreshIndexRoute,
  postAuthRevokeIndexRoute,
  postAuthVerifyIndexRoute,
} from '../routes'

export const postAuthObtainIndexRouteHandler: RouteHandler<
  typeof postAuthObtainIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthRefreshIndexRouteHandler: RouteHandler<
  typeof postAuthRefreshIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthRevokeIndexRouteHandler: RouteHandler<
  typeof postAuthRevokeIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthVerifyIndexRouteHandler: RouteHandler<
  typeof postAuthVerifyIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
