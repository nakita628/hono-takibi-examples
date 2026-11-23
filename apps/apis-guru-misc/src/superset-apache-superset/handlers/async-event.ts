import type { RouteHandler } from '@hono/zod-openapi'
import type { getAsyncEventIndexRoute } from '../routes'

export const getAsyncEventIndexRouteHandler: RouteHandler<typeof getAsyncEventIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
