import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionInstantSnapshotsInstantSnapshotRoute,
  getProjectsProjectRegionsRegionInstantSnapshotsInstantSnapshotRoute,
  getProjectsProjectRegionsRegionInstantSnapshotsResourceGetIamPolicyRoute,
  getProjectsProjectRegionsRegionInstantSnapshotsRoute,
  postProjectsProjectRegionsRegionInstantSnapshotsResourceSetIamPolicyRoute,
  postProjectsProjectRegionsRegionInstantSnapshotsResourceSetLabelsRoute,
  postProjectsProjectRegionsRegionInstantSnapshotsResourceTestIamPermissionsRoute,
  postProjectsProjectRegionsRegionInstantSnapshotsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionInstantSnapshotsHandler = app
  .openapi(getProjectsProjectRegionsRegionInstantSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionInstantSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionInstantSnapshotsInstantSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionInstantSnapshotsInstantSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionInstantSnapshotsResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionInstantSnapshotsResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionInstantSnapshotsResourceSetLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionInstantSnapshotsResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
