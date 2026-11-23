import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListSAMLProvidersRoute, postActionListSAMLProvidersRoute } from '../routes'

export const getActionListSAMLProvidersRouteHandler: RouteHandler<
  typeof getActionListSAMLProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListSAMLProvidersRouteHandler: RouteHandler<
  typeof postActionListSAMLProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
