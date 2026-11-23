import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteSuggesterRoute, postActionDeleteSuggesterRoute } from '../routes'

export const getActionDeleteSuggesterRouteHandler: RouteHandler<
  typeof getActionDeleteSuggesterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteSuggesterRouteHandler: RouteHandler<
  typeof postActionDeleteSuggesterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
