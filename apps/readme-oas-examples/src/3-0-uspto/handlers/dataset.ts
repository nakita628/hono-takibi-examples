import type { RouteHandler } from '@hono/zod-openapi'
import type { getDatasetVersionFieldsRoute, postDatasetVersionRecordsRoute } from '../routes'

export const getDatasetVersionFieldsRouteHandler: RouteHandler<
  typeof getDatasetVersionFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDatasetVersionRecordsRouteHandler: RouteHandler<
  typeof postDatasetVersionRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
