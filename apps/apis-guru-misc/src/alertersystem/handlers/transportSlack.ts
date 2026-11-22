import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportSlackIdRoute,
  getApiTransportSlackIdRoute,
  getApiTransportSlackRoute,
  postApiTransportSlackRoute,
  putApiTransportSlackIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportSlackHandler = app
  .openapi(getApiTransportSlackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportSlackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportSlackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSlackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportSlackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
