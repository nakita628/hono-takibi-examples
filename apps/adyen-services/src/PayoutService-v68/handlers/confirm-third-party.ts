import type { RouteHandler } from '@hono/zod-openapi'
import type { postConfirmThirdPartyRoute } from '../routes'

export const postConfirmThirdPartyRouteHandler: RouteHandler<
  typeof postConfirmThirdPartyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
