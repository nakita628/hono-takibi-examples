import type { RouteHandler } from '@hono/zod-openapi'
import type { getRemindersListRoute } from '../routes'

export const getRemindersListRouteHandler: RouteHandler<typeof getRemindersListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
