import type { RouteHandler } from '@hono/zod-openapi'
import type { postListTemplateActionsRoute } from '../routes'

export const postListTemplateActionsRouteHandler: RouteHandler<
  typeof postListTemplateActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
