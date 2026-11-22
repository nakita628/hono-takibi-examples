import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectZonesZoneDisksDiskRoute,
  getProjectsProjectAggregatedDisksRoute,
  getProjectsProjectZonesZoneDisksDiskRoute,
  getProjectsProjectZonesZoneDisksResourceGetIamPolicyRoute,
  getProjectsProjectZonesZoneDisksRoute,
  patchProjectsProjectZonesZoneDisksDiskRoute,
  postProjectsProjectZonesZoneDisksBulkInsertRoute,
  postProjectsProjectZonesZoneDisksDiskAddResourcePoliciesRoute,
  postProjectsProjectZonesZoneDisksDiskCreateSnapshotRoute,
  postProjectsProjectZonesZoneDisksDiskRemoveResourcePoliciesRoute,
  postProjectsProjectZonesZoneDisksDiskResizeRoute,
  postProjectsProjectZonesZoneDisksDiskStartAsyncReplicationRoute,
  postProjectsProjectZonesZoneDisksDiskStopAsyncReplicationRoute,
  postProjectsProjectZonesZoneDisksResourceSetIamPolicyRoute,
  postProjectsProjectZonesZoneDisksResourceSetLabelsRoute,
  postProjectsProjectZonesZoneDisksResourceTestIamPermissionsRoute,
  postProjectsProjectZonesZoneDisksRoute,
  postProjectsProjectZonesZoneDisksStopGroupAsyncReplicationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const disksHandler = app
  .openapi(getProjectsProjectAggregatedDisksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneDisksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneDisksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneDisksBulkInsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneDisksStopGroupAsyncReplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectZonesZoneDisksDiskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneDisksDiskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectZonesZoneDisksDiskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneDisksDiskAddResourcePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneDisksDiskCreateSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneDisksDiskRemoveResourcePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneDisksDiskResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneDisksDiskStartAsyncReplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneDisksDiskStopAsyncReplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneDisksResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneDisksResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneDisksResourceSetLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneDisksResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
