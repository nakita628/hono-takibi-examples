import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebResourceIdRoute,
  getWebResourceIdRoute,
  getWebResourceRoute,
  patchWebResourceIdRoute,
  postWebResourceRoute,
  putWebResourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webResourceHandler = app
  .openapi(getWebResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWebResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
