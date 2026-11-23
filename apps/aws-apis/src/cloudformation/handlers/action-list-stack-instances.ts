import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListStackInstancesRoute, postActionListStackInstancesRoute } from '../routes'

export const getActionListStackInstancesRouteHandler: RouteHandler<
  typeof getActionListStackInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListStackInstancesRouteHandler: RouteHandler<
  typeof postActionListStackInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
