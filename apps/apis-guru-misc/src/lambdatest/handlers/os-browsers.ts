import type { RouteHandler } from '@hono/zod-openapi'
import type { getOsBrowsersRoute } from '../routes'

export const getOsBrowsersRouteHandler: RouteHandler<typeof getOsBrowsersRoute> = async (c) => {
  throw new Error('Not implemented')
}
