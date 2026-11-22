import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalSnapshotsSnapshotRoute,
  getProjectsProjectGlobalSnapshotsResourceGetIamPolicyRoute,
  getProjectsProjectGlobalSnapshotsRoute,
  getProjectsProjectGlobalSnapshotsSnapshotRoute,
  postProjectsProjectGlobalSnapshotsResourceSetIamPolicyRoute,
  postProjectsProjectGlobalSnapshotsResourceSetLabelsRoute,
  postProjectsProjectGlobalSnapshotsResourceTestIamPermissionsRoute,
  postProjectsProjectGlobalSnapshotsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const snapshotsHandler = app
  .openapi(getProjectsProjectGlobalSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalSnapshotsResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalSnapshotsResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalSnapshotsResourceSetLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalSnapshotsResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalSnapshotsSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalSnapshotsSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
