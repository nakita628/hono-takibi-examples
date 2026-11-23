import type { RouteHandler } from '@hono/zod-openapi'
import type { getCartValidateJsonRoute } from '../routes'

export const getCartValidateJsonRouteHandler: RouteHandler<
  typeof getCartValidateJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
