import type { RouteHandler } from '@hono/zod-openapi'
import type { postCustomFilesRoute } from '../routes'

export const postCustomFilesRouteHandler: RouteHandler<typeof postCustomFilesRoute> = async (c) => {
  throw new Error('Not implemented')
}
