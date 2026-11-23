import type { RouteHandler } from '@hono/zod-openapi'
import type { getTemplatesEmailInfoRoute, getTemplatesEmailListRoute } from '../routes'

export const getTemplatesEmailInfoRouteHandler: RouteHandler<
  typeof getTemplatesEmailInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTemplatesEmailListRouteHandler: RouteHandler<
  typeof getTemplatesEmailListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
