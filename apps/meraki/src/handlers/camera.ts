import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute,
  deleteNetworksNetworkIdCameraWirelessProfilesWirelessProfileIdRoute,
  deleteOrganizationsOrganizationIdCameraCustomAnalyticsArtifactsArtifactIdRoute,
  deleteOrganizationsOrganizationIdCameraRolesRoleIdRoute,
  getDevicesSerialCameraAnalyticsLiveRoute,
  getDevicesSerialCameraAnalyticsOverviewRoute,
  getDevicesSerialCameraAnalyticsRecentRoute,
  getDevicesSerialCameraAnalyticsZonesRoute,
  getDevicesSerialCameraAnalyticsZonesZoneIdHistoryRoute,
  getDevicesSerialCameraClipRoute,
  getDevicesSerialCameraCustomAnalyticsRoute,
  getDevicesSerialCameraQualityAndRetentionRoute,
  getDevicesSerialCameraSenseObjectDetectionModelsRoute,
  getDevicesSerialCameraSenseRoute,
  getDevicesSerialCameraVideoLinkRoute,
  getDevicesSerialCameraVideoSettingsRoute,
  getDevicesSerialCameraWirelessProfilesRoute,
  getNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute,
  getNetworksNetworkIdCameraQualityRetentionProfilesRoute,
  getNetworksNetworkIdCameraSchedulesRoute,
  getNetworksNetworkIdCameraWirelessProfilesRoute,
  getNetworksNetworkIdCameraWirelessProfilesWirelessProfileIdRoute,
  getOrganizationsOrganizationIdCameraBoundariesAreasByDeviceRoute,
  getOrganizationsOrganizationIdCameraBoundariesLinesByDeviceRoute,
  getOrganizationsOrganizationIdCameraCustomAnalyticsArtifactsArtifactIdRoute,
  getOrganizationsOrganizationIdCameraCustomAnalyticsArtifactsRoute,
  getOrganizationsOrganizationIdCameraDetectionsHistoryByBoundaryByIntervalRoute,
  getOrganizationsOrganizationIdCameraOnboardingStatusesRoute,
  getOrganizationsOrganizationIdCameraPermissionsPermissionScopeIdRoute,
  getOrganizationsOrganizationIdCameraPermissionsRoute,
  getOrganizationsOrganizationIdCameraRolesRoleIdRoute,
  getOrganizationsOrganizationIdCameraRolesRoute,
  postDevicesSerialCameraGenerateSnapshotRoute,
  postNetworksNetworkIdCameraQualityRetentionProfilesRoute,
  postNetworksNetworkIdCameraWirelessProfilesRoute,
  postOrganizationsOrganizationIdCameraCustomAnalyticsArtifactsRoute,
  postOrganizationsOrganizationIdCameraRolesRoute,
  putDevicesSerialCameraCustomAnalyticsRoute,
  putDevicesSerialCameraQualityAndRetentionRoute,
  putDevicesSerialCameraSenseRoute,
  putDevicesSerialCameraVideoSettingsRoute,
  putDevicesSerialCameraWirelessProfilesRoute,
  putNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute,
  putNetworksNetworkIdCameraWirelessProfilesWirelessProfileIdRoute,
  putOrganizationsOrganizationIdCameraOnboardingStatusesRoute,
  putOrganizationsOrganizationIdCameraRolesRoleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cameraHandler = app
  .openapi(getDevicesSerialCameraAnalyticsLiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraAnalyticsOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraAnalyticsRecentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraAnalyticsZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraAnalyticsZonesZoneIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraClipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraCustomAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialCameraCustomAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialCameraGenerateSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraQualityAndRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialCameraQualityAndRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraSenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialCameraSenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraSenseObjectDetectionModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraVideoSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialCameraVideoSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraVideoLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraWirelessProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialCameraWirelessProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdCameraQualityRetentionProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdCameraQualityRetentionProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getNetworksNetworkIdCameraSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdCameraWirelessProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdCameraWirelessProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdCameraWirelessProfilesWirelessProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdCameraWirelessProfilesWirelessProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdCameraWirelessProfilesWirelessProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdCameraBoundariesAreasByDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdCameraBoundariesLinesByDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdCameraCustomAnalyticsArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdCameraCustomAnalyticsArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdCameraCustomAnalyticsArtifactsArtifactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdCameraCustomAnalyticsArtifactsArtifactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdCameraDetectionsHistoryByBoundaryByIntervalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdCameraOnboardingStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdCameraOnboardingStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdCameraPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdCameraPermissionsPermissionScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdCameraRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdCameraRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdCameraRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdCameraRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdCameraRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
