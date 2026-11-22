import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1EnvironmentsEnvironmentIdPortsPortRoute,
  deleteApiV1EnvironmentsEnvironmentIdRoute,
  deleteApiV1GenevaActionsEnvironmentsEnvironmentIdRoute,
  getApiV1EnvironmentsEnvironmentIdArchiveRoute,
  getApiV1EnvironmentsEnvironmentIdHeartbeattokenRoute,
  getApiV1EnvironmentsEnvironmentIdRoute,
  getApiV1EnvironmentsEnvironmentIdStateRoute,
  getApiV1EnvironmentsEnvironmentIdUpdatesRoute,
  getApiV1EnvironmentsRoute,
  getApiV1GenevaActionsEnvironmentsEnvironmentIdArchivedStorageSasTargetBlobRoute,
  getApiV1GenevaActionsEnvironmentsEnvironmentIdRoute,
  patchApiV1EnvironmentsEnvironmentIdFolderRoute,
  patchApiV1EnvironmentsEnvironmentIdRestoreRoute,
  patchApiV1EnvironmentsEnvironmentIdRoute,
  postApiV1EnvironmentsEnvironmentIdArchiveRoute,
  postApiV1EnvironmentsEnvironmentIdCallbackRoute,
  postApiV1EnvironmentsEnvironmentIdExportRoute,
  postApiV1EnvironmentsEnvironmentIdNotifyRoute,
  postApiV1EnvironmentsEnvironmentIdShutdownRoute,
  postApiV1EnvironmentsEnvironmentIdStartRoute,
  postApiV1EnvironmentsRoute,
  postApiV1GenevaActionsEnvironmentsEnvironmentIdUploadRunningVmLogsRoute,
  putApiV1EnvironmentsEnvironmentIdPortsPortRoute,
  putApiV1EnvironmentsEnvironmentIdSecretsRoute,
  putApiV1GenevaActionsEnvironmentsEnvironmentIdArchiveRoute,
  putApiV1GenevaActionsEnvironmentsEnvironmentIdShutdownRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentsHandler = app
  .openapi(getApiV1EnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1EnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1EnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EnvironmentsEnvironmentIdCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EnvironmentsEnvironmentIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EnvironmentsEnvironmentIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EnvironmentsEnvironmentIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1EnvironmentsEnvironmentIdFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EnvironmentsEnvironmentIdHeartbeattokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EnvironmentsEnvironmentIdNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1EnvironmentsEnvironmentIdPortsPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1EnvironmentsEnvironmentIdPortsPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1EnvironmentsEnvironmentIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1EnvironmentsEnvironmentIdSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EnvironmentsEnvironmentIdShutdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EnvironmentsEnvironmentIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EnvironmentsEnvironmentIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EnvironmentsEnvironmentIdUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1GenevaActionsEnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GenevaActionsEnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1GenevaActionsEnvironmentsEnvironmentIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GenevaActionsEnvironmentsEnvironmentIdArchivedStorageSasTargetBlobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1GenevaActionsEnvironmentsEnvironmentIdShutdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GenevaActionsEnvironmentsEnvironmentIdUploadRunningVmLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
