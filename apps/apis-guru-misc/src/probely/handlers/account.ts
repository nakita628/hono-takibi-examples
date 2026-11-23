import type { RouteHandler } from '@hono/zod-openapi'
import type { getAccountIndexRoute } from '../routes'

export const getAccountIndexRouteHandler: RouteHandler<typeof getAccountIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}
