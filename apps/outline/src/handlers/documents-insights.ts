import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsInsightsRoute } from '../routes'

export const postDocumentsInsightsRouteHandler: RouteHandler<
  typeof postDocumentsInsightsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
