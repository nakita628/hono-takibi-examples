import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetWorldTemplateBodyRoute } from '../routes'

export const postGetWorldTemplateBodyRouteHandler: RouteHandler<
  typeof postGetWorldTemplateBodyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
