import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDelayDelayRoute,
  getDelayDelayRoute,
  patchDelayDelayRoute,
  postDelayDelayRoute,
  putDelayDelayRoute,
  traceDelayDelayRoute,
} from '../routes'

const app = new OpenAPIHono()

export const delayHandler = app
  .openapi(deleteDelayDelayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDelayDelayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDelayDelayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDelayDelayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDelayDelayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(traceDelayDelayRoute, (c) => {
    throw new Error('Not implemented')
  })
