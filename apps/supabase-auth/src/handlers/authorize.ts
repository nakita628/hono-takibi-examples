import type { RouteHandler } from '@hono/zod-openapi'
import type { getAuthorizeRoute } from '../routes'

export const getAuthorizeRouteHandler: RouteHandler<typeof getAuthorizeRoute> = async (c) => {
  throw new Error('Not implemented')
}
