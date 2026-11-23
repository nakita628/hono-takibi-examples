import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetHTMLRoute, postGetHTMLRoute } from '../routes'

export const getGetHTMLRouteHandler: RouteHandler<typeof getGetHTMLRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGetHTMLRouteHandler: RouteHandler<typeof postGetHTMLRoute> = async (c) => {
  throw new Error('Not implemented')
}
