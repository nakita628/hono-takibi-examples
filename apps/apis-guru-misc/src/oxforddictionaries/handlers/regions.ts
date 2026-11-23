import type { RouteHandler } from '@hono/zod-openapi'
import type { getRegionsSourceLanguageRoute } from '../routes'

export const getRegionsSourceLanguageRouteHandler: RouteHandler<
  typeof getRegionsSourceLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
