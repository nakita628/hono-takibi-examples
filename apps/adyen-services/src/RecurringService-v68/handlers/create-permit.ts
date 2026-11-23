import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreatePermitRoute } from '../routes'

export const postCreatePermitRouteHandler: RouteHandler<typeof postCreatePermitRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
