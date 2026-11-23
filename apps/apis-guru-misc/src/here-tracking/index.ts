import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAliasesV2TrackingId2Route,
  deleteAliasesV2TrackingIdTypeExternalIdRoute,
  deleteAliasesV2TrackingIdTypeRoute,
  deleteAssociationsV3TrackingIdGeofencesGeofenceIdRoute,
  deleteAssociationsV3TrackingIdRulesRuleIdRoute,
  deleteAssociationsV3TrackingIdSensorsSensorRuleIdRoute,
  deleteC2cV4ConnectorsConnectorIdExtDevicesBatchRoute,
  deleteC2cV4ConnectorsConnectorIdExtDevicesExternalDeviceIdRoute,
  deleteC2cV4ConnectorsConnectorIdRoute,
  deleteGeofenceAssociationsV2GeofenceIdTrackingIdRoute,
  deleteGeofencesV2GeofenceIdRoute,
  deleteGeofencesV2Route,
  deleteLabelsV4ResourceTypeResourceIdKeyRoute,
  deleteLabelsV4ResourceTypeResourceIdKeyValueRoute,
  deleteLabelsV4ResourceTypeResourceIdRoute,
  deleteLargedataV4DataIdRoute,
  deleteLocationsV4LocationIdRoute,
  deleteLocationsV4Route,
  deleteMetadataV2DevicesTrackingIdRoute,
  deleteMetadataV2GeofencesGeofenceIdRoute,
  deleteMetadataV2SensorRulesSensorRuleIdRoute,
  deleteNotificationsV3RegistrationChannelIdRoute,
  deleteNotificationsV3RegistrationsRoute,
  deleteRegistryV2DevicesDeviceOrExternalIdRoute,
  deleteRegistryV2TrackingIdRoute,
  deleteRulesV4Route,
  deleteRulesV4RuleIdRoute,
  deleteSensorsV3Route,
  deleteSensorsV3SensorRuleIdRoute,
  deleteShadowsV2TrackingIdRoute,
  deleteShipmentsV4PlansRoute,
  deleteShipmentsV4PlansShipmentPlanIdRoute,
  deleteShipmentsV4Route,
  deleteShipmentsV4ShipmentIdRoute,
  deleteTracesV2TrackingIdRoute,
  getAliasesV2HealthRoute,
  getAliasesV2Route,
  getAliasesV2TrackingId2Route,
  getAliasesV2TrackingIdRoute,
  getAliasesV2TrackingIdTypeRoute,
  getAliasesV2VersionRoute,
  getAssociationsV3GeofencesGeofenceIdRoute,
  getAssociationsV3HealthRoute,
  getAssociationsV3RulesRuleIdRoute,
  getAssociationsV3SensorsSensorRuleIdRoute,
  getAssociationsV3TrackingIdGeofencesRoute,
  getAssociationsV3TrackingIdRulesRoute,
  getAssociationsV3TrackingIdSensorsRoute,
  getAssociationsV3VersionRoute,
  getBulkjobsV4DeviceUploadsJobIdResultsRoute,
  getBulkjobsV4DeviceUploadsJobIdStatusRoute,
  getBulkjobsV4DeviceUploadsRoute,
  getBulkjobsV4HealthRoute,
  getBulkjobsV4VersionRoute,
  getC2cV4ConnectorsConnectorIdExtDevicesRoute,
  getC2cV4ConnectorsConnectorIdRoute,
  getC2cV4ConnectorsExtDevicesExternalDeviceIdRoute,
  getC2cV4ConnectorsRoute,
  getC2cV4DriversRoute,
  getC2cV4HealthRoute,
  getC2cV4VersionRoute,
  getDeviceAssociationsV2HealthRoute,
  getDeviceAssociationsV2TrackingIdGeofencesRoute,
  getDeviceAssociationsV2VersionRoute,
  getEventsV3HealthRoute,
  getEventsV3Route,
  getEventsV3StatusesDeviceCountsRoute,
  getEventsV3StatusesRoute,
  getEventsV3TrackingIdRoute,
  getEventsV3VersionRoute,
  getGeofenceAssociationsV2GeofenceIdDevicesRoute,
  getGeofenceAssociationsV2HealthRoute,
  getGeofenceAssociationsV2VersionRoute,
  getGeofencesV2GeofenceIdRoute,
  getGeofencesV2HealthRoute,
  getGeofencesV2Route,
  getGeofencesV2VersionRoute,
  getLabelsV4HealthRoute,
  getLabelsV4ResourceTypeKeysKeyValuesRoute,
  getLabelsV4ResourceTypeKeysRoute,
  getLabelsV4ResourceTypeResourceIdRoute,
  getLabelsV4ResourceTypeRoute,
  getLabelsV4VersionRoute,
  getLargedataV4DataIdDataRoute,
  getLargedataV4DataIdMetadataRoute,
  getLargedataV4DataIdPartsRoute,
  getLargedataV4DevicesTrackingIdMetadataRoute,
  getLargedataV4HealthRoute,
  getLargedataV4VersionRoute,
  getLocationsV4HealthRoute,
  getLocationsV4LocationIdRoute,
  getLocationsV4Route,
  getLocationsV4VersionRoute,
  getMetadataV2DevicesTrackingIdRoute,
  getMetadataV2GeofencesGeofenceIdRoute,
  getMetadataV2HealthRoute,
  getMetadataV2SensorRulesSensorRuleIdRoute,
  getMetadataV2VersionRoute,
  getNotificationsV3HealthRoute,
  getNotificationsV3RegistrationChannelIdRoute,
  getNotificationsV3RegistrationsRoute,
  getNotificationsV3VersionRoute,
  getRegistryV2AppIdDevicesRoute,
  getRegistryV2AppIdLicenseCountRoute,
  getRegistryV2DevicesDeviceOrExternalIdRoute,
  getRegistryV2HealthRoute,
  getRegistryV2JobIdResultsRoute,
  getRegistryV2JobIdStatusRoute,
  getRegistryV2LicensesRoute,
  getRegistryV2TrackingIdRoute,
  getRegistryV2VersionRoute,
  getReportsV4HealthRoute,
  getReportsV4ReportIdRoute,
  getReportsV4VersionRoute,
  getRulesV4HealthRoute,
  getRulesV4Route,
  getRulesV4RuleIdRoute,
  getRulesV4VersionRoute,
  getSensorsV3HealthRoute,
  getSensorsV3Route,
  getSensorsV3SensorRuleIdRoute,
  getSensorsV3VersionRoute,
  getShadowsV2HealthRoute,
  getShadowsV2TrackingIdRoute,
  getShadowsV2TrackingIdStateRoute,
  getShadowsV2TrackingIdStateSelectorRoute,
  getShadowsV2VersionRoute,
  getShadowsV4Route,
  getShipmentReportsV4HealthRoute,
  getShipmentReportsV4ShipmentReportIdMetricRoute,
  getShipmentReportsV4ShipmentReportIdStatusRoute,
  getShipmentReportsV4ShipmentReportIdSummaryRoute,
  getShipmentReportsV4VersionRoute,
  getShipmentsV4HealthRoute,
  getShipmentsV4PlansRoute,
  getShipmentsV4PlansShipmentPlanIdRoute,
  getShipmentsV4PlansShipmentPlanIdSegmentPlanIdRoute,
  getShipmentsV4Route,
  getShipmentsV4ShipmentIdRoute,
  getShipmentsV4ShipmentIdSegmentIdRoute,
  getShipmentsV4TrackingIdSegmentsRoute,
  getShipmentsV4VersionRoute,
  getTracesV2HealthRoute,
  getTracesV2TrackingIdRoute,
  getTracesV2VersionRoute,
  getTransitionsV2DevicesTrackingIdRoute,
  getTransitionsV2HealthRoute,
  getTransitionsV2VersionRoute,
  getUsersV2DevicesRoute,
  getUsersV2HealthRoute,
  getUsersV2VersionRoute,
  getV2HealthRoute,
  getV2TimestampRoute,
  getV2VersionRoute,
  getV3HealthRoute,
  getV3VersionRoute,
  patchBulkjobsV4DeviceUploadsJobIdRoute,
  patchShipmentsV4PlansShipmentPlanIdRoute,
  patchShipmentsV4PlansShipmentPlanIdSegmentPlanIdRoute,
  patchShipmentsV4ShipmentIdRoute,
  patchShipmentsV4ShipmentIdSegmentIdRoute,
  postAssociationsV3DevicesTrackingIdBatchCreateRoute,
  postAssociationsV3DevicesTrackingIdBatchDeleteRoute,
  postBulkjobsV4DeviceUploadsRoute,
  postC2cV4CallbackRoute,
  postC2cV4ConnectorsConnectorIdExtDevicesRoute,
  postC2cV4ConnectorsRoute,
  postC2cV4DriversDriverIdVerifyRoute,
  postGeofencesV2GeofenceIdPoiTrainingRoute,
  postGeofencesV2Route,
  postGeofencesV2TrainingTestRoute,
  postLargedataV4DataIdRoute,
  postLargedataV4Route,
  postLocationsV4Route,
  postMetadataV2DevicesBatchRoute,
  postMetadataV2GeofencesBatchRoute,
  postMetadataV2SensorRulesBatchRoute,
  postNotificationsV3RegistrationsRoute,
  postRegistryV2AppIdDevicesRoute,
  postRegistryV2AppIdOneDeviceRoute,
  postRegistryV4ResourcesResourceTypeFindRoute,
  postReportsV4Route,
  postRulesV4Route,
  postSensorsV3Route,
  postShadowsV2BatchRoute,
  postShipmentReportsV4Route,
  postShipmentsV4PlansRoute,
  postShipmentsV4Route,
  postUsersV2LoginRoute,
  postUsersV2RefreshRoute,
  postUsersV2TokenExchangeRoute,
  postV2IndexRoute,
  postV2TokenRoute,
  postV3BatchRoute,
  postV3IndexRoute,
  putAliasesV2TrackingIdBatchRoute,
  putAliasesV2TrackingIdTypeExternalIdRoute,
  putAssociationsV3DevicesBatchUpdateRoute,
  putAssociationsV3TrackingIdGeofencesGeofenceIdRoute,
  putAssociationsV3TrackingIdRulesRuleIdRoute,
  putAssociationsV3TrackingIdSensorsSensorRuleIdRoute,
  putC2cV4ConnectorsConnectorIdRoute,
  putGeofenceAssociationsV2GeofenceIdTrackingIdRoute,
  putGeofencesV2GeofenceIdRoute,
  putLabelsV4ResourceTypeResourceIdBatchRoute,
  putLabelsV4ResourceTypeResourceIdKeyValueRoute,
  putLargedataV4DataIdPartsPartNumberRoute,
  putLocationsV4LocationIdRoute,
  putMetadataV2DevicesTrackingIdRoute,
  putMetadataV2GeofencesGeofenceIdRoute,
  putMetadataV2SensorRulesSensorRuleIdRoute,
  putNotificationsV3RegistrationChannelIdRoute,
  putRegistryV2DevicesDeviceOrExternalIdRoute,
  putRulesV4RuleIdRoute,
  putSensorsV3SensorRuleIdRoute,
  putShadowsV2TrackingIdRoute,
} from './routes'
import {
  deleteAliasesV2TrackingId2RouteHandler,
  deleteAliasesV2TrackingIdTypeExternalIdRouteHandler,
  deleteAliasesV2TrackingIdTypeRouteHandler,
  deleteAssociationsV3TrackingIdGeofencesGeofenceIdRouteHandler,
  deleteAssociationsV3TrackingIdRulesRuleIdRouteHandler,
  deleteAssociationsV3TrackingIdSensorsSensorRuleIdRouteHandler,
  deleteC2cV4ConnectorsConnectorIdExtDevicesBatchRouteHandler,
  deleteC2cV4ConnectorsConnectorIdExtDevicesExternalDeviceIdRouteHandler,
  deleteC2cV4ConnectorsConnectorIdRouteHandler,
  deleteGeofenceAssociationsV2GeofenceIdTrackingIdRouteHandler,
  deleteGeofencesV2GeofenceIdRouteHandler,
  deleteGeofencesV2RouteHandler,
  deleteLabelsV4ResourceTypeResourceIdKeyRouteHandler,
  deleteLabelsV4ResourceTypeResourceIdKeyValueRouteHandler,
  deleteLabelsV4ResourceTypeResourceIdRouteHandler,
  deleteLargedataV4DataIdRouteHandler,
  deleteLocationsV4LocationIdRouteHandler,
  deleteLocationsV4RouteHandler,
  deleteMetadataV2DevicesTrackingIdRouteHandler,
  deleteMetadataV2GeofencesGeofenceIdRouteHandler,
  deleteMetadataV2SensorRulesSensorRuleIdRouteHandler,
  deleteNotificationsV3RegistrationChannelIdRouteHandler,
  deleteNotificationsV3RegistrationsRouteHandler,
  deleteRegistryV2DevicesDeviceOrExternalIdRouteHandler,
  deleteRegistryV2TrackingIdRouteHandler,
  deleteRulesV4RouteHandler,
  deleteRulesV4RuleIdRouteHandler,
  deleteSensorsV3RouteHandler,
  deleteSensorsV3SensorRuleIdRouteHandler,
  deleteShadowsV2TrackingIdRouteHandler,
  deleteShipmentsV4PlansRouteHandler,
  deleteShipmentsV4PlansShipmentPlanIdRouteHandler,
  deleteShipmentsV4RouteHandler,
  deleteShipmentsV4ShipmentIdRouteHandler,
  deleteTracesV2TrackingIdRouteHandler,
  getAliasesV2HealthRouteHandler,
  getAliasesV2RouteHandler,
  getAliasesV2TrackingId2RouteHandler,
  getAliasesV2TrackingIdRouteHandler,
  getAliasesV2TrackingIdTypeRouteHandler,
  getAliasesV2VersionRouteHandler,
  getAssociationsV3GeofencesGeofenceIdRouteHandler,
  getAssociationsV3HealthRouteHandler,
  getAssociationsV3RulesRuleIdRouteHandler,
  getAssociationsV3SensorsSensorRuleIdRouteHandler,
  getAssociationsV3TrackingIdGeofencesRouteHandler,
  getAssociationsV3TrackingIdRulesRouteHandler,
  getAssociationsV3TrackingIdSensorsRouteHandler,
  getAssociationsV3VersionRouteHandler,
  getBulkjobsV4DeviceUploadsJobIdResultsRouteHandler,
  getBulkjobsV4DeviceUploadsJobIdStatusRouteHandler,
  getBulkjobsV4DeviceUploadsRouteHandler,
  getBulkjobsV4HealthRouteHandler,
  getBulkjobsV4VersionRouteHandler,
  getC2cV4ConnectorsConnectorIdExtDevicesRouteHandler,
  getC2cV4ConnectorsConnectorIdRouteHandler,
  getC2cV4ConnectorsExtDevicesExternalDeviceIdRouteHandler,
  getC2cV4ConnectorsRouteHandler,
  getC2cV4DriversRouteHandler,
  getC2cV4HealthRouteHandler,
  getC2cV4VersionRouteHandler,
  getDeviceAssociationsV2HealthRouteHandler,
  getDeviceAssociationsV2TrackingIdGeofencesRouteHandler,
  getDeviceAssociationsV2VersionRouteHandler,
  getEventsV3HealthRouteHandler,
  getEventsV3RouteHandler,
  getEventsV3StatusesDeviceCountsRouteHandler,
  getEventsV3StatusesRouteHandler,
  getEventsV3TrackingIdRouteHandler,
  getEventsV3VersionRouteHandler,
  getGeofenceAssociationsV2GeofenceIdDevicesRouteHandler,
  getGeofenceAssociationsV2HealthRouteHandler,
  getGeofenceAssociationsV2VersionRouteHandler,
  getGeofencesV2GeofenceIdRouteHandler,
  getGeofencesV2HealthRouteHandler,
  getGeofencesV2RouteHandler,
  getGeofencesV2VersionRouteHandler,
  getLabelsV4HealthRouteHandler,
  getLabelsV4ResourceTypeKeysKeyValuesRouteHandler,
  getLabelsV4ResourceTypeKeysRouteHandler,
  getLabelsV4ResourceTypeResourceIdRouteHandler,
  getLabelsV4ResourceTypeRouteHandler,
  getLabelsV4VersionRouteHandler,
  getLargedataV4DataIdDataRouteHandler,
  getLargedataV4DataIdMetadataRouteHandler,
  getLargedataV4DataIdPartsRouteHandler,
  getLargedataV4DevicesTrackingIdMetadataRouteHandler,
  getLargedataV4HealthRouteHandler,
  getLargedataV4VersionRouteHandler,
  getLocationsV4HealthRouteHandler,
  getLocationsV4LocationIdRouteHandler,
  getLocationsV4RouteHandler,
  getLocationsV4VersionRouteHandler,
  getMetadataV2DevicesTrackingIdRouteHandler,
  getMetadataV2GeofencesGeofenceIdRouteHandler,
  getMetadataV2HealthRouteHandler,
  getMetadataV2SensorRulesSensorRuleIdRouteHandler,
  getMetadataV2VersionRouteHandler,
  getNotificationsV3HealthRouteHandler,
  getNotificationsV3RegistrationChannelIdRouteHandler,
  getNotificationsV3RegistrationsRouteHandler,
  getNotificationsV3VersionRouteHandler,
  getRegistryV2AppIdDevicesRouteHandler,
  getRegistryV2AppIdLicenseCountRouteHandler,
  getRegistryV2DevicesDeviceOrExternalIdRouteHandler,
  getRegistryV2HealthRouteHandler,
  getRegistryV2JobIdResultsRouteHandler,
  getRegistryV2JobIdStatusRouteHandler,
  getRegistryV2LicensesRouteHandler,
  getRegistryV2TrackingIdRouteHandler,
  getRegistryV2VersionRouteHandler,
  getReportsV4HealthRouteHandler,
  getReportsV4ReportIdRouteHandler,
  getReportsV4VersionRouteHandler,
  getRulesV4HealthRouteHandler,
  getRulesV4RouteHandler,
  getRulesV4RuleIdRouteHandler,
  getRulesV4VersionRouteHandler,
  getSensorsV3HealthRouteHandler,
  getSensorsV3RouteHandler,
  getSensorsV3SensorRuleIdRouteHandler,
  getSensorsV3VersionRouteHandler,
  getShadowsV2HealthRouteHandler,
  getShadowsV2TrackingIdRouteHandler,
  getShadowsV2TrackingIdStateRouteHandler,
  getShadowsV2TrackingIdStateSelectorRouteHandler,
  getShadowsV2VersionRouteHandler,
  getShadowsV4RouteHandler,
  getShipmentReportsV4HealthRouteHandler,
  getShipmentReportsV4ShipmentReportIdMetricRouteHandler,
  getShipmentReportsV4ShipmentReportIdStatusRouteHandler,
  getShipmentReportsV4ShipmentReportIdSummaryRouteHandler,
  getShipmentReportsV4VersionRouteHandler,
  getShipmentsV4HealthRouteHandler,
  getShipmentsV4PlansRouteHandler,
  getShipmentsV4PlansShipmentPlanIdRouteHandler,
  getShipmentsV4PlansShipmentPlanIdSegmentPlanIdRouteHandler,
  getShipmentsV4RouteHandler,
  getShipmentsV4ShipmentIdRouteHandler,
  getShipmentsV4ShipmentIdSegmentIdRouteHandler,
  getShipmentsV4TrackingIdSegmentsRouteHandler,
  getShipmentsV4VersionRouteHandler,
  getTracesV2HealthRouteHandler,
  getTracesV2TrackingIdRouteHandler,
  getTracesV2VersionRouteHandler,
  getTransitionsV2DevicesTrackingIdRouteHandler,
  getTransitionsV2HealthRouteHandler,
  getTransitionsV2VersionRouteHandler,
  getUsersV2DevicesRouteHandler,
  getUsersV2HealthRouteHandler,
  getUsersV2VersionRouteHandler,
  getV2HealthRouteHandler,
  getV2TimestampRouteHandler,
  getV2VersionRouteHandler,
  getV3HealthRouteHandler,
  getV3VersionRouteHandler,
  patchBulkjobsV4DeviceUploadsJobIdRouteHandler,
  patchShipmentsV4PlansShipmentPlanIdRouteHandler,
  patchShipmentsV4PlansShipmentPlanIdSegmentPlanIdRouteHandler,
  patchShipmentsV4ShipmentIdRouteHandler,
  patchShipmentsV4ShipmentIdSegmentIdRouteHandler,
  postAssociationsV3DevicesTrackingIdBatchCreateRouteHandler,
  postAssociationsV3DevicesTrackingIdBatchDeleteRouteHandler,
  postBulkjobsV4DeviceUploadsRouteHandler,
  postC2cV4CallbackRouteHandler,
  postC2cV4ConnectorsConnectorIdExtDevicesRouteHandler,
  postC2cV4ConnectorsRouteHandler,
  postC2cV4DriversDriverIdVerifyRouteHandler,
  postGeofencesV2GeofenceIdPoiTrainingRouteHandler,
  postGeofencesV2RouteHandler,
  postGeofencesV2TrainingTestRouteHandler,
  postLargedataV4DataIdRouteHandler,
  postLargedataV4RouteHandler,
  postLocationsV4RouteHandler,
  postMetadataV2DevicesBatchRouteHandler,
  postMetadataV2GeofencesBatchRouteHandler,
  postMetadataV2SensorRulesBatchRouteHandler,
  postNotificationsV3RegistrationsRouteHandler,
  postRegistryV2AppIdDevicesRouteHandler,
  postRegistryV2AppIdOneDeviceRouteHandler,
  postRegistryV4ResourcesResourceTypeFindRouteHandler,
  postReportsV4RouteHandler,
  postRulesV4RouteHandler,
  postSensorsV3RouteHandler,
  postShadowsV2BatchRouteHandler,
  postShipmentReportsV4RouteHandler,
  postShipmentsV4PlansRouteHandler,
  postShipmentsV4RouteHandler,
  postUsersV2LoginRouteHandler,
  postUsersV2RefreshRouteHandler,
  postUsersV2TokenExchangeRouteHandler,
  postV2IndexRouteHandler,
  postV2TokenRouteHandler,
  postV3BatchRouteHandler,
  postV3IndexRouteHandler,
  putAliasesV2TrackingIdBatchRouteHandler,
  putAliasesV2TrackingIdTypeExternalIdRouteHandler,
  putAssociationsV3DevicesBatchUpdateRouteHandler,
  putAssociationsV3TrackingIdGeofencesGeofenceIdRouteHandler,
  putAssociationsV3TrackingIdRulesRuleIdRouteHandler,
  putAssociationsV3TrackingIdSensorsSensorRuleIdRouteHandler,
  putC2cV4ConnectorsConnectorIdRouteHandler,
  putGeofenceAssociationsV2GeofenceIdTrackingIdRouteHandler,
  putGeofencesV2GeofenceIdRouteHandler,
  putLabelsV4ResourceTypeResourceIdBatchRouteHandler,
  putLabelsV4ResourceTypeResourceIdKeyValueRouteHandler,
  putLargedataV4DataIdPartsPartNumberRouteHandler,
  putLocationsV4LocationIdRouteHandler,
  putMetadataV2DevicesTrackingIdRouteHandler,
  putMetadataV2GeofencesGeofenceIdRouteHandler,
  putMetadataV2SensorRulesSensorRuleIdRouteHandler,
  putNotificationsV3RegistrationChannelIdRouteHandler,
  putRegistryV2DevicesDeviceOrExternalIdRouteHandler,
  putRulesV4RuleIdRouteHandler,
  putSensorsV3SensorRuleIdRouteHandler,
  putShadowsV2TrackingIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAliasesV2Route, getAliasesV2RouteHandler)
  .openapi(getAliasesV2HealthRoute, getAliasesV2HealthRouteHandler)
  .openapi(getAliasesV2TrackingIdRoute, getAliasesV2TrackingIdRouteHandler)
  .openapi(getAliasesV2VersionRoute, getAliasesV2VersionRouteHandler)
  .openapi(deleteAliasesV2TrackingId2Route, deleteAliasesV2TrackingId2RouteHandler)
  .openapi(getAliasesV2TrackingId2Route, getAliasesV2TrackingId2RouteHandler)
  .openapi(putAliasesV2TrackingIdBatchRoute, putAliasesV2TrackingIdBatchRouteHandler)
  .openapi(deleteAliasesV2TrackingIdTypeRoute, deleteAliasesV2TrackingIdTypeRouteHandler)
  .openapi(getAliasesV2TrackingIdTypeRoute, getAliasesV2TrackingIdTypeRouteHandler)
  .openapi(
    deleteAliasesV2TrackingIdTypeExternalIdRoute,
    deleteAliasesV2TrackingIdTypeExternalIdRouteHandler,
  )
  .openapi(
    putAliasesV2TrackingIdTypeExternalIdRoute,
    putAliasesV2TrackingIdTypeExternalIdRouteHandler,
  )
  .openapi(
    putAssociationsV3DevicesBatchUpdateRoute,
    putAssociationsV3DevicesBatchUpdateRouteHandler,
  )
  .openapi(
    postAssociationsV3DevicesTrackingIdBatchCreateRoute,
    postAssociationsV3DevicesTrackingIdBatchCreateRouteHandler,
  )
  .openapi(
    postAssociationsV3DevicesTrackingIdBatchDeleteRoute,
    postAssociationsV3DevicesTrackingIdBatchDeleteRouteHandler,
  )
  .openapi(
    getAssociationsV3GeofencesGeofenceIdRoute,
    getAssociationsV3GeofencesGeofenceIdRouteHandler,
  )
  .openapi(getAssociationsV3HealthRoute, getAssociationsV3HealthRouteHandler)
  .openapi(getAssociationsV3RulesRuleIdRoute, getAssociationsV3RulesRuleIdRouteHandler)
  .openapi(
    getAssociationsV3SensorsSensorRuleIdRoute,
    getAssociationsV3SensorsSensorRuleIdRouteHandler,
  )
  .openapi(getAssociationsV3VersionRoute, getAssociationsV3VersionRouteHandler)
  .openapi(
    getAssociationsV3TrackingIdGeofencesRoute,
    getAssociationsV3TrackingIdGeofencesRouteHandler,
  )
  .openapi(
    deleteAssociationsV3TrackingIdGeofencesGeofenceIdRoute,
    deleteAssociationsV3TrackingIdGeofencesGeofenceIdRouteHandler,
  )
  .openapi(
    putAssociationsV3TrackingIdGeofencesGeofenceIdRoute,
    putAssociationsV3TrackingIdGeofencesGeofenceIdRouteHandler,
  )
  .openapi(getAssociationsV3TrackingIdRulesRoute, getAssociationsV3TrackingIdRulesRouteHandler)
  .openapi(
    deleteAssociationsV3TrackingIdRulesRuleIdRoute,
    deleteAssociationsV3TrackingIdRulesRuleIdRouteHandler,
  )
  .openapi(
    putAssociationsV3TrackingIdRulesRuleIdRoute,
    putAssociationsV3TrackingIdRulesRuleIdRouteHandler,
  )
  .openapi(getAssociationsV3TrackingIdSensorsRoute, getAssociationsV3TrackingIdSensorsRouteHandler)
  .openapi(
    deleteAssociationsV3TrackingIdSensorsSensorRuleIdRoute,
    deleteAssociationsV3TrackingIdSensorsSensorRuleIdRouteHandler,
  )
  .openapi(
    putAssociationsV3TrackingIdSensorsSensorRuleIdRoute,
    putAssociationsV3TrackingIdSensorsSensorRuleIdRouteHandler,
  )
  .openapi(getBulkjobsV4DeviceUploadsRoute, getBulkjobsV4DeviceUploadsRouteHandler)
  .openapi(postBulkjobsV4DeviceUploadsRoute, postBulkjobsV4DeviceUploadsRouteHandler)
  .openapi(patchBulkjobsV4DeviceUploadsJobIdRoute, patchBulkjobsV4DeviceUploadsJobIdRouteHandler)
  .openapi(
    getBulkjobsV4DeviceUploadsJobIdResultsRoute,
    getBulkjobsV4DeviceUploadsJobIdResultsRouteHandler,
  )
  .openapi(
    getBulkjobsV4DeviceUploadsJobIdStatusRoute,
    getBulkjobsV4DeviceUploadsJobIdStatusRouteHandler,
  )
  .openapi(getBulkjobsV4HealthRoute, getBulkjobsV4HealthRouteHandler)
  .openapi(getBulkjobsV4VersionRoute, getBulkjobsV4VersionRouteHandler)
  .openapi(postC2cV4CallbackRoute, postC2cV4CallbackRouteHandler)
  .openapi(getC2cV4ConnectorsRoute, getC2cV4ConnectorsRouteHandler)
  .openapi(postC2cV4ConnectorsRoute, postC2cV4ConnectorsRouteHandler)
  .openapi(
    getC2cV4ConnectorsExtDevicesExternalDeviceIdRoute,
    getC2cV4ConnectorsExtDevicesExternalDeviceIdRouteHandler,
  )
  .openapi(deleteC2cV4ConnectorsConnectorIdRoute, deleteC2cV4ConnectorsConnectorIdRouteHandler)
  .openapi(getC2cV4ConnectorsConnectorIdRoute, getC2cV4ConnectorsConnectorIdRouteHandler)
  .openapi(putC2cV4ConnectorsConnectorIdRoute, putC2cV4ConnectorsConnectorIdRouteHandler)
  .openapi(
    getC2cV4ConnectorsConnectorIdExtDevicesRoute,
    getC2cV4ConnectorsConnectorIdExtDevicesRouteHandler,
  )
  .openapi(
    postC2cV4ConnectorsConnectorIdExtDevicesRoute,
    postC2cV4ConnectorsConnectorIdExtDevicesRouteHandler,
  )
  .openapi(
    deleteC2cV4ConnectorsConnectorIdExtDevicesBatchRoute,
    deleteC2cV4ConnectorsConnectorIdExtDevicesBatchRouteHandler,
  )
  .openapi(
    deleteC2cV4ConnectorsConnectorIdExtDevicesExternalDeviceIdRoute,
    deleteC2cV4ConnectorsConnectorIdExtDevicesExternalDeviceIdRouteHandler,
  )
  .openapi(getC2cV4DriversRoute, getC2cV4DriversRouteHandler)
  .openapi(postC2cV4DriversDriverIdVerifyRoute, postC2cV4DriversDriverIdVerifyRouteHandler)
  .openapi(getC2cV4HealthRoute, getC2cV4HealthRouteHandler)
  .openapi(getC2cV4VersionRoute, getC2cV4VersionRouteHandler)
  .openapi(getDeviceAssociationsV2HealthRoute, getDeviceAssociationsV2HealthRouteHandler)
  .openapi(getDeviceAssociationsV2VersionRoute, getDeviceAssociationsV2VersionRouteHandler)
  .openapi(
    getDeviceAssociationsV2TrackingIdGeofencesRoute,
    getDeviceAssociationsV2TrackingIdGeofencesRouteHandler,
  )
  .openapi(getEventsV3Route, getEventsV3RouteHandler)
  .openapi(getEventsV3HealthRoute, getEventsV3HealthRouteHandler)
  .openapi(getEventsV3StatusesRoute, getEventsV3StatusesRouteHandler)
  .openapi(getEventsV3StatusesDeviceCountsRoute, getEventsV3StatusesDeviceCountsRouteHandler)
  .openapi(getEventsV3VersionRoute, getEventsV3VersionRouteHandler)
  .openapi(getEventsV3TrackingIdRoute, getEventsV3TrackingIdRouteHandler)
  .openapi(getGeofenceAssociationsV2HealthRoute, getGeofenceAssociationsV2HealthRouteHandler)
  .openapi(getGeofenceAssociationsV2VersionRoute, getGeofenceAssociationsV2VersionRouteHandler)
  .openapi(
    getGeofenceAssociationsV2GeofenceIdDevicesRoute,
    getGeofenceAssociationsV2GeofenceIdDevicesRouteHandler,
  )
  .openapi(
    deleteGeofenceAssociationsV2GeofenceIdTrackingIdRoute,
    deleteGeofenceAssociationsV2GeofenceIdTrackingIdRouteHandler,
  )
  .openapi(
    putGeofenceAssociationsV2GeofenceIdTrackingIdRoute,
    putGeofenceAssociationsV2GeofenceIdTrackingIdRouteHandler,
  )
  .openapi(deleteGeofencesV2Route, deleteGeofencesV2RouteHandler)
  .openapi(getGeofencesV2Route, getGeofencesV2RouteHandler)
  .openapi(postGeofencesV2Route, postGeofencesV2RouteHandler)
  .openapi(getGeofencesV2HealthRoute, getGeofencesV2HealthRouteHandler)
  .openapi(postGeofencesV2TrainingTestRoute, postGeofencesV2TrainingTestRouteHandler)
  .openapi(getGeofencesV2VersionRoute, getGeofencesV2VersionRouteHandler)
  .openapi(deleteGeofencesV2GeofenceIdRoute, deleteGeofencesV2GeofenceIdRouteHandler)
  .openapi(getGeofencesV2GeofenceIdRoute, getGeofencesV2GeofenceIdRouteHandler)
  .openapi(putGeofencesV2GeofenceIdRoute, putGeofencesV2GeofenceIdRouteHandler)
  .openapi(
    postGeofencesV2GeofenceIdPoiTrainingRoute,
    postGeofencesV2GeofenceIdPoiTrainingRouteHandler,
  )
  .openapi(getLabelsV4HealthRoute, getLabelsV4HealthRouteHandler)
  .openapi(getLabelsV4VersionRoute, getLabelsV4VersionRouteHandler)
  .openapi(getLabelsV4ResourceTypeRoute, getLabelsV4ResourceTypeRouteHandler)
  .openapi(getLabelsV4ResourceTypeKeysRoute, getLabelsV4ResourceTypeKeysRouteHandler)
  .openapi(
    getLabelsV4ResourceTypeKeysKeyValuesRoute,
    getLabelsV4ResourceTypeKeysKeyValuesRouteHandler,
  )
  .openapi(
    deleteLabelsV4ResourceTypeResourceIdRoute,
    deleteLabelsV4ResourceTypeResourceIdRouteHandler,
  )
  .openapi(getLabelsV4ResourceTypeResourceIdRoute, getLabelsV4ResourceTypeResourceIdRouteHandler)
  .openapi(
    putLabelsV4ResourceTypeResourceIdBatchRoute,
    putLabelsV4ResourceTypeResourceIdBatchRouteHandler,
  )
  .openapi(
    deleteLabelsV4ResourceTypeResourceIdKeyRoute,
    deleteLabelsV4ResourceTypeResourceIdKeyRouteHandler,
  )
  .openapi(
    deleteLabelsV4ResourceTypeResourceIdKeyValueRoute,
    deleteLabelsV4ResourceTypeResourceIdKeyValueRouteHandler,
  )
  .openapi(
    putLabelsV4ResourceTypeResourceIdKeyValueRoute,
    putLabelsV4ResourceTypeResourceIdKeyValueRouteHandler,
  )
  .openapi(postLargedataV4Route, postLargedataV4RouteHandler)
  .openapi(
    getLargedataV4DevicesTrackingIdMetadataRoute,
    getLargedataV4DevicesTrackingIdMetadataRouteHandler,
  )
  .openapi(getLargedataV4HealthRoute, getLargedataV4HealthRouteHandler)
  .openapi(getLargedataV4VersionRoute, getLargedataV4VersionRouteHandler)
  .openapi(deleteLargedataV4DataIdRoute, deleteLargedataV4DataIdRouteHandler)
  .openapi(postLargedataV4DataIdRoute, postLargedataV4DataIdRouteHandler)
  .openapi(getLargedataV4DataIdDataRoute, getLargedataV4DataIdDataRouteHandler)
  .openapi(getLargedataV4DataIdMetadataRoute, getLargedataV4DataIdMetadataRouteHandler)
  .openapi(getLargedataV4DataIdPartsRoute, getLargedataV4DataIdPartsRouteHandler)
  .openapi(
    putLargedataV4DataIdPartsPartNumberRoute,
    putLargedataV4DataIdPartsPartNumberRouteHandler,
  )
  .openapi(deleteLocationsV4Route, deleteLocationsV4RouteHandler)
  .openapi(getLocationsV4Route, getLocationsV4RouteHandler)
  .openapi(postLocationsV4Route, postLocationsV4RouteHandler)
  .openapi(getLocationsV4HealthRoute, getLocationsV4HealthRouteHandler)
  .openapi(getLocationsV4VersionRoute, getLocationsV4VersionRouteHandler)
  .openapi(deleteLocationsV4LocationIdRoute, deleteLocationsV4LocationIdRouteHandler)
  .openapi(getLocationsV4LocationIdRoute, getLocationsV4LocationIdRouteHandler)
  .openapi(putLocationsV4LocationIdRoute, putLocationsV4LocationIdRouteHandler)
  .openapi(postMetadataV2DevicesBatchRoute, postMetadataV2DevicesBatchRouteHandler)
  .openapi(deleteMetadataV2DevicesTrackingIdRoute, deleteMetadataV2DevicesTrackingIdRouteHandler)
  .openapi(getMetadataV2DevicesTrackingIdRoute, getMetadataV2DevicesTrackingIdRouteHandler)
  .openapi(putMetadataV2DevicesTrackingIdRoute, putMetadataV2DevicesTrackingIdRouteHandler)
  .openapi(postMetadataV2GeofencesBatchRoute, postMetadataV2GeofencesBatchRouteHandler)
  .openapi(
    deleteMetadataV2GeofencesGeofenceIdRoute,
    deleteMetadataV2GeofencesGeofenceIdRouteHandler,
  )
  .openapi(getMetadataV2GeofencesGeofenceIdRoute, getMetadataV2GeofencesGeofenceIdRouteHandler)
  .openapi(putMetadataV2GeofencesGeofenceIdRoute, putMetadataV2GeofencesGeofenceIdRouteHandler)
  .openapi(getMetadataV2HealthRoute, getMetadataV2HealthRouteHandler)
  .openapi(postMetadataV2SensorRulesBatchRoute, postMetadataV2SensorRulesBatchRouteHandler)
  .openapi(
    deleteMetadataV2SensorRulesSensorRuleIdRoute,
    deleteMetadataV2SensorRulesSensorRuleIdRouteHandler,
  )
  .openapi(
    getMetadataV2SensorRulesSensorRuleIdRoute,
    getMetadataV2SensorRulesSensorRuleIdRouteHandler,
  )
  .openapi(
    putMetadataV2SensorRulesSensorRuleIdRoute,
    putMetadataV2SensorRulesSensorRuleIdRouteHandler,
  )
  .openapi(getMetadataV2VersionRoute, getMetadataV2VersionRouteHandler)
  .openapi(getNotificationsV3HealthRoute, getNotificationsV3HealthRouteHandler)
  .openapi(
    deleteNotificationsV3RegistrationChannelIdRoute,
    deleteNotificationsV3RegistrationChannelIdRouteHandler,
  )
  .openapi(
    getNotificationsV3RegistrationChannelIdRoute,
    getNotificationsV3RegistrationChannelIdRouteHandler,
  )
  .openapi(
    putNotificationsV3RegistrationChannelIdRoute,
    putNotificationsV3RegistrationChannelIdRouteHandler,
  )
  .openapi(deleteNotificationsV3RegistrationsRoute, deleteNotificationsV3RegistrationsRouteHandler)
  .openapi(getNotificationsV3RegistrationsRoute, getNotificationsV3RegistrationsRouteHandler)
  .openapi(postNotificationsV3RegistrationsRoute, postNotificationsV3RegistrationsRouteHandler)
  .openapi(getNotificationsV3VersionRoute, getNotificationsV3VersionRouteHandler)
  .openapi(
    deleteRegistryV2DevicesDeviceOrExternalIdRoute,
    deleteRegistryV2DevicesDeviceOrExternalIdRouteHandler,
  )
  .openapi(
    getRegistryV2DevicesDeviceOrExternalIdRoute,
    getRegistryV2DevicesDeviceOrExternalIdRouteHandler,
  )
  .openapi(
    putRegistryV2DevicesDeviceOrExternalIdRoute,
    putRegistryV2DevicesDeviceOrExternalIdRouteHandler,
  )
  .openapi(getRegistryV2HealthRoute, getRegistryV2HealthRouteHandler)
  .openapi(getRegistryV2LicensesRoute, getRegistryV2LicensesRouteHandler)
  .openapi(getRegistryV2VersionRoute, getRegistryV2VersionRouteHandler)
  .openapi(getRegistryV2AppIdDevicesRoute, getRegistryV2AppIdDevicesRouteHandler)
  .openapi(postRegistryV2AppIdDevicesRoute, postRegistryV2AppIdDevicesRouteHandler)
  .openapi(getRegistryV2AppIdLicenseCountRoute, getRegistryV2AppIdLicenseCountRouteHandler)
  .openapi(postRegistryV2AppIdOneDeviceRoute, postRegistryV2AppIdOneDeviceRouteHandler)
  .openapi(getRegistryV2JobIdResultsRoute, getRegistryV2JobIdResultsRouteHandler)
  .openapi(getRegistryV2JobIdStatusRoute, getRegistryV2JobIdStatusRouteHandler)
  .openapi(deleteRegistryV2TrackingIdRoute, deleteRegistryV2TrackingIdRouteHandler)
  .openapi(getRegistryV2TrackingIdRoute, getRegistryV2TrackingIdRouteHandler)
  .openapi(
    postRegistryV4ResourcesResourceTypeFindRoute,
    postRegistryV4ResourcesResourceTypeFindRouteHandler,
  )
  .openapi(postReportsV4Route, postReportsV4RouteHandler)
  .openapi(getReportsV4HealthRoute, getReportsV4HealthRouteHandler)
  .openapi(getReportsV4VersionRoute, getReportsV4VersionRouteHandler)
  .openapi(getReportsV4ReportIdRoute, getReportsV4ReportIdRouteHandler)
  .openapi(deleteRulesV4Route, deleteRulesV4RouteHandler)
  .openapi(getRulesV4Route, getRulesV4RouteHandler)
  .openapi(postRulesV4Route, postRulesV4RouteHandler)
  .openapi(getRulesV4HealthRoute, getRulesV4HealthRouteHandler)
  .openapi(getRulesV4VersionRoute, getRulesV4VersionRouteHandler)
  .openapi(deleteRulesV4RuleIdRoute, deleteRulesV4RuleIdRouteHandler)
  .openapi(getRulesV4RuleIdRoute, getRulesV4RuleIdRouteHandler)
  .openapi(putRulesV4RuleIdRoute, putRulesV4RuleIdRouteHandler)
  .openapi(deleteSensorsV3Route, deleteSensorsV3RouteHandler)
  .openapi(getSensorsV3Route, getSensorsV3RouteHandler)
  .openapi(postSensorsV3Route, postSensorsV3RouteHandler)
  .openapi(getSensorsV3HealthRoute, getSensorsV3HealthRouteHandler)
  .openapi(getSensorsV3VersionRoute, getSensorsV3VersionRouteHandler)
  .openapi(deleteSensorsV3SensorRuleIdRoute, deleteSensorsV3SensorRuleIdRouteHandler)
  .openapi(getSensorsV3SensorRuleIdRoute, getSensorsV3SensorRuleIdRouteHandler)
  .openapi(putSensorsV3SensorRuleIdRoute, putSensorsV3SensorRuleIdRouteHandler)
  .openapi(postShadowsV2BatchRoute, postShadowsV2BatchRouteHandler)
  .openapi(getShadowsV2HealthRoute, getShadowsV2HealthRouteHandler)
  .openapi(getShadowsV2VersionRoute, getShadowsV2VersionRouteHandler)
  .openapi(deleteShadowsV2TrackingIdRoute, deleteShadowsV2TrackingIdRouteHandler)
  .openapi(getShadowsV2TrackingIdRoute, getShadowsV2TrackingIdRouteHandler)
  .openapi(putShadowsV2TrackingIdRoute, putShadowsV2TrackingIdRouteHandler)
  .openapi(getShadowsV2TrackingIdStateRoute, getShadowsV2TrackingIdStateRouteHandler)
  .openapi(
    getShadowsV2TrackingIdStateSelectorRoute,
    getShadowsV2TrackingIdStateSelectorRouteHandler,
  )
  .openapi(getShadowsV4Route, getShadowsV4RouteHandler)
  .openapi(postShipmentReportsV4Route, postShipmentReportsV4RouteHandler)
  .openapi(getShipmentReportsV4HealthRoute, getShipmentReportsV4HealthRouteHandler)
  .openapi(getShipmentReportsV4VersionRoute, getShipmentReportsV4VersionRouteHandler)
  .openapi(
    getShipmentReportsV4ShipmentReportIdStatusRoute,
    getShipmentReportsV4ShipmentReportIdStatusRouteHandler,
  )
  .openapi(
    getShipmentReportsV4ShipmentReportIdSummaryRoute,
    getShipmentReportsV4ShipmentReportIdSummaryRouteHandler,
  )
  .openapi(
    getShipmentReportsV4ShipmentReportIdMetricRoute,
    getShipmentReportsV4ShipmentReportIdMetricRouteHandler,
  )
  .openapi(deleteShipmentsV4Route, deleteShipmentsV4RouteHandler)
  .openapi(getShipmentsV4Route, getShipmentsV4RouteHandler)
  .openapi(postShipmentsV4Route, postShipmentsV4RouteHandler)
  .openapi(getShipmentsV4HealthRoute, getShipmentsV4HealthRouteHandler)
  .openapi(deleteShipmentsV4PlansRoute, deleteShipmentsV4PlansRouteHandler)
  .openapi(getShipmentsV4PlansRoute, getShipmentsV4PlansRouteHandler)
  .openapi(postShipmentsV4PlansRoute, postShipmentsV4PlansRouteHandler)
  .openapi(
    deleteShipmentsV4PlansShipmentPlanIdRoute,
    deleteShipmentsV4PlansShipmentPlanIdRouteHandler,
  )
  .openapi(getShipmentsV4PlansShipmentPlanIdRoute, getShipmentsV4PlansShipmentPlanIdRouteHandler)
  .openapi(
    patchShipmentsV4PlansShipmentPlanIdRoute,
    patchShipmentsV4PlansShipmentPlanIdRouteHandler,
  )
  .openapi(
    getShipmentsV4PlansShipmentPlanIdSegmentPlanIdRoute,
    getShipmentsV4PlansShipmentPlanIdSegmentPlanIdRouteHandler,
  )
  .openapi(
    patchShipmentsV4PlansShipmentPlanIdSegmentPlanIdRoute,
    patchShipmentsV4PlansShipmentPlanIdSegmentPlanIdRouteHandler,
  )
  .openapi(getShipmentsV4VersionRoute, getShipmentsV4VersionRouteHandler)
  .openapi(deleteShipmentsV4ShipmentIdRoute, deleteShipmentsV4ShipmentIdRouteHandler)
  .openapi(getShipmentsV4ShipmentIdRoute, getShipmentsV4ShipmentIdRouteHandler)
  .openapi(patchShipmentsV4ShipmentIdRoute, patchShipmentsV4ShipmentIdRouteHandler)
  .openapi(getShipmentsV4ShipmentIdSegmentIdRoute, getShipmentsV4ShipmentIdSegmentIdRouteHandler)
  .openapi(
    patchShipmentsV4ShipmentIdSegmentIdRoute,
    patchShipmentsV4ShipmentIdSegmentIdRouteHandler,
  )
  .openapi(getShipmentsV4TrackingIdSegmentsRoute, getShipmentsV4TrackingIdSegmentsRouteHandler)
  .openapi(getTracesV2HealthRoute, getTracesV2HealthRouteHandler)
  .openapi(getTracesV2VersionRoute, getTracesV2VersionRouteHandler)
  .openapi(deleteTracesV2TrackingIdRoute, deleteTracesV2TrackingIdRouteHandler)
  .openapi(getTracesV2TrackingIdRoute, getTracesV2TrackingIdRouteHandler)
  .openapi(getTransitionsV2DevicesTrackingIdRoute, getTransitionsV2DevicesTrackingIdRouteHandler)
  .openapi(getTransitionsV2HealthRoute, getTransitionsV2HealthRouteHandler)
  .openapi(getTransitionsV2VersionRoute, getTransitionsV2VersionRouteHandler)
  .openapi(getUsersV2DevicesRoute, getUsersV2DevicesRouteHandler)
  .openapi(getUsersV2HealthRoute, getUsersV2HealthRouteHandler)
  .openapi(postUsersV2LoginRoute, postUsersV2LoginRouteHandler)
  .openapi(postUsersV2RefreshRoute, postUsersV2RefreshRouteHandler)
  .openapi(postUsersV2TokenExchangeRoute, postUsersV2TokenExchangeRouteHandler)
  .openapi(getUsersV2VersionRoute, getUsersV2VersionRouteHandler)
  .openapi(postV2IndexRoute, postV2IndexRouteHandler)
  .openapi(getV2HealthRoute, getV2HealthRouteHandler)
  .openapi(getV2TimestampRoute, getV2TimestampRouteHandler)
  .openapi(postV2TokenRoute, postV2TokenRouteHandler)
  .openapi(getV2VersionRoute, getV2VersionRouteHandler)
  .openapi(postV3IndexRoute, postV3IndexRouteHandler)
  .openapi(postV3BatchRoute, postV3BatchRouteHandler)
  .openapi(getV3HealthRoute, getV3HealthRouteHandler)
  .openapi(getV3VersionRoute, getV3VersionRouteHandler)

export default app
