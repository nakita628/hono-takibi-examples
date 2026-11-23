import type { RouteHandler } from '@hono/zod-openapi'
import type { getEmbeddingsQueryHubScriptsRoute } from '../routes'

export const getEmbeddingsQueryHubScriptsRouteHandler: RouteHandler<
  typeof getEmbeddingsQueryHubScriptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
