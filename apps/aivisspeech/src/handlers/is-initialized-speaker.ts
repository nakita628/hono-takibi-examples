import type { RouteHandler } from '@hono/zod-openapi'
import type { getIsInitializedSpeakerRoute } from '../routes'

export const getIsInitializedSpeakerRouteHandler: RouteHandler<
  typeof getIsInitializedSpeakerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
