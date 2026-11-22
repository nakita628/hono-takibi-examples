import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTargetsIdIndexRoute,
  getTargetsIdIndexRoute,
  getTargetsIndexRoute,
  patchTargetsIdIndexRoute,
  postTargetsIndexRoute,
  putTargetsIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const targetsHandler = app
  .openapi(getTargetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTargetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTargetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTargetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
