import type { RouteHandler } from '@hono/zod-openapi'
import type { postReconciliationRoute } from '../routes'

export const postReconciliationRouteHandler: RouteHandler<typeof postReconciliationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
