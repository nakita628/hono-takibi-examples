import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3TagIdRoute,
  getApiV3TagIdRoute,
  getApiV3TagRoute,
  postApiV3TagRoute,
  putApiV3TagIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagHandler = app
  .openapi(getApiV3TagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3TagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3TagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3TagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3TagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
