import type { RouteHandler } from '@hono/zod-openapi'
import type { putProductImageUpdateJsonRoute } from '../routes'

export const putProductImageUpdateJsonRouteHandler: RouteHandler<
  typeof putProductImageUpdateJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
