import type { RouteHandler } from '@hono/zod-openapi'
import type { getHealthClockRoute, getHealthRoute } from '../routes'

export const getHealthRouteHandler: RouteHandler<typeof getHealthRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getHealthClockRouteHandler: RouteHandler<typeof getHealthClockRoute> = async (c) => {
  throw new Error('Not implemented')
}
