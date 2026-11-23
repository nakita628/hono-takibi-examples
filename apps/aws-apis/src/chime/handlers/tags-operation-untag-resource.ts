import type { RouteHandler } from '@hono/zod-openapi'
import type { postTagsOperationUntagResourceRoute } from '../routes'

export const postTagsOperationUntagResourceRouteHandler: RouteHandler<
  typeof postTagsOperationUntagResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
