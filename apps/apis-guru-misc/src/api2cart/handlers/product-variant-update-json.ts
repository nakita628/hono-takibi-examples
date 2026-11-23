import type { RouteHandler } from '@hono/zod-openapi'
import type { putProductVariantUpdateJsonRoute } from '../routes'

export const putProductVariantUpdateJsonRouteHandler: RouteHandler<
  typeof putProductVariantUpdateJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
