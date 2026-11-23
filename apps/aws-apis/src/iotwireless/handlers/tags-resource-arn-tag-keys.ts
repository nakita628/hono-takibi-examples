import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteTagsResourceArnTagKeysRoute } from '../routes'

export const deleteTagsResourceArnTagKeysRouteHandler: RouteHandler<
  typeof deleteTagsResourceArnTagKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}
