import type { RouteHandler } from '@hono/zod-openapi'
import type { postOnSubmitCallbackPathPlaceholderRoute } from '../routes'

export const postOnSubmitCallbackPathPlaceholderRouteHandler: RouteHandler<
  typeof postOnSubmitCallbackPathPlaceholderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
