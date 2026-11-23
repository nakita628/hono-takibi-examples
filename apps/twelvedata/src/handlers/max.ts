import type { RouteHandler } from '@hono/zod-openapi'
import type { getMaxRoute } from '../routes'

export const getMaxRouteHandler: RouteHandler<typeof getMaxRoute> = async (c) => {
  throw new Error('Not implemented')
}
