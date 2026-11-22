import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameOperationsRoute,
  deleteV1NameRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentBackupPlansRoute,
  getV1ParentBackupsRoute,
  getV1ParentRestorePlansRoute,
  getV1ParentRestoresRoute,
  getV1ParentVolumeBackupsRoute,
  getV1ParentVolumeRestoresRoute,
  getV1ResourceGetIamPolicyRoute,
  patchV1NameRoute,
  postV1NameCancelRoute,
  postV1ParentBackupPlansRoute,
  postV1ParentBackupsRoute,
  postV1ParentRestorePlansRoute,
  postV1ParentRestoresRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentBackupPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentBackupPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentRestorePlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentRestorePlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentRestoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentRestoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentVolumeBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentVolumeRestoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
