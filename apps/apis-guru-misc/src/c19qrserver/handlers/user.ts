import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteUserUserIdRoute, getUserUserIdRoute, postUserRoute } from '../routes'

export const postUserRouteHandler: RouteHandler<typeof postUserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserUserIdRouteHandler: RouteHandler<typeof deleteUserUserIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUserUserIdRouteHandler: RouteHandler<typeof getUserUserIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
