import type { RouteHandler } from '@hono/zod-openapi'
import type { postSearchClubsRoute } from '../routes'

export const postSearchClubsRouteHandler: RouteHandler<typeof postSearchClubsRoute> = async (c) => {
  throw new Error('Not implemented')
}
