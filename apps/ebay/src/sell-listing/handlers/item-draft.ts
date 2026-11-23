import type { RouteHandler } from '@hono/zod-openapi'
import type { postItemDraftIndexRoute } from '../routes'

export const postItemDraftIndexRouteHandler: RouteHandler<typeof postItemDraftIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
