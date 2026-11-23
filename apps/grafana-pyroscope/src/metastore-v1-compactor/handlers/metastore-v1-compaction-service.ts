import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMetastoreV1CompactionServiceDeleteDatasetsRoute,
  postMetastoreV1CompactionServiceListCompactionJobsRoute,
  postMetastoreV1CompactionServicePollCompactionJobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metastoreV1CompactionServiceHandler = app
  .openapi(postMetastoreV1CompactionServiceDeleteDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetastoreV1CompactionServiceListCompactionJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetastoreV1CompactionServicePollCompactionJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
