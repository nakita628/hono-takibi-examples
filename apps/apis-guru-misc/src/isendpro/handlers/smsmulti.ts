import type { RouteHandler } from '@hono/zod-openapi'
import type { postSmsmultiRoute } from '../routes'

export const postSmsmultiRouteHandler: RouteHandler<typeof postSmsmultiRoute> = async (c) => {
  throw new Error('Not implemented')
}
