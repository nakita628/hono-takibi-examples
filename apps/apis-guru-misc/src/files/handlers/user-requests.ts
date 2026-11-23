import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUserRequestsIdRoute,
  getUserRequestsIdRoute,
  getUserRequestsRoute,
  postUserRequestsRoute,
} from '../routes'

export const getUserRequestsRouteHandler: RouteHandler<typeof getUserRequestsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserRequestsRouteHandler: RouteHandler<typeof postUserRequestsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteUserRequestsIdRouteHandler: RouteHandler<
  typeof deleteUserRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserRequestsIdRouteHandler: RouteHandler<typeof getUserRequestsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
