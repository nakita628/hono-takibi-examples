import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiProjectsIdRoute,
  getApiProjectsIdPreviewRoute,
  getApiProjectsIdRoute,
  getApiProjectsRoute,
  patchApiProjectsIdRoute,
  postApiProjectsBackupIndexRoute,
  postApiProjectsIdBackupExportRoute,
  postApiProjectsIdDatasetExportRoute,
  postApiProjectsIdDatasetIndexRoute,
  postApiProjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getApiProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProjectsIdBackupExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProjectsIdDatasetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProjectsIdDatasetExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProjectsIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProjectsBackupIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
