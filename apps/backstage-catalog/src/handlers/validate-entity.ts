import type { RouteHandler } from '@hono/zod-openapi'
import type { postValidateEntityRoute } from '../routes'

export const postValidateEntityRouteHandler: RouteHandler<typeof postValidateEntityRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
