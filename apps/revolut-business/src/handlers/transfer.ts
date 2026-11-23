import type { RouteHandler } from '@hono/zod-openapi'
import type { postTransferRoute } from '../routes'

export const postTransferRouteHandler: RouteHandler<typeof postTransferRoute> = async (c) => {
  throw new Error('Not implemented')
}
