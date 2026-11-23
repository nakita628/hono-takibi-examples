import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetTerminalDetailsRoute } from '../routes'

export const postGetTerminalDetailsRouteHandler: RouteHandler<
  typeof postGetTerminalDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
