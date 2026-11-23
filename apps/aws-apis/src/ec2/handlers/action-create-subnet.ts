import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateSubnetRoute, postActionCreateSubnetRoute } from '../routes'

export const getActionCreateSubnetRouteHandler: RouteHandler<
  typeof getActionCreateSubnetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateSubnetRouteHandler: RouteHandler<
  typeof postActionCreateSubnetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
