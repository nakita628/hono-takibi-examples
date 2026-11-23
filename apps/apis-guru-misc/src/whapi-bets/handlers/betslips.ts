import type { RouteHandler } from '@hono/zod-openapi'
import type { postBetslipsRoute } from '../routes'

export const postBetslipsRouteHandler: RouteHandler<typeof postBetslipsRoute> = async (c) => {
  throw new Error('Not implemented')
}
