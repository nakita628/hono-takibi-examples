import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCertificatesIdRoute,
  deleteFirewallsIdRoute,
  deleteFloatingIpsIdRoute,
  deleteImagesIdRoute,
  deleteLoadBalancersIdRoute,
  deleteNetworksIdRoute,
  deletePlacementGroupsIdRoute,
  deletePrimaryIpsIdRoute,
  deleteServersIdRoute,
  deleteSshKeysIdRoute,
  deleteVolumesIdRoute,
  deleteZonesIdOrNameRoute,
  deleteZonesIdOrNameRrsetsRrNameRrTypeRoute,
  getActionsIdRoute,
  getActionsRoute,
  getCertificatesActionsIdRoute,
  getCertificatesActionsRoute,
  getCertificatesIdActionsActionIdRoute,
  getCertificatesIdActionsRoute,
  getCertificatesIdRoute,
  getCertificatesRoute,
  getDatacentersIdRoute,
  getDatacentersRoute,
  getFirewallsActionsIdRoute,
  getFirewallsActionsRoute,
  getFirewallsIdActionsActionIdRoute,
  getFirewallsIdActionsRoute,
  getFirewallsIdRoute,
  getFirewallsRoute,
  getFloatingIpsActionsIdRoute,
  getFloatingIpsActionsRoute,
  getFloatingIpsIdActionsActionIdRoute,
  getFloatingIpsIdActionsRoute,
  getFloatingIpsIdRoute,
  getFloatingIpsRoute,
  getImagesActionsIdRoute,
  getImagesActionsRoute,
  getImagesIdActionsActionIdRoute,
  getImagesIdActionsRoute,
  getImagesIdRoute,
  getImagesRoute,
  getIsosIdRoute,
  getIsosRoute,
  getLoadBalancersActionsIdRoute,
  getLoadBalancersActionsRoute,
  getLoadBalancersIdActionsActionIdRoute,
  getLoadBalancersIdActionsRoute,
  getLoadBalancersIdMetricsRoute,
  getLoadBalancersIdRoute,
  getLoadBalancersRoute,
  getLoadBalancerTypesIdRoute,
  getLoadBalancerTypesRoute,
  getLocationsIdRoute,
  getLocationsRoute,
  getNetworksActionsIdRoute,
  getNetworksActionsRoute,
  getNetworksIdActionsActionIdRoute,
  getNetworksIdActionsRoute,
  getNetworksIdMembersRoute,
  getNetworksIdRoute,
  getNetworksRoute,
  getPlacementGroupsIdRoute,
  getPlacementGroupsRoute,
  getPricingRoute,
  getPrimaryIpsActionsIdRoute,
  getPrimaryIpsActionsRoute,
  getPrimaryIpsIdActionsActionIdRoute,
  getPrimaryIpsIdActionsRoute,
  getPrimaryIpsIdRoute,
  getPrimaryIpsRoute,
  getServersActionsIdRoute,
  getServersActionsRoute,
  getServersIdActionsActionIdRoute,
  getServersIdActionsRoute,
  getServersIdMetricsRoute,
  getServersIdRoute,
  getServersRoute,
  getServerTypesIdRoute,
  getServerTypesRoute,
  getSshKeysIdRoute,
  getSshKeysRoute,
  getVolumesActionsIdRoute,
  getVolumesActionsRoute,
  getVolumesIdActionsActionIdRoute,
  getVolumesIdActionsRoute,
  getVolumesIdRoute,
  getVolumesRoute,
  getZonesActionsIdRoute,
  getZonesActionsRoute,
  getZonesIdOrNameActionsActionIdRoute,
  getZonesIdOrNameActionsRoute,
  getZonesIdOrNameRoute,
  getZonesIdOrNameRrsetsRoute,
  getZonesIdOrNameRrsetsRrNameRrTypeRoute,
  getZonesIdOrNameZonefileRoute,
  getZonesRoute,
  postCertificatesIdActionsRetryRoute,
  postCertificatesRoute,
  postFirewallsIdActionsApplyToResourcesRoute,
  postFirewallsIdActionsRemoveFromResourcesRoute,
  postFirewallsIdActionsSetRulesRoute,
  postFirewallsRoute,
  postFloatingIpsIdActionsAssignRoute,
  postFloatingIpsIdActionsChangeDnsPtrRoute,
  postFloatingIpsIdActionsChangeProtectionRoute,
  postFloatingIpsIdActionsUnassignRoute,
  postFloatingIpsRoute,
  postImagesIdActionsChangeProtectionRoute,
  postLoadBalancersIdActionsAddServiceRoute,
  postLoadBalancersIdActionsAddTargetRoute,
  postLoadBalancersIdActionsAttachToNetworkRoute,
  postLoadBalancersIdActionsChangeAlgorithmRoute,
  postLoadBalancersIdActionsChangeDnsPtrRoute,
  postLoadBalancersIdActionsChangeProtectionRoute,
  postLoadBalancersIdActionsChangeTypeRoute,
  postLoadBalancersIdActionsDeleteServiceRoute,
  postLoadBalancersIdActionsDetachFromNetworkRoute,
  postLoadBalancersIdActionsDisablePublicInterfaceRoute,
  postLoadBalancersIdActionsEnablePublicInterfaceRoute,
  postLoadBalancersIdActionsRemoveTargetRoute,
  postLoadBalancersIdActionsUpdateServiceRoute,
  postLoadBalancersRoute,
  postNetworksIdActionsAddRouteRoute,
  postNetworksIdActionsAddSubnetRoute,
  postNetworksIdActionsChangeIpRangeRoute,
  postNetworksIdActionsChangeProtectionRoute,
  postNetworksIdActionsDeleteRouteRoute,
  postNetworksIdActionsDeleteSubnetRoute,
  postNetworksRoute,
  postPlacementGroupsRoute,
  postPrimaryIpsIdActionsAssignRoute,
  postPrimaryIpsIdActionsChangeDnsPtrRoute,
  postPrimaryIpsIdActionsChangeProtectionRoute,
  postPrimaryIpsIdActionsUnassignRoute,
  postPrimaryIpsRoute,
  postServersIdActionsAddToPlacementGroupRoute,
  postServersIdActionsAttachIsoRoute,
  postServersIdActionsAttachToNetworkRoute,
  postServersIdActionsChangeAliasIpsRoute,
  postServersIdActionsChangeDnsPtrRoute,
  postServersIdActionsChangeProtectionRoute,
  postServersIdActionsChangeTypeRoute,
  postServersIdActionsCreateImageRoute,
  postServersIdActionsDetachFromNetworkRoute,
  postServersIdActionsDetachIsoRoute,
  postServersIdActionsDisableBackupRoute,
  postServersIdActionsDisableRescueRoute,
  postServersIdActionsEnableBackupRoute,
  postServersIdActionsEnableRescueRoute,
  postServersIdActionsPoweroffRoute,
  postServersIdActionsPoweronRoute,
  postServersIdActionsRebootRoute,
  postServersIdActionsRebuildRoute,
  postServersIdActionsRemoveFromPlacementGroupRoute,
  postServersIdActionsRequestConsoleRoute,
  postServersIdActionsResetPasswordRoute,
  postServersIdActionsResetRoute,
  postServersIdActionsShutdownRoute,
  postServersRoute,
  postSshKeysRoute,
  postVolumesIdActionsAttachRoute,
  postVolumesIdActionsChangeProtectionRoute,
  postVolumesIdActionsDetachRoute,
  postVolumesIdActionsResizeRoute,
  postVolumesRoute,
  postZonesIdOrNameActionsChangePrimaryNameserversRoute,
  postZonesIdOrNameActionsChangeProtectionRoute,
  postZonesIdOrNameActionsChangeTtlRoute,
  postZonesIdOrNameActionsImportZonefileRoute,
  postZonesIdOrNameRrsetsRoute,
  postZonesIdOrNameRrsetsRrNameRrTypeActionsAddRecordsRoute,
  postZonesIdOrNameRrsetsRrNameRrTypeActionsChangeProtectionRoute,
  postZonesIdOrNameRrsetsRrNameRrTypeActionsChangeTtlRoute,
  postZonesIdOrNameRrsetsRrNameRrTypeActionsRemoveRecordsRoute,
  postZonesIdOrNameRrsetsRrNameRrTypeActionsSetRecordsRoute,
  postZonesIdOrNameRrsetsRrNameRrTypeActionsUpdateRecordsRoute,
  postZonesRoute,
  putCertificatesIdRoute,
  putFirewallsIdRoute,
  putFloatingIpsIdRoute,
  putImagesIdRoute,
  putLoadBalancersIdRoute,
  putNetworksIdRoute,
  putPlacementGroupsIdRoute,
  putPrimaryIpsIdRoute,
  putServersIdRoute,
  putSshKeysIdRoute,
  putVolumesIdRoute,
  putZonesIdOrNameRoute,
  putZonesIdOrNameRrsetsRrNameRrTypeRoute,
} from './routes'
import {
  deleteCertificatesIdRouteHandler,
  deleteFirewallsIdRouteHandler,
  deleteFloatingIpsIdRouteHandler,
  deleteImagesIdRouteHandler,
  deleteLoadBalancersIdRouteHandler,
  deleteNetworksIdRouteHandler,
  deletePlacementGroupsIdRouteHandler,
  deletePrimaryIpsIdRouteHandler,
  deleteServersIdRouteHandler,
  deleteSshKeysIdRouteHandler,
  deleteVolumesIdRouteHandler,
  deleteZonesIdOrNameRouteHandler,
  deleteZonesIdOrNameRrsetsRrNameRrTypeRouteHandler,
  getActionsIdRouteHandler,
  getActionsRouteHandler,
  getCertificatesActionsIdRouteHandler,
  getCertificatesActionsRouteHandler,
  getCertificatesIdActionsActionIdRouteHandler,
  getCertificatesIdActionsRouteHandler,
  getCertificatesIdRouteHandler,
  getCertificatesRouteHandler,
  getDatacentersIdRouteHandler,
  getDatacentersRouteHandler,
  getFirewallsActionsIdRouteHandler,
  getFirewallsActionsRouteHandler,
  getFirewallsIdActionsActionIdRouteHandler,
  getFirewallsIdActionsRouteHandler,
  getFirewallsIdRouteHandler,
  getFirewallsRouteHandler,
  getFloatingIpsActionsIdRouteHandler,
  getFloatingIpsActionsRouteHandler,
  getFloatingIpsIdActionsActionIdRouteHandler,
  getFloatingIpsIdActionsRouteHandler,
  getFloatingIpsIdRouteHandler,
  getFloatingIpsRouteHandler,
  getImagesActionsIdRouteHandler,
  getImagesActionsRouteHandler,
  getImagesIdActionsActionIdRouteHandler,
  getImagesIdActionsRouteHandler,
  getImagesIdRouteHandler,
  getImagesRouteHandler,
  getIsosIdRouteHandler,
  getIsosRouteHandler,
  getLoadBalancersActionsIdRouteHandler,
  getLoadBalancersActionsRouteHandler,
  getLoadBalancersIdActionsActionIdRouteHandler,
  getLoadBalancersIdActionsRouteHandler,
  getLoadBalancersIdMetricsRouteHandler,
  getLoadBalancersIdRouteHandler,
  getLoadBalancersRouteHandler,
  getLoadBalancerTypesIdRouteHandler,
  getLoadBalancerTypesRouteHandler,
  getLocationsIdRouteHandler,
  getLocationsRouteHandler,
  getNetworksActionsIdRouteHandler,
  getNetworksActionsRouteHandler,
  getNetworksIdActionsActionIdRouteHandler,
  getNetworksIdActionsRouteHandler,
  getNetworksIdMembersRouteHandler,
  getNetworksIdRouteHandler,
  getNetworksRouteHandler,
  getPlacementGroupsIdRouteHandler,
  getPlacementGroupsRouteHandler,
  getPricingRouteHandler,
  getPrimaryIpsActionsIdRouteHandler,
  getPrimaryIpsActionsRouteHandler,
  getPrimaryIpsIdActionsActionIdRouteHandler,
  getPrimaryIpsIdActionsRouteHandler,
  getPrimaryIpsIdRouteHandler,
  getPrimaryIpsRouteHandler,
  getServersActionsIdRouteHandler,
  getServersActionsRouteHandler,
  getServersIdActionsActionIdRouteHandler,
  getServersIdActionsRouteHandler,
  getServersIdMetricsRouteHandler,
  getServersIdRouteHandler,
  getServersRouteHandler,
  getServerTypesIdRouteHandler,
  getServerTypesRouteHandler,
  getSshKeysIdRouteHandler,
  getSshKeysRouteHandler,
  getVolumesActionsIdRouteHandler,
  getVolumesActionsRouteHandler,
  getVolumesIdActionsActionIdRouteHandler,
  getVolumesIdActionsRouteHandler,
  getVolumesIdRouteHandler,
  getVolumesRouteHandler,
  getZonesActionsIdRouteHandler,
  getZonesActionsRouteHandler,
  getZonesIdOrNameActionsActionIdRouteHandler,
  getZonesIdOrNameActionsRouteHandler,
  getZonesIdOrNameRouteHandler,
  getZonesIdOrNameRrsetsRouteHandler,
  getZonesIdOrNameRrsetsRrNameRrTypeRouteHandler,
  getZonesIdOrNameZonefileRouteHandler,
  getZonesRouteHandler,
  postCertificatesIdActionsRetryRouteHandler,
  postCertificatesRouteHandler,
  postFirewallsIdActionsApplyToResourcesRouteHandler,
  postFirewallsIdActionsRemoveFromResourcesRouteHandler,
  postFirewallsIdActionsSetRulesRouteHandler,
  postFirewallsRouteHandler,
  postFloatingIpsIdActionsAssignRouteHandler,
  postFloatingIpsIdActionsChangeDnsPtrRouteHandler,
  postFloatingIpsIdActionsChangeProtectionRouteHandler,
  postFloatingIpsIdActionsUnassignRouteHandler,
  postFloatingIpsRouteHandler,
  postImagesIdActionsChangeProtectionRouteHandler,
  postLoadBalancersIdActionsAddServiceRouteHandler,
  postLoadBalancersIdActionsAddTargetRouteHandler,
  postLoadBalancersIdActionsAttachToNetworkRouteHandler,
  postLoadBalancersIdActionsChangeAlgorithmRouteHandler,
  postLoadBalancersIdActionsChangeDnsPtrRouteHandler,
  postLoadBalancersIdActionsChangeProtectionRouteHandler,
  postLoadBalancersIdActionsChangeTypeRouteHandler,
  postLoadBalancersIdActionsDeleteServiceRouteHandler,
  postLoadBalancersIdActionsDetachFromNetworkRouteHandler,
  postLoadBalancersIdActionsDisablePublicInterfaceRouteHandler,
  postLoadBalancersIdActionsEnablePublicInterfaceRouteHandler,
  postLoadBalancersIdActionsRemoveTargetRouteHandler,
  postLoadBalancersIdActionsUpdateServiceRouteHandler,
  postLoadBalancersRouteHandler,
  postNetworksIdActionsAddRouteRouteHandler,
  postNetworksIdActionsAddSubnetRouteHandler,
  postNetworksIdActionsChangeIpRangeRouteHandler,
  postNetworksIdActionsChangeProtectionRouteHandler,
  postNetworksIdActionsDeleteRouteRouteHandler,
  postNetworksIdActionsDeleteSubnetRouteHandler,
  postNetworksRouteHandler,
  postPlacementGroupsRouteHandler,
  postPrimaryIpsIdActionsAssignRouteHandler,
  postPrimaryIpsIdActionsChangeDnsPtrRouteHandler,
  postPrimaryIpsIdActionsChangeProtectionRouteHandler,
  postPrimaryIpsIdActionsUnassignRouteHandler,
  postPrimaryIpsRouteHandler,
  postServersIdActionsAddToPlacementGroupRouteHandler,
  postServersIdActionsAttachIsoRouteHandler,
  postServersIdActionsAttachToNetworkRouteHandler,
  postServersIdActionsChangeAliasIpsRouteHandler,
  postServersIdActionsChangeDnsPtrRouteHandler,
  postServersIdActionsChangeProtectionRouteHandler,
  postServersIdActionsChangeTypeRouteHandler,
  postServersIdActionsCreateImageRouteHandler,
  postServersIdActionsDetachFromNetworkRouteHandler,
  postServersIdActionsDetachIsoRouteHandler,
  postServersIdActionsDisableBackupRouteHandler,
  postServersIdActionsDisableRescueRouteHandler,
  postServersIdActionsEnableBackupRouteHandler,
  postServersIdActionsEnableRescueRouteHandler,
  postServersIdActionsPoweroffRouteHandler,
  postServersIdActionsPoweronRouteHandler,
  postServersIdActionsRebootRouteHandler,
  postServersIdActionsRebuildRouteHandler,
  postServersIdActionsRemoveFromPlacementGroupRouteHandler,
  postServersIdActionsRequestConsoleRouteHandler,
  postServersIdActionsResetPasswordRouteHandler,
  postServersIdActionsResetRouteHandler,
  postServersIdActionsShutdownRouteHandler,
  postServersRouteHandler,
  postSshKeysRouteHandler,
  postVolumesIdActionsAttachRouteHandler,
  postVolumesIdActionsChangeProtectionRouteHandler,
  postVolumesIdActionsDetachRouteHandler,
  postVolumesIdActionsResizeRouteHandler,
  postVolumesRouteHandler,
  postZonesIdOrNameActionsChangePrimaryNameserversRouteHandler,
  postZonesIdOrNameActionsChangeProtectionRouteHandler,
  postZonesIdOrNameActionsChangeTtlRouteHandler,
  postZonesIdOrNameActionsImportZonefileRouteHandler,
  postZonesIdOrNameRrsetsRouteHandler,
  postZonesIdOrNameRrsetsRrNameRrTypeActionsAddRecordsRouteHandler,
  postZonesIdOrNameRrsetsRrNameRrTypeActionsChangeProtectionRouteHandler,
  postZonesIdOrNameRrsetsRrNameRrTypeActionsChangeTtlRouteHandler,
  postZonesIdOrNameRrsetsRrNameRrTypeActionsRemoveRecordsRouteHandler,
  postZonesIdOrNameRrsetsRrNameRrTypeActionsSetRecordsRouteHandler,
  postZonesIdOrNameRrsetsRrNameRrTypeActionsUpdateRecordsRouteHandler,
  postZonesRouteHandler,
  putCertificatesIdRouteHandler,
  putFirewallsIdRouteHandler,
  putFloatingIpsIdRouteHandler,
  putImagesIdRouteHandler,
  putLoadBalancersIdRouteHandler,
  putNetworksIdRouteHandler,
  putPlacementGroupsIdRouteHandler,
  putPrimaryIpsIdRouteHandler,
  putServersIdRouteHandler,
  putSshKeysIdRouteHandler,
  putVolumesIdRouteHandler,
  putZonesIdOrNameRouteHandler,
  putZonesIdOrNameRrsetsRrNameRrTypeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getActionsRoute, getActionsRouteHandler)
  .openapi(getActionsIdRoute, getActionsIdRouteHandler)
  .openapi(getCertificatesRoute, getCertificatesRouteHandler)
  .openapi(postCertificatesRoute, postCertificatesRouteHandler)
  .openapi(getCertificatesActionsRoute, getCertificatesActionsRouteHandler)
  .openapi(getCertificatesActionsIdRoute, getCertificatesActionsIdRouteHandler)
  .openapi(getCertificatesIdRoute, getCertificatesIdRouteHandler)
  .openapi(putCertificatesIdRoute, putCertificatesIdRouteHandler)
  .openapi(deleteCertificatesIdRoute, deleteCertificatesIdRouteHandler)
  .openapi(getCertificatesIdActionsRoute, getCertificatesIdActionsRouteHandler)
  .openapi(postCertificatesIdActionsRetryRoute, postCertificatesIdActionsRetryRouteHandler)
  .openapi(getCertificatesIdActionsActionIdRoute, getCertificatesIdActionsActionIdRouteHandler)
  .openapi(getDatacentersRoute, getDatacentersRouteHandler)
  .openapi(getDatacentersIdRoute, getDatacentersIdRouteHandler)
  .openapi(getFirewallsRoute, getFirewallsRouteHandler)
  .openapi(postFirewallsRoute, postFirewallsRouteHandler)
  .openapi(getFirewallsActionsRoute, getFirewallsActionsRouteHandler)
  .openapi(getFirewallsActionsIdRoute, getFirewallsActionsIdRouteHandler)
  .openapi(getFirewallsIdRoute, getFirewallsIdRouteHandler)
  .openapi(putFirewallsIdRoute, putFirewallsIdRouteHandler)
  .openapi(deleteFirewallsIdRoute, deleteFirewallsIdRouteHandler)
  .openapi(getFirewallsIdActionsRoute, getFirewallsIdActionsRouteHandler)
  .openapi(
    postFirewallsIdActionsApplyToResourcesRoute,
    postFirewallsIdActionsApplyToResourcesRouteHandler,
  )
  .openapi(
    postFirewallsIdActionsRemoveFromResourcesRoute,
    postFirewallsIdActionsRemoveFromResourcesRouteHandler,
  )
  .openapi(postFirewallsIdActionsSetRulesRoute, postFirewallsIdActionsSetRulesRouteHandler)
  .openapi(getFirewallsIdActionsActionIdRoute, getFirewallsIdActionsActionIdRouteHandler)
  .openapi(getFloatingIpsRoute, getFloatingIpsRouteHandler)
  .openapi(postFloatingIpsRoute, postFloatingIpsRouteHandler)
  .openapi(getFloatingIpsActionsRoute, getFloatingIpsActionsRouteHandler)
  .openapi(getFloatingIpsActionsIdRoute, getFloatingIpsActionsIdRouteHandler)
  .openapi(getFloatingIpsIdRoute, getFloatingIpsIdRouteHandler)
  .openapi(putFloatingIpsIdRoute, putFloatingIpsIdRouteHandler)
  .openapi(deleteFloatingIpsIdRoute, deleteFloatingIpsIdRouteHandler)
  .openapi(getFloatingIpsIdActionsRoute, getFloatingIpsIdActionsRouteHandler)
  .openapi(postFloatingIpsIdActionsAssignRoute, postFloatingIpsIdActionsAssignRouteHandler)
  .openapi(
    postFloatingIpsIdActionsChangeDnsPtrRoute,
    postFloatingIpsIdActionsChangeDnsPtrRouteHandler,
  )
  .openapi(
    postFloatingIpsIdActionsChangeProtectionRoute,
    postFloatingIpsIdActionsChangeProtectionRouteHandler,
  )
  .openapi(postFloatingIpsIdActionsUnassignRoute, postFloatingIpsIdActionsUnassignRouteHandler)
  .openapi(getFloatingIpsIdActionsActionIdRoute, getFloatingIpsIdActionsActionIdRouteHandler)
  .openapi(getImagesRoute, getImagesRouteHandler)
  .openapi(getImagesActionsRoute, getImagesActionsRouteHandler)
  .openapi(getImagesActionsIdRoute, getImagesActionsIdRouteHandler)
  .openapi(getImagesIdRoute, getImagesIdRouteHandler)
  .openapi(putImagesIdRoute, putImagesIdRouteHandler)
  .openapi(deleteImagesIdRoute, deleteImagesIdRouteHandler)
  .openapi(getImagesIdActionsRoute, getImagesIdActionsRouteHandler)
  .openapi(
    postImagesIdActionsChangeProtectionRoute,
    postImagesIdActionsChangeProtectionRouteHandler,
  )
  .openapi(getImagesIdActionsActionIdRoute, getImagesIdActionsActionIdRouteHandler)
  .openapi(getIsosRoute, getIsosRouteHandler)
  .openapi(getIsosIdRoute, getIsosIdRouteHandler)
  .openapi(getLoadBalancerTypesRoute, getLoadBalancerTypesRouteHandler)
  .openapi(getLoadBalancerTypesIdRoute, getLoadBalancerTypesIdRouteHandler)
  .openapi(getLoadBalancersRoute, getLoadBalancersRouteHandler)
  .openapi(postLoadBalancersRoute, postLoadBalancersRouteHandler)
  .openapi(getLoadBalancersActionsRoute, getLoadBalancersActionsRouteHandler)
  .openapi(getLoadBalancersActionsIdRoute, getLoadBalancersActionsIdRouteHandler)
  .openapi(getLoadBalancersIdRoute, getLoadBalancersIdRouteHandler)
  .openapi(putLoadBalancersIdRoute, putLoadBalancersIdRouteHandler)
  .openapi(deleteLoadBalancersIdRoute, deleteLoadBalancersIdRouteHandler)
  .openapi(getLoadBalancersIdActionsRoute, getLoadBalancersIdActionsRouteHandler)
  .openapi(
    postLoadBalancersIdActionsAddServiceRoute,
    postLoadBalancersIdActionsAddServiceRouteHandler,
  )
  .openapi(
    postLoadBalancersIdActionsAddTargetRoute,
    postLoadBalancersIdActionsAddTargetRouteHandler,
  )
  .openapi(
    postLoadBalancersIdActionsAttachToNetworkRoute,
    postLoadBalancersIdActionsAttachToNetworkRouteHandler,
  )
  .openapi(
    postLoadBalancersIdActionsChangeAlgorithmRoute,
    postLoadBalancersIdActionsChangeAlgorithmRouteHandler,
  )
  .openapi(
    postLoadBalancersIdActionsChangeDnsPtrRoute,
    postLoadBalancersIdActionsChangeDnsPtrRouteHandler,
  )
  .openapi(
    postLoadBalancersIdActionsChangeProtectionRoute,
    postLoadBalancersIdActionsChangeProtectionRouteHandler,
  )
  .openapi(
    postLoadBalancersIdActionsChangeTypeRoute,
    postLoadBalancersIdActionsChangeTypeRouteHandler,
  )
  .openapi(
    postLoadBalancersIdActionsDeleteServiceRoute,
    postLoadBalancersIdActionsDeleteServiceRouteHandler,
  )
  .openapi(
    postLoadBalancersIdActionsDetachFromNetworkRoute,
    postLoadBalancersIdActionsDetachFromNetworkRouteHandler,
  )
  .openapi(
    postLoadBalancersIdActionsDisablePublicInterfaceRoute,
    postLoadBalancersIdActionsDisablePublicInterfaceRouteHandler,
  )
  .openapi(
    postLoadBalancersIdActionsEnablePublicInterfaceRoute,
    postLoadBalancersIdActionsEnablePublicInterfaceRouteHandler,
  )
  .openapi(
    postLoadBalancersIdActionsRemoveTargetRoute,
    postLoadBalancersIdActionsRemoveTargetRouteHandler,
  )
  .openapi(
    postLoadBalancersIdActionsUpdateServiceRoute,
    postLoadBalancersIdActionsUpdateServiceRouteHandler,
  )
  .openapi(getLoadBalancersIdActionsActionIdRoute, getLoadBalancersIdActionsActionIdRouteHandler)
  .openapi(getLoadBalancersIdMetricsRoute, getLoadBalancersIdMetricsRouteHandler)
  .openapi(getLocationsRoute, getLocationsRouteHandler)
  .openapi(getLocationsIdRoute, getLocationsIdRouteHandler)
  .openapi(getNetworksRoute, getNetworksRouteHandler)
  .openapi(postNetworksRoute, postNetworksRouteHandler)
  .openapi(getNetworksActionsRoute, getNetworksActionsRouteHandler)
  .openapi(getNetworksActionsIdRoute, getNetworksActionsIdRouteHandler)
  .openapi(getNetworksIdRoute, getNetworksIdRouteHandler)
  .openapi(putNetworksIdRoute, putNetworksIdRouteHandler)
  .openapi(deleteNetworksIdRoute, deleteNetworksIdRouteHandler)
  .openapi(getNetworksIdActionsRoute, getNetworksIdActionsRouteHandler)
  .openapi(postNetworksIdActionsAddRouteRoute, postNetworksIdActionsAddRouteRouteHandler)
  .openapi(postNetworksIdActionsAddSubnetRoute, postNetworksIdActionsAddSubnetRouteHandler)
  .openapi(postNetworksIdActionsChangeIpRangeRoute, postNetworksIdActionsChangeIpRangeRouteHandler)
  .openapi(
    postNetworksIdActionsChangeProtectionRoute,
    postNetworksIdActionsChangeProtectionRouteHandler,
  )
  .openapi(postNetworksIdActionsDeleteRouteRoute, postNetworksIdActionsDeleteRouteRouteHandler)
  .openapi(postNetworksIdActionsDeleteSubnetRoute, postNetworksIdActionsDeleteSubnetRouteHandler)
  .openapi(getNetworksIdActionsActionIdRoute, getNetworksIdActionsActionIdRouteHandler)
  .openapi(getNetworksIdMembersRoute, getNetworksIdMembersRouteHandler)
  .openapi(getPlacementGroupsRoute, getPlacementGroupsRouteHandler)
  .openapi(postPlacementGroupsRoute, postPlacementGroupsRouteHandler)
  .openapi(getPlacementGroupsIdRoute, getPlacementGroupsIdRouteHandler)
  .openapi(putPlacementGroupsIdRoute, putPlacementGroupsIdRouteHandler)
  .openapi(deletePlacementGroupsIdRoute, deletePlacementGroupsIdRouteHandler)
  .openapi(getPricingRoute, getPricingRouteHandler)
  .openapi(getPrimaryIpsRoute, getPrimaryIpsRouteHandler)
  .openapi(postPrimaryIpsRoute, postPrimaryIpsRouteHandler)
  .openapi(getPrimaryIpsActionsRoute, getPrimaryIpsActionsRouteHandler)
  .openapi(getPrimaryIpsActionsIdRoute, getPrimaryIpsActionsIdRouteHandler)
  .openapi(getPrimaryIpsIdActionsRoute, getPrimaryIpsIdActionsRouteHandler)
  .openapi(getPrimaryIpsIdActionsActionIdRoute, getPrimaryIpsIdActionsActionIdRouteHandler)
  .openapi(getPrimaryIpsIdRoute, getPrimaryIpsIdRouteHandler)
  .openapi(putPrimaryIpsIdRoute, putPrimaryIpsIdRouteHandler)
  .openapi(deletePrimaryIpsIdRoute, deletePrimaryIpsIdRouteHandler)
  .openapi(postPrimaryIpsIdActionsAssignRoute, postPrimaryIpsIdActionsAssignRouteHandler)
  .openapi(
    postPrimaryIpsIdActionsChangeDnsPtrRoute,
    postPrimaryIpsIdActionsChangeDnsPtrRouteHandler,
  )
  .openapi(
    postPrimaryIpsIdActionsChangeProtectionRoute,
    postPrimaryIpsIdActionsChangeProtectionRouteHandler,
  )
  .openapi(postPrimaryIpsIdActionsUnassignRoute, postPrimaryIpsIdActionsUnassignRouteHandler)
  .openapi(getServerTypesRoute, getServerTypesRouteHandler)
  .openapi(getServerTypesIdRoute, getServerTypesIdRouteHandler)
  .openapi(getServersRoute, getServersRouteHandler)
  .openapi(postServersRoute, postServersRouteHandler)
  .openapi(getServersActionsRoute, getServersActionsRouteHandler)
  .openapi(getServersActionsIdRoute, getServersActionsIdRouteHandler)
  .openapi(getServersIdRoute, getServersIdRouteHandler)
  .openapi(putServersIdRoute, putServersIdRouteHandler)
  .openapi(deleteServersIdRoute, deleteServersIdRouteHandler)
  .openapi(getServersIdActionsRoute, getServersIdActionsRouteHandler)
  .openapi(
    postServersIdActionsAddToPlacementGroupRoute,
    postServersIdActionsAddToPlacementGroupRouteHandler,
  )
  .openapi(postServersIdActionsAttachIsoRoute, postServersIdActionsAttachIsoRouteHandler)
  .openapi(
    postServersIdActionsAttachToNetworkRoute,
    postServersIdActionsAttachToNetworkRouteHandler,
  )
  .openapi(postServersIdActionsChangeAliasIpsRoute, postServersIdActionsChangeAliasIpsRouteHandler)
  .openapi(postServersIdActionsChangeDnsPtrRoute, postServersIdActionsChangeDnsPtrRouteHandler)
  .openapi(
    postServersIdActionsChangeProtectionRoute,
    postServersIdActionsChangeProtectionRouteHandler,
  )
  .openapi(postServersIdActionsChangeTypeRoute, postServersIdActionsChangeTypeRouteHandler)
  .openapi(postServersIdActionsCreateImageRoute, postServersIdActionsCreateImageRouteHandler)
  .openapi(
    postServersIdActionsDetachFromNetworkRoute,
    postServersIdActionsDetachFromNetworkRouteHandler,
  )
  .openapi(postServersIdActionsDetachIsoRoute, postServersIdActionsDetachIsoRouteHandler)
  .openapi(postServersIdActionsDisableBackupRoute, postServersIdActionsDisableBackupRouteHandler)
  .openapi(postServersIdActionsDisableRescueRoute, postServersIdActionsDisableRescueRouteHandler)
  .openapi(postServersIdActionsEnableBackupRoute, postServersIdActionsEnableBackupRouteHandler)
  .openapi(postServersIdActionsEnableRescueRoute, postServersIdActionsEnableRescueRouteHandler)
  .openapi(postServersIdActionsPoweroffRoute, postServersIdActionsPoweroffRouteHandler)
  .openapi(postServersIdActionsPoweronRoute, postServersIdActionsPoweronRouteHandler)
  .openapi(postServersIdActionsRebootRoute, postServersIdActionsRebootRouteHandler)
  .openapi(postServersIdActionsRebuildRoute, postServersIdActionsRebuildRouteHandler)
  .openapi(
    postServersIdActionsRemoveFromPlacementGroupRoute,
    postServersIdActionsRemoveFromPlacementGroupRouteHandler,
  )
  .openapi(postServersIdActionsRequestConsoleRoute, postServersIdActionsRequestConsoleRouteHandler)
  .openapi(postServersIdActionsResetRoute, postServersIdActionsResetRouteHandler)
  .openapi(postServersIdActionsResetPasswordRoute, postServersIdActionsResetPasswordRouteHandler)
  .openapi(postServersIdActionsShutdownRoute, postServersIdActionsShutdownRouteHandler)
  .openapi(getServersIdActionsActionIdRoute, getServersIdActionsActionIdRouteHandler)
  .openapi(getServersIdMetricsRoute, getServersIdMetricsRouteHandler)
  .openapi(getSshKeysRoute, getSshKeysRouteHandler)
  .openapi(postSshKeysRoute, postSshKeysRouteHandler)
  .openapi(getSshKeysIdRoute, getSshKeysIdRouteHandler)
  .openapi(putSshKeysIdRoute, putSshKeysIdRouteHandler)
  .openapi(deleteSshKeysIdRoute, deleteSshKeysIdRouteHandler)
  .openapi(getVolumesRoute, getVolumesRouteHandler)
  .openapi(postVolumesRoute, postVolumesRouteHandler)
  .openapi(getVolumesActionsRoute, getVolumesActionsRouteHandler)
  .openapi(getVolumesActionsIdRoute, getVolumesActionsIdRouteHandler)
  .openapi(getVolumesIdRoute, getVolumesIdRouteHandler)
  .openapi(putVolumesIdRoute, putVolumesIdRouteHandler)
  .openapi(deleteVolumesIdRoute, deleteVolumesIdRouteHandler)
  .openapi(getVolumesIdActionsRoute, getVolumesIdActionsRouteHandler)
  .openapi(postVolumesIdActionsAttachRoute, postVolumesIdActionsAttachRouteHandler)
  .openapi(
    postVolumesIdActionsChangeProtectionRoute,
    postVolumesIdActionsChangeProtectionRouteHandler,
  )
  .openapi(postVolumesIdActionsDetachRoute, postVolumesIdActionsDetachRouteHandler)
  .openapi(postVolumesIdActionsResizeRoute, postVolumesIdActionsResizeRouteHandler)
  .openapi(getVolumesIdActionsActionIdRoute, getVolumesIdActionsActionIdRouteHandler)
  .openapi(getZonesRoute, getZonesRouteHandler)
  .openapi(postZonesRoute, postZonesRouteHandler)
  .openapi(getZonesIdOrNameRoute, getZonesIdOrNameRouteHandler)
  .openapi(putZonesIdOrNameRoute, putZonesIdOrNameRouteHandler)
  .openapi(deleteZonesIdOrNameRoute, deleteZonesIdOrNameRouteHandler)
  .openapi(getZonesIdOrNameZonefileRoute, getZonesIdOrNameZonefileRouteHandler)
  .openapi(getZonesActionsRoute, getZonesActionsRouteHandler)
  .openapi(getZonesActionsIdRoute, getZonesActionsIdRouteHandler)
  .openapi(getZonesIdOrNameActionsRoute, getZonesIdOrNameActionsRouteHandler)
  .openapi(getZonesIdOrNameActionsActionIdRoute, getZonesIdOrNameActionsActionIdRouteHandler)
  .openapi(
    postZonesIdOrNameActionsChangePrimaryNameserversRoute,
    postZonesIdOrNameActionsChangePrimaryNameserversRouteHandler,
  )
  .openapi(
    postZonesIdOrNameActionsChangeProtectionRoute,
    postZonesIdOrNameActionsChangeProtectionRouteHandler,
  )
  .openapi(postZonesIdOrNameActionsChangeTtlRoute, postZonesIdOrNameActionsChangeTtlRouteHandler)
  .openapi(
    postZonesIdOrNameActionsImportZonefileRoute,
    postZonesIdOrNameActionsImportZonefileRouteHandler,
  )
  .openapi(getZonesIdOrNameRrsetsRoute, getZonesIdOrNameRrsetsRouteHandler)
  .openapi(postZonesIdOrNameRrsetsRoute, postZonesIdOrNameRrsetsRouteHandler)
  .openapi(getZonesIdOrNameRrsetsRrNameRrTypeRoute, getZonesIdOrNameRrsetsRrNameRrTypeRouteHandler)
  .openapi(putZonesIdOrNameRrsetsRrNameRrTypeRoute, putZonesIdOrNameRrsetsRrNameRrTypeRouteHandler)
  .openapi(
    deleteZonesIdOrNameRrsetsRrNameRrTypeRoute,
    deleteZonesIdOrNameRrsetsRrNameRrTypeRouteHandler,
  )
  .openapi(
    postZonesIdOrNameRrsetsRrNameRrTypeActionsChangeProtectionRoute,
    postZonesIdOrNameRrsetsRrNameRrTypeActionsChangeProtectionRouteHandler,
  )
  .openapi(
    postZonesIdOrNameRrsetsRrNameRrTypeActionsChangeTtlRoute,
    postZonesIdOrNameRrsetsRrNameRrTypeActionsChangeTtlRouteHandler,
  )
  .openapi(
    postZonesIdOrNameRrsetsRrNameRrTypeActionsSetRecordsRoute,
    postZonesIdOrNameRrsetsRrNameRrTypeActionsSetRecordsRouteHandler,
  )
  .openapi(
    postZonesIdOrNameRrsetsRrNameRrTypeActionsAddRecordsRoute,
    postZonesIdOrNameRrsetsRrNameRrTypeActionsAddRecordsRouteHandler,
  )
  .openapi(
    postZonesIdOrNameRrsetsRrNameRrTypeActionsRemoveRecordsRoute,
    postZonesIdOrNameRrsetsRrNameRrTypeActionsRemoveRecordsRouteHandler,
  )
  .openapi(
    postZonesIdOrNameRrsetsRrNameRrTypeActionsUpdateRecordsRoute,
    postZonesIdOrNameRrsetsRrNameRrTypeActionsUpdateRecordsRouteHandler,
  )

export default app
