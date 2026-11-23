import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionPutWarmPoolRoute, postActionPutWarmPoolRoute } from '../routes'

export const getActionPutWarmPoolRouteHandler: RouteHandler<
  typeof getActionPutWarmPoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPutWarmPoolRouteHandler: RouteHandler<
  typeof postActionPutWarmPoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}
