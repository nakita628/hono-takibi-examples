import type { RouteHandler } from '@hono/zod-openapi'
import type { postTableUpdateIdRoute } from '../routes'

export const postTableUpdateIdRouteHandler: RouteHandler<typeof postTableUpdateIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
