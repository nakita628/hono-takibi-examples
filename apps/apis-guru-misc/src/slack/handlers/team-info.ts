import type { RouteHandler } from '@hono/zod-openapi'
import type { getTeamInfoRoute } from '../routes'

export const getTeamInfoRouteHandler: RouteHandler<typeof getTeamInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
