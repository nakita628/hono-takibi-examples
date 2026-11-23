import type { RouteHandler } from '@hono/zod-openapi'
import type { getSitesRoute } from '../routes'

export const getSitesRouteHandler: RouteHandler<typeof getSitesRoute> = async (c) => {
  throw new Error('Not implemented')
}
