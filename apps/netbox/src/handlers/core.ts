import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCoreDataSourcesIdIndexRoute,
  deleteApiCoreDataSourcesIndexRoute,
  getApiCoreBackgroundQueuesIndexRoute,
  getApiCoreBackgroundQueuesNameIndexRoute,
  getApiCoreBackgroundTasksIdIndexRoute,
  getApiCoreBackgroundTasksIndexRoute,
  getApiCoreBackgroundWorkersIndexRoute,
  getApiCoreBackgroundWorkersNameIndexRoute,
  getApiCoreDataFilesIdIndexRoute,
  getApiCoreDataFilesIndexRoute,
  getApiCoreDataSourcesIdIndexRoute,
  getApiCoreDataSourcesIndexRoute,
  getApiCoreJobsIdIndexRoute,
  getApiCoreJobsIndexRoute,
  getApiCoreObjectChangesIdIndexRoute,
  getApiCoreObjectChangesIndexRoute,
  getApiCoreObjectTypesIdIndexRoute,
  getApiCoreObjectTypesIndexRoute,
  patchApiCoreDataSourcesIdIndexRoute,
  patchApiCoreDataSourcesIndexRoute,
  postApiCoreBackgroundTasksIdDeleteIndexRoute,
  postApiCoreBackgroundTasksIdEnqueueIndexRoute,
  postApiCoreBackgroundTasksIdRequeueIndexRoute,
  postApiCoreBackgroundTasksIdStopIndexRoute,
  postApiCoreDataSourcesIdSyncIndexRoute,
  postApiCoreDataSourcesIndexRoute,
  putApiCoreDataSourcesIdIndexRoute,
  putApiCoreDataSourcesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const coreHandler = app
  .openapi(getApiCoreBackgroundQueuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCoreBackgroundQueuesNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCoreBackgroundTasksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCoreBackgroundTasksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCoreBackgroundTasksIdDeleteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCoreBackgroundTasksIdEnqueueIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCoreBackgroundTasksIdRequeueIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCoreBackgroundTasksIdStopIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCoreBackgroundWorkersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCoreBackgroundWorkersNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCoreDataFilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCoreDataFilesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCoreDataSourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCoreDataSourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCoreDataSourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiCoreDataSourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCoreDataSourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCoreDataSourcesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCoreDataSourcesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiCoreDataSourcesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCoreDataSourcesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCoreDataSourcesIdSyncIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCoreJobsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCoreJobsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCoreObjectChangesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCoreObjectChangesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCoreObjectTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCoreObjectTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
