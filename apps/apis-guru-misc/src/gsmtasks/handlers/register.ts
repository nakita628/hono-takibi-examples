import type { RouteHandler } from '@hono/zod-openapi'
import type { postRegisterIndexRoute } from '../routes'

export const postRegisterIndexRouteHandler: RouteHandler<typeof postRegisterIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
