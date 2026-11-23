import type { RouteHandler } from '@hono/zod-openapi'
import type { getUsersRoute } from '../routes'

export const getUsersRouteHandler: RouteHandler<typeof getUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}
