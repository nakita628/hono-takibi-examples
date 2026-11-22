import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWorkspacesWorkspaceIdAlertmanagerDefinitionRoute,
  deleteWorkspacesWorkspaceIdLoggingRoute,
  deleteWorkspacesWorkspaceIdRoute,
  deleteWorkspacesWorkspaceIdRulegroupsnamespacesNameRoute,
  getWorkspacesRoute,
  getWorkspacesWorkspaceIdAlertmanagerDefinitionRoute,
  getWorkspacesWorkspaceIdLoggingRoute,
  getWorkspacesWorkspaceIdRoute,
  getWorkspacesWorkspaceIdRulegroupsnamespacesNameRoute,
  getWorkspacesWorkspaceIdRulegroupsnamespacesRoute,
  postWorkspacesRoute,
  postWorkspacesWorkspaceIdAlertmanagerDefinitionRoute,
  postWorkspacesWorkspaceIdAliasRoute,
  postWorkspacesWorkspaceIdLoggingRoute,
  postWorkspacesWorkspaceIdRulegroupsnamespacesRoute,
  putWorkspacesWorkspaceIdAlertmanagerDefinitionRoute,
  putWorkspacesWorkspaceIdLoggingRoute,
  putWorkspacesWorkspaceIdRulegroupsnamespacesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workspacesHandler = app
  .openapi(postWorkspacesWorkspaceIdAlertmanagerDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspacesWorkspaceIdAlertmanagerDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceIdAlertmanagerDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspacesWorkspaceIdAlertmanagerDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspaceIdLoggingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspacesWorkspaceIdLoggingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceIdLoggingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspacesWorkspaceIdLoggingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspaceIdRulegroupsnamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceIdRulegroupsnamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspacesWorkspaceIdRulegroupsnamespacesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceIdRulegroupsnamespacesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspacesWorkspaceIdRulegroupsnamespacesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspaceIdAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
