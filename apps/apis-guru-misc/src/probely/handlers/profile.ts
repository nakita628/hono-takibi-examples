import type { RouteHandler } from '@hono/zod-openapi'
import type { getProfileIndexRoute, postProfileChangePasswordIndexRoute } from '../routes'

export const getProfileIndexRouteHandler: RouteHandler<typeof getProfileIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postProfileChangePasswordIndexRouteHandler: RouteHandler<
  typeof postProfileChangePasswordIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
