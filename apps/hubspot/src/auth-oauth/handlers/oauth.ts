import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postOauth202609TokenIntrospectRoute,
  postOauth202609TokenRevokeRoute,
  postOauth202609TokenRoute,
} from '../routes'

export const postOauth202609TokenRouteHandler: RouteHandler<
  typeof postOauth202609TokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauth202609TokenIntrospectRouteHandler: RouteHandler<
  typeof postOauth202609TokenIntrospectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauth202609TokenRevokeRouteHandler: RouteHandler<
  typeof postOauth202609TokenRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
