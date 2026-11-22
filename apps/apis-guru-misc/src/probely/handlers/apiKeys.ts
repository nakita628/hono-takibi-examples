import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKeysIdIndexRoute,
  deleteTargetsTargetIdKeysIdIndexRoute,
  getKeysIdIndexRoute,
  getKeysIndexRoute,
  getTargetsTargetIdKeysIdIndexRoute,
  getTargetsTargetIdKeysIndexRoute,
  postKeysIndexRoute,
  postTargetsTargetIdKeysIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiKeysHandler = app
  .openapi(getKeysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKeysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKeysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKeysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdKeysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsTargetIdKeysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTargetsTargetIdKeysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdKeysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
