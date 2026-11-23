import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKeyValueRedisIdRoute,
  getKeyValueRedisIdConnectionInfoRoute,
  getKeyValueRedisIdRoute,
  getKeyValueRoute,
  patchKeyValueRedisIdRoute,
  postKeyValueRedisIdResumeRoute,
  postKeyValueRedisIdSuspendRoute,
  postKeyValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const keyValueHandler = app
  .openapi(getKeyValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKeyValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKeyValueRedisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchKeyValueRedisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKeyValueRedisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKeyValueRedisIdConnectionInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKeyValueRedisIdSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKeyValueRedisIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
