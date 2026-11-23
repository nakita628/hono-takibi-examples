import type { RouteHandler } from '@hono/zod-openapi'
import type { getSchedulesRoute } from '../routes'

export const getSchedulesRouteHandler: RouteHandler<typeof getSchedulesRoute> = async (c) => {
  throw new Error('Not implemented')
}
