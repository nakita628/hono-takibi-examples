import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdSmBypassActivationLockAttemptsAttemptIdRoute,
  getNetworksNetworkIdSmDeviceIdCellularUsageHistoryRoute,
  getNetworksNetworkIdSmDeviceIdCertsRoute,
  getNetworksNetworkIdSmDeviceIdDeviceProfilesRoute,
  getNetworksNetworkIdSmDeviceIdNetworkAdaptersRoute,
  getNetworksNetworkIdSmDeviceIdRestrictionsRoute,
  getNetworksNetworkIdSmDeviceIdSecurityCentersRoute,
  getNetworksNetworkIdSmDeviceIdSoftwaresRoute,
  getNetworksNetworkIdSmDeviceIdWlanListsRoute,
  getNetworksNetworkIdSmDevicesRoute,
  getNetworksNetworkIdSmIdConnectivityRoute,
  getNetworksNetworkIdSmIdDesktopLogsRoute,
  getNetworksNetworkIdSmIdDeviceCommandLogsRoute,
  getNetworksNetworkIdSmIdPerformanceHistoryRoute,
  getNetworksNetworkIdSmProfilesRoute,
  getNetworksNetworkIdSmUsersRoute,
  getNetworksNetworkIdSmUserUserIdDeviceProfilesRoute,
  getNetworksNetworkIdSmUserUserIdSoftwaresRoute,
  postNetworksNetworkIdSmBypassActivationLockAttemptsRoute,
  postNetworksNetworkIdSmDeviceDeviceIdRefreshDetailsRoute,
  postNetworksNetworkIdSmDevicesDeviceIdUnenrollRoute,
  putNetworksNetworkIdSmDeviceFieldsRoute,
  putNetworksNetworkIdSmDevicesCheckinRoute,
  putNetworksNetworkIdSmDevicesLockRoute,
  putNetworksNetworkIdSmDevicesTagsRoute,
  putNetworksNetworkIdSmDeviceWipeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const smHandler = app
  .openapi(postNetworksNetworkIdSmBypassActivationLockAttemptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmBypassActivationLockAttemptsAttemptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSmDeviceFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSmDeviceWipeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDeviceDeviceIdRefreshDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSmDevicesCheckinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSmDevicesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDevicesDeviceIdUnenrollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmUserUserIdDeviceProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmUserUserIdSoftwaresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDeviceIdCellularUsageHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDeviceIdCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDeviceIdDeviceProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDeviceIdNetworkAdaptersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDeviceIdRestrictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDeviceIdSecurityCentersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDeviceIdSoftwaresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDeviceIdWlanListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSmDevicesLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmIdConnectivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmIdDesktopLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmIdDeviceCommandLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmIdPerformanceHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
