import type { RouteHandler } from '@hono/zod-openapi'
import type { getStddevRoute } from '../routes'

export const getStddevRouteHandler: RouteHandler<typeof getStddevRoute> = async (c) => {
  throw new Error('Not implemented')
}
