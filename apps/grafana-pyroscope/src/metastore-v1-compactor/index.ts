import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMetastoreV1CompactionServiceDeleteDatasetsRoute,
  postMetastoreV1CompactionServiceListCompactionJobsRoute,
  postMetastoreV1CompactionServicePollCompactionJobsRoute,
} from './routes'
import {
  postMetastoreV1CompactionServiceDeleteDatasetsRouteHandler,
  postMetastoreV1CompactionServiceListCompactionJobsRouteHandler,
  postMetastoreV1CompactionServicePollCompactionJobsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postMetastoreV1CompactionServiceDeleteDatasetsRoute,
    postMetastoreV1CompactionServiceDeleteDatasetsRouteHandler,
  )
  .openapi(
    postMetastoreV1CompactionServiceListCompactionJobsRoute,
    postMetastoreV1CompactionServiceListCompactionJobsRouteHandler,
  )
  .openapi(
    postMetastoreV1CompactionServicePollCompactionJobsRoute,
    postMetastoreV1CompactionServicePollCompactionJobsRouteHandler,
  )

export default app
