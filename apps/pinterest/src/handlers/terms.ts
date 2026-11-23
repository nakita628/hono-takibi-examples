import type { RouteHandler } from '@hono/zod-openapi'
import type { getTermsRelatedRoute, getTermsSuggestedRoute } from '../routes'

export const getTermsRelatedRouteHandler: RouteHandler<typeof getTermsRelatedRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTermsSuggestedRouteHandler: RouteHandler<typeof getTermsSuggestedRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
