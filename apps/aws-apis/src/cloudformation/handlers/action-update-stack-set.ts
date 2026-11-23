import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionUpdateStackSetRoute, postActionUpdateStackSetRoute } from '../routes'

export const getActionUpdateStackSetRouteHandler: RouteHandler<
  typeof getActionUpdateStackSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateStackSetRouteHandler: RouteHandler<
  typeof postActionUpdateStackSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
