import type { RouteHandler } from '@hono/zod-openapi'
import type { postValidateBankAccountIdentificationRoute } from '../routes'

export const postValidateBankAccountIdentificationRouteHandler: RouteHandler<
  typeof postValidateBankAccountIdentificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
