import type { RouteHandler } from '@hono/zod-openapi'
import type { postTemporaryPathCredentialsRoute } from '../routes'

export const postTemporaryPathCredentialsRouteHandler: RouteHandler<
  typeof postTemporaryPathCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
