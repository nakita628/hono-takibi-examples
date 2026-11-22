import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportPagerTreeIdRoute,
  getApiTransportPagerTreeIdRoute,
  getApiTransportPagerTreeRoute,
  postApiTransportPagerTreeRoute,
  putApiTransportPagerTreeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportPagerTreeHandler = app
  .openapi(getApiTransportPagerTreeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportPagerTreeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportPagerTreeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportPagerTreeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportPagerTreeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
