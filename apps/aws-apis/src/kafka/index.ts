import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ClustersClusterArnPolicyRoute,
  deleteV1ClustersClusterArnRoute,
  deleteV1ConfigurationsArnRoute,
  deleteV1TagsResourceArnTagKeysRoute,
  deleteV1VpcConnectionArnRoute,
  getApiV2ClustersClusterArnOperationsRoute,
  getApiV2ClustersClusterArnRoute,
  getApiV2ClustersRoute,
  getApiV2OperationsClusterOperationArnRoute,
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
  postApiV2ClustersRoute,
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
} from './routes'
import {
  deleteV1ClustersClusterArnPolicyRouteHandler,
  deleteV1ClustersClusterArnRouteHandler,
  deleteV1ConfigurationsArnRouteHandler,
  deleteV1TagsResourceArnTagKeysRouteHandler,
  deleteV1VpcConnectionArnRouteHandler,
  getApiV2ClustersClusterArnOperationsRouteHandler,
  getApiV2ClustersClusterArnRouteHandler,
  getApiV2ClustersRouteHandler,
  getApiV2OperationsClusterOperationArnRouteHandler,
  getV1ClustersClusterArnBootstrapBrokersRouteHandler,
  getV1ClustersClusterArnClientVpcConnectionsRouteHandler,
  getV1ClustersClusterArnNodesRouteHandler,
  getV1ClustersClusterArnOperationsRouteHandler,
  getV1ClustersClusterArnPolicyRouteHandler,
  getV1ClustersClusterArnRouteHandler,
  getV1ClustersClusterArnScramSecretsRouteHandler,
  getV1ClustersRouteHandler,
  getV1CompatibleKafkaVersionsRouteHandler,
  getV1ConfigurationsArnRevisionsRevisionRouteHandler,
  getV1ConfigurationsArnRevisionsRouteHandler,
  getV1ConfigurationsArnRouteHandler,
  getV1ConfigurationsRouteHandler,
  getV1KafkaVersionsRouteHandler,
  getV1OperationsClusterOperationArnRouteHandler,
  getV1TagsResourceArnRouteHandler,
  getV1VpcConnectionArnRouteHandler,
  getV1VpcConnectionsRouteHandler,
  patchV1ClustersClusterArnScramSecretsRouteHandler,
  patchV1ClustersClusterArnSecurityRouteHandler,
  postApiV2ClustersRouteHandler,
  postV1ClustersClusterArnScramSecretsRouteHandler,
  postV1ClustersRouteHandler,
  postV1ConfigurationsRouteHandler,
  postV1TagsResourceArnRouteHandler,
  postV1VpcConnectionRouteHandler,
  putV1ClustersClusterArnClientVpcConnectionRouteHandler,
  putV1ClustersClusterArnConfigurationRouteHandler,
  putV1ClustersClusterArnConnectivityRouteHandler,
  putV1ClustersClusterArnMonitoringRouteHandler,
  putV1ClustersClusterArnNodesCountRouteHandler,
  putV1ClustersClusterArnNodesStorageRouteHandler,
  putV1ClustersClusterArnNodesTypeRouteHandler,
  putV1ClustersClusterArnPolicyRouteHandler,
  putV1ClustersClusterArnRebootBrokerRouteHandler,
  putV1ClustersClusterArnStorageRouteHandler,
  putV1ClustersClusterArnVersionRouteHandler,
  putV1ConfigurationsArnRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postV1ClustersClusterArnScramSecretsRoute,
    postV1ClustersClusterArnScramSecretsRouteHandler,
  )
  .openapi(
    patchV1ClustersClusterArnScramSecretsRoute,
    patchV1ClustersClusterArnScramSecretsRouteHandler,
  )
  .openapi(
    getV1ClustersClusterArnScramSecretsRoute,
    getV1ClustersClusterArnScramSecretsRouteHandler,
  )
  .openapi(postV1ClustersRoute, postV1ClustersRouteHandler)
  .openapi(getV1ClustersRoute, getV1ClustersRouteHandler)
  .openapi(postApiV2ClustersRoute, postApiV2ClustersRouteHandler)
  .openapi(getApiV2ClustersRoute, getApiV2ClustersRouteHandler)
  .openapi(postV1ConfigurationsRoute, postV1ConfigurationsRouteHandler)
  .openapi(getV1ConfigurationsRoute, getV1ConfigurationsRouteHandler)
  .openapi(postV1VpcConnectionRoute, postV1VpcConnectionRouteHandler)
  .openapi(deleteV1ClustersClusterArnRoute, deleteV1ClustersClusterArnRouteHandler)
  .openapi(getV1ClustersClusterArnRoute, getV1ClustersClusterArnRouteHandler)
  .openapi(deleteV1ClustersClusterArnPolicyRoute, deleteV1ClustersClusterArnPolicyRouteHandler)
  .openapi(getV1ClustersClusterArnPolicyRoute, getV1ClustersClusterArnPolicyRouteHandler)
  .openapi(putV1ClustersClusterArnPolicyRoute, putV1ClustersClusterArnPolicyRouteHandler)
  .openapi(deleteV1ConfigurationsArnRoute, deleteV1ConfigurationsArnRouteHandler)
  .openapi(getV1ConfigurationsArnRoute, getV1ConfigurationsArnRouteHandler)
  .openapi(putV1ConfigurationsArnRoute, putV1ConfigurationsArnRouteHandler)
  .openapi(deleteV1VpcConnectionArnRoute, deleteV1VpcConnectionArnRouteHandler)
  .openapi(getV1VpcConnectionArnRoute, getV1VpcConnectionArnRouteHandler)
  .openapi(getApiV2ClustersClusterArnRoute, getApiV2ClustersClusterArnRouteHandler)
  .openapi(getV1OperationsClusterOperationArnRoute, getV1OperationsClusterOperationArnRouteHandler)
  .openapi(
    getApiV2OperationsClusterOperationArnRoute,
    getApiV2OperationsClusterOperationArnRouteHandler,
  )
  .openapi(
    getV1ConfigurationsArnRevisionsRevisionRoute,
    getV1ConfigurationsArnRevisionsRevisionRouteHandler,
  )
  .openapi(
    getV1ClustersClusterArnBootstrapBrokersRoute,
    getV1ClustersClusterArnBootstrapBrokersRouteHandler,
  )
  .openapi(getV1CompatibleKafkaVersionsRoute, getV1CompatibleKafkaVersionsRouteHandler)
  .openapi(getV1ClustersClusterArnOperationsRoute, getV1ClustersClusterArnOperationsRouteHandler)
  .openapi(
    getApiV2ClustersClusterArnOperationsRoute,
    getApiV2ClustersClusterArnOperationsRouteHandler,
  )
  .openapi(getV1ConfigurationsArnRevisionsRoute, getV1ConfigurationsArnRevisionsRouteHandler)
  .openapi(getV1KafkaVersionsRoute, getV1KafkaVersionsRouteHandler)
  .openapi(getV1ClustersClusterArnNodesRoute, getV1ClustersClusterArnNodesRouteHandler)
  .openapi(getV1TagsResourceArnRoute, getV1TagsResourceArnRouteHandler)
  .openapi(postV1TagsResourceArnRoute, postV1TagsResourceArnRouteHandler)
  .openapi(
    getV1ClustersClusterArnClientVpcConnectionsRoute,
    getV1ClustersClusterArnClientVpcConnectionsRouteHandler,
  )
  .openapi(getV1VpcConnectionsRoute, getV1VpcConnectionsRouteHandler)
  .openapi(
    putV1ClustersClusterArnClientVpcConnectionRoute,
    putV1ClustersClusterArnClientVpcConnectionRouteHandler,
  )
  .openapi(
    putV1ClustersClusterArnRebootBrokerRoute,
    putV1ClustersClusterArnRebootBrokerRouteHandler,
  )
  .openapi(deleteV1TagsResourceArnTagKeysRoute, deleteV1TagsResourceArnTagKeysRouteHandler)
  .openapi(putV1ClustersClusterArnNodesCountRoute, putV1ClustersClusterArnNodesCountRouteHandler)
  .openapi(putV1ClustersClusterArnNodesTypeRoute, putV1ClustersClusterArnNodesTypeRouteHandler)
  .openapi(
    putV1ClustersClusterArnNodesStorageRoute,
    putV1ClustersClusterArnNodesStorageRouteHandler,
  )
  .openapi(
    putV1ClustersClusterArnConnectivityRoute,
    putV1ClustersClusterArnConnectivityRouteHandler,
  )
  .openapi(
    putV1ClustersClusterArnConfigurationRoute,
    putV1ClustersClusterArnConfigurationRouteHandler,
  )
  .openapi(putV1ClustersClusterArnVersionRoute, putV1ClustersClusterArnVersionRouteHandler)
  .openapi(putV1ClustersClusterArnMonitoringRoute, putV1ClustersClusterArnMonitoringRouteHandler)
  .openapi(patchV1ClustersClusterArnSecurityRoute, patchV1ClustersClusterArnSecurityRouteHandler)
  .openapi(putV1ClustersClusterArnStorageRoute, putV1ClustersClusterArnStorageRouteHandler)

export default app
