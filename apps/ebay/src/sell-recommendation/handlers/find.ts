import type { RouteHandler } from '@hono/zod-openapi'
import type { postFindRoute } from '../routes'

export const postFindRouteHandler: RouteHandler<typeof postFindRoute> = async (c) => {
  throw new Error('Not implemented')
}
