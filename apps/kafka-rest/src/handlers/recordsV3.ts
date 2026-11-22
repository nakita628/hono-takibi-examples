import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postClustersClusterIdTopicsTopicNameRecordsBatchRoute,
  postClustersClusterIdTopicsTopicNameRecordsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recordsV3Handler = app
  .openapi(postClustersClusterIdTopicsTopicNameRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersClusterIdTopicsTopicNameRecordsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
