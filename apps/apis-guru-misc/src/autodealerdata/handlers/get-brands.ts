import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetBrandsRoute } from '../routes'

export const getGetBrandsRouteHandler: RouteHandler<typeof getGetBrandsRoute> = async (c) => {
  throw new Error('Not implemented')
}
