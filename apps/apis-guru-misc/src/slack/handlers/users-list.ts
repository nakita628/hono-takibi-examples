import type { RouteHandler } from '@hono/zod-openapi'
import type { getUsersListRoute } from '../routes'

export const getUsersListRouteHandler: RouteHandler<typeof getUsersListRoute> = async (c) => {
  throw new Error('Not implemented')
}
