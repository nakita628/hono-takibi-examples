import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStorageMigrationSourcesIdRoute,
  getStorageMigrationsIdRoute,
  getStorageMigrationSourceCoverageRoute,
  getStorageMigrationSourcesIdRoute,
  getStorageMigrationSourcesRoute,
  getStorageMigrationsRoute,
  postStorageMigrationsIdActionsStopRoute,
  postStorageMigrationSourcesRoute,
  postStorageMigrationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataMigrationHandler = app
  .openapi(getStorageMigrationSourceCoverageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageMigrationSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageMigrationSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStorageMigrationSourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageMigrationSourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageMigrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageMigrationsIdActionsStopRoute, (c) => {
    throw new Error('Not implemented')
  })
