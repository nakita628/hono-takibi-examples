import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1alpha1NameRoute,
  getV1alpha1NameLocationsRoute,
  getV1alpha1NameOperationsRoute,
  getV1alpha1NameRoute,
  getV1alpha1ParentCloneJobsRoute,
  getV1alpha1ParentCutoverJobsRoute,
  getV1alpha1ParentDatacenterConnectorsRoute,
  getV1alpha1ParentGroupsRoute,
  getV1alpha1ParentMigratingVmsRoute,
  getV1alpha1ParentReplicationCyclesRoute,
  getV1alpha1ParentSourcesRoute,
  getV1alpha1ParentTargetProjectsRoute,
  getV1alpha1ParentUtilizationReportsRoute,
  getV1alpha1SourceFetchInventoryRoute,
  patchV1alpha1NameRoute,
  postV1alpha1DatacenterConnectorUpgradeApplianceRoute,
  postV1alpha1GroupAddGroupMigrationRoute,
  postV1alpha1GroupRemoveGroupMigrationRoute,
  postV1alpha1MigratingVmFinalizeMigrationRoute,
  postV1alpha1MigratingVmPauseMigrationRoute,
  postV1alpha1MigratingVmResumeMigrationRoute,
  postV1alpha1MigratingVmStartMigrationRoute,
  postV1alpha1NameCancelRoute,
  postV1alpha1ParentCloneJobsRoute,
  postV1alpha1ParentCutoverJobsRoute,
  postV1alpha1ParentDatacenterConnectorsRoute,
  postV1alpha1ParentGroupsRoute,
  postV1alpha1ParentMigratingVmsRoute,
  postV1alpha1ParentSourcesRoute,
  postV1alpha1ParentTargetProjectsRoute,
  postV1alpha1ParentUtilizationReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(postV1alpha1DatacenterConnectorUpgradeApplianceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1GroupAddGroupMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1GroupRemoveGroupMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1MigratingVmFinalizeMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1MigratingVmPauseMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1MigratingVmResumeMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1MigratingVmStartMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1alpha1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1alpha1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentCloneJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentCloneJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentCutoverJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentCutoverJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentDatacenterConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentDatacenterConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentMigratingVmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentMigratingVmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentReplicationCyclesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentTargetProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentTargetProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentUtilizationReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentUtilizationReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1SourceFetchInventoryRoute, (c) => {
    throw new Error('Not implemented')
  })
