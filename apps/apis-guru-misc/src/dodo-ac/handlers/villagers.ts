import type { RouteHandler } from '@hono/zod-openapi'
import type { getVillagersRoute } from '../routes'

export const getVillagersRouteHandler: RouteHandler<typeof getVillagersRoute> = async (c) => {
  throw new Error('Not implemented')
}
