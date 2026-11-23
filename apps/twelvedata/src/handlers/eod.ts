import type { RouteHandler } from '@hono/zod-openapi'
import type { getEodRoute } from '../routes'

export const getEodRouteHandler: RouteHandler<typeof getEodRoute> = async (c) => {
  throw new Error('Not implemented')
}
