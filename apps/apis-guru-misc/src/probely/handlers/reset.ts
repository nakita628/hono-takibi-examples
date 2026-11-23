import type { RouteHandler } from '@hono/zod-openapi'
import type { postResetIndexRoute } from '../routes'

export const postResetIndexRouteHandler: RouteHandler<typeof postResetIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}
