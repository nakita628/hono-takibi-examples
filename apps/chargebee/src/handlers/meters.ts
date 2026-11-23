import type { RouteHandler } from '@hono/zod-openapi'
import type { getMetersRoute } from '../routes'

export const getMetersRouteHandler: RouteHandler<typeof getMetersRoute> = async (c) => {
  throw new Error('Not implemented')
}
