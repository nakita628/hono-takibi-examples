import type { RouteHandler } from '@hono/zod-openapi'
import type { postPutTemplateActionRoute } from '../routes'

export const postPutTemplateActionRouteHandler: RouteHandler<
  typeof postPutTemplateActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
