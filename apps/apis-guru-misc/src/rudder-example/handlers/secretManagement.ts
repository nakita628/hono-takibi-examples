import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecretNameRoute,
  getSecretIndexRoute,
  getSecretNameRoute,
  postSecretIndexRoute,
  putSecretIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const secretManagementHandler = app
  .openapi(getSecretIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecretIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecretIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
