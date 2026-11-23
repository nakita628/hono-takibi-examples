import type { RouteHandler } from '@hono/zod-openapi'
import type { getUsersRoute, getUsersUserIDRoute } from '../routes'

export const getUsersRouteHandler: RouteHandler<typeof getUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIDRouteHandler: RouteHandler<typeof getUsersUserIDRoute> = async (c) => {
  throw new Error('Not implemented')
}
