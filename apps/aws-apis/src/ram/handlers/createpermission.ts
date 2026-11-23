import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreatepermissionRoute } from '../routes'

export const postCreatepermissionRouteHandler: RouteHandler<
  typeof postCreatepermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
