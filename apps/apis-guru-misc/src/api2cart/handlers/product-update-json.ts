import type { RouteHandler } from '@hono/zod-openapi'
import type { putProductUpdateJsonRoute } from '../routes'

export const putProductUpdateJsonRouteHandler: RouteHandler<
  typeof putProductUpdateJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
