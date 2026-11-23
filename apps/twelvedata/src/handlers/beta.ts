import type { RouteHandler } from '@hono/zod-openapi'
import type { getBetaRoute } from '../routes'

export const getBetaRouteHandler: RouteHandler<typeof getBetaRoute> = async (c) => {
  throw new Error('Not implemented')
}
