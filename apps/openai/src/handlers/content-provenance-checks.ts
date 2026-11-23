import type { RouteHandler } from '@hono/zod-openapi'
import type { postContentProvenanceChecksRoute } from '../routes'

export const postContentProvenanceChecksRouteHandler: RouteHandler<
  typeof postContentProvenanceChecksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
