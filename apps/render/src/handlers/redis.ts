import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRedisRedisIdRoute,
  getRedisRedisIdConnectionInfoRoute,
  getRedisRedisIdRoute,
  getRedisRoute,
  patchRedisRedisIdRoute,
  postRedisRedisIdResumeRoute,
  postRedisRedisIdSuspendRoute,
  postRedisRoute,
} from '../routes'

const app = new OpenAPIHono()

export const redisHandler = app
  .openapi(getRedisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRedisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRedisRedisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRedisRedisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRedisRedisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRedisRedisIdConnectionInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRedisRedisIdSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRedisRedisIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
