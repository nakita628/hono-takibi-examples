import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAsyncSearchIdRoute,
  getAsyncSearchIdRoute,
  getAsyncSearchStatusIdRoute,
  postAsyncSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const asyncSearchHandler = app
  .openapi(getAsyncSearchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAsyncSearchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAsyncSearchStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAsyncSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
