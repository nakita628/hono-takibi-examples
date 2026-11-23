import type { RouteHandler } from '@hono/zod-openapi'
import type { getVerifySecurityCodeRoute } from '../routes'

export const getVerifySecurityCodeRouteHandler: RouteHandler<
  typeof getVerifySecurityCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
