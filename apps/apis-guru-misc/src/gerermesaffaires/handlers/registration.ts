import type { RouteHandler } from '@hono/zod-openapi'
import type { getRegistrationRoute, postRegistrationRoute } from '../routes'

export const getRegistrationRouteHandler: RouteHandler<typeof getRegistrationRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRegistrationRouteHandler: RouteHandler<typeof postRegistrationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
