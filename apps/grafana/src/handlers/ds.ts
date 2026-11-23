import type { RouteHandler } from '@hono/zod-openapi'
import type { postDsQueryRoute } from '../routes'

export const postDsQueryRouteHandler: RouteHandler<typeof postDsQueryRoute> = async (c) => {
  throw new Error('Not implemented')
}
