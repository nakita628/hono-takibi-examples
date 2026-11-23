import type { RouteHandler } from '@hono/zod-openapi'
import type { postTemporaryTableCredentialsRoute } from '../routes'

export const postTemporaryTableCredentialsRouteHandler: RouteHandler<
  typeof postTemporaryTableCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
