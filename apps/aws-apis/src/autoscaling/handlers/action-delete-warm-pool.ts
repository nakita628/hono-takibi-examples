import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteWarmPoolRoute, postActionDeleteWarmPoolRoute } from '../routes'

export const getActionDeleteWarmPoolRouteHandler: RouteHandler<
  typeof getActionDeleteWarmPoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteWarmPoolRouteHandler: RouteHandler<
  typeof postActionDeleteWarmPoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}
