import type { RouteHandler } from '@hono/zod-openapi'
import type { getWebauthRoute } from '../routes'

export const getWebauthRouteHandler: RouteHandler<typeof getWebauthRoute> = async (c) => {
  throw new Error('Not implemented')
}
