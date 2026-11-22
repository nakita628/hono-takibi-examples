import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConnectionsIdConnectionSourcesIdSourceRoute,
  deleteUsersIdUserConnectionsIdConnectionRoute,
  deleteUsersIdUserConnectionsIdConnectionSourcesIdSourceRoute,
  deleteUsersIdUserConnectionsRoute,
  getBanksIdBankRoute,
  getBanksIdConnectorSourcesIdConnectorSourceFieldsRoute,
  getBanksIdConnectorSourcesIdSourceRoute,
  getBanksIdConnectorSourcesRoute,
  getBanksRoute,
  getConnectionsIdConnectionLogsRoute,
  getConnectionsIdConnectionSourcesRoute,
  getConnectionsRoute,
  getConnectorsIdConnectorRoute,
  getConnectorsIdConnectorSourcesIdConnectorSourceFieldsRoute,
  getConnectorsIdConnectorSourcesIdSourceRoute,
  getConnectorsIdConnectorSourcesRoute,
  getConnectorsRoute,
  getLogsRoute,
  getProvidersIdConnectorSourcesIdConnectorSourceFieldsRoute,
  getProvidersIdConnectorSourcesIdSourceRoute,
  getProvidersIdConnectorSourcesRoute,
  getProvidersIdProviderRoute,
  getProvidersRoute,
  getUsersIdUserConnectionsIdConnectionInformationsRoute,
  getUsersIdUserConnectionsIdConnectionLogsRoute,
  getUsersIdUserConnectionsIdConnectionSourcesRoute,
  getUsersIdUserConnectionsRoute,
  getUsersIdUserLogsRoute,
  postConnectionsIdConnectionSourcesIdSourceRoute,
  postConnectorsRoute,
  postUsersIdUserConnectionsIdConnectionRoute,
  postUsersIdUserConnectionsIdConnectionSourcesIdSourceRoute,
  postUsersIdUserConnectionsRoute,
  putConnectionsIdConnectionSourcesIdSourceRoute,
  putConnectorsIdConnectorSourcesIdSourceRoute,
  putConnectorsIdConnectorSourcesRoute,
  putUsersIdUserConnectionsIdConnectionRoute,
  putUsersIdUserConnectionsIdConnectionSourcesIdSourceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectionsHandler = app
  .openapi(getBanksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBanksIdBankRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBanksIdConnectorSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBanksIdConnectorSourcesIdConnectorSourceFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBanksIdConnectorSourcesIdSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsIdConnectionLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionsIdConnectionSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConnectionsIdConnectionSourcesIdSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectionsIdConnectionSourcesIdSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectionsIdConnectionSourcesIdSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorsIdConnectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorsIdConnectorSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorsIdConnectorSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorsIdConnectorSourcesIdConnectorSourceFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorsIdConnectorSourcesIdSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorsIdConnectorSourcesIdSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersIdConnectorSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersIdConnectorSourcesIdConnectorSourceFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersIdConnectorSourcesIdSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersIdProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdUserConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdUserConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdUserConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdUserConnectionsIdConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdUserConnectionsIdConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersIdUserConnectionsIdConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdUserConnectionsIdConnectionInformationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdUserConnectionsIdConnectionLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdUserConnectionsIdConnectionSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdUserConnectionsIdConnectionSourcesIdSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdUserConnectionsIdConnectionSourcesIdSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersIdUserConnectionsIdConnectionSourcesIdSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdUserLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
