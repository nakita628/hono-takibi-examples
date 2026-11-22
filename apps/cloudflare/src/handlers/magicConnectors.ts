import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdMagicConnectorsConnectorIdRoute,
  getAccountsAccountIdMagicConnectorsConnectorIdInterruptsRoute,
  getAccountsAccountIdMagicConnectorsConnectorIdRoute,
  getAccountsAccountIdMagicConnectorsConnectorIdTelemetryEventsEventTEventNRoute,
  getAccountsAccountIdMagicConnectorsConnectorIdTelemetryEventsLatestRoute,
  getAccountsAccountIdMagicConnectorsConnectorIdTelemetryEventsRoute,
  getAccountsAccountIdMagicConnectorsConnectorIdTelemetrySnapshotsLatestRoute,
  getAccountsAccountIdMagicConnectorsConnectorIdTelemetrySnapshotsRoute,
  getAccountsAccountIdMagicConnectorsConnectorIdTelemetrySnapshotsSnapshotTRoute,
  getAccountsAccountIdMagicConnectorsRoute,
  patchAccountsAccountIdMagicConnectorsConnectorIdRoute,
  postAccountsAccountIdMagicConnectorsConnectorIdInterruptsRoute,
  postAccountsAccountIdMagicConnectorsRoute,
  putAccountsAccountIdMagicConnectorsConnectorIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const magicConnectorsHandler = app
  .openapi(getAccountsAccountIdMagicConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMagicConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdMagicConnectorsConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMagicConnectorsConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdMagicConnectorsConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdMagicConnectorsConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMagicConnectorsConnectorIdInterruptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMagicConnectorsConnectorIdInterruptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMagicConnectorsConnectorIdTelemetryEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMagicConnectorsConnectorIdTelemetryEventsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMagicConnectorsConnectorIdTelemetryEventsEventTEventNRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMagicConnectorsConnectorIdTelemetrySnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMagicConnectorsConnectorIdTelemetrySnapshotsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMagicConnectorsConnectorIdTelemetrySnapshotsSnapshotTRoute, (c) => {
    throw new Error('Not implemented')
  })
