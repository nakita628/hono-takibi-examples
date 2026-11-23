import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDefineSuggesterRoute, postActionDefineSuggesterRoute } from '../routes'

export const getActionDefineSuggesterRouteHandler: RouteHandler<
  typeof getActionDefineSuggesterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDefineSuggesterRouteHandler: RouteHandler<
  typeof postActionDefineSuggesterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
