import type { RouteHandler } from '@hono/zod-openapi'
import type { postCardDetailsRoute } from '../routes'

export const postCardDetailsRouteHandler: RouteHandler<typeof postCardDetailsRoute> = async (c) => {
  throw new Error('Not implemented')
}
