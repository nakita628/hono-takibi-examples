import type { RouteHandler } from '@hono/zod-openapi'
import type { getIdNameRoute } from '../routes'

export const getIdNameRouteHandler: RouteHandler<typeof getIdNameRoute> = async (c) => {
  throw new Error('Not implemented')
}
