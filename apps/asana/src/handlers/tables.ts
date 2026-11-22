import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTablesTableGidRoute,
  getTablesTableGidCustomFieldSettingsRoute,
  getTablesTableGidGetCustomFieldSettingsRoute,
  getTablesTableGidRoute,
  getWorkspacesWorkspaceGidTablesRoute,
  postTablesRoute,
  postTablesTableGidAddCustomFieldSettingRoute,
  postTablesTableGidRemoveCustomFieldSettingRoute,
  putTablesTableGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tablesHandler = app
  .openapi(getWorkspacesWorkspaceGidTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTablesTableGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTablesTableGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTablesTableGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTablesTableGidAddCustomFieldSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTablesTableGidRemoveCustomFieldSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTablesTableGidGetCustomFieldSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTablesTableGidCustomFieldSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
