import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportAlertaIdRoute,
  getApiTransportAlertaIdRoute,
  getApiTransportAlertaRoute,
  postApiTransportAlertaRoute,
  putApiTransportAlertaIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportAlertaHandler = app
  .openapi(getApiTransportAlertaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportAlertaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportAlertaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportAlertaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportAlertaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
