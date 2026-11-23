import type { RouteHandler } from '@hono/zod-openapi'
import type { getTopPlayersRoute } from '../routes'

export const getTopPlayersRouteHandler: RouteHandler<typeof getTopPlayersRoute> = async (c) => {
  throw new Error('Not implemented')
}
