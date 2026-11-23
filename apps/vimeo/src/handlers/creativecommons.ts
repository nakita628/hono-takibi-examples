import type { RouteHandler } from '@hono/zod-openapi'
import type { getCreativecommonsRoute } from '../routes'

export const getCreativecommonsRouteHandler: RouteHandler<typeof getCreativecommonsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
