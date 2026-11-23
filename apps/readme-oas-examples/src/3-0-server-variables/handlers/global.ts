import type { RouteHandler } from '@hono/zod-openapi'
import type { postGlobalRoute } from '../routes'

export const postGlobalRouteHandler: RouteHandler<typeof postGlobalRoute> = async (c) => {
  throw new Error('Not implemented')
}
