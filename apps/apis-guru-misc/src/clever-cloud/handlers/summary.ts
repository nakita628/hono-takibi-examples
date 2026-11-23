import type { RouteHandler } from '@hono/zod-openapi'
import type { getSummaryRoute } from '../routes'

export const getSummaryRouteHandler: RouteHandler<typeof getSummaryRoute> = async (c) => {
  throw new Error('Not implemented')
}
