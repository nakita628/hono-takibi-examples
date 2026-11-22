import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestAtlassianConnect1MigrationConnectKeyJiraIssueFieldsKeyTaskRoute,
  postRestAtlassianConnect1MigrationConnectKeyJiraIssueFieldsKeyTaskRoute,
} from '../routes'

const app = new OpenAPIHono()

export const migrationOfConnectModulesToForgeHandler = app
  .openapi(getRestAtlassianConnect1MigrationConnectKeyJiraIssueFieldsKeyTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestAtlassianConnect1MigrationConnectKeyJiraIssueFieldsKeyTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
