import type { RouteHandler } from '@hono/zod-openapi'
import type { postFilesDeleteRoute } from '../routes'

export const postFilesDeleteRouteHandler: RouteHandler<typeof postFilesDeleteRoute> = async (c) => {
  throw new Error('Not implemented')
}
