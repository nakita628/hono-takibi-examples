import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsSearchTitlesRoute } from '../routes'

export const postDocumentsSearchTitlesRouteHandler: RouteHandler<
  typeof postDocumentsSearchTitlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
