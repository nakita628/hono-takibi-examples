import type { RouteHandler } from '@hono/zod-openapi'
import type { postImportUrlsRoute } from '../routes'

export const postImportUrlsRouteHandler: RouteHandler<typeof postImportUrlsRoute> = async (c) => {
  throw new Error('Not implemented')
}
