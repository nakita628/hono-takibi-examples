import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClustersClusterIdAclsRoute,
  deleteClustersClusterIdBrokerConfigsNameRoute,
  deleteClustersClusterIdBrokersBrokerIdConfigsNameRoute,
  deleteClustersClusterIdTopicsTopicNameConfigsNameRoute,
  deleteClustersClusterIdTopicsTopicNameRoute,
  getClustersClusterIdAclsRoute,
  getClustersClusterIdBrokerConfigsNameRoute,
  getClustersClusterIdBrokerConfigsRoute,
  getClustersClusterIdBrokersBrokerIdConfigsNameRoute,
  getClustersClusterIdBrokersBrokerIdConfigsRoute,
  getClustersClusterIdBrokersBrokerIdPartitionReplicasRoute,
  getClustersClusterIdBrokersBrokerIdRoute,
  getClustersClusterIdBrokersDashConfigsRoute,
  getClustersClusterIdBrokersRoute,
  getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsRoute,
  getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionIdRoute,
  getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdRoute,
  getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersRoute,
  getClustersClusterIdConsumerGroupsConsumerGroupIdLagsRoute,
  getClustersClusterIdConsumerGroupsConsumerGroupIdLagsTopicNamePartitionsPartitionIdRoute,
  getClustersClusterIdConsumerGroupsConsumerGroupIdLagSummaryRoute,
  getClustersClusterIdConsumerGroupsConsumerGroupIdRoute,
  getClustersClusterIdConsumerGroupsRoute,
  getClustersClusterIdRoute,
  getClustersClusterIdTopicsDashConfigsRoute,
  getClustersClusterIdTopicsDashPartitionsDashReassignmentRoute,
  getClustersClusterIdTopicsRoute,
  getClustersClusterIdTopicsTopicNameConfigsNameRoute,
  getClustersClusterIdTopicsTopicNameConfigsRoute,
  getClustersClusterIdTopicsTopicNamePartitionsDashReassignmentRoute,
  getClustersClusterIdTopicsTopicNamePartitionsPartitionIdOffsetRoute,
  getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignmentRoute,
  getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdRoute,
  getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasRoute,
  getClustersClusterIdTopicsTopicNamePartitionsPartitionIdRoute,
  getClustersClusterIdTopicsTopicNamePartitionsRoute,
  getClustersClusterIdTopicsTopicNameRoute,
  getClustersRoute,
  patchClustersClusterIdTopicsTopicNameRoute,
  postClustersClusterIdAclsBatchRoute,
  postClustersClusterIdAclsRoute,
  postClustersClusterIdBrokerConfigsAlterRoute,
  postClustersClusterIdBrokersBrokerIdConfigsAlterRoute,
  postClustersClusterIdTopicsRoute,
  postClustersClusterIdTopicsTopicNameConfigsAlterRoute,
  postClustersClusterIdTopicsTopicNameRecordsBatchRoute,
  postClustersClusterIdTopicsTopicNameRecordsRoute,
  putClustersClusterIdBrokerConfigsNameRoute,
  putClustersClusterIdBrokersBrokerIdConfigsNameRoute,
  putClustersClusterIdTopicsTopicNameConfigsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clustersHandler = app
  .openapi(getClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersClusterIdAclsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdAclsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersClusterIdAclsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClustersClusterIdAclsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdBrokerConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersClusterIdBrokerConfigsAlterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdBrokerConfigsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClustersClusterIdBrokerConfigsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClustersClusterIdBrokerConfigsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdBrokersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdBrokersBrokerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdBrokersDashConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdBrokersBrokerIdConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersClusterIdBrokersBrokerIdConfigsAlterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdBrokersBrokerIdConfigsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClustersClusterIdBrokersBrokerIdConfigsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClustersClusterIdBrokersBrokerIdConfigsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdBrokersBrokerIdPartitionReplicasRoute, (c) => {
    throw new Error('Not implemented')
  })
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
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getClustersClusterIdTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersClusterIdTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdTopicsTopicNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchClustersClusterIdTopicsTopicNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClustersClusterIdTopicsTopicNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdTopicsTopicNameConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersClusterIdTopicsTopicNameConfigsAlterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdTopicsTopicNameConfigsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClustersClusterIdTopicsTopicNameConfigsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClustersClusterIdTopicsTopicNameConfigsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdTopicsDashConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersClusterIdTopicsTopicNameRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersClusterIdTopicsTopicNameRecordsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
