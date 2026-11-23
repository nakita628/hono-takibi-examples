import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetBlockRoute } from '../routes'

export const postGetBlockRouteHandler: RouteHandler<typeof postGetBlockRoute> = async (c) => {
  throw new Error('Not implemented')
}
