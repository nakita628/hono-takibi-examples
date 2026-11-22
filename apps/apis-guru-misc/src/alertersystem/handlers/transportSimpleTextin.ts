import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportSimpleTextinIdRoute,
  getApiTransportSimpleTextinIdRoute,
  getApiTransportSimpleTextinRoute,
  postApiTransportSimpleTextinRoute,
  putApiTransportSimpleTextinIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportSimpleTextinHandler = app
  .openapi(getApiTransportSimpleTextinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportSimpleTextinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportSimpleTextinIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSimpleTextinIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportSimpleTextinIdRoute, (c) => {
    throw new Error('Not implemented')
  })
