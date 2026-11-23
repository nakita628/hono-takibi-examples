import type { RouteHandler } from '@hono/zod-openapi'
import type { postAccountCartAddJsonRoute } from '../routes'

export const postAccountCartAddJsonRouteHandler: RouteHandler<
  typeof postAccountCartAddJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
