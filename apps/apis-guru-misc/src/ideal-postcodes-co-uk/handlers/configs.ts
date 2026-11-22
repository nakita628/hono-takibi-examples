import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKeysKeyConfigsConfigRoute,
  getKeysKeyConfigsConfigRoute,
  getKeysKeyConfigsRoute,
  postKeysKeyConfigsConfigRoute,
  postKeysKeyConfigsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configsHandler = app
  .openapi(getKeysKeyConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKeysKeyConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKeysKeyConfigsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKeysKeyConfigsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKeysKeyConfigsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
