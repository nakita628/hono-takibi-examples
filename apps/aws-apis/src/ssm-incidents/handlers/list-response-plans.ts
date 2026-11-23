import type { RouteHandler } from '@hono/zod-openapi'
import type { postListResponsePlansRoute } from '../routes'

export const postListResponsePlansRouteHandler: RouteHandler<
  typeof postListResponsePlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}
