import type { RouteHandler } from '@hono/zod-openapi'
import type { getHtDcphaseRoute } from '../routes'

export const getHtDcphaseRouteHandler: RouteHandler<typeof getHtDcphaseRoute> = async (c) => {
  throw new Error('Not implemented')
}
