import type { RouteHandler } from '@hono/zod-openapi'
import type { getTeamProfileGetRoute } from '../routes'

export const getTeamProfileGetRouteHandler: RouteHandler<typeof getTeamProfileGetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
