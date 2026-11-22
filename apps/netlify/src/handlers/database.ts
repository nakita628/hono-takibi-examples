import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesSiteIdDatabaseBranchBranchIdRoute,
  deleteSitesSiteIdDatabaseComputeSettingsRoute,
  deleteSitesSiteIdDatabaseRoute,
  deleteSitesSiteIdDatabaseSnapshotSnapshotIdRoute,
  getSitesSiteIdDatabaseBranchBranchIdRoute,
  getSitesSiteIdDatabaseBranchesRoute,
  getSitesSiteIdDatabaseComputeSettingsRoute,
  getSitesSiteIdDatabaseMigrationsNameRoute,
  getSitesSiteIdDatabaseMigrationsRoute,
  getSitesSiteIdDatabaseRoute,
  getSitesSiteIdDatabaseSnapshotsRoute,
  postSitesSiteIdDatabaseBranchBranchIdResetRoute,
  postSitesSiteIdDatabaseBranchRoute,
  postSitesSiteIdDatabaseMigrationsDeployIdRoute,
  postSitesSiteIdDatabaseRoute,
  postSitesSiteIdDatabaseSnapshotRoute,
  postSitesSiteIdDatabaseSnapshotSnapshotIdRestoreRoute,
  putSitesSiteIdDatabaseBranchBranchIdComputeSettingsRoute,
  putSitesSiteIdDatabaseComputeSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const databaseHandler = app
  .openapi(postSitesSiteIdDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdDatabaseBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDatabaseBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDatabaseBranchBranchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdDatabaseBranchBranchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdDatabaseBranchBranchIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdDatabaseBranchBranchIdComputeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdDatabaseComputeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDatabaseComputeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdDatabaseComputeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDatabaseMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDatabaseMigrationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdDatabaseMigrationsDeployIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdDatabaseSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDatabaseSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdDatabaseSnapshotSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdDatabaseSnapshotSnapshotIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
