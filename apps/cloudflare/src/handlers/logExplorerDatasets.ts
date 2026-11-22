import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsDatasetIdRoute,
  deleteAccountsAccountIdLogsExplorerDatasetsDatasetIdRoute,
  deleteZonesZoneIdLogsExplorerDatasetsDatasetIdRoute,
  getAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsAvailableRoute,
  getAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsDatasetIdRoute,
  getAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsRoute,
  getAccountsAccountIdLogsExplorerDatasetsAvailableRoute,
  getAccountsAccountIdLogsExplorerDatasetsDatasetIdRoute,
  getAccountsAccountIdLogsExplorerDatasetsRoute,
  getZonesZoneIdLogsExplorerDatasetsAvailableRoute,
  getZonesZoneIdLogsExplorerDatasetsDatasetIdRoute,
  getZonesZoneIdLogsExplorerDatasetsRoute,
  postAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsRoute,
  postAccountsAccountIdLogsExplorerDatasetsRoute,
  postZonesZoneIdLogsExplorerDatasetsRoute,
  putAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsDatasetIdRoute,
  putAccountsAccountIdLogsExplorerDatasetsDatasetIdRoute,
  putZonesZoneIdLogsExplorerDatasetsDatasetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logExplorerDatasetsHandler = app
  .openapi(getAccountsAccountIdLogsExplorerDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdLogsExplorerDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLogsExplorerDatasetsAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdLogsExplorerDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLogsExplorerDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdLogsExplorerDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdLogsExplorerDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdLogsExplorerDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdLogsExplorerDatasetsAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdLogsExplorerDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdLogsExplorerDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdLogsExplorerDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountOrZoneAccountOrZoneIdLogsExplorerDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
