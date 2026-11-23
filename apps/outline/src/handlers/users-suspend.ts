import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsersSuspendRoute } from '../routes'

export const postUsersSuspendRouteHandler: RouteHandler<typeof postUsersSuspendRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
