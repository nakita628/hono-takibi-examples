import type { RouteHandler } from '@hono/zod-openapi'
import type { postListLogAnomaliesRoute } from '../routes'

export const postListLogAnomaliesRouteHandler: RouteHandler<
  typeof postListLogAnomaliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
