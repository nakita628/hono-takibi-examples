import type { RouteHandler } from '@hono/zod-openapi'
import type { postStoreDetailAndSubmitThirdPartyRoute } from '../routes'

export const postStoreDetailAndSubmitThirdPartyRouteHandler: RouteHandler<
  typeof postStoreDetailAndSubmitThirdPartyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
