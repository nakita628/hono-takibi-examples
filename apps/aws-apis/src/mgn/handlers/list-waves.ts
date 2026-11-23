import type { RouteHandler } from '@hono/zod-openapi'
import type { postListWavesRoute } from '../routes'

export const postListWavesRouteHandler: RouteHandler<typeof postListWavesRoute> = async (c) => {
  throw new Error('Not implemented')
}
