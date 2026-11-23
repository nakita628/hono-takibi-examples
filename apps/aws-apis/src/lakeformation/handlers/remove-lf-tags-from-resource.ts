import type { RouteHandler } from '@hono/zod-openapi'
import type { postRemoveLFTagsFromResourceRoute } from '../routes'

export const postRemoveLFTagsFromResourceRouteHandler: RouteHandler<
  typeof postRemoveLFTagsFromResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
