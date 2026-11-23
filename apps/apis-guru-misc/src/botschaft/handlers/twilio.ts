import type { RouteHandler } from '@hono/zod-openapi'
import type { getTwilioRoute, postTwilioRoute } from '../routes'

export const getTwilioRouteHandler: RouteHandler<typeof getTwilioRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTwilioRouteHandler: RouteHandler<typeof postTwilioRoute> = async (c) => {
  throw new Error('Not implemented')
}
