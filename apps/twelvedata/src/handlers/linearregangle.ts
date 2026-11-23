import type { RouteHandler } from '@hono/zod-openapi'
import type { getLinearregangleRoute } from '../routes'

export const getLinearregangleRouteHandler: RouteHandler<typeof getLinearregangleRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
