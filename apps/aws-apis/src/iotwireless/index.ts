import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDestinationsNameRoute,
  deleteDeviceProfilesIdRoute,
  deleteFuotaTasksIdMulticastGroupsMulticastGroupIdRoute,
  deleteFuotaTasksIdRoute,
  deleteFuotaTasksIdWirelessDevicesWirelessDeviceIdRoute,
  deleteLogLevelsResourceIdentifierResourceTypeRoute,
  deleteLogLevelsRoute,
  deleteMulticastGroupsIdRoute,
  deleteMulticastGroupsIdSessionRoute,
  deleteMulticastGroupsIdWirelessDevicesWirelessDeviceIdRoute,
  deleteNetworkAnalyzerConfigurationsConfigurationNameRoute,
  deletePartnerAccountsPartnerAccountIdPartnerTypeRoute,
  deleteServiceProfilesIdRoute,
  deleteTagsResourceArnTagKeysRoute,
  deleteWirelessDeviceImportTaskIdRoute,
  deleteWirelessDevicesIdDataMessageIdRoute,
  deleteWirelessDevicesIdRoute,
  deleteWirelessDevicesIdThingRoute,
  deleteWirelessGatewaysIdCertificateRoute,
  deleteWirelessGatewaysIdRoute,
  deleteWirelessGatewaysIdTasksRoute,
  deleteWirelessGatewaysIdThingRoute,
  deleteWirelessGatewayTaskDefinitionsIdRoute,
  getDestinationsNameRoute,
  getDestinationsRoute,
  getDeviceProfilesIdRoute,
  getDeviceProfilesRoute,
  getEventConfigurationsIdentifierIdentifierTypeRoute,
  getEventConfigurationsResourceTypeRoute,
  getEventConfigurationsResourceTypesRoute,
  getFuotaTasksIdMulticastGroupsRoute,
  getFuotaTasksIdRoute,
  getFuotaTasksRoute,
  getLogLevelsResourceIdentifierResourceTypeRoute,
  getLogLevelsRoute,
  getMulticastGroupsIdRoute,
  getMulticastGroupsIdSessionRoute,
  getMulticastGroupsRoute,
  getNetworkAnalyzerConfigurationsConfigurationNameRoute,
  getNetworkAnalyzerConfigurationsRoute,
  getPartnerAccountsPartnerAccountIdPartnerTypeRoute,
  getPartnerAccountsRoute,
  getPositionConfigurationsResourceIdentifierResourceTypeRoute,
  getPositionConfigurationsRoute,
  getPositionsResourceIdentifierResourceTypeRoute,
  getResourcePositionsResourceIdentifierResourceTypeRoute,
  getServiceEndpointRoute,
  getServiceProfilesIdRoute,
  getServiceProfilesRoute,
  getTagsResourceArnRoute,
  getWirelessDeviceImportTaskId2Route,
  getWirelessDeviceImportTaskIdRoute,
  getWirelessDeviceImportTasksRoute,
  getWirelessDevicesIdDataRoute,
  getWirelessDevicesIdentifierIdentifierTypeRoute,
  getWirelessDevicesIdStatisticsRoute,
  getWirelessDevicesRoute,
  getWirelessGatewaysIdCertificateRoute,
  getWirelessGatewaysIdentifierIdentifierTypeRoute,
  getWirelessGatewaysIdFirmwareInformationRoute,
  getWirelessGatewaysIdStatisticsRoute,
  getWirelessGatewaysIdTasksRoute,
  getWirelessGatewaysRoute,
  getWirelessGatewayTaskDefinitionsIdRoute,
  getWirelessGatewayTaskDefinitionsRoute,
  patchDestinationsNameRoute,
  patchEventConfigurationsIdentifierIdentifierTypeRoute,
  patchEventConfigurationsResourceTypesRoute,
  patchFuotaTasksIdRoute,
  patchMulticastGroupsIdBulkRoute,
  patchMulticastGroupsIdRoute,
  patchNetworkAnalyzerConfigurationsConfigurationNameRoute,
  patchPartnerAccountsPartnerAccountIdPartnerTypeRoute,
  patchPositionsResourceIdentifierResourceTypeRoute,
  patchResourcePositionsResourceIdentifierResourceTypeRoute,
  patchWirelessDeviceImportTaskIdRoute,
  patchWirelessDevicesIdentifierDeregisterRoute,
  patchWirelessDevicesIdRoute,
  patchWirelessGatewaysIdRoute,
  postDestinationsRoute,
  postDeviceProfilesRoute,
  postFuotaTasksRoute,
  postLogLevelsRoute,
  postMulticastGroupsIdBulkRoute,
  postMulticastGroupsIdDataRoute,
  postMulticastGroupsRoute,
  postNetworkAnalyzerConfigurationsRoute,
  postPartnerAccountsRoute,
  postPositionEstimateRoute,
  postServiceProfilesRoute,
  postTagsResourceArnRoute,
  postWirelessDeviceImportTaskRoute,
  postWirelessDevicesIdDataRoute,
  postWirelessDevicesIdTestRoute,
  postWirelessDevicesRoute,
  postWirelessGatewaysIdTasksRoute,
  postWirelessGatewaysRoute,
  postWirelessGatewayTaskDefinitionsRoute,
  postWirelessSingleDeviceImportTaskRoute,
  putFuotaTasksIdMulticastGroupRoute,
  putFuotaTasksIdRoute,
  putFuotaTasksIdWirelessDeviceRoute,
  putLogLevelsResourceIdentifierResourceTypeRoute,
  putMulticastGroupsIdSessionRoute,
  putMulticastGroupsIdWirelessDeviceRoute,
  putPositionConfigurationsResourceIdentifierResourceTypeRoute,
  putWirelessDevicesIdThingRoute,
  putWirelessGatewaysIdCertificateRoute,
  putWirelessGatewaysIdThingRoute,
} from './routes'
import {
  deleteDestinationsNameRouteHandler,
  deleteDeviceProfilesIdRouteHandler,
  deleteFuotaTasksIdMulticastGroupsMulticastGroupIdRouteHandler,
  deleteFuotaTasksIdRouteHandler,
  deleteFuotaTasksIdWirelessDevicesWirelessDeviceIdRouteHandler,
  deleteLogLevelsResourceIdentifierResourceTypeRouteHandler,
  deleteLogLevelsRouteHandler,
  deleteMulticastGroupsIdRouteHandler,
  deleteMulticastGroupsIdSessionRouteHandler,
  deleteMulticastGroupsIdWirelessDevicesWirelessDeviceIdRouteHandler,
  deleteNetworkAnalyzerConfigurationsConfigurationNameRouteHandler,
  deletePartnerAccountsPartnerAccountIdPartnerTypeRouteHandler,
  deleteServiceProfilesIdRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  deleteWirelessDeviceImportTaskIdRouteHandler,
  deleteWirelessDevicesIdDataMessageIdRouteHandler,
  deleteWirelessDevicesIdRouteHandler,
  deleteWirelessDevicesIdThingRouteHandler,
  deleteWirelessGatewaysIdCertificateRouteHandler,
  deleteWirelessGatewaysIdRouteHandler,
  deleteWirelessGatewaysIdTasksRouteHandler,
  deleteWirelessGatewaysIdThingRouteHandler,
  deleteWirelessGatewayTaskDefinitionsIdRouteHandler,
  getDestinationsNameRouteHandler,
  getDestinationsRouteHandler,
  getDeviceProfilesIdRouteHandler,
  getDeviceProfilesRouteHandler,
  getEventConfigurationsIdentifierIdentifierTypeRouteHandler,
  getEventConfigurationsResourceTypeRouteHandler,
  getEventConfigurationsResourceTypesRouteHandler,
  getFuotaTasksIdMulticastGroupsRouteHandler,
  getFuotaTasksIdRouteHandler,
  getFuotaTasksRouteHandler,
  getLogLevelsResourceIdentifierResourceTypeRouteHandler,
  getLogLevelsRouteHandler,
  getMulticastGroupsIdRouteHandler,
  getMulticastGroupsIdSessionRouteHandler,
  getMulticastGroupsRouteHandler,
  getNetworkAnalyzerConfigurationsConfigurationNameRouteHandler,
  getNetworkAnalyzerConfigurationsRouteHandler,
  getPartnerAccountsPartnerAccountIdPartnerTypeRouteHandler,
  getPartnerAccountsRouteHandler,
  getPositionConfigurationsResourceIdentifierResourceTypeRouteHandler,
  getPositionConfigurationsRouteHandler,
  getPositionsResourceIdentifierResourceTypeRouteHandler,
  getResourcePositionsResourceIdentifierResourceTypeRouteHandler,
  getServiceEndpointRouteHandler,
  getServiceProfilesIdRouteHandler,
  getServiceProfilesRouteHandler,
  getTagsResourceArnRouteHandler,
  getWirelessDeviceImportTaskId2RouteHandler,
  getWirelessDeviceImportTaskIdRouteHandler,
  getWirelessDeviceImportTasksRouteHandler,
  getWirelessDevicesIdDataRouteHandler,
  getWirelessDevicesIdentifierIdentifierTypeRouteHandler,
  getWirelessDevicesIdStatisticsRouteHandler,
  getWirelessDevicesRouteHandler,
  getWirelessGatewaysIdCertificateRouteHandler,
  getWirelessGatewaysIdentifierIdentifierTypeRouteHandler,
  getWirelessGatewaysIdFirmwareInformationRouteHandler,
  getWirelessGatewaysIdStatisticsRouteHandler,
  getWirelessGatewaysIdTasksRouteHandler,
  getWirelessGatewaysRouteHandler,
  getWirelessGatewayTaskDefinitionsIdRouteHandler,
  getWirelessGatewayTaskDefinitionsRouteHandler,
  patchDestinationsNameRouteHandler,
  patchEventConfigurationsIdentifierIdentifierTypeRouteHandler,
  patchEventConfigurationsResourceTypesRouteHandler,
  patchFuotaTasksIdRouteHandler,
  patchMulticastGroupsIdBulkRouteHandler,
  patchMulticastGroupsIdRouteHandler,
  patchNetworkAnalyzerConfigurationsConfigurationNameRouteHandler,
  patchPartnerAccountsPartnerAccountIdPartnerTypeRouteHandler,
  patchPositionsResourceIdentifierResourceTypeRouteHandler,
  patchResourcePositionsResourceIdentifierResourceTypeRouteHandler,
  patchWirelessDeviceImportTaskIdRouteHandler,
  patchWirelessDevicesIdentifierDeregisterRouteHandler,
  patchWirelessDevicesIdRouteHandler,
  patchWirelessGatewaysIdRouteHandler,
  postDestinationsRouteHandler,
  postDeviceProfilesRouteHandler,
  postFuotaTasksRouteHandler,
  postLogLevelsRouteHandler,
  postMulticastGroupsIdBulkRouteHandler,
  postMulticastGroupsIdDataRouteHandler,
  postMulticastGroupsRouteHandler,
  postNetworkAnalyzerConfigurationsRouteHandler,
  postPartnerAccountsRouteHandler,
  postPositionEstimateRouteHandler,
  postServiceProfilesRouteHandler,
  postTagsResourceArnRouteHandler,
  postWirelessDeviceImportTaskRouteHandler,
  postWirelessDevicesIdDataRouteHandler,
  postWirelessDevicesIdTestRouteHandler,
  postWirelessDevicesRouteHandler,
  postWirelessGatewaysIdTasksRouteHandler,
  postWirelessGatewaysRouteHandler,
  postWirelessGatewayTaskDefinitionsRouteHandler,
  postWirelessSingleDeviceImportTaskRouteHandler,
  putFuotaTasksIdMulticastGroupRouteHandler,
  putFuotaTasksIdRouteHandler,
  putFuotaTasksIdWirelessDeviceRouteHandler,
  putLogLevelsResourceIdentifierResourceTypeRouteHandler,
  putMulticastGroupsIdSessionRouteHandler,
  putMulticastGroupsIdWirelessDeviceRouteHandler,
  putPositionConfigurationsResourceIdentifierResourceTypeRouteHandler,
  putWirelessDevicesIdThingRouteHandler,
  putWirelessGatewaysIdCertificateRouteHandler,
  putWirelessGatewaysIdThingRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postPartnerAccountsRoute, postPartnerAccountsRouteHandler)
  .openapi(getPartnerAccountsRoute, getPartnerAccountsRouteHandler)
  .openapi(putFuotaTasksIdMulticastGroupRoute, putFuotaTasksIdMulticastGroupRouteHandler)
  .openapi(putFuotaTasksIdWirelessDeviceRoute, putFuotaTasksIdWirelessDeviceRouteHandler)
  .openapi(putMulticastGroupsIdWirelessDeviceRoute, putMulticastGroupsIdWirelessDeviceRouteHandler)
  .openapi(putWirelessDevicesIdThingRoute, putWirelessDevicesIdThingRouteHandler)
  .openapi(deleteWirelessDevicesIdThingRoute, deleteWirelessDevicesIdThingRouteHandler)
  .openapi(putWirelessGatewaysIdCertificateRoute, putWirelessGatewaysIdCertificateRouteHandler)
  .openapi(
    deleteWirelessGatewaysIdCertificateRoute,
    deleteWirelessGatewaysIdCertificateRouteHandler,
  )
  .openapi(getWirelessGatewaysIdCertificateRoute, getWirelessGatewaysIdCertificateRouteHandler)
  .openapi(putWirelessGatewaysIdThingRoute, putWirelessGatewaysIdThingRouteHandler)
  .openapi(deleteWirelessGatewaysIdThingRoute, deleteWirelessGatewaysIdThingRouteHandler)
  .openapi(deleteMulticastGroupsIdSessionRoute, deleteMulticastGroupsIdSessionRouteHandler)
  .openapi(getMulticastGroupsIdSessionRoute, getMulticastGroupsIdSessionRouteHandler)
  .openapi(putMulticastGroupsIdSessionRoute, putMulticastGroupsIdSessionRouteHandler)
  .openapi(postDestinationsRoute, postDestinationsRouteHandler)
  .openapi(getDestinationsRoute, getDestinationsRouteHandler)
  .openapi(postDeviceProfilesRoute, postDeviceProfilesRouteHandler)
  .openapi(getDeviceProfilesRoute, getDeviceProfilesRouteHandler)
  .openapi(postFuotaTasksRoute, postFuotaTasksRouteHandler)
  .openapi(getFuotaTasksRoute, getFuotaTasksRouteHandler)
  .openapi(postMulticastGroupsRoute, postMulticastGroupsRouteHandler)
  .openapi(getMulticastGroupsRoute, getMulticastGroupsRouteHandler)
  .openapi(postNetworkAnalyzerConfigurationsRoute, postNetworkAnalyzerConfigurationsRouteHandler)
  .openapi(getNetworkAnalyzerConfigurationsRoute, getNetworkAnalyzerConfigurationsRouteHandler)
  .openapi(postServiceProfilesRoute, postServiceProfilesRouteHandler)
  .openapi(getServiceProfilesRoute, getServiceProfilesRouteHandler)
  .openapi(postWirelessDevicesRoute, postWirelessDevicesRouteHandler)
  .openapi(getWirelessDevicesRoute, getWirelessDevicesRouteHandler)
  .openapi(postWirelessGatewaysRoute, postWirelessGatewaysRouteHandler)
  .openapi(getWirelessGatewaysRoute, getWirelessGatewaysRouteHandler)
  .openapi(postWirelessGatewaysIdTasksRoute, postWirelessGatewaysIdTasksRouteHandler)
  .openapi(deleteWirelessGatewaysIdTasksRoute, deleteWirelessGatewaysIdTasksRouteHandler)
  .openapi(getWirelessGatewaysIdTasksRoute, getWirelessGatewaysIdTasksRouteHandler)
  .openapi(postWirelessGatewayTaskDefinitionsRoute, postWirelessGatewayTaskDefinitionsRouteHandler)
  .openapi(getWirelessGatewayTaskDefinitionsRoute, getWirelessGatewayTaskDefinitionsRouteHandler)
  .openapi(deleteDestinationsNameRoute, deleteDestinationsNameRouteHandler)
  .openapi(getDestinationsNameRoute, getDestinationsNameRouteHandler)
  .openapi(patchDestinationsNameRoute, patchDestinationsNameRouteHandler)
  .openapi(deleteDeviceProfilesIdRoute, deleteDeviceProfilesIdRouteHandler)
  .openapi(getDeviceProfilesIdRoute, getDeviceProfilesIdRouteHandler)
  .openapi(deleteFuotaTasksIdRoute, deleteFuotaTasksIdRouteHandler)
  .openapi(getFuotaTasksIdRoute, getFuotaTasksIdRouteHandler)
  .openapi(putFuotaTasksIdRoute, putFuotaTasksIdRouteHandler)
  .openapi(patchFuotaTasksIdRoute, patchFuotaTasksIdRouteHandler)
  .openapi(deleteMulticastGroupsIdRoute, deleteMulticastGroupsIdRouteHandler)
  .openapi(getMulticastGroupsIdRoute, getMulticastGroupsIdRouteHandler)
  .openapi(patchMulticastGroupsIdRoute, patchMulticastGroupsIdRouteHandler)
  .openapi(
    deleteNetworkAnalyzerConfigurationsConfigurationNameRoute,
    deleteNetworkAnalyzerConfigurationsConfigurationNameRouteHandler,
  )
  .openapi(
    getNetworkAnalyzerConfigurationsConfigurationNameRoute,
    getNetworkAnalyzerConfigurationsConfigurationNameRouteHandler,
  )
  .openapi(
    patchNetworkAnalyzerConfigurationsConfigurationNameRoute,
    patchNetworkAnalyzerConfigurationsConfigurationNameRouteHandler,
  )
  .openapi(
    deleteWirelessDevicesIdDataMessageIdRoute,
    deleteWirelessDevicesIdDataMessageIdRouteHandler,
  )
  .openapi(deleteServiceProfilesIdRoute, deleteServiceProfilesIdRouteHandler)
  .openapi(getServiceProfilesIdRoute, getServiceProfilesIdRouteHandler)
  .openapi(deleteWirelessDevicesIdRoute, deleteWirelessDevicesIdRouteHandler)
  .openapi(patchWirelessDevicesIdRoute, patchWirelessDevicesIdRouteHandler)
  .openapi(deleteWirelessDeviceImportTaskIdRoute, deleteWirelessDeviceImportTaskIdRouteHandler)
  .openapi(getWirelessDeviceImportTaskIdRoute, getWirelessDeviceImportTaskIdRouteHandler)
  .openapi(patchWirelessDeviceImportTaskIdRoute, patchWirelessDeviceImportTaskIdRouteHandler)
  .openapi(deleteWirelessGatewaysIdRoute, deleteWirelessGatewaysIdRouteHandler)
  .openapi(patchWirelessGatewaysIdRoute, patchWirelessGatewaysIdRouteHandler)
  .openapi(
    deleteWirelessGatewayTaskDefinitionsIdRoute,
    deleteWirelessGatewayTaskDefinitionsIdRouteHandler,
  )
  .openapi(
    getWirelessGatewayTaskDefinitionsIdRoute,
    getWirelessGatewayTaskDefinitionsIdRouteHandler,
  )
  .openapi(
    patchWirelessDevicesIdentifierDeregisterRoute,
    patchWirelessDevicesIdentifierDeregisterRouteHandler,
  )
  .openapi(
    deletePartnerAccountsPartnerAccountIdPartnerTypeRoute,
    deletePartnerAccountsPartnerAccountIdPartnerTypeRouteHandler,
  )
  .openapi(
    getPartnerAccountsPartnerAccountIdPartnerTypeRoute,
    getPartnerAccountsPartnerAccountIdPartnerTypeRouteHandler,
  )
  .openapi(
    patchPartnerAccountsPartnerAccountIdPartnerTypeRoute,
    patchPartnerAccountsPartnerAccountIdPartnerTypeRouteHandler,
  )
  .openapi(
    deleteFuotaTasksIdMulticastGroupsMulticastGroupIdRoute,
    deleteFuotaTasksIdMulticastGroupsMulticastGroupIdRouteHandler,
  )
  .openapi(
    deleteFuotaTasksIdWirelessDevicesWirelessDeviceIdRoute,
    deleteFuotaTasksIdWirelessDevicesWirelessDeviceIdRouteHandler,
  )
  .openapi(
    deleteMulticastGroupsIdWirelessDevicesWirelessDeviceIdRoute,
    deleteMulticastGroupsIdWirelessDevicesWirelessDeviceIdRouteHandler,
  )
  .openapi(
    getEventConfigurationsResourceTypesRoute,
    getEventConfigurationsResourceTypesRouteHandler,
  )
  .openapi(
    patchEventConfigurationsResourceTypesRoute,
    patchEventConfigurationsResourceTypesRouteHandler,
  )
  .openapi(getLogLevelsRoute, getLogLevelsRouteHandler)
  .openapi(deleteLogLevelsRoute, deleteLogLevelsRouteHandler)
  .openapi(postLogLevelsRoute, postLogLevelsRouteHandler)
  .openapi(
    getPositionsResourceIdentifierResourceTypeRoute,
    getPositionsResourceIdentifierResourceTypeRouteHandler,
  )
  .openapi(
    patchPositionsResourceIdentifierResourceTypeRoute,
    patchPositionsResourceIdentifierResourceTypeRouteHandler,
  )
  .openapi(
    getPositionConfigurationsResourceIdentifierResourceTypeRoute,
    getPositionConfigurationsResourceIdentifierResourceTypeRouteHandler,
  )
  .openapi(
    putPositionConfigurationsResourceIdentifierResourceTypeRoute,
    putPositionConfigurationsResourceIdentifierResourceTypeRouteHandler,
  )
  .openapi(postPositionEstimateRoute, postPositionEstimateRouteHandler)
  .openapi(
    getEventConfigurationsIdentifierIdentifierTypeRoute,
    getEventConfigurationsIdentifierIdentifierTypeRouteHandler,
  )
  .openapi(
    patchEventConfigurationsIdentifierIdentifierTypeRoute,
    patchEventConfigurationsIdentifierIdentifierTypeRouteHandler,
  )
  .openapi(
    getLogLevelsResourceIdentifierResourceTypeRoute,
    getLogLevelsResourceIdentifierResourceTypeRouteHandler,
  )
  .openapi(
    putLogLevelsResourceIdentifierResourceTypeRoute,
    putLogLevelsResourceIdentifierResourceTypeRouteHandler,
  )
  .openapi(
    deleteLogLevelsResourceIdentifierResourceTypeRoute,
    deleteLogLevelsResourceIdentifierResourceTypeRouteHandler,
  )
  .openapi(
    getResourcePositionsResourceIdentifierResourceTypeRoute,
    getResourcePositionsResourceIdentifierResourceTypeRouteHandler,
  )
  .openapi(
    patchResourcePositionsResourceIdentifierResourceTypeRoute,
    patchResourcePositionsResourceIdentifierResourceTypeRouteHandler,
  )
  .openapi(getServiceEndpointRoute, getServiceEndpointRouteHandler)
  .openapi(
    getWirelessDevicesIdentifierIdentifierTypeRoute,
    getWirelessDevicesIdentifierIdentifierTypeRouteHandler,
  )
  .openapi(getWirelessDevicesIdStatisticsRoute, getWirelessDevicesIdStatisticsRouteHandler)
  .openapi(
    getWirelessGatewaysIdentifierIdentifierTypeRoute,
    getWirelessGatewaysIdentifierIdentifierTypeRouteHandler,
  )
  .openapi(
    getWirelessGatewaysIdFirmwareInformationRoute,
    getWirelessGatewaysIdFirmwareInformationRouteHandler,
  )
  .openapi(getWirelessGatewaysIdStatisticsRoute, getWirelessGatewaysIdStatisticsRouteHandler)
  .openapi(getWirelessDeviceImportTaskId2Route, getWirelessDeviceImportTaskId2RouteHandler)
  .openapi(getEventConfigurationsResourceTypeRoute, getEventConfigurationsResourceTypeRouteHandler)
  .openapi(getFuotaTasksIdMulticastGroupsRoute, getFuotaTasksIdMulticastGroupsRouteHandler)
  .openapi(getPositionConfigurationsRoute, getPositionConfigurationsRouteHandler)
  .openapi(getWirelessDevicesIdDataRoute, getWirelessDevicesIdDataRouteHandler)
  .openapi(postWirelessDevicesIdDataRoute, postWirelessDevicesIdDataRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(getWirelessDeviceImportTasksRoute, getWirelessDeviceImportTasksRouteHandler)
  .openapi(postMulticastGroupsIdDataRoute, postMulticastGroupsIdDataRouteHandler)
  .openapi(patchMulticastGroupsIdBulkRoute, patchMulticastGroupsIdBulkRouteHandler)
  .openapi(postMulticastGroupsIdBulkRoute, postMulticastGroupsIdBulkRouteHandler)
  .openapi(postWirelessSingleDeviceImportTaskRoute, postWirelessSingleDeviceImportTaskRouteHandler)
  .openapi(postWirelessDeviceImportTaskRoute, postWirelessDeviceImportTaskRouteHandler)
  .openapi(postWirelessDevicesIdTestRoute, postWirelessDevicesIdTestRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app
