import type { RouteHandler } from '@hono/zod-openapi'
import type { putAccountConfigUpdateJsonRoute } from '../routes'

export const putAccountConfigUpdateJsonRouteHandler: RouteHandler<
  typeof putAccountConfigUpdateJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
