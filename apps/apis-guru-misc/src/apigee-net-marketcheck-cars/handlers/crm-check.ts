import type { RouteHandler } from '@hono/zod-openapi'
import type { getCrmCheckCarVinRoute } from '../routes'

export const getCrmCheckCarVinRouteHandler: RouteHandler<typeof getCrmCheckCarVinRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
