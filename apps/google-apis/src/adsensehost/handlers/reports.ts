import type { RouteHandler } from '@hono/zod-openapi'
import type { getReportsRoute } from '../routes'

export const getReportsRouteHandler: RouteHandler<typeof getReportsRoute> = async (c) => {
  throw new Error('Not implemented')
}
