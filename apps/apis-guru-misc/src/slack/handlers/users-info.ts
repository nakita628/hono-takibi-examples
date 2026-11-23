import type { RouteHandler } from '@hono/zod-openapi'
import type { getUsersInfoRoute } from '../routes'

export const getUsersInfoRouteHandler: RouteHandler<typeof getUsersInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
