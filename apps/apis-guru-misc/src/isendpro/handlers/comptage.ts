import type { RouteHandler } from '@hono/zod-openapi'
import type { postComptageRoute } from '../routes'

export const postComptageRouteHandler: RouteHandler<typeof postComptageRoute> = async (c) => {
  throw new Error('Not implemented')
}
