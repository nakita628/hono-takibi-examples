import type { RouteHandler } from '@hono/zod-openapi'
import type { getDndInfoRoute } from '../routes'

export const getDndInfoRouteHandler: RouteHandler<typeof getDndInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
