import type { RouteHandler } from '@hono/zod-openapi'
import type { getSearchJsonRoute } from '../routes'

export const getSearchJsonRouteHandler: RouteHandler<typeof getSearchJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}
