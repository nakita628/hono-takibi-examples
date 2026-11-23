import type { RouteHandler } from '@hono/zod-openapi'
import type { postActionListDeadLetterSourceQueuesRoute } from '../routes'

export const postActionListDeadLetterSourceQueuesRouteHandler: RouteHandler<
  typeof postActionListDeadLetterSourceQueuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
