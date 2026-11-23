import type { RouteHandler } from '@hono/zod-openapi'
import type { getPublicInterstitialRoute } from '../routes'

export const getPublicInterstitialRouteHandler: RouteHandler<
  typeof getPublicInterstitialRoute
> = async (c) => {
  throw new Error('Not implemented')
}
