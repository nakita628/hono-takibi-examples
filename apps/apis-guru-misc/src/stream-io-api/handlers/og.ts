import type { RouteHandler } from '@hono/zod-openapi'
import type { getOgRoute } from '../routes'

export const getOgRouteHandler: RouteHandler<typeof getOgRoute> = async (c) => {
  throw new Error('Not implemented')
}
