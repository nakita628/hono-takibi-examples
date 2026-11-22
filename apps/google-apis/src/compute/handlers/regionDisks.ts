import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionDisksDiskRoute,
  getProjectsProjectRegionsRegionDisksDiskRoute,
  getProjectsProjectRegionsRegionDisksResourceGetIamPolicyRoute,
  getProjectsProjectRegionsRegionDisksRoute,
  patchProjectsProjectRegionsRegionDisksDiskRoute,
  postProjectsProjectRegionsRegionDisksBulkInsertRoute,
  postProjectsProjectRegionsRegionDisksDiskAddResourcePoliciesRoute,
  postProjectsProjectRegionsRegionDisksDiskCreateSnapshotRoute,
  postProjectsProjectRegionsRegionDisksDiskRemoveResourcePoliciesRoute,
  postProjectsProjectRegionsRegionDisksDiskResizeRoute,
  postProjectsProjectRegionsRegionDisksDiskStartAsyncReplicationRoute,
  postProjectsProjectRegionsRegionDisksDiskStopAsyncReplicationRoute,
  postProjectsProjectRegionsRegionDisksResourceSetIamPolicyRoute,
  postProjectsProjectRegionsRegionDisksResourceSetLabelsRoute,
  postProjectsProjectRegionsRegionDisksResourceTestIamPermissionsRoute,
  postProjectsProjectRegionsRegionDisksRoute,
  postProjectsProjectRegionsRegionDisksStopGroupAsyncReplicationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionDisksHandler = app
  .openapi(getProjectsProjectRegionsRegionDisksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionDisksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionDisksBulkInsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionDisksStopGroupAsyncReplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionDisksDiskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionDisksDiskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectRegionsRegionDisksDiskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionDisksDiskAddResourcePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionDisksDiskCreateSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionDisksDiskRemoveResourcePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionDisksDiskResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionDisksDiskStartAsyncReplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionDisksDiskStopAsyncReplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionDisksResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionDisksResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionDisksResourceSetLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionDisksResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
