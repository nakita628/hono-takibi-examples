import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationsOrganizationIdWirelessControllerAvailabilitiesChangeHistoryRoute,
  getOrganizationsOrganizationIdWirelessControllerClientsOverviewHistoryByDeviceByIntervalRoute,
  getOrganizationsOrganizationIdWirelessControllerConnectionsRoute,
  getOrganizationsOrganizationIdWirelessControllerDevicesInterfacesL2ByDeviceRoute,
  getOrganizationsOrganizationIdWirelessControllerDevicesInterfacesL2StatusesChangeHistoryByDeviceRoute,
  getOrganizationsOrganizationIdWirelessControllerDevicesInterfacesL2UsageHistoryByIntervalRoute,
  getOrganizationsOrganizationIdWirelessControllerDevicesInterfacesL3ByDeviceRoute,
  getOrganizationsOrganizationIdWirelessControllerDevicesInterfacesL3StatusesChangeHistoryByDeviceRoute,
  getOrganizationsOrganizationIdWirelessControllerDevicesInterfacesL3UsageHistoryByIntervalRoute,
  getOrganizationsOrganizationIdWirelessControllerDevicesInterfacesPacketsOverviewByDeviceRoute,
  getOrganizationsOrganizationIdWirelessControllerDevicesInterfacesUsageHistoryByIntervalRoute,
  getOrganizationsOrganizationIdWirelessControllerDevicesRedundancyFailoverHistoryRoute,
  getOrganizationsOrganizationIdWirelessControllerDevicesRedundancyStatusesRoute,
  getOrganizationsOrganizationIdWirelessControllerDevicesSystemUtilizationHistoryByIntervalRoute,
  getOrganizationsOrganizationIdWirelessControllerOverviewByDeviceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wirelessControllerHandler = app
  .openapi(
    getOrganizationsOrganizationIdWirelessControllerAvailabilitiesChangeHistoryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdWirelessControllerClientsOverviewHistoryByDeviceByIntervalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdWirelessControllerConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationsOrganizationIdWirelessControllerDevicesInterfacesL2ByDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdWirelessControllerDevicesInterfacesL2StatusesChangeHistoryByDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdWirelessControllerDevicesInterfacesL2UsageHistoryByIntervalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdWirelessControllerDevicesInterfacesL3ByDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdWirelessControllerDevicesInterfacesL3StatusesChangeHistoryByDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdWirelessControllerDevicesInterfacesL3UsageHistoryByIntervalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdWirelessControllerDevicesInterfacesPacketsOverviewByDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdWirelessControllerDevicesInterfacesUsageHistoryByIntervalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdWirelessControllerDevicesRedundancyFailoverHistoryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdWirelessControllerDevicesRedundancyStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationsOrganizationIdWirelessControllerDevicesSystemUtilizationHistoryByIntervalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdWirelessControllerOverviewByDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
