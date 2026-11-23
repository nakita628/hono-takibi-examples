import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetServiceDetailsByIDServiceIDRoute } from '../routes'

export const getGetServiceDetailsByIDServiceIDRouteHandler: RouteHandler<
  typeof getGetServiceDetailsByIDServiceIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
