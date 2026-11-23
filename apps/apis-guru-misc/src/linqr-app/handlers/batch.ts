import type { RouteHandler } from '@hono/zod-openapi'
import type { postBatchQrcodeRoute } from '../routes'

export const postBatchQrcodeRouteHandler: RouteHandler<typeof postBatchQrcodeRoute> = async (c) => {
  throw new Error('Not implemented')
}
