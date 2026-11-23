import type { RouteHandler } from '@hono/zod-openapi'
import type { getGlossaryPageNameMediaTypeExtensionRoute } from '../routes'

export const getGlossaryPageNameMediaTypeExtensionRouteHandler: RouteHandler<
  typeof getGlossaryPageNameMediaTypeExtensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
