import type { RouteHandler } from '@hono/zod-openapi'
import type { postDisplayRoute } from '../routes'

export const postDisplayRouteHandler: RouteHandler<typeof postDisplayRoute> = async (c) => {
  throw new Error('Not implemented')
}
