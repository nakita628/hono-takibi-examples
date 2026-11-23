import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postMetastoreV1CompactionServiceDeleteDatasetsRoute,
  postMetastoreV1CompactionServiceListCompactionJobsRoute,
  postMetastoreV1CompactionServicePollCompactionJobsRoute,
} from '../routes'

export const postMetastoreV1CompactionServiceDeleteDatasetsRouteHandler: RouteHandler<
  typeof postMetastoreV1CompactionServiceDeleteDatasetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMetastoreV1CompactionServiceListCompactionJobsRouteHandler: RouteHandler<
  typeof postMetastoreV1CompactionServiceListCompactionJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMetastoreV1CompactionServicePollCompactionJobsRouteHandler: RouteHandler<
  typeof postMetastoreV1CompactionServicePollCompactionJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
