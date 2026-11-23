import type { RouteHandler } from '@hono/zod-openapi'
import type { getTimestagsRoute } from '../routes'

export const getTimestagsRouteHandler: RouteHandler<typeof getTimestagsRoute> = async (c) => {
  throw new Error('Not implemented')
}
