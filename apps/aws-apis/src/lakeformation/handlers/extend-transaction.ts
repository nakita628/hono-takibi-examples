import type { RouteHandler } from '@hono/zod-openapi'
import type { postExtendTransactionRoute } from '../routes'

export const postExtendTransactionRouteHandler: RouteHandler<
  typeof postExtendTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
