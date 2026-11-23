import type { RouteHandler } from '@hono/zod-openapi'
import type { postActionOnSubmitCallbackPathPlaceholderRoute } from '../routes'

export const postActionOnSubmitCallbackPathPlaceholderRouteHandler: RouteHandler<
  typeof postActionOnSubmitCallbackPathPlaceholderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
