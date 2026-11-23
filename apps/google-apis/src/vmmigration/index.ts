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
} from './routes'
import {
  deleteV1alpha1NameRouteHandler,
  getV1alpha1NameLocationsRouteHandler,
  getV1alpha1NameOperationsRouteHandler,
  getV1alpha1NameRouteHandler,
  getV1alpha1ParentCloneJobsRouteHandler,
  getV1alpha1ParentCutoverJobsRouteHandler,
  getV1alpha1ParentDatacenterConnectorsRouteHandler,
  getV1alpha1ParentGroupsRouteHandler,
  getV1alpha1ParentMigratingVmsRouteHandler,
  getV1alpha1ParentReplicationCyclesRouteHandler,
  getV1alpha1ParentSourcesRouteHandler,
  getV1alpha1ParentTargetProjectsRouteHandler,
  getV1alpha1ParentUtilizationReportsRouteHandler,
  getV1alpha1SourceFetchInventoryRouteHandler,
  patchV1alpha1NameRouteHandler,
  postV1alpha1DatacenterConnectorUpgradeApplianceRouteHandler,
  postV1alpha1GroupAddGroupMigrationRouteHandler,
  postV1alpha1GroupRemoveGroupMigrationRouteHandler,
  postV1alpha1MigratingVmFinalizeMigrationRouteHandler,
  postV1alpha1MigratingVmPauseMigrationRouteHandler,
  postV1alpha1MigratingVmResumeMigrationRouteHandler,
  postV1alpha1MigratingVmStartMigrationRouteHandler,
  postV1alpha1NameCancelRouteHandler,
  postV1alpha1ParentCloneJobsRouteHandler,
  postV1alpha1ParentCutoverJobsRouteHandler,
  postV1alpha1ParentDatacenterConnectorsRouteHandler,
  postV1alpha1ParentGroupsRouteHandler,
  postV1alpha1ParentMigratingVmsRouteHandler,
  postV1alpha1ParentSourcesRouteHandler,
  postV1alpha1ParentTargetProjectsRouteHandler,
  postV1alpha1ParentUtilizationReportsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postV1alpha1DatacenterConnectorUpgradeApplianceRoute,
    postV1alpha1DatacenterConnectorUpgradeApplianceRouteHandler,
  )
  .openapi(postV1alpha1GroupAddGroupMigrationRoute, postV1alpha1GroupAddGroupMigrationRouteHandler)
  .openapi(
    postV1alpha1GroupRemoveGroupMigrationRoute,
    postV1alpha1GroupRemoveGroupMigrationRouteHandler,
  )
  .openapi(
    postV1alpha1MigratingVmFinalizeMigrationRoute,
    postV1alpha1MigratingVmFinalizeMigrationRouteHandler,
  )
  .openapi(
    postV1alpha1MigratingVmPauseMigrationRoute,
    postV1alpha1MigratingVmPauseMigrationRouteHandler,
  )
  .openapi(
    postV1alpha1MigratingVmResumeMigrationRoute,
    postV1alpha1MigratingVmResumeMigrationRouteHandler,
  )
  .openapi(
    postV1alpha1MigratingVmStartMigrationRoute,
    postV1alpha1MigratingVmStartMigrationRouteHandler,
  )
  .openapi(deleteV1alpha1NameRoute, deleteV1alpha1NameRouteHandler)
  .openapi(getV1alpha1NameRoute, getV1alpha1NameRouteHandler)
  .openapi(patchV1alpha1NameRoute, patchV1alpha1NameRouteHandler)
  .openapi(getV1alpha1NameLocationsRoute, getV1alpha1NameLocationsRouteHandler)
  .openapi(getV1alpha1NameOperationsRoute, getV1alpha1NameOperationsRouteHandler)
  .openapi(postV1alpha1NameCancelRoute, postV1alpha1NameCancelRouteHandler)
  .openapi(getV1alpha1ParentCloneJobsRoute, getV1alpha1ParentCloneJobsRouteHandler)
  .openapi(postV1alpha1ParentCloneJobsRoute, postV1alpha1ParentCloneJobsRouteHandler)
  .openapi(getV1alpha1ParentCutoverJobsRoute, getV1alpha1ParentCutoverJobsRouteHandler)
  .openapi(postV1alpha1ParentCutoverJobsRoute, postV1alpha1ParentCutoverJobsRouteHandler)
  .openapi(
    getV1alpha1ParentDatacenterConnectorsRoute,
    getV1alpha1ParentDatacenterConnectorsRouteHandler,
  )
  .openapi(
    postV1alpha1ParentDatacenterConnectorsRoute,
    postV1alpha1ParentDatacenterConnectorsRouteHandler,
  )
  .openapi(getV1alpha1ParentGroupsRoute, getV1alpha1ParentGroupsRouteHandler)
  .openapi(postV1alpha1ParentGroupsRoute, postV1alpha1ParentGroupsRouteHandler)
  .openapi(getV1alpha1ParentMigratingVmsRoute, getV1alpha1ParentMigratingVmsRouteHandler)
  .openapi(postV1alpha1ParentMigratingVmsRoute, postV1alpha1ParentMigratingVmsRouteHandler)
  .openapi(getV1alpha1ParentReplicationCyclesRoute, getV1alpha1ParentReplicationCyclesRouteHandler)
  .openapi(getV1alpha1ParentSourcesRoute, getV1alpha1ParentSourcesRouteHandler)
  .openapi(postV1alpha1ParentSourcesRoute, postV1alpha1ParentSourcesRouteHandler)
  .openapi(getV1alpha1ParentTargetProjectsRoute, getV1alpha1ParentTargetProjectsRouteHandler)
  .openapi(postV1alpha1ParentTargetProjectsRoute, postV1alpha1ParentTargetProjectsRouteHandler)
  .openapi(
    getV1alpha1ParentUtilizationReportsRoute,
    getV1alpha1ParentUtilizationReportsRouteHandler,
  )
  .openapi(
    postV1alpha1ParentUtilizationReportsRoute,
    postV1alpha1ParentUtilizationReportsRouteHandler,
  )
  .openapi(getV1alpha1SourceFetchInventoryRoute, getV1alpha1SourceFetchInventoryRouteHandler)

export default app
