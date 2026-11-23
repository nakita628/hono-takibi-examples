import type { RouteHandler } from '@hono/zod-openapi'
import type { getContentAspectIdCivixDocumentIdRoute, getContentAspectIdRoute } from '../routes'

export const getContentAspectIdRouteHandler: RouteHandler<typeof getContentAspectIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getContentAspectIdCivixDocumentIdRouteHandler: RouteHandler<
  typeof getContentAspectIdCivixDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
