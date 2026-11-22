import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportSmscIdRoute,
  getApiTransportSmscIdRoute,
  getApiTransportSmscRoute,
  postApiTransportSmscRoute,
  putApiTransportSmscIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportSmscHandler = app
  .openapi(getApiTransportSmscRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportSmscRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportSmscIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSmscIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportSmscIdRoute, (c) => {
    throw new Error('Not implemented')
  })
