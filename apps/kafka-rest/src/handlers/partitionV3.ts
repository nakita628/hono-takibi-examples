import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getClustersClusterIdTopicsDashPartitionsDashReassignmentRoute,
  getClustersClusterIdTopicsTopicNamePartitionsDashReassignmentRoute,
  getClustersClusterIdTopicsTopicNamePartitionsPartitionIdOffsetRoute,
  getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignmentRoute,
  getClustersClusterIdTopicsTopicNamePartitionsPartitionIdRoute,
  getClustersClusterIdTopicsTopicNamePartitionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const partitionV3Handler = app
  .openapi(getClustersClusterIdTopicsTopicNamePartitionsPartitionIdOffsetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdTopicsTopicNamePartitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdTopicsTopicNamePartitionsPartitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdTopicsDashPartitionsDashReassignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdTopicsTopicNamePartitionsDashReassignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
