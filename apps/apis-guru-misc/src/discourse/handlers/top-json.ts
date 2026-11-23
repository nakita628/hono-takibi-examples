import type { RouteHandler } from '@hono/zod-openapi'
import type { getTopJsonRoute } from '../routes'

export const getTopJsonRouteHandler: RouteHandler<typeof getTopJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}
