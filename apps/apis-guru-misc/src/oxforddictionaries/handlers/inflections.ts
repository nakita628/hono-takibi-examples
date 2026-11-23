import type { RouteHandler } from '@hono/zod-openapi'
import type { getInflectionsSourceLangWordIdFiltersRoute } from '../routes'

export const getInflectionsSourceLangWordIdFiltersRouteHandler: RouteHandler<
  typeof getInflectionsSourceLangWordIdFiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
