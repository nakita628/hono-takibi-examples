import type { RouteHandler } from '@hono/zod-openapi'
import type { getHyponymsRoute } from '../routes'

export const getHyponymsRouteHandler: RouteHandler<typeof getHyponymsRoute> = async (c) => {
  throw new Error('Not implemented')
}
