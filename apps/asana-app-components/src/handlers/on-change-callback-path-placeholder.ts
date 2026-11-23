import type { RouteHandler } from '@hono/zod-openapi'
import type { postOnChangeCallbackPathPlaceholderRoute } from '../routes'

export const postOnChangeCallbackPathPlaceholderRouteHandler: RouteHandler<
  typeof postOnChangeCallbackPathPlaceholderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
