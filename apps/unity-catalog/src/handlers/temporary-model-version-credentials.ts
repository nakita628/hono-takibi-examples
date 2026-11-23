import type { RouteHandler } from '@hono/zod-openapi'
import type { postTemporaryModelVersionCredentialsRoute } from '../routes'

export const postTemporaryModelVersionCredentialsRouteHandler: RouteHandler<
  typeof postTemporaryModelVersionCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
