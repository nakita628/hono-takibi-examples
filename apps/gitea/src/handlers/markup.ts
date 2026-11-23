import type { RouteHandler } from '@hono/zod-openapi'
import type { postMarkupRoute } from '../routes'

export const postMarkupRouteHandler: RouteHandler<typeof postMarkupRoute> = async (c) => {
  throw new Error('Not implemented')
}
