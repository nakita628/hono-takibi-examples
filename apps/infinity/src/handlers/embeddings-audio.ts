import type { RouteHandler } from '@hono/zod-openapi'
import type { postEmbeddingsAudioRoute } from '../routes'

export const postEmbeddingsAudioRouteHandler: RouteHandler<
  typeof postEmbeddingsAudioRoute
> = async (c) => {
  throw new Error('Not implemented')
}
