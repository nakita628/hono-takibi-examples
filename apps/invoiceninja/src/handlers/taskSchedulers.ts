import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1TaskSchedulersIdRoute,
  getApiV1TaskSchedulersCreateRoute,
  getApiV1TaskSchedulersIdRoute,
  getApiV1TaskSchedulersRoute,
  postApiV1TaskSchedulersBulkRoute,
  postApiV1TaskSchedulersRoute,
  putApiV1TaskSchedulersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taskSchedulersHandler = app
  .openapi(getApiV1TaskSchedulersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TaskSchedulersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TaskSchedulersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TaskSchedulersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TaskSchedulersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TaskSchedulersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TaskSchedulersBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
