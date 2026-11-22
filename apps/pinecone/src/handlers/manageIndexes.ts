import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBackupsBackupIdRoute,
  deleteCollectionsCollectionNameRoute,
  deleteIndexesIndexNameRoute,
  getBackupsBackupIdRoute,
  getBackupsRoute,
  getCollectionsCollectionNameRoute,
  getCollectionsRoute,
  getIndexesIndexNameBackupsRoute,
  getIndexesIndexNameRoute,
  getIndexesRoute,
  getRestoreJobsJobIdRoute,
  getRestoreJobsRoute,
  patchIndexesIndexNameRoute,
  postBackupsBackupIdCreateIndexRoute,
  postCollectionsRoute,
  postIndexesCreateForModelRoute,
  postIndexesIndexNameBackupsRoute,
  postIndexesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const manageIndexesHandler = app
  .openapi(getIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIndexesIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexNameBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesIndexNameBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesCreateForModelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackupsBackupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBackupsBackupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackupsBackupIdCreateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestoreJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestoreJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsCollectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
