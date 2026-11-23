import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetglobaltimeRoute } from '../routes'

export const getGetglobaltimeRouteHandler: RouteHandler<typeof getGetglobaltimeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
