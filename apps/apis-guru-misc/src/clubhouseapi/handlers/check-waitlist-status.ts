import type { RouteHandler } from '@hono/zod-openapi'
import type { postCheckWaitlistStatusRoute } from '../routes'

export const postCheckWaitlistStatusRouteHandler: RouteHandler<
  typeof postCheckWaitlistStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
