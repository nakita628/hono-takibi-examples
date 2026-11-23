import type { RouteHandler } from '@hono/zod-openapi'
import type { postTxRoute } from '../routes'

export const postTxRouteHandler: RouteHandler<typeof postTxRoute> = async (c) => {
  throw new Error('Not implemented')
}
