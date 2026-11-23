import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteObjectsDefinitionsDefaultObjectRoute,
  deleteObjectsRecordsDefaultObjectIdRoute,
  getObjectsDefinitionsDefaultObjectRoute,
  getObjectsDefinitionsDefaultRoute,
  getObjectsJobsIdErrorsRoute,
  getObjectsJobsIdRoute,
  getObjectsJobsRoute,
  getObjectsRecordsDefaultObjectIdRoute,
  getObjectsRecordsDefaultObjectRoute,
  patchObjectsRecordsDefaultObjectIdRoute,
  postObjectsBatchDefaultObjectRoute,
  postObjectsDefinitionsDefaultRoute,
  postObjectsJobsIdFilesRoute,
  postObjectsJobsRoute,
  postObjectsMigrationsRoute,
  postObjectsRecordsDefaultObjectRoute,
  putObjectsRecordsDefaultObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const objectsHandler = app
  .openapi(postObjectsBatchDefaultObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObjectsDefinitionsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postObjectsDefinitionsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteObjectsDefinitionsDefaultObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObjectsDefinitionsDefaultObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObjectsJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postObjectsJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObjectsJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObjectsJobsIdErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postObjectsJobsIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postObjectsMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObjectsRecordsDefaultObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postObjectsRecordsDefaultObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteObjectsRecordsDefaultObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObjectsRecordsDefaultObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchObjectsRecordsDefaultObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putObjectsRecordsDefaultObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
