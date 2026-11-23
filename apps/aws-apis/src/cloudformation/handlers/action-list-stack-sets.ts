import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListStackSetsRoute, postActionListStackSetsRoute } from '../routes'

export const getActionListStackSetsRouteHandler: RouteHandler<
  typeof getActionListStackSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListStackSetsRouteHandler: RouteHandler<
  typeof postActionListStackSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
