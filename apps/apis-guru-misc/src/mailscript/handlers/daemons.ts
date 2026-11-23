import type { RouteHandler } from '@hono/zod-openapi'
import type { getDaemonsDaemonTokenRoute } from '../routes'

export const getDaemonsDaemonTokenRouteHandler: RouteHandler<
  typeof getDaemonsDaemonTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
