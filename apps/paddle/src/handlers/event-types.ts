import type { RouteHandler } from '@hono/zod-openapi'
import type { getEventTypesRoute } from '../routes'

export const getEventTypesRouteHandler: RouteHandler<typeof getEventTypesRoute> = async (c) => {
  throw new Error('Not implemented')
}
