import type { RouteHandler } from '@hono/zod-openapi'
import type { postFilesRoute } from '../routes'

export const postFilesRouteHandler: RouteHandler<typeof postFilesRoute> = async (c) => {
  throw new Error('Not implemented')
}
