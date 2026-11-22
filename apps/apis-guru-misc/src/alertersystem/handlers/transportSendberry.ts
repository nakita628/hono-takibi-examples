import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportSendberryIdRoute,
  getApiTransportSendberryIdRoute,
  getApiTransportSendberryRoute,
  postApiTransportSendberryRoute,
  putApiTransportSendberryIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportSendberryHandler = app
  .openapi(getApiTransportSendberryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportSendberryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportSendberryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSendberryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportSendberryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
