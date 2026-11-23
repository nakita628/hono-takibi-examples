import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ClustersClusterArnPolicyRoute,
  deleteV1ClustersClusterArnRoute,
  deleteV1ConfigurationsArnRoute,
  deleteV1TagsResourceArnTagKeysRoute,
  deleteV1VpcConnectionArnRoute,
  getV1ClustersClusterArnBootstrapBrokersRoute,
  getV1ClustersClusterArnClientVpcConnectionsRoute,
  getV1ClustersClusterArnNodesRoute,
  getV1ClustersClusterArnOperationsRoute,
  getV1ClustersClusterArnPolicyRoute,
  getV1ClustersClusterArnRoute,
  getV1ClustersClusterArnScramSecretsRoute,
  getV1ClustersRoute,
  getV1CompatibleKafkaVersionsRoute,
  getV1ConfigurationsArnRevisionsRevisionRoute,
  getV1ConfigurationsArnRevisionsRoute,
  getV1ConfigurationsArnRoute,
  getV1ConfigurationsRoute,
  getV1KafkaVersionsRoute,
  getV1OperationsClusterOperationArnRoute,
  getV1TagsResourceArnRoute,
  getV1VpcConnectionArnRoute,
  getV1VpcConnectionsRoute,
  patchV1ClustersClusterArnScramSecretsRoute,
  patchV1ClustersClusterArnSecurityRoute,
  postV1ClustersClusterArnScramSecretsRoute,
  postV1ClustersRoute,
  postV1ConfigurationsRoute,
  postV1TagsResourceArnRoute,
  postV1VpcConnectionRoute,
  putV1ClustersClusterArnClientVpcConnectionRoute,
  putV1ClustersClusterArnConfigurationRoute,
  putV1ClustersClusterArnConnectivityRoute,
  putV1ClustersClusterArnMonitoringRoute,
  putV1ClustersClusterArnNodesCountRoute,
  putV1ClustersClusterArnNodesStorageRoute,
  putV1ClustersClusterArnNodesTypeRoute,
  putV1ClustersClusterArnPolicyRoute,
  putV1ClustersClusterArnRebootBrokerRoute,
  putV1ClustersClusterArnStorageRoute,
  putV1ClustersClusterArnVersionRoute,
  putV1ConfigurationsArnRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1ClustersClusterArnScramSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ClustersClusterArnScramSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ClustersClusterArnScramSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VpcConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ClustersClusterArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ClustersClusterArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ClustersClusterArnPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ClustersClusterArnPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ClustersClusterArnPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConfigurationsArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigurationsArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConfigurationsArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1VpcConnectionArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VpcConnectionArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OperationsClusterOperationArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigurationsArnRevisionsRevisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ClustersClusterArnBootstrapBrokersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CompatibleKafkaVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ClustersClusterArnOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigurationsArnRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1KafkaVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ClustersClusterArnNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TagsResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TagsResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ClustersClusterArnClientVpcConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VpcConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ClustersClusterArnClientVpcConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ClustersClusterArnRebootBrokerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TagsResourceArnTagKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ClustersClusterArnNodesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ClustersClusterArnNodesTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ClustersClusterArnNodesStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ClustersClusterArnConnectivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ClustersClusterArnConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ClustersClusterArnVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ClustersClusterArnMonitoringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ClustersClusterArnSecurityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ClustersClusterArnStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
