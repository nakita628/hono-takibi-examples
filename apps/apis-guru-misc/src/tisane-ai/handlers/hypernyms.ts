import type { RouteHandler } from '@hono/zod-openapi'
import type { getHypernymsRoute } from '../routes'

export const getHypernymsRouteHandler: RouteHandler<typeof getHypernymsRoute> = async (c) => {
  throw new Error('Not implemented')
}
