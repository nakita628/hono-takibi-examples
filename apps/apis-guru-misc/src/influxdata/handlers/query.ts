import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getQuerySuggestionsNameRoute,
  getQuerySuggestionsRoute,
  postQueryAnalyzeRoute,
  postQueryAstRoute,
  postQueryRoute,
} from '../routes'

export const postQueryRouteHandler: RouteHandler<typeof postQueryRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postQueryAnalyzeRouteHandler: RouteHandler<typeof postQueryAnalyzeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postQueryAstRouteHandler: RouteHandler<typeof postQueryAstRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getQuerySuggestionsRouteHandler: RouteHandler<
  typeof getQuerySuggestionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQuerySuggestionsNameRouteHandler: RouteHandler<
  typeof getQuerySuggestionsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
