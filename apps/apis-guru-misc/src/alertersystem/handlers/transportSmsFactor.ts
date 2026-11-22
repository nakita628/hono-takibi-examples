import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportSmsFactorIdRoute,
  getApiTransportSmsFactorIdRoute,
  getApiTransportSmsFactorRoute,
  postApiTransportSmsFactorRoute,
  putApiTransportSmsFactorIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportSmsFactorHandler = app
  .openapi(getApiTransportSmsFactorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportSmsFactorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportSmsFactorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSmsFactorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportSmsFactorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
