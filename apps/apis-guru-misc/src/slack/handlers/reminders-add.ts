import type { RouteHandler } from '@hono/zod-openapi'
import type { postRemindersAddRoute } from '../routes'

export const postRemindersAddRouteHandler: RouteHandler<typeof postRemindersAddRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
