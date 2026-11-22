import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdRoute,
  getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasRoute,
} from '../routes'

const app = new OpenAPIHono()

export const replicaV3Handler = app
  .openapi(getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
