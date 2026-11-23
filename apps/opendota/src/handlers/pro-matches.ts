import type { RouteHandler } from '@hono/zod-openapi'
import type { getProMatchesRoute } from '../routes'

export const getProMatchesRouteHandler: RouteHandler<typeof getProMatchesRoute> = async (c) => {
  throw new Error('Not implemented')
}
