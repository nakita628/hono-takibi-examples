import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsRoute,
  getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionIdRoute,
  getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdRoute,
  getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersRoute,
  getClustersClusterIdConsumerGroupsConsumerGroupIdLagsRoute,
  getClustersClusterIdConsumerGroupsConsumerGroupIdLagsTopicNamePartitionsPartitionIdRoute,
  getClustersClusterIdConsumerGroupsConsumerGroupIdLagSummaryRoute,
  getClustersClusterIdConsumerGroupsConsumerGroupIdRoute,
  getClustersClusterIdConsumerGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const consumerGroupV3Handler = app
  .openapi(getClustersClusterIdConsumerGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdConsumerGroupsConsumerGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdConsumerGroupsConsumerGroupIdLagSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdConsumerGroupsConsumerGroupIdLagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getClustersClusterIdConsumerGroupsConsumerGroupIdLagsTopicNamePartitionsPartitionIdRoute,
    (c) => {},
  )
  .openapi(getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsRoute,
    (c) => {},
  )
  .openapi(
    getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionIdRoute,
    (c) => {},
  )
