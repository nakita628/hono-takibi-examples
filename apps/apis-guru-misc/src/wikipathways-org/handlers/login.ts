import type { RouteHandler } from '@hono/zod-openapi'
import type { getLoginRoute } from '../routes'

export const getLoginRouteHandler: RouteHandler<typeof getLoginRoute> = async (c) => {
  throw new Error('Not implemented')
}
