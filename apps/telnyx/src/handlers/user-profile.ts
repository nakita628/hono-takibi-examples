import type { RouteHandler } from '@hono/zod-openapi'
import type { getUserProfileRoute, patchUserProfileRoute } from '../routes'

export const getUserProfileRouteHandler: RouteHandler<typeof getUserProfileRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserProfileRouteHandler: RouteHandler<typeof patchUserProfileRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
