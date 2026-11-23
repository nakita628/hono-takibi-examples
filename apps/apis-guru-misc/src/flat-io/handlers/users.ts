import type { RouteHandler } from '@hono/zod-openapi'
import type { getUsersUserLikesRoute, getUsersUserRoute, getUsersUserScoresRoute } from '../routes'

export const getUsersUserRouteHandler: RouteHandler<typeof getUsersUserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserLikesRouteHandler: RouteHandler<typeof getUsersUserLikesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUsersUserScoresRouteHandler: RouteHandler<typeof getUsersUserScoresRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
