import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreatepermissionversionRoute } from '../routes'

export const postCreatepermissionversionRouteHandler: RouteHandler<
  typeof postCreatepermissionversionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
