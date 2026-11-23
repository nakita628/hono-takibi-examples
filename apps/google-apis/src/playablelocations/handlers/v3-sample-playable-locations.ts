import type { RouteHandler } from '@hono/zod-openapi'
import type { postV3SamplePlayableLocationsRoute } from '../routes'

export const postV3SamplePlayableLocationsRouteHandler: RouteHandler<
  typeof postV3SamplePlayableLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
