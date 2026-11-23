import type { RouteHandler } from '@hono/zod-openapi'
import type { postTxSubmitRoute } from '../routes'

export const postTxSubmitRouteHandler: RouteHandler<typeof postTxSubmitRoute> = async (c) => {
  throw new Error('Not implemented')
}
