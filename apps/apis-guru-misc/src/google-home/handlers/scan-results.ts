import type { RouteHandler } from '@hono/zod-openapi'
import type { getScanResultsRoute } from '../routes'

export const getScanResultsRouteHandler: RouteHandler<typeof getScanResultsRoute> = async (c) => {
  throw new Error('Not implemented')
}
