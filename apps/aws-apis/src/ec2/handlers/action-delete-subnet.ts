import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteSubnetRoute, postActionDeleteSubnetRoute } from '../routes'

export const getActionDeleteSubnetRouteHandler: RouteHandler<
  typeof getActionDeleteSubnetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteSubnetRouteHandler: RouteHandler<
  typeof postActionDeleteSubnetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
