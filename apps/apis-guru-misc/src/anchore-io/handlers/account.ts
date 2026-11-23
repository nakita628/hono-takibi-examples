import type { RouteHandler } from '@hono/zod-openapi'
import type { getAccountRoute } from '../routes'

export const getAccountRouteHandler: RouteHandler<typeof getAccountRoute> = async (c) => {
  throw new Error('Not implemented')
}
