import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  deleteV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdRoute,
  deleteV1beta1ProjectsProjectIdZonesZoneClustersClusterIdRoute,
  getV1beta1NameCheckAutopilotCompatibilityRoute,
  getV1beta1NameRoute,
  getV1beta1NameServerConfigRoute,
  getV1beta1ParentAggregatedUsableSubnetworksRoute,
  getV1beta1ParentClustersRoute,
  getV1beta1ParentJwksRoute,
  getV1beta1ParentLocationsRoute,
  getV1beta1ParentNodePoolsRoute,
  getV1beta1ParentOperationsRoute,
  getV1beta1ParentWellKnownOpenidConfigurationRoute,
  getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdRoute,
  getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsRoute,
  getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdRoute,
  getV1beta1ProjectsProjectIdZonesZoneClustersRoute,
  getV1beta1ProjectsProjectIdZonesZoneOperationsOperationIdRoute,
  getV1beta1ProjectsProjectIdZonesZoneOperationsRoute,
  getV1beta1ProjectsProjectIdZonesZoneServerconfigRoute,
  postV1beta1NameCancelRoute,
  postV1beta1NameCompleteIpRotationRoute,
  postV1beta1NameCompleteUpgradeRoute,
  postV1beta1NameRollbackRoute,
  postV1beta1NameSetAddonsRoute,
  postV1beta1NameSetAutoscalingRoute,
  postV1beta1NameSetLegacyAbacRoute,
  postV1beta1NameSetLocationsRoute,
  postV1beta1NameSetLoggingRoute,
  postV1beta1NameSetMaintenancePolicyRoute,
  postV1beta1NameSetManagementRoute,
  postV1beta1NameSetMasterAuthRoute,
  postV1beta1NameSetMonitoringRoute,
  postV1beta1NameSetNetworkPolicyRoute,
  postV1beta1NameSetResourceLabelsRoute,
  postV1beta1NameSetSizeRoute,
  postV1beta1NameStartIpRotationRoute,
  postV1beta1NameUpdateMasterRoute,
  postV1beta1ParentClustersRoute,
  postV1beta1ParentNodePoolsRoute,
  postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdAddonsRoute,
  postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdCompleteIpRotationRoute,
  postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLegacyAbacRoute,
  postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLocationsRoute,
  postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLoggingRoute,
  postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMasterRoute,
  postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMonitoringRoute,
  postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdAutoscalingRoute,
  postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdRollbackRoute,
  postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdSetManagementRoute,
  postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdSetSizeRoute,
  postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdUpdateRoute,
  postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsRoute,
  postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdResourceLabelsRoute,
  postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetMaintenancePolicyRoute,
  postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetMasterAuthRoute,
  postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetNetworkPolicyRoute,
  postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdStartIpRotationRoute,
  postV1beta1ProjectsProjectIdZonesZoneClustersRoute,
  postV1beta1ProjectsProjectIdZonesZoneOperationsOperationIdCancelRoute,
  putV1beta1NameRoute,
  putV1beta1ProjectsProjectIdZonesZoneClustersClusterIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getV1beta1ProjectsProjectIdZonesZoneClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ProjectsProjectIdZonesZoneClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1beta1ProjectsProjectIdZonesZoneClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1beta1ProjectsProjectIdZonesZoneClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLegacyAbacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLoggingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMasterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMonitoringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdAutoscalingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdSetManagementRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdSetSizeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdUpdateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdRollbackRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdResourceLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdCompleteIpRotationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetMaintenancePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetMasterAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetNetworkPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdStartIpRotationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ProjectsProjectIdZonesZoneOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ProjectsProjectIdZonesZoneOperationsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ProjectsProjectIdZonesZoneOperationsOperationIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ProjectsProjectIdZonesZoneServerconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameServerConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameCheckAutopilotCompatibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameCompleteIpRotationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameCompleteUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameRollbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameSetAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameSetAutoscalingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameSetLegacyAbacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameSetLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameSetLoggingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameSetMaintenancePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameSetManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameSetMasterAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameSetMonitoringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameSetNetworkPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameSetResourceLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameSetSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameStartIpRotationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameUpdateMasterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentWellKnownOpenidConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentAggregatedUsableSubnetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentJwksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentNodePoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentNodePoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
