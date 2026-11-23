import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateCoipPoolRoute, postActionCreateCoipPoolRoute } from '../routes'

export const getActionCreateCoipPoolRouteHandler: RouteHandler<
  typeof getActionCreateCoipPoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateCoipPoolRouteHandler: RouteHandler<
  typeof postActionCreateCoipPoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}
