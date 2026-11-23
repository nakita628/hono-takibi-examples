import type { RouteHandler } from '@hono/zod-openapi'
import type { getDelegationsRoute } from '../routes'

export const getDelegationsRouteHandler: RouteHandler<typeof getDelegationsRoute> = async (c) => {
  throw new Error('Not implemented')
}
