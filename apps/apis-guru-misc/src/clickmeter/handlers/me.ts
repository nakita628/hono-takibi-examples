import type { RouteHandler } from '@hono/zod-openapi'
import type { getMePlanRoute, getMeRoute } from '../routes'

export const getMeRouteHandler: RouteHandler<typeof getMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMePlanRouteHandler: RouteHandler<typeof getMePlanRoute> = async (c) => {
  throw new Error('Not implemented')
}
