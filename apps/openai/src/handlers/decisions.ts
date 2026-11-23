import type { RouteHandler } from '@hono/zod-openapi'
import type { postDecisionsRoute } from '../routes'

export const postDecisionsRouteHandler: RouteHandler<typeof postDecisionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
