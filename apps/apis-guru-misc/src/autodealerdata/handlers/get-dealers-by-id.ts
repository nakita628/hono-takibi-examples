import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetDealersByIDRoute } from '../routes'

export const getGetDealersByIDRouteHandler: RouteHandler<typeof getGetDealersByIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
