import type { RouteHandler } from '@hono/zod-openapi'
import type { getAddonsIndexRoute } from '../routes'

export const getAddonsIndexRouteHandler: RouteHandler<typeof getAddonsIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}
