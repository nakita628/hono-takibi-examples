import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteUserIdRoute, getUserRoute, postUserRoute, putUserIdRoute } from '../routes'

export const putUserIdRouteHandler: RouteHandler<typeof putUserIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserIdRouteHandler: RouteHandler<typeof deleteUserIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserRouteHandler: RouteHandler<typeof postUserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserRouteHandler: RouteHandler<typeof getUserRoute> = async (c) => {
  throw new Error('Not implemented')
}
