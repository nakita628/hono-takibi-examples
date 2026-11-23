import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionModifyVpcTenancyRoute, postActionModifyVpcTenancyRoute } from '../routes'

export const getActionModifyVpcTenancyRouteHandler: RouteHandler<
  typeof getActionModifyVpcTenancyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyVpcTenancyRouteHandler: RouteHandler<
  typeof postActionModifyVpcTenancyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
