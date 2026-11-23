import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteStackSetRoute, postActionDeleteStackSetRoute } from '../routes'

export const getActionDeleteStackSetRouteHandler: RouteHandler<
  typeof getActionDeleteStackSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteStackSetRouteHandler: RouteHandler<
  typeof postActionDeleteStackSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
