import type { RouteHandler } from '@hono/zod-openapi'
import type { getContentratingsRoute } from '../routes'

export const getContentratingsRouteHandler: RouteHandler<typeof getContentratingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
