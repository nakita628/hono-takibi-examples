import type { RouteHandler } from '@hono/zod-openapi'
import type { postQueuesPlayMediaRoute, postQueuesUpdateActivityRoute } from '../routes'

export const postQueuesPlayMediaRouteHandler: RouteHandler<
  typeof postQueuesPlayMediaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postQueuesUpdateActivityRouteHandler: RouteHandler<
  typeof postQueuesUpdateActivityRoute
> = async (c) => {
  throw new Error('Not implemented')
}
