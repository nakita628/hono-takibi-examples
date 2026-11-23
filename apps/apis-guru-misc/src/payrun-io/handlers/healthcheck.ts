import type { RouteHandler } from '@hono/zod-openapi'
import type { getHealthcheckRoute } from '../routes'

export const getHealthcheckRouteHandler: RouteHandler<typeof getHealthcheckRoute> = async (c) => {
  throw new Error('Not implemented')
}
