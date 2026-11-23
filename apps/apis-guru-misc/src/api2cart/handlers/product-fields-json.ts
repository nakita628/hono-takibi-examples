import type { RouteHandler } from '@hono/zod-openapi'
import type { getProductFieldsJsonRoute } from '../routes'

export const getProductFieldsJsonRouteHandler: RouteHandler<
  typeof getProductFieldsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
