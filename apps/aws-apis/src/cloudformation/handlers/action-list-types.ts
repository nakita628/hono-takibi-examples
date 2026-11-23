import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListTypesRoute, postActionListTypesRoute } from '../routes'

export const getActionListTypesRouteHandler: RouteHandler<typeof getActionListTypesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postActionListTypesRouteHandler: RouteHandler<
  typeof postActionListTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
