import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetDealersRoute } from '../routes'

export const getGetDealersRouteHandler: RouteHandler<typeof getGetDealersRoute> = async (c) => {
  throw new Error('Not implemented')
}
