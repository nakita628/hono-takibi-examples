import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiKeysIdRoute,
  deleteBatchesIdRoute,
  deleteBgpDynamicNeighborsIdRoute,
  deleteBgpSessionsIdRoute,
  deleteConnectionsConnectionIdRoute,
  deleteDevicesIdRoute,
  deleteEmailsIdRoute,
  deleteInvitationsIdRoute,
  deleteIpsIdRoute,
  deleteLicensesIdRoute,
  deleteMembershipsIdRoute,
  deleteMetalGatewaysIdRoute,
  deleteOrganizationsIdRoute,
  deletePaymentMethodsIdRoute,
  deletePortsIdNativeVlanRoute,
  deleteProjectsIdRoute,
  deleteResetPasswordRoute,
  deleteRoutesIdRoute,
  deleteSpotMarketRequestsIdRoute,
  deleteSshKeysIdRoute,
  deleteTransfersIdRoute,
  deleteUserApiKeysIdRoute,
  deleteUserOtpAppRoute,
  deleteUserOtpSmsRoute,
  deleteVirtualCircuitsIdRoute,
  deleteVirtualNetworksIdRoute,
  deleteVrfsIdRoute,
  getBatchesIdRoute,
  getBgpDynamicNeighborsIdRoute,
  getBgpSessionsIdRoute,
  getCapacityMetrosRoute,
  getCapacityRoute,
  getConnectionsConnectionIdEventsRoute,
  getConnectionsConnectionIdPortsIdEventsRoute,
  getConnectionsConnectionIdPortsIdRoute,
  getConnectionsConnectionIdPortsPortIdVirtualCircuitsRoute,
  getConnectionsConnectionIdPortsRoute,
  getConnectionsConnectionIdRoute,
  getConnectionsConnectionIdVirtualCircuitsRoute,
  getDevicesIdBandwidthRoute,
  getDevicesIdBgpNeighborsRoute,
  getDevicesIdBgpSessionsRoute,
  getDevicesIdCustomdataRoute,
  getDevicesIdDiagnosticsHealthRollupRoute,
  getDevicesIdDiagnosticsScreenshotRoute,
  getDevicesIdEventsRoute,
  getDevicesIdFirmwareSetsRoute,
  getDevicesIdIpsRoute,
  getDevicesIdMetadataRoute,
  getDevicesIdRoute,
  getDevicesIdSshKeysRoute,
  getDevicesIdTrafficRoute,
  getDevicesIdUsagesRoute,
  getDevicesIdUserdataRoute,
  getDevicesInstanceIdIpsIdCustomdataRoute,
  getEmailsIdRoute,
  getEventsIdRoute,
  getEventsRoute,
  getFacilitiesRoute,
  getHardwareReservationsIdRoute,
  getIncidentsRoute,
  getInvitationsIdRoute,
  getInvitationsRoute,
  getInvoicesIdRoute,
  getIpsIdAvailableRoute,
  getIpsIdCustomdataRoute,
  getIpsIdRoute,
  getLicensesIdRoute,
  getLocationsMetrosIdRoute,
  getLocationsMetrosRoute,
  getMarketSpotPricesHistoryRoute,
  getMarketSpotPricesMetrosRoute,
  getMarketSpotPricesRoute,
  getMembershipsIdRoute,
  getMetalGatewaysIdBgpDynamicNeighborsRoute,
  getMetalGatewaysIdIpsRoute,
  getMetalGatewaysIdRoute,
  getOperatingSystemsRoute,
  getOperatingSystemVersionsRoute,
  getOrganizationsIdCapacityMetrosRoute,
  getOrganizationsIdCapacityRoute,
  getOrganizationsIdCustomdataRoute,
  getOrganizationsIdDevicesRoute,
  getOrganizationsIdEventsRoute,
  getOrganizationsIdFacilitiesRoute,
  getOrganizationsIdFirmwareSetsRoute,
  getOrganizationsIdInvitationsRoute,
  getOrganizationsIdInvoicesRoute,
  getOrganizationsIdOperatingSystemsRoute,
  getOrganizationsIdPaymentMethodsRoute,
  getOrganizationsIdPlansRoute,
  getOrganizationsIdProjectsRoute,
  getOrganizationsIdRoute,
  getOrganizationsIdTransfersRoute,
  getOrganizationsOrganizationIdConnectionsRoute,
  getOrganizationsRoute,
  getPaymentMethodsIdRoute,
  getPlansRoute,
  getPortsIdRoute,
  getPortsIdVlanAssignmentsAssignmentIdRoute,
  getPortsIdVlanAssignmentsBatchesBatchIdRoute,
  getPortsIdVlanAssignmentsBatchesRoute,
  getPortsIdVlanAssignmentsRoute,
  getProjectsIdApiKeysRoute,
  getProjectsIdBatchesRoute,
  getProjectsIdBgpConfigRoute,
  getProjectsIdBgpSessionsRoute,
  getProjectsIdCustomdataRoute,
  getProjectsIdDevicesRoute,
  getProjectsIdEventsRoute,
  getProjectsIdFacilitiesRoute,
  getProjectsIdFirmwareSetsRoute,
  getProjectsIdGlobalBgpRangesRoute,
  getProjectsIdHardwareReservationsRoute,
  getProjectsIdIpsRoute,
  getProjectsIdLicensesRoute,
  getProjectsIdPlansRoute,
  getProjectsIdRoute,
  getProjectsIdSpotMarketRequestsRoute,
  getProjectsIdSshKeysRoute,
  getProjectsIdUsagesRoute,
  getProjectsIdVirtualNetworksRoute,
  getProjectsIdVrfsRoute,
  getProjectsProjectIdConnectionsRoute,
  getProjectsProjectIdInvitationsRoute,
  getProjectsProjectIdIpsIdCustomdataRoute,
  getProjectsProjectIdMembershipsRoute,
  getProjectsProjectIdMetalGatewaysRoute,
  getProjectsProjectIdSelfServiceReservationsIdRoute,
  getProjectsProjectIdSelfServiceReservationsRoute,
  getProjectsRoute,
  getRoutesIdEventsRoute,
  getRoutesIdRoute,
  getSpotMarketRequestsIdRoute,
  getSshKeysIdRoute,
  getSshKeysRoute,
  getTransfersIdRoute,
  getUserApiKeysRoute,
  getUserOtpRecoveryCodesRoute,
  getUserRoute,
  getUsersIdCustomdataRoute,
  getUsersIdRoute,
  getUsersRoute,
  getVirtualCircuitsIdEventsRoute,
  getVirtualCircuitsIdRoute,
  getVirtualNetworksIdRoute,
  getVrfsIdIpsRoute,
  getVrfsIdRoute,
  getVrfsIdRoutesRoute,
  getVrfsVrfIdIpsIdRoute,
  patchIpsIdRoute,
  postCapacityMetrosRoute,
  postCapacityRoute,
  postConnectionsConnectionIdPortsPortIdVirtualCircuitsRoute,
  postDevicesIdActionsRoute,
  postDevicesIdBgpSessionsRoute,
  postDevicesIdIpsRoute,
  postEmailsRoute,
  postHardwareReservationsIdActivateRoute,
  postHardwareReservationsIdMoveRoute,
  postMetalGatewaysIdBgpDynamicNeighborsRoute,
  postMetalGatewaysIdIpsRoute,
  postOrganizationsIdInvitationsRoute,
  postOrganizationsIdPaymentMethodsRoute,
  postOrganizationsIdProjectsRoute,
  postOrganizationsOrganizationIdConnectionsRoute,
  postOrganizationsRoute,
  postPortsIdAssignRoute,
  postPortsIdBondRoute,
  postPortsIdConvertLayer2Route,
  postPortsIdConvertLayer3Route,
  postPortsIdDisbondRoute,
  postPortsIdNativeVlanRoute,
  postPortsIdUnassignRoute,
  postPortsIdVlanAssignmentsBatchesRoute,
  postProjectsIdApiKeysRoute,
  postProjectsIdBgpConfigsRoute,
  postProjectsIdDevicesBatchRoute,
  postProjectsIdDevicesRoute,
  postProjectsIdIpsRoute,
  postProjectsIdLicensesRoute,
  postProjectsIdSpotMarketRequestsRoute,
  postProjectsIdSshKeysRoute,
  postProjectsIdTransfersRoute,
  postProjectsIdVirtualNetworksRoute,
  postProjectsIdVrfsRoute,
  postProjectsProjectIdConnectionsRoute,
  postProjectsProjectIdInvitationsRoute,
  postProjectsProjectIdMetalGatewaysRoute,
  postProjectsProjectIdSelfServiceReservationsRoute,
  postProjectsRoute,
  postResetPasswordRoute,
  postSshKeysRoute,
  postSupportRequestsRoute,
  postUserApiKeysRoute,
  postUserdataValidateRoute,
  postUserOtpAppRoute,
  postUserOtpRecoveryCodesRoute,
  postUserOtpSmsReceiveRoute,
  postUserOtpSmsRoute,
  postUserOtpVerifyOtpRoute,
  postUsersRoute,
  postVerifyEmailRoute,
  postVrfsIdRoutesRoute,
  putBgpSessionsIdRoute,
  putConnectionsConnectionIdRoute,
  putDevicesIdRoute,
  putEmailsIdRoute,
  putInvitationsIdRoute,
  putLicensesIdRoute,
  putMembershipsIdRoute,
  putOrganizationsIdRoute,
  putPaymentMethodsIdRoute,
  putProjectsIdRoute,
  putRoutesIdRoute,
  putSshKeysIdRoute,
  putTransfersIdRoute,
  putUserRoute,
  putVerifyEmailRoute,
  putVirtualCircuitsIdRoute,
  putVrfsIdRoute,
} from './routes'
import {
  deleteApiKeysIdRouteHandler,
  deleteBatchesIdRouteHandler,
  deleteBgpDynamicNeighborsIdRouteHandler,
  deleteBgpSessionsIdRouteHandler,
  deleteConnectionsConnectionIdRouteHandler,
  deleteDevicesIdRouteHandler,
  deleteEmailsIdRouteHandler,
  deleteInvitationsIdRouteHandler,
  deleteIpsIdRouteHandler,
  deleteLicensesIdRouteHandler,
  deleteMembershipsIdRouteHandler,
  deleteMetalGatewaysIdRouteHandler,
  deleteOrganizationsIdRouteHandler,
  deletePaymentMethodsIdRouteHandler,
  deletePortsIdNativeVlanRouteHandler,
  deleteProjectsIdRouteHandler,
  deleteResetPasswordRouteHandler,
  deleteRoutesIdRouteHandler,
  deleteSpotMarketRequestsIdRouteHandler,
  deleteSshKeysIdRouteHandler,
  deleteTransfersIdRouteHandler,
  deleteUserApiKeysIdRouteHandler,
  deleteUserOtpAppRouteHandler,
  deleteUserOtpSmsRouteHandler,
  deleteVirtualCircuitsIdRouteHandler,
  deleteVirtualNetworksIdRouteHandler,
  deleteVrfsIdRouteHandler,
  getBatchesIdRouteHandler,
  getBgpDynamicNeighborsIdRouteHandler,
  getBgpSessionsIdRouteHandler,
  getCapacityMetrosRouteHandler,
  getCapacityRouteHandler,
  getConnectionsConnectionIdEventsRouteHandler,
  getConnectionsConnectionIdPortsIdEventsRouteHandler,
  getConnectionsConnectionIdPortsIdRouteHandler,
  getConnectionsConnectionIdPortsPortIdVirtualCircuitsRouteHandler,
  getConnectionsConnectionIdPortsRouteHandler,
  getConnectionsConnectionIdRouteHandler,
  getConnectionsConnectionIdVirtualCircuitsRouteHandler,
  getDevicesIdBandwidthRouteHandler,
  getDevicesIdBgpNeighborsRouteHandler,
  getDevicesIdBgpSessionsRouteHandler,
  getDevicesIdCustomdataRouteHandler,
  getDevicesIdDiagnosticsHealthRollupRouteHandler,
  getDevicesIdDiagnosticsScreenshotRouteHandler,
  getDevicesIdEventsRouteHandler,
  getDevicesIdFirmwareSetsRouteHandler,
  getDevicesIdIpsRouteHandler,
  getDevicesIdMetadataRouteHandler,
  getDevicesIdRouteHandler,
  getDevicesIdSshKeysRouteHandler,
  getDevicesIdTrafficRouteHandler,
  getDevicesIdUsagesRouteHandler,
  getDevicesIdUserdataRouteHandler,
  getDevicesInstanceIdIpsIdCustomdataRouteHandler,
  getEmailsIdRouteHandler,
  getEventsIdRouteHandler,
  getEventsRouteHandler,
  getFacilitiesRouteHandler,
  getHardwareReservationsIdRouteHandler,
  getIncidentsRouteHandler,
  getInvitationsIdRouteHandler,
  getInvitationsRouteHandler,
  getInvoicesIdRouteHandler,
  getIpsIdAvailableRouteHandler,
  getIpsIdCustomdataRouteHandler,
  getIpsIdRouteHandler,
  getLicensesIdRouteHandler,
  getLocationsMetrosIdRouteHandler,
  getLocationsMetrosRouteHandler,
  getMarketSpotPricesHistoryRouteHandler,
  getMarketSpotPricesMetrosRouteHandler,
  getMarketSpotPricesRouteHandler,
  getMembershipsIdRouteHandler,
  getMetalGatewaysIdBgpDynamicNeighborsRouteHandler,
  getMetalGatewaysIdIpsRouteHandler,
  getMetalGatewaysIdRouteHandler,
  getOperatingSystemsRouteHandler,
  getOperatingSystemVersionsRouteHandler,
  getOrganizationsIdCapacityMetrosRouteHandler,
  getOrganizationsIdCapacityRouteHandler,
  getOrganizationsIdCustomdataRouteHandler,
  getOrganizationsIdDevicesRouteHandler,
  getOrganizationsIdEventsRouteHandler,
  getOrganizationsIdFacilitiesRouteHandler,
  getOrganizationsIdFirmwareSetsRouteHandler,
  getOrganizationsIdInvitationsRouteHandler,
  getOrganizationsIdInvoicesRouteHandler,
  getOrganizationsIdOperatingSystemsRouteHandler,
  getOrganizationsIdPaymentMethodsRouteHandler,
  getOrganizationsIdPlansRouteHandler,
  getOrganizationsIdProjectsRouteHandler,
  getOrganizationsIdRouteHandler,
  getOrganizationsIdTransfersRouteHandler,
  getOrganizationsOrganizationIdConnectionsRouteHandler,
  getOrganizationsRouteHandler,
  getPaymentMethodsIdRouteHandler,
  getPlansRouteHandler,
  getPortsIdRouteHandler,
  getPortsIdVlanAssignmentsAssignmentIdRouteHandler,
  getPortsIdVlanAssignmentsBatchesBatchIdRouteHandler,
  getPortsIdVlanAssignmentsBatchesRouteHandler,
  getPortsIdVlanAssignmentsRouteHandler,
  getProjectsIdApiKeysRouteHandler,
  getProjectsIdBatchesRouteHandler,
  getProjectsIdBgpConfigRouteHandler,
  getProjectsIdBgpSessionsRouteHandler,
  getProjectsIdCustomdataRouteHandler,
  getProjectsIdDevicesRouteHandler,
  getProjectsIdEventsRouteHandler,
  getProjectsIdFacilitiesRouteHandler,
  getProjectsIdFirmwareSetsRouteHandler,
  getProjectsIdGlobalBgpRangesRouteHandler,
  getProjectsIdHardwareReservationsRouteHandler,
  getProjectsIdIpsRouteHandler,
  getProjectsIdLicensesRouteHandler,
  getProjectsIdPlansRouteHandler,
  getProjectsIdRouteHandler,
  getProjectsIdSpotMarketRequestsRouteHandler,
  getProjectsIdSshKeysRouteHandler,
  getProjectsIdUsagesRouteHandler,
  getProjectsIdVirtualNetworksRouteHandler,
  getProjectsIdVrfsRouteHandler,
  getProjectsProjectIdConnectionsRouteHandler,
  getProjectsProjectIdInvitationsRouteHandler,
  getProjectsProjectIdIpsIdCustomdataRouteHandler,
  getProjectsProjectIdMembershipsRouteHandler,
  getProjectsProjectIdMetalGatewaysRouteHandler,
  getProjectsProjectIdSelfServiceReservationsIdRouteHandler,
  getProjectsProjectIdSelfServiceReservationsRouteHandler,
  getProjectsRouteHandler,
  getRoutesIdEventsRouteHandler,
  getRoutesIdRouteHandler,
  getSpotMarketRequestsIdRouteHandler,
  getSshKeysIdRouteHandler,
  getSshKeysRouteHandler,
  getTransfersIdRouteHandler,
  getUserApiKeysRouteHandler,
  getUserOtpRecoveryCodesRouteHandler,
  getUserRouteHandler,
  getUsersIdCustomdataRouteHandler,
  getUsersIdRouteHandler,
  getUsersRouteHandler,
  getVirtualCircuitsIdEventsRouteHandler,
  getVirtualCircuitsIdRouteHandler,
  getVirtualNetworksIdRouteHandler,
  getVrfsIdIpsRouteHandler,
  getVrfsIdRouteHandler,
  getVrfsIdRoutesRouteHandler,
  getVrfsVrfIdIpsIdRouteHandler,
  patchIpsIdRouteHandler,
  postCapacityMetrosRouteHandler,
  postCapacityRouteHandler,
  postConnectionsConnectionIdPortsPortIdVirtualCircuitsRouteHandler,
  postDevicesIdActionsRouteHandler,
  postDevicesIdBgpSessionsRouteHandler,
  postDevicesIdIpsRouteHandler,
  postEmailsRouteHandler,
  postHardwareReservationsIdActivateRouteHandler,
  postHardwareReservationsIdMoveRouteHandler,
  postMetalGatewaysIdBgpDynamicNeighborsRouteHandler,
  postMetalGatewaysIdIpsRouteHandler,
  postOrganizationsIdInvitationsRouteHandler,
  postOrganizationsIdPaymentMethodsRouteHandler,
  postOrganizationsIdProjectsRouteHandler,
  postOrganizationsOrganizationIdConnectionsRouteHandler,
  postOrganizationsRouteHandler,
  postPortsIdAssignRouteHandler,
  postPortsIdBondRouteHandler,
  postPortsIdConvertLayer2RouteHandler,
  postPortsIdConvertLayer3RouteHandler,
  postPortsIdDisbondRouteHandler,
  postPortsIdNativeVlanRouteHandler,
  postPortsIdUnassignRouteHandler,
  postPortsIdVlanAssignmentsBatchesRouteHandler,
  postProjectsIdApiKeysRouteHandler,
  postProjectsIdBgpConfigsRouteHandler,
  postProjectsIdDevicesBatchRouteHandler,
  postProjectsIdDevicesRouteHandler,
  postProjectsIdIpsRouteHandler,
  postProjectsIdLicensesRouteHandler,
  postProjectsIdSpotMarketRequestsRouteHandler,
  postProjectsIdSshKeysRouteHandler,
  postProjectsIdTransfersRouteHandler,
  postProjectsIdVirtualNetworksRouteHandler,
  postProjectsIdVrfsRouteHandler,
  postProjectsProjectIdConnectionsRouteHandler,
  postProjectsProjectIdInvitationsRouteHandler,
  postProjectsProjectIdMetalGatewaysRouteHandler,
  postProjectsProjectIdSelfServiceReservationsRouteHandler,
  postProjectsRouteHandler,
  postResetPasswordRouteHandler,
  postSshKeysRouteHandler,
  postSupportRequestsRouteHandler,
  postUserApiKeysRouteHandler,
  postUserdataValidateRouteHandler,
  postUserOtpAppRouteHandler,
  postUserOtpRecoveryCodesRouteHandler,
  postUserOtpSmsReceiveRouteHandler,
  postUserOtpSmsRouteHandler,
  postUserOtpVerifyOtpRouteHandler,
  postUsersRouteHandler,
  postVerifyEmailRouteHandler,
  postVrfsIdRoutesRouteHandler,
  putBgpSessionsIdRouteHandler,
  putConnectionsConnectionIdRouteHandler,
  putDevicesIdRouteHandler,
  putEmailsIdRouteHandler,
  putInvitationsIdRouteHandler,
  putLicensesIdRouteHandler,
  putMembershipsIdRouteHandler,
  putOrganizationsIdRouteHandler,
  putPaymentMethodsIdRouteHandler,
  putProjectsIdRouteHandler,
  putRoutesIdRouteHandler,
  putSshKeysIdRouteHandler,
  putTransfersIdRouteHandler,
  putUserRouteHandler,
  putVerifyEmailRouteHandler,
  putVirtualCircuitsIdRouteHandler,
  putVrfsIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteApiKeysIdRoute, deleteApiKeysIdRouteHandler)
  .openapi(deleteBatchesIdRoute, deleteBatchesIdRouteHandler)
  .openapi(getBatchesIdRoute, getBatchesIdRouteHandler)
  .openapi(deleteBgpSessionsIdRoute, deleteBgpSessionsIdRouteHandler)
  .openapi(getBgpSessionsIdRoute, getBgpSessionsIdRouteHandler)
  .openapi(putBgpSessionsIdRoute, putBgpSessionsIdRouteHandler)
  .openapi(deleteBgpDynamicNeighborsIdRoute, deleteBgpDynamicNeighborsIdRouteHandler)
  .openapi(getBgpDynamicNeighborsIdRoute, getBgpDynamicNeighborsIdRouteHandler)
  .openapi(getCapacityRoute, getCapacityRouteHandler)
  .openapi(postCapacityRoute, postCapacityRouteHandler)
  .openapi(getCapacityMetrosRoute, getCapacityMetrosRouteHandler)
  .openapi(postCapacityMetrosRoute, postCapacityMetrosRouteHandler)
  .openapi(deleteConnectionsConnectionIdRoute, deleteConnectionsConnectionIdRouteHandler)
  .openapi(getConnectionsConnectionIdRoute, getConnectionsConnectionIdRouteHandler)
  .openapi(putConnectionsConnectionIdRoute, putConnectionsConnectionIdRouteHandler)
  .openapi(getConnectionsConnectionIdEventsRoute, getConnectionsConnectionIdEventsRouteHandler)
  .openapi(getConnectionsConnectionIdPortsRoute, getConnectionsConnectionIdPortsRouteHandler)
  .openapi(
    getConnectionsConnectionIdVirtualCircuitsRoute,
    getConnectionsConnectionIdVirtualCircuitsRouteHandler,
  )
  .openapi(getConnectionsConnectionIdPortsIdRoute, getConnectionsConnectionIdPortsIdRouteHandler)
  .openapi(
    getConnectionsConnectionIdPortsIdEventsRoute,
    getConnectionsConnectionIdPortsIdEventsRouteHandler,
  )
  .openapi(
    getConnectionsConnectionIdPortsPortIdVirtualCircuitsRoute,
    getConnectionsConnectionIdPortsPortIdVirtualCircuitsRouteHandler,
  )
  .openapi(
    postConnectionsConnectionIdPortsPortIdVirtualCircuitsRoute,
    postConnectionsConnectionIdPortsPortIdVirtualCircuitsRouteHandler,
  )
  .openapi(deleteDevicesIdRoute, deleteDevicesIdRouteHandler)
  .openapi(getDevicesIdRoute, getDevicesIdRouteHandler)
  .openapi(putDevicesIdRoute, putDevicesIdRouteHandler)
  .openapi(postDevicesIdActionsRoute, postDevicesIdActionsRouteHandler)
  .openapi(getDevicesIdBandwidthRoute, getDevicesIdBandwidthRouteHandler)
  .openapi(getDevicesIdBgpNeighborsRoute, getDevicesIdBgpNeighborsRouteHandler)
  .openapi(getDevicesIdBgpSessionsRoute, getDevicesIdBgpSessionsRouteHandler)
  .openapi(postDevicesIdBgpSessionsRoute, postDevicesIdBgpSessionsRouteHandler)
  .openapi(getDevicesIdCustomdataRoute, getDevicesIdCustomdataRouteHandler)
  .openapi(getDevicesIdDiagnosticsScreenshotRoute, getDevicesIdDiagnosticsScreenshotRouteHandler)
  .openapi(
    getDevicesIdDiagnosticsHealthRollupRoute,
    getDevicesIdDiagnosticsHealthRollupRouteHandler,
  )
  .openapi(getDevicesIdEventsRoute, getDevicesIdEventsRouteHandler)
  .openapi(getDevicesIdFirmwareSetsRoute, getDevicesIdFirmwareSetsRouteHandler)
  .openapi(getDevicesIdIpsRoute, getDevicesIdIpsRouteHandler)
  .openapi(postDevicesIdIpsRoute, postDevicesIdIpsRouteHandler)
  .openapi(getDevicesIdMetadataRoute, getDevicesIdMetadataRouteHandler)
  .openapi(getDevicesIdSshKeysRoute, getDevicesIdSshKeysRouteHandler)
  .openapi(getDevicesIdTrafficRoute, getDevicesIdTrafficRouteHandler)
  .openapi(getDevicesIdUsagesRoute, getDevicesIdUsagesRouteHandler)
  .openapi(getDevicesIdUserdataRoute, getDevicesIdUserdataRouteHandler)
  .openapi(
    getDevicesInstanceIdIpsIdCustomdataRoute,
    getDevicesInstanceIdIpsIdCustomdataRouteHandler,
  )
  .openapi(postEmailsRoute, postEmailsRouteHandler)
  .openapi(deleteEmailsIdRoute, deleteEmailsIdRouteHandler)
  .openapi(getEmailsIdRoute, getEmailsIdRouteHandler)
  .openapi(putEmailsIdRoute, putEmailsIdRouteHandler)
  .openapi(getEventsRoute, getEventsRouteHandler)
  .openapi(getEventsIdRoute, getEventsIdRouteHandler)
  .openapi(getFacilitiesRoute, getFacilitiesRouteHandler)
  .openapi(getHardwareReservationsIdRoute, getHardwareReservationsIdRouteHandler)
  .openapi(postHardwareReservationsIdActivateRoute, postHardwareReservationsIdActivateRouteHandler)
  .openapi(postHardwareReservationsIdMoveRoute, postHardwareReservationsIdMoveRouteHandler)
  .openapi(getIncidentsRoute, getIncidentsRouteHandler)
  .openapi(getInvitationsRoute, getInvitationsRouteHandler)
  .openapi(deleteInvitationsIdRoute, deleteInvitationsIdRouteHandler)
  .openapi(getInvitationsIdRoute, getInvitationsIdRouteHandler)
  .openapi(putInvitationsIdRoute, putInvitationsIdRouteHandler)
  .openapi(getInvoicesIdRoute, getInvoicesIdRouteHandler)
  .openapi(deleteIpsIdRoute, deleteIpsIdRouteHandler)
  .openapi(getIpsIdRoute, getIpsIdRouteHandler)
  .openapi(patchIpsIdRoute, patchIpsIdRouteHandler)
  .openapi(getIpsIdAvailableRoute, getIpsIdAvailableRouteHandler)
  .openapi(getIpsIdCustomdataRoute, getIpsIdCustomdataRouteHandler)
  .openapi(deleteLicensesIdRoute, deleteLicensesIdRouteHandler)
  .openapi(getLicensesIdRoute, getLicensesIdRouteHandler)
  .openapi(putLicensesIdRoute, putLicensesIdRouteHandler)
  .openapi(getLocationsMetrosRoute, getLocationsMetrosRouteHandler)
  .openapi(getLocationsMetrosIdRoute, getLocationsMetrosIdRouteHandler)
  .openapi(getMarketSpotPricesRoute, getMarketSpotPricesRouteHandler)
  .openapi(getMarketSpotPricesHistoryRoute, getMarketSpotPricesHistoryRouteHandler)
  .openapi(getMarketSpotPricesMetrosRoute, getMarketSpotPricesMetrosRouteHandler)
  .openapi(deleteMembershipsIdRoute, deleteMembershipsIdRouteHandler)
  .openapi(getMembershipsIdRoute, getMembershipsIdRouteHandler)
  .openapi(putMembershipsIdRoute, putMembershipsIdRouteHandler)
  .openapi(deleteMetalGatewaysIdRoute, deleteMetalGatewaysIdRouteHandler)
  .openapi(getMetalGatewaysIdRoute, getMetalGatewaysIdRouteHandler)
  .openapi(
    getMetalGatewaysIdBgpDynamicNeighborsRoute,
    getMetalGatewaysIdBgpDynamicNeighborsRouteHandler,
  )
  .openapi(
    postMetalGatewaysIdBgpDynamicNeighborsRoute,
    postMetalGatewaysIdBgpDynamicNeighborsRouteHandler,
  )
  .openapi(getMetalGatewaysIdIpsRoute, getMetalGatewaysIdIpsRouteHandler)
  .openapi(postMetalGatewaysIdIpsRoute, postMetalGatewaysIdIpsRouteHandler)
  .openapi(getOperatingSystemVersionsRoute, getOperatingSystemVersionsRouteHandler)
  .openapi(getOperatingSystemsRoute, getOperatingSystemsRouteHandler)
  .openapi(getOrganizationsRoute, getOrganizationsRouteHandler)
  .openapi(postOrganizationsRoute, postOrganizationsRouteHandler)
  .openapi(deleteOrganizationsIdRoute, deleteOrganizationsIdRouteHandler)
  .openapi(getOrganizationsIdRoute, getOrganizationsIdRouteHandler)
  .openapi(putOrganizationsIdRoute, putOrganizationsIdRouteHandler)
  .openapi(getOrganizationsIdCapacityRoute, getOrganizationsIdCapacityRouteHandler)
  .openapi(getOrganizationsIdCapacityMetrosRoute, getOrganizationsIdCapacityMetrosRouteHandler)
  .openapi(getOrganizationsIdCustomdataRoute, getOrganizationsIdCustomdataRouteHandler)
  .openapi(getOrganizationsIdDevicesRoute, getOrganizationsIdDevicesRouteHandler)
  .openapi(getOrganizationsIdEventsRoute, getOrganizationsIdEventsRouteHandler)
  .openapi(getOrganizationsIdFacilitiesRoute, getOrganizationsIdFacilitiesRouteHandler)
  .openapi(getOrganizationsIdFirmwareSetsRoute, getOrganizationsIdFirmwareSetsRouteHandler)
  .openapi(getOrganizationsIdInvitationsRoute, getOrganizationsIdInvitationsRouteHandler)
  .openapi(postOrganizationsIdInvitationsRoute, postOrganizationsIdInvitationsRouteHandler)
  .openapi(getOrganizationsIdInvoicesRoute, getOrganizationsIdInvoicesRouteHandler)
  .openapi(getOrganizationsIdOperatingSystemsRoute, getOrganizationsIdOperatingSystemsRouteHandler)
  .openapi(getOrganizationsIdPaymentMethodsRoute, getOrganizationsIdPaymentMethodsRouteHandler)
  .openapi(postOrganizationsIdPaymentMethodsRoute, postOrganizationsIdPaymentMethodsRouteHandler)
  .openapi(getOrganizationsIdPlansRoute, getOrganizationsIdPlansRouteHandler)
  .openapi(getOrganizationsIdProjectsRoute, getOrganizationsIdProjectsRouteHandler)
  .openapi(postOrganizationsIdProjectsRoute, postOrganizationsIdProjectsRouteHandler)
  .openapi(getOrganizationsIdTransfersRoute, getOrganizationsIdTransfersRouteHandler)
  .openapi(
    getOrganizationsOrganizationIdConnectionsRoute,
    getOrganizationsOrganizationIdConnectionsRouteHandler,
  )
  .openapi(
    postOrganizationsOrganizationIdConnectionsRoute,
    postOrganizationsOrganizationIdConnectionsRouteHandler,
  )
  .openapi(deletePaymentMethodsIdRoute, deletePaymentMethodsIdRouteHandler)
  .openapi(getPaymentMethodsIdRoute, getPaymentMethodsIdRouteHandler)
  .openapi(putPaymentMethodsIdRoute, putPaymentMethodsIdRouteHandler)
  .openapi(getPlansRoute, getPlansRouteHandler)
  .openapi(getPortsIdRoute, getPortsIdRouteHandler)
  .openapi(postPortsIdAssignRoute, postPortsIdAssignRouteHandler)
  .openapi(postPortsIdBondRoute, postPortsIdBondRouteHandler)
  .openapi(postPortsIdConvertLayer2Route, postPortsIdConvertLayer2RouteHandler)
  .openapi(postPortsIdConvertLayer3Route, postPortsIdConvertLayer3RouteHandler)
  .openapi(postPortsIdDisbondRoute, postPortsIdDisbondRouteHandler)
  .openapi(deletePortsIdNativeVlanRoute, deletePortsIdNativeVlanRouteHandler)
  .openapi(postPortsIdNativeVlanRoute, postPortsIdNativeVlanRouteHandler)
  .openapi(postPortsIdUnassignRoute, postPortsIdUnassignRouteHandler)
  .openapi(getPortsIdVlanAssignmentsRoute, getPortsIdVlanAssignmentsRouteHandler)
  .openapi(
    getPortsIdVlanAssignmentsAssignmentIdRoute,
    getPortsIdVlanAssignmentsAssignmentIdRouteHandler,
  )
  .openapi(getPortsIdVlanAssignmentsBatchesRoute, getPortsIdVlanAssignmentsBatchesRouteHandler)
  .openapi(postPortsIdVlanAssignmentsBatchesRoute, postPortsIdVlanAssignmentsBatchesRouteHandler)
  .openapi(
    getPortsIdVlanAssignmentsBatchesBatchIdRoute,
    getPortsIdVlanAssignmentsBatchesBatchIdRouteHandler,
  )
  .openapi(getProjectsRoute, getProjectsRouteHandler)
  .openapi(postProjectsRoute, postProjectsRouteHandler)
  .openapi(deleteProjectsIdRoute, deleteProjectsIdRouteHandler)
  .openapi(getProjectsIdRoute, getProjectsIdRouteHandler)
  .openapi(putProjectsIdRoute, putProjectsIdRouteHandler)
  .openapi(getProjectsIdApiKeysRoute, getProjectsIdApiKeysRouteHandler)
  .openapi(postProjectsIdApiKeysRoute, postProjectsIdApiKeysRouteHandler)
  .openapi(getProjectsIdBatchesRoute, getProjectsIdBatchesRouteHandler)
  .openapi(getProjectsIdBgpConfigRoute, getProjectsIdBgpConfigRouteHandler)
  .openapi(postProjectsIdBgpConfigsRoute, postProjectsIdBgpConfigsRouteHandler)
  .openapi(getProjectsIdBgpSessionsRoute, getProjectsIdBgpSessionsRouteHandler)
  .openapi(getProjectsIdCustomdataRoute, getProjectsIdCustomdataRouteHandler)
  .openapi(getProjectsIdDevicesRoute, getProjectsIdDevicesRouteHandler)
  .openapi(postProjectsIdDevicesRoute, postProjectsIdDevicesRouteHandler)
  .openapi(postProjectsIdDevicesBatchRoute, postProjectsIdDevicesBatchRouteHandler)
  .openapi(getProjectsIdEventsRoute, getProjectsIdEventsRouteHandler)
  .openapi(getProjectsIdFacilitiesRoute, getProjectsIdFacilitiesRouteHandler)
  .openapi(getProjectsIdFirmwareSetsRoute, getProjectsIdFirmwareSetsRouteHandler)
  .openapi(getProjectsIdGlobalBgpRangesRoute, getProjectsIdGlobalBgpRangesRouteHandler)
  .openapi(getProjectsIdHardwareReservationsRoute, getProjectsIdHardwareReservationsRouteHandler)
  .openapi(getProjectsIdIpsRoute, getProjectsIdIpsRouteHandler)
  .openapi(postProjectsIdIpsRoute, postProjectsIdIpsRouteHandler)
  .openapi(getProjectsIdLicensesRoute, getProjectsIdLicensesRouteHandler)
  .openapi(postProjectsIdLicensesRoute, postProjectsIdLicensesRouteHandler)
  .openapi(getProjectsIdPlansRoute, getProjectsIdPlansRouteHandler)
  .openapi(getProjectsIdSpotMarketRequestsRoute, getProjectsIdSpotMarketRequestsRouteHandler)
  .openapi(postProjectsIdSpotMarketRequestsRoute, postProjectsIdSpotMarketRequestsRouteHandler)
  .openapi(getProjectsIdSshKeysRoute, getProjectsIdSshKeysRouteHandler)
  .openapi(postProjectsIdSshKeysRoute, postProjectsIdSshKeysRouteHandler)
  .openapi(postProjectsIdTransfersRoute, postProjectsIdTransfersRouteHandler)
  .openapi(getProjectsIdUsagesRoute, getProjectsIdUsagesRouteHandler)
  .openapi(getProjectsIdVirtualNetworksRoute, getProjectsIdVirtualNetworksRouteHandler)
  .openapi(postProjectsIdVirtualNetworksRoute, postProjectsIdVirtualNetworksRouteHandler)
  .openapi(getProjectsIdVrfsRoute, getProjectsIdVrfsRouteHandler)
  .openapi(postProjectsIdVrfsRoute, postProjectsIdVrfsRouteHandler)
  .openapi(getProjectsProjectIdConnectionsRoute, getProjectsProjectIdConnectionsRouteHandler)
  .openapi(postProjectsProjectIdConnectionsRoute, postProjectsProjectIdConnectionsRouteHandler)
  .openapi(getProjectsProjectIdInvitationsRoute, getProjectsProjectIdInvitationsRouteHandler)
  .openapi(postProjectsProjectIdInvitationsRoute, postProjectsProjectIdInvitationsRouteHandler)
  .openapi(
    getProjectsProjectIdIpsIdCustomdataRoute,
    getProjectsProjectIdIpsIdCustomdataRouteHandler,
  )
  .openapi(getProjectsProjectIdMembershipsRoute, getProjectsProjectIdMembershipsRouteHandler)
  .openapi(getProjectsProjectIdMetalGatewaysRoute, getProjectsProjectIdMetalGatewaysRouteHandler)
  .openapi(postProjectsProjectIdMetalGatewaysRoute, postProjectsProjectIdMetalGatewaysRouteHandler)
  .openapi(
    getProjectsProjectIdSelfServiceReservationsRoute,
    getProjectsProjectIdSelfServiceReservationsRouteHandler,
  )
  .openapi(
    postProjectsProjectIdSelfServiceReservationsRoute,
    postProjectsProjectIdSelfServiceReservationsRouteHandler,
  )
  .openapi(
    getProjectsProjectIdSelfServiceReservationsIdRoute,
    getProjectsProjectIdSelfServiceReservationsIdRouteHandler,
  )
  .openapi(deleteResetPasswordRoute, deleteResetPasswordRouteHandler)
  .openapi(postResetPasswordRoute, postResetPasswordRouteHandler)
  .openapi(deleteRoutesIdRoute, deleteRoutesIdRouteHandler)
  .openapi(getRoutesIdRoute, getRoutesIdRouteHandler)
  .openapi(putRoutesIdRoute, putRoutesIdRouteHandler)
  .openapi(getRoutesIdEventsRoute, getRoutesIdEventsRouteHandler)
  .openapi(deleteSpotMarketRequestsIdRoute, deleteSpotMarketRequestsIdRouteHandler)
  .openapi(getSpotMarketRequestsIdRoute, getSpotMarketRequestsIdRouteHandler)
  .openapi(getSshKeysRoute, getSshKeysRouteHandler)
  .openapi(postSshKeysRoute, postSshKeysRouteHandler)
  .openapi(deleteSshKeysIdRoute, deleteSshKeysIdRouteHandler)
  .openapi(getSshKeysIdRoute, getSshKeysIdRouteHandler)
  .openapi(putSshKeysIdRoute, putSshKeysIdRouteHandler)
  .openapi(postSupportRequestsRoute, postSupportRequestsRouteHandler)
  .openapi(deleteTransfersIdRoute, deleteTransfersIdRouteHandler)
  .openapi(getTransfersIdRoute, getTransfersIdRouteHandler)
  .openapi(putTransfersIdRoute, putTransfersIdRouteHandler)
  .openapi(getUserRoute, getUserRouteHandler)
  .openapi(putUserRoute, putUserRouteHandler)
  .openapi(getUserApiKeysRoute, getUserApiKeysRouteHandler)
  .openapi(postUserApiKeysRoute, postUserApiKeysRouteHandler)
  .openapi(deleteUserApiKeysIdRoute, deleteUserApiKeysIdRouteHandler)
  .openapi(deleteUserOtpAppRoute, deleteUserOtpAppRouteHandler)
  .openapi(postUserOtpAppRoute, postUserOtpAppRouteHandler)
  .openapi(getUserOtpRecoveryCodesRoute, getUserOtpRecoveryCodesRouteHandler)
  .openapi(postUserOtpRecoveryCodesRoute, postUserOtpRecoveryCodesRouteHandler)
  .openapi(deleteUserOtpSmsRoute, deleteUserOtpSmsRouteHandler)
  .openapi(postUserOtpSmsRoute, postUserOtpSmsRouteHandler)
  .openapi(postUserOtpSmsReceiveRoute, postUserOtpSmsReceiveRouteHandler)
  .openapi(postUserOtpVerifyOtpRoute, postUserOtpVerifyOtpRouteHandler)
  .openapi(postUserdataValidateRoute, postUserdataValidateRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(getUsersIdRoute, getUsersIdRouteHandler)
  .openapi(getUsersIdCustomdataRoute, getUsersIdCustomdataRouteHandler)
  .openapi(postVerifyEmailRoute, postVerifyEmailRouteHandler)
  .openapi(putVerifyEmailRoute, putVerifyEmailRouteHandler)
  .openapi(getVirtualCircuitsIdEventsRoute, getVirtualCircuitsIdEventsRouteHandler)
  .openapi(deleteVirtualCircuitsIdRoute, deleteVirtualCircuitsIdRouteHandler)
  .openapi(getVirtualCircuitsIdRoute, getVirtualCircuitsIdRouteHandler)
  .openapi(putVirtualCircuitsIdRoute, putVirtualCircuitsIdRouteHandler)
  .openapi(deleteVirtualNetworksIdRoute, deleteVirtualNetworksIdRouteHandler)
  .openapi(getVirtualNetworksIdRoute, getVirtualNetworksIdRouteHandler)
  .openapi(deleteVrfsIdRoute, deleteVrfsIdRouteHandler)
  .openapi(getVrfsIdRoute, getVrfsIdRouteHandler)
  .openapi(putVrfsIdRoute, putVrfsIdRouteHandler)
  .openapi(getVrfsIdIpsRoute, getVrfsIdIpsRouteHandler)
  .openapi(getVrfsVrfIdIpsIdRoute, getVrfsVrfIdIpsIdRouteHandler)
  .openapi(getVrfsIdRoutesRoute, getVrfsIdRoutesRouteHandler)
  .openapi(postVrfsIdRoutesRoute, postVrfsIdRoutesRouteHandler)

export default app
