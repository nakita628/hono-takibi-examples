import type { RouteHandler } from '@hono/zod-openapi'
import type { getPostcodesPostcodeRoute } from '../routes'

export const getPostcodesPostcodeRouteHandler: RouteHandler<
  typeof getPostcodesPostcodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
