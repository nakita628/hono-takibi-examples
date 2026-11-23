import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postDatasourcesS3Route,
  postDatasourcesS3StatisticsRoute,
  postDatasourcesSearchResourcesRoute,
} from '../routes'

export const postDatasourcesS3RouteHandler: RouteHandler<typeof postDatasourcesS3Route> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postDatasourcesS3StatisticsRouteHandler: RouteHandler<
  typeof postDatasourcesS3StatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDatasourcesSearchResourcesRouteHandler: RouteHandler<
  typeof postDatasourcesSearchResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
