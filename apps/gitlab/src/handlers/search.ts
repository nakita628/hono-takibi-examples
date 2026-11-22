import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4AdminSearchMigrationsMigrationIdRoute,
  getApiV4AdminSearchMigrationsRoute,
  getApiV4GroupsIdU28DashSearchRoute,
  getApiV4ProjectsIdU28DashSearchRoute,
  getApiV4ProjectsIdU28DashSearchSemanticRoute,
  getApiV4SearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getApiV4ProjectsIdU28DashSearchSemanticRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AdminSearchMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AdminSearchMigrationsMigrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4SearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdU28DashSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdU28DashSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
