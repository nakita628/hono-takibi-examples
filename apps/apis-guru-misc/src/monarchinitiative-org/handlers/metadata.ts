import type { RouteHandler } from '@hono/zod-openapi'
import type { getMetadataDatasetsRoute } from '../routes'

export const getMetadataDatasetsRouteHandler: RouteHandler<
  typeof getMetadataDatasetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
