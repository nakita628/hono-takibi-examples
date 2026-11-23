import type { RouteHandler } from '@hono/zod-openapi'
import type { postDisablePermitRoute } from '../routes'

export const postDisablePermitRouteHandler: RouteHandler<typeof postDisablePermitRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
