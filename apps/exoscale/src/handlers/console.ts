import type { RouteHandler } from '@hono/zod-openapi'
import type { getConsoleIdRoute } from '../routes'

export const getConsoleIdRouteHandler: RouteHandler<typeof getConsoleIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
