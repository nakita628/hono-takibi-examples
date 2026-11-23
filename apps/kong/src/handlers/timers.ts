import type { RouteHandler } from '@hono/zod-openapi'
import type { getTimersRoute } from '../routes'

export const getTimersRouteHandler: RouteHandler<typeof getTimersRoute> = async (c) => {
  throw new Error('Not implemented')
}
