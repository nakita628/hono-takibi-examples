import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportMailjetIdRoute,
  getApiTransportMailjetIdRoute,
  getApiTransportMailjetRoute,
  postApiTransportMailjetRoute,
  putApiTransportMailjetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportMailjetHandler = app
  .openapi(getApiTransportMailjetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportMailjetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportMailjetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportMailjetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportMailjetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
