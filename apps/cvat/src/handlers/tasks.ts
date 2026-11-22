import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTasksIdAnnotationsIndexRoute,
  deleteApiTasksIdRoute,
  getApiTasksIdAnnotationsIndexRoute,
  getApiTasksIdDataIndexRoute,
  getApiTasksIdDataMetaRoute,
  getApiTasksIdPreviewRoute,
  getApiTasksIdRoute,
  getApiTasksIdStatusRoute,
  getApiTasksIdValidationLayoutRoute,
  getApiTasksRoute,
  patchApiTasksIdAnnotationsIndexRoute,
  patchApiTasksIdDataMetaRoute,
  patchApiTasksIdRoute,
  patchApiTasksIdValidationLayoutRoute,
  postApiTasksBackupIndexRoute,
  postApiTasksIdAnnotationsIndexRoute,
  postApiTasksIdBackupExportRoute,
  postApiTasksIdDataIndexRoute,
  postApiTasksIdDatasetExportRoute,
  postApiTasksRoute,
  putApiTasksIdAnnotationsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tasksHandler = app
  .openapi(getApiTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiTasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTasksIdAnnotationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTasksIdAnnotationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTasksIdAnnotationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiTasksIdAnnotationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTasksIdAnnotationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTasksIdBackupExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTasksIdDataIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTasksIdDataIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTasksIdDataMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiTasksIdDataMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTasksIdDatasetExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTasksIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTasksIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTasksIdValidationLayoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiTasksIdValidationLayoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTasksBackupIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
