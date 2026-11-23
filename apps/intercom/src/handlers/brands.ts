import type { RouteHandler } from '@hono/zod-openapi'
import type { getBrandsIdRoute, getBrandsRoute } from '../routes'

export const getBrandsRouteHandler: RouteHandler<typeof getBrandsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBrandsIdRouteHandler: RouteHandler<typeof getBrandsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
