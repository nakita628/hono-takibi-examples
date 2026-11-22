import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportGitterIdRoute,
  getApiTransportGitterIdRoute,
  getApiTransportGitterRoute,
  postApiTransportGitterRoute,
  putApiTransportGitterIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportGitterHandler = app
  .openapi(getApiTransportGitterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportGitterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportGitterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportGitterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportGitterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
