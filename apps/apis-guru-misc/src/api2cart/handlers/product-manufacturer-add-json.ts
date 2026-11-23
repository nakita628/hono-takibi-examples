import type { RouteHandler } from '@hono/zod-openapi'
import type { postProductManufacturerAddJsonRoute } from '../routes'

export const postProductManufacturerAddJsonRouteHandler: RouteHandler<
  typeof postProductManufacturerAddJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
