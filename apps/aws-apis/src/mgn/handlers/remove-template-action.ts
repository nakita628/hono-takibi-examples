import type { RouteHandler } from '@hono/zod-openapi'
import type { postRemoveTemplateActionRoute } from '../routes'

export const postRemoveTemplateActionRouteHandler: RouteHandler<
  typeof postRemoveTemplateActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
