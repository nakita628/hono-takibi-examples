import type { RouteHandler } from '@hono/zod-openapi'
import type { postRerankRoute } from '../routes'

export const postRerankRouteHandler: RouteHandler<typeof postRerankRoute> = async (c) => {
  throw new Error('Not implemented')
}
