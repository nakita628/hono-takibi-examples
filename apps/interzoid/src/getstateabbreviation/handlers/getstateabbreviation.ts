import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetstateabbreviationRoute } from '../routes'

export const getGetstateabbreviationRouteHandler: RouteHandler<
  typeof getGetstateabbreviationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
