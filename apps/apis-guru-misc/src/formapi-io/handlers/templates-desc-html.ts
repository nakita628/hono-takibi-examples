import type { RouteHandler } from '@hono/zod-openapi'
import type { postTemplatesDescHtmlRoute } from '../routes'

export const postTemplatesDescHtmlRouteHandler: RouteHandler<
  typeof postTemplatesDescHtmlRoute
> = async (c) => {
  throw new Error('Not implemented')
}
