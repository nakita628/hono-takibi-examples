import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postRestAtlassianConnect1MigrationWorkflowRuleSearchRoute,
  putRestAtlassianConnect1MigrationFieldRoute,
  putRestAtlassianConnect1MigrationPropertiesEntityTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appMigrationHandler = app
  .openapi(putRestAtlassianConnect1MigrationFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestAtlassianConnect1MigrationPropertiesEntityTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestAtlassianConnect1MigrationWorkflowRuleSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
