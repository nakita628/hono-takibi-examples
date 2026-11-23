import type { RouteHandler } from '@hono/zod-openapi'
import type { putOrderUpdateJsonRoute } from '../routes'

export const putOrderUpdateJsonRouteHandler: RouteHandler<typeof putOrderUpdateJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
