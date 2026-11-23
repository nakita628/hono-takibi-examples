import type { RouteHandler } from '@hono/zod-openapi'
import type { getGenerateSecuredApiKeyRoute } from '../routes'

export const getGenerateSecuredApiKeyRouteHandler: RouteHandler<
  typeof getGenerateSecuredApiKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
