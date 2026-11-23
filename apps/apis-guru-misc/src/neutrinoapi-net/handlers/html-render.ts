import type { RouteHandler } from '@hono/zod-openapi'
import type { postHtmlRenderRoute } from '../routes'

export const postHtmlRenderRouteHandler: RouteHandler<typeof postHtmlRenderRoute> = async (c) => {
  throw new Error('Not implemented')
}
