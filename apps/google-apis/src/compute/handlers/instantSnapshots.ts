import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectZonesZoneInstantSnapshotsInstantSnapshotRoute,
  getProjectsProjectAggregatedInstantSnapshotsRoute,
  getProjectsProjectZonesZoneInstantSnapshotsInstantSnapshotRoute,
  getProjectsProjectZonesZoneInstantSnapshotsResourceGetIamPolicyRoute,
  getProjectsProjectZonesZoneInstantSnapshotsRoute,
  postProjectsProjectZonesZoneInstantSnapshotsResourceSetIamPolicyRoute,
  postProjectsProjectZonesZoneInstantSnapshotsResourceSetLabelsRoute,
  postProjectsProjectZonesZoneInstantSnapshotsResourceTestIamPermissionsRoute,
  postProjectsProjectZonesZoneInstantSnapshotsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const instantSnapshotsHandler = app
  .openapi(getProjectsProjectAggregatedInstantSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneInstantSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstantSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectZonesZoneInstantSnapshotsInstantSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneInstantSnapshotsInstantSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneInstantSnapshotsResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstantSnapshotsResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstantSnapshotsResourceSetLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneInstantSnapshotsResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
