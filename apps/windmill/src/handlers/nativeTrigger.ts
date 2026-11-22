import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceNativeTriggersServiceNameDeleteExternalIdRoute,
  getWWorkspaceNativeTriggersGithubReposRoute,
  getWWorkspaceNativeTriggersGoogleCalendarsRoute,
  getWWorkspaceNativeTriggersGoogleDriveFilesRoute,
  getWWorkspaceNativeTriggersGoogleDriveSharedDrivesRoute,
  getWWorkspaceNativeTriggersNextcloudEventsRoute,
  getWWorkspaceNativeTriggersServiceNameExistsExternalIdRoute,
  getWWorkspaceNativeTriggersServiceNameGetExternalIdRoute,
  getWWorkspaceNativeTriggersServiceNameListRoute,
  postNativeTriggersServiceNameWWorkspaceIdWebhookInternalIdRoute,
  postWWorkspaceNativeTriggersServiceNameCreateRoute,
  postWWorkspaceNativeTriggersServiceNameSetenabledExternalIdRoute,
  postWWorkspaceNativeTriggersServiceNameSyncRoute,
  postWWorkspaceNativeTriggersServiceNameUpdateExternalIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nativeTriggerHandler = app
  .openapi(postWWorkspaceNativeTriggersServiceNameCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceNativeTriggersServiceNameUpdateExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNativeTriggersServiceNameGetExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceNativeTriggersServiceNameDeleteExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceNativeTriggersServiceNameSetenabledExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNativeTriggersServiceNameListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNativeTriggersServiceNameExistsExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceNativeTriggersServiceNameSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNativeTriggersNextcloudEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNativeTriggersGoogleCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNativeTriggersGoogleDriveFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNativeTriggersGoogleDriveSharedDrivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNativeTriggersGithubReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNativeTriggersServiceNameWWorkspaceIdWebhookInternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
