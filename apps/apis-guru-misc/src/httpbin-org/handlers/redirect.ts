import type { RouteHandler } from '@hono/zod-openapi'
import type { getRedirectNRoute } from '../routes'

export const getRedirectNRouteHandler: RouteHandler<typeof getRedirectNRoute> = async (c) => {
  throw new Error('Not implemented')
}
