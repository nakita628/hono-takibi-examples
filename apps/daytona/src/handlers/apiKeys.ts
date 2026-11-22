import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiKeysNameRoute,
  deleteApiKeysUserIdNameRoute,
  getApiKeysCurrentRoute,
  getApiKeysNameRoute,
  getApiKeysRoute,
  postApiKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiKeysHandler = app
  .openapi(getApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKeysCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiKeysNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKeysNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiKeysUserIdNameRoute, (c) => {
    throw new Error('Not implemented')
  })
