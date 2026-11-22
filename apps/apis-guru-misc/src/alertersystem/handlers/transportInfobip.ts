import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportInfobipIdRoute,
  getApiTransportInfobipIdRoute,
  getApiTransportInfobipRoute,
  postApiTransportInfobipRoute,
  putApiTransportInfobipIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportInfobipHandler = app
  .openapi(getApiTransportInfobipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportInfobipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportInfobipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportInfobipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportInfobipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
