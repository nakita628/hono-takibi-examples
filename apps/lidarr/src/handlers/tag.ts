import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1TagIdRoute,
  getApiV1TagIdRoute,
  getApiV1TagRoute,
  postApiV1TagRoute,
  putApiV1TagIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagHandler = app
  .openapi(getApiV1TagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1TagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TagRoute, (c) => {
    throw new Error('Not implemented')
  })
