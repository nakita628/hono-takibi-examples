import type { RouteHandler } from '@hono/zod-openapi'
import type { postClientRegisterRoute } from '../routes'

export const postClientRegisterRouteHandler: RouteHandler<typeof postClientRegisterRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
