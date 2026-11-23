import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsSearchRoute } from '../routes'

export const postDocumentsSearchRouteHandler: RouteHandler<
  typeof postDocumentsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
