import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetMeRoute } from '../routes'

export const postGetMeRouteHandler: RouteHandler<typeof postGetMeRoute> = async (c) => {
  throw new Error('Not implemented')
}
