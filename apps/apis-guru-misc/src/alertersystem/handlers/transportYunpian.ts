import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportYunpianIdRoute,
  getApiTransportYunpianIdRoute,
  getApiTransportYunpianRoute,
  postApiTransportYunpianRoute,
  putApiTransportYunpianIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportYunpianHandler = app
  .openapi(getApiTransportYunpianRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportYunpianRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportYunpianIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportYunpianIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportYunpianIdRoute, (c) => {
    throw new Error('Not implemented')
  })
