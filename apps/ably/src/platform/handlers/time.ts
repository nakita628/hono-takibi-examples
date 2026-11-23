import type { RouteHandler } from '@hono/zod-openapi'
import type { getTimeRoute } from '../routes'

export const getTimeRouteHandler: RouteHandler<typeof getTimeRoute> = async (c) => {
  throw new Error('Not implemented')
}
