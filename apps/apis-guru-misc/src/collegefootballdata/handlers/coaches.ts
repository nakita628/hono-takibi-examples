import type { RouteHandler } from '@hono/zod-openapi'
import type { getCoachesRoute } from '../routes'

export const getCoachesRouteHandler: RouteHandler<typeof getCoachesRoute> = async (c) => {
  throw new Error('Not implemented')
}
