import type { RouteHandler } from '@hono/zod-openapi'
import type { postDndEndDndRoute } from '../routes'

export const postDndEndDndRouteHandler: RouteHandler<typeof postDndEndDndRoute> = async (c) => {
  throw new Error('Not implemented')
}
