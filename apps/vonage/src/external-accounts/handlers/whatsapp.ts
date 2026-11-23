import type { RouteHandler } from '@hono/zod-openapi'
import type { getWhatsappExternalIdRoute } from '../routes'

export const getWhatsappExternalIdRouteHandler: RouteHandler<
  typeof getWhatsappExternalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
