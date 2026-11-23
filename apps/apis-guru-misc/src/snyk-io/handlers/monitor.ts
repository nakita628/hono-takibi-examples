import type { RouteHandler } from '@hono/zod-openapi'
import type { postMonitorDepGraphRoute } from '../routes'

export const postMonitorDepGraphRouteHandler: RouteHandler<
  typeof postMonitorDepGraphRoute
> = async (c) => {
  throw new Error('Not implemented')
}
