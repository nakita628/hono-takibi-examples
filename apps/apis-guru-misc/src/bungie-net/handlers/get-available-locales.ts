import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetAvailableLocalesIndexRoute } from '../routes'

export const getGetAvailableLocalesIndexRouteHandler: RouteHandler<
  typeof getGetAvailableLocalesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
