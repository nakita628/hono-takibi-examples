import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1TaskStatusesIdRoute,
  getApiV1TaskStatusesCreateRoute,
  getApiV1TaskStatusesIdEditRoute,
  getApiV1TaskStatusesIdRoute,
  getApiV1TaskStatusesRoute,
  postApiV1TaskStatusesBulkRoute,
  postApiV1TaskStatusesRoute,
  putApiV1TaskStatusesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taskStatusHandler = app
  .openapi(getApiV1TaskStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TaskStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TaskStatusesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TaskStatusesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TaskStatusesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TaskStatusesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TaskStatusesIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TaskStatusesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
