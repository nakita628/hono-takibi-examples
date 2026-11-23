import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListExportsRoute, postActionListExportsRoute } from '../routes'

export const getActionListExportsRouteHandler: RouteHandler<
  typeof getActionListExportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListExportsRouteHandler: RouteHandler<
  typeof postActionListExportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
