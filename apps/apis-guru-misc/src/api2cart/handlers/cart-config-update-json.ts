import type { RouteHandler } from '@hono/zod-openapi'
import type { putCartConfigUpdateJsonRoute } from '../routes'

export const putCartConfigUpdateJsonRouteHandler: RouteHandler<
  typeof putCartConfigUpdateJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
