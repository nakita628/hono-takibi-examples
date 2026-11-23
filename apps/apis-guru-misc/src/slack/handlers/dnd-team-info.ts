import type { RouteHandler } from '@hono/zod-openapi'
import type { getDndTeamInfoRoute } from '../routes'

export const getDndTeamInfoRouteHandler: RouteHandler<typeof getDndTeamInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
