import type { RouteHandler } from '@hono/zod-openapi'
import type { postRunActionUrlPathPlaceholderRoute } from '../routes'

export const postRunActionUrlPathPlaceholderRouteHandler: RouteHandler<
  typeof postRunActionUrlPathPlaceholderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
