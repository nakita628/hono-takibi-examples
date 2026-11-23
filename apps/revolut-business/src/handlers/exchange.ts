import type { RouteHandler } from '@hono/zod-openapi'
import type { postExchangeRoute } from '../routes'

export const postExchangeRouteHandler: RouteHandler<typeof postExchangeRoute> = async (c) => {
  throw new Error('Not implemented')
}
