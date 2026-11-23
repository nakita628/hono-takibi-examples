import type { RouteHandler } from '@hono/zod-openapi'
import type { getGoalsRoute } from '../routes'

export const getGoalsRouteHandler: RouteHandler<typeof getGoalsRoute> = async (c) => {
  throw new Error('Not implemented')
}
