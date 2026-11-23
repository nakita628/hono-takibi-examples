import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteAttributesRoute, postActionDeleteAttributesRoute } from '../routes'

export const getActionDeleteAttributesRouteHandler: RouteHandler<
  typeof getActionDeleteAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteAttributesRouteHandler: RouteHandler<
  typeof postActionDeleteAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
