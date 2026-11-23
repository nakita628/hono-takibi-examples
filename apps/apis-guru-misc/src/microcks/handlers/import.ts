import type { RouteHandler } from '@hono/zod-openapi'
import type { postImportRoute } from '../routes'

export const postImportRouteHandler: RouteHandler<typeof postImportRoute> = async (c) => {
  throw new Error('Not implemented')
}
