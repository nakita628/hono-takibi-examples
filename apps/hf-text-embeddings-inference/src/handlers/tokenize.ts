import type { RouteHandler } from '@hono/zod-openapi'
import type { postTokenizeRoute } from '../routes'

export const postTokenizeRouteHandler: RouteHandler<typeof postTokenizeRoute> = async (c) => {
  throw new Error('Not implemented')
}
