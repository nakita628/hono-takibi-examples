import type { RouteHandler } from '@hono/zod-openapi'
import type { postRegisterRoute } from '../routes'

export const postRegisterRouteHandler: RouteHandler<typeof postRegisterRoute> = async (c) => {
  throw new Error('Not implemented')
}
