import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListTemplatesRoute, postActionListTemplatesRoute } from '../routes'

export const getActionListTemplatesRouteHandler: RouteHandler<
  typeof getActionListTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListTemplatesRouteHandler: RouteHandler<
  typeof postActionListTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
