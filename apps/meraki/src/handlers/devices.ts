import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDevicesSerialCellularSimsRoute,
  getDevicesSerialClientsRoute,
  getDevicesSerialLiveToolsArpTableArpTableIdRoute,
  getDevicesSerialLiveToolsCableTestIdRoute,
  getDevicesSerialLiveToolsLedsBlinkLedsBlinkIdRoute,
  getDevicesSerialLiveToolsMacTableMacTableIdRoute,
  getDevicesSerialLiveToolsMulticastRoutingMulticastRoutingIdRoute,
  getDevicesSerialLiveToolsPingDeviceIdRoute,
  getDevicesSerialLiveToolsPingIdRoute,
  getDevicesSerialLiveToolsPortsCycleIdRoute,
  getDevicesSerialLiveToolsPortsStatusJobIdRoute,
  getDevicesSerialLiveToolsPowerUsageJobIdRoute,
  getDevicesSerialLiveToolsRouteDetailsJobIdRoute,
  getDevicesSerialLiveToolsRoutingTableLookupsIdRoute,
  getDevicesSerialLiveToolsRoutingTableSummariesIdRoute,
  getDevicesSerialLiveToolsThroughputTestThroughputTestIdRoute,
  getDevicesSerialLiveToolsWakeOnLanWakeOnLanIdRoute,
  getDevicesSerialLldpCdpRoute,
  getDevicesSerialLossAndLatencyHistoryRoute,
  getDevicesSerialManagementInterfaceRoute,
  getDevicesSerialRoute,
  postDevicesSerialBlinkLedsRoute,
  postDevicesSerialCellularUplinksBandsMasksUpdateRoute,
  postDevicesSerialCertificatesCertificateSerialRevokeRoute,
  postDevicesSerialLiveToolsArpTableRoute,
  postDevicesSerialLiveToolsCableTestRoute,
  postDevicesSerialLiveToolsLedsBlinkRoute,
  postDevicesSerialLiveToolsMacTableRoute,
  postDevicesSerialLiveToolsMulticastRoutingRoute,
  postDevicesSerialLiveToolsPingDeviceRoute,
  postDevicesSerialLiveToolsPingRoute,
  postDevicesSerialLiveToolsPortsCycleRoute,
  postDevicesSerialLiveToolsPortsStatusRoute,
  postDevicesSerialLiveToolsPowerUsageRoute,
  postDevicesSerialLiveToolsRouteDetailsRoute,
  postDevicesSerialLiveToolsRoutingTableLookupsRoute,
  postDevicesSerialLiveToolsRoutingTableSummariesRoute,
  postDevicesSerialLiveToolsThroughputTestRoute,
  postDevicesSerialLiveToolsWakeOnLanRoute,
  postDevicesSerialRebootRoute,
  putDevicesSerialCellularGeolocationsRoute,
  putDevicesSerialCellularSimsRoute,
  putDevicesSerialManagementInterfaceRoute,
  putDevicesSerialRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicesHandler = app
  .openapi(getDevicesSerialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialBlinkLedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialCellularGeolocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCellularSimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialCellularSimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialCellularUplinksBandsMasksUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialCertificatesCertificateSerialRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsArpTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsArpTableArpTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsCableTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsCableTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsLedsBlinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsLedsBlinkLedsBlinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsMacTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsMacTableMacTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsMulticastRoutingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsMulticastRoutingMulticastRoutingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsPingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsPingDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsPingDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsPortsCycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsPortsCycleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsPortsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsPortsStatusJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsPowerUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsPowerUsageJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsRouteDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsRouteDetailsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsRoutingTableLookupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsRoutingTableLookupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsRoutingTableSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsRoutingTableSummariesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsThroughputTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsThroughputTestThroughputTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsWakeOnLanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsWakeOnLanWakeOnLanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLldpCdpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLossAndLatencyHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialManagementInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialManagementInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialRebootRoute, (c) => {
    throw new Error('Not implemented')
  })
