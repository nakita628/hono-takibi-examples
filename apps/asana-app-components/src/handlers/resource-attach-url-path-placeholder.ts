import type { RouteHandler } from '@hono/zod-openapi'
import type { postResourceAttachUrlPathPlaceholderRoute } from '../routes'

export const postResourceAttachUrlPathPlaceholderRouteHandler: RouteHandler<
  typeof postResourceAttachUrlPathPlaceholderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
