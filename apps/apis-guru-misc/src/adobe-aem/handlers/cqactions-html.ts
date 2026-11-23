import type { RouteHandler } from '@hono/zod-openapi'
import type { postCqactionsHtmlRoute } from '../routes'

export const postCqactionsHtmlRouteHandler: RouteHandler<typeof postCqactionsHtmlRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
