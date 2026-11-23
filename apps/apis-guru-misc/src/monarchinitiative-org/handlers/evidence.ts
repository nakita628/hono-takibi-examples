import type { RouteHandler } from '@hono/zod-openapi'
import type { getEvidenceGraphIdRoute, getEvidenceGraphIdTableRoute } from '../routes'

export const getEvidenceGraphIdRouteHandler: RouteHandler<typeof getEvidenceGraphIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getEvidenceGraphIdTableRouteHandler: RouteHandler<
  typeof getEvidenceGraphIdTableRoute
> = async (c) => {
  throw new Error('Not implemented')
}
