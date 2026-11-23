import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsEmptyTrashRoute } from '../routes'

export const postDocumentsEmptyTrashRouteHandler: RouteHandler<
  typeof postDocumentsEmptyTrashRoute
> = async (c) => {
  throw new Error('Not implemented')
}
