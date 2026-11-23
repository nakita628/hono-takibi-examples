import type { RouteHandler } from '@hono/zod-openapi'
import type { postListImagePipelinesRoute } from '../routes'

export const postListImagePipelinesRouteHandler: RouteHandler<
  typeof postListImagePipelinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
