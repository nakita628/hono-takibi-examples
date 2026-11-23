import type { RouteHandler } from '@hono/zod-openapi'
import type { postExportsGraphRoute, postExportsResourceRoute } from '../routes'

export const postExportsGraphRouteHandler: RouteHandler<typeof postExportsGraphRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postExportsResourceRouteHandler: RouteHandler<
  typeof postExportsResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
