import type { RouteHandler } from '@hono/zod-openapi'
import type { getSearchArtifactsRoute, postSearchArtifactsRoute } from '../routes'

export const getSearchArtifactsRouteHandler: RouteHandler<typeof getSearchArtifactsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSearchArtifactsRouteHandler: RouteHandler<
  typeof postSearchArtifactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
