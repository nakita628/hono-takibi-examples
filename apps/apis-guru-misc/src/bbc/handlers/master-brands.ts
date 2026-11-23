import type { RouteHandler } from '@hono/zod-openapi'
import type { getMasterBrandsRoute } from '../routes'

export const getMasterBrandsRouteHandler: RouteHandler<typeof getMasterBrandsRoute> = async (c) => {
  throw new Error('Not implemented')
}
