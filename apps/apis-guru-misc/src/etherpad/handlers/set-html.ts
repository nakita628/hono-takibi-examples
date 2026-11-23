import type { RouteHandler } from '@hono/zod-openapi'
import type { getSetHTMLRoute, postSetHTMLRoute } from '../routes'

export const getSetHTMLRouteHandler: RouteHandler<typeof getSetHTMLRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSetHTMLRouteHandler: RouteHandler<typeof postSetHTMLRoute> = async (c) => {
  throw new Error('Not implemented')
}
