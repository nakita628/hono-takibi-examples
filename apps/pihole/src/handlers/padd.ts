import type { RouteHandler } from '@hono/zod-openapi'
import type { getPaddRoute } from '../routes'

export const getPaddRouteHandler: RouteHandler<typeof getPaddRoute> = async (c) => {
  throw new Error('Not implemented')
}
