import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportZulipIdRoute,
  getApiTransportZulipIdRoute,
  getApiTransportZulipRoute,
  postApiTransportZulipRoute,
  putApiTransportZulipIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportZulipHandler = app
  .openapi(getApiTransportZulipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportZulipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportZulipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportZulipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportZulipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
