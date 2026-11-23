import type { RouteHandler } from '@hono/zod-openapi'
import type { getAtomicRoute } from '../routes'

export const getAtomicRouteHandler: RouteHandler<typeof getAtomicRoute> = async (c) => {
  throw new Error('Not implemented')
}
