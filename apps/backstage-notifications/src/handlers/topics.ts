import type { RouteHandler } from '@hono/zod-openapi'
import type { getTopicsRoute } from '../routes'

export const getTopicsRouteHandler: RouteHandler<typeof getTopicsRoute> = async (c) => {
  throw new Error('Not implemented')
}
