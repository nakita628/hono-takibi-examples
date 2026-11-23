import type { RouteHandler } from '@hono/zod-openapi'
import type { postUntagresourceRoute } from '../routes'

export const postUntagresourceRouteHandler: RouteHandler<typeof postUntagresourceRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
