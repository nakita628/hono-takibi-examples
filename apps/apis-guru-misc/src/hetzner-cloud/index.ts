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
  getActionsIdRoute,
  getActionsRoute,
  getCertificatesIdActionsActionIdRoute,
  getCertificatesIdActionsRoute,
  getCertificatesIdRoute,
  getCertificatesRoute,
  getDatacentersIdRoute,
  getDatacentersRoute,
  getFirewallsIdActionsActionIdRoute,
  getFirewallsIdActionsRoute,
  getFirewallsIdRoute,
  getFirewallsRoute,
  getFloatingIpsIdActionsActionIdRoute,
  getFloatingIpsIdActionsRoute,
  getFloatingIpsIdRoute,
  getFloatingIpsRoute,
  getImagesIdActionsActionIdRoute,
  getImagesIdActionsRoute,
  getImagesIdRoute,
  getImagesRoute,
  getIsosIdRoute,
  getIsosRoute,
  getLoadBalancersIdActionsActionIdRoute,
  getLoadBalancersIdActionsRoute,
  getLoadBalancersIdMetricsRoute,
  getLoadBalancersIdRoute,
  getLoadBalancersRoute,
  getLoadBalancerTypesIdRoute,
  getLoadBalancerTypesRoute,
  getLocationsIdRoute,
  getLocationsRoute,
  getNetworksIdActionsActionIdRoute,
  getNetworksIdActionsRoute,
  getNetworksIdRoute,
  getNetworksRoute,
  getPlacementGroupsIdRoute,
  getPlacementGroupsRoute,
  getPricingRoute,
  getPrimaryIpsIdRoute,
  getPrimaryIpsRoute,
  getServersIdActionsActionIdRoute,
  getServersIdActionsRoute,
  getServersIdMetricsRoute,
  getServersIdRoute,
  getServersRoute,
  getServerTypesIdRoute,
  getServerTypesRoute,
  getSshKeysIdRoute,
  getSshKeysRoute,
  getVolumesIdActionsActionIdRoute,
  getVolumesIdActionsRoute,
  getVolumesIdRoute,
  getVolumesRoute,
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
  getActionsIdRouteHandler,
  getActionsRouteHandler,
  getCertificatesIdActionsActionIdRouteHandler,
  getCertificatesIdActionsRouteHandler,
  getCertificatesIdRouteHandler,
  getCertificatesRouteHandler,
  getDatacentersIdRouteHandler,
  getDatacentersRouteHandler,
  getFirewallsIdActionsActionIdRouteHandler,
  getFirewallsIdActionsRouteHandler,
  getFirewallsIdRouteHandler,
  getFirewallsRouteHandler,
  getFloatingIpsIdActionsActionIdRouteHandler,
  getFloatingIpsIdActionsRouteHandler,
  getFloatingIpsIdRouteHandler,
  getFloatingIpsRouteHandler,
  getImagesIdActionsActionIdRouteHandler,
  getImagesIdActionsRouteHandler,
  getImagesIdRouteHandler,
  getImagesRouteHandler,
  getIsosIdRouteHandler,
  getIsosRouteHandler,
  getLoadBalancersIdActionsActionIdRouteHandler,
  getLoadBalancersIdActionsRouteHandler,
  getLoadBalancersIdMetricsRouteHandler,
  getLoadBalancersIdRouteHandler,
  getLoadBalancersRouteHandler,
  getLoadBalancerTypesIdRouteHandler,
  getLoadBalancerTypesRouteHandler,
  getLocationsIdRouteHandler,
  getLocationsRouteHandler,
  getNetworksIdActionsActionIdRouteHandler,
  getNetworksIdActionsRouteHandler,
  getNetworksIdRouteHandler,
  getNetworksRouteHandler,
  getPlacementGroupsIdRouteHandler,
  getPlacementGroupsRouteHandler,
  getPricingRouteHandler,
  getPrimaryIpsIdRouteHandler,
  getPrimaryIpsRouteHandler,
  getServersIdActionsActionIdRouteHandler,
  getServersIdActionsRouteHandler,
  getServersIdMetricsRouteHandler,
  getServersIdRouteHandler,
  getServersRouteHandler,
  getServerTypesIdRouteHandler,
  getServerTypesRouteHandler,
  getSshKeysIdRouteHandler,
  getSshKeysRouteHandler,
  getVolumesIdActionsActionIdRouteHandler,
  getVolumesIdActionsRouteHandler,
  getVolumesIdRouteHandler,
  getVolumesRouteHandler,
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
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getActionsRoute, getActionsRouteHandler)
  .openapi(getActionsIdRoute, getActionsIdRouteHandler)
  .openapi(getCertificatesRoute, getCertificatesRouteHandler)
  .openapi(postCertificatesRoute, postCertificatesRouteHandler)
  .openapi(deleteCertificatesIdRoute, deleteCertificatesIdRouteHandler)
  .openapi(getCertificatesIdRoute, getCertificatesIdRouteHandler)
  .openapi(putCertificatesIdRoute, putCertificatesIdRouteHandler)
  .openapi(getCertificatesIdActionsRoute, getCertificatesIdActionsRouteHandler)
  .openapi(postCertificatesIdActionsRetryRoute, postCertificatesIdActionsRetryRouteHandler)
  .openapi(getCertificatesIdActionsActionIdRoute, getCertificatesIdActionsActionIdRouteHandler)
  .openapi(getDatacentersRoute, getDatacentersRouteHandler)
  .openapi(getDatacentersIdRoute, getDatacentersIdRouteHandler)
  .openapi(getFirewallsRoute, getFirewallsRouteHandler)
  .openapi(postFirewallsRoute, postFirewallsRouteHandler)
  .openapi(deleteFirewallsIdRoute, deleteFirewallsIdRouteHandler)
  .openapi(getFirewallsIdRoute, getFirewallsIdRouteHandler)
  .openapi(putFirewallsIdRoute, putFirewallsIdRouteHandler)
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
  .openapi(deleteFloatingIpsIdRoute, deleteFloatingIpsIdRouteHandler)
  .openapi(getFloatingIpsIdRoute, getFloatingIpsIdRouteHandler)
  .openapi(putFloatingIpsIdRoute, putFloatingIpsIdRouteHandler)
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
  .openapi(deleteImagesIdRoute, deleteImagesIdRouteHandler)
  .openapi(getImagesIdRoute, getImagesIdRouteHandler)
  .openapi(putImagesIdRoute, putImagesIdRouteHandler)
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
  .openapi(deleteLoadBalancersIdRoute, deleteLoadBalancersIdRouteHandler)
  .openapi(getLoadBalancersIdRoute, getLoadBalancersIdRouteHandler)
  .openapi(putLoadBalancersIdRoute, putLoadBalancersIdRouteHandler)
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
  .openapi(deleteNetworksIdRoute, deleteNetworksIdRouteHandler)
  .openapi(getNetworksIdRoute, getNetworksIdRouteHandler)
  .openapi(putNetworksIdRoute, putNetworksIdRouteHandler)
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
  .openapi(getPlacementGroupsRoute, getPlacementGroupsRouteHandler)
  .openapi(postPlacementGroupsRoute, postPlacementGroupsRouteHandler)
  .openapi(deletePlacementGroupsIdRoute, deletePlacementGroupsIdRouteHandler)
  .openapi(getPlacementGroupsIdRoute, getPlacementGroupsIdRouteHandler)
  .openapi(putPlacementGroupsIdRoute, putPlacementGroupsIdRouteHandler)
  .openapi(getPricingRoute, getPricingRouteHandler)
  .openapi(getPrimaryIpsRoute, getPrimaryIpsRouteHandler)
  .openapi(postPrimaryIpsRoute, postPrimaryIpsRouteHandler)
  .openapi(deletePrimaryIpsIdRoute, deletePrimaryIpsIdRouteHandler)
  .openapi(getPrimaryIpsIdRoute, getPrimaryIpsIdRouteHandler)
  .openapi(putPrimaryIpsIdRoute, putPrimaryIpsIdRouteHandler)
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
  .openapi(deleteServersIdRoute, deleteServersIdRouteHandler)
  .openapi(getServersIdRoute, getServersIdRouteHandler)
  .openapi(putServersIdRoute, putServersIdRouteHandler)
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
  .openapi(deleteSshKeysIdRoute, deleteSshKeysIdRouteHandler)
  .openapi(getSshKeysIdRoute, getSshKeysIdRouteHandler)
  .openapi(putSshKeysIdRoute, putSshKeysIdRouteHandler)
  .openapi(getVolumesRoute, getVolumesRouteHandler)
  .openapi(postVolumesRoute, postVolumesRouteHandler)
  .openapi(deleteVolumesIdRoute, deleteVolumesIdRouteHandler)
  .openapi(getVolumesIdRoute, getVolumesIdRouteHandler)
  .openapi(putVolumesIdRoute, putVolumesIdRouteHandler)
  .openapi(getVolumesIdActionsRoute, getVolumesIdActionsRouteHandler)
  .openapi(postVolumesIdActionsAttachRoute, postVolumesIdActionsAttachRouteHandler)
  .openapi(
    postVolumesIdActionsChangeProtectionRoute,
    postVolumesIdActionsChangeProtectionRouteHandler,
  )
  .openapi(postVolumesIdActionsDetachRoute, postVolumesIdActionsDetachRouteHandler)
  .openapi(postVolumesIdActionsResizeRoute, postVolumesIdActionsResizeRouteHandler)
  .openapi(getVolumesIdActionsActionIdRoute, getVolumesIdActionsActionIdRouteHandler)

export default app
