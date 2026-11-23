import type { RouteHandler } from '@hono/zod-openapi'
import type { postStartImportRoute } from '../routes'

export const postStartImportRouteHandler: RouteHandler<typeof postStartImportRoute> = async (c) => {
  throw new Error('Not implemented')
}
