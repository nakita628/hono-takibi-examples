import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1TasksIdRoute,
  getApiV1TasksCreateRoute,
  getApiV1TasksIdEditRoute,
  getApiV1TasksIdRoute,
  getApiV1TasksRoute,
  postApiV1TasksBulkRoute,
  postApiV1TasksIdUploadRoute,
  postApiV1TasksRoute,
  postApiV1TasksSortRoute,
  putApiV1TasksIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tasksHandler = app
  .openapi(getApiV1TasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TasksIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TasksCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TasksBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TasksIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TasksSortRoute, (c) => {
    throw new Error('Not implemented')
  })
