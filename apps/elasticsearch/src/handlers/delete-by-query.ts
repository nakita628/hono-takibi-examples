import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteByQueryTaskIdRethrottleRoute } from '../routes'

export const postDeleteByQueryTaskIdRethrottleRouteHandler: RouteHandler<
  typeof postDeleteByQueryTaskIdRethrottleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
