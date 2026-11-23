import type { RouteHandler } from '@hono/zod-openapi'
import type { getTagNameJsonRoute } from '../routes'

export const getTagNameJsonRouteHandler: RouteHandler<typeof getTagNameJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}
