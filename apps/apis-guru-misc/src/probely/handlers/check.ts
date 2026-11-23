import type { RouteHandler } from '@hono/zod-openapi'
import type { postCheckIndexRoute } from '../routes'

export const postCheckIndexRouteHandler: RouteHandler<typeof postCheckIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}
