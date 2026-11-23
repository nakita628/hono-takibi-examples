import type { RouteHandler } from '@hono/zod-openapi'
import type { getHtDcperiodRoute } from '../routes'

export const getHtDcperiodRouteHandler: RouteHandler<typeof getHtDcperiodRoute> = async (c) => {
  throw new Error('Not implemented')
}
