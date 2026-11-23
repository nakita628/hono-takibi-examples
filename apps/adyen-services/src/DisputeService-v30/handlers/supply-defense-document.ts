import type { RouteHandler } from '@hono/zod-openapi'
import type { postSupplyDefenseDocumentRoute } from '../routes'

export const postSupplyDefenseDocumentRouteHandler: RouteHandler<
  typeof postSupplyDefenseDocumentRoute
> = async (c) => {
  throw new Error('Not implemented')
}
