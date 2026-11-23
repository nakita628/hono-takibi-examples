import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetClubRoute } from '../routes'

export const postGetClubRouteHandler: RouteHandler<typeof postGetClubRoute> = async (c) => {
  throw new Error('Not implemented')
}
