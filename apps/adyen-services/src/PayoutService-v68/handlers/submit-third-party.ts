import type { RouteHandler } from '@hono/zod-openapi'
import type { postSubmitThirdPartyRoute } from '../routes'

export const postSubmitThirdPartyRouteHandler: RouteHandler<
  typeof postSubmitThirdPartyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
