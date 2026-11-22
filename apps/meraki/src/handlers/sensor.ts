import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworksNetworkIdSensorAlertsProfilesIdRoute,
  getDevicesSerialSensorCommandsCommandIdRoute,
  getDevicesSerialSensorCommandsRoute,
  getDevicesSerialSensorRelationshipsRoute,
  getNetworksNetworkIdSensorAlertsCurrentOverviewByMetricRoute,
  getNetworksNetworkIdSensorAlertsOverviewByMetricRoute,
  getNetworksNetworkIdSensorAlertsProfilesIdRoute,
  getNetworksNetworkIdSensorAlertsProfilesRoute,
  getNetworksNetworkIdSensorMqttBrokersMqttBrokerIdRoute,
  getNetworksNetworkIdSensorMqttBrokersRoute,
  getNetworksNetworkIdSensorRelationshipsRoute,
  getOrganizationsOrganizationIdSensorGatewaysConnectionsLatestRoute,
  getOrganizationsOrganizationIdSensorReadingsHistoryRoute,
  getOrganizationsOrganizationIdSensorReadingsLatestRoute,
  postDevicesSerialSensorCommandsRoute,
  postNetworksNetworkIdSensorAlertsProfilesRoute,
  putDevicesSerialSensorRelationshipsRoute,
  putNetworksNetworkIdSensorAlertsProfilesIdRoute,
  putNetworksNetworkIdSensorMqttBrokersMqttBrokerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sensorHandler = app
  .openapi(getDevicesSerialSensorCommandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialSensorCommandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialSensorCommandsCommandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialSensorRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialSensorRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSensorAlertsCurrentOverviewByMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSensorAlertsOverviewByMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSensorAlertsProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSensorAlertsProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSensorAlertsProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSensorAlertsProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdSensorAlertsProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSensorMqttBrokersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSensorMqttBrokersMqttBrokerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSensorMqttBrokersMqttBrokerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSensorRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSensorGatewaysConnectionsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSensorReadingsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSensorReadingsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
