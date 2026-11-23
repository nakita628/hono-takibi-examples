import type { RouteHandler } from '@hono/zod-openapi'
import type { getSuffixesRoute, getSuffixesSuffixRoute } from '../routes'

export const getSuffixesRouteHandler: RouteHandler<typeof getSuffixesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSuffixesSuffixRouteHandler: RouteHandler<typeof getSuffixesSuffixRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
