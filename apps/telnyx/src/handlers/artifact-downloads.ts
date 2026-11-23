import type { RouteHandler } from '@hono/zod-openapi'
import type { getArtifactDownloadsArtifactIdRoute } from '../routes'

export const getArtifactDownloadsArtifactIdRouteHandler: RouteHandler<
  typeof getArtifactDownloadsArtifactIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
