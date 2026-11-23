import type { RouteHandler } from '@hono/zod-openapi'
import type { postEnrichmentAnnotatedGenesRoute, postEnrichmentDataRoute } from '../routes'

export const postEnrichmentAnnotatedGenesRouteHandler: RouteHandler<
  typeof postEnrichmentAnnotatedGenesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEnrichmentDataRouteHandler: RouteHandler<typeof postEnrichmentDataRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
