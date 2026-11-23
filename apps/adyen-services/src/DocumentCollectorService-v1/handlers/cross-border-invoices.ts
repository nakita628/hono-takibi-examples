import type { RouteHandler } from '@hono/zod-openapi'
import type { postCrossBorderInvoicesRoute } from '../routes'

export const postCrossBorderInvoicesRouteHandler: RouteHandler<
  typeof postCrossBorderInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
