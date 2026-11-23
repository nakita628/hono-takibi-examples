import type { RouteHandler } from '@hono/zod-openapi'
import type { getEventItemRoute } from '../routes'

export const getEventItemRouteHandler: RouteHandler<typeof getEventItemRoute> = async (c) => {
  throw new Error('Not implemented')
}
