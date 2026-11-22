import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportEmailIdRoute,
  getApiTransportEmailIdRoute,
  getApiTransportEmailRoute,
  postApiTransportEmailRoute,
  putApiTransportEmailIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportEmailHandler = app
  .openapi(getApiTransportEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportEmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportEmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportEmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
