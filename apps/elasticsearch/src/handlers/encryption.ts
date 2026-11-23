import type { RouteHandler } from '@hono/zod-openapi'
import type { postEncryptionResetRoute } from '../routes'

export const postEncryptionResetRouteHandler: RouteHandler<
  typeof postEncryptionResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
