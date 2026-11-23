import type { RouteHandler } from '@hono/zod-openapi'
import type { getProPlayersRoute } from '../routes'

export const getProPlayersRouteHandler: RouteHandler<typeof getProPlayersRoute> = async (c) => {
  throw new Error('Not implemented')
}
