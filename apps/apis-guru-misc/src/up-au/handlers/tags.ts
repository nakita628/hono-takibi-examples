import type { RouteHandler } from '@hono/zod-openapi'
import type { getTagsRoute } from '../routes'

export const getTagsRouteHandler: RouteHandler<typeof getTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}
