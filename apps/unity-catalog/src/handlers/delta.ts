import type { RouteHandler } from '@hono/zod-openapi'
import type { getDeltaPreviewCommitsRoute, postDeltaPreviewCommitsRoute } from '../routes'

export const getDeltaPreviewCommitsRouteHandler: RouteHandler<
  typeof getDeltaPreviewCommitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDeltaPreviewCommitsRouteHandler: RouteHandler<
  typeof postDeltaPreviewCommitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
