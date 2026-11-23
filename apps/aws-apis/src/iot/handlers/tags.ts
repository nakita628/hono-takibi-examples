import type { RouteHandler } from '@hono/zod-openapi'
import type { postTagsRoute } from '../routes'

export const postTagsRouteHandler: RouteHandler<typeof postTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}
