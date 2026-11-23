import type { RouteHandler } from '@hono/zod-openapi'
import type { getRemindersInfoRoute } from '../routes'

export const getRemindersInfoRouteHandler: RouteHandler<typeof getRemindersInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
