import type { RouteHandler } from '@hono/zod-openapi'
import type { getSystemInfoRoute } from '../routes'

export const getSystemInfoRouteHandler: RouteHandler<typeof getSystemInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
