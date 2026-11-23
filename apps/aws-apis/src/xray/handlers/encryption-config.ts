import type { RouteHandler } from '@hono/zod-openapi'
import type { postEncryptionConfigRoute } from '../routes'

export const postEncryptionConfigRouteHandler: RouteHandler<
  typeof postEncryptionConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}
