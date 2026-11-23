import type { RouteHandler } from '@hono/zod-openapi'
import type { postMeRoute } from '../routes'

export const postMeRouteHandler: RouteHandler<typeof postMeRoute> = async (c) => {
  throw new Error('Not implemented')
}
