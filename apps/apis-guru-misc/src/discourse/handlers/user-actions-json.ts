import type { RouteHandler } from '@hono/zod-openapi'
import type { getUserActionsJsonRoute } from '../routes'

export const getUserActionsJsonRouteHandler: RouteHandler<typeof getUserActionsJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
