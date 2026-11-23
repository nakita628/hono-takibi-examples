import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionAttachInstancesRoute, postActionAttachInstancesRoute } from '../routes'

export const getActionAttachInstancesRouteHandler: RouteHandler<
  typeof getActionAttachInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAttachInstancesRouteHandler: RouteHandler<
  typeof postActionAttachInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
