import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCloudmigrationMigrationUidRoute,
  deleteCloudmigrationTokenUidRoute,
  getCloudmigrationMigrationRoute,
  getCloudmigrationMigrationUidRoute,
  getCloudmigrationMigrationUidSnapshotSnapshotUidRoute,
  getCloudmigrationMigrationUidSnapshotsRoute,
  getCloudmigrationResourcesDependenciesRoute,
  getCloudmigrationTokenRoute,
  postCloudmigrationMigrationRoute,
  postCloudmigrationMigrationUidSnapshotRoute,
  postCloudmigrationMigrationUidSnapshotSnapshotUidCancelRoute,
  postCloudmigrationMigrationUidSnapshotSnapshotUidUploadRoute,
  postCloudmigrationTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const migrationsHandler = app
  .openapi(getCloudmigrationMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCloudmigrationMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCloudmigrationMigrationUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCloudmigrationMigrationUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCloudmigrationMigrationUidSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCloudmigrationMigrationUidSnapshotSnapshotUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCloudmigrationMigrationUidSnapshotSnapshotUidCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCloudmigrationMigrationUidSnapshotSnapshotUidUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCloudmigrationMigrationUidSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCloudmigrationResourcesDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCloudmigrationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCloudmigrationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCloudmigrationTokenUidRoute, (c) => {
    throw new Error('Not implemented')
  })
