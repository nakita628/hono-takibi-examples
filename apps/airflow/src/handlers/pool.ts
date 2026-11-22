import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2PoolsPoolNameRoute,
  getApiV2PoolsPoolNameRoute,
  getApiV2PoolsRoute,
  patchApiV2PoolsPoolNameRoute,
  patchApiV2PoolsRoute,
  postApiV2PoolsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const poolHandler = app
  .openapi(deleteApiV2PoolsPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PoolsPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2PoolsPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2PoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
