import type { RouteHandler } from '@hono/zod-openapi'
import type { postPutEncryptionConfigRoute } from '../routes'

export const postPutEncryptionConfigRouteHandler: RouteHandler<
  typeof postPutEncryptionConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}
