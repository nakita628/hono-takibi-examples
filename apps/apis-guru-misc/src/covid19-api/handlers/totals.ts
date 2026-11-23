import type { RouteHandler } from '@hono/zod-openapi'
import type { getTotalsRoute } from '../routes'

export const getTotalsRouteHandler: RouteHandler<typeof getTotalsRoute> = async (c) => {
  throw new Error('Not implemented')
}
