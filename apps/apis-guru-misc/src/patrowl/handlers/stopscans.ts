import type { RouteHandler } from '@hono/zod-openapi'
import type { getStopscansRoute } from '../routes'

export const getStopscansRouteHandler: RouteHandler<typeof getStopscansRoute> = async (c) => {
  throw new Error('Not implemented')
}
