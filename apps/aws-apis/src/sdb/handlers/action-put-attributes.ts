import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionPutAttributesRoute, postActionPutAttributesRoute } from '../routes'

export const getActionPutAttributesRouteHandler: RouteHandler<
  typeof getActionPutAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPutAttributesRouteHandler: RouteHandler<
  typeof postActionPutAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
