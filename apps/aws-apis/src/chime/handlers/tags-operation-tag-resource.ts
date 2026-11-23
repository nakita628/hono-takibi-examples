import type { RouteHandler } from '@hono/zod-openapi'
import type { postTagsOperationTagResourceRoute } from '../routes'

export const postTagsOperationTagResourceRouteHandler: RouteHandler<
  typeof postTagsOperationTagResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
