import type { RouteHandler } from '@hono/zod-openapi'
import type { getAuthinfoRoute } from '../routes'

export const getAuthinfoRouteHandler: RouteHandler<typeof getAuthinfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
