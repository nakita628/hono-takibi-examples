import type { RouteHandler } from '@hono/zod-openapi'
import type { postActionOnChangeCallbackPathPlaceholderRoute } from '../routes'

export const postActionOnChangeCallbackPathPlaceholderRouteHandler: RouteHandler<
  typeof postActionOnChangeCallbackPathPlaceholderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
