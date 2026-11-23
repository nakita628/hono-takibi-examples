import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollectionToXMLRoute } from '../routes'

export const postCollectionToXMLRouteHandler: RouteHandler<
  typeof postCollectionToXMLRoute
> = async (c) => {
  throw new Error('Not implemented')
}
