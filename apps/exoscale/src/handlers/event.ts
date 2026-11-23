import type { RouteHandler } from '@hono/zod-openapi'
import type { getEventRoute } from '../routes'

export const getEventRouteHandler: RouteHandler<typeof getEventRoute> = async (c) => {
  throw new Error('Not implemented')
}
