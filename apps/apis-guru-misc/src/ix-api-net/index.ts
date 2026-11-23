import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsIdRoute,
  deleteContactsIdRoute,
  deleteMacsIdRoute,
  deleteMemberJoiningRulesIdRoute,
  deleteNetworkFeatureConfigsIdRoute,
  deleteNetworkServiceConfigsIdRoute,
  deleteNetworkServicesIdChangeRequestRoute,
  deleteNetworkServicesIdRoute,
  deleteRoleAssignmentsAssignmentIdRoute,
  getAccountsIdRoute,
  getAccountsRoute,
  getConnectionsIdRoute,
  getConnectionsRoute,
  getContactsIdRoute,
  getContactsRoute,
  getDevicesIdRoute,
  getDevicesRoute,
  getFacilitiesIdRoute,
  getFacilitiesRoute,
  getHealthRoute,
  getImplementationRoute,
  getIpsIdRoute,
  getIpsRoute,
  getMacsIdRoute,
  getMacsRoute,
  getMemberJoiningRulesIdRoute,
  getMemberJoiningRulesRoute,
  getMetroAreaNetworksIdRoute,
  getMetroAreaNetworksRoute,
  getMetroAreasIdRoute,
  getMetroAreasRoute,
  getNetworkFeatureConfigsIdRoute,
  getNetworkFeatureConfigsRoute,
  getNetworkFeaturesIdRoute,
  getNetworkFeaturesRoute,
  getNetworkServiceConfigsIdCancellationPolicyRoute,
  getNetworkServiceConfigsIdRoute,
  getNetworkServiceConfigsRoute,
  getNetworkServicesIdCancellationPolicyRoute,
  getNetworkServicesIdChangeRequestRoute,
  getNetworkServicesIdRoute,
  getNetworkServicesRoute,
  getPopsIdRoute,
  getPopsRoute,
  getPortsIdRoute,
  getPortsRoute,
  getProductOfferingsIdRoute,
  getProductOfferingsRoute,
  getRoleAssignmentsAssignmentIdRoute,
  getRoleAssignmentsRoute,
  getRolesIdRoute,
  getRolesRoute,
  patchAccountsIdRoute,
  patchContactsIdRoute,
  patchIpsIdRoute,
  patchMemberJoiningRulesIdRoute,
  patchNetworkFeatureConfigsIdRoute,
  patchNetworkServiceConfigsIdRoute,
  patchNetworkServicesIdRoute,
  postAccountsRoute,
  postAuthRefreshRoute,
  postAuthTokenRoute,
  postContactsRoute,
  postIpsRoute,
  postMacsRoute,
  postMemberJoiningRulesRoute,
  postNetworkFeatureConfigsRoute,
  postNetworkServiceConfigsRoute,
  postNetworkServicesIdChangeRequestRoute,
  postNetworkServicesRoute,
  postRoleAssignmentsRoute,
  putAccountsIdRoute,
  putContactsIdRoute,
  putIpsIdRoute,
  putMemberJoiningRulesIdRoute,
  putNetworkFeatureConfigsIdRoute,
  putNetworkServiceConfigsIdRoute,
  putNetworkServicesIdRoute,
} from './routes'
import {
  deleteAccountsIdRouteHandler,
  deleteContactsIdRouteHandler,
  deleteMacsIdRouteHandler,
  deleteMemberJoiningRulesIdRouteHandler,
  deleteNetworkFeatureConfigsIdRouteHandler,
  deleteNetworkServiceConfigsIdRouteHandler,
  deleteNetworkServicesIdChangeRequestRouteHandler,
  deleteNetworkServicesIdRouteHandler,
  deleteRoleAssignmentsAssignmentIdRouteHandler,
  getAccountsIdRouteHandler,
  getAccountsRouteHandler,
  getConnectionsIdRouteHandler,
  getConnectionsRouteHandler,
  getContactsIdRouteHandler,
  getContactsRouteHandler,
  getDevicesIdRouteHandler,
  getDevicesRouteHandler,
  getFacilitiesIdRouteHandler,
  getFacilitiesRouteHandler,
  getHealthRouteHandler,
  getImplementationRouteHandler,
  getIpsIdRouteHandler,
  getIpsRouteHandler,
  getMacsIdRouteHandler,
  getMacsRouteHandler,
  getMemberJoiningRulesIdRouteHandler,
  getMemberJoiningRulesRouteHandler,
  getMetroAreaNetworksIdRouteHandler,
  getMetroAreaNetworksRouteHandler,
  getMetroAreasIdRouteHandler,
  getMetroAreasRouteHandler,
  getNetworkFeatureConfigsIdRouteHandler,
  getNetworkFeatureConfigsRouteHandler,
  getNetworkFeaturesIdRouteHandler,
  getNetworkFeaturesRouteHandler,
  getNetworkServiceConfigsIdCancellationPolicyRouteHandler,
  getNetworkServiceConfigsIdRouteHandler,
  getNetworkServiceConfigsRouteHandler,
  getNetworkServicesIdCancellationPolicyRouteHandler,
  getNetworkServicesIdChangeRequestRouteHandler,
  getNetworkServicesIdRouteHandler,
  getNetworkServicesRouteHandler,
  getPopsIdRouteHandler,
  getPopsRouteHandler,
  getPortsIdRouteHandler,
  getPortsRouteHandler,
  getProductOfferingsIdRouteHandler,
  getProductOfferingsRouteHandler,
  getRoleAssignmentsAssignmentIdRouteHandler,
  getRoleAssignmentsRouteHandler,
  getRolesIdRouteHandler,
  getRolesRouteHandler,
  patchAccountsIdRouteHandler,
  patchContactsIdRouteHandler,
  patchIpsIdRouteHandler,
  patchMemberJoiningRulesIdRouteHandler,
  patchNetworkFeatureConfigsIdRouteHandler,
  patchNetworkServiceConfigsIdRouteHandler,
  patchNetworkServicesIdRouteHandler,
  postAccountsRouteHandler,
  postAuthRefreshRouteHandler,
  postAuthTokenRouteHandler,
  postContactsRouteHandler,
  postIpsRouteHandler,
  postMacsRouteHandler,
  postMemberJoiningRulesRouteHandler,
  postNetworkFeatureConfigsRouteHandler,
  postNetworkServiceConfigsRouteHandler,
  postNetworkServicesIdChangeRequestRouteHandler,
  postNetworkServicesRouteHandler,
  postRoleAssignmentsRouteHandler,
  putAccountsIdRouteHandler,
  putContactsIdRouteHandler,
  putIpsIdRouteHandler,
  putMemberJoiningRulesIdRouteHandler,
  putNetworkFeatureConfigsIdRouteHandler,
  putNetworkServiceConfigsIdRouteHandler,
  putNetworkServicesIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountsRoute, getAccountsRouteHandler)
  .openapi(postAccountsRoute, postAccountsRouteHandler)
  .openapi(deleteAccountsIdRoute, deleteAccountsIdRouteHandler)
  .openapi(getAccountsIdRoute, getAccountsIdRouteHandler)
  .openapi(patchAccountsIdRoute, patchAccountsIdRouteHandler)
  .openapi(putAccountsIdRoute, putAccountsIdRouteHandler)
  .openapi(postAuthRefreshRoute, postAuthRefreshRouteHandler)
  .openapi(postAuthTokenRoute, postAuthTokenRouteHandler)
  .openapi(getConnectionsRoute, getConnectionsRouteHandler)
  .openapi(getConnectionsIdRoute, getConnectionsIdRouteHandler)
  .openapi(getContactsRoute, getContactsRouteHandler)
  .openapi(postContactsRoute, postContactsRouteHandler)
  .openapi(deleteContactsIdRoute, deleteContactsIdRouteHandler)
  .openapi(getContactsIdRoute, getContactsIdRouteHandler)
  .openapi(patchContactsIdRoute, patchContactsIdRouteHandler)
  .openapi(putContactsIdRoute, putContactsIdRouteHandler)
  .openapi(getDevicesRoute, getDevicesRouteHandler)
  .openapi(getDevicesIdRoute, getDevicesIdRouteHandler)
  .openapi(getFacilitiesRoute, getFacilitiesRouteHandler)
  .openapi(getFacilitiesIdRoute, getFacilitiesIdRouteHandler)
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getImplementationRoute, getImplementationRouteHandler)
  .openapi(getIpsRoute, getIpsRouteHandler)
  .openapi(postIpsRoute, postIpsRouteHandler)
  .openapi(getIpsIdRoute, getIpsIdRouteHandler)
  .openapi(patchIpsIdRoute, patchIpsIdRouteHandler)
  .openapi(putIpsIdRoute, putIpsIdRouteHandler)
  .openapi(getMacsRoute, getMacsRouteHandler)
  .openapi(postMacsRoute, postMacsRouteHandler)
  .openapi(deleteMacsIdRoute, deleteMacsIdRouteHandler)
  .openapi(getMacsIdRoute, getMacsIdRouteHandler)
  .openapi(getMemberJoiningRulesRoute, getMemberJoiningRulesRouteHandler)
  .openapi(postMemberJoiningRulesRoute, postMemberJoiningRulesRouteHandler)
  .openapi(deleteMemberJoiningRulesIdRoute, deleteMemberJoiningRulesIdRouteHandler)
  .openapi(getMemberJoiningRulesIdRoute, getMemberJoiningRulesIdRouteHandler)
  .openapi(patchMemberJoiningRulesIdRoute, patchMemberJoiningRulesIdRouteHandler)
  .openapi(putMemberJoiningRulesIdRoute, putMemberJoiningRulesIdRouteHandler)
  .openapi(getMetroAreaNetworksRoute, getMetroAreaNetworksRouteHandler)
  .openapi(getMetroAreaNetworksIdRoute, getMetroAreaNetworksIdRouteHandler)
  .openapi(getMetroAreasRoute, getMetroAreasRouteHandler)
  .openapi(getMetroAreasIdRoute, getMetroAreasIdRouteHandler)
  .openapi(getNetworkFeatureConfigsRoute, getNetworkFeatureConfigsRouteHandler)
  .openapi(postNetworkFeatureConfigsRoute, postNetworkFeatureConfigsRouteHandler)
  .openapi(deleteNetworkFeatureConfigsIdRoute, deleteNetworkFeatureConfigsIdRouteHandler)
  .openapi(getNetworkFeatureConfigsIdRoute, getNetworkFeatureConfigsIdRouteHandler)
  .openapi(patchNetworkFeatureConfigsIdRoute, patchNetworkFeatureConfigsIdRouteHandler)
  .openapi(putNetworkFeatureConfigsIdRoute, putNetworkFeatureConfigsIdRouteHandler)
  .openapi(getNetworkFeaturesRoute, getNetworkFeaturesRouteHandler)
  .openapi(getNetworkFeaturesIdRoute, getNetworkFeaturesIdRouteHandler)
  .openapi(getNetworkServiceConfigsRoute, getNetworkServiceConfigsRouteHandler)
  .openapi(postNetworkServiceConfigsRoute, postNetworkServiceConfigsRouteHandler)
  .openapi(deleteNetworkServiceConfigsIdRoute, deleteNetworkServiceConfigsIdRouteHandler)
  .openapi(getNetworkServiceConfigsIdRoute, getNetworkServiceConfigsIdRouteHandler)
  .openapi(patchNetworkServiceConfigsIdRoute, patchNetworkServiceConfigsIdRouteHandler)
  .openapi(putNetworkServiceConfigsIdRoute, putNetworkServiceConfigsIdRouteHandler)
  .openapi(
    getNetworkServiceConfigsIdCancellationPolicyRoute,
    getNetworkServiceConfigsIdCancellationPolicyRouteHandler,
  )
  .openapi(getNetworkServicesRoute, getNetworkServicesRouteHandler)
  .openapi(postNetworkServicesRoute, postNetworkServicesRouteHandler)
  .openapi(deleteNetworkServicesIdRoute, deleteNetworkServicesIdRouteHandler)
  .openapi(getNetworkServicesIdRoute, getNetworkServicesIdRouteHandler)
  .openapi(patchNetworkServicesIdRoute, patchNetworkServicesIdRouteHandler)
  .openapi(putNetworkServicesIdRoute, putNetworkServicesIdRouteHandler)
  .openapi(
    getNetworkServicesIdCancellationPolicyRoute,
    getNetworkServicesIdCancellationPolicyRouteHandler,
  )
  .openapi(
    deleteNetworkServicesIdChangeRequestRoute,
    deleteNetworkServicesIdChangeRequestRouteHandler,
  )
  .openapi(getNetworkServicesIdChangeRequestRoute, getNetworkServicesIdChangeRequestRouteHandler)
  .openapi(postNetworkServicesIdChangeRequestRoute, postNetworkServicesIdChangeRequestRouteHandler)
  .openapi(getPopsRoute, getPopsRouteHandler)
  .openapi(getPopsIdRoute, getPopsIdRouteHandler)
  .openapi(getPortsRoute, getPortsRouteHandler)
  .openapi(getPortsIdRoute, getPortsIdRouteHandler)
  .openapi(getProductOfferingsRoute, getProductOfferingsRouteHandler)
  .openapi(getProductOfferingsIdRoute, getProductOfferingsIdRouteHandler)
  .openapi(getRoleAssignmentsRoute, getRoleAssignmentsRouteHandler)
  .openapi(postRoleAssignmentsRoute, postRoleAssignmentsRouteHandler)
  .openapi(deleteRoleAssignmentsAssignmentIdRoute, deleteRoleAssignmentsAssignmentIdRouteHandler)
  .openapi(getRoleAssignmentsAssignmentIdRoute, getRoleAssignmentsAssignmentIdRouteHandler)
  .openapi(getRolesRoute, getRolesRouteHandler)
  .openapi(getRolesIdRoute, getRolesIdRouteHandler)

export default app
