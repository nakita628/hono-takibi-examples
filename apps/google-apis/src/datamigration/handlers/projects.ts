import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameLocationsRoute,
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentConnectionProfilesRoute,
  getV1beta1ParentMigrationJobsRoute,
  getV1beta1ResourceGetIamPolicyRoute,
  patchV1beta1NameRoute,
  postV1beta1MigrationJobGenerateSshScriptRoute,
  postV1beta1NameCancelRoute,
  postV1beta1NamePromoteRoute,
  postV1beta1NameRestartRoute,
  postV1beta1NameResumeRoute,
  postV1beta1NameStartRoute,
  postV1beta1NameStopRoute,
  postV1beta1NameVerifyRoute,
  postV1beta1ParentConnectionProfilesRoute,
  postV1beta1ParentMigrationJobsRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(postV1beta1MigrationJobGenerateSshScriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NamePromoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentConnectionProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentConnectionProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentMigrationJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentMigrationJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
