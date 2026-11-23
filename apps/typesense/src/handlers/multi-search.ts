import type { RouteHandler } from '@hono/zod-openapi'
import type { postMultiSearchRoute } from '../routes'

export const postMultiSearchRouteHandler: RouteHandler<typeof postMultiSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}
