import type { RouteHandler } from '@hono/zod-openapi'
import type { getUserUsernameRoute, getUserUsernameTokenKindRoute, postUserRoute } from '../routes'

export const postUserRouteHandler: RouteHandler<typeof postUserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserUsernameRouteHandler: RouteHandler<typeof getUserUsernameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserUsernameTokenKindRouteHandler: RouteHandler<
  typeof getUserUsernameTokenKindRoute
> = async (c) => {
  throw new Error('Not implemented')
}
