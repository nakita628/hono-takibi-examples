import type { RouteHandler } from '@hono/zod-openapi'
import type { getIntervalsRoute } from '../routes'

export const getIntervalsRouteHandler: RouteHandler<typeof getIntervalsRoute> = async (c) => {
  throw new Error('Not implemented')
}
