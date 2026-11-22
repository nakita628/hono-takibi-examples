import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAuthsIdRoute,
  getApiAuthsIdRoute,
  getApiAuthsRoute,
  patchApiAuthsIdRoute,
  postApiAuthsRoute,
  putApiAuthsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authConfigHandler = app
  .openapi(getApiAuthsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAuthsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAuthsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAuthsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAuthsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAuthsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
