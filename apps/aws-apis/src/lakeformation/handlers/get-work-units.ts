import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetWorkUnitsRoute } from '../routes'

export const postGetWorkUnitsRouteHandler: RouteHandler<typeof postGetWorkUnitsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
