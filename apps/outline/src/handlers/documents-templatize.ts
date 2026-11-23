import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsTemplatizeRoute } from '../routes'

export const postDocumentsTemplatizeRouteHandler: RouteHandler<
  typeof postDocumentsTemplatizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
