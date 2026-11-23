import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1betaNameRoute,
  getV1betaNameLocationsRoute,
  getV1betaNameOperationsRoute,
  getV1betaNameRoute,
  getV1betaParentBackupsRoute,
  getV1betaParentFederationsRoute,
  getV1betaParentMetadataImportsRoute,
  getV1betaParentServicesRoute,
  getV1betaResourceGetIamPolicyRoute,
  patchV1betaNameRoute,
  postV1betaNameCancelRoute,
  postV1betaParentBackupsRoute,
  postV1betaParentFederationsRoute,
  postV1betaParentMetadataImportsRoute,
  postV1betaParentServicesRoute,
  postV1betaResourceRemoveIamPolicyRoute,
  postV1betaResourceSetIamPolicyRoute,
  postV1betaResourceTestIamPermissionsRoute,
  postV1betaServiceAlterLocationRoute,
  postV1betaServiceExportMetadataRoute,
  postV1betaServiceMoveTableToDatabaseRoute,
  postV1betaServiceQueryMetadataRoute,
  postV1betaServiceRestoreRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1betaHandler = app
  .openapi(deleteV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaNameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaNameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaNameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentFederationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentFederationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentMetadataImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentMetadataImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaResourceRemoveIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaServiceAlterLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaServiceExportMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaServiceMoveTableToDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaServiceQueryMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaServiceRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
