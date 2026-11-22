import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportMessageMediaIdRoute,
  getApiTransportMessageMediaIdRoute,
  getApiTransportMessageMediaRoute,
  postApiTransportMessageMediaRoute,
  putApiTransportMessageMediaIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportMessageMediaHandler = app
  .openapi(getApiTransportMessageMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportMessageMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportMessageMediaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportMessageMediaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportMessageMediaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
