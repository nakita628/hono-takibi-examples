import type { RouteHandler } from '@hono/zod-openapi'
import type { getTeamTeamnameRoute } from '../routes'

export const getTeamTeamnameRouteHandler: RouteHandler<typeof getTeamTeamnameRoute> = async (c) => {
  throw new Error('Not implemented')
}
