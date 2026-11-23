import type { RouteHandler } from '@hono/zod-openapi'
import type { getFilingsIndexRoute } from '../routes'

export const getFilingsIndexRouteHandler: RouteHandler<typeof getFilingsIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}
