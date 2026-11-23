import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateFleetRoute, postActionCreateFleetRoute } from '../routes'

export const getActionCreateFleetRouteHandler: RouteHandler<
  typeof getActionCreateFleetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateFleetRouteHandler: RouteHandler<
  typeof postActionCreateFleetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
