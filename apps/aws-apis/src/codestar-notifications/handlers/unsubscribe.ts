import type { RouteHandler } from '@hono/zod-openapi'
import type { postUnsubscribeRoute } from '../routes'

export const postUnsubscribeRouteHandler: RouteHandler<typeof postUnsubscribeRoute> = async (c) => {
  throw new Error('Not implemented')
}
