import type { RouteHandler } from '@hono/zod-openapi'
import type { getPopsIdRoute, getPopsRoute } from '../routes'

export const getPopsRouteHandler: RouteHandler<typeof getPopsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPopsIdRouteHandler: RouteHandler<typeof getPopsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
