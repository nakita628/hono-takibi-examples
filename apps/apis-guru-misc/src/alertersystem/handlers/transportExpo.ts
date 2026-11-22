import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportExpoIdRoute,
  getApiTransportExpoIdRoute,
  getApiTransportExpoRoute,
  postApiTransportExpoRoute,
  putApiTransportExpoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportExpoHandler = app
  .openapi(getApiTransportExpoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportExpoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportExpoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportExpoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportExpoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
