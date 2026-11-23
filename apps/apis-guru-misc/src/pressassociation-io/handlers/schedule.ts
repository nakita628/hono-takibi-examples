import type { RouteHandler } from '@hono/zod-openapi'
import type { getScheduleRoute } from '../routes'

export const getScheduleRouteHandler: RouteHandler<typeof getScheduleRoute> = async (c) => {
  throw new Error('Not implemented')
}
