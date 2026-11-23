import type { RouteHandler } from '@hono/zod-openapi'
import type { postFileOperationsRedirectRoute } from '../routes'

export const postFileOperationsRedirectRouteHandler: RouteHandler<
  typeof postFileOperationsRedirectRoute
> = async (c) => {
  throw new Error('Not implemented')
}
