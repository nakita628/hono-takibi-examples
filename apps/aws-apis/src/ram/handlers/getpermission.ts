import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetpermissionRoute } from '../routes'

export const postGetpermissionRouteHandler: RouteHandler<typeof postGetpermissionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
