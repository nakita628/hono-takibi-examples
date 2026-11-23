import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAuthTokenRoute,
  getAuthTokenCodeRoute,
  postAuthInitRoute,
  postAuthJwtRoute,
  postAuthRenewRoute,
  postAuthTokenAccessRoute,
  postAuthTokenRoute,
} from '../routes'

export const postAuthInitRouteHandler: RouteHandler<typeof postAuthInitRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthJwtRouteHandler: RouteHandler<typeof postAuthJwtRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthRenewRouteHandler: RouteHandler<typeof postAuthRenewRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthTokenRouteHandler: RouteHandler<typeof deleteAuthTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthTokenRouteHandler: RouteHandler<typeof postAuthTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthTokenAccessRouteHandler: RouteHandler<
  typeof postAuthTokenAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthTokenCodeRouteHandler: RouteHandler<typeof getAuthTokenCodeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
