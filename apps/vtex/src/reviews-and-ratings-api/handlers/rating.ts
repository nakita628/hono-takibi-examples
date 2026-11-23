import type { RouteHandler } from '@hono/zod-openapi'
import type { getRatingProductIdRoute } from '../routes'

export const getRatingProductIdRouteHandler: RouteHandler<typeof getRatingProductIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
