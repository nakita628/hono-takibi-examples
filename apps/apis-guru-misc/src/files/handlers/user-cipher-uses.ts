import type { RouteHandler } from '@hono/zod-openapi'
import type { getUserCipherUsesRoute } from '../routes'

export const getUserCipherUsesRouteHandler: RouteHandler<typeof getUserCipherUsesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
