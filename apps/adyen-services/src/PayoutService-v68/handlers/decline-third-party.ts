import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeclineThirdPartyRoute } from '../routes'

export const postDeclineThirdPartyRouteHandler: RouteHandler<
  typeof postDeclineThirdPartyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
