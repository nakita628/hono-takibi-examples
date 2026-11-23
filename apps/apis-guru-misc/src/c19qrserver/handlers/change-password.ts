import type { RouteHandler } from '@hono/zod-openapi'
import type { postChangePasswordRoute } from '../routes'

export const postChangePasswordRouteHandler: RouteHandler<typeof postChangePasswordRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
