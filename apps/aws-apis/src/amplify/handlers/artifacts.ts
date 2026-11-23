import type { RouteHandler } from '@hono/zod-openapi'
import type { getArtifactsArtifactIdRoute } from '../routes'

export const getArtifactsArtifactIdRouteHandler: RouteHandler<
  typeof getArtifactsArtifactIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
