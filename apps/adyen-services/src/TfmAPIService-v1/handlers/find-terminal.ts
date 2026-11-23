import type { RouteHandler } from '@hono/zod-openapi'
import type { postFindTerminalRoute } from '../routes'

export const postFindTerminalRouteHandler: RouteHandler<typeof postFindTerminalRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
