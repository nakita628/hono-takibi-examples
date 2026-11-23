import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetSuggestedSpeakersRoute } from '../routes'

export const postGetSuggestedSpeakersRouteHandler: RouteHandler<
  typeof postGetSuggestedSpeakersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
