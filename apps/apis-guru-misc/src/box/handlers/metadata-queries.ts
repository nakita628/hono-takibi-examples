import type { RouteHandler } from '@hono/zod-openapi'
import type { postMetadataQueriesExecuteReadRoute } from '../routes'

export const postMetadataQueriesExecuteReadRouteHandler: RouteHandler<
  typeof postMetadataQueriesExecuteReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}
