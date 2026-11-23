import type { RouteHandler } from '@hono/zod-openapi'
import type { putDriverLocationRoute } from '../routes'

export const putDriverLocationRouteHandler: RouteHandler<typeof putDriverLocationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
