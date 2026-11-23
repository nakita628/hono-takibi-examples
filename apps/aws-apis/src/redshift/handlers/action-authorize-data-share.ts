import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionAuthorizeDataShareRoute, postActionAuthorizeDataShareRoute } from '../routes'

export const getActionAuthorizeDataShareRouteHandler: RouteHandler<
  typeof getActionAuthorizeDataShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAuthorizeDataShareRouteHandler: RouteHandler<
  typeof postActionAuthorizeDataShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}
