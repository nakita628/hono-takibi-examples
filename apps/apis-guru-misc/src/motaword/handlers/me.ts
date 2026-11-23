import type { RouteHandler } from '@hono/zod-openapi'
import type { getMeRoute, postMeRoute } from '../routes'

export const getMeRouteHandler: RouteHandler<typeof getMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMeRouteHandler: RouteHandler<typeof postMeRoute> = async (c) => {
  throw new Error('Not implemented')
}
