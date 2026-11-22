import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportEsendexIdRoute,
  getApiTransportEsendexIdRoute,
  getApiTransportEsendexRoute,
  postApiTransportEsendexRoute,
  putApiTransportEsendexIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportEsendexHandler = app
  .openapi(getApiTransportEsendexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportEsendexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportEsendexIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportEsendexIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportEsendexIdRoute, (c) => {
    throw new Error('Not implemented')
  })
